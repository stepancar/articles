const formats = {
    "webm": ["vp09.00.10.08.03.1.1.1.0", "opus", "video/webm"],         // VP9 for video, Opus for audio
    "mp4": ["hvc1.1.6.L123.B0", "mp4a.40.2", "video/mp4"], // H.265 for video, AAC for audio
    "mkv": ["avc1.42403e", "mp4a.40.2", "video/x-matroska"],  // H.264 for video, Opus for audio
    "avi": ["mpeg4", "pcm_s16le", "video/x-msvideo"],   // MPEG-4 for video, PCM (WAV) for audio
    "mov": ["avc1.42403e", "mp4a.40.2", "video/quicktime"], // H.264 for video, AAC for audio
    "flv": ["avc1.42403e", "mp4a.40.2", "video/x-flv"], // H.264 for video, AAC for audio
    "ts": ["avc1.42403e", "mp4a.40.2", "video/mp2t"],  // H.264 for video, AAC for audio
};

class BufferStream extends ReadableStream {
    buf = [];
    res = null;

    constructor() {
        super({
            pull: async (controller) => {
                while (!this.buf.length) {
                    await new Promise(res => this.res = res);
                }
                const next = this.buf.shift();
                if (next !== null)
                    controller.enqueue(next);
                else
                    controller.close();
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
}

async function translateAllStreams({
                                       istreams,
                                       vc,
                                       ac,
                                       width,
                                       height,
                                       libav
                                   }) {
    const iToO = [];
    const decoders = [];
    const decoderStreams = [];
    const decConfigs = [];
    const packetToChunks = [];
    const encoders = [];
    const encoderStreams = [];
    const encoderReaders = [];
    const chunkToPackets = [];
    const ostreams = [];
    for (let streamI = 0; streamI < istreams.length; streamI++) {
        const istream = istreams[streamI];
        iToO.push(-1);
        let streamToConfig, Decoder, packetToChunk,
            configToStream, Encoder, chunkToPacket;
        if (istream.codec_type === libav.AVMEDIA_TYPE_VIDEO) {
            streamToConfig = LibAVWebCodecsBridge.videoStreamToConfig;
            Decoder = VideoDecoder;
            packetToChunk = LibAVWebCodecsBridge.packetToEncodedVideoChunk;
            configToStream = LibAVWebCodecsBridge.configToVideoStream;
            Encoder = VideoEncoder;
            chunkToPacket = LibAVWebCodecsBridge.encodedVideoChunkToPacket;
        } else if (istream.codec_type === libav.AVMEDIA_TYPE_AUDIO) {
            streamToConfig = LibAVWebCodecsBridge.audioStreamToConfig;
            Decoder = AudioDecoder;
            packetToChunk = LibAVWebCodecsBridge.packetToEncodedAudioChunk;
            configToStream = LibAVWebCodecsBridge.configToAudioStream;
            Encoder = AudioEncoder;
            chunkToPacket = LibAVWebCodecsBridge.encodedAudioChunkToPacket;
        } else {
            continue;
        }

        // Convert the config
        const config = await streamToConfig(libav, istream);
        let supported;
        try {
            supported = await Decoder.isConfigSupported(config);
        } catch (ex) {
        }
        if (!supported || !supported.supported)
            continue;
        iToO[streamI] = decConfigs.length;
        decConfigs.push(config);

        // Make the decoder
        const stream = new BufferStream();
        decoderStreams.push(stream);
        const decoder = new Decoder({
            output: frame => stream.push(frame),
            error: error =>
                alert("Decoder " + JSON.stringify(config) + ":\n" + error)
        });
        decoder.configure(config);
        decoders.push(decoder);
        packetToChunks.push(packetToChunk);

        // Make the encoder config
        const encConfig = {
            codec: (istream.codec_type === libav.AVMEDIA_TYPE_VIDEO)
                ? vc : ac,
            // width: config.codedWidth,
            // height: config.codedHeight,
            width: width,
            height: height,
            numberOfChannels: config.numberOfChannels,
            sampleRate: config.sampleRate
        };

        // Make the encoder
        const encStream = new BufferStream();
        encoderStreams.push(encStream);
        encoderReaders.push(encStream.getReader());
        const encoder = new Encoder({
            output: (chunk, metadata) => encStream.push({chunk, metadata}),
            error: error =>
                alert("Encoder " + JSON.stringify(encConfig) + ":\n" + error)
        });
        encoder.configure(encConfig);
        encoders.push(encoder);
        chunkToPackets.push(chunkToPacket);

        // Make the output stream
        ostreams.push(await configToStream(libav, encConfig));
    }
    return [iToO, decoders, decoderStreams, packetToChunks, encoders, encoderStreams, encoderReaders, chunkToPackets, ostreams];
}


async function transcodeVideo({
                                  file,         // Входной файл (ArrayBuffer или Blob)
                                  containerType,// Формат выходного
                                  vc,           // Видео кодек (например, "vp09.00.10.08")
                                  ac,           // Аудио кодек (например, "opus")
                                  width,        // Ширина видео
                                  height,       // Высота видео
                              }) {
    const libav = await LibAV.LibAV({noworker: true});
    const outputFile = "output." + containerType

    try {
        await libav.mkreadaheadfile("input", file);

        // Start demuxer
        const [ifc, istreams] =
            await libav.ff_init_demuxer_file("input");
        const rpkt = await libav.av_packet_alloc();
        const wpkt = await libav.av_packet_alloc();

        // Translate all the streams

        const [iToO, decoders, decoderStreams, packetToChunks, encoders, encoderStreams, encoderReaders, chunkToPackets, ostreams] = await translateAllStreams({
            istreams,
            vc,
            ac,
            width,
            height,
            libav
        });

        if (!decoders.length)
            throw new Error("No decodable streams found!");

        // Demuxer -> decoder
        (async () => {
            while (true) {
                const [res, packets] =
                    await libav.ff_read_frame_multi(ifc, rpkt, {limit: 1});
                if (res !== -libav.EAGAIN &&
                    res !== 0 &&
                    res !== libav.AVERROR_EOF)
                    break;

                for (const idx in packets) {
                    if (iToO[idx] < 0)
                        continue;
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

                if (res === libav.AVERROR_EOF)
                    break;
            }

            for (let i = 0; i < decoders.length; i++) {
                await decoders[i].flush();
                decoders[i].close();
                decoderStreams[i].push(null);
            }
        })();

        // Decoder -> encoder
        for (let i = 0; i < decoders.length; i++) {
            (async () => {
                const decStream = decoderStreams[i];
                const decRdr = decStream.getReader();
                const enc = encoders[i];
                const encStream = encoderStreams[i];

                while (true) {
                    const {done, value} = await decRdr.read();
                    if (done) break;
                    enc.encode(value);
                    value.close();
                }

                await enc.flush();
                enc.close();
                encStream.push(null);
            })();
        }

        // We need to get at least one packet from each stream before we can mux
        let ofc, pb;
        {
            const starterPackets = [];
            for (let i = 0; i < ostreams.length; i++) {
                const encRdr = encoderReaders[i];
                const {done, value} = await encRdr.read();
                if (done)
                    continue;
                const chunkToPacket = chunkToPackets[i];
                const ostream = ostreams[i];

                // Convert it
                const packet = await chunkToPacket(
                    libav, value.chunk, value.metadata, ostream, i);
                starterPackets.push(packet);
            }

            // Make the muxer
            [ofc, , pb] = await libav.ff_init_muxer({
                filename: outputFile,
                open: true,
                codecpars: true
            }, ostreams);
            await libav.avformat_write_header(ofc, 0);

            // And pass in the starter packets
            await libav.ff_write_multi(ofc, wpkt, starterPackets);
        }

        // Now pass through everything else
        const encPromises = [];
        let writePromise = Promise.all([]);
        for (let i = 0; i < encoderReaders.length; i++) {
            encPromises.push((async () => {
                const encRdr = encoderReaders[i];
                const chunkToPacket = chunkToPackets[i];
                const ostream = ostreams[i];
                while (true) {
                    const {done, value} = await encRdr.read();
                    if (done)
                        break;
                    writePromise = writePromise.then(async () => {
                        const packet = await chunkToPacket(
                            libav, value.chunk, value.metadata, ostream, i);
                        await libav.ff_write_multi(ofc, wpkt, [packet]);
                    });
                }
            })());
        }

        await Promise.all(encPromises);
        await writePromise;

        // And end the stream
        await libav.av_write_trailer(ofc);

        // Clean up
        await libav.avformat_close_input_js(ifc);
        await libav.ff_free_muxer(ofc, pb);
        await libav.av_packet_free(rpkt);
        await libav.av_packet_free(wpkt);

        // Чтение выходного файла
        return await libav.readFile(outputFile);

    } catch (error) {
        console.log(error)
    } finally {
        // Очистка
        await libav.terminate();
    }
}


async function main() {
    // Get an input file
    const fileBox = document.getElementById("file");
    await new Promise(res => {
        fileBox.onchange = function () {
            if (fileBox.files.length)
                res();
        };
    });
    const file = fileBox.files[0];
    document.getElementById("input-box").style.display = "none";


    // Codec info
    const container = document.getElementById("container").value;
    const resolution = document.getElementById("resolution").value.split("x");
    const [vc, ac, mimeType] = formats[container];
    const width = parseInt(resolution[0])
    const height = parseInt(resolution[1])
    const outputFile = "output." + container

    const output = await transcodeVideo({
        file: file,         // Входной файл (ArrayBuffer или Blob)
        containerType: container,
        vc: vc,           // Видео кодек (например, "vp09.00.10.08")
        ac: ac,           // MIME-тип выходного файла (например, "video/webm")
        width: width,        // Ширина видео
        height: height,       // Высота видео
    });
    console.log("Creating Blob...");
    const blob = new Blob([output.buffer], {type: mimeType});
    console.log("Blob created:", blob);

    console.log("Creating URL...");
    const url = URL.createObjectURL(blob);
    console.log("URL created:", url);

    console.log("Downloading file...");
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = outputFile;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    console.log("File download initiated.");
}

main();
