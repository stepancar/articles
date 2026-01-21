import { FFmpeg } from '../externals/ffmpeg/package/dist/esm/index.js';
import { toBlobURL } from '../externals/util/package/dist/esm/index.js';
import {
  setupGLContext,
  drawVideo
} from 'https://cdn.jsdelivr.net/npm/stacked-alpha-video@1.0.10/build/gl-helpers.js';

let _ffmpeg = null;
let loadingPromise = null;
let statusDiv = null;

async function getffmpeg() {
  if (_ffmpeg) {
    await loadingPromise;
    return _ffmpeg;
  }
  const ffmpeg = new FFmpeg();
  _ffmpeg = ffmpeg;

  const baseURL = '../externals/core/package/dist/esm';

  loadingPromise = ffmpeg.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
  });

  ffmpeg.on('log', ({ type, message }) => {
    console.log(`[${type}] ${message}`);
  });

  ffmpeg.on('progress', ({ progress, time }) => {
    console.log(`progress: ${progress}, time: ${time}`);
    if (statusDiv) {
      statusDiv.innerHTML = `<strong>Status:</strong> Encoding video... ${(progress * 100).toFixed(1)}%`;
    }
  });

  await loadingPromise;

  return ffmpeg;
}

// Extract frames from video using browser's native decoder (supports VP9 alpha)
async function extractFramesFromVideo(videoFile, onProgress) {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.muted = true;
    video.playsInline = true;

    const videoUrl = URL.createObjectURL(videoFile);
    video.src = videoUrl;

    video.onloadedmetadata = async () => {
      const width = video.videoWidth;
      const height = video.videoHeight;
      const duration = video.duration;

      // Create canvas for frame extraction
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d', { alpha: true });

      const frames = [];
      const fps = 30; // Default FPS for extraction
      const totalFrames = Math.ceil(duration * fps);

      for (let i = 0; i < totalFrames; i++) {
        const time = i / fps;
        video.currentTime = time;

        await new Promise((resolveSeek) => {
          video.onseeked = resolveSeek;
        });

        // Clear with transparency and draw frame
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(video, 0, 0, width, height);

        // Get frame as PNG blob (preserves alpha)
        const blob = await new Promise((resolveBlob) => {
          canvas.toBlob(resolveBlob, 'image/png', 1);
        });

        const arrayBuffer = await blob.arrayBuffer();
        // Store as regular array to avoid ArrayBuffer detachment issues when reusing
        frames.push(Array.from(new Uint8Array(arrayBuffer)));

        if (onProgress) {
          onProgress((i + 1) / totalFrames, i + 1, totalFrames);
        }
      }

      URL.revokeObjectURL(videoUrl);
      resolve({ frames, width, height, fps, duration });
    };

    video.onerror = (e) => {
      URL.revokeObjectURL(videoUrl);
      reject(new Error('Failed to load video: ' + e.message));
    };

    video.load();
  });
}

// Convert Uint8Array to URL-safe base64 without stack overflow
function uint8ArrayToBase64(bytes) {
  let binary = '';
  const chunkSize = 8192;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode.apply(null, chunk);
  }
  // Convert to URL-safe base64: replace + with -, / with _, remove =
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
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

