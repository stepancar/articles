import os
import subprocess
import time


def process_videos():

    # Расширения видеофайлов для поиска
    video_extensions = ("_aud.mp4")
    to_formats = ["mp4"]

    # Находим все видеофайлы в текущей директории
    video_files = [f for f in os.listdir('.') if os.path.isfile(f) and f.lower().endswith(video_extensions)]

    # Обрабатываем каждый найденный файл
    for video_file in video_files:

        for format in to_formats:
            print(f"Processing {video_file}... to {format}")
            base_name, src_format = os.path.splitext(video_file)
            output_file =  f"{base_name[:-4]}_noaud.{format}"

            try:
                start_time = time.time()
                result = subprocess.run(
                    [
                        "ffmpeg",
                        "-i",
                        video_file,
                        "-c:v", "copy",
                        "-an",
                        output_file
                    ],
                    stdout=subprocess.PIPE,
                    stderr=subprocess.PIPE,
                    text=True,
                    check=True
                )
                end_time = time.time()
                elapsed_time = end_time - start_time
                print(f"Transcoding of {video_file} completed in {elapsed_time:.2f} seconds.")

            except subprocess.CalledProcessError as e:
                print(f"Error processing {video_file}: {e.stderr}")

#     print(f"All videos transcoded.Transcoded video were saved saved in {output_dir}/")



if __name__ == "__main__":
    process_videos()