---
layout: article.njk
title: Downside of raster animations in Lottie
shortDescription: This article explores the downsides of using Lottie for raster animations
creationDate: 2024-10-23
---

<style>
    .side-by-side {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }

    .side-by-side iframe {
        width: 50%;
    }
</style>

Lottie is a powerful library that enables real-time rendering of animations using JSON files. It's an excellent tool for creating animations that are easily shareable across various platforms. However, like any technology, Lottie has its drawbacks. This article focuses on one particular issue: the potential downsides of using raster animations in Lottie.

Before diving in, it's important to have a basic understanding of the Lottie format and how it works. If you're new to Lottie, check out [this comprehensive guide](https://dev.to/stepancar/lottie-under-the-hood-4gik) to get up to speed.

## Vector vs Raster Animations in Lottie

Let's examine this bouncing heart animation:

<demo-with-playground
    file="demos/bouncing-heart-large/index.html"
    initialPath="./demos/bouncing-heart-large/index.html"
/>

You can view the source of this animation [here](./assets/bouncing-heart-large.json). Here's a snippet of what it looks like:

```json
{
  "v": "5.11.0",
  "fr": 25,
  "ip": 0,
  "op": 31,
  "w": 244,
  "h": 196,
  "nm": "Heart",
  "ddd": 0,
  "assets": [
    {
      "id": "imgSeq_0",
      "w": 410,
      "h": 364,
      "t": "seq",
      "u": "",
      "p": "data:image/png;base64,...."
    },
    {
      "id": "imgSeq_1",
      "w": 410,
      "h": 364,
      "t": "seq",
      "u": "",
      "p": "data:image/png;base64,...."
    }
    ...
    {
      "id": "imgSeq_23",
      "w": 410,
      "h": 364,
      "t": "seq",
      "u": "",
      "p": "data:image/png;base64,...."
    }
  ],
}
```

This animation consists of 24 separate images, each encoded as a base64 PNG. When the animation plays, the Lottie player loads and displays each image in sequence. Without Lottie, we could achieve a similar effect with JavaScript like this:

```js
const response = await fetch('../../assets/bouncing-heart-large.json');
const data = await response.json();
const {assets} = data;

const image = document.createElement('img');
document.getElementById('animation').appendChild(image);

let counter = 0;

function render() {
    const activeImage = assets[counter % assets.length];
    image.src = activeImage.p;

    counter++;
    requestAnimationFrame(render);
}

render();
```

<demo-with-playground
    file="demos/bouncing-heart-images-switch/index.html"
    initialPath="./demos/bouncing-heart-images-switch/index.html"
/>

Alternatively, we could create separate image elements for each frame and display them sequentially. Feel free to experiment with optimizing this custom player.

The major drawback here is the file size: at 1.5MB, it's extremely large for such a simple animation. This bloat occurs because the designer exported the animation as a sequence of raster images instead of a vector animation. While this approach can sometimes be necessary for complex effects like 3D, it often leads to performance issues and oversized files.

Ideally, Lottie would support storing image sequences in a compressed format, similar to video files. This would significantly reduce file sizes and improve performance. Unfortunately, Lottie doesn't currently offer this feature.

There's an alternative called [dotlottie](https://dotlottie.io/) that claims to be more efficient due to its binary format. However, it's a proprietary solution and not widely supported. Ideally, this kind of optimization would be built into Lottie itself.

## What Can Developers Do?

The best approach is to work closely with designers, encouraging them to create vector animations whenever possible. This naturally leads to smaller file sizes and better performance.

When vector animations aren't feasible, look for creative compromises. In this case, we can achieve a similar effect using a single raster frame and animating its scale property:

Look at [this optimized animation](./assets/compressed-heart-animation.json):

```json
{
    "v": "5.11.0",
    "fr": 25,
    "ip": 0,
    "op": 31,
    "w": 335,
    "h": 240,
    "nm": "Alfa Red Heart extra low",
    "ddd": 0,
    "assets": [
        {
            "id": "image_0",
            "w": 410,
            "h": 364,
            "u": "",
            "p": "data:image/png;base64,...",
        }
    ],
    "layers": [
        {
            "ddd": 0,
            "ind": 1,
            "ty": 2,
            "nm": "HEART_main_page_00011.png",
            "cl": "png",
            "refId": "image_0", // reference to image asset
            "sr": 1,
            "ks": {
                ...
                "s": { // scale key frames
                    "a": 1,
                    "k": [
                        {
                            "i": {
                                "x": [
                                    0.08,
                                    0.08,
                                    0.25
                                ],
                                "y": [
                                    1.022,
                                    1.024,
                                    1
                                ]
                            },
                            "o": {
                                "x": [
                                    0.31,
                                    0.31,
                                    0.75
                                ],
                                "y": [
                                    0,
                                    0,
                                    0
                                ]
                            },
                            "t": 0,
                            "s": [
                                68.8,
                                68.8,
                                100
                            ]
                        },
                        {
                            "i": {
                                "x": [
                                    0.188,
                                    0.188,
                                    0.25
                                ],
                                "y": [
                                    1,
                                    1,
                                    1
                                ]
                            },
                            "o": {
                                "x": [
                                    0.5,
                                    0.5,
                                    0.75
                                ],
                                "y": [
                                    0.003,
                                    0.004,
                                    0
                                ]
                            },
                            "t": 6,
                            "s": [
                                56.8,
                                57.8,
                                100
                            ]
                        },
                        {
                            "i": {
                                "x": [
                                    0.399,
                                    0.399,
                                    0.25
                                ],
                                "y": [
                                    0.997,
                                    0.997,
                                    1
                                ]
                            },
                            "o": {
                                "x": [
                                    0.5,
                                    0.5,
                                    0.75
                                ],
                                "y": [
                                    0,
                                    0,
                                    0
                                ]
                            },
                            "t": 11,
                            "s": [
                                68.8,
                                68.8,
                                100
                            ]
                        },
                        {
                            "i": {
                                "x": [
                                    0.163,
                                    0.163,
                                    0.25
                                ],
                                "y": [
                                    0.8,
                                    0.777,
                                    1
                                ]
                            },
                            "o": {
                                "x": [
                                    0.2,
                                    0.2,
                                    0.75
                                ],
                                "y": [
                                    0.005,
                                    0.005,
                                    0
                                ]
                            },
                            "t": 16,
                            "s": [
                                58.8,
                                59.8,
                                100
                            ]
                        },
                        {
                            "t": 30,
                            "s": [
                                68.8,
                                68.8,
                                100
                            ]
                        }
                    ],
                    "ix": 6,
                    "l": 2
                }
            },
            "ao": 0,
            "ip": 0,
            "op": 31,
            "st": 0,
            "bm": 0
        }
    ],
    "markers": [],
    "props": {},
}
```

This optimized version achieves a visually similar result, but the JSON file is now 30 times smaller – a massive improvement in efficiency.

<demo-with-playground
    file="demos/bouncing-heart-optimized/index.html"
    initialPath="./demos/bouncing-heart-optimized/index.html"
/>

Here's a side-by-side comparison of the original and optimized animations:

<div class="side-by-side">
    <iframe src="./demos/bouncing-heart-large/index.html"></iframe>
    <iframe src="./demos/bouncing-heart-optimized/index.html"></iframe>
</div>

By making smart choices about how we create and export animations for Lottie, we can significantly improve performance without sacrificing visual quality.
