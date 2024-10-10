import {
  hexToRgb,
  rgbArrayToHex,
  PalettesSelector,
  hexToVector3,
} from "../utils.mjs";

const paleteSelector = new PalettesSelector(
  document.getElementById("themeSelect")
);

const image = document.getElementById("image");
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl2");

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

const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSrc);
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSrc);
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

image.decode().then(() => {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
});

class Filter {
  constructor(gl, vertexShaderSource, fragmentShaderSource) {
    this.gl = gl;
    const vertexShader = createShader(
      this.gl,
      this.gl.VERTEX_SHADER,
      vertexShaderSource
    );
    const fragmentShader = createShader(
      this.gl,
      this.gl.FRAGMENT_SHADER,
      fragmentShaderSource
    );
    this.program = createProgram(
        gl,
        vertexShader,
        fragmentShader,
    );
    this.uniformLocations = {};
  }

  use() {
    this.gl.useProgram(this.program);
  }

  setUniform(name, value) {
    if (!(name in this.uniformLocations)) {
      this.uniformLocations[name] = this.gl.getUniformLocation(
        this.program,
        name
      );
    }

    const location = this.uniformLocations[name];
    if (location === -1) {
      console.warn(`Uniform ${name} not found in shader.`);
      return;
    }

    if (Array.isArray(value)) {
      if (value.length === 1) {
        this.gl.uniform1f(location, value[0]);
      } else if (value.length === 2) {
        this.gl.uniform2fv(location, value);
      } else if (value.length === 3) {
        this.gl.uniform3fv(location, value);
      } else if (value.length === 4) {
        this.gl.uniform4fv(location, value);
      }
    } else if (typeof value === "number") {
      this.gl.uniform1f(location, value);
    } else if (typeof value === "boolean") {
      this.gl.uniform1i(location, value ? 1 : 0);
    } else {
      console.error("Unsupported uniform type.");
    }
  }

  render() {
    // Ensure the program is being used
    this.use();

    // Bind attributes, set uniforms, bind textures, etc. here before drawing
    // This will depend on how you've set up your WebGL context outside of this class

    // Example: Drawing a quad
    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
  }
}

class ColorChannelMappingFilter extends Filter {
  static #vertexShaderSource = `
    attribute vec4 aVertexPosition;
    attribute vec2 aTextureCoord;
    
    varying vec2 vTextureCoord;
    
    void main(void) {
        gl_Position = aVertexPosition;
        vTextureCoord = aTextureCoord;
    }
  `;

  static #fragmentShaderSource = `
    precision mediump float;
    varying vec2 vTextureCoord;
    uniform sampler2D uSampler;
    uniform vec3 redChannelTargetColor;
    uniform vec3 greenChannelTargetColor;
    uniform vec3 blueChannelTargetColor;

    void main(void) {
        vec4 currentColor = texture2D(uSampler, vTextureCoord);

        float R_s = currentColor.r;
        float G_s = currentColor.g;
        float B_s = currentColor.b;

        float R_t1 = redChannelTargetColor.r;
        float G_t1 = redChannelTargetColor.g;
        float B_t1 = redChannelTargetColor.b;

        float R_t2 = greenChannelTargetColor.r;
        float G_t2 = greenChannelTargetColor.g;
        float B_t2 = greenChannelTargetColor.b;

        float R_t3 = blueChannelTargetColor.r;
        float G_t3 = blueChannelTargetColor.g;
        float B_t3 = blueChannelTargetColor.b;

        float A_f = currentColor.a;

        float R_f = (R_t1 * R_s) + (R_t2 * G_s) + (R_t3 * B_s);
        float G_f = (G_t1 * R_s) + (G_t2 * G_s) + (G_t3 * B_s);
        float B_f = (B_t1 * R_s) + (B_t2 * G_s) + (B_t3 * B_s);

        vec4 col = vec4(R_f, G_f, B_f, A_f);
        gl_FragColor = vec4(col.rgb * col.a, col.a);
    }
    `;

  constructor(gl) {
    super(
      gl,
      ColorChannelMappingFilter.#vertexShaderSource,
      ColorChannelMappingFilter.#fragmentShaderSource
    );
  }

  setRedChannelTargetColor(color) {
    this.setUniform("redChannelTargetColor", color);
  }

  setGreenChannelTargetColor(color) {
    this.setUniform("greenChannelTargetColor", color);
  }

  setBlueChannelTargetColor(color) {
    this.setUniform("blueChannelTargetColor", color);
  }
}

const filter = new ColorChannelMappingFilter(gl);

paleteSelector.addEventListener("change", () => {
    filter.use();
    filter.setRedChannelTargetColor(hexToVector3(paleteSelector.value[0]));
    filter.setGreenChannelTargetColor(hexToVector3(paleteSelector.value[1]));
    filter.setBlueChannelTargetColor(hexToVector3(paleteSelector.value[2]));
    filter.render();
});
