export class Transcoder extends EventTarget {
    private libav: any;

    private BufferStream = class<T> extends ReadableStream<T> {
        private buf: (T | null)[] = [];
        private res: (() => void) | null = null;
        private closed = false;

        constructor() {
            super({
                pull: async (controller) => {
                    while (!this.buf.length && !this.closed) {
                        await new Promise<void>(res => this.res = res);
                    }

                    if (this.closed) {
                        controller.close();
                        return;
                    }

                    const next = this.buf.shift();
                    if (next !== null) controller.enqueue(next as T);
                    else controller.close();
                }
            });
        }

        push(next: T | null) {
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

    constructor({ libav }: { libav: any }) {
        super();
        this.libav = libav;
    }

    private async getCodecTools(codecType: number): Promise<any> {
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

    private async setupStreams(params: any) {
        const { istreams, vc, ac, width, height } = params;
        const iToO: number[] = [];
        const decoders: any[] = [];
        const decoderStreams: ReadableStream<any>[] = [];
        const packetToChunks: any[] = [];
        const encoders: any[] = [];
        const encoderStreams: ReadableStream<any>[] = [];
        const encoderReaders: ReadableStreamDefaultReader<any>[] = [];
        const chunkToPackets: any[] = [];
        const ostreams: any[] = [];

        for (let streamI = 0; streamI < istreams.length; streamI++) {
            const istream = istreams[streamI];
            iToO.push(-1);

            const tools = await this.getCodecTools(istream.codec_type);
            if (!tools) continue;

            const config = await tools.streamToConfig(this.libav, istream);
            let supported: any;
            try {
                supported = await tools.Decoder.isConfigSupported(config);
            } catch (ex) {}

            if (!supported || !supported.supported) continue;

            iToO[streamI] = decoders.length;
            const encConfig: any = {
                codec: istream.codec_type === this.libav.AVMEDIA_TYPE_VIDEO ? vc : ac,
                width: !width ? config.codedWidth : width,
                height: !height ? config.codedHeight : height,
                numberOfChannels: config.numberOfChannels,
                sampleRate: config.sampleRate
            };

            const decoderStream = new this.BufferStream<any>();
            const decoder = new tools.Decoder({
                output: (frame: any) => decoderStream.push(frame),
                error: (error: any) => {
                    console.error(`Decoder error: ${error}`);
                    this.dispatchEvent(new CustomEvent('error', { detail: { error } }));
                    decoderStream.push(null);
                }
            });
            decoder.configure(config);

            const encoderStream = new this.BufferStream<any>();
            const encoder = new tools.Encoder({
                output: (chunk: any, metadata: any) => encoderStream.push({ chunk, metadata }),
                error: (error: any) => {
                    console.error(`Encoder error: ${error}`);
                    this.dispatchEvent(new CustomEvent('error', { detail: { error } }));
                    encoderStream.push(null);
                }
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

    private async demux(params: any) {
        const { ifc, rpkt, iToO, istreams, decoders, decoderStreams, packetToChunks } = params;

        while (true) {
            const [res, packets] = await this.libav.ff_read_frame_multi(ifc, rpkt, { limit: 1 });
            if (res !== -this.libav.EAGAIN && res !== 0 && res !== this.libav.AVERROR_EOF) break;

            for (const idx in packets) {
                if (iToO[idx] < 0) continue;
                const o = iToO[idx];
                const dec = decoders[o];
                const p2c = packetToChunks[o];
                for (const packet of packets[idx]) {
                    const chunk = p2c(packet, istreams[idx]);
                    while (dec.decodeQueueSize) {
                        await new Promise(res => dec.addEventListener("dequeue", res, { once: true }));
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

    private async encode(params: any) {
        const { decoders, decoderStreams, encoders, encoderStreams, onProgress } = params;

        const encodePromises = decoders.map(async (_: any, i: number) => {
            const decRdr = decoderStreams[i].getReader();
            const enc = encoders[i];

            while (true) {
                const { done, value } = await decRdr.read();
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

    private async getStarterPackets(params: any) {
        const { encoderReaders, chunkToPackets, ostreams } = params;
        const starterPackets: any[] = [];
        for (let i = 0; i < encoderReaders.length; i++) {
            try {
                const { done, value } = await encoderReaders[i].read();
                if (done) continue;
                starterPackets.push(await chunkToPackets[i](this.libav, value.chunk, value.metadata, ostreams[i], i));
            } catch (e) {
                console.error('Starter packet error:', e);
            }
        }
        return starterPackets;
    }

    private async mux(params: any) {
        const { starterPackets, ostreams, encoderReaders, chunkToPackets, outputFile, wpkt } = params;
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
                    const { done, value } = await encRdr.read();
                    if (done) break;

                    writePromise = writePromise.then(async () => {
                        const packet = await chunkToPacket(this.libav, value.chunk, value.metadata, ostream, i);
                        await this.libav.ff_write_multi(ofc, wpkt, [packet]);
                    });
                }
            })();
        }

        return { ofc, pb, writePromise };
    }

    private async cleanup(params: any) {
        const { ifc, ofc, pb, rpkt, wpkt } = params;
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

    async transcode(file: File | Blob, options: { containerType: string, vc: string, ac: string, width?: number, height?: number }) {
        const rand_id = Math.random().toString(36).substr(2, 9);
        const input_libav = `input_${rand_id}`;
        const output_libav = `output_${rand_id}.${options.containerType}`;

        try {
            let processedDuration = 0;
            let totalDuration = 0;

            this.dispatchEvent(new CustomEvent('progress-init', { detail: { totalDuration } }));

            const dispatchProgress = () => {
                const percent = totalDuration > 0
                    ? Math.min(100, (processedDuration / totalDuration) * 100)
                    : 0;
                this.dispatchEvent(new CustomEvent('progress', { detail: { percent, processedDuration } }));
            };

            await this.libav.mkreadaheadfile(input_libav, file);
            const [ifc, istreams] = await this.libav.ff_init_demuxer_file(input_libav);

            totalDuration = istreams.reduce((max: number, stream: any) => {
                if (!stream || stream.duration === undefined) return max;
                return Math.max(max, stream.duration);
            }, 0);

            const [rpkt, wpkt] = await Promise.all([
                this.libav.av_packet_alloc(),
                this.libav.av_packet_alloc()
            ]);

            const updateProgress = (timestampSeconds: number) => {
                processedDuration = Math.max(processedDuration, timestampSeconds);
                dispatchProgress();
            };

            const streams = await this.setupStreams({ ...options, istreams });
            if (!streams.decoders.length) throw new Error("No decodable streams found!");

            const demuxPromise = this.demux({ ifc, rpkt, iToO: streams.iToO, istreams, decoders: streams.decoders, decoderStreams: streams.decoderStreams, packetToChunks: streams.packetToChunks });

            const encodePromise = this.encode({ decoders: streams.decoders, decoderStreams: streams.decoderStreams, encoders: streams.encoders, encoderStreams: streams.encoderStreams, onProgress: updateProgress });

            const starterPackets = await this.getStarterPackets({ encoderReaders: streams.encoderReaders, chunkToPackets: streams.chunkToPackets, ostreams: streams.ostreams });

            const { ofc, pb, writePromise } = await this.mux({ starterPackets, ostreams: streams.ostreams, encoderReaders: streams.encoderReaders, chunkToPackets: streams.chunkToPackets, outputFile: output_libav, wpkt });

            await Promise.all([demuxPromise, encodePromise]);
            await writePromise;
            await this.cleanup({ ifc, ofc, pb, rpkt, wpkt });

            const result = await this.libav.readFile(output_libav);

            processedDuration = totalDuration;
            dispatchProgress();

            return result;

        } catch (error) {
            console.error("Transcoding error:", error);
            throw error;
        } finally {
            await this.libav.unlink(input_libav).catch(() => {});
            await this.libav.unlink(output_libav).catch(() => {});
        }
    }
}
