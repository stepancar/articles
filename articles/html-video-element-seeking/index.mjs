const seekForMe = async(prefix, times, filename) => {
    return new Promise((resolve) => {
        // console.log('seekForMe', prefix);
        let seekIndex = 0;
        let startTime = 0;
        let endTime = 0;
        const lastTime = times[times.length - 1];
        const allDiffs = [];
        const video0 = document.createElement('video');
        const videoUrl = `https://storage.googleapis.com/lumen5-prod-video/${filename}#t=${startTime},${lastTime}`;
        
        const mediaSource = new MediaSource();
        video0.src = URL.createObjectURL(mediaSource);

        mediaSource.addEventListener('sourceopen', async () => {
            const sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.640028, mp4a.40.2"');
            
            try {
                const response = await fetch(videoUrl);
                const videoData = await response.arrayBuffer();

                // Append the video data to the SourceBuffer
                sourceBuffer.appendBuffer(videoData);
                
                sourceBuffer.addEventListener('updateend', () => {
                console.log('mediaSource readyState:', mediaSource.readyState);
                   // mediaSource.endOfStream();
                   mediaSource.setLiveSeekableRange(times[0], lastTime);
                    // videoElement.play(); // Auto-play after loading if desired
                    console.log("Video successfully loaded and attached.");
                    video0.currentTime = times[1];
                });
            } catch (error) {
                console.error("Error downloading or attaching the video:", error);
            }
        });
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
    const filename = 'video-seek-test.mp4';
    return Promise.all([
        seekForMe(0, range(0, 5, 0.04), filename)])
        .then((result) => {
            console.log('- mp4');
            console.log('average seek time', average(result[0]));
            console.log('total seek time', new Date().getTime() - globalStartTime);
        });
};

const test_mp4Optimized = async() => {
    const globalStartTime = new Date().getTime();
    const filename = 'video-seek-test-optimized.mp4';
    return Promise.all([
        seekForMe(0, range(0, 5, 0.04), filename)])
        .then((result) => {
            console.log('- mp4 optimized');
            console.log('average seek time', average(result[0]));
            console.log('total seek time', new Date().getTime() - globalStartTime);
        });
};

const test_webm = async() => {
    const globalStartTime = new Date().getTime();
    const filename = 'video-seek-test3.webm';
    return Promise.all([
        seekForMe(0, range(0, 5, 0.04), filename)])
        .then((result) => {
            console.log('- webm');
            console.log('average seek time', average(result[0]));
            console.log('total seek time', new Date().getTime() - globalStartTime);
        });
};

const test_webmOptimized = async() => {
    const globalStartTime = new Date().getTime();
    const filename = 'video-seek-test3-optimized.webm';
    return Promise.all([
        seekForMe(0, range(0, 5, 0.04), filename)])
        .then((result) => {
            console.log('- webm optimized');
            console.log('average seek time', average(result[0]));
            console.log('total seek time', new Date().getTime() - globalStartTime);
        });
};

test_mp4()
    .then(() => test_mp4Optimized())
    // .then(() => test_webm())
    // .then(() => test_webmOptimized())
    .catch((e) => { console.error(e); });