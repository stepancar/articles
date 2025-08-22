// main.ts
import { Transcoder } from './transcoder.js';

interface VideoFormat {
    videoCodec: string;
    audioCodec: string;
    mimeType: string;
}

interface Formats {
    [key: string]: VideoFormat;
}

interface Resolution {
    width: number;
    height: number;
}

const formats: Formats = {
    "webm": {
        videoCodec: "vp09.00.10.08.03.1.1.1.0",
        audioCodec: "opus",
        mimeType: "video/webm"
    },
    "mp4": {
        videoCodec: "hvc1.1.6.L123.B0",
        audioCodec: "mp4a.40.2",
        mimeType: "video/mp4"
    },
    "mkv": {
        videoCodec: "avc1.42403e",
        audioCodec: "opus",
        mimeType: "video/x-matroska"
    },
    "avi": {
        videoCodec: "mpeg4",
        audioCodec: "mp4a.40.2",
        mimeType: "video/x-msvideo"
    },
    "mov": {
        videoCodec: "avc1.42403e",
        audioCodec: "mp4a.40.2",
        mimeType: "video/quicktime"
    },
    "flv": {
        videoCodec: "avc1.42403e",
        audioCodec: "mp4a.40.2",
        mimeType: "video/x-flv"
    },
    "ts": {
        videoCodec: "avc1.42403e",
        audioCodec: "mp4a.40.2",
        mimeType: "video/mp2t"
    },
};

function formatTime(seconds: number): string {
    const date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
}

async function getInputResolution(file: File): Promise<Resolution> {
    const videoElement = document.createElement('video');
    const videoUrl = URL.createObjectURL(file);

    videoElement.src = videoUrl;

    await new Promise<void>((resolve, reject) => {
        videoElement.onloadedmetadata = () => resolve();
        videoElement.onerror = () => reject(new Error('Failed to load video metadata'));
    });

    const width = videoElement.videoWidth;
    const height = videoElement.videoHeight;

    videoElement.pause();
    videoElement.src = '';
    URL.revokeObjectURL(videoUrl);

    return { width, height };
}

async function main(): Promise<void> {
    const fileInput = document.getElementById("file") as HTMLInputElement;
    const inputBox = document.getElementById("input-box") as HTMLDivElement;
    const progressContainer = document.getElementById("progress-container") as HTMLDivElement;
    const downloadBtn = document.getElementById("download-btn") as HTMLButtonElement;
    const containerSelect = document.getElementById("container") as HTMLSelectElement;
    const resolutionSelect = document.getElementById("resolution") as HTMLSelectElement;
    const aspectRatioCheckbox = document.getElementById("aspect-ratio") as HTMLInputElement;
    const progressStatus = document.getElementById("progress-status") as HTMLDivElement;
    const progressError = document.getElementById("progress-error") as HTMLDivElement;
    const progressTime = document.getElementById("progress-time") as HTMLSpanElement;
    const progressResolution = document.getElementById("progress-resolution") as HTMLSpanElement;
    const progressBar = document.querySelector(".progress-bar") as HTMLDivElement;
    const progressPercent = document.querySelector(".progress-percent") as HTMLDivElement;

    let resultBlobUrl: string | null = null;

    downloadBtn.onclick = () => {
        if (resultBlobUrl) {
            const a = document.createElement("a");
            a.href = resultBlobUrl;
            a.download = `converted.${containerSelect.value}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };

    fileInput.addEventListener('change', async function () {
        if (!fileInput.files || fileInput.files.length === 0) return;

        inputBox.style.display = "none";
        progressContainer.style.display = "block";

        const file = fileInput.files[0];
        const isAspectSaveChecked = aspectRatioCheckbox.checked;

        try {
            const { width: inputWidth, height: inputHeight } = await getInputResolution(file);

            const containerType = containerSelect.value;
            const resolutionParts = resolutionSelect.value.split("x");
            const isSourceResolution = resolutionParts[0] === "src";

            const format = formats[containerType];
            if (!format) {
                throw new Error(`Unsupported container type: ${containerType}`);
            }

            let width: number, height: number;
            if (isSourceResolution) {
                width = inputWidth;
                height = inputHeight;
            } else {
                width = parseInt(resolutionParts[0]);
                height = parseInt(resolutionParts[1]);
            }

            progressResolution.textContent = `${width}x${height}`;
            progressStatus.textContent = "Initializing transcoder...";

            const libav = await LibAV.LibAV({ noworker: true });
            const transcoder = new Transcoder({ libav });

            window.addEventListener('beforeunload', async () => {
                if (libav) await libav.terminate();
            });

            const progressHandler = (e: Event) => {
                const event = e as CustomEvent<TranscoderProgressEvent>;
                const { stage, percent, processedDuration, totalDuration, error } = event.detail;

                progressPercent.textContent = `${percent.toFixed(2) || 0}%`;
                progressBar.style.width = `${percent.toFixed(2) || 0}%`;

                switch (stage) {
                    case 'start':
                        progressTime.textContent = `00:00:00 / ${formatTime(totalDuration)}`;
                        progressStatus.textContent = "Starting transcoding...";
                        break;
                    case 'processing':
                        progressTime.textContent = `${formatTime(processedDuration)} / ${formatTime(totalDuration)}`;
                        progressStatus.textContent = "Transcoding in progress...";
                        break;
                    case 'complete':
                        progressStatus.textContent = "Transcoding completed!";
                        progressStatus.style.color = "#00a854";
                        progressBar.style.background = "#00d97e";
                        downloadBtn.style.display = "block";
                        break;
                    case 'error':
                        progressError.textContent = error || 'Unknown error';
                        progressError.style.display = "block";
                        progressStatus.textContent = "Transcoding failed!";
                        progressStatus.style.color = "#e63757";
                        progressBar.style.background = "#e63757";
                        break;
                }
            };

            transcoder.addEventListener('progress', progressHandler as EventListener);

            console.time("transcode");
            const output = await transcoder.transcode(file, {
                containerType,
                vc: format.videoCodec,
                ac: format.audioCodec,
                width,
                height,
                keepAspectRatio: isAspectSaveChecked,
            });

            resultBlobUrl = URL.createObjectURL(new Blob([output], { type: format.mimeType }));

            transcoder.removeEventListener('progress', progressHandler as EventListener);
        } catch (error) {
            console.error("Transcoding failed:", error);
            progressError.textContent = error instanceof Error ? error.message : String(error);
            progressError.style.display = "block";
            progressStatus.textContent = "Transcoding failed!";
            progressStatus.style.color = "#e63757";
            progressBar.style.background = "#e63757";
        } finally {
            console.timeEnd("transcode");
        }
    });
}

document.addEventListener('DOMContentLoaded', main);