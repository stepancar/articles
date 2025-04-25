import {Transcoder} from './transcoder.js';

const formats = {
    "webm": ["vp09.00.10.08.03.1.1.1.0", "opus", "video/webm"],
    "mp4": ["hvc1.1.6.L123.B0", "mp4a.40.2", "video/mp4"],
    "mkv": ["avc1.42403e", "opus", "video/x-matroska"],
    "avi": ["mpeg4", "mp4a.40.2", "video/x-msvideo"],
    "mov": ["avc1.42403e", "mp4a.40.2", "video/quicktime"],
    "flv": ["avc1.42403e", "mp4a.40.2", "video/x-flv"],
    "ts": ["avc1.42403e", "mp4a.40.2", "video/mp2t"],
};


function formatTime(seconds) {
    const date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
}

async function main() {
    const fileInput = document.getElementById("file");
    const inputBox = document.getElementById("input-box");
    const progressContainer = document.getElementById("progress-container");
    const downloadBtn = document.getElementById("download-btn");

    let resultBlobUrl = null;

    downloadBtn.onclick = () => {
        if (resultBlobUrl) {
            const a = document.createElement("a");
            a.href = resultBlobUrl;
            a.download = `converted.${document.getElementById("container").value}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };

    fileInput.addEventListener('change', async function() {
        if (!fileInput.files.length) return;

        inputBox.style.display = "none";
        progressContainer.style.display = "block";

        const file = fileInput.files[0];
        const containerType = document.getElementById("container").value;
        const resolution = document.getElementById("resolution").value.split("x");
        const [vc, ac, mimeType] = formats[containerType];
        const width = parseInt(resolution[0]);
        const height = parseInt(resolution[1]);

        document.getElementById("progress-resolution").textContent = `${width}x${height}`;
        document.getElementById("progress-status").textContent = "Initializing transcoder...";

        const libav = await LibAV.LibAV({noworker: true});
        let transcoder = new Transcoder({ libav });
        window.addEventListener('beforeunload', async () => {
            if (libav) await libav.terminate();
            transcoder = null
        });


        transcoder.addEventListener('progress', (e) => {
            const { stage, percent, processedDuration, totalDuration, error } = e.detail;

            document.querySelector(".progress-percent").textContent = `${percent.toFixed(2) || 0}%`;
            document.querySelector(".progress-bar").style.width = `${percent.toFixed(2) || 0}%`;

            if (stage === 'start') {
                document.getElementById("progress-time").textContent =
                    `00:00:00 / ${formatTime(totalDuration)}`;
                document.getElementById("progress-status").textContent = "Starting transcoding...";
            }
            else if (stage === 'processing') {
                document.getElementById("progress-time").textContent =
                    `${formatTime(processedDuration)} / ${formatTime(totalDuration)}`;
                document.getElementById("progress-status").textContent = "Transcoding in progress...";
            }
            else if (stage === 'complete') {
                document.getElementById("progress-status").textContent = "Transcoding completed!";
                document.getElementById("progress-status").style.color = "#00a854";
                document.querySelector(".progress-bar").style.background = "#00d97e";
                downloadBtn.style.display = "block";
            }
            else if (stage === 'error') {
                document.getElementById("progress-error").textContent = error;
                document.getElementById("progress-error").style.display = "block";
                document.getElementById("progress-status").textContent = "Transcoding failed!";
                document.getElementById("progress-status").style.color = "#e63757";
                document.querySelector(".progress-bar").style.background = "#e63757";
            }
        });

        try {
            console.time("transcode");
            const output = await transcoder.transcode(file, {
                containerType,
                vc, ac,
                width,
                height
            });

            resultBlobUrl = URL.createObjectURL(new Blob([output.buffer], {type: mimeType}));
        } catch (error) {
            console.error("Transcoding failed:", error);
        } finally {
            console.timeEnd("transcode")
        }
    });
}

document.addEventListener('DOMContentLoaded', main);