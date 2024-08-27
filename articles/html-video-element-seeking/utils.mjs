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
