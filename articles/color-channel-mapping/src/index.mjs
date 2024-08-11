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

const iframes = document.querySelectorAll('iframe');

iframes.forEach(iframe => {
    function resizeIframe() {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 20+ 'px';
    }

    iframe.onload = () => {
        resizeIframe(); // Initial resize after content load
    };

    setTimeout(() => {
        resizeIframe();
    }, 1000);
});
