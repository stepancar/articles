---
layout: article.njk
title: PWA Contact Picker API
shortDescription:
creationDate: 2025-07-18
---

The [Contact Picker API](https://developer.mozilla.org/en-US/docs/Web/API/Contact_Picker_API) allows web applications to access the user's contact list in a privacy-preserving way. This API is particularly useful for PWAs that need contact information.

How to use the Contact Picker API:

```javascript
const props = ['name', 'email', 'tel'];
const opts = { multiple: true };
const contacts = await navigator.contacts.select(props, opts);
```

| Platform / Browser         | Contact Picker API Support | Notes                                             |
| -------------------------- | --------------------------- | ------------------------------------------------- |
| **Chrome (Desktop)**       | ❌ Not supported            | Desktop browsers don't have access to contacts   |
| **Chrome (Android)**       | ✅ Supported                | Full API support with contact access             |
| **Safari (iOS)**           | experimental feature           | Not implemented in Safari                        |
| **iOS PWA (Home Screen)**  | experimental feature           | Safari engine limitations                         |
| **Firefox**                | ❌ Not supported            | Not implemented                                   |

The API requires user permission and only works on secure contexts (HTTPS). It's designed to be privacy-first, allowing users to select specific contacts rather than giving apps access to the entire contact list.

See it in action:
Install PWA from [this link](https://stepancar.github.io/articles/articles/pwa-contact-picker/src/)

<demo-with-playground
    file="src/index.html"
    initialPath="./src/index.html"
/>