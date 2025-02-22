const canvas_1 = document.getElementById('canvas-1');
canvas_1.width = 1920;
canvas_1.height = 1080;
const canvas_2 = document.getElementById('canvas-2');
canvas_2.width = 1920;
canvas_2.height = 1080;
const ctx_1 = canvas_1.getContext('2d');
const ctx_2 = canvas_2.getContext('2d');
const image = new Image();
image.src = 'Lenna_512x512.png';
const addImageButton = document.querySelector('#imageProcess');
const clearCanvasButton = document.querySelector('#clearCanvas');
const ResultTable = document.querySelector('.ResultTable');

const loadImage = () => {
    imageUrl = document.querySelector('#pic_url').value;
    image.src = imageUrl;
}

const clearCanas = () => {
    ctx_1.reset();
    ctx_2.reset();
}

addImageButton.addEventListener('click', loadImage);
clearCanvasButton.addEventListener('click', clearCanas);

class Test_Image {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }
}

const lenna = new Test_Image('Lenna', image);

function draw_image_without_scale() {
    const start = performance.now();
    for (let i = 0; i < 10000; i++) {
        ctx_2.drawImage(lenna.image, 0, 0);
    }
    const end = performance.now();
    let time = end - start;
    console.log(`Drawing and scaling 1000 images took ${time}ms`);
    return time;
}

function draw_image_with_scale() {
    const start = performance.now();
    for (let i = 0; i < 10000; i++) {
        ctx_1.drawImage(lenna.image, 0, 0);
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

var cnt = 1;
function addNewMeasurements(drawImageWithScaleTime, drawImageWithoutScaleTime) {
    var newRow = ResultTable.insertRow();

    var cell0 = newRow.insertCell();
    var cell1 = newRow.insertCell();
    var cell2 = newRow.insertCell();

    var picIndex = document.createTextNode(cnt++);
    var withScaleTime = document.createTextNode(drawImageWithScaleTime);
    var withoutScaleTime = document.createTextNode(drawImageWithoutScaleTime);

    cell0.appendChild(picIndex);
    cell1.appendChild(withScaleTime);
    cell2.appendChild(withoutScaleTime);
}

// 1) ссылку на картинку (по умолчаню lena, к примеру) и есть список других подготовленных картинок 
// 2) размеры канваса
// 3) количество итераций
// и еще момент. Попробуйте рисовать картинку по рандомным координатам
// отображение резов в таблу
