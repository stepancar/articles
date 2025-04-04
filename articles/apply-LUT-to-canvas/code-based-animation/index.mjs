import { drawCircle, PalettesSelector, getCssHexColor } from '../utils.mjs';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const paleteSelector = new PalettesSelector(document.getElementById('themeSelect'));

function animationLoop(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const circle1Position = getFirstCirclePosition(time);
    const circle2Position = getSecondCirclePosition(time);

    drawCircle(
        ctx,
        circle1Position.x,
        circle1Position.y,
        50,
        getCssHexColor(paleteSelector.value[0])
    );
    drawCircle(
        ctx,
        circle2Position.x,
        circle2Position.y,
        10 + Math.abs(Math.sin(time / 1000)) * 40,
        getCssHexColor(paleteSelector.value[1])
    );
    drawCircle(
        ctx,
        circle2Position.x + 40,
        circle2Position.y + 40,
        10 + Math.abs(Math.sin(time / 400)) * 90,
        getCssHexColor(paleteSelector.value[2])
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



animationLoop();
