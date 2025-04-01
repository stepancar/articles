import os
import subprocess
import time


def process_videos():
    output_dir = "transcoded_video"

    metrics_filename = "metrics.csv"
    metrics_arr = [["from","to","resolution","time"]]

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        os.makedirs(output_dir)

    # Расширения видеофайлов для поиска
    video_extensions = ("mp4","mkv", "avi", "mov", "flv", "wmv")
    to_formats = (
    "avi",
    "mpg",
    "flv",
    "webm",
    "mkv")
    for format in to_formats:
        if not os.path.exists(f"{output_dir}/{format}"):
                os.makedirs(f"{output_dir}/{format}")

    vids_transcode = tuple("noaud."+i for i in video_extensions)
    video_files = [f for f in os.listdir('.') if os.path.isfile(f) and f.lower().endswith(vids_transcode)]

    # Обрабатываем каждый найденный файл
    for i in range(5):
        for video_file in video_files:
            for format in to_formats:
                print(f"Processing {video_file}... to {format}")
                base_name, src_format = os.path.splitext(video_file)
                resolution = "*".join(base_name.split("_")[1:])
                output_file = os.path.join(output_dir, f"{format}/{base_name}{i+1}.{format}")

                try:
                    start_time = time.time()
                    result = subprocess.run(
                        [
                            "ffmpeg",
                            "-i",
                            video_file,
                            output_file
                        ],
                        stdout=subprocess.PIPE,
                        stderr=subprocess.PIPE,
                        text=True,
                        check=True
                    )
                    end_time = time.time()
                    elapsed_time = end_time - start_time
                    metrics_arr.append([src_format[1:],format,resolution,f"{elapsed_time:.2f}"])
                    print(f"Transcoding of {video_file} completed in {elapsed_time:.2f} seconds.")

                except subprocess.CalledProcessError as e:
                    print(f"Error processing {video_file}: {e.stderr}")

    print(f"All videos transcoded.Transcoded video were saved saved in {output_dir}/")
    with open(metrics_filename, "w", encoding="utf-8") as metrics_file:
        for m in metrics_arr:
            metrics_file.write(",".join(m)+"\n")



if __name__ == "__main__":
    process_videos()