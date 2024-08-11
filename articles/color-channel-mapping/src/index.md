---
layout: main.njk
title: Color channel mapping
---

<style>
    iframe {
        display: inline-block;
        margin: 10px;
        border: 0;
        width: 100%;
    }

    .global-theme-select {
        position: sticky;
        top: 0;
        left: 0;
        z-index: 1000;
        font-size: 20px
        width: 100%;
    }
    .global-theme-select select {
        font-size: 50px;
    }

</style>

<div class="global-theme-select">
    <select id="themeSelect" >
        <option value="[16711680, 65280, 255]">original</option>
        <option value="[5785334, 2369583, 10463935]">lumen5</option>
        <option value="[4359668, 16497669, 3450963]">google</option>
        <option value="[1603570, 16777215, 15790837]">facebook</option>
        <option value="[16750848, 0, 16777215]">amazon</option>
        <option value="[2236191, 16777215, 15010068]">netflix</option>
    </select>
    <div>
        <div style="background-color: red; width: 100px; height: 100px; display: inline-block"></div>
        <div style="background-color: green; width: 100px; height: 100px; display: inline-block"></div>
        <div style="background-color: blue; width: 100px; height: 100px; display: inline-block"></div>
    </div>
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

тогда функция, которая может перекрасить наш svg в нужные цвета может выглядеть так:

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

<script src="./index.mjs" type="module"></script>
<script>
    
</script>