/**
 * Getting a video to reach `canplay` in a tab that is already hidden.
 *
 * A run is triggered by `visibilitychange -> hidden`, so the element is created
 * and loaded in an already hidden tab, with nothing warmed up. Every load
 * milestone is recorded with the visibility state at that moment and, when it
 * only landed after the tab became visible again, with how long after that.
 *
 * Two strategies are compared under identical measurement:
 *   - `src`  assigns the network URL to the element (baseline);
 *   - `blob` fetches the bytes and assigns a blob: URL, so the element never
 *     touches the network stack or the disk cache.
 * On top of either, independent levers can be enabled: play() on a muted
 * element, a requestVideoFrameCallback() kick, and an audible audio keep-alive
 * that lifts the whole renderer process out of background priority.
 */

// Only the options survive a reload. The log and the verdict deliberately do
// not: a run happens without the page reloading, so nothing is ever lost by
// dropping them, and carrying an old run's lines into a fresh page only makes
// the current run harder to read.
const OPTS_KEY = 'hvsb.opts';

/**
 * Load milestones, in the order the spec fires them. `canplaythrough` is not
 * here on purpose: the run tears the element down at `canplay`, so tracking it
 * as a milestone would report a failure that is really just the teardown.
 */
const MILESTONES = ['loadstart', 'loadedmetadata', 'loadeddata', 'canplay'];

/** Traced in addition to the milestones: these explain a stuck load. */
const DIAGNOSTIC_EVENTS = ['canplaythrough', 'suspend', 'stalled', 'waiting', 'emptied', 'abort', 'error'];

/** Noisy ones, traced only in verbose mode. */
const VERBOSE_EVENTS = ['progress', 'timeupdate'];

/**
 * The test files are mp4, but GitHub serves them as application/octet-stream.
 * A Blob carrying that type would be rejected by the element, so the type is
 * forced rather than taken from the response.
 */
const BLOB_TYPE = 'video/mp4';

const CHECKBOXES = [
    'mutedPlay', 'kickRvfc', 'audioKeepAlive', 'fetchProbe', 'cacheBust', 'armOnHidden', 'drawFrames', 'verbose',
];
const NUMBERS = ['players', 'pollInterval', 'giveUpAfter', 'frameCount'];
const SELECTS = ['preload', 'strategy'];

/**
 * Width of a generated frame. Small on purpose: the point of the frame stage is
 * whether pixels come out at all while hidden, and a big readback would make
 * the draw itself the slow part.
 */
const FRAME_WIDTH = 160;

/** Every Nth pixel is inspected when deciding whether a frame is blank. */
const PIXEL_STRIDE = 7;

const el = (id) => document.getElementById(id);

const logView = el('log');
const statusView = el('status');
const videosContainer = el('videos');
const framesContainer = el('frames');
const audioStateView = el('audioState');
const verdictView = el('verdict');

let entries = [];
let origin = performance.now();
let running = false;
let controller = null;
let runIndex = 0;
let audioKeepAlive = null;
/** Set when the keep-alive was requested but no user gesture has armed it yet. */
let audioArmPending = false;

/**
 * Compact configuration tag stamped onto every log line, so a line read in the
 * middle of a long log still says which run and which levers produced it.
 */
let currentTag = '-';

function configTag(options, index) {
    const flags = [
        options.strategy === 'blob' ? 'B' : 'S',
        options.mutedPlay ? 'P' : '-',
        options.kickRvfc ? 'R' : '-',
        // Uppercase only when audio is really running: a requested but
        // unarmed keep-alive must not read as a run that had one.
        options.audioKeepAlive ? (audioState() === 'running' ? 'A' : 'a') : '-',
        options.cacheBust ? 'C' : '-',
        options.drawFrames ? 'F' : '-',
    ].join('');
    return `r${index}:${flags}`;
}

/**
 * When the tab last transitioned hidden -> visible, used to measure "unblocked
 * N ms after coming back". Deliberately starts as null: in a run that never
 * went hidden there is nothing to measure against, and reporting time since
 * page load here would read as if something had been unblocked.
 */
let becameVisibleAt = null;

function readOptions() {
    const options = { src: el('src').value.trim() };
    SELECTS.forEach((id) => {
        options[id] = el(id).value;
    });
    CHECKBOXES.forEach((id) => {
        options[id] = el(id).checked;
    });
    NUMBERS.forEach((id) => {
        options[id] = Number(el(id).value);
    });
    return options;
}

function persistOptions() {
    localStorage.setItem(OPTS_KEY, JSON.stringify(readOptions()));
}

