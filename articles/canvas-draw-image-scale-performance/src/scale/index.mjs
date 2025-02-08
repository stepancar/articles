const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image1 = new Image();
const image2 = new Image();
image1.src = 'Lenna_512x512.png';
image2.src = 'Lenna_256x256.png';

class Test_Image {
    constructor(name, image512, image256) {
        this.name = name;
        this.image512 = image512;
        this.image256 = image256;
    }
}

const lenna = new Test_Image('Lenna', image1, image2);
document.querySelector('#image-name').innerHTML = lenna.name;

image1.onload = () => {
    const start = performance.now();
    for (let i = 0; i < 1000; i++) {
        ctx.drawImage(lenna.image512, 0, 0, 512, 512, 0, 0, 1000, 1000);
    }
    const end = performance.now();

    document.querySelector('#size-512').innerHTML = end - start;
    console.log(`Drawing 1000 images took ${end - start}ms`);
};

image2.onload = () => {
    const start = performance.now();
    for (let i = 0; i < 1000; i++) {
        ctx.drawImage(lenna.image256, 0, 0, 256, 256, 0, 0, 1000, 1000);
    }
    const end = performance.now();

    document.querySelector('#size-256').innerHTML = end - start;
    console.log(`Drawing 1000 images took ${end - start}ms`);
};