import { BaseAsset } from "./baseAsset.mjs";
import { MP4Demuxer } from '../../mp4Demuxer/demuxer.mjs';
export class VideoAsset extends BaseAsset {
    constructor({ src, ...settings }) {
        super(settings);
        this.video = new MyHtmlVideoElement();
        this.video.src = src;
        this.video.muted = true;
        this.video.loop = true;
    }

    draw(ctx) {
        ctx.drawImage(this.video.currenFrame, this.position.x, this.position.y, this.bounds.width, this.bounds.height);
    }

    play() {
        this.video.play();
    }

    async seek(time) {
        this.currentTime = time;
        return new Promise((resolve) => {
            this.video.addEventListener("seeked", () => {
                resolve();
            }, { once: true });
            this.video.currentTime = this.currentTime / 1000;
            // debugger;
        });
    }

    async waitWhenResourceReady() {
        return new Promise((resolve) => {
            this.video.addEventListener("canplay", () => {
                resolve();
            }, { once: true });
        });
    }
}


class MyHtmlVideoElement extends EventTarget {
    #currentTime = 0;
    #demuxer = null;
    #decoder = null;
    #src = null;
    #frames = [];
    #init() {
        // Set up a VideoDecoder.
        this.#decoder = new VideoDecoder({
            output: (frame) => {
                // this.dispatchEvent(new CustomEvent('frame', { detail: frame }));
                // console.log('frame', frame.timestamp);
                this.#frames.push(frame);
            },
            error(e) {
                debugger;
            }
        });
        // Fetch and demux the media data.
        this.#demuxer = new MP4Demuxer(this.#src, {
            onConfig: (config) => {
                this.#decoder.configure({
                    ...config, // optimizeForLatency: true
                });
            },
            onChunk: (chunk) =>{
                this.#decoder.decode(chunk);
            },
            setStatus(status) {
                console.log(status);
            },
            onFinish: () => {
                this.dispatchEvent(new CustomEvent('canplay'));
            }
        });
    }

    async #seek() {
        this.dispatchEvent(new CustomEvent('seeked'));
    }

    #secondsToTimestamp(seconds) {
        return Math.round(seconds * 1_000_000);
    }

    get src() {
        return this.#src;
    }

    set src(src) {
        this.#src = src;
        this.#init();
    }

    get currentTime() {
        return this.#currentTime;
    }

    set currentTime(time) {
        this.#currentTime = time;
        this.#seek();
    }

    get currenFrame() {
        const timestamp = this.#secondsToTimestamp(this.#currentTime);
        const frame = this.#frames.find((frame) => {
            return frame.timestamp <= timestamp && frame.timestamp + frame.duration >= timestamp;
        });

        if (!frame) {
            return this.#frames[0]
        }

        return frame;
    }

    get duration() {
        return this.#demuxer.duration;
    }
}