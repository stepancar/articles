#!/bin/bash

# Directory containing the MP4 files
input_directory="./"

# Output text file
output_file="video_info.md"

# URL prefix for the Markdown links
url_prefix="https://media.githubusercontent.com/media/stepancar/articles/main/articles/html-video-element-seeking/mediaSource/test-videos/"

# Write the header to the output file
echo -e "| filename | iframes count | pframes count | bframes count | size in mb | has audio |" > "$output_file"
echo -e "| -------- | ------------- | ------------- | ------------- | ---------- | -------- |" >> "$output_file"

# Iterate over each MP4 file in the directory
for file in "$input_directory"/*.mp4; do
  # Extract filename without path
  filename=$(basename "$file")
  file_url="${url_prefix}${filename}"
  md_link="[$filename]($file_url)"

  # Get frame counts
  iframe_count=$(ffprobe -v error -select_streams v:0 -show_entries frame=pict_type -of csv=p=0 "$file" | grep -c I)
  pframe_count=$(ffprobe -v error -select_streams v:0 -show_entries frame=pict_type -of csv=p=0 "$file" | grep -c P)
  bframe_count=$(ffprobe -v error -select_streams v:0 -show_entries frame=pict_type -of csv=p=0 "$file" | grep -c B)

  # Get file size in MB
  file_size_mb=$(du -m "$file" | cut -f1)

  # Check if the file has audio
  has_audio=$(ffprobe -v error -select_streams a:0 -show_entries stream=codec_type -of default=noprint_wrappers=1:nokey=1 "$file" | grep -c 'audio' | awk '{if ($1 > 0) print "yes"; else print "no"}')

  # Write the information to the output file
  echo -e "| $md_link | $iframe_count | $pframe_count | $bframe_count | $file_size_mb | $has_audio |" >> "$output_file"
done

echo "Report generated: $output_file"
