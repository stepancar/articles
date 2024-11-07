import { BackgroundAsset } from "./assets/backgroundAsset.mjs";
import { ClockAsset } from "./assets/clockAsset.mjs";
import { Scene } from "./scene.mjs";
import { TextAsset } from "./assets/textAsset.mjs";
import { ImageAsset } from "./assets/imageAsset.mjs";
import { SpiderAsset } from "./assets/spiderAsset.mjs";
import { VideoAsset } from "./assets/videoAsset.mjs";
import { record, recordWebcodecs, saveArrayBufferToFile } from '../resources.mjs';
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = 1024;
canvas.height = 1024;
const ctx = canvas.getContext("2d");

async function startRendering() {
    const scene = new Scene(ctx);
    scene.assets.push(
        ...[
            new BackgroundAsset({ src: "../image.jpg" }),
            new ClockAsset({ position: { x: 535, y: 93 } }),
    
            new ImageAsset({
                src: "../tobey.png",
                position: { y: 90, x: 160 },
                bounds: { width: 130, height: 200 },
            }),
            new SpiderAsset({ position: { x: 140, y: 220 } }),
            new VideoAsset({
                src: "../stepan_holy_nodejs.mov",
                position: { x: 290, y: 252 },
                bounds: { width: 510, height: 300 },
            }),
            new TextAsset({
                position: { x: 545, y: 800 },
                text: "Hello Holyjs!",
            }),
        ]
    );

    await scene.waitWhenResourceReady();

    scene.play();

    const recordButton = document.getElementById('recordBtn');
    recordButton.addEventListener('click', async () => {
        console.time('recording');
        const recorder = await recordWebcodecs();
        for (let i = 0; i < 300; i++) {
            scene.draw(ctx);
            recorder.encodeFrame(canvas);
        }
        await recorder.finalize();
        saveArrayBufferToFile(recorder.mp4Buffer, 'file.mp4');
        // await record(canvas.captureStream(30), 10000);
        console.timeEnd('recording');
    });

    scene.play();
}

startRendering();
