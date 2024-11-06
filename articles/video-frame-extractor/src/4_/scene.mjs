export class Scene {
    assets = [];

    currentTime = 0;

    animationFrameRequestId = null;

    constructor(ctx) {
        this.ctx = ctx;
    }

    play() {
        this.assets.forEach((asset) => asset.play());
    
        const startTime = this.currentTime;

        const drawFrame = (timestamp) => {
            const elapsed = timestamp - startTime;
            this.currentTime = startTime + elapsed;
            this.assets.forEach(
                (asset) => (asset.currentTime = this.currentTime)
            );
            this.assets.forEach((asset) => asset.draw(this.ctx));
            this.animationFrameRequestId = requestAnimationFrame(drawFrame);
        };
    }

    stop() {
        cancelAnimationFrame(this.animationFrameRequestId);
    }

    draw(ctx) {
        this.assets.forEach((asset) => asset.draw(ctx));
    }

    async seek(time) {
        this.currentTime = time;
        return Promise.all(
            this.assets.map((asset) => asset.seek(time))
        );
    }

    async waitWhenResourceReady() {
        return Promise.all(
            this.assets.map((asset) => asset.waitWhenResourceReady())
        );
    }
}
