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

export function getCssHexColor(color) {
    return '#' + color.toString('16').padStart(6, '0');
}


export class PalettesSelector extends EventTarget {
    #value = null
    constructor(selectElement) {
        super();
        this.selectElement = selectElement;
        window.addEventListener('message', (event) => {
            if (event.data.type === 'changeTheme') {
                const themePalette = event.data.value;

                this.#value = themePalette;

                this.dispatchEvent(new Event('change'));
                // Apply the theme palette
            }
        });

        this.selectElement.addEventListener('change', () => {
            this.dispatchEvent(new Event('change'));
        });
    }
    get value() {
        return this.#value || JSON.parse(this.selectElement.value);
    }
}