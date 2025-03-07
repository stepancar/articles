---
layout: article.njk
title: PWA external links on IOS
shortDescription: This article explains how to force your PWA to open external links in Safari
creationDate: 2025-03-07
---

### Ios PWA external links opening

When you are developing a PWA for iOS, you may encounter a problem with external links. When you click on an external (does not match with start url of PWA) link, it will be opened in in-app browser right inside your PWA.

If you want to open external links in Safari, you can use the following code:

```javascript
const fullUrl = 'https://example.com';
window.location = `x-safari-${fullUrl}`;
```


<table>
    <tr>
        <th>In-app Browser</th>
        <th>Safari</th>
    </tr>
    <tr>
        <td style="width:50%">
            <video
                muted
                autoplay
                width="100%"
                controls
                src="./assets/in-app-browser.mp4">
            </video>
        </td>
        <td>
            <video
                muted
                autoplay
                width="100%"
                controls
                src="./assets/safari.mp4">
            </video>
        </td>
    </tr>
</table>

See it in action:
Install PWA from [this link](https://stepancar.github.io/articles/articles/pwa-external-link/src/)


<demo-with-playground
    file="src/index.html"
    initialPath="./src/index.html"
/>
