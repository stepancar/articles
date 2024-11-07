import { BaseAsset } from "./baseAsset.mjs";

export class ImageAsset extends BaseAsset {
    constructor({ src, ...settings }) {
        super(settings);
        this.image = document.createElement("img");
        this.image.src = src;
    }

    /**
     * 
     * @param {CanvasRenderingContext2D} ctx 
     */
    draw(ctx) {
        const bounds = this.bounds;
        const maxWidth = bounds.width;
        const maxHeight = bounds.height;
        // draw image with aspect ratio and inside the bounds
        const aspectRatio = this.image.width / this.image.height;
        const imageWidth = Math.min(maxWidth, aspectRatio * maxHeight);
        const imageHeight = Math.min(maxHeight, maxWidth / aspectRatio);
        const x = this.position.x - (imageWidth) / 2;
        const y = this.position.y - (imageHeight) / 2;
        ctx.drawImage(this.image, x, y, imageWidth, imageHeight);
    }

    async waitWhenResourceReady() {
        return this.image.decode();
    }
}