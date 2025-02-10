const canvas_1 = document.getElementById('canvas-1');
const canvas_2 = document.getElementById('canvas-2');
const ctx_1 = canvas_1.getContext('2d');
const ctx_2 = canvas_2.getContext('2d');
const image = new Image();
image.src = 'SIPI_Jelly_Beans_256x256.jpg';

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
    for (let i = 0; i < 10000; i++) {
        ctx_2.drawImage(lenna.image, 0, 0, 256, 256, 0, 0, 256, 256);
        ctx_2.scale(2, 2);
    }
    const end = performance.now();

    document.querySelector('#scale').innerHTML = end - start;
    console.log(`Drawing and scaling 1000 images took ${end - start}ms`);
}

function draw_image() {
    const start = performance.now();
    for (let i = 0; i < 10000; i++) {
        ctx_1.drawImage(lenna.image, 0, 0, 256, 256, 0, 0, 256, 256);
        // ctx_1.scale(2, 2);
    }
    const end = performance.now();

    document.querySelector('#full-size').innerHTML = end - start;
    console.log(`Drawing 1000 images took ${end - start}ms`);
    scale_image();
}

image.onload = () => {
    draw_image();
};