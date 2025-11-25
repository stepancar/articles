const w = 1920;
const h = 1080;
const canvas = new OffscreenCanvas(w, h)
//const canvas = document.createElement('canvas') // new OffscreenCanvas(1920, 1080)

canvas.width = w;
canvas.height = h;

const ctx = canvas.getContext('2d', {willReadFrequently: true});
ctx.fillStyle = 'red'

const framesCount = 100;


console.time('getImageData')
 const array = new Uint8Array(canvas.width*canvas.height*4);
const arr = [];
for (let i = 0; i< framesCount; i++) {

   
    const gl = ctx;
    // ctx.readPixels(0,0,canvas.width, canvas.height, gl.RGBA, gl.UNSIGNED_BYTE, array)
    const imageData = ctx.getImageData(0,0,canvas.width, canvas.height, gl.RGBA, gl.UNSIGNED_BYTE, array);
    arr.push(array);
}
console.timeEnd('getImageData')


console.time('getImageData')
await Promise.all(Array.from({length: framesCount}, (_, i) => i).map((i) => {
    return new Promise((resolve) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(i, i, 1000, 1000);
        // const vf = new VideoFrame(canvas, {timestamp: 0});
        // const array = new Uint8Array(canvas.width*canvas.height*4);
        createImageBitmap(canvas).then((b) =>{
            resolve(b);
        })
        // vf.copyTo(array).then(() => {
        //     vf.close();
        //     resolve(array);
        // })
    })
}));
console.timeEnd('getImageData')