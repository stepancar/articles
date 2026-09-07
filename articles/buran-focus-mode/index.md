---
layout: article.njk
title: A two-part contract for full-screen web apps
shortDescription: How a page can opt into a browser's full-screen focus mode with one meta tag, while every piece of configuration keeps coming from the web app manifest
creationDate: 2026-09-06
---

### The problem with browser chrome

An address bar and a toolbar cost about a fifth of a phone screen, and they are
pure overhead for a site you use like an app. iOS already has an escape hatch —
Add to Home Screen — but it is buried, it is per-device, and the resulting icon
is invisible to the browser that created it.

I have been building an experimental iOS browser, Buran, around a different
arrangement: a site declares that it *wants* to be an app, the user confirms it
once, and it lands as a tile in a home-screen widget that launches it full
screen. The interesting part turned out to be not the full-screen view but the
opt-in protocol, and specifically where to draw the line between "ask for it"
and "describe it".

### One tag, and it carries nothing

The declaration is a single meta tag:

```html
<meta name="buran-focus">
<link rel="manifest" href="manifest.json">
```

The tag is a switch. Its only job is to force the focus-mode button to appear in
the browser. It has no `content` worth writing, and the browser does not read
one — which is the point. The moment a vendor tag starts accepting values, it
starts accreting configuration:

```html
<!-- the direction I did not want to go -->
<meta name="buran-focus" content="name=Reader;icon=/icon.png;orientation=portrait">
```

That is a second, worse manifest, wearing a different syntax, maintained in
parallel with the real one, and specific to exactly one browser.

### Everything else comes from the manifest

So the tag says *whether*, and the [web app manifest][manifest] says *what*:

| field | how it is used |
|---|---|
| `short_name` / `name` | the label under the icon |
| `start_url` | what launching from the widget opens |
| `scope` | where the app ends and the open web begins |
| `icons` | the tile artwork |
| `theme_color` | accent for the in-app chrome |
| `background_color` | splash colour while the first page loads |

None of these are Buran-specific, and a site that already ships a manifest for
Android installability needs no new fields. Where a field is absent, the
[spec's own defaults][processing] apply — `start_url` falls back to the document
that linked the manifest, `scope` to the directory of `start_url` — rather than
to whatever happens to be lying around in the page's `<head>`.

That last part is a rule I had to enforce against myself. The first version
quietly fell back to `<title>`, `<meta name="theme-color">` and
`apple-touch-icon` when the manifest was thin. It felt generous. It also meant
the same site could produce two different tiles depending on which fallback
fired, and that a page could configure the app without touching its manifest at
all. Now those tags are ignored outright: if the configuration is not in the
manifest, it does not exist.

### What happens when the manifest is missing

The two halves can disagree — a page can ask for the button and ship no
manifest. The tempting response is to show nothing, since there is nothing to
configure. But the author explicitly asked for the button, and silence gives
them nothing to debug.

So the button appears anyway and states the reason: *no `<link rel="manifest">`*,
or *manifest unreadable*. It is not actionable, and it is not meant to be. It is
the difference between a contract that fails loudly and one that fails by
looking exactly like a site that never opted in.

### The demo

The page below declares the tag and a manifest with an explicit `scope`. In an
ordinary browser it is a normal page; the readout shows how much of the screen
the chrome is eating. It also links one page inside the scope and one outside,
which is the case a full-screen mode has to handle — leaving the app without
trapping you there.

<iframe src="./src/index.html"></iframe>

[Open the demo full width &rarr;](./src/index.html)

### Four apps to try it on

One page is enough to see the mechanism, but not enough to see the point: the
widget is a grid, and a grid of one is a bookmark. So there are three separate
mini-apps, each with its own scope, icon and colours, plus the failure case.

[Buran demo apps &rarr;](./src/apps/)

The hub page deliberately does *not* opt in, which makes it useful twice: no
banner should appear on it, and reaching it from inside one of the apps is the
out-of-scope case.

### What I am still unsure about

Two things, mostly.

A vendor-prefixed tag is a bet that no standard shows up to replace it, and
`display: "standalone"` in the manifest arguably already says "I am an app" —
using it as the trigger would need no new markup at all. I kept the explicit tag
because *installable* and *I want this browser's full-screen mode* are not the
same claim, and I would rather a site opt into the second one deliberately. That
reasoning may not survive contact with real sites.

The other is `scope`. Treating it as the app boundary is what the spec intends,
but plenty of manifests in the wild set it carelessly, and a boundary drawn in
the wrong place is worse than no boundary at all.

[manifest]: https://www.w3.org/TR/appmanifest/
[processing]: https://www.w3.org/TR/appmanifest/#processing-the-start_url-member
