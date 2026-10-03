// Every video is 200x200 solid #3366cc. Files with alpha have four vertical stripes
// at 0 / 10% / 50% / 100% opacity (see tools/generate.sh), so the expected 8-bit alpha
// is the same at every bit depth.
const EXPECTED_ALPHA = [0, 26, 128, 255];
const OPAQUE_ALPHA = [255, 255, 255, 255];
const SAMPLE_X = [25, 75, 125, 175];
const SAMPLE_Y = 100;
const TOLERANCE = 2;

const CHROMA_CODES = { '4:2:0': '01', '4:2:2': '02', '4:4:4': '03' };

const VIDEOS = [
    { profile: 0, bitDepth: 8, chroma: '4:2:0', alpha: false },
    { profile: 0, bitDepth: 8, chroma: '4:2:0', alpha: true },
    { profile: 1, bitDepth: 8, chroma: '4:2:2', alpha: false },
    { profile: 1, bitDepth: 8, chroma: '4:2:2', alpha: true },
    { profile: 1, bitDepth: 8, chroma: '4:4:4', alpha: false },
    { profile: 1, bitDepth: 8, chroma: '4:4:4', alpha: true },
    { profile: 2, bitDepth: 10, chroma: '4:2:0', alpha: false },
    { profile: 2, bitDepth: 10, chroma: '4:2:0', alpha: true },
    { profile: 2, bitDepth: 12, chroma: '4:2:0', alpha: false },
    { profile: 3, bitDepth: 10, chroma: '4:2:2', alpha: false },
    { profile: 3, bitDepth: 10, chroma: '4:2:2', alpha: true },
    { profile: 3, bitDepth: 10, chroma: '4:4:4', alpha: false },
    { profile: 3, bitDepth: 10, chroma: '4:4:4', alpha: true },
    { profile: 3, bitDepth: 12, chroma: '4:4:4', alpha: false },
    { profile: 3, bitDepth: 12, chroma: '4:4:4', alpha: true },
];

for (const video of VIDEOS) {
    video.file = `vp9-p${video.profile}-${video.bitDepth}bit-${video.chroma.replaceAll(':', '')}${video.alpha ? '-alpha' : ''}.webm`;
    // vp09.PP.LL.DD.CC.cp.tc.mc.FF: level 1.0, BT.709, limited range.
    const pad = (n) => String(n).padStart(2, '0');
    video.codecs = `vp09.${pad(video.profile)}.10.${pad(video.bitDepth)}.${CHROMA_CODES[video.chroma]}.01.01.01.00`;
}

const results = document.getElementById('results');
const summary = document.getElementById('summary');
const summaryLines = [];

document.getElementById('user-agent').textContent = navigator.userAgent;

function waitFor(element, eventName, timeoutMs = 10000) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error(`timeout waiting for ${eventName}`)), timeoutMs);
        element.addEventListener(eventName, () => {
            clearTimeout(timer);
            resolve();
        }, { once: true });
        element.addEventListener('error', () => {
            clearTimeout(timer);
            const error = element.error;
            reject(new Error(error ? `MediaError ${error.code}${error.message ? ` (${error.message})` : ''}` : 'error'));
        }, { once: true });
    });
}

function cell(row, text, className) {
    const td = document.createElement('td');
    if (className)
        td.className = className;
    if (text instanceof Node)
        td.append(text);
    else
        td.textContent = text;
    row.append(td);
    return td;
}

async function queryMediaCapabilities(contentType) {
    if (!navigator.mediaCapabilities)
        return 'n/a';
    try {
        const info = await navigator.mediaCapabilities.decodingInfo({
            type: 'file',
            video: { contentType, width: 200, height: 200, bitrate: 100000, framerate: 10 },
        });
        if (!info.supported)
            return 'unsupported';
        return ['supported', info.smooth && 'smooth', info.powerEfficient && 'powerEfficient'].filter(Boolean).join(', ');
    } catch (e) {
        return `error: ${e.message}`;
    }
}

