async function main() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const { Muxer, ArrayBufferTarget } = Mp4Muxer;

    const fps = 30;
    const width = 1280;
    const height = 720;

    const muxer = new Muxer({
        target: new ArrayBufferTarget(),
        video: {
            codec: "avc",
            width,
            height,
        },
        fastStart: "in-memory",
    });

    const videoEncoder = new VideoEncoder({
        output: (chunk, meta) => {
            muxer.addVideoChunk(chunk, meta);
        },
        error: (error) => console.error("VideoEncoder error:", error),
    });

    videoEncoder.configure({
        codec: "avc1.42001f",
        width,
        height,
        bitrate: 10_000_000,
        // framerate: fps,
    });

    let frameIndex = 0;

    for (let i = 0; i < 210; i++) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "white";
        ctx.font = "bold 100px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Hello World", canvas.width / 2, canvas.height / 2);

        ctx.fillStyle = "red";
        ctx.font = "bold 50px sans-serif";
        ctx.fillText(`Frame: ${frameIndex}`, canvas.width / 2, canvas.height / 2 + 100);

        const videoFrame = new VideoFrame(canvas, {
            timestamp: (frameIndex * 1_000_000) / fps,
            duration: 1_000_000 / fps,
        });
        const insert_keyframe = frameIndex % 150 === 0;
        videoEncoder.encode(videoFrame, { keyFrame: insert_keyframe });
        videoFrame.close();
        frameIndex++;
    }
    
    setTimeout(() => {
        videoEncoder.flush();
        muxer.finalize();

        let { buffer } = muxer.target; 

        const blob = new Blob([buffer], { type: 'video/mp4' });
        const url = URL.createObjectURL(blob);
        const video = document.createElement('video');
        video.src = url;
        video.controls = true;
        document.body.appendChild(video);
    }, 3000);

    
}

document.addEventListener("DOMContentLoaded", main);
