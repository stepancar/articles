#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { spawn } = require('child_process');

// Configuration
const CONFIG = {
  codecs: [
    { name: 'h264', codec: 'libx264', ext: 'mp4' },
    { name: 'h265', codec: 'libx265', ext: 'mp4' },
    { name: 'av1', codec: 'libaom-av1', ext: 'webm' },
    { name: 'vp9', codec: 'libvpx-vp9', ext: 'webm' }
  ],
  crfValues: [20, 23, 27, 30, 35, 40],
  targetWidths: [420, 360],
  targetFps: [25, 15],
  outputDir: './benchmark-output',
  tempDir: './temp-frames'
};

class LottieBenchmark {
  constructor(lottieFile) {
    this.lottieFile = lottieFile;
    this.lottieData = null;
    this.results = [];
  }

  async init() {
    // Read and parse Lottie file
    const lottieContent = await fs.readFile(this.lottieFile, 'utf8');
    this.lottieData = JSON.parse(lottieContent);
    
    // Create directories
    await this.createDirectories();
    
    console.log(`Loaded Lottie: ${this.lottieData.w}x${this.lottieData.h}, ${this.lottieData.fr}fps`);
  }

  async createDirectories() {
    await fs.mkdir(CONFIG.outputDir, { recursive: true });
    await fs.mkdir(CONFIG.tempDir, { recursive: true });
  }

  extractImagesFromLottie() {
    const images = [];
    const MAX_SIZE = 50 * 1024 * 1024; // 50MB limit per image
    
    if (!this.lottieData.assets) {
      throw new Error('No assets found in Lottie data');
    }

    this.lottieData.assets.forEach((asset) => {
      if (asset.p && asset.p.startsWith('data:image/png;base64,')) {
        const base64Data = asset.p.replace(/^data:image\/png;base64,/, '');
        
        // Check base64 size before processing
        if (base64Data.length * 0.75 > MAX_SIZE) {
          console.warn(`Skipping oversized image asset: ${base64Data.length * 0.75} bytes`);
          return;
        }
        
        try {
          const buffer = Buffer.from(base64Data, 'base64');
          images.push(buffer);
        } catch (error) {
          console.error('Failed to decode base64 image:', error);
        }
      }
    });
    
    return images;
  }

  async saveFramesToDisk(images) {
    console.log(`Saving ${images.length} frames to disk...`);
    
    for (let i = 0; i < images.length; i++) {
      const framePath = path.join(CONFIG.tempDir, `frame_${i}.png`);
      await fs.writeFile(framePath, images[i]);
    }
    
    return images.length;
  }

