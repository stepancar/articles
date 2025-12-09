
import { FFmpeg } from '../externals/ffmpeg/package/dist/esm/index.js';
import { toBlobURL } from '../externals/util/package/dist/esm/index.js';
import {
  setupGLContext,
  setPremultipliedAlpha,
  drawVideo
} from 'https://cdn.jsdelivr.net/npm/stacked-alpha-video@1.0.10/build/gl-helpers.js';

import * as lottie from 'https://cdn.jsdelivr.net/npm/lottie-web@5.10.2/build/player/lottie.min.js';
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


// function extractImagesFromLottie(lottieData) {
//   const images = [];
//   const MAX_SIZE = 50 * 1024 * 1024; // 50MB limit per image
  
//   lottieData.assets.forEach((asset) => {
//     if (asset.p && asset.p.startsWith('data:image/png;base64,')) {
//       const base64Data = asset.p.replace(/^data:image\/png;base64,/, '');
      
//       // Check base64 size before processing
//       if (base64Data.length * 0.75 > MAX_SIZE) {
//         console.warn(`Skipping oversized image asset: ${base64Data.length * 0.75} bytes`);
//         return;
//       }
      
//       try {
//         const binaryString = atob(base64Data);
//         const bytes = new Uint8Array(binaryString.length);
        
//         for (let i = 0; i < binaryString.length; i++) {
//           bytes[i] = binaryString.charCodeAt(i);
//         }
        
//         images.push(bytes);
//       } catch (error) {
//         console.error('Failed to decode base64 image:', error);
//       }
//     }
//   });
  
//   return images;
// }

async function extractFramesFromLottie(lottieData) {
  

  const container = document.createElement('div');
  const width = lottieData.w;
  const height = lottieData.h;

  /**
   * Lottie asset inherits its dimension from the container.
   * This container needs to be appended to the DOM during load.
   * The css ensures that it does not cause any kind of flicker, flash of lottie asset
   * or any random scrollbars due to appending of a large div in the DOM.
   */
  container.style.cssText = `position:fixed;width:${width}px;height:${height}px;right:150vw;bottom:150vh;opacity:0;`;

  /**
   * Lottie uses offsetWidth and offsetHeight to calculate the dimensions of canvas
   * But offsetWidth and offsetHeight trigger a reflow.
   * We don't need it because we already know the dimensions.
   */
  Object.defineProperty(container, 'offsetWidth', {
      get() {
          return width;
      },
  });

  Object.defineProperty(container, 'offsetHeight', {
      get() {
          return height;
      },
  });
  
  const animation = window.lottie.loadAnimation({
    container,
    renderer: 'canvas',
    animationData: lottieData,
    loop: false,
    autoplay: false,
  });

  const frames = [];

  for (let i = lottieData.ip; i < lottieData.op; i++) {
    animation.goToAndStop(i, true);
    await new Promise((resolve) => setTimeout(resolve, 0));
    const canvas = animation.container;
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png', 1));
    const arrayBuffer = await blob.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    frames.push(uint8Array);
  }
  
  animation.destroy();
  return frames;
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

    ffmpeg.on('log', ({ type, message }) => {
      console.log(`[${type}] ${message}`);
    });

    ffmpeg.on('progress', ({ progress, time }) => {
      console.log(`progress: ${progress}, time: ${time}`);
    });

    await loadingPromise;
    
  return ffmpeg;
}


