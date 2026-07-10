---
layout: article.njk
title: "VP9 alpha in WebM: what happens when color and alpha keyframes don't align"
creationDate: 2026-07-04
---

<p class="lead">
    Transparent WebM video is not one stream — it is two: a color VP8/VP9 stream and a
    separate alpha VP8/VP9 stream riding along as <code>BlockAdditional</code> data.
    Nothing in the container guarantees their keyframes line up. This page demonstrates
    how differently Chrome, Firefox and Safari behave when they don't.
</p>

## The problem

A video frame is either a **keyframe** (complete picture) or a **delta frame** (a diff
against previous frames). A delta frame can only be decoded if the decoder has walked the
whole chain from the last keyframe — and this holds *per stream*: the color stream and
the alpha stream each have their own chain.

During continuous playback misaligned keyframes are harmless: both decoders are fed every
frame, both chains stay intact, and pairing frames by timestamp just works.

Seeking is where it breaks. The player jumps to a **color** keyframe (that is the only
thing the container indexes — alpha is an attachment to the color block, it has no index
of its own). If the alpha frame at that position is a delta, the alpha decoder is handed
a diff it has no history for:

<pre>
time  →        935.0        937.3 (← seek lands here)     939.6
color:   … D D D D D D D D  [K] D D D D D D D D D D D  …
alpha:   … [K] D D D D D D   D  D D D D D D D D D D [K] …
</pre>

The compressed alpha bytes for 937.3 are right there — but they are undecodable. Every
engine has to decide what to show until the alpha stream reaches its own next keyframe.
This is not hypothetical: Firefox shipped a seek-breaking bug caused by exactly this
(<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1393087">bug 1393087</a>, a real
video where a 130-second region has color keyframes with delta alpha).

## Demo

The video below is crafted so that the **color** stream has keyframes at 0/1/2/3/4/5s but
the **alpha** stream has keyframes at 0s and 3s only. The alpha mask is a moving vertical
bar, the color plane is solid green, and the page background is a checkerboard, so you can
see exactly what the compositor does.

Seek into a "misaligned" point (1s, 2s, 4s, 5s — color keyframe, delta alpha) and watch
what your browser renders until the next alpha keyframe:

<style>
#demo-stage {
    background: repeating-conic-gradient(#c33 0% 25%, #eee 0% 50%) 0 0 / 32px 32px;
    padding: 16px; display: inline-block;
}
#demo-video { display: block; width: 320px; height: 240px; }
#demo-controls { margin: 8px 0; }
#demo-controls button { margin-right: 6px; }
#demo-status, #alpha-readout { font-family: monospace; font-size: 13px; }
</style>

<div id="demo-stage">
    <video id="demo-video" muted loop playsinline src="misaligned-demo.webm"></video>
</div>
<div id="demo-controls">
    <button id="btn-play">Play</button>
    <button id="btn-pause">Pause</button>
    <button data-seek="1.0">Seek 1s (misaligned)</button>
    <button data-seek="2.0">Seek 2s (misaligned)</button>
    <button data-seek="4.0">Seek 4s (misaligned)</button>
    <button data-seek="3.0">Seek 3s (aligned)</button>
</div>
<div id="demo-status"></div>
<div id="alpha-readout"></div>

<script type="module" src="index.mjs"></script>

## What each engine does, and why

The three engines picked three different answers to "what do we show while the alpha
chain is broken":

