import { BackgroundAsset } from './assets/backgroundAsset.mjs';
import { ClockAsset } from './assets/clockAsset.mjs';
import { Scene } from './scene.mjs';
import { TextAsset } from './assets/textAsset.mjs';
import { ImageAsset } from './assets/imageAsset.mjs';
import { VideoAsset } from './assets/videoAsset.mjs';


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
        new ImageAsset({ src: '../image.jpg', bounds: { x: 80, y: 15, width: 130, height: 200 } }),
        new VideoAsset({
            // src: 'https://nickdesaulniers.github.io/netfix/demo/frag_bunny.mp4',
            // src: 'https://storage.googleapis.com/lumen5-prod-video/video-seek-test.mp4',
            src: '../stepan_holy_nodejs.mov',
            position: { x: 290, y: 252 },
            bounds: { width: 510, height: 300 },
        }),
        new TextAsset({ position: { x: 545, y: 470 }, text: 'Hello Holyjs!',  }),
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
