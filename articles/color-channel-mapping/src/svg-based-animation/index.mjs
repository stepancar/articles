import { PalettesSelector, getCssHexColor } from '../utils.mjs';

const svg = document.getElementById('svg');
const paleteSelector = new PalettesSelector(document.getElementById('themeSelect'));

function replaceColors(svgElement, colorPalette) {
    for (let i = 0; i< colorPalette.length; i++) {
        svgElement.querySelectorAll(`[data-color-palette-index="${i}"]`).forEach((element) => {
            element.setAttribute('fill', getCssHexColor(colorPalette[i]));
        });
    }
}

replaceColors(svg, paleteSelector.value);
paleteSelector.addEventListener('change', () => {
    replaceColors(svg, paleteSelector.value);
});



