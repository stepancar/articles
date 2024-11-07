export async function createImageResource(src) {
    const image = document.createElement('img');
    image.src = src;
    await image.decode();
    return image;
}

export async function createSourceBufferForVide(src) {
    const response = await fetch(src);
    const buffer = await response.arrayBuffer();
    // prepare for setting to html video element
    // create blob
    const blob = new Blob([buffer], { type: 'video/mp4' });
    return blob;
}


export async function record(stream, time) {
    const mediaRecorder = new MediaRecorder(stream);
    const chunks = [];
    mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
    };
    mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/mp4' });
        const url = URL.createObjectURL(blob);
        // open in new tab
        // window.open(url);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'video.mp4';
        a.click();
    };
    mediaRecorder.start();
    await new Promise((resolve) => setTimeout(resolve, time));
    mediaRecorder.stop();
}
