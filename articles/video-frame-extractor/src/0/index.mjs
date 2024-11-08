import { createImageResource, record, recordWebcodecs, saveArrayBufferToFile } from '../resources.mjs';
import { drawClockFace, drawClockArrows } from '../graphics.mjs';

import { BackgroundAsset } from './assets/backgroundAsset.mjs';
import { ClockAsset } from './assets/clockAsset.mjs';
import { Scene } from './scene.mjs';
import { TextAsset } from './assets/textAsset.mjs'; 
import { ImageAsset } from './assets/imageAsset.mjs'
import { SpiderAsset } from './assets/spiderAsset.mjs'
import { VideoAsset } from './assets/videoAsset.mjs';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width  = 1024;
canvas.height = 1024;
document.body.appendChild(canvas);

const scene = new Scene(ctx);

scene.assets.push(...[
    new BackgroundAsset({ src: '../image.jpg' }),
        new ClockAsset({ position: { x: 535, y: 93 } }),
        
        new ImageAsset({ src: '../tobey.png', position: {y: 90, x: 160}, bounds: { width: 130, height: 200 } }),
        new SpiderAsset({ position: { x: 140, y: 220 } }),
        new VideoAsset({
            src: '../stepan_holy_nodejs_all_keyframes.mp4',
            position: { x: 290, y: 252 },
            bounds: { width: 510, height: 300 },
        }),
        new TextAsset({ position: { x: 545, y: 800 }, text: 'Hello Holyjs!',  }),
    ]
);

const recordButton = document.getElementById('recordBtn');

recordButton.addEventListener('click', async () => {
    const recoder = recordWebcodecs();
    
    for (let i = 0; i < 300; i++) {
        await scene.seek(i * 1000 / 30);
        scene.draw(ctx);
        recoder.encodeFrame(canvas);
        // ctx.getImageData(0, 0, canvas.width, canvas.height);
    }

    await recoder.finalize();

    saveArrayBufferToFile(recoder.mp4Buffer, 'video.mp4');

});

async function run() {
    await scene.waitWhenResourceReady();

    // scene.play();
    
}

run();