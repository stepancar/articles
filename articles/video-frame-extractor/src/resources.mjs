export async function createImageResource(src) {
    const image = document.createElement('img');
    image.src = src;
    await image.decode();
    return image;
}