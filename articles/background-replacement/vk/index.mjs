const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 } });

const stream2 = await navigator.mediaDevices.getUserMedia({ video: { width: 400, height: 40 } });

// listen frames
const video = document.createElement('video');
video.srcObject = stream2;
video.play();
const h1 = document.createElement('h1');
document.body.appendChild(h1);
document.body.appendChild(video);

const [track] = stream2.getTracks();
const processor = new MediaStreamTrackProcessor({ track });
const { readable } = processor;

const generator = new MediaStreamTrackGenerator({ kind: 'video' });
// const canvas = document.getElementById('canvas');
const canvas = new OffscreenCanvas(400, 400);
const ctx = canvas.getContext('2d', { willReadFrequently: false });
// canvas.width = 1280 / 8;
// canvas.height = 720 / 8;

const bufffer = new Uint8Array(400 * 400 * 4);

let framesNumber = 0;
let timeForEveryFrame = 0;

function f(timestamp, frameData) {
    
    // const vf = new VideoFrame(video, { timestamp });
    const startTime = performance.now();
    ctx.drawImage(video, 0, 0, 400, 400);
    canvas.convertToBlob().then((blob) => {
        const endTime = performance.now();
        timeForEveryFrame += endTime - startTime;
    });
    framesNumber++;
    h1.innerText = `Average time for every frame: ${timeForEveryFrame / framesNumber}`;
    // debugger;
    // vf.copyTo(bufffer).then(() => {
    //     // console.timeEnd('getImageData');
        
        
    // });
    // vf.close();
    video.requestVideoFrameCallback(f);
    // requestAnimationFrame(f)
    
}
video.requestVideoFrameCallback(f);
// requestAnimationFrame(f)
// readable.pipeThrough(
//     new TransformStream({
//         transform: (frame) => {
//             console.count('frame');
//             //console.time('frame');

//             // ctx.drawImage(frame, 0, 0, 400, 400);
//             // createImageBitmap(frame, 0, 0, frame.codedWidth, frame.codedHeight, { resizeWidth: 400, resizeHeight: 400}).then((bitmap) => {
//             //     frame.close()
//             //     ctx.transferFromImageBitmap(bitmap);
//             //     canvas.toBlob((blob) => {
//             //         console.log(blob.size);
//             //     });
//             // });
//             //     // const vf = new VideoFrame(bitmap, { timestamp: performance.now() });
//                 // ctx.drawImage(frame, 0, 0);
//                 // console.time('getImageData');
               
//                 frame.copyTo(bufffer).then(() => {
//                     // console.timeEnd('getImageData');
                    
                    
//                 });
//                 frame.close();
//                 // frame.close()
//                 // ctx.getImageData(0, 0, 400, 400).data
               
//             // });
            
//             // requestAnimationFrame(() => {
//                 // console.timeEnd('frame');
//                 //
//             //});
           
//             // const resizedFrame = new VideoFrame(canvas, { timestamp: performance.now() });
            
//             // resizedFrame.copyTo(bufffer).then(() => {
//             //     console.timeEnd('frame');
//             //     resizedFrame.close()
//             //     frame.close()

//             // });
//         }
//     })
// ).pipeTo(writable);