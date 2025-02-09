const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = new Image();
image.src = 'Lenna_512x512.png';

class Test_Image {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }
}

const lenna = new Test_Image('Lenna', image);
document.querySelector('#image-name').innerHTML = lenna.name;

function scale_image() {
    const start = performance.now();
    for (let i = 0; i < 1000; i++) {
        ctx.drawImage(lenna.image, 0, 0, 512, 512, 0, 0, 1000, 1000);
        ctx.scale(1, 10.1);
    }
    const end = performance.now();

    document.querySelector('#scale').innerHTML = end - start;
    console.log(`Scale 1000 images took ${end - start}ms`);
}

image.onload = () => {
    const start = performance.now();
    for (let i = 0; i < 1000; i++) {
        ctx.drawImage(lenna.image, 0, 0, 512, 512, 0, 0, 1000, 1000);
    }
    const end = performance.now();

    document.querySelector('#full-size').innerHTML = end - start;
    console.log(`Drawing 1000 images took ${end - start}ms`);
    scale_image();
};