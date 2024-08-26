/* MP4 blob
average seek time 70.5079365079365
total seek time 9106
*/

async function seek(videElement, currentTime) {
    return new Promise((resolve) => {
        const listener = () => {
            videElement.removeEventListener('seeked', listener);
            resolve()
        }
        videElement.addEventListener('seeked', listener);
        videElement.currentTime = currentTime;
    });
}

async function waitVideoIsLoaded(videoElement) {
    return new Promise((resolve) => {
        const listener = () => {
            videoElement.removeEventListener('loadedmetadata', listener);
            resolve();
        }
        videoElement.addEventListener('loadedmetadata', listener);
    });
}


async function getMediaBlob(mediaUrl) {
    const response = await fetch(mediaUrl);
    const blob = await response.blob();
    return blob;
}


const seekForMe = async(prefix, times, filename) => {

    // const blob = await getMediaBlob(filename);
    // const mediaBlobUrl = window.URL.createObjectURL(blob);
    const video0 = document.createElement('video');
    // video0.src = mediaBlobUrl;
    // video0.load();
    await attachMediaSource(video0, filename);
    // await waitVideoIsLoaded(video0);
    
    const allDiffs = [];
    for (let i = 0; i < times.length; i++) {
        startTime = new Date().getTime();
        await seek(video0, times[i]);
        const endTime = new Date().getTime();
        const diffTime = endTime - startTime;
        allDiffs.push(diffTime);
    }

    console.log(allDiffs.length);
    return allDiffs;
};

const average = (array) => array.reduce((a, b) => a + b) / array.length;

function range(start, end, step = 1) {
    const len = Math.floor((end - start) / step) + 1;
    return Array(len).fill().map((_, idx) => start + (idx * step));
}


// parallel
const test_mp4 = async() => {
    const globalStartTime = new Date().getTime();
    const filename = 'https://nickdesaulniers.github.io/netfix/demo/frag_bunny.mp4';
    return Promise.all([
        seekForMe(0, range(0, 7, 33.4 / 1000), filename)])
        .then((result) => {
            console.log('- mp4 as blob');
            console.log('average seek time', average(result[0]));
            console.log('total seek time', new Date().getTime() - globalStartTime);
        });
};


test_mp4();




// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec


async function attachMediaSource(htmlVideoElement, mediaUrl) {
    const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

    if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
        var mediaSource = new MediaSource;
        //console.log(mediaSource.readyState); // closed
        htmlVideoElement.src = URL.createObjectURL(mediaSource);

        return new Promise((resolve) => {

            mediaSource.addEventListener('sourceopen', sourceOpen);
        

            async function sourceOpen (_) {
                var mediaSource = this;
                var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
                const buf = await fetchBuffer(mediaUrl);
                
                sourceBuffer.addEventListener('updateend', function (_) {
                    mediaSource.endOfStream();
                    resolve();
                });
                sourceBuffer.appendBuffer(buf);
            };
        })
        
    } else {
        console.error('Unsupported MIME type or codec: ', mimeCodec);
    }
}

async function fetchBuffer(url) {
    return fetch(url)
        .then(response => response.arrayBuffer())
};