import { activateCustomControls } from '../controls.mjs';
import { seek, average, range, fetchBuffer, waitVideoIsLoaded, seekVideoSequentiallyToTimestamps } from '../utils.mjs';

activateCustomControls();

async function test() {
    this.disabled = true;
    this.innerText = 'Running...';
    

    const mediaUrl = document.querySelector('video-source-selector').value;
    const videoElement = document.createElement('video');

    document.body.appendChild(videoElement);

    const timestamps = document.querySelector('timestamps-selector').value;
    
    videoElement.src = mediaUrl;
    await waitVideoIsLoaded(videoElement);
    // await attachMediaSource(videoElement, mediaUrl);

    const globalStartTime = new Date().getTime();
    const result = await seekVideoSequentiallyToTimestamps(videoElement, timestamps);
    
    this.innerText = 'Run tests';
    this.disabled = false;

    const averageFrameSeekTime = average(result);
    const totalSeekTime = new Date().getTime() - globalStartTime;
    const results = {
        averageFrameSeekTime,
        totalSeekTime,
    }
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