function restoreOptions() {
    let stored;
    try {
        stored = JSON.parse(localStorage.getItem(OPTS_KEY) || 'null');
    } catch {
        return;
    }
    if (!stored) {
        return;
    }
    if (stored.src) {
        el('src').value = stored.src;
    }
    SELECTS.forEach((id) => {
        if (stored[id]) {
            el(id).value = stored[id];
        }
    });
    CHECKBOXES.forEach((id) => {
        if (typeof stored[id] === 'boolean') {
            el(id).checked = stored[id];
        }
    });
    NUMBERS.forEach((id) => {
        if (Number.isFinite(stored[id])) {
            el(id).value = stored[id];
        }
    });
}

function format(entry) {
    const columns = [
        `+${String(entry.t).padStart(9)}ms`,
        entry.vis === 'hidden' ? 'HIDDEN ' : 'visible',
        (entry.cfg ?? '-').padEnd(10),
        entry.kind.padEnd(16),
        entry.message,
    ];
    if (entry.data) {
        columns.push(JSON.stringify(entry.data));
    }
    return columns.join(' | ');
}

function log(kind, message, data) {
    const entry = {
        t: Number((performance.now() - origin).toFixed(1)),
        clock: new Date().toISOString().slice(11, 23),
        vis: document.visibilityState,
        cfg: currentTag,
        kind,
        message,
    };
    if (data) {
        entry.data = data;
    }
    entries.push(entry);
    logView.appendChild(document.createTextNode(`${format(entry)}\n`));
    return entry;
}

function setStatus(text) {
    statusView.textContent = text;
}

/**
 * The one answer the demo is asked for, stated at the top of the page: how many
 * frames came back as real pictures while the tab was hidden, and for the ones
 * that did not, which of the several ways of failing it was. The distinction
 * matters because they have different fixes -- a blank frame is a decoder that
 * produced nothing, a frame drawn while visible is work that was merely
 * deferred until the tab came back, and a stuck seek never got that far.
 */
function renderVerdict(frames, tag) {
    if (!frames) {
        verdictView.hidden = true;
        return;
    }

    const failed = frames.requested - frames.okWhileHidden;
    const state = frames.okWhileHidden === 0 ? 'fail' : failed === 0 ? 'ok' : 'partial';

    const breakdown = [
        ['blank while hidden (drawn in the background, but carried no picture)', frames.blankWhileHidden],
        ['only after the tab became visible again (deferred, not done in the background)',
            frames.okWhileVisible + frames.blankWhileVisible],
        ['seek never completed', frames.seekFailures],
        ['never attempted (the element did not reach canplay)', frames.notAttempted],
    ].filter(([, count]) => count > 0);

    verdictView.hidden = false;
    verdictView.dataset.state = state;
    verdictView.replaceChildren(
        Object.assign(document.createElement('div'), {
            className: 'verdict-headline',
            textContent: `Frames generated in the background: ${frames.okWhileHidden} of ${frames.requested}`,
        }),
        Object.assign(document.createElement('div'), {
            className: 'verdict-fail',
            textContent: `Not generated in the background: ${failed} of ${frames.requested}`,
        }),
        Object.assign(document.createElement('ul'), {
            className: 'verdict-breakdown',
        }),
        Object.assign(document.createElement('div'), {
            className: 'verdict-config',
            textContent: `config ${tag}`,
        }),
    );

    const list = verdictView.querySelector('.verdict-breakdown');
    if (breakdown.length === 0) {
        list.remove();
    } else {
        breakdown.forEach(([label, count]) => {
            list.appendChild(Object.assign(document.createElement('li'), { textContent: `${count} — ${label}` }));
        });
    }
}

function mediaState(video) {
    return {
        readyState: video.readyState,
        networkState: video.networkState,
        buffered: video.buffered.length ? Number(video.buffered.end(video.buffered.length - 1).toFixed(3)) : 0,
    };
}

/** How long ago the tab came back, or null if it never went hidden. */
function sinceVisible() {
    if (document.visibilityState !== 'visible' || becameVisibleAt === null) {
        return null;
    }
    return Number((performance.now() - becameVisibleAt).toFixed(1));
}

const since = (start) => Number((performance.now() - start).toFixed(1));

/**
 * Records the first occurrence of every milestone with the timings that matter:
 * time since the run began (so strategies with a fetch stage stay comparable),
 * time since `src` was actually assigned, whether the tab was hidden at that
 * point, and how long after coming back it landed.
 */
