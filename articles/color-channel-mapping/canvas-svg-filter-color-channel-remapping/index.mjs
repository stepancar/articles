import { PalettesSelector } from "../utils.mjs";

const image = document.getElementById('image');
const canvas = document.getElementById('canvas');
const paleteSelector = new PalettesSelector(document.getElementById('themeSelect'));
const ctx = canvas.getContext('2d', { antialias: false });

image.decode().then(() => {    
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    replaceColors();
});

const feColorMatrix = document.querySelector('#colorChannelMapFilter feColorMatrix');

function replaceColors() {
    const [target1R, target1G, target1B] = splitColorToRGB(paleteSelector.value[0]);
    const [target2R, target2G, target2B] = splitColorToRGB(paleteSelector.value[1]);
    const [target3R, target3G, target3B] = splitColorToRGB(paleteSelector.value[2]);
    const filterValues = `
        ${target1R} ${target2R} ${target3R} 0 0
        ${target1G} ${target2G} ${target3G} 0 0
        ${target1B} ${target2B} ${target3B} 0 0
        0 0 0 1 0
    `;

    feColorMatrix.setAttribute('values', filterValues);
    ctx.filter = "url(#colorChannelMapFilter)";
    ctx.drawImage(image, 0, 0);
}

paleteSelector.addEventListener('change', () => {
   replaceColors();
});

function splitColorToRGB(color) {
    const red = (color >> 16) & 0xFF;
    const green = (color >> 8) & 0xFF;
    const blue = color & 0xFF;
    return [red/255, green/255, blue/255]
}
