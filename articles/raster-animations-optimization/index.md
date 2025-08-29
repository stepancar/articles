---
layout: article.njk
title: Raster animations optimization
shortDescription: Draft
creationDate: 2025-08-15
---

This article explores techniques for optimizing raster animations, focusing on balancing quality and file size. It includes a server-side benchmark script that converts Lottie animations to videos using various codecs and parameters, generating an interactive HTML report for analysis.

The same idea is described in [This article](https://jakearchibald.com/2024/video-with-transparency/)


It also provides an interactive demo utilizin ffmpeg.wasm.
Unfortunatelly, due to browser limitations, the demo can only process some of codecs and parameters.

To get a comprehensive benchmark, please refer to the [Server Benchmark Script](SERVER-BENCHMARK.md).

<demo-with-playground
    file="src/index.html"
    initialPath="./src/index.html"
/>

## Notes

