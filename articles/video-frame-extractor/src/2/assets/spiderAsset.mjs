import { BaseAsset } from './baseAsset.mjs';
import { drawSpider } from '../../graphics.mjs'

export class SpiderAsset extends BaseAsset {
    constructor({ ...settings }) {
        super(settings);
        
    }

    draw(ctx) {
        const animationDuration = 2000;
        const y = this.position.y + 100 * Math.sin(this.currentTime % animationDuration / animationDuration * 2 * Math.PI);
        const scale = 0.8 + 0.2 * Math.sin(this.currentTime % animationDuration / animationDuration * 2 * Math.PI);
        drawSpider(ctx, this.position.x, y, this.currentTime % animationDuration / animationDuration, scale);
    }
}