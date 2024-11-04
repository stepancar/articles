import { BaseAsset } from './baseAsset.mjs';

export class TextAsset extends BaseAsset {
    constructor({ text, position }) {
        super();
        this.text = text;
        this.position = position;
    }

    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.font = '30px Arial';
        ctx.fillText(this.text, this.position.x, this.position.y);
    }
}
