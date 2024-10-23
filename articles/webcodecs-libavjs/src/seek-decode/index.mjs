/*
 * This (un)license applies only to this sample code, and not to
 * libavjs-webcodecs-bridge as a whole:
 *
 * This is free and unencumbered software released into the public domain.
 *
 * Anyone is free to copy, modify, publish, use, compile, sell, or distribute
 * this software, either in source code form or as a compiled binary, for any
 * purpose, commercial or non-commercial, and by any means.
 *
 * In jurisdictions that recognize copyright laws, the author or authors of
 * this software dedicate any and all copyright interest in the software to the
 * public domain. We make this dedication for the benefit of the public at
 * large and to the detriment of our heirs and successors. We intend this
 * dedication to be an overt act of relinquishment in perpetuity of all present
 * and future rights to this software under copyright law.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
class BufferStream extends ReadableStream {
    buf = [];
    res = null;

    constructor() {
        super({
            pull: async (controller) => {
                while (!this.buf.length) {
                    await new Promise(res => this.res = res);
                }
                const next = this.buf.shift();
                if (next !== null)
                    controller.enqueue(next);
                else
                    controller.close();
            }
        });
    }

    push(next) {
        this.buf.push(next);
        if (this.res) {
            const res = this.res;
            this.res = null;
            res();
        }
    }
}

const frameQueue = [];

let lastDrawTime = 0;

function queueAndDrawFrames(frame) {
    frameQueue.push(frame);
    
    if (!lastDrawTime) {
        lastDrawTime = performance.now();
        setTimeout(() => drawFrame(performance.now()), 1);
    }
}

function drawFrame(timestamp) {
    const elapsed = timestamp - lastDrawTime;
    const targetInterval = 0.003;

    if (elapsed >= targetInterval && frameQueue.length > 0) {
        const frame = frameQueue.shift();
        ctx.drawImage(frame, 0, 0);
        frame.close(); // Release the frame after drawing
        lastDrawTime = timestamp;
    }

    setTimeout(() => drawFrame(performance.now()), 1);
}

async function main() {
    // Get an input file
    const fileBox = document.getElementById("file");
    await new Promise(res => {
        fileBox.onchange = function() {
            if (fileBox.files.length)
                res();
        };
    });
    const file = fileBox.files[0];

    /* Prepare libav. We're using noworker here because libav is
     * loaded from a different origin, but you should simply
     * load libav from the same origin! */
    const libav = await LibAV.LibAV({noworker: true});
    debugger;
    await libav.mkreadaheadfile("input", new Blob([file]));

    // Start demuxer
    const [fmt_ctx, istreams] =
        await libav.ff_init_demuxer_file("input");
    const rpkt = await libav.av_packet_alloc();

    // Translate all the streams
    const iToO = [];
    const decoders = [];
    const decConfigs = [];
    const packetToChunks = [];
    
    for (let streamIndex = 0; streamIndex < istreams.length; streamIndex++) {
        const istream = istreams[streamIndex];
        iToO.push(-1);
        let streamToConfig, Decoder, packetToChunk;
        if (istream.codec_type === libav.AVMEDIA_TYPE_VIDEO) {
            streamToConfig = LibAVWebCodecsBridge.videoStreamToConfig;
            Decoder = VideoDecoder;
            packetToChunk = LibAVWebCodecsBridge.packetToEncodedVideoChunk;
        } else if (istream.codec_type === libav.AVMEDIA_TYPE_AUDIO) {
            streamToConfig = LibAVWebCodecsBridge.audioStreamToConfig;
            Decoder = AudioDecoder;
            packetToChunk = LibAVWebCodecsBridge.packetToEncodedAudioChunk;
        } else {
            continue;
        }

        // Convert the config
        const config = await streamToConfig(libav, istream);
        let supported;
        try {
            supported = await Decoder.isConfigSupported(config);
        } catch (ex) {}
        if (!supported || !supported.supported)
            continue;
        iToO[streamIndex] = decConfigs.length;
        decConfigs.push(config);

        // Make the decoder
        const stream = new BufferStream();
        const decoder = new Decoder({
            output: frame => {
                queueAndDrawFrames(frame);
                stream.push(frame)
            },
            error: error =>
                alert("Decoder " + JSON.stringify(config) + ":\n" + error)
        });
        decoder.configure(config);
        decoders.push(decoder);
    
        packetToChunks.push(packetToChunk);
    }

    if (!decoders.length)
        throw new Error("No decodable streams found!");

    const times = [3.5];


    // Demuxer -> decoder

// Demuxer -> decoder
(async () => {
    for (let i = 0; i < times.length; i++) {
        const time = times[i];
        
        // Time base
        const timeBase = istreams[0].time_base_num / istreams[0].time_base_den;
        const timestamp = time / timeBase;

        // Seek to the timestamp
        const seekFlags = libav.AVSEEK_FLAG_BACKWARD; // Seek backward to keyframe
        const p = libav.avformat_seek_file(fmt_ctx, 0, 0, 0, timestamp, 0, timestamp+1, 0);
        await p;

        // Flush the decoder to reset the state after seek
        await decoders[0].flush();

        // Continue reading frames until you reach the desired time
        const targetTime = time;
        const tolerance = 0.5; // 0.5-second tolerance
        let keyFrameChunkBefore = null;
        let frameFound = false;
        while (!frameFound) {
            const [res, packets] = await libav.ff_read_frame_multi(fmt_ctx, rpkt, {limit: 1});

            if (res === libav.AVERROR_EOF) break;

            for (const idx in packets) {
                const packet = packets[idx][0]; // Assuming one packet
                const pktTime = packet.dts / timeBase; // Get packet timestamp

                const chunk = packetToChunks[0](packet, istreams[idx]);
                if (chunk.type === 'key') {
                    keyFrameChunkBefore = chunk;
                }
                if (Math.abs(pktTime - targetTime) <= tolerance) {
                    frameFound = true;
                   
                    const decoder = decoders[idx];
                    if (!decoder) {
                        continue;
                    }
                    if (chunk.type === 'key') {
                        decoder.decode(chunk);
                    } else {
                        decoder.decode(keyFrameChunkBefore);
                        decoder.decode(chunk);
                    }
                    break;
                }
            }
        }  
    }

    for (let i = 0; i < decoders.length; i++) {
        await decoders[i].flush();
        decoders[i].close();
    }
})();
}

main();

