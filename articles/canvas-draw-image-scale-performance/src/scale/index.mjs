const canvas_1 = document.getElementById('canvas-1');
canvas_1.width = 1920;
canvas_1.height = 1080;
const canvas_2 = document.getElementById('canvas-2');
canvas_2.width = 1920;
canvas_2.height = 1080;
const ctx_1 = canvas_1.getContext('2d');
const ctx_2 = canvas_2.getContext('2d');
const image = new Image();
image.src = 'https://upload.wikimedia.org/wikipedia/ru/thumb/2/24/Lenna.png/330px-Lenna.png';
const addImageButton = document.querySelector('#imageProcess');
const ResultTable = document.querySelector('.ResultTable');
let iterationsCount = 10000;

const setSizeOfTheCanvas = () => {
    let width = document.querySelector('#canvasWidth').value;
    let height = document.querySelector('#canvasHeight').value;
    console.log(width);
    console.log(height);
    canvas_1.width = width;
    canvas_1.height = height;
    canvas_2.width = width;
    canvas_2.height = height;
}

const setIterationsCount = () => { 
    iterationsCount = document.querySelector('#iterations_cnt').value;
}

const loadImage = () => {
    image.src = document.querySelector('#pic_url').value;
}

const takeMeasurements = () => {
    console.log("123");
    loadImage();
    setIterationsCount();
    setSizeOfTheCanvas();
}

addImageButton.addEventListener('click', takeMeasurements);

class Test_Image {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }
}

const lenna = new Test_Image('Lenna', image);

function draw_image_without_scale() {
    const start = performance.now();
    for (let i = 0; i < iterationsCount; i++) {
        let x = Math.random() * canvas_1.width;
        let y = Math.random() * canvas_1.height;
        ctx_2.drawImage(lenna.image, x, y);
    }
    const end = performance.now();
    let time = end - start;
    console.log(`Drawing and scaling 1000 images took ${time}ms`);
    return time;
}

function draw_image_with_scale() {
    const start = performance.now();
    for (let i = 0; i < iterationsCount; i++) {
        let x = Math.random() * 100;
        let y = Math.random() * 100;
        ctx_1.drawImage(lenna.image, x, y);
        ctx_1.scale(2, 2);
    }
    const end = performance.now();
    let time = end - start;
    console.log(`Drawing 1000 images took ${time}ms`);
    return time;
}

image.onload = () => {
    let drawImageWithScaleTime = draw_image_with_scale();
    let drawImageWithoutScaleTime = draw_image_without_scale();
    addNewMeasurements(drawImageWithScaleTime, drawImageWithoutScaleTime)
};

let cnt = 1;
function addNewMeasurements(drawImageWithScaleTime, drawImageWithoutScaleTime) {
    let newRow = ResultTable.insertRow();

    let cell0 = newRow.insertCell();
    let cell1 = newRow.insertCell();
    let cell2 = newRow.insertCell();
    let cell3 = newRow.insertCell();
    let cell4 = newRow.insertCell();
    
    cell0.innerHTML = cnt++;
    cell1.innerHTML = drawImageWithScaleTime;
    cell2.innerHTML = drawImageWithoutScaleTime;
    cell3.innerHTML = iterationsCount;
    cell4.innerHTML = canvas_1.width + "x" + canvas_1.height;
}
