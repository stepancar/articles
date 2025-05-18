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
    const preloadToBlobStorage = document.querySelector('[name=preloadToBlobStorage]').checked;
    const videoSourcesToCompare = document.querySelectorAll('video-source-selector');
        
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

    async function getBlobStorageUrl(src) {
        const buffer = await fetchBuffer(src);
        const blob = new Blob([buffer], { type: 'video/mp4' });
        const url = URL.createObjectURL(blob);
        return url;
    }

    const videoElements = await Promise.all(Array.from(videoSourcesToCompare).map(async (videoSourceElement) => {
        const mediaUrl = videoSourceElement.value;
        const videoElement = document.createElement('video');
        videoElement.src = preloadToBlobStorage ? await getBlobStorageUrl(mediaUrl) : mediaUrl;

        await waitVideoIsLoaded(videoElement);
        return [videoElement, mediaUrl];
    }));


    let results = [];
    const startTime = performance.now();
    if (runInParallel) {
        results = await Promise.all(Array.from(videoElements).map(async ([videoElement, mediaUrl]) => {
            if (showPreview) {
                previews.appendChild(videoElement);
            }
            return getSeekingPerformanceStatsForVideoSource(videoElement, timestamps, mediaUrl);
        }));
    } else {
        for (let i = 0; i < videoElements.length; i++) {
            const [videoElement, mediaUrl] = videoElements[i];
            if (showPreview) {
                previews.appendChild(videoElement);
            }
            const result = await getSeekingPerformanceStatsForVideoSource(videoElement, timestamps, mediaUrl);
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
    }
   
    const resultTable = document.createElement('table');
    resultTable.innerHTML = `
        <thead>
            <tr>
                <th>Media</th>
                <th>Average Frame Seek Time (ms)</th>
                <th>Total Seek Time (ms)</th>
                <th>Frames Count</th>
            </tr>
        </thead>
        <tbody>
            ${results.map(result => `
                <tr>
                    <td>
                       <a href="${result.mediaUrl}">${getFileNameFromUrl(result.mediaUrl)}</a>
                    </td>
                    <td>${result.averageFrameSeekTime}</td>
                    <td>${result.totalSeekTime}</td>
                    <td>${result.framesCount}</td>
                </tr>`).join('')}
        </tbody>
    `;

    document.querySelector('.results').appendChild(resultTable);
};

function getFileNameFromUrl(url) {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 1];
}

document.querySelector('#runTests').addEventListener('click', test);
