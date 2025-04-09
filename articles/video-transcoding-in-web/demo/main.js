const formats = {
    "webm": ["vp09.00.10.08.03.1.1.1.0", "opus", "video/webm"],
    "mp4": ["hvc1.1.6.L123.B0", "mp4a.40.2", "video/mp4"],
    "mkv": ["avc1.42403e", "mp4a.40.2", "video/x-matroska"],
    "avi": ["mpeg4", "pcm_s16le", "video/x-msvideo"],
    "mov": ["avc1.42403e", "mp4a.40.2", "video/quicktime"],
    "flv": ["avc1.42403e", "mp4a.40.2", "video/x-flv"],
    "ts": ["avc1.42403e", "mp4a.40.2", "video/mp2t"],
};

class Transcoder {
    #BufferStream = class extends ReadableStream {
        buf = [];
        res = null;

        constructor() {
            super({
                pull: async (controller) => {
                    while (!this.buf.length) {
                        await new Promise(res => this.res = res);
                    }
                    const next = this.buf.shift();
                    if (next !== null) controller.enqueue(next);
                    else controller.close();
                }
            });
        }

        push(next) {
            this.buf.push(next);
            if (this.res) {
                const res = this.res;
                this.res = null;
                res();
            }
        }
    };

    constructor({ file, containerType, vc, ac, width, height, libav }) {
        this.file = file;
        this.containerType = containerType;
        this.vc = vc;
        this.ac = ac;
        this.width = width;
        this.height = height;
        this.libav = libav;
        this.outputFile = `output.${containerType}`;
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

    async #setupStreams() {
        this.iToO = [];
        this.decoders = [];
        this.decoderStreams = [];
        this.packetToChunks = [];
        this.encoders = [];
        this.encoderStreams = [];
        this.encoderReaders = [];
        this.chunkToPackets = [];
        this.ostreams = [];

        for (let streamI = 0; streamI < this.istreams.length; streamI++) {
            const istream = this.istreams[streamI];
            this.iToO.push(-1);

            const tools = await this.#getCodecTools(istream.codec_type);
            if (!tools) continue;

            const config = await tools.streamToConfig(this.libav, istream);
            let supported;
            try {
                supported = await tools.Decoder.isConfigSupported(config);
            } catch (ex) {}

            if (!supported || !supported.supported) continue;

            this.iToO[streamI] = this.decoders.length;
            const encConfig = {
                codec: istream.codec_type === this.libav.AVMEDIA_TYPE_VIDEO ? this.vc : this.ac,
                width: this.width,
                height: this.height,
                numberOfChannels: config.numberOfChannels,
                sampleRate: config.sampleRate
            };

            const decoderStream = new this.#BufferStream();
            const decoder = new tools.Decoder({
                output: frame => {
                    console.count("frame decoded");
                    decoderStream.push(frame);
                },
                error: error => alert(`Decoder ${JSON.stringify(config)}:\n${error}`)
            });
            decoder.configure(config);

            const encoderStream = new this.#BufferStream();
            const encoder = new tools.Encoder({
                output: (chunk, metadata) => {
                    console.count("chunk encoded");
                    encoderStream.push({ chunk, metadata });
                },
                error: error => alert(`Encoder ${JSON.stringify(encConfig)}:\n${error}`)
            });
            encoder.configure(encConfig);

            this.decoders.push(decoder);
            this.decoderStreams.push(decoderStream);
            this.packetToChunks.push(tools.packetToChunk);
            this.encoders.push(encoder);
            this.encoderStreams.push(encoderStream);
            this.encoderReaders.push(encoderStream.getReader());
            this.chunkToPackets.push(tools.chunkToPacket);
            this.ostreams.push(await tools.configToStream(this.libav, encConfig));
        }

        if (!this.decoders.length) {
            throw new Error("No decodable streams found!");
        }
    }

    async #demux() {
        while (true) {
            const [res, packets] = await this.libav.ff_read_frame_multi(this.ifc, this.rpkt, { limit: 1 });
            if (res !== -this.libav.EAGAIN && res !== 0 && res !== this.libav.AVERROR_EOF) break;

            for (const idx in packets) {
                if (this.iToO[idx] < 0) continue;
                const o = this.iToO[idx];
                const dec = this.decoders[o];
                const p2c = this.packetToChunks[o];
                for (const packet of packets[idx]) {
                    const chunk = p2c(packet, this.istreams[idx]);
                    while (dec.decodeQueueSize) {
                        await new Promise(res => {
                            dec.addEventListener("dequeue", res, { once: true });
                        });
                    }
                    dec.decode(chunk);
                }
            }

            if (res === this.libav.AVERROR_EOF) break;
        }

        for (let i = 0; i < this.decoders.length; i++) {
            await this.decoders[i].flush();
            this.decoders[i].close();
            this.decoderStreams[i].push(null);
        }
    }

    async #encode() {
        const encodePromises = this.decoders.map(async (_, i) => {
            const decRdr = this.decoderStreams[i].getReader();
            const enc = this.encoders[i];

            while (true) {
                const { done, value } = await decRdr.read();
                if (done) break;
                // await new Promise(resolve => setTimeout(resolve, 500));
                enc.encode(value);
                value.close();
            }

            await enc.flush();
            enc.close();
            this.encoderStreams[i].push(null);
        });

        return Promise.all(encodePromises);
    }

    async #getStarterPackets() {
        const starterPackets = [];
        for (let i = 0; i < this.encoderReaders.length; i++) {
            const { done, value } = await this.encoderReaders[i].read();
            if (done) continue;
            starterPackets.push(await this.chunkToPackets[i](
                this.libav, value.chunk, value.metadata, this.ostreams[i], i));
        }
        return starterPackets;
    }

    async #mux(starterPackets) {
        [this.ofc, , this.pb] = await this.libav.ff_init_muxer({
            filename: this.outputFile,
            open: true,
            codecpars: true
        }, this.ostreams);
        await this.libav.avformat_write_header(this.ofc, 0);
        await this.libav.ff_write_multi(this.ofc, this.wpkt, starterPackets);

        let writePromise = Promise.resolve();
        for (let i = 0; i < this.encoderReaders.length; i++) {
            (async () => {
                const encRdr = this.encoderReaders[i];
                const chunkToPacket = this.chunkToPackets[i];
                const ostream = this.ostreams[i];
                while (true) {
                    const { done, value } = await encRdr.read();
                    if (done) break;
                    writePromise = writePromise.then(async () => {
                        const packet = await chunkToPacket(
                            this.libav, value.chunk, value.metadata, ostream, i);
                        await this.libav.ff_write_multi(this.ofc, this.wpkt, [packet]);
                    });
                }
            })();
        }
        return writePromise;
    }

    async #cleanup() {
        await this.libav.av_write_trailer(this.ofc);
        await this.libav.avformat_close_input_js(this.ifc);
        await this.libav.ff_free_muxer(this.ofc, this.pb);
        await this.libav.av_packet_free(this.rpkt);
        await this.libav.av_packet_free(this.wpkt);
    }

    async transcode() {
        try {
            await this.libav.mkreadaheadfile("input", this.file);
            [this.ifc, this.istreams] = await this.libav.ff_init_demuxer_file("input");
            [this.rpkt, this.wpkt] = await Promise.all([
                this.libav.av_packet_alloc(),
                this.libav.av_packet_alloc()
            ]);

            await this.#setupStreams();

            const demuxPromise = this.#demux();
            const encodePromise = this.#encode();

            const starterPackets = await this.#getStarterPackets();
            const writePromise = await this.#mux(starterPackets);

            await Promise.all([demuxPromise, encodePromise]);
            await writePromise;

            await this.#cleanup();

            return await this.libav.readFile(this.outputFile);
        } catch (error) {
            console.error("Transcoding error:", error);
            throw error;
        } finally {
            await this.libav.terminate();
        }
    }
}

async function main() {
    const fileBox = document.getElementById("file");
    await new Promise(res => {
        fileBox.onchange = function() {
            if (fileBox.files.length) res();
        };
    });
    const file = fileBox.files[0];
    document.getElementById("input-box").style.display = "none";

    const container = document.getElementById("container").value;
    const resolution = document.getElementById("resolution").value.split("x");
    const [vc, ac, mimeType] = formats[container];
    const width = parseInt(resolution[0]);
    const height = parseInt(resolution[1]);

    const libav = await LibAV.LibAV({ noworker: true });
    const transcoder = new Transcoder({
        file: file,
        containerType: container,
        vc: vc,
        ac: ac,
        width: width,
        height: height,
        libav: libav
    });

    const output = await transcoder.transcode();

    const blob = new Blob([output.buffer], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = `output.${container}`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
}

main();