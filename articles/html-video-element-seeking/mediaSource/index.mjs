import { activateCustomControls } from '../controls.mjs';
import { seek, average, range, fetchBuffer, waitVideoIsLoaded, seekVideoSequentiallyToTimestamps } from '../utils.mjs';

activateCustomControls();

document.querySelector('#addSource').addEventListener('click', () => {
    document.querySelector('.sources').appendChild(document.createElement('video-source-selector'));
});

async function test() {
    this.disabled = true;
    this.innerText = 'Running...';
    
    const previews = document.querySelector('.previews');
    previews.innerHTML = '';

    const showPreview = document.querySelector('[name=showPreview]').checked;
    const timestamps = document.querySelector('timestamps-selector').value;
    const runInParallel = document.querySelector('[name=runInParallel]').checked;
    const videoSourcesToCompare = document.querySelectorAll('video-source-selector');
    

    async function getSeekingPerformanceStatsForVideoSource(videoSourceElement, timestamps, showPreview) {
        const mediaUrl = videoSourceElement.value;
        const videoElement = document.createElement('video');

        if (showPreview) {
            previews.appendChild(videoElement);
        }

        videoElement.src = mediaUrl;

        await waitVideoIsLoaded(videoElement);

        const globalStartTime = new Date().getTime();
        const result = await seekVideoSequentiallyToTimestamps(videoElement, timestamps);

        const averageFrameSeekTime = average(result);
        const totalSeekTime = new Date().getTime() - globalStartTime;
        return {
            mediaUrl: mediaUrl,
            averageFrameSeekTime,
            totalSeekTime,
            framesCount: timestamps.length
        }
    }

    // if in parallel
    let results = [];
    if (runInParallel) {
        results = await Promise.all(Array.from(videoSourcesToCompare).map(async (videoSourceElement) => {
            return getSeekingPerformanceStatsForVideoSource(videoSourceElement, timestamps, showPreview);
        }));
    } else {
        for (let i = 0; i < videoSourcesToCompare.length; i++) {
            const videoSourceElement = videoSourcesToCompare[i];
            const result = await getSeekingPerformanceStatsForVideoSource(videoSourceElement, timestamps, showPreview);
            results.push(result);
        }
    }
    
    this.innerText = 'Run tests';
    this.disabled = false;

    console.log(results);
};


document.querySelector('#runTests').addEventListener('click', test);


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
