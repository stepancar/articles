import { BaseAsset } from './baseAsset.mjs';

export class VideoAsset extends BaseAsset {
    constructor({ src, ...settings }) {
        super(settings);
        this.video = document.createElement('video');
        this.video.muted = true;
        this.video.loop = true;
        this.video.src = src;
    }

    draw(ctx) {
        ctx.drawImage(this.video, this.position.x, this.position.y, this.bounds.width, this.bounds.height);
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
