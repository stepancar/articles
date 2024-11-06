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

