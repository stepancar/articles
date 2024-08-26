/* MP4 blob
average seek time 70.5079365079365
total seek time 9106
*/


const seekForMe = async(prefix, times, filename) => {
    return new Promise((resolve) => {
        // console.log('seekForMe', prefix);
        let seekIndex = 0;
        let startTime = 0;
        let endTime = 0;
        const allDiffs = [];
        const video0 = document.createElement('video');
        fetch(filename)
            .then(resp => resp.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                video0.src = url;
                video0.load();
            })
            .catch((e) => { console.error(e); });
        video0.onloadedmetadata = () => {
            // console.log(prefix, 'onloadedmetadata');
            video0.currentTime = times[0];
            startTime = new Date().getTime();
        };
        video0.onseeked = () => {
            endTime = new Date().getTime();
            const diffTime = endTime - startTime;
            allDiffs.push(diffTime);
            // console.log(`${prefix} seek done at ${new Date().getTime()} for ${seekIndex} at time ${video0.currentTime} diff ${diffTime}`);
            seekIndex++;
            if (seekIndex < times.length) {
                video0.currentTime = times[seekIndex];
                startTime = new Date().getTime();
            }
            else {
                // console.log(prefix, 'done');
                resolve(allDiffs);
            }
        };
        video0.load();
    });
};

const average = (array) => array.reduce((a, b) => a + b) / array.length;

function range(start, end, step = 1) {
    const len = Math.floor((end - start) / step) + 1;
    return Array(len).fill().map((_, idx) => start + (idx * step));
}


// parallel
const test_mp4 = async() => {
    const globalStartTime = new Date().getTime();
    const filename = 'https://storage.googleapis.com/lumen5-prod-video/video-seek-test.mp4';
    return Promise.all([
        seekForMe(0, range(0, 5, 0.04), filename)])
        .then((result) => {
            console.log('- mp4 as blob');
            console.log('average seek time', average(result[0]));
            console.log('total seek time', new Date().getTime() - globalStartTime);
        });
};


test_mp4();