# Lottie Video Benchmark Tool

A Node.js script that converts Lottie animations to videos using FFmpeg with various codec parameters and generates a comprehensive HTML report.

## Features

- **Multiple Codecs**: H.264, H.265, AV1, VP9
- **CRF Values**: 20, 23, 27, 30, 35, 40
- **Target Widths**: 420px, 360px (height is automatically 2x width)
- **Target FPS**: 25fps, 15fps
- **HTML Report**: Interactive grid with video previews and filtering

## Prerequisites

- Node.js 14+ 
- FFmpeg installed and available in PATH
- Lottie JSON file with embedded PNG images

## Installation

```bash
# Make script executable
chmod +x lottie-benchmark.js

# Or install globally
npm install -g .
```

## Usage

```bash
# Direct execution
node lottie-benchmark.js path/to/your-lottie.json

# Using npm script
npm run benchmark path/to/your-lottie.json

# If installed globally
lottie-benchmark path/to/your-lottie.json
```

## Output

The script creates:
- `./benchmark-output/` directory with all generated videos
- `./benchmark-output/benchmark-report.html` - Interactive HTML report

## Example Output Structure

```
benchmark-output/
├── benchmark-report.html
├── h264_crf20_420x840_25fps.mp4
├── h264_crf20_420x840_15fps.mp4
├── h264_crf23_360x720_25fps.mp4
├── vp9_crf30_420x840_25fps.webm
├── av1_crf35_360x720_15fps.webm
└── ... (all combinations)
```

## HTML Report Features

- **Grid Layout**: All videos displayed in organized cards
- **Interactive Filters**: Filter by codec, CRF, width, and FPS
- **Statistics**: Total tests, success rate, average file sizes
- **Video Preview**: Embedded video players for each result
- **Detailed Info**: File size, encoding time, parameters for each video

## Configuration

Edit the `CONFIG` object in `lottie-benchmark.js` to customize:

```javascript
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
```

## FFmpeg Filter

The script uses this filter complex to create 2x height videos:
```
[0:v]format=rgba,split=2[top][alpha];[top]format=rgb24[top_rgb];[alpha]alphaextract,format=gray[alpha_gray];[top_rgb][alpha_gray]vstack=inputs=2,scale=WIDTH:HEIGHT,fps=FPS[v]
```

This creates videos where:
- Top half: RGB content  
- Bottom half: Alpha channel as grayscale
- Total height: 2x the target width

## Troubleshooting

**FFmpeg not found:**
```bash
# Install FFmpeg
# macOS
brew install ffmpeg

# Ubuntu/Debian  
sudo apt install ffmpeg

# Windows
# Download from https://ffmpeg.org/
```

**Large file sizes:**
- Increase CRF values (lower quality, smaller files)
- Reduce target width/fps
- Use more efficient codecs (AV1 > VP9 > H.265 > H.264)

**Out of memory:**
- The script processes large Lottie files with embedded images
- Adjust MAX_SIZE limit in extractImagesFromLottie()

## Example Command

```bash
node lottie-benchmark.js my-animation.json
```

This will:
1. Extract PNG frames from the Lottie JSON
2. Run 192 FFmpeg encoding tests (4 codecs × 6 CRFs × 2 widths × 2 FPS)
3. Generate an HTML report with all results
4. Clean up temporary files

## Performance

- **Total tests**: 192 combinations by default
- **Typical runtime**: 10-30 minutes depending on animation complexity
- **Output size**: Varies widely based on content and parameters
- **Parallelization**: Currently sequential (could be enhanced)

## License

MIT