function watchMilestones(video, tag, timings, verbose) {
    const reached = {};

    MILESTONES.forEach((name) => {
        video.addEventListener(name, () => {
            if (reached[name]) {
                return;
            }
            const record = {
                msSinceRunStart: since(timings.runStartedAt),
                msSinceSrc: timings.srcAssignedAt === null ? null : since(timings.srcAssignedAt),
                firedWhile: document.visibilityState,
                msAfterBecomingVisible: sinceVisible(),
                ...mediaState(video),
            };
            reached[name] = record;
            log(`reached:${name}`, tag, record);
        });
    });

    DIAGNOSTIC_EVENTS.forEach((name) => {
        video.addEventListener(name, () => {
            const data = mediaState(video);
            if (name === 'error' && video.error) {
                data.error = `code ${video.error.code}: ${video.error.message}`;
            }
            log(`ev:${name}`, tag, data);
        });
    });

    if (verbose) {
        VERBOSE_EVENTS.forEach((name) => {
            video.addEventListener(name, () => log(`ev:${name}`, tag, mediaState(video)));
        });
    }

    return reached;
}

/**
 * Polls the element state at a fixed interval. Two things come out of it: proof
 * that a stuck load really is not progressing, and the actual interval, which
 * exposes how hard timers are throttled in the background.
 */
function startPolling(video, tag, options, signal) {
    let previous = performance.now();

    const tick = () => {
        if (signal.aborted) {
            return;
        }
        const now = performance.now();
        log('poll', tag, {
            interval: Number((now - previous).toFixed(1)),
            requested: options.pollInterval,
            ...mediaState(video),
        });
        previous = now;
        if (options.kickRvfc) {
            video.requestVideoFrameCallback?.(() => {});
        }
        timer = setTimeout(tick, options.pollInterval);
    };

    let timer = setTimeout(tick, options.pollInterval);
    return () => clearTimeout(timer);
}

/**
 * Resolves on the first of `events`, or with a reason on error/give-up/abort.
 * Never rejects, so a stuck step is reported instead of breaking the run.
 */
function waitFor(target, events, { giveUpAfter, signal }) {
    return new Promise((resolve) => {
        const watchesError = events.includes('error');

        const cleanup = () => {
            events.forEach((name) => target.removeEventListener(name, onEvent));
            if (!watchesError) {
                target.removeEventListener('error', onError);
            }
            signal?.removeEventListener('abort', onAbort);
            clearTimeout(timer);
        };

        const onEvent = (event) => {
            cleanup();
            resolve({ ok: true, event: event.type });
        };
        const onError = () => {
            cleanup();
            resolve({ ok: false, reason: 'error' });
        };
        const onAbort = () => {
            cleanup();
            resolve({ ok: false, reason: 'aborted' });
        };
        const timer = setTimeout(() => {
            cleanup();
            resolve({ ok: false, reason: 'gave-up' });
        }, giveUpAfter);

        events.forEach((name) => target.addEventListener(name, onEvent));
        if (!watchesError) {
            target.addEventListener('error', onError);
        }
        signal?.addEventListener('abort', onAbort);
    });
}

/**
 * Streams the URL and reports byte progress. Used both by the blob strategy and
 * by the standalone probe, so their numbers are directly comparable.
 */
async function streamUrl(url, tag, options, signal) {
    const startedAt = performance.now();

    let response;
    try {
        response = await fetch(url, { signal });
    } catch (error) {
        log('fetch', `${tag} request failed`, { msSinceStart: since(startedAt), error: String(error) });
        return null;
    }

    log('fetch', `${tag} response headers received`, {
        msSinceStart: since(startedAt),
        firedWhile: document.visibilityState,
        msAfterBecomingVisible: sinceVisible(),
        status: response.status,
        contentLength: response.headers.get('content-length'),
    });

    if (!response.ok || !response.body) {
        return null;
    }

    const reader = response.body.getReader();
    const chunks = [];
    let bytes = 0;
    let lastReport = performance.now();

    try {
        for (;;) {
            const { done, value } = await reader.read();
            if (done) {
                break;
            }
            chunks.push(value);
            bytes += value.byteLength;
            if (performance.now() - lastReport >= options.pollInterval) {
                lastReport = performance.now();
                log('fetch', `${tag} ${bytes} bytes so far`, {
                    msSinceStart: since(startedAt),
                    chunks: chunks.length,
                    firedWhile: document.visibilityState,
                });
            }
        }
    } catch (error) {
        log('fetch', `${tag} body read failed`, { bytes, error: String(error) });
        return null;
    }

    log('fetch', `${tag} body fully read`, {
        msSinceStart: since(startedAt),
        firedWhile: document.visibilityState,
        msAfterBecomingVisible: sinceVisible(),
        bytes,
        chunks: chunks.length,
    });

    // Flatten into one contiguous buffer. A Blob assembled from several parts
    // (or a sliced Blob) makes the media element stall at readyState 0 for
    // seconds, while a single-part Blob reaches canplay immediately -- so the
    // streaming above is kept only for the progress reporting.
    const merged = new Uint8Array(bytes);
    let offset = 0;
    chunks.forEach((chunk) => {
        merged.set(chunk, offset);
        offset += chunk.byteLength;
    });
    return merged;
}

