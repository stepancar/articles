---
layout: article.njk
title: LUT apply color correction from CUBE
shortDescription: This article explores how to apply LUT color correction to a canvas
creationDate: 2025-04-04
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
    <lut-selector><lut-selector>
</div>


> This article contains interactive demos that respond to the selected color palette. Feel free to experiment with different palettes to see how the demos react.


> Each demo is essentially an iframe pointing to a separate folder with its source code. You can open any of them in a debugger to explore how they work without interfering with other demos.
All demos are written in plain JavaScript without any build tools


## Introduction
Let's imagine we have an image or video and we need to remap the colors in it to match a specific color palette. This is a common task in animation and video production. In previous article we discussed how to apply color channel mapping algorithm. 
The main problem with that that we would need to prepare assets in a specific way. It produces good results for simple media, but it is not very flexible.
In this article we will explor LUT (Look-Up Table) color correction. LUT is a table that maps one color to another. It can be used to remap colors in an image or video to match a specific color palette.


Let's dive into each approach.

## What is LUT?
LUT (Look-Up Table) is a table that maps one color to another. It can be used to remap colors in an image or video to match a specific color palette. LUTs are commonly used in video editing and color grading software to apply color correction and effects to footage.

Let's look at a simple LUT data defined in a cube format. The cube format is a common format for LUTs and is used by many video editing and color grading software.

```c
# Created by Adobe Lightroom plugin Export LUT (1.18.0)
# www.johnrellis.com/lightroom/exportlut.htm
# Preset: Cinematic7
# Color profile: /Library/Application Support/Adobe/Color/Profiles/Recommended/AdobeRGB1998.icc
LUT_3D_SIZE 32
DOMAIN_MIN 0.0 0.0 0.0
DOMAIN_MAX 1.0 1.0 1.0
0.000000 0.000000 0.000000
0.031159 0.001862 0.001190
0.062837 0.003113 0.002167
0.087587 0.006531 0.004181
0.113863 0.012634 0.010315
```


<demo-with-playground
    file="./LUT-with-svg-filter/index.mjs"
    initialPath="./LUT-with-svg-filter/index.html"
/>


<script src="./index.mjs" type="module"></script>