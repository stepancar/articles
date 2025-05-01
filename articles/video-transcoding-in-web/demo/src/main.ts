import { Transcoder } from './transcoder';

type FormatInfo = [string, string, string];

const formats: Record<string, FormatInfo> = {
    "webm": ["vp09.00.10.08.03.1.1.1.0", "opus", "video/webm"],
    "mp4": ["hvc1.1.6.L123.B0", "mp4a.40.2", "video/mp4"],
    "mkv": ["avc1.42403e", "opus", "video/x-matroska"],
    "avi": ["mpeg4", "mp4a.40.2", "video/x-msvideo"],
    "mov": ["avc1.42403e", "mp4a.40.2", "video/quicktime"],
    "flv": ["avc1.42403e", "mp4a.40.2", "video/x-flv"],
    "ts": ["avc1.42403e", "mp4a.40.2", "video/mp2t"],
};

function formatTime(seconds: number): string {
    const date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
}

async function main(): Promise<void> {
    const fileInput = document.getElementById("file") as HTMLInputElement;
    const inputBox = document.getElementById("input-box") as HTMLElement;
    const progressContainer = document.getElementById("progress-container") as HTMLElement;
    const downloadBtn = document.getElementById("download-btn") as HTMLButtonElement;

    let resultBlobUrl: string | null = null;

    downloadBtn.onclick = () => {
        if (resultBlobUrl) {
            const a = document.createElement("a");
            a.href = resultBlobUrl;
            a.download = `converted.${(document.getElementById("container") as HTMLSelectElement).value}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };

    fileInput.addEventListener('change', async () => {
        if (!fileInput.files || fileInput.files.length === 0) return;

        inputBox.style.display = "none";
        progressContainer.style.display = "block";

        const file = fileInput.files[0];
        const containerType = (document.getElementById("container") as HTMLSelectElement).value;
        const resolution = (document.getElementById("resolution") as HTMLSelectElement).value.split("x");
        const [vc, ac, mimeType] = formats[containerType];
        const width = parseInt(resolution[0], 10);
        const height = parseInt(resolution[1], 10);

        (document.getElementById("progress-resolution") as HTMLElement).textContent = `${width}x${height}`;
        (document.getElementById("progress-status") as HTMLElement).textContent = "Initializing transcoder...";

        const libav = await LibAV.LibAV({ noworker: true });

        let transcoder = new Transcoder({ libav });

        window.addEventListener('beforeunload', async () => {
            if (libav) await libav.terminate();
        });

        let totalDuration: number;

        transcoder.addEventListener('progress-init', (e: Event) => {
            const detail = (e as CustomEvent).detail;
            totalDuration = detail.totalDuration;
            (document.getElementById("progress-time") as HTMLElement).textContent =
                `00:00:00 / ${formatTime(totalDuration)}`;
            (document.getElementById("progress-status") as HTMLElement).textContent = "Starting transcoding...";
        });

        transcoder.addEventListener('progress', (e: Event) => {
            const { percent, processedDuration } = (e as CustomEvent).detail;

            (document.querySelector(".progress-percent") as HTMLElement).textContent = `${percent.toFixed(2)}%`;
            (document.querySelector(".progress-bar") as HTMLElement).style.width = `${percent.toFixed(2)}%`;
            (document.getElementById("progress-time") as HTMLElement).textContent =
                `${formatTime(processedDuration)} / ${formatTime(totalDuration)}`;

            const status = document.getElementById("progress-status") as HTMLElement;

            if (percent >= 100) {
                status.textContent = "Transcoding completed!";
                status.style.color = "#00a854";
                (document.querySelector(".progress-bar") as HTMLElement).style.background = "#00d97e";
                downloadBtn.style.display = "block";
            } else {
                status.textContent = "Transcoding in progress...";
            }
        });

        transcoder.addEventListener('error', (e: Event) => {
            const errorText = (e as CustomEvent).detail.error;
            const errorElem = document.getElementById("progress-error") as HTMLElement;
            errorElem.textContent = errorText;
            errorElem.style.display = "block";
            const status = document.getElementById("progress-status") as HTMLElement;
            status.textContent = "Transcoding failed!";
            status.style.color = "#e63757";
            (document.querySelector(".progress-bar") as HTMLElement).style.background = "#e63757";
        });

        try {
            console.time("transcode");
            const output = await transcoder.transcode(file, {
                containerType,
                vc,
                ac,
                width,
                height,
            });

            resultBlobUrl = URL.createObjectURL(new Blob([output.buffer], { type: mimeType }));
        } catch (error) {
            console.error("Transcoding failed:", error);
        } finally {
            console.timeEnd("transcode");
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    main().catch(console.error);
});
