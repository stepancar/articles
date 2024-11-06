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
