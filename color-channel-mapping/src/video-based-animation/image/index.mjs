import { hexToRgb, rgbArrayToHex } from "../../utils.mjs";

const image = document.getElementById('image');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

image.decode().then(() => {
    ctx.drawImage(image, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const colorMappings = {
        0xff0000: 0x0000ff,
        0x00ff00: 0xff0000,
        0x0000ff: 0x00ff00,
    }
    replaceImageData(imageData.data, colorMappings);
    ctx.putImageData(imageData, 0, 0);
});

function replaceImageData(imageData, colorMappings) {
    for (let i = 0; i< imageData.length; i+=4) {
        const r = imageData[i];
        const g = imageData[i+1];
        const b = imageData[i+2];

        const hexColor = rgbArrayToHex([r, g, b]);

        if (hexColor in colorMappings) {
            const [newR, newG, newB] = hexToRgb(colorMappings[hexColor]);
            imageData[i] = newR;
            imageData[i+1] = newG;
            imageData[i+2] = newB;
        }
    }
}
