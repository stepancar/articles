#!/usr/bin/env python3
"""Mux two independently-encoded VP9 IVF streams (color + alpha) into a WebM
where the alpha rides as BlockAdditional (BlockAddID=1), preserving each
stream's own keyframe placement (deliberately misaligned).

Usage: mux_misaligned.py color.ivf alpha.ivf out.webm width height fps
"""
import struct, sys

def vint_size(v):
    for length in range(1, 9):
        if v < (1 << (7 * length)) - 1:
            return (v | (1 << (7 * length))).to_bytes(length, "big")
    raise ValueError

def uint_bytes(v):
    if v == 0:
        return b"\x00"
    out = b""
    while v:
        out = bytes([v & 0xFF]) + out
        v >>= 8
    return out

def sint_bytes(v):
    length = 1
    while not (-(1 << (8 * length - 1)) <= v < (1 << (8 * length - 1))):
        length += 1
    return v.to_bytes(length, "big", signed=True)

def elem(eid, payload):
    return bytes.fromhex(eid) + vint_size(len(payload)) + payload

def uelem(eid, v):
    return elem(eid, uint_bytes(v))

def selem(eid, s):
    return elem(eid, s.encode())

def read_ivf(path):
    d = open(path, "rb").read()
    assert d[:4] == b"DKIF"
    frames, pos = [], 32
    while pos + 12 <= len(d):
        size = struct.unpack("<I", d[pos:pos + 4])[0]
        frames.append(d[pos + 12:pos + 12 + size])
        pos += 12 + size
    return frames

def vp9_is_key(frame):
    b = frame[0]
    assert (b >> 6) & 0x3 == 2, "bad frame marker"
    assert not ((b >> 3) & 1), "show_existing_frame unexpected"
    return not ((b >> 2) & 1)

color = read_ivf(sys.argv[1])
alpha = read_ivf(sys.argv[2])
assert len(color) == len(alpha)
WIDTH, HEIGHT, FPS = int(sys.argv[4]), int(sys.argv[5]), int(sys.argv[6])

ebml_header = elem("1a45dfa3",
    uelem("4286", 1) + uelem("42f7", 1) + uelem("42f2", 4) + uelem("42f3", 8)
    + selem("4282", "webm") + uelem("4287", 4) + uelem("4285", 2))

info = elem("1549a966",
    uelem("2ad7b1", 1000000)
    + elem("4489", struct.pack(">d", len(color) * 1000.0 / FPS))
    + selem("4d80", "misaligned-mux") + selem("5741", "misaligned-mux"))

track = elem("1654ae6b", elem("ae",
    uelem("d7", 1) + uelem("73c5", 1) + uelem("83", 1) + uelem("9c", 0)
    + selem("86", "V_VP9")
    + uelem("55ee", 1)
    + elem("e0", uelem("b0", WIDTH) + uelem("ba", HEIGHT) + uelem("53c0", 1))))

blocks = b""
prev_t = 0
for i, (cf, af) in enumerate(zip(color, alpha)):
    t = round(i * 1000 / FPS)
    block = elem("a1", b"\x81" + struct.pack(">h", t) + b"\x00" + cf)
    additions = elem("75a1", elem("a6", uelem("ee", 1) + elem("a5", af)))
    group_payload = block + additions
    if not vp9_is_key(cf):
        group_payload += elem("fb", sint_bytes(prev_t - t))
    blocks += elem("a0", group_payload)
    prev_t = t

cluster = elem("1f43b675", uelem("e7", 0) + blocks)
segment = elem("18538067", info + track + cluster)
open(sys.argv[3], "wb").write(ebml_header + segment)
print(f"wrote {sys.argv[3]}: {len(ebml_header) + len(segment)} bytes, {len(color)} frames")
