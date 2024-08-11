import { hexToRgb, rgbArrayToHex, PalettesSelector } from "../utils.mjs";

const image = document.getElementById('image');
const canvas = document.getElementById('canvas');
const paleteSelector = new PalettesSelector(document.getElementById('themeSelect'));
const ctx = canvas.getContext('2d', { antialias: false });
let originalImageData = null;
let currentImageData = null;
image.decode().then(() => {
    ctx.drawImage(image, 0, 0);
    const frame = (new VideoFrame(image, { timestamp: 0 }));
    originalImageData = new ImageData(frame.codedWidth, frame.codedHeight);
    frame.copyTo(originalImageData.data).then(() => {
        currentImageData = new ImageData(structuredClone(originalImageData.data), frame.codedWidth);
        const colorMappings = {
            0xff0000: paleteSelector.value[0],
            0x00ff00: paleteSelector.value[1],
            0x0000ff: paleteSelector.value[2],
        }
        replaceImageData(originalImageData.data, currentImageData.data, colorMappings);
        ctx.putImageData(originalImageData, 0, 0);
    });

    // const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
});

paleteSelector.addEventListener('change', () => {
    const colorMappings = {
        0xff0000: paleteSelector.value[0],
        0x00ff00: paleteSelector.value[1],
        0x0000ff: paleteSelector.value[2],
    }
    replaceImageData(originalImageData.data, currentImageData.data, colorMappings);
    ctx.putImageData(currentImageData, 0, 0);
});


function replaceImageData(imageData, currentImageData, colorMappings) {
    for (let i = 0; i< imageData.length; i+=4) {
        const r = imageData[i];
        const g = imageData[i+1];
        const b = imageData[i+2];

        const hexColor = rgbArrayToHex([r, g, b]);

        if (hexColor in colorMappings) {
            const [newR, newG, newB] = hexToRgb(colorMappings[hexColor]);
            currentImageData[i] = newR;
            currentImageData[i+1] = newG;
            currentImageData[i+2] = newB;
        }
    }
}
