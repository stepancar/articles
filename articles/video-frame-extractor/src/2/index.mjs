import { BackgroundAsset } from './assets/backgroundAsset.mjs';
import { ClockAsset } from './assets/clockAsset.mjs';
import { Scene } from './scene.mjs';
import { TextAsset } from './assets/textAsset.mjs'; 


/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 * @param {HTMLImageElement} image 
 */
async function startRendering(ctx) {
    const scene = new Scene();
    
    scene.assets.push(...[
        new BackgroundAsset('../image.webp'),
        new ClockAsset({ position: { x: 525, y: 125 } }),
        new TextAsset({ text: 'Hello, Holyjs!', position: { x: 50, y: 50 } }),
    ]);

    await scene.waitWhenResourceReady();

    function drawAtTime(time) {
        scene.seek(time);
        scene.draw(ctx);
    }

    const startTime = 0;

    function render(timestamp) {
        const currentTime = timestamp + startTime;
        drawAtTime(currentTime);
        requestAnimationFrame(render);
    }

    render();
}

async function run() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width  = 1024;
    canvas.height = 1024;

    document.body.appendChild(canvas);
    startRendering(ctx);
}

run();
