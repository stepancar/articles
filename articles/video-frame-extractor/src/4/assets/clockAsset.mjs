import { drawClockFace, drawClockArrows } from '../../graphics.mjs';
import { BaseAsset } from './baseAsset.mjs';

export class ClockAsset extends BaseAsset {
    constructor({ position }) {
        super();
        this.position = position;
    }

    draw(ctx) {
        drawClockFace(ctx, 67, 'white', this.position);
        drawClockArrows(ctx, 50, 'blue', this.currentTime, this.position);
    }
}
