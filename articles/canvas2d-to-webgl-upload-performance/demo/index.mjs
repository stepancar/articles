const glCanvas = document.getElementById('gl-canvas');
const statusEl = document.getElementById('status');
const tbody = document.querySelector('#result-table tbody');
const runBtn = document.getElementById('run');

const gl = glCanvas.getContext('webgl', { preserveDrawingBuffer: false, antialias: false });
if (!gl) {
    statusEl.textContent = 'WebGL is not supported';
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

function makeCanvases(count, w, h, uploadMethod) {
    const list = [];
    for (let i = 0; i < count; i++) {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        if (uploadMethod === 'texSubImage2D') {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        }
        list.push({
            canvas: c,
            ctx: c.getContext('2d'),
            texture,
        });
    }
    return list;
}

function disposeCanvases(list) {
    for (const item of list) {
        gl.deleteTexture(item.texture);
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

function uploadAndRender(items, glW, glH, uploadMethod) {
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
        gl.bindTexture(gl.TEXTURE_2D, item.texture);
        if (uploadMethod === 'texSubImage2D') {
            gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, item.canvas);
        } else {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, item.canvas);
        }

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

async function runTest() {
    runBtn.disabled = true;
    statusEl.textContent = 'running...';

    const glW = +document.getElementById('gl-width').value;
    const glH = +document.getElementById('gl-height').value;
    const c2dW = +document.getElementById('c2d-width').value;
    const c2dH = +document.getElementById('c2d-height').value;
    const c2dCount = +document.getElementById('c2d-count').value;
    const iterations = +document.getElementById('iterations').value;
    const uploadMethod = document.getElementById('upload-method').value;

    glCanvas.width = glW;
    glCanvas.height = glH;

    const items = makeCanvases(c2dCount, c2dW, c2dH, uploadMethod);

    await nextFrame();

    const start = performance.now();
    for (let iter = 0; iter < iterations; iter++) {
        for (let i = 0; i < items.length; i++) {
            drawOn2dCanvas(items[i], iter, i);
        }
        uploadAndRender(items, glW, glH, uploadMethod);
        await nextFrame();
    }
    const end = performance.now();
    const total = end - start;
    const avg = total / iterations;
    const fps = 1000 / avg;

    addRow({ glW, glH, c2dW, c2dH, c2dCount, uploadMethod, iterations, total, avg, fps });

    disposeCanvases(items);
    statusEl.textContent = `done. FPS: ${fps.toFixed(2)}`;
    runBtn.disabled = false;
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
        <td>${r.iterations}</td>
        <td>${r.total.toFixed(2)}</td>
        <td>${r.avg.toFixed(3)}</td>
        <td>${r.fps.toFixed(2)}</td>
    `;
    tbody.appendChild(tr);
}

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
    const apply = () => {
        const p = PRESETS[presetEl.value];
        if (p) {
            widthEl.value = p[0];
            heightEl.value = p[1];
        }
    };
    presetEl.addEventListener('change', apply);
    const onCustom = () => { presetEl.value = 'custom'; };
    widthEl.addEventListener('input', onCustom);
    heightEl.addEventListener('input', onCustom);
}

bindPreset('gl-preset', 'gl-width', 'gl-height');
bindPreset('c2d-preset', 'c2d-width', 'c2d-height');

runBtn.addEventListener('click', runTest);
