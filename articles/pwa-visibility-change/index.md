---
layout: article.njk
title: PWA visibility change
shortDescription: This article explains how to use the visibility change event in a PWA.
creationDate: 2025-05-17
---


# PWA visibility change

[Visibility change events](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event) are important for Progressive Web Apps (PWAs) because they allow developers to manage the app's behavior when the user minimizes the app or closes it. This is particularly important for PWAs, which are designed to provide a native app-like experience on the web.

Here's a demonstration of how to use the visibility change event in a PWA:

```javascript
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'hidden') {
    // The app is minimized or closed
    console.log('App is minimized or closed');
    // Perform any necessary actions, such as pausing a video or saving state
  } else {
    // The app is visible again
    console.log('App is visible again');
    // Resume any paused activities or refresh the UI
  }
});
```

See it in action:
Install PWA from [this link](https://stepancar.github.io/articles/articles/pwa-visibility-change/src/)


<demo-with-playground
    file="src/index.html"
    initialPath="./src/index.html"
/>

## Notes
- Sometimes the visibility change event may not fire as expected
- When user closes the app, pwa fires the visibility change event with the state 'hidden' twice (not always).
