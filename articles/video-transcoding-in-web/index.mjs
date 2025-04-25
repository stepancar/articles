document.querySelectorAll('iframe').forEach((iframe) => {
    iframe.addEventListener('load', () => {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.body.style.margin = '0';
    });
});
