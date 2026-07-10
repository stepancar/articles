const video = document.getElementById('demo-video');
const status = document.getElementById('demo-status');
const alphaReadout = document.getElementById('alpha-readout');
const verdict = document.getElementById('alpha-verdict');

const sampleCanvas = document.createElement('canvas');

function safePlay() {
    const p = video.play();
    if (p)
        p.catch(() => { /* interrupted by pause()/seek - fine */ });
}

// The alpha mask is analytic: a bar covering x ∈ [m-80, m), m = (t*160) mod 400.
// This gives us ground truth to compare decoded pixels against.
function expectedBarCenter(t) {
    const m = (t * 160) % 400;
    const start = Math.max(0, m - 80);
    const end = Math.min(320, m);
    if (end <= start)
        return null; // bar fully off-screen (never happens for our params)
    return (start + end) / 2;
}

function measureRow() {
    if (!video.videoWidth)
        return null;
    sampleCanvas.width = video.videoWidth;
    sampleCanvas.height = video.videoHeight;
    const context = sampleCanvas.getContext('2d', { willReadFrequently: true });
    context.drawImage(video, 0, 0);
    try {
        const data = context.getImageData(0, video.videoHeight / 2, video.videoWidth, 1).data;
        let visible = 0, sum = 0;
        for (let x = 0; x < video.videoWidth; x++) {
            if (data[x * 4 + 3] > 128) {
                visible++;
                sum += x;
            }
        }
        return { coverage: visible / video.videoWidth, center: visible ? sum / visible : null };
    } catch (e) {
        return null; // canvas tainted (file:// origin)
    }
}

function classify() {
    if (video.error)
        return { state: 'DEAD', detail: `MediaError code ${video.error.code}` + (video.error.code === 3 ? ' (MEDIA_ERR_DECODE) - pipeline killed by the alpha delta; press Reload' : ''), color: '#c00' };
    const m = measureRow();
    if (m === null)
        return { state: 'N/A', detail: 'pixel readout unavailable (serve over http)', color: '#888' };
    if (m.coverage > 0.9)
        return { state: 'ALPHA DROPPED', detail: 'frame is fully opaque - alpha plane was undecodable and got ignored (Firefox/Safari strategy)', color: '#c60' };
    if (m.center === null)
        return { state: 'ALL TRANSPARENT', detail: 'no opaque pixels', color: '#888' };
    const expected = expectedBarCenter(video.currentTime);
    if (expected === null)
        return { state: 'N/A', detail: '', color: '#888' };
    const offset = Math.round(m.center - expected);
    if (Math.abs(offset) <= 28)
        return { state: 'CORRECT', detail: `bar within ${offset}px of the analytically expected position`, color: '#080' };
    return { state: 'GHOST MASK', detail: `bar is ${offset}px away from where it should be at t=${video.currentTime.toFixed(2)}s - decoded against stale pre-seek references (Chrome strategy)`, color: '#c00' };
}

setInterval(() => {
    status.textContent = `t = ${video.currentTime.toFixed(2)}s | color keyframes: 0/1/2/3/4/5s | alpha keyframes: 0/3s only`;
    const c = classify();
    verdict.textContent = c.state;
    verdict.style.background = c.color;
    alphaReadout.textContent = c.detail;
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
