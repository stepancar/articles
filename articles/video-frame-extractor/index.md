---
layout: article.njk
title: Video Frame Extractor
shortDescription: This article explores details of impelmenting analog of html video element.
---

Lets run simple animation.
We are going to draw image on canvas, draw clock and animate it.

<demo-with-playground
    file="./src/1/index.html"
    initialPath="./src/1/index.html"
/>

Lets refactor our scene so it would be easier to add more elements.

- Scene
    - ClockAsset
    - BackgroundAsset
    - TextAsset

every asset extends from BaseAsset which defines basic interface

- waitWhenResourceReady
- currentTime {get; set;}
- draw

<demo-with-playground
    file="./src/2/index.html"
    initialPath="./src/2/index.html"
/>


Let's add video element to our scene.

<demo-with-playground
    file="./src/3/index.html"
    initialPath="./src/3/index.html"
/>

We have a testing video which was recorded using macos screen recording tool which produces .mov files.

lets convert it to mp4 using ffmpeg

```bash
ffmpeg -i stepan_holy_nodejs.mov -c:v libx264 -g 9999 -keyint_min 9999 -sc_threshold 0 -c:a copy stepan_holy_nodejs_single_keyframe.mp4
```

```bash
ffmpeg -i stepan_holy_nodejs.mov -c:v libx264 -g 1 -keyint_min 1 -sc_threshold 0 -c:a copy stepan_holy_nodejs_all_keyframes.mp4
```

if you test seeking performance all keyframes video will be much faster.

