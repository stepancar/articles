import { PalettesSelector } from './select.mjs';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const paleteSelector = new PalettesSelector(document.getElementById('themeSelect'));


function getHexColor(color) {
    return '#' + color.toString('16').padStart(6, '0');
}

function animationLoop(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const circle1Position = getFirstCirclePosition(time);
    const circle2Position = getSecondCirclePosition(time);

    drawCircle(
        ctx,
        circle1Position.x,
        circle1Position.y,
        50,
        getHexColor(paleteSelector.value[0])
    );
    drawCircle(
        ctx,
        circle2Position.x,
        circle2Position.y,
        10 + Math.abs(Math.sin(time / 1000)) * 40,
        getHexColor(paleteSelector.value[1])
    );
    drawCircle(
        ctx,
        circle2Position.x + 40,
        circle2Position.y + 40,
        10 + Math.abs(Math.sin(time / 400)) * 90,
        getHexColor(paleteSelector.value[2])
    );

    requestAnimationFrame(animationLoop);
}

function getFirstCirclePosition(time) {
    return {
        x: 200 + 100 * Math.sin(time / 500),
        y: 200 + 100 * Math.cos(time / 500)
    }
}

function getSecondCirclePosition(time) {
    return {
        x: 100 + 50 * Math.sin(time / 500),
        y: 100 + 20 * Math.cos(time / 1000)
    }
}

function drawCircle(ctx, x, y, r, color) {
    ctx.beginPath();
    ctx.fillStyle = color
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}

animationLoop();
