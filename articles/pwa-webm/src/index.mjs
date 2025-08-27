
import { FFmpeg } from '../externals/ffmpeg/package/dist/esm/index.js';
import { toBlobURL } from '../externals/util/package/dist/esm/index.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d', { alpha: true });
const video = document.querySelector('video');
console.log(ctx.getContextAttributes().alpha);

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

// const ffmpeg = new FFmpeg();

// async function initFFmpeg() {
//   const baseURL = '../externals/core/package/dist/esm';
//   const d = '../externals/core-mt/package/dist/esm'
  
//   await ffmpeg.load({
//     coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
//     wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
//     // workerURL: await toBlobURL(`${baseURL}/ffmpeg-core.worker.js`, 'text/javascript'),
//   });
  
//   console.log('FFmpeg loaded successfully');
//   document.getElementById('ffmpeg-status').textContent = 'FFmpeg Ready';
// }



document.addEventListener('DOMContentLoaded', () => {
  // initFFmpeg();
});


function extractImagesFromLottie(lottieData) {
  const images = [];
  
  lottieData.assets.forEach((asset) => {
    if (asset.p && asset.p.startsWith('data:image/png;base64,')) {
      const base64Data = asset.p.replace(/^data:image\/png;base64,/, '');
      const binaryString = atob(base64Data);
      const bytes = new Uint8Array(binaryString.length);
      
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      
      images.push(bytes);
    }
  });
  
  return images;
}

let _ffmpeg = null;
let loadingPromise = null;

async function getffmpeg() {
    if (_ffmpeg) {
      await loadingPromise;
      return _ffmpeg;
    };
    const ffmpeg = new FFmpeg();
    _ffmpeg = ffmpeg;

    const baseURL = '../externals/core/package/dist/esm';
    
    loadingPromise = ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
      // workerURL: await toBlobURL(`${baseURL}/ffmpeg-core.worker.js`, 'text/javascript'),
    });

    await loadingPromise;
    
  return ffmpeg;
}


async function convertToDoubleHeightVideo(lottieData, config) {
    const ffmpeg = await getffmpeg();

    const images = extractImagesFromLottie(lottieData);
    if (images.length === 0) {
      throw new Error('No images found in Lottie data');
    }

    for (let i = 0; i < images.length; i++) {
      await ffmpeg.writeFile(`frame_${i}.png`, images[i]);
    }

    const framerate = config.framerate || 25;
    const codecParams = getCodecParams(config);
    const outputExt = getOutputExtension(config.codec);
    const outputFile = `output_${config.codec}_crf${config.crf}.${outputExt}`;

    const ffmpegArgs = [
      '-framerate', framerate.toString(),
      '-i', 'frame_%d.png',
      '-filter_complex', 
      '[0:v]format=rgba,split=2[top][alpha];[top]format=rgb24[top_rgb];[alpha]alphaextract,format=gray[alpha_gray];[top_rgb][alpha_gray]vstack=inputs=2[v]',
      '-map', '[v]',
      ...codecParams,
      outputFile
    ];

    await ffmpeg.exec(ffmpegArgs);

    const videoData = await ffmpeg.readFile(outputFile);
    
    for (let i = 0; i < images.length; i++) {
      await ffmpeg.deleteFile(`frame_${i}.png`);
    }
    await ffmpeg.deleteFile(outputFile);

    return videoData instanceof Uint8Array ? videoData : new Uint8Array(videoData);
}


function getCodecParams(config) {
  const { codec, crf } = config;
  
  switch (codec) {
    case 'libx264':
      return ['-c:v', 'libx264', '-crf', crf.toString(), '-preset', 'medium', '-pix_fmt', 'yuv420p'];
    case 'libvpx-vp9':
      return ['-c:v', 'libvpx-vp9', '-crf', crf.toString(), '-speed', '0', '-auto-alt-ref', '1', '-lag-in-frames', '25', '-aq-mode', '0', '-pix_fmt', 'yuv420p'];
    case 'libx265':
      return ['-c:v', 'libx265', '-crf', crf.toString(), '-preset', 'medium', '-pix_fmt', 'yuv420p'];
    case 'libaom-av1':
      return ['-c:v', 'libaom-av1', '-crf', crf.toString(), '-cpu-used', '4', '-pix_fmt', 'yuv420p'];
    default:
      throw new Error(`Unsupported codec: ${codec}`);
  }
}

function getOutputExtension(codec) {
  switch (codec) {
    case 'libx264':
    case 'libx265':
      return 'mp4';
    case 'libvpx-vp9':
      return 'webm';
    case 'libaom-av1':
      return 'webm';
    default:
      return 'mp4';
  }
}

const lottieData = await fetch('Sunglasses_420x420_25fps.json').then(res => res.json());
const ddd = await convertToDoubleHeightVideo(lottieData, { codec: 'libvpx-vp9', crf: 30, framerate: 25 });