/**
 * Statistics over the drawn pixels. `canplay` firing only means the element
 * claims it has data; it says nothing about whether a decoded frame can be read
 * back. A hidden tab can hand out a fully transparent or uniformly black
 * surface, and that is indistinguishable from success unless the pixels are
 * actually inspected -- hence `blank`, which is the real pass/fail of a frame.
 */
function frameStats(context, width, height) {
    let data;
    try {
        ({ data } = context.getImageData(0, 0, width, height));
    } catch (error) {
        // A tainted canvas: the source is cross-origin and did not answer the
        // CORS request. The frame was drawn, it just cannot be inspected, and
        // saying so beats reporting it as blank.
        return { tainted: true, blank: false, error: String(error) };
    }

    let min = 255;
    let max = 0;
    let sum = 0;
    let samples = 0;
    let opaque = 0;

    for (let i = 0; i < data.length; i += 4 * PIXEL_STRIDE) {
        // Rec. 601 luma is enough to tell a real frame from a flat surface.
        const luma = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        min = Math.min(min, luma);
        max = Math.max(max, luma);
        sum += luma;
        samples++;
        if (data[i + 3] > 0) {
            opaque++;
        }
    }

    return {
        meanLuma: Number((sum / samples).toFixed(2)),
        minLuma: Number(min.toFixed(2)),
        maxLuma: Number(max.toFixed(2)),
        opaqueRatio: Number((opaque / samples).toFixed(3)),
        // A frame with no variation at all carries no picture, whether it came
        // out transparent, black or white.
        blank: max - min < 1,
    };
}

/**
 * Frame outcomes are counted split by visibility, and blank frames are counted
 * apart from real ones. Lumping them together would let a run that produced six
 * empty surfaces in the background read exactly like a run that produced six
 * pictures, which is the one distinction the whole demo exists to make.
 */
function emptyFrameSummary(requested) {
    return {
        requested,
        okWhileHidden: 0,
        blankWhileHidden: 0,
        okWhileVisible: 0,
        blankWhileVisible: 0,
        seekFailures: 0,
        notAttempted: 0,
    };
}

/** Evenly spaced sample points, biased off both ends of the timeline. */
function frameTimes(duration, count) {
    if (!Number.isFinite(duration) || duration <= 0) {
        return [];
    }
    return Array.from({ length: count }, (_, i) => Number((duration * ((i + 0.5) / count)).toFixed(3)));
}

/**
 * Generates frames the way a real consumer would: seek, wait for `seeked`, draw
 * the element into a canvas, keep the result. Every frame records where the tab
 * was at the time, so a run shows both whether seeking completes while hidden
 * and whether the pixels that come back are real.
 */