  async runFFmpeg(params) {
    const { codec, crf, targetWidth, targetFps, outputFile } = params;
    const originalFrameRate = this.lottieData.fr || 30;
    const targetHeight = targetWidth * 2;

    const codecParams = this.getCodecParams(codec.codec, crf);
    
    const ffmpegArgs = [
      '-framerate', originalFrameRate.toString(),
      '-i', path.join(CONFIG.tempDir, 'frame_%d.png'),
      '-filter_complex', 
      `[0:v]format=rgba,split=2[top][alpha];[top]format=rgb24[top_rgb];[alpha]alphaextract,format=gray[alpha_gray];[top_rgb][alpha_gray]vstack=inputs=2,scale=${targetWidth}:${targetHeight},fps=${targetFps}[v]`,
      '-map', '[v]',
      ...codecParams,
      '-y', // Overwrite output files
      outputFile
    ];

    console.log(`Running FFmpeg: ${codec.name} CRF${crf} ${targetWidth}x${targetHeight} ${targetFps}fps`);
    
    const startTime = Date.now();
    
    return new Promise((resolve, reject) => {
      const ffmpeg = spawn('ffmpeg', ffmpegArgs);
      
      let stderr = '';
      
      ffmpeg.stderr.on('data', (data) => {
        stderr += data.toString();
      });
      
      ffmpeg.on('close', async (code) => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        
        if (code === 0) {
          try {
            const stats = await fs.stat(outputFile);
            resolve({
              success: true,
              fileSize: stats.size,
              duration,
              stderr
            });
          } catch (error) {
            reject(new Error(`Failed to get file stats: ${error.message}`));
          }
        } else {
          reject(new Error(`FFmpeg failed with code ${code}: ${stderr}`));
        }
      });
      
      ffmpeg.on('error', reject);
    });
  }

  getCodecParams(codec, crf) {
    switch (codec) {
      case 'libx264':
        return ['-c:v', 'libx264', '-crf', crf.toString(), '-preset', 'medium', '-pix_fmt', 'yuv420p'];
      case 'libx265':
        return ['-c:v', 'libx265', '-crf', crf.toString(), '-preset', 'medium', '-pix_fmt', 'yuv420p'];
      case 'libvpx-vp9':
        return ['-c:v', 'libvpx-vp9', '-crf', crf.toString(), '-speed', '0', '-pix_fmt', 'yuv420p'];
      case 'libaom-av1':
        return ['-c:v', 'libaom-av1', '-crf', crf.toString(), '-cpu-used', '4', '-pix_fmt', 'yuv420p'];
      default:
        throw new Error(`Unsupported codec: ${codec}`);
    }
  }

  async runBenchmark() {
    console.log('Starting benchmark...');
    
    // Extract and save frames
    const images = this.extractImagesFromLottie();
    if (images.length === 0) {
      throw new Error('No images found in Lottie data');
    }
    
    await this.saveFramesToDisk(images);
    
    let totalTests = CONFIG.codecs.length * CONFIG.crfValues.length * CONFIG.targetWidths.length * CONFIG.targetFps.length;
    let currentTest = 0;
    
    // Run all combinations
    for (const codec of CONFIG.codecs) {
      for (const crf of CONFIG.crfValues) {
        for (const targetWidth of CONFIG.targetWidths) {
          for (const targetFps of CONFIG.targetFps) {
            currentTest++;
            console.log(`\nTest ${currentTest}/${totalTests}`);
            
            const outputFile = path.join(
              CONFIG.outputDir,
              `${codec.name}_crf${crf}_${targetWidth}x${targetWidth * 2}_${targetFps}fps.${codec.ext}`
            );
            
            try {
              const result = await this.runFFmpeg({
                codec,
                crf,
                targetWidth,
                targetFps,
                outputFile
              });
              
              this.results.push({
                codec: codec.name,
                codecName: codec.codec,
                crf,
                targetWidth,
                targetHeight: targetWidth * 2,
                targetFps,
                outputFile,
                success: true,
                fileSize: result.fileSize,
                duration: result.duration,
                error: null
              });
              
              console.log(`✓ Success: ${(result.fileSize / 1024).toFixed(1)}KB in ${(result.duration / 1000).toFixed(1)}s`);
              
            } catch (error) {
              console.log(`✗ Failed: ${error.message}`);
              
              this.results.push({
                codec: codec.name,
                codecName: codec.codec,
                crf,
                targetWidth,
                targetHeight: targetWidth * 2,
                targetFps,
                outputFile,
                success: false,
                fileSize: null,
                duration: null,
                error: error.message
              });
            }
          }
        }
      }
    }
  }

  async generateHtmlReport() {
    console.log('\nGenerating HTML report...');
    
    const html = this.generateReportHtml();
    const reportPath = path.join(CONFIG.outputDir, 'benchmark-report.html');
    await fs.writeFile(reportPath, html);
    
    console.log(`Report generated: ${reportPath}`);
  }

  generateReportHtml() {
    const successfulResults = this.results.filter(r => r.success);
    const failedResults = this.results.filter(r => !r.success);
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lottie Benchmark Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .header { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px; }
        .stat-card { background: white; padding: 15px; border-radius: 8px; text-align: center; }
        .stat-value { font-size: 24px; font-weight: bold; color: #007bff; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
        .video-card { background: white; border-radius: 8px; padding: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .video-card.failed { background: #f8d7da; border: 1px solid #f5c6cb; }
        .video-title { font-weight: bold; margin-bottom: 10px; color: #333; }
        .video-info { font-size: 12px; color: #666; margin-bottom: 10px; }
        .video-element { width: 100%; max-width: 280px; height: auto; border-radius: 4px; }
        .error { color: #721c24; font-size: 12px; }
        .filter-controls { background: white; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
        .filter-group { display: inline-block; margin-right: 20px; margin-bottom: 10px; }
        .filter-group label { display: block; margin-bottom: 5px; font-weight: bold; }
        .filter-group select, .filter-group input { padding: 5px; border: 1px solid #ddd; border-radius: 4px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Lottie Benchmark Report</h1>
        <p>Source: ${path.basename(this.lottieFile)}</p>
        <p>Original: ${this.lottieData.w}x${this.lottieData.h} @ ${this.lottieData.fr}fps</p>
        <p>Generated: ${new Date().toLocaleString()}</p>
    </div>

    <div class="stats">
        <div class="stat-card">
            <div class="stat-value">${this.results.length}</div>
            <div>Total Tests</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${successfulResults.length}</div>
            <div>Successful</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${failedResults.length}</div>
            <div>Failed</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${successfulResults.length > 0 ? (successfulResults.reduce((sum, r) => sum + r.fileSize, 0) / successfulResults.length / 1024).toFixed(1) : 0}KB</div>
            <div>Avg File Size</div>
        </div>
    </div>

    <div class="filter-controls">
        <div class="filter-group">
            <label>Codec:</label>
            <select id="codecFilter">
                <option value="">All</option>
                ${CONFIG.codecs.map(c => `<option value="${c.name}">${c.name.toUpperCase()}</option>`).join('')}
            </select>
        </div>
        <div class="filter-group">
            <label>CRF:</label>
            <select id="crfFilter">
                <option value="">All</option>
                ${CONFIG.crfValues.map(crf => `<option value="${crf}">${crf}</option>`).join('')}
            </select>
        </div>
        <div class="filter-group">
            <label>Width:</label>
            <select id="widthFilter">
                <option value="">All</option>
                ${CONFIG.targetWidths.map(w => `<option value="${w}">${w}px</option>`).join('')}
            </select>
        </div>
        <div class="filter-group">
            <label>FPS:</label>
            <select id="fpsFilter">
                <option value="">All</option>
                ${CONFIG.targetFps.map(fps => `<option value="${fps}">${fps}fps</option>`).join('')}
            </select>
        </div>
    </div>

    <div class="grid" id="videoGrid">
        ${this.results.map(result => this.generateVideoCard(result)).join('')}
    </div>

    <script>
        // Filter functionality
        const filters = ['codecFilter', 'crfFilter', 'widthFilter', 'fpsFilter'];
        filters.forEach(filterId => {
            document.getElementById(filterId).addEventListener('change', applyFilters);
        });

        function applyFilters() {
            const codecFilter = document.getElementById('codecFilter').value;
            const crfFilter = document.getElementById('crfFilter').value;
            const widthFilter = document.getElementById('widthFilter').value;
            const fpsFilter = document.getElementById('fpsFilter').value;

            const cards = document.querySelectorAll('.video-card');
            cards.forEach(card => {
                const codec = card.dataset.codec;
                const crf = card.dataset.crf;
                const width = card.dataset.width;
                const fps = card.dataset.fps;

                const show = (!codecFilter || codec === codecFilter) &&
                           (!crfFilter || crf === crfFilter) &&
                           (!widthFilter || width === widthFilter) &&
                           (!fpsFilter || fps === fpsFilter);

                card.style.display = show ? 'block' : 'none';
            });
        }
    </script>
</body>
</html>`;
  }

  generateVideoCard(result) {
    const fileName = path.basename(result.outputFile);
    
    if (!result.success) {
      return `
        <div class="video-card failed" data-codec="${result.codec}" data-crf="${result.crf}" data-width="${result.targetWidth}" data-fps="${result.targetFps}">
            <div class="video-title">❌ ${result.codec.toUpperCase()} CRF${result.crf}</div>
            <div class="video-info">
                ${result.targetWidth}x${result.targetHeight} @ ${result.targetFps}fps
            </div>
            <div class="error">Error: ${result.error}</div>
        </div>
      `;
    }

    return `
      <div class="video-card" data-codec="${result.codec}" data-crf="${result.crf}" data-width="${result.targetWidth}" data-fps="${result.targetFps}">
          <div class="video-title">✅ ${result.codec.toUpperCase()} CRF${result.crf}</div>
          <div class="video-info">
              Size: ${(result.fileSize / 1024).toFixed(1)} KB<br>
              Resolution: ${result.targetWidth}x${result.targetHeight}<br>
              FPS: ${result.targetFps}<br>
              Duration: ${(result.duration / 1000).toFixed(1)}s<br>
              Codec: ${result.codecName}
          </div>
          <video class="video-element" controls loop muted playsinline autoplay crossorigin="anonymous">
              <source src="./${fileName}" type="video/${result.codec === 'h264' || result.codec === 'h265' ? 'mp4' : 'webm'}">
              Your browser does not support the video tag.
          </video>
      </div>
    `;
  }

  async cleanup() {
    console.log('\nCleaning up temporary files...');
    try {
      const files = await fs.readdir(CONFIG.tempDir);
      for (const file of files) {
        await fs.unlink(path.join(CONFIG.tempDir, file));
      }
      await fs.rmdir(CONFIG.tempDir);
    } catch (error) {
      console.warn('Failed to cleanup temp files:', error.message);
    }
  }
}

// Main execution
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: node lottie-benchmark.js <lottie-file.json>');
    process.exit(1);
  }
  
  const lottieFile = args[0];
  
  if (!await fs.access(lottieFile).then(() => true).catch(() => false)) {
    console.error(`File not found: ${lottieFile}`);
    process.exit(1);
  }
  
  const benchmark = new LottieBenchmark(lottieFile);
  
  try {
    await benchmark.init();
    await benchmark.runBenchmark();
    await benchmark.generateHtmlReport();
    console.log('\nBenchmark completed successfully!');
  } catch (error) {
    console.error('Benchmark failed:', error);
    process.exit(1);
  } finally {
    await benchmark.cleanup();
  }
}

if (require.main === module) {
  main();
}

module.exports = LottieBenchmark;