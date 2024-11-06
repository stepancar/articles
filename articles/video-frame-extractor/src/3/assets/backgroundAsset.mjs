import { BaseAsset } from "./baseAsset.mjs";

export class BackgroundAsset extends BaseAsset {
    constructor({ src, ...settings }) {
        super(settings);
        this.image = document.createElement("img");
        this.image.src = src;
    }

    draw(ctx) {
        ctx.drawImage(this.image, 0, 0);
    }

    async waitWhenResourceReady() {
        return this.image.decode();
    }
}
