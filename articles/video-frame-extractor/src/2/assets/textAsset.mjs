import { BaseAsset } from "./baseAsset.mjs";

export class TextAsset extends BaseAsset {
    constructor({ text, ...settings }) {
        super(settings);
        this.text = text;
    }

    draw(ctx) {
        const animationDuration = 3000;
        const fontSize = 80 + 5 * (this.currentTime * 5 % animationDuration) / animationDuration;
        ctx.fillStyle = "black";
        ctx.font = `${fontSize}px Arial`;
        const textMetrix = ctx.measureText(this.text);
        const x = this.position.x - textMetrix.width / 2;
        ctx.fillText(this.text, x, this.position.y);
    }
}
