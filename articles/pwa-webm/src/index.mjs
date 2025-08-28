
import { FFmpeg } from '../externals/ffmpeg/package/dist/esm/index.js';
import { toBlobURL } from '../externals/util/package/dist/esm/index.js';
import {
  setupGLContext,
  setPremultipliedAlpha,
  drawVideo
} from 'https://cdn.jsdelivr.net/npm/stacked-alpha-video@1.0.10/build/gl-helpers.js';
// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d', { alpha: true });
// const video = document.querySelector('video');
// console.log(ctx.getContextAttributes().alpha);

// function drawFrame() {
//   if (video.readyState >= video.HAVE_CURRENT_DATA) {
//     const width = video.videoWidth;
//     const height = video.videoHeight;
//     if (width && height && canvas.width !== width || canvas.height !== height) {
//       canvas.width = width;
//       canvas.height = height;
//     }
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
//   }
//   requestAnimationFrame(drawFrame);
// }
// drawFrame();

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
  const MAX_SIZE = 50 * 1024 * 1024; // 50MB limit per image
  
  lottieData.assets.forEach((asset) => {
    if (asset.p && asset.p.startsWith('data:image/png;base64,')) {
      const base64Data = asset.p.replace(/^data:image\/png;base64,/, '');
      
      // Check base64 size before processing
      if (base64Data.length * 0.75 > MAX_SIZE) {
        console.warn(`Skipping oversized image asset: ${base64Data.length * 0.75} bytes`);
        return;
      }
      
      try {
        const binaryString = atob(base64Data);
        const bytes = new Uint8Array(binaryString.length);
        
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        
        images.push(bytes);
      } catch (error) {
        console.error('Failed to decode base64 image:', error);
      }
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

    console.log(`Processing ${images.length} images`);
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

    console.log('FFmpeg command:', ffmpegArgs.join(' '));
    
    try {
      await ffmpeg.exec(ffmpegArgs);
    } catch (error) {
      console.error('FFmpeg execution failed:', error);
      throw error;
    }

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

async function generate2xHeightVideo(lottieData, config) {
  const videoData = await convertToDoubleHeightVideo(lottieData, config);
  const videoSizeKB = (videoData.length / 1024).toFixed(2);

  const outputExt = getOutputExtension(config.codec);
  const mimeType = outputExt === 'webm' ? 'video/webm' : 'video/mp4';
  const videoBlob = new Blob([videoData], { type: mimeType });
  const videoUrl = URL.createObjectURL(videoBlob);

  const container = document.createElement('div');
  container.className = 'video-container';

  const title = document.createElement('h3');
  title.textContent = '2x Height Video Generator';
  container.appendChild(title);

  const generatedVideo = document.createElement('video');
  generatedVideo.src = videoUrl;
  generatedVideo.controls = true;
  generatedVideo.autoplay = true;
  generatedVideo.loop = true;
  generatedVideo.muted = true;
  generatedVideo.className = 'video-element';
  container.appendChild(generatedVideo);

  const canvas = document.createElement('canvas');
  canvas.className = 'canvas-element';
  container.appendChild(canvas);

  const infoDiv = document.createElement('div');
  infoDiv.className = 'video-info';
  infoDiv.innerHTML = `
    <strong>Video Info:</strong><br>
    Size: ${videoSizeKB} KB<br>
    Codec: ${config.codec}<br>
    CRF: ${config.crf}<br>
    Framerate: ${config.framerate} fps<br>
    Format: ${outputExt.toUpperCase()}
  `;
  container.appendChild(infoDiv);

  const downloadBtn = document.createElement('button');
  downloadBtn.textContent = 'Download Video';
  downloadBtn.className = 'download-btn';
  downloadBtn.onclick = () => {
    const a = document.createElement('a');
    a.href = videoUrl;
    a.download = `lottie_2x_${config.codec}_crf${config.crf}.${outputExt}`;
    a.click();
  };
  container.appendChild(downloadBtn);

  return {
    container,
    video: generatedVideo,
    canvas
  };
}

const defaultConfigs = [
  { codec: 'libx264', crf: 23, framerate: 25 },
  { codec: 'libx264', crf: 30, framerate: 25 },
  { codec: 'libx264', crf: 35, framerate: 25 }
];

let allVideos = [];

function syncAllVideos() {
  allVideos.forEach(video => {
    video.pause();
    video.currentTime = 0;
  });
  
  setTimeout(() => {
    allVideos.forEach(video => {
      video.play().catch(e => console.log('Play failed:', e));
    });
  }, 100);
}

const controlsDiv = document.createElement('div');
controlsDiv.className = 'video-controls';

const title = document.createElement('h2');
title.textContent = 'Generate 2x crossbrowser transparent videos from raster Lottie JSON';
controlsDiv.appendChild(title);

// File upload area
const fileUploadArea = document.createElement('div');
fileUploadArea.className = 'file-upload-area';
fileUploadArea.innerHTML = `
  <div class="upload-icon">📁</div>
  <div class="upload-text">Drop Raster Lottie JSON file here</div>
  <div class="upload-subtext">or click to select file</div>
`;

const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = '.json';
fileInput.className = 'file-input';

const currentFileDiv = document.createElement('div');
currentFileDiv.className = 'current-file';
currentFileDiv.style.display = 'none';

let selectedLottieData = null;

function handleFile(file) {
  if (!file.name.endsWith('.json')) {
    alert('Please select a JSON file');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      selectedLottieData = JSON.parse(e.target.result);
      currentFileDiv.innerHTML = `<span class="file-name">📄 ${file.name}</span> (${(file.size / 1024).toFixed(1)} KB)`;
      currentFileDiv.style.display = 'block';
      generateBtn.disabled = false;
    } catch (error) {
      alert('Invalid JSON file');
      selectedLottieData = null;
      currentFileDiv.style.display = 'none';
      generateBtn.disabled = true;
    }
  };
  reader.readAsText(file);
}

fileUploadArea.onclick = () => fileInput.click();

fileUploadArea.ondragover = (e) => {
  e.preventDefault();
  fileUploadArea.classList.add('drag-over');
};

fileUploadArea.ondragleave = () => {
  fileUploadArea.classList.remove('drag-over');
};

fileUploadArea.ondrop = (e) => {
  e.preventDefault();
  fileUploadArea.classList.remove('drag-over');
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    handleFile(files[0]);
  }
};

fileInput.onchange = (e) => {
  if (e.target.files.length > 0) {
    handleFile(e.target.files[0]);
  }
};

controlsDiv.appendChild(fileUploadArea);
controlsDiv.appendChild(fileInput);
controlsDiv.appendChild(currentFileDiv);

const label = document.createElement('label');
label.textContent = 'Configurations (JSON Array):';
label.className = 'config-label';
controlsDiv.appendChild(label);

const configTextarea = document.createElement('textarea');
configTextarea.className = 'config-textarea';
configTextarea.value = JSON.stringify(defaultConfigs, null, 2);
controlsDiv.appendChild(configTextarea);

const generateBtn = document.createElement('button');
generateBtn.textContent = 'Generate All Videos';
generateBtn.className = 'generate-btn';
generateBtn.disabled = true;
controlsDiv.appendChild(generateBtn);

const statusDiv = document.createElement('div');
statusDiv.className = 'status-div';
controlsDiv.appendChild(statusDiv);

const resultsContainer = document.createElement('div');
resultsContainer.className = 'results-container';

document.body.appendChild(controlsDiv);
document.body.appendChild(resultsContainer);

generateBtn.onclick = async () => {
  try {
    if (!selectedLottieData) {
      alert('Please select a Lottie JSON file first');
      return;
    }

    const configs = JSON.parse(configTextarea.value);
    if (!Array.isArray(configs)) {
      throw new Error('Configuration must be an array');
    }

    generateBtn.disabled = true;
    generateBtn.textContent = 'Generating...';
    statusDiv.style.display = 'block';
    statusDiv.innerHTML = '<strong>Status:</strong> Using uploaded Lottie data...';
    
    resultsContainer.innerHTML = '';
    allVideos = [];

    const lottieData = selectedLottieData;
    const videoResults = [];

    function gameloop() {
      videoResults.forEach(result => {
        const ctx = setupGLContext(result.canvas);

        if (result.video.readyState >= 2) {
          drawVideo(ctx, result.video);
        }
      });
      
      requestAnimationFrame(gameloop);
    }
    gameloop();

    for (let i = 0; i < configs.length; i++) {
      const config = configs[i];
      statusDiv.innerHTML = `<strong>Status:</strong> Processing configuration ${i + 1}/${configs.length}: ${config.codec}...`;
      
      try {
        const result = await generate2xHeightVideo(lottieData, config);
        videoResults.push(result);
        allVideos.push(result.video);
        resultsContainer.appendChild(result.container);
        syncAllVideos();
      } catch (error) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-container';
        errorDiv.innerHTML = `<strong>Error with config ${i + 1}:</strong><br><pre>${JSON.stringify(config, null, 2)}</pre><br>Error: ${error.message}`;
        resultsContainer.appendChild(errorDiv);
      }
    }

    statusDiv.innerHTML = `<strong>Status:</strong> Starting canvas renderers...`;
    statusDiv.innerHTML = `<strong>Status:</strong> Completed! Generated ${configs.length} videos.`;
    generateBtn.disabled = false;
    generateBtn.textContent = 'Generate All Videos';
  } catch (error) {
    statusDiv.style.display = 'block';
    statusDiv.innerHTML = `<strong>Error:</strong> ${error.message}`;
    statusDiv.className = 'status-div status-error';
    generateBtn.disabled = false;
    generateBtn.textContent = 'Generate All Videos';
  }
};
