export class Scene {
    assets = [];

    play() {
        this.assets.forEach(asset => asset.play());
    }

    async seek(time) {
        return Promise.all(this.assets.map(asset => asset.seek(time)));
    }

    draw(ctx) {
        this.assets.forEach(asset => asset.draw(ctx));
    }

    async waitWhenResourceReady() {
        return Promise.all(this.assets.map(asset => asset.waitWhenResourceReady()));
    }
}
