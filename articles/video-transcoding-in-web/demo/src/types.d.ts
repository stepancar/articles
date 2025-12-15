declare namespace LibAV {
    interface LibAVOptions {
        noworker?: boolean;
        nowasm?: boolean;
        yesthreads?: boolean;
        nothreads?: boolean;
        base?: string;
        toImport?: any;
        factory?: any;
        variant?: string;
        wasmurl?: string;
    }

    interface LibAVInstance {
        // AVFormat
        ff_init_muxer(opts: {
            oformat?: number;
            format_name?: string;
            filename?: string;
            device?: boolean;
            open?: boolean;
            codecpars?: boolean;
        }, streamCtxs: [number, number, number][]): Promise<[number, number, number, number[]]>;

        ff_write_multi(oc: number, pkt: number, inPackets: (Packet | number)[], interleave?: boolean): Promise<void>;
        ff_free_muxer(oc: number, pb: number): Promise<void>;
        ff_init_demuxer_file(filename: string, fmt?: string): Promise<[number, Stream[]]>;
        ff_read_frame_multi(fmt_ctx: number, pkt: number, opts?: {
            limit?: number;
            unify?: boolean;
            copyoutPacket?: string;
        }): Promise<[number, Record<number, Packet[]>]>;

        // AVCodec
        ff_init_encoder(name: string, opts?: {
            ctx?: AVCodecContextProps;
            options?: Record<string, string>;
        }): Promise<[number, number, number, number, number]>;
        ff_encode_multi(ctx: number, frame: number, pkt: number, inFrames: (Frame | number)[], fin?: boolean): Promise<Packet[]>;
        ff_free_encoder(c: number, frame: number, pkt: number): Promise<void>;

        ff_init_decoder(name: string | number, config?: {
            codecpar?: number | CodecParameters;
            time_base?: [number, number];
        }): Promise<[number, number, number, number]>;
        ff_decode_multi(ctx: number, pkt: number, frame: number, inPackets: (Packet | number)[], config?: boolean | {
            fin?: boolean;
            ignoreErrors?: boolean;
            copyoutFrame?: string;
        }): Promise<Frame[]>;
        ff_free_decoder(c: number, pkt: number, frame: number): Promise<void>;

        // AVFilter
        ff_init_filter_graph(filters_descr: string, input: FilterIOSettings | FilterIOSettings[], output: FilterIOSettings | FilterIOSettings[]): Promise<[number, number | number[], number | number[]]>;
        ff_filter_multi(srcs: number | number[], buffersink_ctx: number, framePtr: number, inFrames: (Frame | number)[] | (Frame | number)[][], config?: boolean | {
            fin?: boolean;
            copyoutFrame?: string;
        }): Promise<Frame[]>;
        ff_decode_filter_multi(ctx: number, buffersrc_ctx: number, buffersink_ctx: number, pkt: number, frame: number, inPackets: (Packet | number)[], config?: boolean | {
            fin?: boolean;
            ignoreErrors?: boolean;
            copyoutFrame?: string;
        }): Promise<Frame[]>;

        // Filesystem
        readFile(filename: string): Promise<Uint8Array>;
        writeFile(filename: string, data: Uint8Array): Promise<void>;
        unlink(filename: string): Promise<void>;
        mkdev(filename: string, mode?: number): Promise<void>;

        // Reader device
        mkreaderdev(name: string, mode?: number): Promise<void>;
        mkblockreaderdev(name: string, size: number): Promise<void>;
        ff_reader_dev_send(name: string, data: Uint8Array): Promise<void>;
        ff_block_reader_dev_send(name: string, position: number, data: Uint8Array): Promise<void>;
        ff_reader_dev_waiting(name?: string): Promise<boolean>;

        // Writer device
        mkwriterdev(name: string, mode?: number): Promise<void>;
        mkstreamwriterdev(name: string, mode?: number): Promise<void>;

        // CLI
        ffmpeg(...args: (string | string[])[]): Promise<number>;
        ffprobe(...args: (string | string[])[]): Promise<number>;

        // Constants
        AVMEDIA_TYPE_VIDEO: number;
        AVMEDIA_TYPE_AUDIO: number;
        EAGAIN: number;
        AVERROR_EOF: number;
        libavjsMode: string;
        terminate(): Promise<void>;
    }

    function LibAV(options?: LibAVOptions): Promise<LibAVInstance>;
    function target(options?: LibAVOptions): string;
    const isWebAssemblySupported: boolean;
    const isThreadingSupported: boolean;
    let base: string;
    let onblockread: (name: string, position: number, length: number) => void;
    let onwrite: (name: string, position: number, buffer: Uint8Array) => void;
}

// Interfaces for complex types
interface AVCodecContextProps {
    bit_rate?: number;
    width?: number;
    height?: number;
    sample_rate?: number;
    channels?: number;
}

interface Stream {
    index: number;
    codecpar: CodecParameters;
    time_base: [number, number];
    duration: number;
}

interface CodecParameters {
    codec_type: number;
    codec_id: number;
}

interface Packet {
    pts: number;
    dts: number;
    data: Uint8Array;
    stream_index: number;
    libavjsTransfer?: ArrayBuffer[];
}

interface Frame {
    pts: number;
    data: Uint8Array[];
    linesize: number[];
    width?: number;
    height?: number;
    format?: number;
    sample_rate?: number;
    channels?: number;
    libavjsTransfer?: ArrayBuffer[];
}

interface FilterIOSettings {
    name: string;
    type: 'video' | 'audio';
    width?: number;
    height?: number;
    pixel_format?: number;
    sample_rate?: number;
    sample_format?: number;
    channel_layout?: number;
    time_base?: [number, number];
}

// Declare global LibAV object
declare const LibAV: {
    LibAV: (options?: LibAV.LibAVOptions) => Promise<LibAV.LibAVInstance>;
    isWebAssemblySupported: boolean;
    isThreadingSupported: boolean;
    base: string;
    target: (options?: LibAV.LibAVOptions) => string;
};

// Declare LibAVWebCodecsBridge if needed
declare const LibAVWebCodecsBridge: {
    videoStreamToConfig: any;
    packetToEncodedVideoChunk: any;
    configToVideoStream: any;
    encodedVideoChunkToPacket: any;
    audioStreamToConfig: any;
    packetToEncodedAudioChunk: any;
    configToAudioStream: any;
    encodedAudioChunkToPacket: any;
};

interface TranscoderProgressEvent {
    stage: 'start' | 'processing' | 'complete' | 'error';
    percent: number;
    processedDuration: number;
    totalDuration: number;
    error?: string;
    resolution?: string;
}