async function captureFrames(video, tag, options, timings, signal) {
    const width = FRAME_WIDTH;
    const height = Math.max(1, Math.round(width * (video.videoHeight / video.videoWidth || 9 / 16)));

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    // `willReadFrequently` keeps the surface on the CPU side, which is what a
    // per-frame getImageData wants and avoids a readback stall per frame.
    const context = canvas.getContext('2d', { willReadFrequently: true });

    const strip = document.createElement('div');
    strip.className = 'frame-strip';
    strip.appendChild(Object.assign(document.createElement('span'), {
        className: 'frame-strip-label',
        textContent: `${currentTag} ${tag}`,
    }));
    framesContainer.appendChild(strip);

    const times = frameTimes(video.duration, options.frameCount);
    if (times.length === 0) {
        log('frames', `${tag} no usable duration (${video.duration}), skipping frame generation`);
        return emptyFrameSummary(options.frameCount);
    }

    const summary = emptyFrameSummary(times.length);

    for (const [index, time] of times.entries()) {
        if (signal.aborted) {
            break;
        }

        const seekStartedAt = performance.now();
        video.currentTime = time;
        const seeked = await waitFor(video, ['seeked'], { giveUpAfter: options.giveUpAfter, signal });

        if (!seeked.ok) {
            summary.seekFailures++;
            log('STUCK', `${tag} frame ${index} seek to ${time}s: ${seeked.reason}`, {
                msSinceRunStart: since(timings.runStartedAt),
                firedWhile: document.visibilityState,
                ...mediaState(video),
            });
            continue;
        }

        const drawStartedAt = performance.now();
        context.clearRect(0, 0, width, height);
        context.drawImage(video, 0, 0, width, height);
        const stats = frameStats(context, width, height);

        const hidden = document.visibilityState === 'hidden';
        // A tainted frame cannot be judged, so it is counted with the failures
        // rather than credited as a picture that came back.
        const usable = !stats.blank && !stats.tainted;
        summary[`${usable ? 'ok' : 'blank'}While${hidden ? 'Hidden' : 'Visible'}`]++;

        const thumbnail = document.createElement('canvas');
        thumbnail.width = width;
        thumbnail.height = height;
        const verdict = stats.tainted ? 'TAINTED' : stats.blank ? 'BLANK' : 'ok';
        thumbnail.title = `${tag} t=${time}s ${verdict}`;
        thumbnail.className = verdict === 'ok' ? 'frame' : 'frame blank';
        thumbnail.getContext('2d').drawImage(canvas, 0, 0);
        strip.appendChild(thumbnail);

        log(verdict === 'ok' ? 'frame' : `frame:${verdict}`, `${tag} frame ${index} at ${time}s`, {
            msSinceRunStart: since(timings.runStartedAt),
            seekMs: Number((drawStartedAt - seekStartedAt).toFixed(1)),
            drawMs: since(drawStartedAt),
            firedWhile: document.visibilityState,
            msAfterBecomingVisible: sinceVisible(),
            actualTime: Number(video.currentTime.toFixed(3)),
            ...stats,
        });
    }

    // Whatever the loop did not reach -- an abort, mostly -- still has to show
    // up somewhere, or the breakdown would not add up to `requested`.
    summary.notAttempted = summary.requested - (
        summary.okWhileHidden + summary.blankWhileHidden +
        summary.okWhileVisible + summary.blankWhileVisible + summary.seekFailures
    );

    log('frames', `${tag} frame generation done`, summary);
    return summary;
}

/**
 * The URL a single consumer should request. Each gets its own cache entry, so
 * every element in a multi-element run does a real download rather than reading
 * back what a sibling just cached.
 */
function bustedUrl(options, consumer) {
    if (!options.cacheBust) {
        return options.src;
    }
    const url = new URL(options.src, location.href);
    url.searchParams.set('cachebust', `${options.cacheBustToken}-${consumer}`);
    return url.toString();
}

/** The standalone diagnostic probe: same request, no element involved. */
async function fetchProbe(options, signal) {
    log('fetch', 'probe starting');
    await streamUrl(bustedUrl(options, 'probe'), 'probe', options, signal);
}

