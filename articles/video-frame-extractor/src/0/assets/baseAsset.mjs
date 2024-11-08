export class BaseAsset {
    position = { x: 0, y: 0 };
    bounds = { width: 0, height: 0 };
    currentTime = 0;

    constructor(settings) {
        if (settings.position) {
            this.position = settings.position;
        }
        if (settings.bounds) {
            this.bounds = settings.bounds;
        }
    }
    seek(time) {
        this.currentTime = time;
    }

    draw(ctx) {}

    play() {}

    async waitWhenResourceReady() {
        return true;
    }
}