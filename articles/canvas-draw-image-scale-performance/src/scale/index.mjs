const canvas1 = document.getElementById('canvas-1');
const canvas2 = document.getElementById('canvas-2');
const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const image = new Image();
const addImageButton = document.querySelector('#image-process');
const resultTable = document.querySelector('.result-table');
let selectSmoothingQuality = document.querySelector('select').value;
let iterationsCount = 10000;

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

const getImageUrl = () => {
    return document.querySelector('#pic-url').value;
};

function loadImage(url) {
    image.src = url;
    image.onload = () => {
        console.log('Image uploaded');
    };
    image.onerror = () => {
        console.error('Image can`t be uploaded');
    };
}

const setSmoothingQuality = () => {
    selectSmoothingQuality = document.querySelector('#smoothing-quality').value;
    ctx1.imageSmoothingQuality = selectSmoothingQuality;
    ctx2.imageSmoothingQuality = selectSmoothingQuality;
};

// добавить возможность менять коэф скейлинга
// проверить прозрачность канваса и прозрачность изображений (alpha)
// чекнуть параметр desynchronized влияет или нет
// willReadFrequently для переключения операция чтения на цпу режим добавить переключалку
function takeMeasurements() {
    let imageUrl = getImageUrl();
    loadImage(imageUrl);

    image.onload = () => {
        setSmoothingQuality();
        setIterationsCount();
        setSizeOfTheCanvas();

        let drawImageWithScaleTime = drawImageWithScale();
        let drawImageWithoutScaleTime = drawImageWithoutScale();
        addNewMeasurements(drawImageWithScaleTime, drawImageWithoutScaleTime);
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
        let scale = Math.random() * 0.2 + 0.9;
        ctx1.resetTransform();
        ctx1.scale(scale, scale);
        ctx1.drawImage(image, x, y);
    }
    const end = performance.now();
    let time = end - start;
    return time;
}

let cnt = 1;
function addNewMeasurements(drawImageWithScaleTime, drawImageWithoutScaleTime) {
    let newRow = resultTable.insertRow();

    let cell0 = newRow.insertCell();
    let cell1 = newRow.insertCell();
    let cell2 = newRow.insertCell();
    let cell3 = newRow.insertCell();
    let cell4 = newRow.insertCell();
    let cell5 = newRow.insertCell();
    let cell6 = newRow.insertCell();

    cell0.innerHTML = cnt++;
    cell1.innerHTML = drawImageWithScaleTime;
    cell2.innerHTML = drawImageWithoutScaleTime;
    cell3.innerHTML = iterationsCount;
    cell4.innerHTML = canvas1.width + 'x' + canvas1.height;
    cell5.innerHTML = selectSmoothingQuality;
    cell6.innerHTML = image.width + 'x' + image.height;
}
