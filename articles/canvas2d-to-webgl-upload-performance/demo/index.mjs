const PRESETS = {
    '720': [1280, 720],
    '1080': [1920, 1080],
    '2k': [2560, 1440],
    '4k': [3840, 2160],
    '8k': [7680, 4320],
};

function bindPreset(presetId, widthId, heightId) {
    const presetEl = document.getElementById(presetId);
    const widthEl = document.getElementById(widthId);
    const heightEl = document.getElementById(heightId);
    presetEl.addEventListener('change', () => {
        const p = PRESETS[presetEl.value];
        if (p) {
            widthEl.value = p[0];
            heightEl.value = p[1];
        }
    });
    const onCustom = () => { presetEl.value = 'custom'; };
    widthEl.addEventListener('input', onCustom);
    heightEl.addEventListener('input', onCustom);
}

bindPreset('gl-preset', 'gl-width', 'gl-height');
bindPreset('c2d-preset', 'c2d-width', 'c2d-height');

const runBtn = document.getElementById('run');
const statusEl = document.getElementById('status');
const tbody = document.querySelector('#result-table tbody');
const framesContainer = document.getElementById('frames');

function waitForMessage(iframe, type) {
    return new Promise((resolve) => {
        const handler = (e) => {
            if (e.source !== iframe.contentWindow) return;
            if (!e.data || e.data.type !== type) return;
            window.removeEventListener('message', handler);
            resolve(e.data);
        };
        window.addEventListener('message', handler);
    });
}

function createIframe() {
    const iframe = document.createElement('iframe');
    iframe.src = 'iframe.html';
    iframe.width = '320';
    iframe.height = '200';
    framesContainer.appendChild(iframe);
    return iframe;
}

async function runTest() {
    runBtn.disabled = true;

    const params = {
        glW: +document.getElementById('gl-width').value,
        glH: +document.getElementById('gl-height').value,
        c2dW: +document.getElementById('c2d-width').value,
        c2dH: +document.getElementById('c2d-height').value,
        c2dCount: +document.getElementById('c2d-count').value,
        iterations: +document.getElementById('iterations').value,
        uploadMethod: document.getElementById('upload-method').value,
        sourceType: document.getElementById('source-type').value,
    };
    const contextsCount = +document.getElementById('contexts-count').value;

    framesContainer.innerHTML = '';

    statusEl.textContent = `creating ${contextsCount} iframe(s)...`;
    const iframes = [];
    const readyPromises = [];
    for (let i = 0; i < contextsCount; i++) {
        const iframe = createIframe();
        iframes.push(iframe);
        readyPromises.push(waitForMessage(iframe, 'ready'));
    }
    await Promise.all(readyPromises);

    statusEl.textContent = 'running...';
    const resultPromises = iframes.map((iframe, i) => {
        const p = waitForMessage(iframe, 'result');
        iframe.contentWindow.postMessage({ type: 'start', id: i, params }, '*');
        return p;
    });

    const messages = await Promise.all(resultPromises);
    const results = messages.map((m) => m.result);
    const fpsList = results.map((r) => r.fps);
    const sumFps = fpsList.reduce((a, b) => a + b, 0);
    const avgFps = sumFps / fpsList.length;

    const bytesPerIter = params.c2dCount * params.c2dW * params.c2dH * 4;
    const throughputList = fpsList.map((f) => bytesPerIter * f);
    const sumThroughput = throughputList.reduce((a, b) => a + b, 0);

    addRow({ ...params, contextsCount, fpsList, sumFps, avgFps, bytesPerIter, throughputList, sumThroughput });
    statusEl.textContent = `done. Sum FPS: ${sumFps.toFixed(2)}, sum throughput: ${formatBytesPerSec(sumThroughput)}`;
    runBtn.disabled = false;
}

function formatBytes(bytes) {
    if (bytes >= 1024 ** 3) return (bytes / 1024 ** 3).toFixed(2) + ' GB';
    if (bytes >= 1024 ** 2) return (bytes / 1024 ** 2).toFixed(2) + ' MB';
    if (bytes >= 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return bytes + ' B';
}

function formatBytesPerSec(bps) {
    if (bps >= 1024 ** 3) return (bps / 1024 ** 3).toFixed(2) + ' GB/s';
    if (bps >= 1024 ** 2) return (bps / 1024 ** 2).toFixed(2) + ' MB/s';
    if (bps >= 1024) return (bps / 1024).toFixed(2) + ' KB/s';
    return bps.toFixed(0) + ' B/s';
}

let counter = 0;
function addRow(r) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${++counter}</td>
        <td>${r.glW}x${r.glH}</td>
        <td>${r.c2dW}x${r.c2dH}</td>
        <td>${r.c2dCount}</td>
        <td>${r.uploadMethod}</td>
        <td>${r.sourceType}</td>
        <td>${r.iterations}</td>
        <td>${r.contextsCount}</td>
        <td>${r.fpsList.map((f) => f.toFixed(2)).join(', ')}</td>
        <td>${r.sumFps.toFixed(2)}</td>
        <td>${r.avgFps.toFixed(2)}</td>
        <td>${formatBytes(r.bytesPerIter)}</td>
        <td>${r.throughputList.map(formatBytesPerSec).join(', ')}</td>
        <td>${formatBytesPerSec(r.sumThroughput)}</td>
    `;
    tbody.appendChild(tr);
}

runBtn.addEventListener('click', runTest);
