import { BaseAsset } from './baseAsset.mjs';

export class VideoAsset extends BaseAsset {
    constructor({ position, src, bounds }) {
        super();
        this.video = document.createElement('video');
        this.video.muted = true;
        this.video.loop = true;
        this.position = position;
        this.video.src = src;
        this.bounds = bounds;
    }


    draw(ctx) {
        ctx.drawImage(this.video, this.position.x, this.position.y, this.bounds.width, this.bounds.height);
    }

    async seek(time) {
        // await super.seek(time);
        // this.video.currentTime = (this.currentTime / 1000) % this.video.duration;
    }

    async waitWhenResourceReady() {
        return new Promise((resolve) => {
            this.video.addEventListener('canplay', () => {
                resolve();
            }, { once: true });
        });
    }

    play() {
        this.video.play();
    }
}