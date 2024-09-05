#!/bin/bash

# Iterate over all video files in the current directory
for file in *.mp4; do
  # Define output file name (appends "_noaudio" to the original file name)
  output="${file%.mp4}_noaudio.mp4"

  # Remove audio from the video and save the output
  ffmpeg -i "$file" -an -c:v copy "$output"
  
  echo "Processed $file -> $output"
done