import { hexToRgb, rgbArrayToHex, PalettesSelector } from "../utils.mjs";

// Vertex shader source
const vertexShaderSrc = `
attribute vec2 a_position;
attribute vec2 a_texCoord;
varying vec2 v_texCoord;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_texCoord = a_texCoord;
}
`;

// Fragment shader source
const fragmentShaderSrc = `
precision mediump float;
varying vec2 v_texCoord;
uniform sampler2D u_texture;

void main() {
    gl_FragColor = texture2D(u_texture, v_texCoord);
}
`;

// Compile shader
function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Shader compile failed with: " + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

// Create program
function createProgram(gl, vertexShader, fragmentShader) {
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("Program link failed with: " + gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

const image = document.getElementById("image");
const canvas = document.getElementById("canvas");
const paleteSelector = new PalettesSelector(
  document.getElementById("themeSelect")
);
const gl = canvas.getContext("webgl", { antialias: false });
let originalImageData = null;
let currentImageData = null;

image.decode().then(() => {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSrc);
  const fragmentShader = createShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSrc
  );
  const program = createProgram(gl, vertexShader, fragmentShader);

  // Set up rectangle covering the whole canvas
  const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);

  const texCoords = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

  const texCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, texCoords, gl.STATIC_DRAW);

  gl.useProgram(program);

  const aPosition = gl.getAttribLocation(program, "a_position");
  gl.enableVertexAttribArray(aPosition);
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

  const aTexCoord = gl.getAttribLocation(program, "a_texCoord");
  gl.enableVertexAttribArray(aTexCoord);
  gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
  gl.vertexAttribPointer(aTexCoord, 2, gl.FLOAT, false, 0, 0);
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

    // Check if the image is a power of 2 in both dimensions
    
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
});

function replaceColors() {
  const colorMappings = {
    0xff00ff: paleteSelector.value[0],
    0xffff00: paleteSelector.value[1],
    0x23ffdf: paleteSelector.value[2],
  };
  replaceImageData(
    originalImageData.data,
    currentImageData.data,
    colorMappings
  );
  ctx.putImageData(currentImageData, 0, 0);
}

paleteSelector.addEventListener("change", () => {
  replaceColors();
});

function replaceImageData(imageData, currentImageData, colorMappings) {
  for (let i = 0; i < imageData.length; i += 4) {
    const r = imageData[i];
    const g = imageData[i + 1];
    const b = imageData[i + 2];

    const hexColor = rgbArrayToHex([r, g, b]);

    if (hexColor in colorMappings) {
      const [newR, newG, newB] = hexToRgb(colorMappings[hexColor]);
      currentImageData[i] = newR;
      currentImageData[i + 1] = newG;
      currentImageData[i + 2] = newB;
    }
  }
}
