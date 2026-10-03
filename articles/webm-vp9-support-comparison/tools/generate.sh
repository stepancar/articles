#!/bin/sh
# Generates the VP9 WebM test videos used by the demo page.
# Every file is 200x200, 2s, 10fps, solid #3366cc. Files with alpha have four
# vertical stripes at 0 / 10% / 50% / 100% opacity, chosen so that the expected
# 8-bit alpha is exactly 0 / 26 / 128 / 255 at every bit depth.
set -e
cd "$(dirname "$0")/../videos"

encode() { # name pix_fmt profile [alpha codes: a10 a50 amax [geq pix_fmt]]
    filter="color=c=0x3366cc:s=200x200:d=2:r=10,format=${7:-$2}"
    if [ -n "$4" ]; then
        filter="$filter,geq=lum='lum(X,Y)':cb='cb(X,Y)':cr='cr(X,Y)':a='if(lt(X,50),0,if(lt(X,100),$4,if(lt(X,150),$5,$6)))',format=$2"
    fi
    ffmpeg -hide_banner -loglevel error -y -f lavfi -i "$filter" \
        -c:v libvpx-vp9 -strict experimental -pix_fmt "$2" -profile:v "$3" -b:v 0 -crf 4 "$1.webm"
}

# Profile 0: 8-bit 4:2:0
encode vp9-p0-8bit-420              yuv420p      0
encode vp9-p0-8bit-420-alpha        yuva420p     0 26 128 255
# Profile 1: 8-bit 4:2:2 / 4:4:4
encode vp9-p1-8bit-422              yuv422p      1
encode vp9-p1-8bit-422-alpha        yuva422p     1 26 128 255
encode vp9-p1-8bit-444              yuv444p      1
encode vp9-p1-8bit-444-alpha        yuva444p     1 26 128 255
# Profile 2: 10/12-bit 4:2:0 (ffmpeg has no yuva420p12le)
encode vp9-p2-10bit-420             yuv420p10le  2
encode vp9-p2-10bit-420-alpha       yuva420p10le 2 104 514 1023
encode vp9-p2-12bit-420             yuv420p12le  2
# Profile 3: 10/12-bit 4:2:2 / 4:4:4
encode vp9-p3-10bit-422             yuv422p10le  3
encode vp9-p3-10bit-422-alpha       yuva422p10le 3 104 514 1023
encode vp9-p3-10bit-444             yuv444p10le  3
encode vp9-p3-10bit-444-alpha       yuva444p10le 3 104 514 1023
encode vp9-p3-12bit-444             yuv444p12le  3
# geq has no 12-bit YUVA support, so draw in 16 bits: 6568 / 32904 / 65528
# become 410 / 2056 / 4095 after conversion to 12 bits.
encode vp9-p3-12bit-444-alpha       yuva444p12le 3 6568 32904 65528 yuva444p16le
