import os
import subprocess
import json

def process_videos():

    output_dir = "json_info"
    

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    video_extensions = (".mp4", ".mkv", ".avi", ".mov", ".flv", ".wmv")

    video_files = [f for f in os.listdir('.') if os.path.isfile(f) and f.lower().endswith(video_extensions)]

    for video_file in video_files:
        print(f"Processing {video_file}...")

        base_name, _ = os.path.splitext(video_file)
        output_file = os.path.join(output_dir, f"{base_name}.json")
        
        try:
            result = subprocess.run(
                [
                    "ffprobe",
                    "-v", "quiet",
                    "-print_format", "json",
                    "-show_format",
                    "-show_streams",
                    video_file
                ],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True,
                check=True
            )
            

            with open(output_file, "w", encoding="utf-8") as json_file:
                json_file.write(result.stdout)
            
            print(f"Saved {output_file}")
        
        except subprocess.CalledProcessError as e:
            print(f"Error processing {video_file}: {e.stderr}")
    
    print(f"All videos processed. JSON files are saved in {output_dir}/")

if __name__ == "__main__":
    process_videos()