| Engine | Strategy | What you see after seeking to 1s/2s/4s/5s |
|---|---|---|
| **Chrome** | Never resets the alpha decoder on seek: the libvpx context — including its reference frames from the *pre-seek* position — survives, and delta frames are decoded against that stale history. | The mask appears immediately, but it is **wrong** — a ghost of the pre-seek mask position, smearing/drifting as deltas accumulate — then snaps correct at the 3s alpha keyframe. |
| **Firefox** | After bug 1393087: an undecodable alpha plane is non-fatal — alpha is simply dropped for those frames. | The video turns **fully opaque** (the checkerboard disappears behind a green rectangle) until the 3s alpha keyframe, then the mask returns. |
| **Safari** (with the [VP9-alpha patch](https://github.com/WebKit/WebKit/pull/64837)) | The alpha decoder waits for the alpha stream's own keyframe; undecodable alpha is treated as absent, matching Firefox. | Same as Firefox: opaque until 3s, then correct. |

### Chrome: keep the alpha decoder's memory across seeks

Chromium decodes alpha WebM in `media/filters/vpx_video_decoder.cc` with **two libvpx
contexts** — `vpx_codec_` for color and `vpx_codec_alpha_` for the side-data stream. The
trick is in what happens on seek: the pipeline calls <a
href="https://github.com/chromium/chromium/blob/d5f73949391e68a81c6bb339afc0b57f049bbd51/media/filters/vpx_video_decoder.cc#L196-L208">
<code>VpxVideoDecoder::Reset()</code></a>, and it resets two state enums — **and does not
touch either libvpx context**. The contexts are created only in <a
href="https://github.com/chromium/chromium/blob/d5f73949391e68a81c6bb339afc0b57f049bbd51/media/filters/vpx_video_decoder.cc#L252">
<code>ConfigureDecoder</code></a> and destroyed only in <a
href="https://github.com/chromium/chromium/blob/d5f73949391e68a81c6bb339afc0b57f049bbd51/media/filters/vpx_video_decoder.cc#L270-L283">
<code>CloseDecoder</code></a> (destructor, re-initialize, detach — never on seek).

Reference frames live inside a libvpx context until it is destroyed. So after a seek the
alpha decoder still holds the reference frames from the *pre-seek* position, and the
incoming delta frames happily decode against that stale history — producing an alpha
plane that is plausible but wrong, converging over time and snapping correct at the next
alpha keyframe. It is a masking strategy, not a fix — and it has a hole: on a true cold
start (no history at all), an undecodable alpha delta <a
href="https://github.com/chromium/chromium/blob/d5f73949391e68a81c6bb339afc0b57f049bbd51/media/filters/vpx_video_decoder.cc#L338">fails
the whole frame decode</a>, and a decode that yields no alpha image <a
href="https://github.com/chromium/chromium/blob/d5f73949391e68a81c6bb339afc0b57f049bbd51/media/filters/vpx_video_decoder.cc#L340-L343">drops
the entire video frame</a>, color included.

### Firefox: alpha errors are non-fatal, drop the alpha plane

Firefox also runs a second libvpx decoder for the alpha side data
(`VPXDecoder::DecodeAlpha`). Before <a
href="https://bugzilla.mozilla.org/show_bug.cgi?id=1393087">bug 1393087</a> an alpha
decode error was treated like any decode error — **fatal**, killing playback with
`NS_ERROR_DOM_MEDIA_DECODE_ERR` the moment you seeked into a misaligned region. The fix
made alpha failures non-fatal: the frame is rendered **without its alpha plane** (fully
opaque) until the alpha stream reaches its own next keyframe and decoding resumes.

### Safari: gate alpha on its own keyframes, degrade like Firefox

WebKit (with the <a href="https://github.com/WebKit/WebKit/pull/64837">VP9-alpha
patch</a>) decodes the alpha stream on a companion `WebCoreDecompressionSession`
(VideoToolbox) next to the color one. Two decisions matter here:

1. The alpha sample's random-access flag is parsed from the **alpha bitstream itself**,
   not copied from the color frame — so after a flush the alpha decoder correctly waits
   for an alpha keyframe instead of being handed a delta it would decode into garbage
   (VideoToolbox, unlike libvpx-with-stale-refs, refuses missing-reference deltas).
2. While alpha is undecodable it is treated as absent and the color frame is emitted
   opaque — deliberately matching Firefox's behavior rather than Chrome's stale-reference
   approximation, because "briefly opaque" is deterministic and testable while "briefly
   wrong" is neither.

### The fully correct answer that nobody implements

Pre-rolling the alpha stream from its *own* previous keyframe would render this whole
page moot — but no engine does it: it requires demuxing the two streams from two
different entry points, and the WebM container only indexes color keyframes (`Cues` point
at blocks; alpha is an attachment of those blocks with no index of its own).

## How the demo file was made

Two VP9 streams are encoded independently with different GOP sizes, then muxed into WebM
with the alpha stream as `BlockAdditional` (BlockAddID=1, `AlphaMode=1`) by a small
python muxer (<a href="https://github.com/stepancar/articles/tree/main/articles/vp9-alpha-keyframe-misalignment/tools">tools/mux_misaligned.py</a>):

```bash
# color: solid green, keyframe every 30 frames (1s)
ffmpeg -f lavfi -i "color=c=green:size=320x240:rate=30:duration=6" \
    -c:v libvpx-vp9 -g 30 -keyint_min 30 -pix_fmt yuv420p -f ivf color.ivf

# alpha: moving bar as luma, keyframe every 90 frames (3s), full range
ffmpeg -f lavfi -i "color=c=black:size=320x240:rate=30:duration=6,format=gray,\
geq=lum='if(between(X, mod(T*160,400)-80, mod(T*160,400)), 255, 0)',\
format=yuv420p,scale=in_range=tv:out_range=pc" \
    -c:v libvpx-vp9 -g 90 -keyint_min 90 -pix_fmt yuv420p -color_range pc -f ivf alpha.ivf

python3 tools/mux_misaligned.py color.ivf alpha.ivf misaligned-demo.webm 320 240 30
```

Regular encoders (ffmpeg's `yuva420p` path) always align the two streams' keyframes —
that is why this case is rare in the wild, and why it slips through most test suites.
A second sample with a static mask and the same misalignment is
<a href="static-demo.webm">here</a>.
