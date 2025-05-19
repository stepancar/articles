const canvas1 = document.getElementById('canvas-1');
const canvas2 = document.getElementById('canvas-2');
const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const image = new Image();
const addImageButton = document.querySelector('#image-process');
const resultTable = document.querySelector('.result-table');
let selectSmoothingQuality = document.querySelector('select').value;
let rangeFrom;
let rangeTo;
let iterationsCount;

const setSizeOfTheCanvas = () => {
    let width = document.querySelector('#canvas-width').value;
    let height = document.querySelector('#canvas-height').value;
    canvas1.width = width;
    canvas1.height = height;
    canvas2.width = width;
    canvas2.height = height;
};

const setIterationsCount = () => {
    iterationsCount = document.querySelector('#iterations-cnt').value;
};

const getFileNameFromURL = (url) => {
    return url.split('/').pop();
};

const getImageUrl = () => {
    return document.querySelector('#pic-url').value;
};

const setScaleRange = () => {
    rangeFrom = document.querySelector('#range-from').value;
    rangeTo = document.querySelector('#range-to').value;
    if (rangeFrom > rangeTo) {
        a = rangeTo;
        rangeTo = rangeFrom;
        rangeFrom = a;
    }
};

function loadImage(url) {
    image.src = url;
}

const setSmoothingQuality = () => {
    selectSmoothingQuality = document.querySelector('#smoothing-quality').value;
    ctx1.imageSmoothingQuality = selectSmoothingQuality;
    ctx2.imageSmoothingQuality = selectSmoothingQuality;
};

function takeMeasurements() {
    let imageUrl = getImageUrl();
    let imageName = getFileNameFromURL(imageUrl);
    loadImage(imageUrl);

    image.onload = () => {
        console.log('Image uploaded');
        setSmoothingQuality();
        setIterationsCount();
        setScaleRange();
        setSizeOfTheCanvas();

        let drawImageWithScaleTime = drawImageWithScale();
        let drawImageWithoutScaleTime = drawImageWithoutScale();
        addNewMeasurements(
            drawImageWithoutScaleTime,
            drawImageWithScaleTime,
            imageName
        );
    };
    image.onerror = () => {
        console.error('Image cannot be uploaded');
    };
}

takeMeasurements();

addImageButton.addEventListener('click', takeMeasurements);

function drawImageWithoutScale() {
    const start = performance.now();
    for (let i = 0; i < iterationsCount; i++) {
        let x = Math.random() * canvas1.width;
        let y = Math.random() * canvas1.height;
        ctx2.drawImage(image, x, y);
    }
    const end = performance.now();
    let time = end - start;
    return time;
}

function drawImageWithScale() {
    const start = performance.now();
    for (let i = 0; i < iterationsCount; i++) {
        let x = Math.random() * canvas1.width;
        let y = Math.random() * canvas1.height;
        let scaleParameter = Math.random() * (rangeTo - rangeFrom) + rangeFrom;
        ctx1.resetTransform();
        ctx1.scale(scaleParameter, scaleParameter);
        ctx1.drawImage(image, x, y);
    }
    const end = performance.now();
    let time = end - start;
    return time;
}

let cnt = 1;
function addNewMeasurements(
    drawImageWithoutScaleTime,
    drawImageWithScaleTime,
    filename
) {
    let newRow = resultTable.insertRow();

    let cell0 = newRow.insertCell();
    let cell1 = newRow.insertCell();
    let cell2 = newRow.insertCell();
    let cell3 = newRow.insertCell();
    let cell4 = newRow.insertCell();
    let cell5 = newRow.insertCell();
    let cell6 = newRow.insertCell();
    let cell7 = newRow.insertCell();
    let cell8 = newRow.insertCell();

    cell0.innerHTML = cnt++;
    cell1.innerHTML = filename;
    cell2.innerHTML = image.width + 'x' + image.height;
    cell3.innerHTML = '[' + rangeFrom + ';' + rangeTo + ')';
    cell4.innerHTML = iterationsCount;
    cell5.innerHTML = canvas1.width + 'x' + canvas1.height;
    cell6.innerHTML = selectSmoothingQuality;
    cell7.innerHTML = drawImageWithoutScaleTime;
    cell8.innerHTML = drawImageWithScaleTime;
}
