import { BaseAsset } from './baseAsset.mjs';
import { MP4Demuxer } from '../../mp4Demuxer/demuxer.mjs'

export class VideoAsset extends BaseAsset {
    constructor({ src, ...settings }) {
        super(settings);
        this.video = new HtmlVideoElement();
        this.video.muted = true;
        this.video.loop = true;
        this.video.src = src;
    }

    draw(ctx) {
        if (!this.video.currenFrame) {
            return;
        }
        ctx.drawImage(this.video.currenFrame, this.position.x, this.position.y, this.bounds.width, this.bounds.height);
    }

    async seek(time) {
        const newTime = time / 1000;
        if (newTime > this.video.duration) {
            this.video.currentTime = newTime % this.video.duration;
        } else {
            this.video.currentTime = newTime;
        }

        return new Promise((resolve) => {
            this.video.addEventListener('seeked', () => {
                resolve();
            }, { once: true });
        });
    }

    async waitWhenResourceReady() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
    }

    play() {
        this.video.play();
    }
}


class HtmlVideoElement extends EventTarget {
    #currentTime = 0;
    #demuxer = null;
    #decoder = null;
    #src = null;
    #chunksBuffer = [];
    #frames = [];
    #init() {
        // Set up a VideoDecoder.
        this.#decoder = new VideoDecoder({
            output: (frame) => {
                this.dispatchEvent(new CustomEvent('frame', { detail: frame }));
                this.#frames.push(frame);
            },
            error(e) {
                debugger;
            }
        });
        // Fetch and demux the media data.
        this.#demuxer = new MP4Demuxer(this.#src, {
            onConfig: (config) => {
                this.#decoder.configure(config);
            },
            onChunk: (chunk) =>{
                this.#chunksBuffer.push(chunk);
            },
            setStatus(status) {
                //debugger;
                console.log(status);
            }
        });
    }

    async #seek() {
        this.#frames.forEach((frame) => {
            frame.close();
        });
        this.#frames = [];
        this.#decoder.flush();
        const timestamp = this.#secondsToTimestamp(this.#currentTime)
        const chunkForTimestampIndex = this.#chunksBuffer.findIndex((chunk) => {
            if (chunk.timestamp >= timestamp) {
                return true;
            }
        });

        if (chunkForTimestampIndex === -1) {
            throw new Error('No chunk found for the current time');
        }

        const chunk = this.#chunksBuffer[chunkForTimestampIndex];
        if (chunk.type === 'key' && chunk.timestamp === timestamp) {
            const startIndex = chunkForTimestampIndex;
            await this.doDecodingUntilTimestamp(startIndex);
        } else {
            let startIndex = chunkForTimestampIndex - 1;

            for (let i = chunkForTimestampIndex; i >= 0; i--) {
                if (this.#chunksBuffer[i].type === 'key') {
                    startIndex = i;
                    break;
                }
            }
            await this.doDecodingUntilTimestamp(startIndex, timestamp);
        }

        this.dispatchEvent(new CustomEvent('seeked'));
    }

    async doDecodingUntilTimestamp(startIndex) {
        
        let index = startIndex;
        const decoder = this.#decoder;

        while (!this.currenFrame) {
            const chunk = this.#chunksBuffer[index];
            if (!chunk) {
                return;
            }
            decoder.decode(chunk);
            while (decoder.decodeQueueSize) {
                await new Promise(resolve => {
                    decoder.addEventListener('dequeue', resolve, { once: true });
                });
            }

            index++;
        }
    }

    #secondsToTimestamp(seconds) {
        return seconds * 1_000_000;
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
            if (timestamp === 0) {
                return this.#frames[0];
            }
            return null;
        }

        return frame;
    }

    get duration() {
        return this.#demuxer.duration;
    }
}
