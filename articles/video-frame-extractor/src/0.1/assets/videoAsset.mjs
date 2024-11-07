import { BaseAsset } from "./baseAsset.mjs";

export class VideoAsset extends BaseAsset {
    constructor({ src, ...settings }) {
        super(settings);
        this.video = document.createElement('video');
        this.video.src = src;
        this.video.muted = true;
        this.video.loop = true;
    }

    draw(ctx) {
        ctx.drawImage(this.video, this.position.x, this.position.y, this.bounds.width, this.bounds.height);
    }

    play() {
        this.video.play();
    }

    async waitWhenResourceReady() {
        if (this.video.readyState >= 3) {
            return;
        }
        return new Promise((resolve) => {
            this.video.addEventListener('canplay', () => {
                resolve();
            }, { once: true });
        });
    }
}