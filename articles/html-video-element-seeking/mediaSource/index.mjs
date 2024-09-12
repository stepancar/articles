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

    document.querySelector('.results').innerText = '';

    const showPreview = document.querySelector('[name=showPreview]').checked;
    const timestamps = document.querySelector('timestamps-selector').value;
    const runInParallel = document.querySelector('[name=runInParallel]').checked;
    const videoSourcesToCompare = document.querySelectorAll('video-source-selector');
    
    async function initializeVideoElement(mediaUrl) {
        const videoElement = document.createElement('video');
        
        return videoElement;
    }
        

    async function getSeekingPerformanceStatsForVideoSource(videoElement, timestamps, mediaUrl) {
        

        const globalStartTime = new Date().getTime();
        const result = await seekVideoSequentiallyToTimestamps(videoElement, timestamps);

        const averageFrameSeekTime = average(result);
        const totalSeekTime = new Date().getTime() - globalStartTime;
        return {
            mediaUrl,
            averageFrameSeekTime,
            totalSeekTime,
            framesCount: timestamps.length
        }
    }

    const videoElements = await Promise.all(Array.from(videoSourcesToCompare).map(async (videoSourceElement) => {
        const mediaUrl = videoSourceElement.value;
        const videoElement = document.createElement('video');
        const sourceElement = document.createElement('source');
        sourceElement.type = 'video/mp4;codecs="hev1.1.6.L120.90"';
        videoElement.appendChild(sourceElement);
        sourceElement.src = mediaUrl;

        await waitVideoIsLoaded(videoElement);

        // console.log(videoElement.canPlayType('video/mp4;codecs="hev1.1.6.L120.90"'));
        console.log('lol')
        return videoElement;
    }));


    let results = [];
    const startTime = performance.now();
    if (runInParallel) {
        results = await Promise.all(Array.from(videoElements).map(async (videoElement) => {
            if (showPreview) {
                previews.appendChild(videoElement);
            }
            return getSeekingPerformanceStatsForVideoSource(videoElement, timestamps, videoElement.src);
        }));
    } else {
        for (let i = 0; i < videoElements.length; i++) {
            const videoElement = videoElements[i];
            if (showPreview) {
                previews.appendChild(videoElement);
            }
            const result = await getSeekingPerformanceStatsForVideoSource(videoElement, timestamps, videoElement.src);
            results.push(result);
        }
    }
    
    this.innerText = 'Run tests';
    this.disabled = false;

    const totalTime = performance.now() - startTime;
    const totalFramesGenerated = timestamps.length * videoSourcesToCompare.length;
    const report = {
        totalFramesGenerated,
        totalTime,
        seekingTimePerFrame: totalTime / totalFramesGenerated,
        seekingFPS: 1000 / (totalTime / totalFramesGenerated),
        results,
    }

    document.querySelector('.results').innerText = JSON.stringify(report, null, 2);
};

document.querySelector('#runTests').addEventListener('click', test);
