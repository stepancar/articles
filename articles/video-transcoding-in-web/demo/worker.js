
importScripts('https://cdn.jsdelivr.net/npm/@libav.js/variant-webcodecs@6.5.7/dist/libav-6.5.7.1-webcodecs.js');
importScripts('https://cdn.jsdelivr.net/npm/libavjs-webcodecs-bridge@0.3.2');
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

async function translateAllStreams({
                                     istreams,
                                     vc,
                                     ac,
                                     width,
                                     height,
                                     libav
                                   }) {
  const iToO = [];
  const decoders = [];
  const decoderStreams = [];
  const decConfigs = [];
  const packetToChunks = [];
  const encoders = [];
  const encoderStreams = [];
  const encoderReaders = [];
  const encConfigs = [];
  const chunkToPackets = [];
  const ostreams = [];
  for (let streamI = 0; streamI < istreams.length; streamI++) {
    const istream = istreams[streamI];
    iToO.push(-1);
    let streamToConfig, Decoder, packetToChunk,
      configToStream, Encoder, chunkToPacket;
    if (istream.codec_type === libav.AVMEDIA_TYPE_VIDEO) {
      streamToConfig = LibAVWebCodecsBridge.videoStreamToConfig;
      Decoder = VideoDecoder;
      packetToChunk = LibAVWebCodecsBridge.packetToEncodedVideoChunk;
      configToStream = LibAVWebCodecsBridge.configToVideoStream;
      Encoder = VideoEncoder;
      chunkToPacket = LibAVWebCodecsBridge.encodedVideoChunkToPacket;
    } else if (istream.codec_type === libav.AVMEDIA_TYPE_AUDIO) {
      streamToConfig = LibAVWebCodecsBridge.audioStreamToConfig;
      Decoder = AudioDecoder;
      packetToChunk = LibAVWebCodecsBridge.packetToEncodedAudioChunk;
      configToStream = LibAVWebCodecsBridge.configToAudioStream;
      Encoder = AudioEncoder;
      chunkToPacket = LibAVWebCodecsBridge.encodedAudioChunkToPacket;
    } else {
      continue;
    }

    // Convert the config
    const config = await streamToConfig(libav, istream);
    let supported;
    try {
      supported = await Decoder.isConfigSupported(config);
    } catch (ex) {
    }
    if (!supported || !supported.supported)
      continue;
    iToO[streamI] = decConfigs.length;
    decConfigs.push(config);

    // Make the decoder
    const stream = new BufferStream();
    decoderStreams.push(stream);
    const decoder = new Decoder({
      output: frame => stream.push(frame),
      error: error =>
        alert("Decoder " + JSON.stringify(config) + ":\n" + error)
    });
    decoder.configure(config);
    decoders.push(decoder);
    packetToChunks.push(packetToChunk);

    // Make the encoder config
    const encConfig = {
      codec: (istream.codec_type === libav.AVMEDIA_TYPE_VIDEO)
        ? vc : ac,
      // width: config.codedWidth,
      // height: config.codedHeight,
      width: width,
      height: height,
      numberOfChannels: config.numberOfChannels,
      sampleRate: config.sampleRate
    };
    encConfigs.push(encConfig);

    // Make the encoder
    const encStream = new BufferStream();
    encoderStreams.push(encStream);
    encoderReaders.push(encStream.getReader());
    const encoder = new Encoder({
      output: (chunk, metadata) => encStream.push({chunk, metadata}),
      error: error =>
        alert("Encoder " + JSON.stringify(encConfig) + ":\n" + error)
    });
    encoder.configure(encConfig);
    encoders.push(encoder);
    chunkToPackets.push(chunkToPacket);

    // Make the output stream
    ostreams.push(await configToStream(libav, encConfig));
  }
  return [iToO, decoders, decoderStreams, packetToChunks, encoders, encoderStreams, encoderReaders, chunkToPackets, ostreams];
}


