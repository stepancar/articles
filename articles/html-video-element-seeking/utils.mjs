export function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

export async function seek(videElement, currentTime) {
    return new Promise((resolve) => {
        const listener = () => {
            videElement.removeEventListener('seeked', listener);
            resolve()
        }
        videElement.addEventListener('seeked', listener);
        videElement.currentTime = currentTime;
    });
}

export async function seekVideoSequentiallyToTimestamps(videoElement, timestamps) {

    const allDiffs = [];

    for (let i = 0; i < timestamps.length; i++) {
        const startTime = new Date().getTime();
        await seek(videoElement, timestamps[i]);
        const endTime = new Date().getTime();
        const diffTime = endTime - startTime;
        allDiffs.push(diffTime);
    }

    console.log(allDiffs.length);
    return allDiffs;
};

export async function waitVideoIsLoaded(videoElement) {
    return new Promise((resolve) => {
        if (videoElement.readyState >= 1) {
            resolve();
            return;
        }
        const listener = () => {
            videoElement.removeEventListener('loadedmetadata', listener);
            resolve();
        }
        videoElement.addEventListener('loadedmetadata', listener);
    });
}

export async function getMediaBlob(mediaUrl) {
    const response = await fetch(mediaUrl);
    const blob = await response.blob();
    return blob;
}

export async function fetchBuffer(url) {
    return fetch(url)
        .then(response => response.arrayBuffer())
};

export function range(start, end, step = 1) {
    const len = Math.floor((end - start) / step) + 1;
    return Array(len).fill().map((_, idx) => start + (idx * step));
}


// TODO
async function attachMediaSource(htmlVideoElement, mediaUrl) {
    const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

    if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
        var mediaSource = new MediaSource;
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
