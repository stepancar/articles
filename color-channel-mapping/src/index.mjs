import { PalettesSelector } from './utils.mjs';

const paleteSelector = new PalettesSelector(document.getElementById('themeSelect'));

paleteSelector.addEventListener('change', () => {
    document.querySelectorAll('iframe').forEach((iframe) => {
        iframe.contentWindow.postMessage({
            type: 'changeTheme',
            value: paleteSelector.value
        }, '*');
    });
});
