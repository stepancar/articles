const video = document.getElementById('demo-video');
const status = document.getElementById('demo-status');
const alphaReadout = document.getElementById('alpha-readout');

const sampleCanvas = document.createElement('canvas');

function safePlay() {
    const p = video.play();
    if (p)
        p.catch(() => { /* interrupted by pause()/seek - fine */ });
}

function sampleAlpha() {
    if (!video.videoWidth)
        return null;
    sampleCanvas.width = video.videoWidth;
    sampleCanvas.height = video.videoHeight;
    const context = sampleCanvas.getContext('2d', { willReadFrequently: true });
    context.drawImage(video, 0, 0);
    try {
        const data = context.getImageData(0, video.videoHeight / 2, video.videoWidth, 1).data;
        let visible = 0;
        for (let i = 3; i < data.length; i += 4) {
            if (data[i] > 128)
                visible++;
        }
        return Math.round(100 * visible / video.videoWidth);
    } catch (e) {
        return null; // canvas tainted (file:// origin)
    }
}

setInterval(() => {
    if (video.error) {
        status.textContent = `t = ${video.currentTime.toFixed(2)}s | MediaError code ${video.error.code}`
            + (video.error.code === 3 ? ' (MEDIA_ERR_DECODE - the alpha delta killed the whole pipeline; press Reload)' : '');
        alphaReadout.textContent = '';
        return;
    }
    status.textContent = `t = ${video.currentTime.toFixed(2)}s`
        + ` | color keyframes: 0/1/2/3/4/5s | alpha keyframes: 0/3s only`;
    const pct = sampleAlpha();
    if (pct === null) {
        alphaReadout.textContent = 'opaque row coverage: n/a (serve over http for pixel readout)';
        return;
    }
    alphaReadout.textContent = `opaque row coverage: ${pct}% ` +
        (pct > 90 ? '→ alpha LOST (fully opaque)' : pct < 60 ? '→ alpha applied (moving bar)' : '');
}, 120);

for (const button of document.querySelectorAll('[data-seek]')) {
    button.addEventListener('click', () => {
        video.currentTime = parseFloat(button.dataset.seek);
        safePlay();
    });
}
document.getElementById('btn-pause').addEventListener('click', () => video.pause());
document.getElementById('btn-play').addEventListener('click', safePlay);
document.getElementById('btn-reload').addEventListener('click', () => {
    video.load();
    safePlay();
});
