import { drawClockFace, drawClockArrows } from "../../graphics.mjs";
import { BaseAsset } from "./baseAsset.mjs";

export class ClockAsset extends BaseAsset {
    draw(ctx) {
        drawClockFace(ctx, 70, "white", this.position);
        drawClockArrows(ctx, 50, "blue", this.currentTime, this.position);
    }
}