async function runPlayer(index, options, signal) {
    const tag = `p${index}`;
    const timings = { runStartedAt: performance.now(), srcAssignedAt: null };

    const video = document.createElement('video');
    video.preload = options.preload;
    // Reading pixels back from a cross-origin video taints the canvas, so the
    // frame stage needs CORS. It is requested only when frames are actually
    // generated: an `Origin` header on a server that does not answer it would
    // break a plain load run for no reason. Must precede the src assignment.
    if (options.drawFrames) {
        video.crossOrigin = 'anonymous';
    }
    video.muted = true;
    video.playsInline = true;
    video.width = 240;
    videosContainer.appendChild(video);

    const reached = watchMilestones(video, tag, timings, options.verbose);
    const stopPolling = startPolling(video, tag, options, signal);

    const teardown = (objectUrl) => {
        stopPolling();
        video.removeAttribute('src');
        video.load();
        video.remove();
        if (objectUrl) {
            URL.revokeObjectURL(objectUrl);
        }
    };

    const networkUrl = bustedUrl(options, tag);
    let source = networkUrl;
    let objectUrl = null;

    if (options.strategy === 'blob') {
        const bytes = await streamUrl(networkUrl, tag, options, signal);
        if (!bytes) {
            log('STUCK', `${tag} blob strategy: fetch did not deliver the bytes`);
            teardown(null);
            return { tag, ok: false, reason: 'fetch-failed', reached, strategy: options.strategy };
        }
        objectUrl = URL.createObjectURL(new Blob([bytes], { type: BLOB_TYPE }));
        source = objectUrl;
        log('blob', `${tag} blob url ready`, {
            msSinceRunStart: since(timings.runStartedAt),
            bytes: bytes.byteLength,
            firedWhile: document.visibilityState,
        });
    }

    log('load', `${tag} assigning src`, {
        strategy: options.strategy,
        preload: video.preload,
        msSinceRunStart: since(timings.runStartedAt),
        vis: document.visibilityState,
    });
    timings.srcAssignedAt = performance.now();
    video.src = source;
    video.load();

    if (options.kickRvfc) {
        video.requestVideoFrameCallback?.(() => {});
    }

    if (options.mutedPlay) {
        video.play().then(
            () => log('play', `${tag} play() resolved`, mediaState(video)),
            (error) => log('play', `${tag} play() rejected`, { error: String(error) }),
        );
    }

    // canplay means readyState >= HAVE_FUTURE_DATA: the point at which the
    // element claims it can actually play.
    const result = await waitFor(video, ['canplay'], { giveUpAfter: options.giveUpAfter, signal });

    log(result.ok ? 'load' : 'STUCK', `${tag} canplay: ${result.ok ? 'ok' : result.reason}`, {
        msSinceRunStart: since(timings.runStartedAt),
        msSinceSrc: since(timings.srcAssignedAt),
        firedWhile: document.visibilityState,
        msAfterBecomingVisible: sinceVisible(),
        ...mediaState(video),
    });

    let frames = null;
    if (result.ok && options.drawFrames) {
        // Playback would keep moving currentTime under the seek loop, so a
        // playing element is parked before frames are generated.
        video.pause();
        frames = await captureFrames(video, tag, options, timings, signal);
    }

    teardown(objectUrl);
    return { tag, ok: result.ok, reason: result.reason, reached, frames, strategy: options.strategy };
}

function summarize(results, options, totalMs) {
    const summary = {
        strategy: options.strategy,
        levers: {
            mutedPlay: options.mutedPlay,
            kickRvfc: options.kickRvfc,
            audioKeepAlive: options.audioKeepAlive,
            audioKeepAliveState: audioState(),
        },
        totalMs: Math.round(totalMs),
        players: results.length,
    };

    MILESTONES.forEach((name) => {
        const records = results.map((result) => result.reached[name]).filter(Boolean);
        summary[name] = {
            reachedBy: records.length,
            whileHidden: records.filter((record) => record.firedWhile === 'hidden').length,
            whileVisible: records.filter((record) => record.firedWhile === 'visible').length,
            maxMsSinceRunStart: records.length ? Math.max(...records.map((record) => record.msSinceRunStart)) : null,
            maxMsAfterBecomingVisible: records.some((record) => record.msAfterBecomingVisible !== null)
                ? Math.max(...records.map((record) => record.msAfterBecomingVisible ?? 0))
                : null,
        };
    });

    summary.neverReachedCanplay = results.filter((result) => !result.ok).length;

    if (options.drawFrames) {
        // A player that never reached `canplay` never got to the frame stage.
        // Its frames are still owed, and counting them as not attempted keeps
        // the verdict honest instead of silently shrinking the denominator.
        const frameRuns = results.map(
            (result) => result.frames ?? emptyFrameSummary(options.frameCount),
        );
        const total = (key) => frameRuns.reduce((sum, run) => sum + run[key], 0);
        const notAttempted = frameRuns.reduce(
            (sum, run, index) => sum + (results[index].frames ? run.notAttempted : run.requested),
            0,
        );
        summary.frames = {
            requested: total('requested'),
            // The headline number: real pictures that came back while the tab
            // was hidden. Everything else is a way of not getting one.
            okWhileHidden: total('okWhileHidden'),
            blankWhileHidden: total('blankWhileHidden'),
            okWhileVisible: total('okWhileVisible'),
            blankWhileVisible: total('blankWhileVisible'),
            seekFailures: total('seekFailures'),
            notAttempted,
        };
    }

    return summary;
}

