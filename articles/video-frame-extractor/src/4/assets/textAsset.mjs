import { BaseAsset } from './baseAsset.mjs';

export class TextAsset extends BaseAsset {
    constructor({ text, ...settings }) {
        super(settings);
        this.text = text;
    }

    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.font = '30px Arial';
        ctx.fillText(this.text, this.position.x, this.position.y);
    }
}
