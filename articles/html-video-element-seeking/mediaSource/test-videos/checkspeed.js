import {execSync} from 'node:child_process'
import fs from 'node:fs'


fs.rmSync('bbb_sunflower_1min_1080p_30fps_normal_alliframes.mp4', {force: true})
const command = 'ffmpeg  -i bbb_sunflower_1min_1080p_30fps_normal.mp4 -b:v -c:v h264_videotoolbox ./test/bbb_sunflower_1min_1080p_30fps_normal_alliframes' + Math.random() + '.mp4';

const startTimestamp = Date.now()
execSync(command)
const endTimestamp = Date.now()
console.log(`Execution time: ${endTimestamp - startTimestamp}ms`)
