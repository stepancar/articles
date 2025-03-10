---
layout: article.njk
title: PWA open PDF on IOS
shortDescription: This article explains how to force your PWA to show controls for PDF
creationDate: 2025-03-10
---

### PDF in PWA

When you are developing a PWA for iOS, you may encounter a problem with PDF files. When you click on a PDF link, it will be opened in in-app browser right inside your PWA.

When you are developing a PWA for iOS, you may encounter a problem with external links. When you click on an external (does not match with start url of PWA) link, it will be opened in in-app browser right inside your PWA.
:

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
            <img src="./assets/in-app-browser.png" alt="In-app Browser">
        </td>
        <td>
            <img src="./assets/safari.png" alt="Safari">
        </td>
    </tr>
</table>

See it in action:
Install PWA from [this link](https://stepancar.github.io/articles/articles/pwa-external-link/src/)


<demo-with-playground
    file="src/index.html"
    initialPath="./src/index.html"
/>
