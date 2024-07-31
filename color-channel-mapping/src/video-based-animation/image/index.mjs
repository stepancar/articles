const image = document.getElementById('image');

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

image.decode().then(() => {
    ctx.drawImage(image, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    debugger;
});