async function startRun(reason) {
    if (running) {
        log('run', `trigger ignored, a run is already in progress: ${reason}`);
        return;
    }

    running = true;
    controller = new AbortController();
    runIndex++;

    const options = readOptions();

    // One token per run; `bustedUrl` narrows it down per consumer. Busting the
    // URL once here instead would hand every player the same URL, so only the
    // first would do a real download and the rest would quietly ride its cache
    // entry -- turning a 16-element test into one load plus 15 cache hits.
    options.cacheBustToken = options.cacheBust ? `${runIndex}-${Math.round(performance.now())}` : null;

    currentTag = configTag(options, runIndex);
    setStatus(`run #${runIndex} in progress (${reason})`);

    if (options.audioKeepAlive && audioState() !== 'running') {
        log('audio', `keep-alive is requested but not running (${audioState()}); this run has no audio lever`);
    }

    const enabled = ['mutedPlay', 'kickRvfc', 'audioKeepAlive', 'cacheBust', 'fetchProbe', 'drawFrames']
        .filter((name) => options[name]);
    log(
        'run',
        `=== run #${runIndex} start (${reason}): strategy=${options.strategy} preload=${options.preload} ` +
        `players=${options.players} levers=[${enabled.join(',') || 'none'}] ===`,
    );
    log(
        'run',
        'tag legend: S=src B=blob, then P=play() R=rVFC A=audio(a=requested but not running) C=cacheBust ' +
        'F=frames, dash means off',
        options,
    );

    const started = performance.now();
    const tasks = Array.from({ length: options.players }, (_, i) => runPlayer(i, options, controller.signal));
    if (options.fetchProbe) {
        tasks.push(fetchProbe(options, controller.signal).then(() => null));
    }

    let results = [];
    try {
        results = (await Promise.all(tasks)).filter(Boolean);
    } catch (error) {
        log('ERROR', `run #${runIndex} threw`, { error: String(error) });
    }

    const summary = summarize(results, options, performance.now() - started);
    log('summary', `=== run #${runIndex} done ===`, summary);

    renderVerdict(summary.frames, currentTag);

    const canplay = summary.canplay;
    const framesNote = summary.frames
        ? `; frames generated in the background: ` +
          `${summary.frames.okWhileHidden}/${summary.frames.requested}`
        : '';
    setStatus(
        `run #${runIndex} (${options.strategy}) done: canplay reached by ${canplay.reachedBy}/${summary.players} ` +
        `(${canplay.whileHidden} while hidden, ${canplay.whileVisible} while visible), ` +
        `slowest ${canplay.maxMsSinceRunStart}ms after run start, ` +
        `${summary.neverReachedCanplay} never got there${framesNote}`,
    );

    running = false;
    controller = null;
    currentTag = '-';
}

/**
 * What the keep-alive is actually doing right now, as opposed to what the
 * checkbox claims. Only `running` means audio is really being produced and the
 * renderer is really held out of background priority.
 */
function audioState() {
    if (!audioKeepAlive) {
        return audioArmPending ? 'pending-gesture' : 'off';
    }
    return audioKeepAlive.context.state;
}

/**
 * The lever is only worth anything if it is `running` at the moment the tab
 * goes hidden, and that is decided before the run starts. Showing the live
 * state means a test can be trusted without reading the log afterwards to find
 * out whether the audio was on at all.
 */
function renderAudioState() {
    const state = audioState();
    audioStateView.textContent = state === 'running' ? 'running (lever is on)' : state;
    audioStateView.dataset.state = state;
}

/**
 * An AudioContext may only start inside a user gesture, once per document. The
 * checkbox itself is such a gesture, so ticking it works; a checkbox restored
 * from localStorage on page load is not, and there the context would silently
 * stay suspended. Rather than pretend, that case arms a one-shot listener and
 * starts on the first click or key press anywhere on the page.
 */
function armAudioOnGesture() {
    if (audioArmPending) {
        return;
    }
    audioArmPending = true;
    log('audio', 'keep-alive needs a user gesture, click anywhere on the page to arm it');
    setStatus('audio keep-alive armed: click anywhere on the page to start it');
    renderAudioState();

    const onGesture = () => {
        window.removeEventListener('pointerdown', onGesture);
        window.removeEventListener('keydown', onGesture);
        audioArmPending = false;
        if (el('audioKeepAlive').checked) {
            toggleAudioKeepAlive(true);
        }
    };
    window.addEventListener('pointerdown', onGesture, { once: true });
    window.addEventListener('keydown', onGesture, { once: true });
}

function toggleAudioKeepAlive(on) {
    if (on) {
        // A context left over from an earlier attempt is suspended, not absent,
        // so this branch has to resume it rather than fall through to the
        // "already on" case and quietly do nothing.
        if (audioKeepAlive) {
            if (audioKeepAlive.context.state !== 'running') {
                audioKeepAlive.context.resume().catch(
                    (error) => log('audio', 'keep-alive resume rejected', { error: String(error) }),
                );
            }
            renderAudioState();
            return;
        }
        if (!navigator.userActivation || navigator.userActivation.hasBeenActive) {
            startAudioKeepAlive();
        } else {
            armAudioOnGesture();
        }
        return;
    }

    if (!on && audioKeepAlive) {
        audioKeepAlive.oscillator.stop();
        audioKeepAlive.context.close();
        audioKeepAlive = null;
        audioArmPending = false;
        log('audio', 'keep-alive stopped');
        renderAudioState();
    }
}