function readAlpha(video) {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d', { willReadFrequently: true });
    context.drawImage(video, 0, 0);
    try {
        return SAMPLE_X.map((x) => context.getImageData(x, SAMPLE_Y, 1, 1).data[3]);
    } catch (e) {
        return null; // canvas tainted (file:// origin)
    }
}

function readFrameFormat(video) {
    if (typeof VideoFrame === 'undefined')
        return 'n/a';
    try {
        const frame = new VideoFrame(video);
        const format = frame.format ?? 'null (opaque)';
        frame.close();
        return format;
    } catch (e) {
        return `error: ${e.message}`;
    }
}

function judge(entry, alpha) {
    if (alpha === null)
        return { text: 'N/A', color: '#888' };
    const expected = entry.alpha ? EXPECTED_ALPHA : OPAQUE_ALPHA;
    if (alpha.every((value, i) => Math.abs(value - expected[i]) <= TOLERANCE))
        return { text: 'OK', color: '#080' };
    if (entry.alpha && alpha.every((value) => value >= 255 - TOLERANCE))
        return { text: 'ALPHA IGNORED', color: '#c60' };
    return { text: 'WRONG ALPHA', color: '#c00' };
}

async function probe(entry) {
    const contentType = `video/webm; codecs="${entry.codecs}"`;
    const row = document.createElement('tr');
    results.append(row);

    const link = document.createElement('a');
    link.href = `../videos/${entry.file}`;
    link.textContent = entry.file;
    cell(row, link, 'mono');
    cell(row, String(entry.profile));
    cell(row, `${entry.bitDepth}-bit`);
    cell(row, entry.chroma);
    cell(row, entry.alpha ? 'yes' : 'no');

    const canPlay = document.createElement('video').canPlayType(contentType) || '""';
    cell(row, canPlay, 'mono');
    const mse = window.MediaSource ? String(MediaSource.isTypeSupported(contentType)) : 'n/a';
    cell(row, mse, 'mono');
    const capabilities = await queryMediaCapabilities(contentType);
    cell(row, capabilities, 'mono');

    const playbackCell = cell(row, '…', 'mono');
    const formatCell = cell(row, '…', 'mono');
    const alphaCell = cell(row, '…', 'mono');
    const verdict = document.createElement('span');
    verdict.className = 'verdict';
    verdict.textContent = '…';
    cell(row, verdict);

    const preview = document.createElement('div');
    preview.className = 'preview';
    const video = document.createElement('video');
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.title = entry.codecs;
    preview.append(video);
    cell(row, preview);

    const expected = entry.alpha ? EXPECTED_ALPHA : OPAQUE_ALPHA;
    let playback = 'ok';
    let format = '-';
    let alpha = null;
    let result;
    try {
        video.src = `../videos/${entry.file}`;
        await waitFor(video, 'loadeddata');
        video.currentTime = 0.5;
        await waitFor(video, 'seeked');
        format = readFrameFormat(video);
        alpha = readAlpha(video);
        result = judge(entry, alpha);
        video.play().catch(() => { /* preview only */ });
    } catch (e) {
        playback = e.message;
        result = { text: 'FAIL', color: '#c00' };
    }

    playbackCell.textContent = playback;
    formatCell.textContent = format;
    alphaCell.textContent = alpha
        ? `${alpha.join(' / ')} (${expected.join(' / ')})`
        : playback === 'ok' ? 'unavailable, serve over http' : '-';
    verdict.textContent = result.text;
    verdict.style.background = result.color;

    summaryLines.push([
        entry.file.padEnd(30),
        result.text.padEnd(13),
        `canPlayType=${canPlay}`.padEnd(23),
        `mse=${mse}`.padEnd(9),
        `playback=${playback}`,
        `format=${format}`,
        `alpha=${alpha ? alpha.join('/') : '-'}`,
    ].join(' '));
    summary.textContent = [navigator.userAgent, '', ...summaryLines].join('\n');
}

for (const entry of VIDEOS)
    await probe(entry);
