export class BaseAsset {
    constructor(settings) {
        this.position = settings.position || { x: 0, y: 0 };
        this.bounds = settings.bounds || { width: 0, height: 0 };
    }
    currentTime = 0;
    play() {

    }

    async seek(time) {
        this.currentTime = time;
    }

    draw(ctx) {

    }

    async waitWhenResourceReady() {
        return true;
    }
}
