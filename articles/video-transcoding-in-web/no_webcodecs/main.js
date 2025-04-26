const formats = {
    "webm": ["vp09.00.10.08.03.1.1.1.0", "opus", "video/webm"],
    "mp4": ["hvc1.1.6.L123.B0", "mp4a.40.2", "video/mp4"],
    "mkv": ["avc1.42403e", "opus", "video/x-matroska"],
    "avi": ["mpeg4", "mp4a.40.2", "video/x-msvideo"],
    "mov": ["avc1.42403e", "mp4a.40.2", "video/quicktime"],
    "flv": ["avc1.42403e", "mp4a.40.2", "video/x-flv"],
    "ts": ["avc1.42403e", "mp4a.40.2", "video/mp2t"],
};

async function transcode(file, libav) {
    console.log("=== Starting transcoding process ===");

    // 1. Запись файла во временное хранилище
    console.log("[1/8] Writing input file to virtual filesystem...");
    await libav.mkreadaheadfile("inp.webm", file);
    console.log("File successfully written to virtual FS");

    // 2. Инициализация демультиплексора
    console.log("[2/8] Initializing demuxer...");
    const [fmt_ctx, streams] = await libav.ff_init_demuxer_file("inp.webm");
    console.log(`Demuxer initialized, found ${streams.length} streams`);

    // 3. Поиск видео потока
    console.log("[3/8] Finding video stream...");
    let si, stream;
    for (si = 0; si < streams.length; si++) {
        stream = streams[si];
        if (stream.codec_type === libav.AVMEDIA_TYPE_VIDEO)
            break;
    }
    if (si >= streams.length)
        throw new Error("Couldn't find video stream");

    const video_stream_idx = stream.index;
    console.log(`Video stream found at index ${video_stream_idx}, codec_id: ${stream.codec_id}`);

    // 4. Проверка доступных декодеров
    console.log("[4/8] Checking available decoders...");
    console.log("H264 decoder available:", await libav.avcodec_find_decoder(27) !== 0);
    console.log("Stream codec decoder available:", await libav.avcodec_find_decoder(stream.codec_id) !== 0);
    console.log("VP8 decoder available:", await libav.avcodec_find_decoder_by_name("libvpx") !== 0);

    // 5. Инициализация декодера
    console.log("[5/8] Initializing decoder...");
    let [, c, pkt, frame] = await libav.ff_init_decoder(stream.codec_id, stream.codecpar);
    console.log("Decoder initialized successfully");

    // 6. Чтение и декодирование кадров
    console.log("[6/8] Reading and decoding frames...");
    let [res, packets] = await libav.ff_read_frame_multi(fmt_ctx, pkt);
    if (res !== libav.AVERROR_EOF)
        throw new Error("Error reading: " + res);

    const frames = await libav.ff_decode_multi(c, pkt, frame, packets[video_stream_idx], true);
    console.log(`Decoded ${frames.length} frames`);

    // Очистка декодера
    await libav.ff_free_decoder(c, pkt, frame);
    await libav.avformat_close_input_js(fmt_ctx);

    // 7. Кодирование
    console.log("[7/8] Initializing encoder and encoding frames...");
    let codec;
    [codec, c, frame, pkt] = await libav.ff_init_encoder("libvpx", {
        ctx: {
            bit_rate: 10000000,
            pix_fmt: frames[0].format,
            width: frames[0].width,
            height: frames[0].height
        }
    });
    console.log("Encoder initialized with settings:", {
        bitrate: "10Mbps",
        resolution: `${frames[0].width}x${frames[0].height}`,
        pixel_format: frames[0].format
    });

    const [oc, fmt, pb, st] = await libav.ff_init_muxer(
        {filename: "tmp.webm", open: true}, [[c, 1, 1000]]);

    await libav.avformat_write_header(oc, 0);
    packets = await libav.ff_encode_multi(c, frame, pkt, frames, true);
    console.log(`Encoded ${packets.length} packets`);

    // 8. Запись выходного файла
    console.log("[8/8] Writing output file...");
    await libav.ff_write_multi(oc, pkt, packets);
    await libav.av_write_trailer(oc);
    await libav.ff_free_muxer(oc, pb);
    await libav.ff_free_encoder(c, frame, pkt);

    console.log("=== Transcoding completed successfully ===");
    return await libav.readFile("tmp.webm");
}



async function main() {
    const fileInput = document.getElementById("file");
    const inputBox = document.getElementById("input-box");
    const progressContainer = document.getElementById("progress-container");
    const downloadBtn = document.getElementById("download-btn");

    let resultBlobUrl = null;

    downloadBtn.onclick = () => {
        if (resultBlobUrl) {
            const a = document.createElement("a");
            a.href = resultBlobUrl;
            a.download = `converted.${document.getElementById("container").value}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };

    fileInput.addEventListener('change', async function() {
        if (!fileInput.files.length) return;

        inputBox.style.display = "none";
        // progressContainer.style.display = "block";

        const file = fileInput.files[0];
        const containerType = document.getElementById("container").value;
        const resolution = document.getElementById("resolution").value.split("x");
        const [vc, ac, mimeType] = formats[containerType];
        let width,height;
        if(resolution!=="src_resolution"){
            width = parseInt(resolution[0]);
            height = parseInt(resolution[1]);
        }
        console.log('asdS',width,height)


        const libav = await LibAV.LibAV({noworker: true });
        window.addEventListener('beforeunload', async () => {
            if (libav) await libav.terminate();
            transcoder = null
        });



        try {
            console.time("transcode");
            const output = await transcode(file,libav);
            console.log("end_transcode")

            resultBlobUrl = URL.createObjectURL(new Blob([output.buffer], {type: mimeType}));
        } catch (error) {
            console.error("Transcoding failed:", error);
        } finally {
            console.timeEnd("transcode")
        }
    });
}

document.addEventListener('DOMContentLoaded', main);