async function convertToDoubleHeightVideo(lottieData, config) {
    const ffmpeg = await getffmpeg();

    const images = await extractFramesFromLottie(lottieData);
    const originalFrameRate = lottieData.fr || 30;
    if (images.length === 0) {
      throw new Error('No images found in Lottie data');
    }

    console.log(`Processing ${images.length} images`);
    for (let i = 0; i < images.length; i++) {
      await ffmpeg.writeFile(`frame_${i}.png`, images[i]);
    }

    const codecParams = config.codecParams ? config.codecParams.split(' ').filter(p => p.trim()) : [];
    const targetFps = config.targetFps || originalFrameRate;
    const targetWidth = config.targetWidth || lottieData.w;
    const targetHeight = targetWidth * 2;
    const codec = extractCodecFromParams(codecParams);
    const outputExt = getOutputExtension(codec);
    const outputFile = `output_${codec}.${outputExt}`;

    const ffmpegArgs = [
      '-framerate', originalFrameRate.toString(),
      '-i', 'frame_%d.png',
      '-filter_complex', 
      `[0:v]format=rgba,split=2[top][alpha];[top]format=rgb24[top_rgb];[alpha]alphaextract,format=gray[alpha_gray];[top_rgb][alpha_gray]vstack=inputs=2,scale=${targetWidth}:${targetHeight},fps=${targetFps}[v]`,
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



function extractCodecFromParams(codecParams) {
  const codecIndex = codecParams.findIndex(param => param === '-c:v');
  if (codecIndex !== -1 && codecIndex + 1 < codecParams.length) {
    return codecParams[codecIndex + 1];
  }
  return 'unknown';
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
    case 'libwebp':
      return 'webp';
    default:
      return 'mp4';
  }
}

async function generate2xHeightVideo(lottieData, config) {
  const videoData = await convertToDoubleHeightVideo(lottieData, config);
  const videoSizeKB = (videoData.length / 1024).toFixed(2);

  const outputExt = getOutputExtension(config.codec);
  const mimeType = outputExt === 'webm' ? 'video/webm' : ( outputExt === 'webp' ? 'image/webp': 'video/mp4');
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
    Config: ${config.codecParams}<br>
    Target FPS: ${config.targetFps || 'equals to lottie'}<br>
    Format: ${outputExt}
  `;
  container.appendChild(infoDiv);

  const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'flex';
  buttonContainer.style.gap = '10px';
  buttonContainer.style.marginTop = '10px';
  
  const downloadBtn = document.createElement('button');
  downloadBtn.textContent = 'Download Video';
  downloadBtn.className = 'download-btn';
  downloadBtn.onclick = () => {
    const a = document.createElement('a');
    a.href = videoUrl;
    a.download = `lottie_2x_${config.codec}_crf${config.crf}.${outputExt}`;
    a.click();
  };
  buttonContainer.appendChild(downloadBtn);
  
  const shareBtn = document.createElement('button');
  shareBtn.textContent = 'Share Video';
  shareBtn.className = 'share-btn';
  shareBtn.onclick = () => {
    const base64Video = btoa(String.fromCharCode(...new Uint8Array(videoData)));
    const playerUrl = `${window.location.origin}${window.location.pathname.replace('index.html', '').replace(/\/$/, '')}/player.html?video=${base64Video}`;
    navigator.clipboard.writeText(playerUrl).then(() => {
      shareBtn.textContent = 'Link Copied!';
      setTimeout(() => {
        shareBtn.textContent = 'Share Video';
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
      alert('Failed to copy to clipboard');
    });
  };
  buttonContainer.appendChild(shareBtn);
  
  container.appendChild(buttonContainer);

  return {
    container,
    video: generatedVideo,
    canvas
  };
}

const defaultConfigs = [
  { 
    codecParams: '-c:v libx264 -crf 23 -pix_fmt yuv420p'
  },
  { 
    codecParams: '-c:v libx264 -crf 23 -pix_fmt yuv420p',
    targetFps: 15
  },
  { 
    codecParams: '-c:v libx264 -crf 30 -pix_fmt yuv420p',
    targetWidth: 360
  },
  { 
    codecParams: '-c:v libx264 -crf 35 -pix_fmt yuv420p'
  },
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

function loadLottieFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const lottieBase64 = urlParams.get('lottie');
  
  if (lottieBase64) {
    try {
      const decodedJson = atob(lottieBase64);
      selectedLottieData = JSON.parse(decodedJson);
      
      currentFileDiv.innerHTML = `<span class="file-name">🔗 Lottie from URL</span> (${(decodedJson.length / 1024).toFixed(1)} KB)`;
      currentFileDiv.style.display = 'block';
      generateBtn.disabled = false;
      
      return true;
    } catch (error) {
      console.error('Failed to load lottie from URL parameter:', error);
      return false;
    }
  }
  return false;
}

function handleFile(file) {
  if (!file.name.endsWith('.json')) {
    alert('Please select a JSON file');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      selectedLottieData = JSON.parse(e.target.result);
      
      const copyBtn = document.createElement('button');
      copyBtn.textContent = 'Copy Link';
      copyBtn.className = 'copy-link-btn';
      copyBtn.onclick = () => {
        const base64Encoded = btoa(e.target.result);
        const urlWithParam = `${window.location.origin}${window.location.pathname}?lottie=${base64Encoded}`;
        navigator.clipboard.writeText(urlWithParam).then(() => {
          copyBtn.textContent = 'Copied!';
          setTimeout(() => {
            copyBtn.textContent = 'Copy Link';
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy: ', err);
          alert('Failed to copy to clipboard');
        });
      };
      
      currentFileDiv.innerHTML = `<span class="file-name">📄 ${file.name}</span> (${(file.size / 1024).toFixed(1)} KB)`;
      currentFileDiv.appendChild(copyBtn);
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

loadLottieFromUrl();

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
      statusDiv.innerHTML = `<strong>Status:</strong> Processing configuration ${i + 1}/${configs.length}`;
      
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
