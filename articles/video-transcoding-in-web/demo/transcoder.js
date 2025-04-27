export class Transcoder extends EventTarget {
    #BufferStream = class extends ReadableStream {
        buf = [];
        res = null;
        closed = false;

        constructor() {
            super({
                pull: async (controller) => {
                    while (!this.buf.length && !this.closed) {
                        await new Promise(res => this.res = res);
                    }
                    if (this.closed) {
                        controller.close();
                        return;
                    }
                    const next = this.buf.shift();
                    if (next !== null) controller.enqueue(next);
                    else controller.close();
                }
            });
        }

        push(next) {
            if (this.closed) return;
            this.buf.push(next);
            if (this.res) {
                const res = this.res;
                this.res = null;
                res();
            }
        }

        close() {
            this.closed = true;
            if (this.res) {
                const res = this.res;
                this.res = null;
                res();
            }
        }
    };

    constructor({libav}) {
        super();
        this.libav = libav;
    }

    async #getCodecTools(codecType) {
        return {
            [this.libav.AVMEDIA_TYPE_VIDEO]: {
                streamToConfig: LibAVWebCodecsBridge.videoStreamToConfig,
                Decoder: VideoDecoder,
                packetToChunk: LibAVWebCodecsBridge.packetToEncodedVideoChunk,
                configToStream: LibAVWebCodecsBridge.configToVideoStream,
                Encoder: VideoEncoder,
                chunkToPacket: LibAVWebCodecsBridge.encodedVideoChunkToPacket
            },
            [this.libav.AVMEDIA_TYPE_AUDIO]: {
                streamToConfig: LibAVWebCodecsBridge.audioStreamToConfig,
                Decoder: AudioDecoder,
                packetToChunk: LibAVWebCodecsBridge.packetToEncodedAudioChunk,
                configToStream: LibAVWebCodecsBridge.configToAudioStream,
                Encoder: AudioEncoder,
                chunkToPacket: LibAVWebCodecsBridge.encodedAudioChunkToPacket
            }
        }[codecType];
    }

    async #setupStreams({istreams, vc, ac, width, height}) {
        const iToO = [];
        const decoders = [];
        const decoderStreams = [];
        const packetToChunks = [];
        const encoders = [];
        const encoderStreams = [];
        const encoderReaders = [];
        const chunkToPackets = [];
        const ostreams = [];

        for (let streamI = 0; streamI < istreams.length; streamI++) {
            const istream = istreams[streamI];
            iToO.push(-1);

            const tools = await this.#getCodecTools(istream.codec_type);
            if (!tools) continue;

            const config = await tools.streamToConfig(this.libav, istream);
            let supported;
            try {
                supported = await tools.Decoder.isConfigSupported(config);
            } catch (ex) {}

            if (!supported || !supported.supported) continue;

            iToO[streamI] = decoders.length;
            const encConfig = {
                codec: istream.codec_type === this.libav.AVMEDIA_TYPE_VIDEO ? vc : ac,
                width: width,
                height: height,
                numberOfChannels: config.numberOfChannels,
                sampleRate: config.sampleRate
            };

            const decoderStream = new this.#BufferStream();
            const decoder = new tools.Decoder({
                output: frame => {
                    try {
                        decoderStream.push(frame);
                    } catch (e) {
                        console.error('Decoder output error:', e);
                    }
                },
                error: error => console.error(`Decoder error: ${error}`)
            });
            decoder.configure(config);

            const encoderStream = new this.#BufferStream();
            const encoder = new tools.Encoder({
                output: (chunk, metadata) => {
                    try {
                        encoderStream.push({chunk, metadata});
                    } catch (e) {
                        console.error('Encoder output error:', e);
                    }
                },
                error: error => console.error(`Encoder error: ${error}`)
            });
            encoder.configure(encConfig);

            decoders.push(decoder);
            decoderStreams.push(decoderStream);
            packetToChunks.push(tools.packetToChunk);
            encoders.push(encoder);
            encoderStreams.push(encoderStream);
            encoderReaders.push(encoderStream.getReader());
            chunkToPackets.push(tools.chunkToPacket);
            ostreams.push(await tools.configToStream(this.libav, encConfig));
        }

        return {
            iToO, decoders, decoderStreams, packetToChunks,
            encoders, encoderStreams, encoderReaders, chunkToPackets, ostreams
        };
    }

    async #demux({ifc, rpkt, iToO, istreams, decoders, decoderStreams, packetToChunks}) {
        while (true) {
            const [res, packets] = await this.libav.ff_read_frame_multi(ifc, rpkt, {limit: 1});
            if (res !== -this.libav.EAGAIN && res !== 0 && res !== this.libav.AVERROR_EOF) {
                console.error('Demux error:', res);
                break;
            }

            for (const idx in packets) {
                if (iToO[idx] < 0) continue;
                const o = iToO[idx];
                const dec = decoders[o];
                const p2c = packetToChunks[o];
                for (const packet of packets[idx]) {
                    const chunk = p2c(packet, istreams[idx]);
                    while (dec.decodeQueueSize) {
                        await new Promise(res => {
                            dec.addEventListener("dequeue", res, {once: true});
                        });
                    }
                    dec.decode(chunk);
                }
            }

            if (res === this.libav.AVERROR_EOF) break;
        }

        for (let i = 0; i < decoders.length; i++) {
            await decoders[i].flush();
            decoders[i].close();
            decoderStreams[i].push(null);
        }
    }

    async #encode({decoders, decoderStreams, encoders, encoderStreams, onProgress}) {
        const encodePromises = decoders.map(async (_, i) => {
            const decRdr = decoderStreams[i].getReader();
            const enc = encoders[i];

            while (true) {
                const {done, value} = await decRdr.read();
                if (done) break;
                enc.encode(value);
                value.close();
                if (onProgress && value.timestamp) {
                    onProgress(value.timestamp / 1000000);
                }
            }

            await enc.flush();
            enc.close();
            encoderStreams[i].push(null);
        });

        return Promise.all(encodePromises);
    }

    async #getStarterPackets({encoderReaders, chunkToPackets, ostreams}) {
        const starterPackets = [];
        for (let i = 0; i < encoderReaders.length; i++) {
            try {
                const {done, value} = await encoderReaders[i].read();
                if (done) continue;
                starterPackets.push(await chunkToPackets[i](
                    this.libav, value.chunk, value.metadata, ostreams[i], i));
            } catch (e) {
                console.error('Starter packet error:', e);
            }
        }
        return starterPackets;
    }

    async #mux({starterPackets, ostreams, encoderReaders, chunkToPackets, outputFile, wpkt}) {
        const [ofc, , pb] = await this.libav.ff_init_muxer({
            filename: outputFile,
            open: true,
            codecpars: true
        }, ostreams);
        await this.libav.avformat_write_header(ofc, 0);
        await this.libav.ff_write_multi(ofc, wpkt, starterPackets);

        let writePromise = Promise.resolve();

        for (let i = 0; i < encoderReaders.length; i++) {
            (async () => {
                const encRdr = encoderReaders[i];
                const chunkToPacket = chunkToPackets[i];
                const ostream = ostreams[i];

                while (true) {
                    const {done, value} = await encRdr.read();
                    if (done) break;

                    writePromise = writePromise.then(async () => {
                        const packet = await chunkToPacket(
                            this.libav, value.chunk, value.metadata, ostream, i);
                        await this.libav.ff_write_multi(ofc, wpkt, [packet]);
                    });
                }
            })();
        }

        return {ofc, pb, writePromise};
    }

    async #cleanup({ifc, ofc, pb, rpkt, wpkt}) {
        try {
            await this.libav.av_write_trailer(ofc);
            await this.libav.avformat_close_input_js(ifc);
            await this.libav.ff_free_muxer(ofc, pb);
            await this.libav.av_packet_free(rpkt);
            await this.libav.av_packet_free(wpkt);
        } catch (e) {
            console.error('Cleanup error:', e);
        }
    }

    async transcode(file, {containerType, vc, ac, width, height}) {
        const rand_id = Math.random().toString(36).substr(2, 9);
        const input_libav = `input_${rand_id}`;
        const output_libav = `output_${rand_id}.${containerType}`;

        try {
            await this.libav.mkreadaheadfile(input_libav, file);
            const [ifc, istreams] = await this.libav.ff_init_demuxer_file(input_libav);

            const totalDuration = istreams.reduce((max, stream) => {
                if (!stream || stream.duration === undefined) return max;
                return Math.max(max, stream.duration);
            }, 0);

            this.dispatchEvent(new CustomEvent('progress', {
                detail: { stage: 'start', totalDuration }
            }));

            const [rpkt, wpkt] = await Promise.all([
                this.libav.av_packet_alloc(),
                this.libav.av_packet_alloc()
            ]);

            let processedDuration = 0;
            const updateProgress = (timestampSeconds) => {
                processedDuration = Math.max(processedDuration, timestampSeconds);
                const percent = totalDuration > 0
                    ? Math.min(100, (processedDuration / totalDuration) * 100)
                    : 0;

                this.dispatchEvent(new CustomEvent('progress', {
                    detail: {
                        stage: 'processing',
                        percent: percent.toFixed(1),
                        processedDuration,
                        totalDuration
                    }
                }));
            };

            const streams = await this.#setupStreams({istreams, vc, ac, width, height});
            if (!streams.decoders.length) throw new Error("No decodable streams found!");

            const demuxPromise = this.#demux({
                ifc, rpkt,
                iToO: streams.iToO,
                istreams,
                decoders: streams.decoders,
                decoderStreams: streams.decoderStreams,
                packetToChunks: streams.packetToChunks
            });

            const encodePromise = this.#encode({
                decoders: streams.decoders,
                decoderStreams: streams.decoderStreams,
                encoders: streams.encoders,
                encoderStreams: streams.encoderStreams,
                onProgress: updateProgress
            });

            const starterPackets = await this.#getStarterPackets({
                encoderReaders: streams.encoderReaders,
                chunkToPackets: streams.chunkToPackets,
                ostreams: streams.ostreams
            });

            const {ofc, pb, writePromise} = await this.#mux({
                starterPackets: starterPackets,
                ostreams: streams.ostreams,
                encoderReaders: streams.encoderReaders,
                chunkToPackets: streams.chunkToPackets,
                outputFile: output_libav,
                wpkt
            });

            await Promise.all([demuxPromise, encodePromise]);
            await writePromise;
            await this.#cleanup({ifc, ofc, pb, rpkt, wpkt});

            const result = await this.libav.readFile(output_libav);

            this.dispatchEvent(new CustomEvent('progress', {
                detail: { stage: 'complete', percent: 100 }
            }));

            return result;
        } catch (error) {
            this.dispatchEvent(new CustomEvent('progress', {
                detail: { stage: 'error', error: error.message }
            }));
            console.error("Transcoding error:", error);
            throw error;
        } finally {
            await this.libav.unlink(input_libav).catch(() => {});
            await this.libav.unlink(output_libav).catch(() => {});
        }
    }
}