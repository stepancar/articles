import { BaseAsset } from './baseAsset.mjs';

export class TextAsset extends BaseAsset {
    constructor({ text, ...settings }) {
        super(settings);
        this.text = text;
    }

    draw(ctx) {
        const animationDuration = 3000;
        const fontSize = 10 + 5 * (this.currentTime % animationDuration);
        ctx.fillStyle = 'white';
        ctx.font = `${fontSize}px Arial`;
        ctx.fillText(this.text, this.position.x, this.position.y);
    }

    
}
