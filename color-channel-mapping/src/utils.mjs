export function rgbArrayToHex(rgbArray) {
    return (rgbArray[0] << 16) + (rgbArray[1] << 8) + rgbArray[2]
}

export function hexToRgb(hex) {
    const b = hex % 256;
    hex /= 256;
    const g = hex % 256;
    hex /= 256;
    const r = hex % 256;
    return [r, g, b]
}

export function drawCircle(ctx, x, y, r, color) {
    ctx.beginPath();
    ctx.fillStyle = color
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}