async function convertVideoToDoubleHeight(videoFile, config, videoInfo) {
  const ffmpeg = await getffmpeg();

  const { frames, width, height, fps } = videoInfo;

  if (frames.length === 0) {
    throw new Error('No frames extracted from video');
  }

  console.log(`Processing ${frames.length} frames (${width}x${height} @ ${fps}fps)`);

  // Write all frames to FFmpeg filesystem (convert from array to Uint8Array)
  for (let i = 0; i < frames.length; i++) {
    await ffmpeg.writeFile(`frame_${i}.png`, new Uint8Array(frames[i]));
  }

  const codecParams = config.codecParams ? config.codecParams.split(' ').filter(p => p.trim()) : [];
  const targetFps = config.targetFps || fps;
  const codec = extractCodecFromParams(codecParams);
  const outputExt = getOutputExtension(codec);
  const outputFile = `output_${codec}.${outputExt}`;

  // Calculate output dimensions
  // Target width defaults to original, target height is calculated to maintain aspect ratio
  const targetWidth = config.targetWidth || width;
  // Single frame height (maintaining aspect ratio), then doubled for stacked format
  const singleHeight = Math.round(targetWidth * height / width);
  // Ensure dimensions are even (required for most video codecs)
  const finalWidth = targetWidth + (targetWidth % 2);
  const finalHeight = (singleHeight * 2) + ((singleHeight * 2) % 2);

  console.log(`Output dimensions: ${finalWidth}x${finalHeight} (single: ${finalWidth}x${singleHeight})`);

  // Build filter: split into RGB and alpha mask, stack vertically
  let filterComplex = `[0:v]format=rgba,split=2[top][alpha];[top]format=rgb24[top_rgb];[alpha]alphaextract,format=gray[alpha_gray];[top_rgb][alpha_gray]vstack=inputs=2,scale=${finalWidth}:${finalHeight}`;

  if (targetFps !== fps) {
    filterComplex += `,fps=${targetFps}`;
  }

  filterComplex += '[v]';

  const ffmpegArgs = [
    '-framerate', fps.toString(),
    '-i', 'frame_%d.png',
    '-filter_complex',
    filterComplex,
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

  const outputData = await ffmpeg.readFile(outputFile);

  // Cleanup
  for (let i = 0; i < frames.length; i++) {
    await ffmpeg.deleteFile(`frame_${i}.png`);
  }
  await ffmpeg.deleteFile(outputFile);

  return outputData instanceof Uint8Array ? outputData : new Uint8Array(outputData);
}

async function generateDoubleHeightVideo(videoFile, config, videoInfo) {
  const videoData = await convertVideoToDoubleHeight(videoFile, config, videoInfo);
  const videoSizeKB = (videoData.length / 1024).toFixed(2);

  const outputExt = getOutputExtension(config.codec);
  const mimeType = outputExt === 'webm' ? 'video/webm' : (outputExt === 'webp' ? 'image/webp' : 'video/mp4');
  const videoBlob = new Blob([videoData], { type: mimeType });
  const videoUrl = URL.createObjectURL(videoBlob);

  const container = document.createElement('div');
  container.className = 'video-container';

  const title = document.createElement('h3');
  title.textContent = 'Double Height Video';
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

  // Set canvas dimensions when video metadata loads (half height for double-height video)
  generatedVideo.addEventListener('loadedmetadata', () => {
    canvas.width = generatedVideo.videoWidth;
    canvas.height = generatedVideo.videoHeight / 2;
    // Override CSS fixed dimensions to maintain aspect ratio
    canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';
  });

  const infoDiv = document.createElement('div');
  infoDiv.className = 'video-info';
  infoDiv.innerHTML = `
    <strong>Video Info:</strong><br>
    Size: ${videoSizeKB} KB<br>
    Config: ${config.codecParams}<br>
    Target FPS: ${config.targetFps || 'original'}<br>
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
    a.download = `double_height_${config.codec}.${outputExt}`;
    a.click();
  };
  buttonContainer.appendChild(downloadBtn);

  const shareBtn = document.createElement('button');
  shareBtn.textContent = 'Open in Player';
  shareBtn.className = 'share-btn';
  shareBtn.onclick = () => {
    const base64Video = uint8ArrayToBase64(new Uint8Array(videoData));
    const basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
    const playerUrl = `${window.location.origin}${basePath}/player.html?video=${base64Video}`;
    window.open(playerUrl, '_blank');
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

// Build UI
const controlsDiv = document.createElement('div');
controlsDiv.className = 'video-controls';

const title = document.createElement('h2');
title.textContent = 'Convert Video to Double Height Transparency Format';
controlsDiv.appendChild(title);

const description = document.createElement('p');
description.textContent = 'Upload a video with transparency (WebM, MOV with alpha) to convert it to a double-height video format that can be played with cross-browser transparency support.';
description.style.color = '#666';
description.style.marginBottom = '20px';
controlsDiv.appendChild(description);

// File upload area
const fileUploadArea = document.createElement('div');
fileUploadArea.className = 'file-upload-area';
fileUploadArea.innerHTML = `
  <div class="upload-icon">🎬</div>
  <div class="upload-text">Drop video file here</div>
  <div class="upload-subtext">Supports WebM, MOV, MP4, AVI, MKV</div>
`;

const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = 'video/*,.webm,.mov,.mp4,.avi,.mkv';
fileInput.className = 'file-input';

const currentFileDiv = document.createElement('div');
currentFileDiv.className = 'current-file';
currentFileDiv.style.display = 'none';

const previewContainer = document.createElement('div');
previewContainer.style.display = 'none';

let selectedVideoFile = null;

function handleFile(file) {
  const validExtensions = ['.webm', '.mov', '.mp4', '.avi', '.mkv'];
  const fileExt = '.' + file.name.split('.').pop().toLowerCase();

  if (!validExtensions.includes(fileExt) && !file.type.startsWith('video/')) {
    alert('Please select a valid video file');
    return;
  }

  selectedVideoFile = file;

  currentFileDiv.innerHTML = `<span class="file-name">🎬 ${file.name}</span> (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
  currentFileDiv.style.display = 'block';
  generateBtn.disabled = false;

  // Show preview
  const previewUrl = URL.createObjectURL(file);
  previewContainer.innerHTML = `
    <h4>Preview:</h4>
    <video class="preview-video" src="${previewUrl}" controls autoplay loop muted></video>
  `;
  previewContainer.style.display = 'block';
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
controlsDiv.appendChild(previewContainer);

const label = document.createElement('label');
label.textContent = 'Configurations (JSON Array):';
label.className = 'config-label';
controlsDiv.appendChild(label);

const configTextarea = document.createElement('textarea');
configTextarea.className = 'config-textarea';
configTextarea.value = JSON.stringify(defaultConfigs, null, 2);
controlsDiv.appendChild(configTextarea);

const generateBtn = document.createElement('button');
generateBtn.textContent = 'Convert Video';
generateBtn.className = 'generate-btn';
generateBtn.disabled = true;
controlsDiv.appendChild(generateBtn);

statusDiv = document.createElement('div');
statusDiv.className = 'status-div';
controlsDiv.appendChild(statusDiv);

const resultsContainer = document.createElement('div');
resultsContainer.className = 'results-container';

document.body.appendChild(controlsDiv);
document.body.appendChild(resultsContainer);

generateBtn.onclick = async () => {
  try {
    if (!selectedVideoFile) {
      alert('Please select a video file first');
      return;
    }

    const configs = JSON.parse(configTextarea.value);
    if (!Array.isArray(configs)) {
      throw new Error('Configuration must be an array');
    }

    generateBtn.disabled = true;
    generateBtn.textContent = 'Converting...';
    statusDiv.style.display = 'block';
    statusDiv.innerHTML = '<strong>Status:</strong> Extracting frames from video (using browser decoder for alpha support)...';

    resultsContainer.innerHTML = '';
    allVideos = [];

    // Extract frames using browser's native video decoder (supports VP9 alpha)
    const videoInfo = await extractFramesFromVideo(selectedVideoFile, (progress, current, total) => {
      statusDiv.innerHTML = `<strong>Status:</strong> Extracting frames... ${current}/${total} (${(progress * 100).toFixed(1)}%)`;
    });

    statusDiv.innerHTML = `<strong>Status:</strong> Extracted ${videoInfo.frames.length} frames. Loading FFmpeg...`;

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
      config.codec = extractCodecFromParams(config.codecParams ? config.codecParams.split(' ').filter(p => p.trim()) : []);

      statusDiv.innerHTML = `<strong>Status:</strong> Processing configuration ${i + 1}/${configs.length}`;

      try {
        const result = await generateDoubleHeightVideo(selectedVideoFile, config, videoInfo);
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

    statusDiv.innerHTML = `<strong>Status:</strong> Completed! Converted ${configs.length} configurations.`;
    generateBtn.disabled = false;
    generateBtn.textContent = 'Convert Video';
  } catch (error) {
    statusDiv.style.display = 'block';
    statusDiv.innerHTML = `<strong>Error:</strong> ${error.message}`;
    statusDiv.className = 'status-div status-error';
    generateBtn.disabled = false;
    generateBtn.textContent = 'Convert Video';
  }
};
