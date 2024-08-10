<style>
    iframe {
        display: inline-block;
        margin: 10px;
        border: 0;
        width: 100%;
    }

    .global-theme-select {
        position: fixed;
        top: 50%;
        left: 0;
        z-index: 1000;
        font-size: 20px
    }
    .global-theme-select select {
        font-size: 50px;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        margin: 0 auto;
        margin-left: 200px;

        max-width: 1200px;
    }
</style>

<body>
<pre>
    <code class="language-html"></code>
</pre>

<div class="global-theme-select">
    <select id="themeSelect" >
        <option value="[16711680, 65280, 255]">original</option>
        <option value="[5785334, 2369583, 10463935]">lumen5</option>
        <option value="[4359668, 16497669, 3450963]">google</option>
        <option value="[1603570, 16777215, 15790837]">facebook</option>
        <option value="[16750848, 0, 16777215]">amazon</option>
        <option value="[2236191, 16777215, 15010068]">netflix</option>
    </select>
</div>

## Color channel mapping

In this article, I will try to tell you about the task of recoloring a media resource in the colors of the palette.
And about one of the possible solutions to this problem, called color channel mapping.


Let's imagine that we are creating an application for creating video presentations.
For each slide, the user can choose an animation that will be displayed in the background.


besides the animation itself, the user can choose a color palette.
For simplicity, let's assume that the palette consists of 3 colors, the animation itself consists of several objects, at the stage of creating the animation, the designer sets the color number from the palette for each object.
The question arises, how can we color the animation in the colors of the user's palette?


Those animations can be implemented in different ways, however, we will consider 3 main ones:

<div class="container">
    <iframe src="../src/code-based-animation/index.html"></iframe>
    <iframe src="../src/svg-based-animation/index.html"></iframe>
    <iframe src="../src/solid-color-remapping/index.html"></iframe>
</div>

```javascript
const themeSelect = document.getElementById('themeSelect');
```

<script src="./src/index.mjs" type="module"></script>
<script>
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        iframe.onload = () => {
            function resizeIframe() {
                iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 20+ 'px';
            }

            iframe.height = iframe.contentWindow.document.body.scrollHeight;
            const iframeDocument = iframe.contentWindow.document;

            resizeIframe(); // Initial resize after content load

            // Create a MutationObserver to watch for changes in the content
            const observer = new MutationObserver(() => {
                resizeIframe();
            });

            // Configure the observer to watch for changes to child nodes and subtree
            observer.observe(iframeDocument.body, {
                childList: true,
                subtree: true
            });
        };
    });
</script>