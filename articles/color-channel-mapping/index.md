---
layout: article.njk
title: Color channel mapping
shortDescription: This article introduces the concept of recoloring a media resource using a palette and explores one solution to this problem - color channel mapping
creationDate: 2024-08-23
---

<style>
    .global-theme-select {
        position: sticky;
        top: 0;
        left: 0;
        z-index: 1000;
        font-size: 20px;
        width: 100%;
        background-color: white;
        padding-bottom: 10px;
    }
    .global-theme-select select {
        font-size: 50px;
    }
</style>

<div class="global-theme-select">
    <theme-selector></theme-selector>
</div>


> This article contains interactive demos that respond to the selected color palette. Feel free to experiment with different palettes to see how the demos react.


> Each demo is essentially an iframe pointing to a separate folder with its source code. You can open any of them in a debugger to explore how they work without interfering with other demos.
All demos are written in plain JavaScript without any build tools


## Introduction
Let's imagine we're building an application for creating video presentations. For each slide, the user can choose an animation that will be displayed in the background.

In addition to selecting the animation, the user can choose a color palette. For simplicity, let's assume the palette consists of three colors.

The animation itself is made up of several objects, and during the creation process, the designer assigns each object a color from the palette. The question is: how can we apply the user's selected palette to the animation?

There are several ways to implement these animations, but we'll focus on three main approaches:


- Code-based animation
- SVG-based animation
- Solid color remapping

Let's dive into each approach.

## Code-based animation


Imagine the animation is created using code that draws on a canvas. For example:

```typescript
function drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}
```

<a href="https://stackblitz.com/github/stepancar/articles/tree/main/articles/color-channel-mapping/?file=code-based-animation/index.mjs&initialPath=/code-based-animation/index.html&startScript=start" target="_blank">
  <img
    alt="Open in StackBlitz"
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
  />
</a>
<iframe src="../code-based-animation/index.html"></iframe>


To make the animation recolorable, we can pass the palette to the function and use the colors from it in the code, like this:


```typescript
function drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, colorPalette: [string, string, string]) {
  ctx.beginPath();
  ctx.fillStyle = colorPalette[0];
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}
```

The downside of this approach is that only developers can create such animations; without programming skills, it's impossible.


## SVG-based animation

Now, let's imagine the animation is created using SVG. For example:

```xml
<?xml version="1.0"?>
<svg viewBox="0 0 60 60" version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50"/>
</svg>
```

We can then create a function to recolor the SVG based on the desired palette:

```typescript
function recolorSVG(svg, colorPalette: [string, string, string]) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svg, "image/svg+xml");
  const elements = doc.querySelectorAll('[fill]');
  elements.forEach((element) => {
    const colorIndex = element.getAttribute('fill');
    element.setAttribute('fill', colors[colorIndex]);
  });
  return doc.documentElement.outerHTML;
}
```
<a href="https://stackblitz.com/github/stepancar/articles/tree/main/articles/color-channel-mapping/?file=svg-based-animation/index.mjs&initialPath=/svg-based-animation/index.html&startScript=start" target="_blank">
  <img
    alt="Open in StackBlitz"
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
  />
</a>
<iframe src="./svg-based-animation/index.html"></iframe>


Designers can mark elements so that we know which color from the palette corresponds to each element. For example:

```xml
<?xml version="1.0"?>
<svg viewBox="0 0 60 60" version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50" fill="1"/>
</svg>
```

Unfortunately, despite the long-standing existence of the SVG animation standard, not many design tools can export animations to SVG. This means designers often still need some programming skills.

## Solid color remapping

For designers, it is often easiest to create an animation in a tool of their choice and export it as a video. Most animation tools support this.

But how can the designer mark elements in the video so we can recolor them? One solution is for the designer to create a video with three colors—RGB.

This video might look like this:

How can we recolor this video using the chosen palette?

```javascript
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
function drawFrame(video) {
    ctx.drawImage(vide);

    const imageData = ctx.getImageData();
    replaceColors(imageData, colorPalette);

    ctx.putImageData(imageData)
}

function relaceColors(imageData, colorPalette) {
    for (let i = 0; i < imageData.length; i+=3) {
        const image = imageData[i];
        const r = imageData[i];
        const g = imageData[i+1];
        const b = imageData[i+2];
    }
}

function getNewColor(old, colorPalette) {
   return old;
}
```

<a href="https://stackblitz.com/github/stepancar/articles/tree/main/articles/color-channel-mapping/?file=solid-color-remapping/index.mjs&initialPath=/solid-color-remapping/index.html&startScript=start" target="_blank">
  <img
    alt="Open in StackBlitz"
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
  />
</a>
<iframe src="./solid-color-remapping/index.html"></iframe>


In this example, it's hard to notice, but the border of the circle has a slightly different color. This happens because the border's color is not a solid color but a gradient due to anti-aliasing.

