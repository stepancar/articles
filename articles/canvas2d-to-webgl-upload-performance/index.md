---
layout: article.njk
title: Canvas 2D to WebGL upload performance
shortDescription: Measure the FPS of a flow that draws on N Canvas 2D contexts and uploads each one as a texture to WebGL on every iteration.
creationDate: 2026-05-20
---

# Canvas 2D → WebGL upload performance

## Introduction

A common rendering pipeline in the web is:

1. Draw something with the Canvas 2D API onto one or more 2D canvases.
2. Upload each of those 2D canvases to a WebGL texture via `gl.texImage2D(..., canvas)`.
3. Composite all textures into the WebGL canvas.

This flow appears in video editors, compositors, sticker overlays, etc.
The bottleneck is rarely the WebGL draw call itself — it is the CPU→GPU
upload of the 2D canvas content on every frame.

This article ships a small benchmark that lets you control the inputs
and see how the FPS of that pipeline changes.

## Parameters

The demo allows you to control:

+ WebGL canvas size — output resolution.
+ Canvas 2D size — size of each source canvas.
+ Number of Canvas 2D — how many 2D canvases are drawn and uploaded per iteration.
+ Number of iterations — how many frames the test runs.

On each iteration the demo:

1. Draws a moving shape and text on every 2D canvas.
2. Calls `gl.texImage2D(...)` for each 2D canvas, uploading it as a texture.
3. Draws all textures into a grid on the WebGL canvas.
4. Calls `gl.finish()` to wait for the GPU.
5. Waits for the next animation frame.

After the test finishes, the demo displays the total time, the average
time per iteration and the resulting FPS.

```js
for (let iter = 0; iter < iterations; iter++) {
    for (let i = 0; i < items.length; i++) {
        drawOn2dCanvas(items[i], iter, i);
    }
    uploadAndRender(items, glW, glH);
    await nextFrame();
}
```

The upload step is the part being measured most directly:

```js
gl.bindTexture(gl.TEXTURE_2D, item.texture);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, item.canvas);
```

## Demo

<demo-with-playground
    file="demo/index.html"
    initialPath="./demo/index.html"
/>

## What to expect

+ FPS scales inversely with `Canvas 2D size * Canvas 2D count`, because
  the cost of `texImage2D(canvas)` is roughly proportional to the number
  of pixels uploaded.
+ The WebGL canvas size matters far less — once textures are on the GPU,
  rasterizing a few quads is cheap.
+ Going from 1 large canvas to many small canvases of the same total
  area is usually slower, because each upload has fixed per-call overhead.

## Conclusion

The 2D-draw + WebGL-upload loop is a useful pattern, but the upload step
is what limits its FPS. Measure with this demo before designing a
pipeline that does it every frame.
