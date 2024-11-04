export class Scene {
    assets = [];

    play() {
        this.assets.forEach(asset => asset.play());
    }

    seek(time) {
        this.assets.forEach(asset => asset.seek(time));
    }

    draw(ctx) {
        this.assets.forEach(asset => asset.draw(ctx));
    }

    async waitWhenResourceReady() {
        return Promise.all(this.assets.map(asset => asset.waitWhenResourceReady()));
    }
}
