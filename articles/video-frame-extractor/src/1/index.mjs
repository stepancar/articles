import { drawClockArrows, drawClockFace } from "../graphics.mjs";
import { createImageResource } from "../resources.mjs";

/**
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {HTMLImageElement} image
 */
function startRendering(ctx, image) {
    const clockPosition = { x: 535, y: 93 };

    function drawAtTime(time) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.drawImage(image, 0, 0);
        drawClockFace(ctx, 70, "white", clockPosition);
        drawClockArrows(ctx, 50, "red", time, clockPosition);
    }

    function render(timestamp) {
        drawAtTime(timestamp);
        requestAnimationFrame(render);
    }

    render();
}

(async function () {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);

    const image = await createImageResource("../image.jpg");
    canvas.width = image.width;
    canvas.height = image.height;

    const ctx = canvas.getContext("2d");
    startRendering(ctx, image);
})();
