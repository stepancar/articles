---
layout: article.njk
title: Downside of raster animations in Lottie
shortDescription: This article explores the downsides of using Lottie for raster animations
---

## Introduction

Lottie is a library that allows you to render animations in real-time using JSON files. It's a great tool for creating animations that are easy to share across different platforms. However, there are some downsides to using Lottie that you should be aware of. This article explains just one of them.


## Vector vs Raster animations

Let's consider

[bouncing hear lottie animation](./assets/large-heart-animation.json)

In this animation you can see a simple bouncing heart. The animation is created using Lottie.

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

As you can see, animation contains 24 images. Each image is a base64 encoded PNG. This is a huge overhead for the animation. The size of the JSON file is 1.5MB. This is a lot for a simple animation.

this happened because the designer exported the animation as a sequence of images. This is a common mistake when working with Lottie. Instead of exporting the animation as a sequence of images, the designer should export it as a vector animation. This will reduce the size of the JSON file and improve the performance of the animation.

The problem is that in this specific case designer created this animation as raster animation explicitly, because it's hard to create animation with 3D effects in vector format. This is a common problem when working with Lottie. Designers often create animations in raster format because it's easier and faster, and on client side lottie player can handle both vector and raster animations with the same code base.
However, this can lead to performance issues and large file sizes.

This problem could be solved if lottie could store sequence of images in compressed format, like frames are stored in video files. This would reduce the size of the JSON file and improve the performance of the animation.

At this moment, lottie does not support this feature.

There is another library and format called [dotlottie](https://dotlottie.io/). They say that their format size is more efficient because it use binary format. But binary format would not help if we store all images independently. So, they actually can compress sequence of images.
The problem is that this is a custom, not free format. So, it's not widely supported.
Ideally, it should be a feature of lottie itself.

## What can we do?

The only thing we can do is to educate designers to create animations in vector format instead of raster format. This will reduce the size of the JSON file and improve the performance of the animation.

for example, in this specific case, the designer could use just one raster frame and animate it's scale property.

Look at [this animation](./assets/compressed-heart-animation.json)

```
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