function startAudioKeepAlive() {
    // The gain has to be audible to Chromium's AudioStreamMonitor: a
    // zero-gain stream is not counted, and the process stays backgrounded.
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    gain.gain.value = 0.002;
    oscillator.frequency.value = 50;
    oscillator.connect(gain).connect(context.destination);
    oscillator.start();
    audioKeepAlive = { context, oscillator };

    // `state` is the only trustworthy signal here: resume() on a context that
    // is not allowed to start neither resolves nor rejects in Chromium, so a
    // promise handler alone would report nothing at all.
    context.addEventListener('statechange', () => {
        log('audio', `keep-alive AudioContext state -> ${context.state}`);
        renderAudioState();
        if (context.state !== 'running' && el('audioKeepAlive').checked) {
            armAudioOnGesture();
        }
    });

    context.resume().catch((error) => log('audio', 'keep-alive resume rejected', { error: String(error) }));
    log('audio', `keep-alive requested, AudioContext state: ${context.state}`, {
        hasBeenActive: navigator.userActivation?.hasBeenActive ?? null,
    });
    renderAudioState();
    if (context.state !== 'running') {
        armAudioOnGesture();
    }
}

el('runNow').addEventListener('click', () => startRun('manual'));

el('stop').addEventListener('click', () => {
    controller?.abort();
    log('run', 'stop requested');
    setStatus('stopped');
});

el('clearLog').addEventListener('click', () => {
    entries = [];
    origin = performance.now();
    logView.textContent = '';
    framesContainer.textContent = '';
    verdictView.hidden = true;
    setStatus('log cleared');
});

el('copyLog').addEventListener('click', async () => {
    const text = entries.map(format).join('\n');
    try {
        await navigator.clipboard.writeText(text);
        setStatus('log copied to clipboard');
    } catch (error) {
        setStatus(`clipboard failed: ${error}`);
    }
});

el('downloadLog').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(entries, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'load-in-background-run.json';
    link.click();
    URL.revokeObjectURL(url);
});

el('audioKeepAlive').addEventListener('change', (event) => toggleAudioKeepAlive(event.target.checked));

// A plain button is the unambiguous way to hand the page a gesture: ticking the
// checkbox does the same thing, but only the first time, and after a reload the
// box is already ticked and nothing would start it.
el('armAudio').addEventListener('click', () => {
    el('audioKeepAlive').checked = true;
    persistOptions();
    audioArmPending = false;
    toggleAudioKeepAlive(true);
});

[...CHECKBOXES, ...NUMBERS, ...SELECTS, 'src'].forEach((id) => {
    el(id).addEventListener('change', persistOptions);
});

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        becameVisibleAt = performance.now();
    }
    log('visibility', `visibilityState -> ${document.visibilityState}`);
    if (document.visibilityState === 'hidden' && el('armOnHidden').checked) {
        startRun('tab hidden');
    }
});

// Lifecycle API: a frozen page explains a stall that no media event accounts for.
document.addEventListener('freeze', () => log('lifecycle', 'document frozen'));
document.addEventListener('resume', () => log('lifecycle', 'document resumed'));
window.addEventListener('pagehide', (event) => log('lifecycle', 'pagehide', { persisted: event.persisted }));
window.addEventListener('pageshow', (event) => log('lifecycle', 'pageshow', { persisted: event.persisted }));

restoreOptions();
log('init', 'ready, switch to another tab to start a run', {
    visibilityState: document.visibilityState,
    userAgent: navigator.userAgent,
});
renderAudioState();
if (el('audioKeepAlive').checked) {
    // Restored from a previous session: an AudioContext needs a gesture, so
    // this cannot start on its own and will wait for the first click.
    toggleAudioKeepAlive(true);
}

// ?autorun=1 starts a run without waiting for a visibility change; ?strategy
// and ?src override the corresponding fields, which makes scripted comparisons
// possible.
const params = new URLSearchParams(location.search);
if (params.get('strategy')) {
    el('strategy').value = params.get('strategy');
}
if (params.get('src')) {
    el('src').value = params.get('src');
}
if (params.get('autorun')) {
    startRun('autorun');
}
