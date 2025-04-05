import { LutSelector } from './utils.mjs';

const iframes = document.querySelectorAll('iframe');

iframes.forEach(iframe => {
    function resizeIframe() {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 20 + 'px';
    }

    iframe.onload = () => {
        resizeIframe(); // Initial resize after content load
    };

    setTimeout(() => {
        resizeIframe();
    }, 1000);
});


document.querySelectorAll('iframe').forEach((iframe) => {
    iframe.addEventListener('load', () => {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.body.style.margin = '0';
    });
});

document.querySelector('lut-selector').addEventListener('change', (event) => {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        const lutSelector = iframeDoc.querySelector('lut-selector');
        lutSelector.presets = event.target.presets;
        lutSelector.selectedIndex = event.target.selectedIndex;
    });
});
