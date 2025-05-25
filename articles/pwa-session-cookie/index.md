---
layout: article.njk
title: PWA session cookie
shortDescription:
creationDate: 2025-05-25
---

Session cookie is a type of cookie that is stored in memory and is cleared when the browser or app is closed. This article explores how session cookies behave across different platforms and contexts

How to create a session cookie in JavaScript:

```javascript
document.cookie = "sessionCookie=value; path=/; secure; SameSite=Lax";
```

| Platform / Context         | Session Cookie Cleared When...       | Notes                                             |
| -------------------------- | ------------------------------------ | ------------------------------------------------- |
| **Chrome (Desktop)**       | Tab is closed                        | Unless "Continue where you left off" is enabled   |
| **Safari (iOS - Regular)** | Browser (Safari) is fully closed     | Closing tab alone does not clear session cookies  |
| **Safari (iOS - Private)** | Tab is closed or app is fully closed | Session cookies are properly cleared as expected  |
| **iOS PWA (Home Screen)**  | ❌ Not cleared on app close          | Session cookie persists even after full app close |
| **Chrome (Android PWA)**   | App is closed                        |

See it in action:
Install PWA from [this link](https://stepancar.github.io/articles/articles/pwa-session-cookie/src/)

<demo-with-playground
    file="src/index.html"
    initialPath="./src/index.html"
/>
