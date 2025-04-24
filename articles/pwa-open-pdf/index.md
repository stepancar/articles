---
layout: article.njk
title: PWA open PDF on IOS
shortDescription: This article explains how to force your PWA to show controls for PDF
creationDate: 2025-03-10
---


When you are developing a PWA for iOS, you may encounter a problem with PDF files. When you click on a PDF link, it will override the current page and show the PDF file. This is not a good user experience because the user will not be able to go back to the previous page. The only way to go back is to reload the PWA.

There are several ways to open a PDF file in a PWA on iOS, but none of them are perfect. Here are some of the options:


## Regular link


<div class="wide-content" style="display: flex; justify-content: stretch;">
    <div style="width: 30%;">
        <img class="shadow" src="./assets/same-domain.png" alt="Same domain">
    </div>
    <div>
        {% highlight html %}
            <a href="test.pdf">Open PDF</a>
        {% endhighlight %}
        <ul>
            <li>Replaces current page</li>
            <li>No back button</li>
            <li>Requires to reload the PWA</li>
        </ul>
    </div>
</div>

## Link to another domain

<div class="wide-content" style="display: flex; justify-content: stretch;">
    <div style="width: 30%;">
        <img class="shadow" src="./assets/another-domain.png" alt="Same domain">
    </div>
    <div style="width: 65%;">
        {% highlight html %}
            <a href="https://example.com/test.pdf">Open PDF</a>
        {% endhighlight %}
        <ul>
            <li>Works well</li>
            <li>Requires some work to support subdomain on your web site</li>
        </ul>
    </div>
</div>

## window.open blob uri

<div class="wide-content" style="display: flex; justify-content: stretch;">
    <div style="width: 30%;">
        <img class="shadow" src="./assets/window-open.png" alt="Same domain">
    </div>
    <div style="width: 65%;">
        {% highlight html %}
            <a id="myLink" href="href">Open PDF</a>
        {% endhighlight %}
        {% highlight js %}
        document.getElementById('myLink').addEventListener('click', async (e) => {
            e.preventDefault();
            const url = e.target.href;
            window.open(url, '_blank');
        });
        {% endhighlight %}
        <ul>
            <li>Works only when popups are allowed in safari settings</li>
            <li>Shows warning</li>
            <li>Does not allow to open file in safari</li>
        </ul>
    </div>
</div>

## Native link with blob uri

<div class="wide-content" style="display: flex; justify-content: stretch;">
    <div style="width: 30%;">
        <img class="shadow" src="./assets/blob-uri.png" alt="Same domain">
    </div>
    <div style="width: 65%;">
        {% highlight html %}
            <a id="myLink" href="./test.pdf">Open PDF</a>
        {% endhighlight %}
        {% highlight js %}
        document.getElementById('myLink').addEventListener('click', async (e) => {
            e.preventDefault();
            const response = await fetch(e.target.href);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            window.open(url, '_blank');
        });
        {% endhighlight %}
        <ul>
            <li>Does not allow to open file in safari</li>
        </ul>
    </div>
</div>

## Native link with blob mime type octet-stream

<div class="wide-content" style="display: flex; justify-content: stretch;">
    <div style="width: 30%;">
        <img class="shadow" src="./assets/octet-stream.png" alt="Octet stream mime type">
    </div>
    <div style="width: 65%;">
        {% highlight html %}
            <a id="myLink" href="./test.pdf">Open PDF</a>
        {% endhighlight %}
        {% highlight js %}
        document.getElementById('myLink').addEventListener('click', async (e) => {
            e.preventDefault();
            const response = await fetch(e.target.href);
            const blob = new Blob([await response.blob()], { type: 'octet/stream' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'test.pdf';
            a.click();
        });
        {% endhighlight %}
        <ul>
            <li>Does not show preview</li>
            <li>Allows to share file</li>
            <li>Does not allow to open file in safari</li>
        </ul>
    </div>
</div>


See it in action:
Install PWA from [this link](https://stepancar.github.io/articles/articles/pwa-open-pdf/src/)


<demo-with-playground
    file="src/index.html"
    initialPath="./src/index.html"
/>