async function transcodeVideo({
                                file,         // Входной файл (ArrayBuffer или Blob)
                                containerType,// Формат выходного
                                vc,           // Видео кодек (например, "vp09.00.10.08")
                                ac,           // Аудио кодек (например, "opus")
                                width,        // Ширина видео
                                height,       // Высота видео
                              }) {
  const libav = await LibAV.LibAV();
  console.log("blyaa",libav)
  console.log("Input data:", { file, container, vc, ac, width, height });

  const outputFile = "output." + containerType

  try {
    await libav.mkreadaheadfile("input", file);

    // Start demuxer
    const [ifc, istreams] =
      await libav.ff_init_demuxer_file("input");
    const rpkt = await libav.av_packet_alloc();
    const wpkt = await libav.av_packet_alloc();

    // Translate all the streams

    const [iToO, decoders, decoderStreams, packetToChunks, encoders, encoderStreams, encoderReaders, chunkToPackets, ostreams] = await translateAllStreams({
      istreams,
      vc,
      ac,
      width,
      height,
      libav
    });
    if (!decoders.length)
      throw new Error("No decodable streams found!");

    // Demuxer -> decoder
    (async () => {
      while (true) {
        const [res, packets] =
          await libav.ff_read_frame_multi(ifc, rpkt, {limit: 1});
        if (res !== -libav.EAGAIN &&
          res !== 0 &&
          res !== libav.AVERROR_EOF)
          break;

        for (const idx in packets) {
          if (iToO[idx] < 0)
            continue;
          const o = iToO[idx];
          const dec = decoders[o];
          const p2c = packetToChunks[o];
          for (const packet of packets[idx]) {
            const chunk = p2c(packet, istreams[idx]);
            while (dec.decodeQueueSize) {
              await new Promise(res => {
                dec.addEventListener("dequeue", res, {once: true});
              });
            }
            dec.decode(chunk);
          }
        }

        if (res === libav.AVERROR_EOF)
          break;
      }

      for (let i = 0; i < decoders.length; i++) {
        await decoders[i].flush();
        decoders[i].close();
        decoderStreams[i].push(null);
      }
    })();

    // Decoder -> encoder
    for (let i = 0; i < decoders.length; i++) {
      (async () => {
        const decStream = decoderStreams[i];
        const decRdr = decStream.getReader();
        const enc = encoders[i];
        const encStream = encoderStreams[i];

        while (true) {
          const {done, value} = await decRdr.read();
          if (done)
            break;

          /* Pointlessly convert back and forth, just to demonstrate those
           * functions */
          let frame;
          if (value.codedWidth) {
            frame = await LibAVWebCodecsBridge.videoFrameToLAFrame(value);
            value.close();
            frame = LibAVWebCodecsBridge.laFrameToVideoFrame(frame);
          } else {
            frame = await LibAVWebCodecsBridge.audioDataToLAFrame(value);
            value.close();
            frame = LibAVWebCodecsBridge.laFrameToAudioData(frame);
          }

          enc.encode(frame);
          frame.close();
        }

        await enc.flush();
        enc.close();
        encStream.push(null);
      })();
    }

    // We need to get at least one packet from each stream before we can mux
    let ofc, pb;
    {
      const starterPackets = [];
      for (let i = 0; i < ostreams.length; i++) {
        const encRdr = encoderReaders[i];
        const {done, value} = await encRdr.read();
        if (done)
          continue;
        const chunkToPacket = chunkToPackets[i];
        const ostream = ostreams[i];

        // Convert it
        const packet = await chunkToPacket(
          libav, value.chunk, value.metadata, ostream, i);
        starterPackets.push(packet);
      }

      // Make the muxer
      [ofc, , pb] = await libav.ff_init_muxer({
        filename: outputFile,
        open: true,
        codecpars: true
      }, ostreams);
      await libav.avformat_write_header(ofc, 0);

      // And pass in the starter packets
      await libav.ff_write_multi(ofc, wpkt, starterPackets);
    }

    // Now pass through everything else
    const encPromises = [];
    let writePromise = Promise.all([]);
    for (let i = 0; i < encoderReaders.length; i++) {
      encPromises.push((async () => {
        const encRdr = encoderReaders[i];
        const chunkToPacket = chunkToPackets[i];
        const ostream = ostreams[i];
        while (true) {
          const {done, value} = await encRdr.read();
          if (done)
            break;
          writePromise = writePromise.then(async () => {
            const packet = await chunkToPacket(
              libav, value.chunk, value.metadata, ostream, i);
            await libav.ff_write_multi(ofc, wpkt, [packet]);
          });
        }
      })());
    }

    await Promise.all(encPromises);
    await writePromise;

    // And end the stream
    await libav.av_write_trailer(ofc);

    // Clean up
    await libav.avformat_close_input_js(ifc);
    await libav.ff_free_muxer(ofc, pb);
    await libav.av_packet_free(rpkt);
    await libav.av_packet_free(wpkt);

    // Чтение выходного файла
    return await libav.readFile(outputFile);

  } finally {
    // Очистка
    await libav.terminate();
  }
}


self.onmessage = async (event) => {
  const {file, container, vc, ac, mimeType, width, height} = event.data;

  console.log("Input data:", { file, container, vc, ac, width, height });
  console.log("start transcode in workers")
  try {
    const output = await transcodeVideo({
      file,
      container,
      vc,
      ac,
      width,
      height
    });
    // Отправляем результат обратно в основной поток
    self.postMessage({ output }, [output]);
  } catch (error) {
    console.error("Transcoding failed:", error);
    self.postMessage({ error: error.message });
  }
}
;