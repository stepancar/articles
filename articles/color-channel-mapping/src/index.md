---
layout: article.njk
title: Color channel mapping
shortDescription: This article introduces the concept of recoloring a media resource using a palette and explores one solution to this problem - color channel mapping
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

<a href="https://stackblitz.com/github/stepancar/articles/tree/main/articles/color-channel-mapping/?file=src/code-based-animation/index.mjs&initialPath=/src/code-based-animation/index.html&startScript=start" target="_blank">
  <img
    alt="Open in StackBlitz"
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
  />
</a>
<iframe src="../src/code-based-animation/index.html"></iframe>


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
<a href="https://stackblitz.com/github/stepancar/articles/tree/main/articles/color-channel-mapping/?file=src/svg-based-animation/index.mjs&initialPath=/src/svg-based-animation/index.html&startScript=start" target="_blank">
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

<a href="https://stackblitz.com/github/stepancar/articles/tree/main/articles/color-channel-mapping/?file=src/solid-color-remapping/index.mjs&initialPath=/src/solid-color-remapping/index.html&startScript=start" target="_blank">
  <img
    alt="Open in StackBlitz"
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
  />
</a>
<iframe src="./solid-color-remapping/index.html"></iframe>


In this example, it's hard to notice, but the border of the circle has a slightly different color. This happens because the border's color is not a solid color but a gradient due to anti-aliasing.

A more obvious example is replacing the color of an image with a gradient:

<a href="https://stackblitz.com/github/stepancar/articles/tree/main/articles/color-channel-mapping/?file=src/gradient-color-remapping/index.mjs&initialPath=/src/gradient-color-remapping/index.html&startScript=start" target="_blank">
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

<a href="https://stackblitz.com/github/stepancar/articles/tree/main/articles/color-channel-mapping/?file=src/canvas-color-channel-remapping/index.mjs&initialPath=/src/canvas-color-channel-remapping/index.html&startScript=start" target="_blank">
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


<a href="https://stackblitz.com/github/stepancar/articles/tree/main/articles/color-channel-mapping/?file=src/webgl-channel-map-filter/index.mjs&initialPath=/src/webgl-channel-map-filter/index.html&startScript=start" target="_blank">
  <img
    alt="Open in StackBlitz"
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
  />
</a>
<iframe src="./webgl-channel-map-filter/index.html"></iframe>


<script src="./index.mjs" type="module"></script>
