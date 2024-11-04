import { BackgroundAsset } from './assets/backgroundAsset.mjs';
import { ClockAsset } from './assets/clockAsset.mjs';
import { Scene } from './scene.mjs';
import { TextAsset } from './assets/textAsset.mjs';
import { VideoAsset } from './assets/videoAsset.mjs';


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
        new VideoAsset({
            // src: 'https://nickdesaulniers.github.io/netfix/demo/frag_bunny.mp4',
            src: 'https://storage.googleapis.com/lumen5-prod-video/video-seek-test.mp4',
            position: { x: 460, y: 360 },
            bounds: { width: 220, height: 180 },
        }),
    ]);

    await scene.waitWhenResourceReady();

    async function drawAtTime(time) {
        await scene.seek(time);
        scene.draw(ctx);
    }

    const startTime = 45000;

    async function render(timestamp) {
        const currentTime = timestamp + startTime;
        await drawAtTime(currentTime);
        requestAnimationFrame(render);
    }

    render(0);
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
