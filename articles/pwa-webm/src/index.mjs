
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const video = document.querySelector('video');

function drawFrame() {
  if (video.readyState >= video.HAVE_CURRENT_DATA) {
    const width = video.videoWidth;
    const height = video.videoHeight;
    if (width && height && canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  }
  requestAnimationFrame(drawFrame);
}
drawFrame();
