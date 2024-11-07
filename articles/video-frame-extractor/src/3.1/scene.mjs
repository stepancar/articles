export class Scene {
    assets = [];

    currentTime = 0;

    animationFrameRequestId = null;

    constructor(ctx) {
        this.ctx = ctx;
    }

    play() {
        this.assets.forEach((asset) => asset.play());
    
        let startTime = this.currentTime;

        const drawFrame = (timestamp) => {
            const elapsed = timestamp - this.currentTime;
            this.currentTime = this.currentTime + elapsed;
            this.assets.forEach(
                (asset) => (asset.currentTime = this.currentTime)
            );
            this.assets.forEach((asset) => asset.draw(this.ctx));
            this.animationFrameRequestId = requestAnimationFrame(drawFrame);
        };
        drawFrame(startTime);
    }

    stop() {
        cancelAnimationFrame(this.animationFrameRequestId);
    }

    draw() {
        this.assets.forEach((asset) => asset.draw(this.ctx));
    }

    async waitWhenResourceReady() {
        return Promise.all(
            this.assets.map((asset) => asset.waitWhenResourceReady())
        );
    }
}
