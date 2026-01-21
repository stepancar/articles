import {
  setupGLContext,
  setPremultipliedAlpha,
  drawVideo
} from 'https://cdn.jsdelivr.net/npm/stacked-alpha-video@1.0.10/build/gl-helpers.js';

function showError(message) {
  const errorDiv = document.getElementById('error');
  const loadingDiv = document.getElementById('loading');
  
  loadingDiv.style.display = 'none';
  errorDiv.textContent = message;
  errorDiv.style.display = 'block';
}

function showLoading(message = 'Loading video...') {
  const loadingDiv = document.getElementById('loading');
  loadingDiv.textContent = message;
  loadingDiv.style.display = 'block';
}

function hideLoading() {
  const loadingDiv = document.getElementById('loading');
  loadingDiv.style.display = 'none';
}

function getVideoFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  let videoBase64 = urlParams.get('video');

  if (!videoBase64) {
    showError('No video parameter found in URL. Please provide a base64 encoded video using ?video=<base64_data>');
    return null;
  }

  try {
    // Convert URL-safe base64 back to standard base64
    videoBase64 = videoBase64.replace(/-/g, '+').replace(/_/g, '/');
    // Add padding if needed
    while (videoBase64.length % 4) {
      videoBase64 += '=';
    }

    const binaryString = atob(videoBase64);
    const bytes = new Uint8Array(binaryString.length);

    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes;
  } catch (error) {
    showError('Invalid base64 video data in URL parameter');
    console.error('Failed to decode base64 video:', error);
    return null;
  }
}

function detectVideoFormat(videoData) {
  if (!videoData || videoData.length < 8) return 'mp4';
  
  const header = Array.from(videoData.slice(0, 8))
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
  
  if (header.includes('1a45dfa3')) return 'webm';
  if (videoData[0] === 0x00 && videoData[1] === 0x00 && videoData[2] === 0x00 && videoData[3] === 0x20) return 'mp4';
  if (videoData[4] === 0x66 && videoData[5] === 0x74 && videoData[6] === 0x79 && videoData[7] === 0x70) return 'mp4';
  
  return 'mp4';
}

function createVideoPlayer(videoData) {
  const container = document.getElementById('video-container');
  const videoFormat = detectVideoFormat(videoData);
  const mimeType = videoFormat === 'webm' ? 'video/webm' : 'video/mp4';
  
  const videoBlob = new Blob([videoData], { type: mimeType });
  const videoUrl = URL.createObjectURL(videoBlob);
  
  const videoContainer = document.createElement('div');
  videoContainer.className = 'video-container';
  
  const title = document.createElement('h3');
  title.textContent = 'Double Height Video with WebGL Alpha Transparency';
  videoContainer.appendChild(title);
  
  // Container for side-by-side comparison
  const comparisonDiv = document.createElement('div');
  comparisonDiv.style.display = 'flex';
  comparisonDiv.style.gap = '20px';
  comparisonDiv.style.flexWrap = 'wrap';
  comparisonDiv.style.alignItems = 'flex-start';

  // Double height video (source)
  const videoWrapper = document.createElement('div');
  const videoLabel = document.createElement('h4');
  videoLabel.textContent = 'Double Height Video (Source)';
  videoLabel.style.margin = '0 0 10px 0';
  videoWrapper.appendChild(videoLabel);

  const video = document.createElement('video');
  video.src = videoUrl;
  video.controls = true;
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.className = 'video-element';
  video.style.maxHeight = '400px';
  video.style.width = 'auto';
  videoWrapper.appendChild(video);
  comparisonDiv.appendChild(videoWrapper);

  // Canvas with transparency (result)
  const canvasWrapper = document.createElement('div');
  const canvasLabel = document.createElement('h4');
  canvasLabel.textContent = 'WebGL Rendered (With Transparency)';
  canvasLabel.style.margin = '0 0 10px 0';
  canvasWrapper.appendChild(canvasLabel);
  
  const canvas = document.createElement('canvas');
  canvas.className = 'canvas-element';
  canvasWrapper.appendChild(canvas);
  comparisonDiv.appendChild(canvasWrapper);

  videoContainer.appendChild(comparisonDiv);
  
  const infoDiv = document.createElement('div');
  infoDiv.className = 'video-info';
  const videoSizeKB = (videoData.length / 1024).toFixed(2);
  infoDiv.innerHTML = `
    <strong>Video Info:</strong><br>
    Size: ${videoSizeKB} KB<br>
    Format: ${videoFormat.toUpperCase()}<br>
    Type: Double Height with Alpha Channel
  `;
  videoContainer.appendChild(infoDiv);
  
  container.appendChild(videoContainer);
  
  video.addEventListener('loadedmetadata', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight / 2;
    // Set style dimensions to maintain aspect ratio
    canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';

    const ctx = setupGLContext(canvas);

    function renderFrame() {
      if (video.readyState >= 2) {
        drawVideo(ctx, video);
      }
      requestAnimationFrame(renderFrame);
    }

    renderFrame();
    hideLoading();

    // Explicitly play the video (autoplay may be blocked)
    video.play().catch(e => console.log('Autoplay blocked:', e));
  });
  
  video.addEventListener('error', (e) => {
    const error = video.error;
    let errorMessage = 'Unknown error';
    if (error) {
      switch (error.code) {
        case MediaError.MEDIA_ERR_ABORTED:
          errorMessage = 'Video loading aborted';
          break;
        case MediaError.MEDIA_ERR_NETWORK:
          errorMessage = 'Network error while loading video';
          break;
        case MediaError.MEDIA_ERR_DECODE:
          errorMessage = 'Video decoding error';
          break;
        case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
          errorMessage = 'Video format not supported';
          break;
      }
      console.error('Video error:', error.code, error.message);
    }
    console.log('Video data size:', videoData.length, 'bytes');
    console.log('Detected format:', videoFormat);
    console.log('First 20 bytes:', Array.from(videoData.slice(0, 20)).map(b => b.toString(16).padStart(2, '0')).join(' '));
    showError(`Failed to load video: ${errorMessage}`);
  });
  
  const downloadBtn = document.createElement('button');
  downloadBtn.textContent = 'Download Video';
  downloadBtn.className = 'download-btn';
  downloadBtn.onclick = () => {
    const a = document.createElement('a');
    a.href = videoUrl;
    a.download = `double_height_video.${videoFormat}`;
    a.click();
  };
  videoContainer.appendChild(downloadBtn);
}

function init() {
  showLoading('Parsing URL parameters...');
  
  const videoData = getVideoFromUrl();
  if (!videoData) {
    return;
  }
  
  showLoading('Creating video player...');
  
  try {
    createVideoPlayer(videoData);
  } catch (error) {
    showError(`Failed to create video player: ${error.message}`);
    console.error('Video player creation failed:', error);
  }
}

document.addEventListener('DOMContentLoaded', init);