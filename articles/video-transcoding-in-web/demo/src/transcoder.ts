// transcoder.ts
export class Transcoder extends EventTarget {
    private libav: any;

    private BufferStream = class extends ReadableStream<{chunk: any, metadata: any}> {
        private buf: ({chunk: any, metadata: any} | null)[] = [];
        private res: ((value: unknown) => void) | null = null;
        private closed = false;

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

        push(next: {chunk: any, metadata: any} | null): void {
            if (this.closed) return;
            this.buf.push(next);
            if (this.res) {
                const res = this.res;
                this.res = null;
                res(undefined);
            }
        }

        close(): void {
            this.closed = true;
            if (this.res) {
                const res = this.res;
                this.res = null;
                res(undefined);
            }
        }
    };

    constructor({libav}: {libav: any}) {
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

    private async setupStreams({istreams, vc, ac, width, height}: {
        istreams: any[],
        vc: string,
        ac: string,
        width?: number,
        height?: number
    }): Promise<any> {
        const iToO: number[] = [];
        const decoders: any[] = [];
        const decoderStreams: any[] = [];
        const packetToChunks: any[] = [];
        const encoders: any[] = [];
        const encoderStreams: InstanceType<Transcoder['BufferStream']>[] = [];
        const encoderReaders: any[] = [];
        const chunkToPackets: any[] = [];
        const ostreams: any[] = [];

        for (let streamI = 0; streamI < istreams.length; streamI++) {
            const istream = istreams[streamI];
            iToO.push(-1);

            const tools = await this.getCodecTools(istream.codec_type);
            if (!tools) continue;

            const config = await tools.streamToConfig(this.libav, istream);
            let supported;
            try {
                supported = await tools.Decoder.isConfigSupported(config);
            } catch (ex) {
                console.error(ex);
            }

            if (!supported || !supported.supported) continue;

            iToO[streamI] = decoders.length;
            const encConfig: any = {
                codec: istream.codec_type === this.libav.AVMEDIA_TYPE_VIDEO ? vc : ac,
                width: !width ? config.codedWidth : width,
                height: !height ? config.codedHeight : height
            };

            if (istream.codec_type === this.libav.AVMEDIA_TYPE_AUDIO) {
                encConfig.numberOfChannels = config.numberOfChannels;
                encConfig.sampleRate = config.sampleRate;
            }

            const decoderStream = new this.BufferStream();
            const decoder = new tools.Decoder({
                output: (frame: any) => {
                    try {
                        decoderStream.push(frame);
                    } catch (e) {
                        console.error('Decoder output error:', e);
                    }
                },
                error: (error: string) => {
                    console.error(`Decoder error: ${error}`);
                    this.dispatchEvent(new CustomEvent('error', {detail: {error}}));
                    decoderStream.push(null);
                }
            });
            decoder.configure(config);

            const encoderStream = new this.BufferStream();
            const encoder = new tools.Encoder({
                output: (chunk: any, metadata: any) => {
                    try {
                        encoderStream.push({chunk, metadata});
                    } catch (e) {
                        console.error('Encoder output error:', e);
                        this.dispatchEvent(new CustomEvent('error', {detail: {error: e}}));
                    }
                },
                error: (error: string) => {
                    console.error(`Encoder error: ${error}`);
                    this.dispatchEvent(new CustomEvent('error', {detail: {error}}));
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

    private async demux({ifc, rpkt, iToO, istreams, decoders, decoderStreams, packetToChunks}: {
        ifc: any,
        rpkt: any,
        iToO: number[],
        istreams: any[],
        decoders: any[],
        decoderStreams: any[],
        packetToChunks: any[]
    }): Promise<void> {
        while (true) {
            const [res, packets] = await this.libav.ff_read_frame_multi(ifc, rpkt, {limit: 1});
            if (res !== -this.libav.EAGAIN && res !== 0 && res !== this.libav.AVERROR_EOF) {
                console.error('Demux error:', res);
                break;
            }

            for (const idx in packets) {
                const streamIdx = parseInt(idx);
                if (iToO[streamIdx] < 0) continue;
                const o = iToO[streamIdx];
                const dec = decoders[o];
                const p2c = packetToChunks[o];
                for (const packet of packets[idx]) {
                    const chunk = p2c(packet, istreams[streamIdx]);
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

    private getScaledWidthHeight({originalWidth, originalHeight, targetWidth, targetHeight}: {
        originalWidth: number,
        originalHeight: number,
        targetWidth: number,
        targetHeight: number
    }): {scaledWidth: number, scaledHeight: number} {
        const originalAspectRatio = originalWidth / originalHeight;
        const targetAspectRatio = targetWidth / targetHeight;
        let scaledWidth, scaledHeight;

        if (originalAspectRatio > targetAspectRatio) {
            scaledWidth = targetWidth;
            scaledHeight = targetWidth / originalAspectRatio;
        } else {
            scaledHeight = targetHeight;
            scaledWidth = targetHeight * originalAspectRatio;
        }

        return {scaledWidth, scaledHeight};
    }

    private async encode({
                             decoders,
                             decoderStreams,
                             encoders,
                             encoderStreams,
                             onProgress,
                             targetWidth,
                             targetHeight,
                             keepAspectRatio
                         }: {
        decoders: any[],
        decoderStreams: any[],
        encoders: any[],
        encoderStreams: InstanceType<Transcoder['BufferStream']>[],
        onProgress?: (timestampSeconds: number) => void,
        targetWidth?: number,
        targetHeight?: number,
        keepAspectRatio: boolean
    }): Promise<void> {
        let canvas: OffscreenCanvas | null = null;
        let ctx: OffscreenCanvasRenderingContext2D | null = null;

        if (keepAspectRatio && targetWidth && targetHeight) {
            canvas = new OffscreenCanvas(targetWidth, targetHeight);
            ctx = canvas.getContext('2d')!;
        }

        const encodePromises = decoders.map(async (_, i) => {
            const decRdr = decoderStreams[i].getReader();
            const enc = encoders[i];
            const encoderStream = encoderStreams[i];

            while (true) {
                const {done, value} = await decRdr.read();
                if (done) break;

                let frameToEncode = value;

                if (keepAspectRatio && value instanceof VideoFrame && canvas && ctx && targetWidth && targetHeight) {
                    const {scaledWidth, scaledHeight} = this.getScaledWidthHeight({
                        originalWidth: value.codedWidth,
                        originalHeight: value.codedHeight,
                        targetWidth,
                        targetHeight
                    });

                    const offsetX = (targetWidth - scaledWidth) / 2;
                    const offsetY = (targetHeight - scaledHeight) / 2;

                    ctx.clearRect(0, 0, targetWidth, targetHeight);
                    ctx.drawImage(value, offsetX, offsetY, scaledWidth, scaledHeight);

                    const frameInit: VideoFrameInit = {
                        timestamp: value.timestamp || 0,
                        duration: value.duration || undefined,
                        visibleRect: {
                            x: 0,
                            y: 0,
                            width: targetWidth,
                            height: targetHeight
                        }
                    };

                    const newFrame = new VideoFrame(canvas, frameInit);
                    value.close();
                    frameToEncode = newFrame;
                }

                enc.encode(frameToEncode);
                frameToEncode.close();

                if (onProgress && value.timestamp) {
                    onProgress(value.timestamp / 1000000);
                }
            }

            await enc.flush();
            enc.close();
            encoderStream.push(null);
        });

        await Promise.all(encodePromises);
    }

    private async getStarterPackets({encoderReaders, chunkToPackets, ostreams}: {
        encoderReaders: any[],
        chunkToPackets: any[],
        ostreams: any[]
    }): Promise<any[]> {
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

    private async mux({starterPackets, ostreams, encoderReaders, chunkToPackets, outputFile, wpkt}: {
        starterPackets: any[],
        ostreams: any[],
        encoderReaders: any[],
        chunkToPackets: any[],
        outputFile: string,
        wpkt: any
    }): Promise<{ofc: any, pb: any, writePromise: Promise<void>}> {
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

    private async cleanup({ifc, ofc, pb, rpkt, wpkt}: {
        ifc: any,
        ofc: any,
        pb: any,
        rpkt: any,
        wpkt: any
    }): Promise<void> {
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

    async transcode(file: Blob, options: {
        containerType: string,
        vc: string,
        ac: string,
        width?: number,
        height?: number,
        keepAspectRatio: boolean
    }): Promise<Uint8Array> {
        const rand_id = Math.random().toString(36).substring(2, 11);
        const input_libav = `input_${rand_id}`;
        const output_libav = `output_${rand_id}.${options.containerType}`;

        let totalDuration = 0;

        try {
            let processedDuration = 0;

            const dispatchProgress = (stage: 'start' | 'processing' | 'complete' | 'error', additionalData: Partial<{
                percent: number,
                processedDuration: number,
                totalDuration: number,
                error?: string
            }> = {}) => {
                this.dispatchEvent(new CustomEvent('progress', {
                    detail: {
                        stage,
                        percent: stage === 'start' ? 0 :
                            stage === 'complete' ? 100 :
                                Math.min(100, (processedDuration / totalDuration) * 100),
                        processedDuration: stage === 'start' ? 0 : processedDuration,
                        totalDuration,
                        ...additionalData
                    }
                }));
            };

            await this.libav.mkreadaheadfile(input_libav, file);
            const [ifc, istreams] = await this.libav.ff_init_demuxer_file(input_libav);

            totalDuration = istreams.reduce((max: number, stream: any) => {
                if (!stream || stream.duration === undefined) return max;
                return Math.max(max, stream.duration);
            }, 0);

            dispatchProgress('start', {totalDuration});

            const [rpkt, wpkt] = await Promise.all([
                this.libav.av_packet_alloc(),
                this.libav.av_packet_alloc()
            ]);

            const updateProgress = (timestampSeconds: number) => {
                processedDuration = Math.max(processedDuration, timestampSeconds);
                dispatchProgress('processing');
            };

            const streams = await this.setupStreams({
                istreams,
                vc: options.vc,
                ac: options.ac,
                width: options.width,
                height: options.height
            });

            if (!streams.decoders.length) throw new Error("No decodable streams found!");

            const demuxPromise = this.demux({
                ifc, rpkt,
                iToO: streams.iToO,
                istreams,
                decoders: streams.decoders,
                decoderStreams: streams.decoderStreams,
                packetToChunks: streams.packetToChunks
            });

            const encodePromise = this.encode({
                decoders: streams.decoders,
                decoderStreams: streams.decoderStreams,
                encoders: streams.encoders,
                encoderStreams: streams.encoderStreams,
                targetWidth: options.width,
                targetHeight: options.height,
                keepAspectRatio: options.keepAspectRatio,
                onProgress: updateProgress
            });

            const starterPackets = await this.getStarterPackets({
                encoderReaders: streams.encoderReaders,
                chunkToPackets: streams.chunkToPackets,
                ostreams: streams.ostreams
            });

            const {ofc, pb, writePromise} = await this.mux({
                starterPackets: starterPackets,
                ostreams: streams.ostreams,
                encoderReaders: streams.encoderReaders,
                chunkToPackets: streams.chunkToPackets,
                outputFile: output_libav,
                wpkt
            });

            await Promise.all([demuxPromise, encodePromise]);
            await writePromise;
            await this.cleanup({ifc, ofc, pb, rpkt, wpkt});

            const result = await this.libav.readFile(output_libav);

            dispatchProgress('complete');
            return result;

        } catch (error: any) {
            this.dispatchEvent(new CustomEvent('progress', {
                detail: {
                    stage: 'error',
                    error: error.message,
                    percent: 0,
                    processedDuration: 0,
                    totalDuration: totalDuration || 0
                }
            }));
            console.error("Transcoding error:", error);
            throw error;
        } finally {
            await this.libav.unlink(input_libav).catch(() => {});
            await this.libav.unlink(output_libav).catch(() => {});
        }
    }
}