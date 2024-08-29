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

// function replaceImageData(imageData, currentImageData) {
//     for (let i = 0; i< imageData.length; i+=4) {
//         const R_s = imageData[i];
//         const G_s = imageData[i+1];
//         const B_s = imageData[i+2];

//         const [R_t1, G_t1, B_t1] = splitColorToRGB(paleteSelector.value[0]);

//         const [R_t2, G_t2, B_t2] = splitColorToRGB(paleteSelector.value[1]);

//         const [R_t3, G_t3, B_t3] = splitColorToRGB(paleteSelector.value[2]);

//         const isRedChannelMappedToAlpha = false;
//         const isGreenChannelMappedToAlpha = false;
//         const isBlueChannelMappedToAlpha = false;

//         const R_f = (isRedChannelMappedToAlpha ? 0.0: R_t1 * R_s) + (isGreenChannelMappedToAlpha ? 0.0: R_t2 * G_s) + (isBlueChannelMappedToAlpha ? 0.0: R_t3 * B_s);
//         const G_f = (isRedChannelMappedToAlpha ? 0.0: G_t1 * R_s) + (isGreenChannelMappedToAlpha ? 0.0: G_t2 * G_s) + (isBlueChannelMappedToAlpha ? 0.0: G_t3 * B_s);
//         const B_f = (isRedChannelMappedToAlpha ? 0.0: B_t1 * R_s) + (isGreenChannelMappedToAlpha ? 0.0: B_t2 * G_s) + (isBlueChannelMappedToAlpha ? 0.0: B_t3 * B_s);

//         currentImageData[i] = Math.round(R_f/255);
//         currentImageData[i+1] = Math.round(G_f/255);
//         currentImageData[i+2] = Math.round(B_f/255);

//         let A_f = imageData[i+3];

//         if (isRedChannelMappedToAlpha) {
//             A_f = A_f * R_s;
//         }
    
//         if (isGreenChannelMappedToAlpha) {
//             A_f = A_f * G_s;
//         }
    
//         if (isBlueChannelMappedToAlpha) {
//             A_f = A_f * B_s;
//         }
//         currentImageData[i+3] = Math.round(A_f);
//     }
// }

