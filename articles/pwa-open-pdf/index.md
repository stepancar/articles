---
layout: article.njk
title: PWA open PDF on IOS
shortDescription: This article explains how to force your PWA to show controls for PDF
creationDate: 2025-03-10
---


When you are developing a PWA for iOS, you may encounter a problem with PDF files. When you click on a PDF link, it will override the current page and show the PDF file. This is not a good user experience because the user will not be able to go back to the previous page. The only way to go back is to reload the PWA.

There are several ways to open a PDF file in a PWA on iOS, but none of them are perfect. Here are some of the options:

<table>
    <tr>
        <th>File on the same domain</th>
        <th>File on another domain</th>
        <th>window.open blob uri</th>
        <th>native link with blob uri</th>
    </tr>
    <tr>
        <td style="width:25%">
            <img src="./assets/same-domain.png" alt="Same domain">
        </td>
        <td style="width:25%">
            <img src="./assets/another-domain.png" alt="Another domain">
        </td>
        <td style="width:25%">
            <img src="./assets/window-open.png" alt="Window open">
        </td>
        <td style="width:25%">
            <img src="./assets/blob-uri.png" alt="Blob Uri">
        </td>
    </tr>
    <tr>
        <td style="width:25%">
            Replaces current page, no back button, requires to reload the PWA
        </td>
        <td style="width:25%">
            Works well, opens in app browser
        </td>
        <td style="width:25%">
            Works only when popups are allowed in safari settings
            Shows warning
            Does not allow to open file in safari
        </td>
        <td style="width:25%">
            Does not allow to open file in safari
        </td>
    </tr>
</table>

See it in action:
Install PWA from [this link](https://stepancar.github.io/articles/articles/pwa-open-pdf/src/)


<demo-with-playground
    file="src/index.html"
    initialPath="./src/index.html"
/>
