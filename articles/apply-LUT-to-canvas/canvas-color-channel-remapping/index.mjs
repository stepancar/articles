import { hexToRgb, rgbArrayToHex, PalettesSelector } from "../utils.mjs";

const image = document.getElementById('image');
const canvas = document.getElementById('canvas');
const paleteSelector = new PalettesSelector(document.getElementById('themeSelect'));
const ctx = canvas.getContext('2d', { antialias: false });
let originalImageData = null;
let currentImageData = null;

image.decode().then(() => {    
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    ctx.drawImage(image, 0, 0);
    originalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    currentImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    replaceColors();
});

function replaceColors() {
    replaceImageData(originalImageData.data, currentImageData.data);
    ctx.putImageData(currentImageData, 0, 0);
}

paleteSelector.addEventListener('change', () => {
   replaceColors();
});


function splitColorToRGB(color) {
    const red = (color >> 16) & 0xFF;
    const green = (color >> 8) & 0xFF;
    const blue = color & 0xFF;
    return [red, green, blue]
}

function replaceImageData(imageData, currentImageData) {
    for (let i = 0; i< imageData.length; i+=4) {
        const originalR = imageData[i];
        const originalG = imageData[i+1];
        const originalB = imageData[i+2];

        const [target1R, target1G, target1B] = splitColorToRGB(paleteSelector.value[0]);
        const [target2R, target2G, target2B] = splitColorToRGB(paleteSelector.value[1]);
        const [target3R, target3G, target3B] = splitColorToRGB(paleteSelector.value[2]);

        const finalR = target1R * originalR + target2R * originalG + target3R * originalB;
        const finalG = target1G * originalR + target2G * originalG + target3G * originalB;
        const finalB = target1B * originalR + target2B * originalG + target3B * originalB;

        currentImageData[i] = Math.round(finalR/256);
        currentImageData[i+1] = Math.round(finalG/256);
        currentImageData[i+2] = Math.round(finalB/256);
    }
}
