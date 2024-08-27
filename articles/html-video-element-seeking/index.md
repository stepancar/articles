---
layout: article.njk
title: HTML Video Element Seeking Performance
---

<p class="lead">
    In this article we will measure performance of seeking with HTMLVideoElement.
</p>

## Why is this important?
Let's say we are building a video editor application. In the video editor user can upload it's own video, apply some effects, transformations, etc. and then render the final video.
When rendering happens we should render the video frame by frame, which means we should seek to the specific time and then render the frame.


## How to seek html video element?

To seek to a specific time in the video we can use `currentTime` property of the video element.

```javascript
const video = document.querySelector('video');
video.currentTime = 10; // Seek to 10th second
```

but this is not correct, because seeking is an asynchronous operation. So we should listen to `seeked` event to know when seeking is done

```javascript
const video = document.querySelector('video');
video.currentTime = 10; // Seek to 10th second
video.addEventListener('seeked', () => {
  console.log('Seeking is done');
});
```

or lets make it generic

```javascript
async function seek(videElement, currentTime) {
    return new Promise((resolve) => {
        const listener = () => {
            videElement.removeEventListener('seeked', listener);
            resolve()
        }
        videElement.addEventListener('seeked', listener);
        videElement.currentTime = currentTime;
    });
}

await seek(video, 10);
```

## How to measure seeking performance?

In this demo you can chose video you like, edit timestamps and run the test.


<iframe src="./mediaSource/index.html"></iframe>