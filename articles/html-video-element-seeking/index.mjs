const seekForMe = async(prefix, times, filename) => {
    return new Promise((resolve) => {
        // console.log('seekForMe', prefix);
        let seekIndex = 0;
        let startTime = 0;
        let endTime = 0;
        const lastTime = times[times.length - 1];
        const allDiffs = [];
        const video0 = document.createElement('video');
        const videoUrl = `${filename}#t=${startTime},${lastTime}`;
        
        video0.src = videoUrl;
        console.log(video0.src);
        video0.onloadedmetadata = () => {
            console.log(prefix, 'onloadedmetadata');
            video0.currentTime = times[0];
            startTime = new Date().getTime();
        };
        video0.addEventListener('seeked', () => {
            console.log('seeked');
        });
        video0.onseeked = () => {
            endTime = new Date().getTime();
            var diffTime = endTime - startTime;
            allDiffs.push(diffTime);
            // console.log(`${prefix} seek done at ${new Date().getTime()} for ${seekIndex} at time ${video0.currentTime} diff ${diffTime}`);
            seekIndex++;
            if (seekIndex < times.length) {
                video0.currentTime = (times[seekIndex]);
                startTime = new Date().getTime();
            }
            else {
                // console.log(prefix, 'done');
                resolve(allDiffs);
            }
        };
        video0.onwaiting = () => {
            console.log('waiting..');
        };
        video0.onseeking = () => {
            // console.log(`${prefix} seek start at ${startTime} for ${seekIndex} at time ${video0.currentTime}`);
        };
        video0.load();
    });
};

const average = (array) => array.reduce((a, b) => a + b) / array.length;

function range(start, end, step = 1) {
    const len = Math.floor((end - start) / step) + 1;
    return Array(len).fill().map((_, idx) => start + (idx * step));
}

const test_mp4 = async() => {
    const globalStartTime = new Date().getTime();
    const filename = 'https://nickdesaulniers.github.io/netfix/demo/frag_bunny.mp4';
    return Promise.all([
        seekForMe(0, range(0, 21, 33.4 / 1000), filename)])
        .then((result) => {
            console.log('- mp4');
            console.log('average seek time', average(result[0]));
            console.log('total seek time', new Date().getTime() - globalStartTime);
        });
};

test_mp4()
    .catch((e) => { console.error(e); });



// custom element which allows to upload video and create object url
class VideoUploader extends HTMLElement {
    constructor() {
        super();
        this.input = document.createElement('input');
        this.input.type = 'file';
        this.input.accept = 'video/*';
        this.input.onchange = async() => {
            const file = this.input.files[0];
            this.src = URL.createObjectURL(file);
            this.dispatchEvent(new Event('change'));
        };
        this.appendChild(this.input);
    }
}

customElements.define('video-uploader', VideoUploader);