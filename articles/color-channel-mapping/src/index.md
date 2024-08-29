---
layout: article.njk
title: Color channel mapping
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

<p class="lead">
    In this article, I will try to tell you about the task of recoloring a media resource in the colors of the palette.
    And about one of the possible solutions to this problem, called color channel mapping.
</p>




Let's imagine that we are creating an application for creating video presentations.
For each slide, the user can choose an animation that will be displayed in the background.


besides the animation itself, the user can choose a color palette.
For simplicity, let's assume that the palette consists of 3 colors.

the animation itself consists of several objects, at the stage of creating the animation, the designer sets the color number from the palette for each object.
The question arises, how can we color the animation in the colors of the user's palette?


Those animations can be implemented in different ways, however, we will consider 3 main ones:

- Code-based animation
- SVG-based animation
- Solid color remapping

Let's consider each of them in more detail.

## Code-based animation


Let's imagine that the animation is made using code that draws on the canvas.
For example, like this:

```typescript
function drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}
```

<iframe src="../src/code-based-animation/index.html"></iframe>


To make the animation recolorable, we can pass the palette
to the function and use the color indexes from the palette in the code.
For example like this:


```typescript
function drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, colorPalette: [string, string, string]) {
  ctx.beginPath();
  ctx.fillStyle = colorPalette[0];
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}
```

The problem with such animations is that only a developer can create them, without programming skills, it is impossible.


## SVG-based animation


Let's imagine that the animation is made using svg.
For example, like this:

```xml
<?xml version="1.0"?>
<svg viewBox="0 0 60 60" version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50"/>
</svg>
```

Then the function that can recolor our svg in the desired colors can look like this:

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

<iframe src="./svg-based-animation/index.html"></iframe>


Designers can mark elements so that we can know which color number from the palette corresponds to each element.
For example like this:

```xml
<?xml version="1.0"?>
<svg viewBox="0 0 60 60" version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50" fill="1"/>
</svg>
```


Unfortunatelly, despite the fact that the SVG ANIMAtuib standard exists for a long time, not many design tools can boast the ability to export animations to SVG.
Which means that in fact, the designer also needs to have programming skills.

## Solid color remapping

For designers, it is easiest to create an animation in a tool that is convenient for him and export it as a video.
All animation creation tools allow this.

It rises the question, how can the designer mark elements in this video so that we can recolor them?
Designers can create a video with 3 colors - RGB

This video can look like this:

How can we recolor this video in the colors of the palette?

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

<iframe src="./solid-color-remapping/index.html"></iframe>


In this example it's hard to see, but you should notice that border of the circle has a different color.
It happens because the color of the border is not a solid color, but a gradient, because antialiasing is used.

More obvious example is replacing the color of the image with gradient:

<iframe src="./gradient-color-remapping/index.html"></iframe>

You can see this is not what we expected. On final image We would expect to see only colors from palette, but we see some additional colors.
You can also notice that gradient is not smooth anymore.

This is where we need to use color channel mapping.

## Color channel mapping

Basically, the idea is to create a matrix that will map the original color to the target color.

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

Let's change our code to use this matrix:

```javascript
function replaceImageData(imageData, currentImageData) {
    for (let i = 0; i< imageData.length; i+=4) {
        const originalR = imageData[i];
        const originalG = imageData[i+1];
        const originalB = imageData[i+2];

        const [target1R, target1G, target1B] = splitColorToRGB(paleteSelector.value[0]);
        const [target2R, target2G, target2B] = splitColorToRGB(paleteSelector.value[1]);
        const [target3R, target3G, target3B] = splitColorToRGB(paleteSelector.value[2]);

        // Matrix multiplication
        const finalR = target1R * originalR + target2R * originalG + target3R * originalB;
        const finalG = target1G * originalR + target2G * originalG + target3G * originalB;
        const finalB = target1B * originalR + target2B * originalG + target3B * originalB;

        currentImageData[i] = Math.round(finalR/256);
        currentImageData[i+1] = Math.round(finalG/256);
        currentImageData[i+2] = Math.round(finalB/256);
    }
}
```

<iframe src="./canvas-color-channel-remapping/index.html"></iframe>

It works!

Notice also that when we select theme pallete with red green and blue colors we get the original image, as we expected.

The problem with this solution is that we are processing every pixel in the image, which is very slow.

it has complexity of $O(w \times h)$, where $w$ is width and $h$ is height of the image.

For 1920x1080 image it's ~2 073 600 operations.

For 4k image it's ~8 294 400 operations.

On my mac book pro with m1 pro processor it takes 50ms to process full hd image.
this is not acceptable for real time video processing.

But matrix multiplication is what gpu is good at.

We can use webgl to do this operation on gpu.

Actually, canvas 2d context also uses gpu, and it has filter property which actually do matrix multiplication under the hood. But it's not very flexible.


<iframe src="./webgl-channel-map-filter/index.html"></iframe>


<script src="./index.mjs" type="module"></script>