[![Gradient border](./solid-color-remapping/antialiasing.png)](./solid-color-remapping/antialiasing.png)

A more obvious example is replacing the color of an image with a gradient:

<a href="https://stackblitz.com/github/stepancar/articles/tree/main/articles/color-channel-mapping/?file=gradient-color-remapping/index.mjs&initialPath=/gradient-color-remapping/index.html&startScript=start" target="_blank">
  <img
    alt="Open in StackBlitz"
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
  />
</a>
<iframe src="./gradient-color-remapping/index.html"></iframe>

As you can see, this is not what we expected. The final image should only contain colors from the palette, but we see additional colors. You might also notice that the gradient is no longer smooth.

This is where color channel mapping comes in.

## Color channel mapping

The basic idea is to create a matrix that maps the original color to the target color.

<p>
\[
\begin{bmatrix}
\text{finalR} \\
\text{finalG} \\
\text{finalB}
\end{bmatrix}
=
\begin{bmatrix}
\text{target1R} & \text{target2R} & \text{target3R} \\
\text{target1G} & \text{target2G} & \text{target3G} \\
\text{target1B} & \text{target2B} & \text{target3B}
\end{bmatrix}
\times
\begin{bmatrix}
\text{originalR} \\
\text{originalG} \\
\text{originalB}
\end{bmatrix}
\]
</p>

Let's modify our code to use this matrix:

```javascript
function replaceImageData(imageData, currentImageData) {
    const [target1R, target1G, target1B] = splitColorToRGB(paleteSelector.value[0]);
    const [target2R, target2G, target2B] = splitColorToRGB(paleteSelector.value[1]);
    const [target3R, target3G, target3B] = splitColorToRGB(paleteSelector.value[2]);

    for (let i = 0; i< imageData.length; i+=4) {
        const originalR = imageData[i];
        const originalG = imageData[i+1];
        const originalB = imageData[i+2];

        // Matrix multiplication
        const finalR = target1R * originalR + target2R * originalG + target3R * originalB;
        const finalG = target1G * originalR + target2G * originalG + target3G * originalB;
        const finalB = target1B * originalR + target2B * originalG + target3B * originalB;

        currentImageData[i] = Math.round(finalR/255);
        currentImageData[i+1] = Math.round(finalG/255);
        currentImageData[i+2] = Math.round(finalB/255);
    }
}
```

Let's see it in action:

<a href="https://stackblitz.com/github/stepancar/articles/tree/main/articles/color-channel-mapping/?file=canvas-color-channel-remapping/index.mjs&initialPath=/canvas-color-channel-remapping/index.html&startScript=start" target="_blank">
  <img
    alt="Open in StackBlitz"
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
  />
</a>
<iframe src="./canvas-color-channel-remapping/index.html"></iframe>

It works!

Notice that when we select a theme palette with red, green, and blue colors, we get the original image, as expected.

The problem with this approach is that we're processing every pixel in the image, which is very slow.

The complexity is $O(w \times h)$, where $w$ is the width and $h$ is the height of the image.

For a 1920x1080 image, that's about 2,073,600 operations.

For a 4k image, it's about 8,294,400 operations.

On my MacBook Pro with an M1 Pro processor, it takes about 50ms to process a full HD image, which is not acceptable for real-time video processing.

But matrix multiplication is something the GPU excels at.

We can use WebGL to perform this operation on the GPU.

Actually, the canvas 2D context also uses the GPU, and it has a filter property that performs matrix multiplication under the hood, but it's not very flexible.

## WebGL implementation

Lets's create a webgl application.
In this article I don't explain how webgl works. The same time, because here we are trying to implement the same feature like for 2d canvas - this can be a good first dive into webgl.

First step is to draw image on a webgl canvas. In case you know webgl - jump here to see the shader code.
If you have never touched webgl you will be impressed how much code it requires to just render an image

We need to add 2 utility functions to simplify our code

Let's instantiate gl code:

```javascript
const image = document.getElementById("image");
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
```

```javascript
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
```


vertex shader

```glsl
attribute vec2 a_position;
attribute vec2 a_texCoord;
varying vec2 v_texCoord;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_texCoord = a_texCoord;
}
```

fragment shader

```glsl
precision mediump float;
varying vec2 v_texCoord;
uniform sampler2D u_texture;

void main() {
    gl_FragColor = texture2D(u_texture, v_texCoord);
}
```

then we can instantiate shaders and 

```javascript
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
```

as soon as image loads we can upload texture to webgl

```javascript
await image.decode();

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
```

and now we can draw it

```javascript
gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
```

Now we can implement color channel map filter.

let's create an abstract filter it will be responsible for applying effects to existing texture.
Such filter will need parameters. Let's create an abstract class

```javascript
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
```


[![image](./webgl-channel-map-filter/image.png)](./webgl-channel-map-filter/image.png)

