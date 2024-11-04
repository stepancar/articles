import { drawClockArrows, drawClockFace } from '../graphics.mjs';


/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 * @param {HTMLImageElement} image 
 */
function startRendering(ctx, image) {
    const clockPosition = { x: 525, y: 125 };

    function drawAtTime(time) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.drawImage(image, 0, 0);
        drawClockFace(ctx, 67, 'white', clockPosition);
        drawClockArrows(ctx, 50, 'blue', time, clockPosition);
    }

    const startTime = 0;
    function render(timestamp) {
        const currentTime = timestamp + startTime;
        drawAtTime(currentTime);
        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);   
}

async function run() {
    const image = await createImageResource('../image.webp');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);
    canvas.width = image.width;
    canvas.height = image.height;

    startRendering(ctx, image);
}

run();

async function createImageResource(src) {
    const image = document.createElement('img');
    image.src = src;
    await image.decode();
    return image;
}
