export async function createImageResource(src) {
    const image = document.createElement('img');
    image.src = src;
    await image.decode();
    return image;
}

export async function createSourceBufferForVide(src) {
    const response = await fetch(src);
    const buffer = await response.arrayBuffer();
    // prepare for setting to html video element
    // create blob
    const blob = new Blob([buffer], { type: 'video/mp4' });
    return blob;
}


export async function record(stream, time) {
    const mediaRecorder = new MediaRecorder(stream);
    const chunks = [];
    mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
    };
    mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/mp4' });
        const url = URL.createObjectURL(blob);
        // open in new tab
        // window.open(url);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'video.mp4';
        a.click();
    };
    mediaRecorder.start();
    await new Promise((resolve) => setTimeout(resolve, time));
    mediaRecorder.stop();
}


export function recordWebcodecs() {

    let frameIndex = 0;
    const width = 1024;
    const height = 1024;
    const fps = 30;

    const muxer = new Mp4Muxer.Muxer({
        target: new Mp4Muxer.ArrayBufferTarget(),
        video: {
            codec: 'avc',
            width,
            height,
        },
        fastStart: 'in-memory',
    });

    const videoEncoder = new VideoEncoder({
        output: (chunk, meta) => {
            muxer.addVideoChunk(chunk, meta);
        },
        error: error => console.error('VideoEncoder error:', error),
    });

    videoEncoder.configure({
        codec: 'avc1.640028',
        width,
        height,
        bitrate: 10_000_000,
        framerate: fps,
    });


    return {
        async encodeFrame(canvas) {
            const videoFrame = new VideoFrame(canvas, {
                timestamp: frameIndex * 1_000_000 / fps,
                duration: 1_000_000 / (fps),
            });
            const insert_keyframe = (frameIndex % 150) === 0;
            videoEncoder.encode(videoFrame, { keyFrame: insert_keyframe });
            videoFrame.close();
    
            frameIndex++;
        },
        async finalize() {
            await videoEncoder.flush();
            return muxer.finalize();
        },
        get mp4Buffer() {
            return muxer.target.buffer;
        }
    };
}

export function saveArrayBufferToFile(arrayBuffer, fileName) {
    const blob = new Blob([arrayBuffer]);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
}