Now let's

implement a fragment shader. So, basically fragment shader is a programm which executes for every pixels.
It's exactly what we did for 2d canvas iterating through all bytes in uint8Array but it will be running on gpu in parallel.

It's logic consists of 3 steps
- reading parameters (target colors, we will pass it from javascript)
- calculating final color of pixel based on it's current color and logic we will apply
- drawing pixel with calculated color

```glsl
precision mediump float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
# read params
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
```

now lets create a filter which will use this shader

```javascript
class ColorChannelMappingFilter extends Filter {
  static #vertexShaderSource = `...shader code`;

  static #fragmentShaderSource = ``
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
```

now we are read to use it!

```javascript
const filter = new ColorChannelMappingFilter(gl);

filter.use();
filter.setRedChannelTargetColor(hexToVector3(0xe50914));
filter.setGreenChannelTargetColor(hexToVector3(0x1877f2));
filter.setBlueChannelTargetColor(hexToVector3(0x34a853));
filter.render();
```

[![mapping](./webgl-channel-map-filter/0xe50914_0x1877f2_0x34a853.png)](./webgl-channel-map-filter/0xe50914_0x1877f2_0x34a853.png)

let's bind it to our theme selector
```javascript
paleteSelector.addEventListener("change", () => {
    filter.use();
    filter.setRedChannelTargetColor(hexToVector3(paleteSelector.value[0]));
    filter.setGreenChannelTargetColor(hexToVector3(paleteSelector.value[1]));
    filter.setBlueChannelTargetColor(hexToVector3(paleteSelector.value[2]));
    filter.render();
});
```

and now, you can play with theme selector


<iframe src="./webgl-channel-map-filter/index.html"></iframe>
<a href="https://stackblitz.com/github/stepancar/articles/tree/main/articles/color-channel-mapping/?file=webgl-channel-map-filter/index.mjs&initialPath=/webgl-channel-map-filter/index.html&startScript=start" target="_blank">
  <img
    alt="Open in StackBlitz"
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
  />
</a>


Now, let's apply this filter to a video.

Firstly, we need to initialize video

```html
<video
   style="width: 50%;"
   id="video"
   src="https://media.githubusercontent.com/media/stepancar/articles/main/articles/color-channel-mapping/webgl-channel-map-filter/video/video2.mp4"
   crossorigin="anonymous"
   loop autoplay muted
>
</video>
```

then, you need to modify render so it would update texture with video frame
and it should be called every frame:

```javascript
function render() {
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video); // pass htmlVideoElement

  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

  filter.use();
  filter.setRedChannelTargetColor(hexToVector3(paleteSelector.value[0]));
  filter.setGreenChannelTargetColor(hexToVector3(paleteSelector.value[1]));
  filter.setBlueChannelTargetColor(hexToVector3(paleteSelector.value[2]));
  filter.render();

  requestAnimationFrame(render);
}

render();
```

Here is the final result:

<iframe src="./webgl-channel-map-filter/video/index.html"></iframe>

<a href="https://stackblitz.com/github/stepancar/articles/tree/main/articles/color-channel-mapping/?file=webgl-channel-map-filter/video/index.mjs&initialPath=/webgl-channel-map-filter/video/index.html&startScript=start" target="_blank">
  <img
    alt="Open in StackBlitz"
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
  />
</a>

## Svg filter on Canvas

We can express the same logic using SVG filters. This is a more declarative way to express the same logic.

```xml
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    >
    <defs>
        <filter id="colorChannelMapFilter">
            <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="
                    0 1 0 0 0 
                    1 0 0 0 0 
                    1 0 0 0 0 
                    0 0 0 1 0"
                />
        </filter>
    </defs>
</svg>
```

When we select new theme, we can update the filter values:

```javascript
function replaceColors() {
    const feColorMatrix = document.querySelector('#colorChannelMapFilter feColorMatrix');
    const [target1R, target1G, target1B] = splitColorToRGB(paleteSelector.value[0]);
    const [target2R, target2G, target2B] = splitColorToRGB(paleteSelector.value[1]);
    const [target3R, target3G, target3B] = splitColorToRGB(paleteSelector.value[2]);
    const filterValues = `
        ${target1R} ${target2R} ${target3R} 0 0
        ${target1G} ${target2G} ${target3G} 0 0
        ${target1B} ${target2B} ${target3B} 0 0
        0 0 0 1 0
    `;

    feColorMatrix.setAttribute('values', filterValues);
    ctx.filter = "url(#colorChannelMapFilter)";
    ctx.drawImage(image, 0, 0);
}
```

<demo-with-playground
    file="./canvas-svg-filter-color-channel-remapping/index.html"
    initialPath="./canvas-svg-filter-color-channel-remapping/index.html"
/>

<script src="./index.mjs" type="module"></script>