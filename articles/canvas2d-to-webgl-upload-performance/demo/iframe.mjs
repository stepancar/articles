const glCanvas = document.getElementById('gl-canvas');
const gl = glCanvas.getContext('webgl', { preserveDrawingBuffer: false, antialias: false });
if (!gl) {
    parent.postMessage({ type: 'error', error: 'WebGL is not supported' }, '*');
    throw new Error('WebGL is not supported');
}

const vsSource = `
    attribute vec2 a_pos;
    attribute vec2 a_uv;
    varying vec2 v_uv;
    uniform vec2 u_offset;
    uniform vec2 u_scale;
    void main() {
        v_uv = a_uv;
        gl_Position = vec4(a_pos * u_scale + u_offset, 0.0, 1.0);
    }
`;
const fsSource = `
    precision mediump float;
    varying vec2 v_uv;
    uniform sampler2D u_tex;
    void main() {
        gl_FragColor = texture2D(u_tex, v_uv);
    }
`;

function compile(type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(sh));
    }
    return sh;
}

const program = gl.createProgram();
gl.attachShader(program, compile(gl.VERTEX_SHADER, vsSource));
gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fsSource));
gl.linkProgram(program);
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program));
}
gl.useProgram(program);

const aPos = gl.getAttribLocation(program, 'a_pos');
const aUv = gl.getAttribLocation(program, 'a_uv');
const uOffset = gl.getUniformLocation(program, 'u_offset');
const uScale = gl.getUniformLocation(program, 'u_scale');

const quad = new Float32Array([
    -1, -1, 0, 1,
     1, -1, 1, 1,
    -1,  1, 0, 0,
     1,  1, 1, 0,
]);
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);
gl.enableVertexAttribArray(aPos);
gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 16, 0);
gl.enableVertexAttribArray(aUv);
gl.vertexAttribPointer(aUv, 2, gl.FLOAT, false, 16, 8);

async function makeItems(count, w, h, uploadMethod, sourceType) {
    const list = [];
    for (let i = 0; i < count; i++) {
        const item = {};
        item.texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, item.texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        if (uploadMethod === 'texSubImage2D') {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        }

        if (sourceType !== 'uint8array') {
            item.canvas = document.createElement('canvas');
            item.canvas.width = w;
            item.canvas.height = h;
            item.ctx = item.canvas.getContext('2d');
        }
        if (sourceType === 'uint8array') {
            item.data = new Uint8Array(w * h * 4);
            for (let j = 0; j < item.data.length; j += 4) {
                item.data[j] = (j * 7) & 0xff;
                item.data[j + 1] = (j * 11) & 0xff;
                item.data[j + 2] = (j * 13) & 0xff;
                item.data[j + 3] = 255;
            }
        }
        if (sourceType === 'video') {
            item.ctx.fillStyle = '#000';
            item.ctx.fillRect(0, 0, w, h);
            const stream = item.canvas.captureStream();
            item.video = document.createElement('video');
            item.video.muted = true;
            item.video.playsInline = true;
            item.video.srcObject = stream;
            await item.video.play();
            if (item.video.readyState < 2) {
                await new Promise((resolve) => {
                    item.video.addEventListener('loadeddata', resolve, { once: true });
                });
            }
        }
        list.push(item);
    }
    return list;
}

function disposeItems(items) {
    for (const item of items) {
        gl.deleteTexture(item.texture);
        if (item.video) {
            const stream = item.video.srcObject;
            if (stream && stream.getTracks) {
                for (const t of stream.getTracks()) t.stop();
            }
            item.video.srcObject = null;
        }
    }
}

function drawOn2dCanvas(item, iter, index) {
    const { ctx, canvas } = item;
    const t = (iter + index * 17) * 0.05;
    ctx.fillStyle = `hsl(${(iter * 5 + index * 60) % 360}, 70%, 50%)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    const cx = canvas.width * (0.5 + 0.4 * Math.sin(t));
    const cy = canvas.height * (0.5 + 0.4 * Math.cos(t));
    const r = Math.min(canvas.width, canvas.height) * 0.2;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.font = `${Math.floor(canvas.height / 8)}px sans-serif`;
    ctx.fillText(`#${index} it=${iter}`, 8, canvas.height / 4);
}

function produceSource(item, iter, index, sourceType) {
    if (sourceType === 'uint8array') {
        const data = item.data;
        const off = ((iter * 64) % (data.length - 4)) & ~3;
        data[off] = iter & 0xff;
        data[off + 1] = (iter * 2) & 0xff;
        return;
    }
    drawOn2dCanvas(item, iter, index);
}

function uploadOne(item, w, h, uploadMethod, sourceType) {
    gl.bindTexture(gl.TEXTURE_2D, item.texture);

    if (sourceType === 'uint8array') {
        if (uploadMethod === 'texSubImage2D') {
            gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, item.data);
        } else {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, item.data);
        }
        return;
    }

    let source;
    let toClose = null;
    if (sourceType === 'canvas') {
        source = item.canvas;
    } else if (sourceType === 'videoframe') {
        source = new VideoFrame(item.canvas, { timestamp: 0 });
        toClose = source;
    } else if (sourceType === 'video') {
        source = item.video;
    }

    if (uploadMethod === 'texSubImage2D') {
        gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, source);
    } else {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
    }

    if (toClose) toClose.close();
}

function uploadAndRender(items, glW, glH, c2dW, c2dH, uploadMethod, sourceType) {
    gl.viewport(0, 0, glW, glH);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const n = items.length;
    const cols = Math.ceil(Math.sqrt(n));
    const rows = Math.ceil(n / cols);
    const sx = 1 / cols;
    const sy = 1 / rows;

    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);

    for (let i = 0; i < n; i++) {
        const item = items[i];
        uploadOne(item, c2dW, c2dH, uploadMethod, sourceType);

        const col = i % cols;
        const row = Math.floor(i / cols);
        const ox = -1 + sx + col * 2 * sx;
        const oy = 1 - sy - row * 2 * sy;
        gl.uniform2f(uOffset, ox, oy);
        gl.uniform2f(uScale, sx, sy);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    gl.finish();
}

function nextFrame() {
    return new Promise((resolve) => requestAnimationFrame(resolve));
}

async function runTest(params) {
    const { glW, glH, c2dW, c2dH, c2dCount, iterations, uploadMethod, sourceType } = params;
    glCanvas.width = glW;
    glCanvas.height = glH;

    const items = await makeItems(c2dCount, c2dW, c2dH, uploadMethod, sourceType);

    await nextFrame();
    const start = performance.now();
    for (let iter = 0; iter < iterations; iter++) {
        for (let i = 0; i < items.length; i++) {
            produceSource(items[i], iter, i, sourceType);
        }
        uploadAndRender(items, glW, glH, c2dW, c2dH, uploadMethod, sourceType);
        await nextFrame();
    }
    const end = performance.now();

    disposeItems(items);

    const total = end - start;
    const avg = total / iterations;
    return { total, avg, fps: 1000 / avg, iterations };
}

window.addEventListener('message', async (e) => {
    const msg = e.data;
    if (!msg) return;
    if (msg.type === 'start') {
        try {
            const result = await runTest(msg.params);
            parent.postMessage({ type: 'result', id: msg.id, result }, '*');
        } catch (err) {
            parent.postMessage({ type: 'error', id: msg.id, error: String(err) }, '*');
        }
    }
});

parent.postMessage({ type: 'ready' }, '*');
