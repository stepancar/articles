#!/bin/bash
# Start time in milliseconds
start_time=$(($(gdate +%s%3N)))

# Run ffmpeg command
ffmpeg -i bbb_sunflower_7sec_1080p_30fps_normal.mp4 -g 1 -c:v libx264 -preset fast -crf 23 bbb_sunflower_7sec_1080p_30fps_normal_alliframes.mp4 2>ffmpeg.log

# End time in milliseconds
end_time=$(($(gdate +%s%3N)))

# Calculate duration in milliseconds
duration_ms=$((end_time - start_time))

echo "ffmpeg ran for $duration_ms milliseconds"

# Optionally print ffmpeg log file
echo "FFmpeg log:"
cat ffmpeg.log