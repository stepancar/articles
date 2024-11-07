import { BackgroundAsset } from './assets/backgroundAsset.mjs';
import { ClockAsset } from './assets/clockAsset.mjs';
import { Scene } from './scene.mjs';
import { TextAsset } from './assets/textAsset.mjs'; 
import { ImageAsset } from './assets/imageAsset.mjs'
import { SpiderAsset } from './assets/spiderAsset.mjs'

/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 * @param {HTMLImageElement} image 
 */
async function startRendering(ctx) {
    const scene = new Scene(ctx);
    
    scene.assets.push(...[
        new BackgroundAsset({ src: '../image.jpg' }),
        new ClockAsset({ position: { x: 535, y: 93 } }),
        new TextAsset({ position: { x: 545, y: 470 }, text: 'Hello Holyjs!',  }),
        new ImageAsset({ src: '../tobey.png', position: {y: 90, x: 160}, bounds: { width: 130, height: 200 } }),
        new SpiderAsset({ position: { x: 140, y: 220 } }),
    ]);

    await scene.waitWhenResourceReady();
    scene.play();
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
