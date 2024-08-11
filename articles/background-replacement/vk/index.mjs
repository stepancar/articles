const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 } });

const [track] = stream.getTracks();
const processor = new MediaStreamTrackProcessor({ track });
const { readable } = processor;

const generator = new MediaStreamTrackGenerator({ kind: 'video' });
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d', {willReadFrequently: true});
// canvas.width = 1280 / 8;
// canvas.height = 720 / 8;
const { writable } = generator;
const bufffer = new Uint8Array(1280 * 720 * 4);
readable.pipeThrough(
    new TransformStream({
        transform: (frame) => {
            console.time('frame');
            ctx.drawImage(frame, 0, 0, 400, 400);
            const resizedFrame = new VideoFrame(canvas, { timestamp: performance.now() });
            
            resizedFrame.copyTo(bufffer).then(() => {
                console.timeEnd('frame');
                resizedFrame.close()
                frame.close()

            });
        }
    })
).pipeTo(writable);