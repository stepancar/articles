const worker = new Worker(new URL('./worker.mjs', import.meta.url), { type: 'module' });

const canvas = document.getElementById("canvas");
const offscreen = canvas.transferControlToOffscreen();
// const gl = offscreen.getContext("webgl"); //

worker.postMessage({ canvas: offscreen }, [offscreen]);

worker.onmessage = (event) => {
    if (event.data === 'done') {
        console.log('done');
    }
}
