export class BaseAsset {
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
