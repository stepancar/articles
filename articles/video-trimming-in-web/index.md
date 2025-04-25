---
layout: article.njk
title: Video trimming in web
shortDescription: This article explains how trim video in web
creationDate: 2025-04-10
---


Download [this video](https://github.com/stepancar/articles/raw/refs/heads/main/articles/video-trimming-in-web/test_videos/bbb_sunflower_1min_1080p_30fps_normal.mp4?download=) for testing


Edit trim regions

Chose the file to start trimming


By default there are 4 trim regions defined with total duration of 18 seconds

```json
[
    [1000, 4000],
    [7000, 10000],
    [12000, 19000],
    [20000, 25000]
]
```


<demo-with-playground
    file="./demo/index.html"
    initialPath="./demo/index.html"
/>

<script src="./index.mjs" type="module"></script>

