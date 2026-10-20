#!/usr/bin/env python3
"""IZZY Social Video Analyzer - evidence builder.

Takes a public social-video URL or local video, builds an evidence package:
media, metadata, audio, transcript, scenes/keyframes. It does not generate the
marketing analysis itself; the IZZY skill consumes the evidence package.
"""
from __future__ import annotations
import argparse, json, shutil, subprocess, sys
from pathlib import Path


def run(cmd, check=True):
    print("+", " ".join(map(str, cmd)), file=sys.stderr)
    return subprocess.run(cmd, check=check, text=True, capture_output=True)


def require(name):
    if not shutil.which(name):
        raise SystemExit(f"Missing required executable: {name}")


def acquire(source: str, out: Path) -> Path:
    p = Path(source).expanduser()
    if p.exists():
        return p.resolve()
    require("yt-dlp")
    template = str(out / "source.%(ext)s")
    cmd = ["yt-dlp", "--no-playlist", "--write-info-json", "--write-description",
           "--write-thumbnail", "-o", template, source]
    r = run(cmd, check=False)
    if r.returncode != 0:
        require("gallery-dl")
        g = run(["gallery-dl", "-D", str(out), source], check=False)
        if g.returncode != 0:
            raise SystemExit("Media extraction failed with yt-dlp and gallery-dl. Upload the video or use an authorized local session; never expose passwords/cookies.")
    candidates = [x for x in out.glob("source.*") if x.suffix.lower() in {".mp4", ".mov", ".mkv", ".webm", ".m4v"}]
    if not candidates:
        candidates = [x for x in out.iterdir() if x.suffix.lower() in {".mp4", ".mov", ".mkv", ".webm", ".m4v"}]
    if not candidates:
        raise SystemExit("Extractor returned no supported video file.")
    return max(candidates, key=lambda x: x.stat().st_size)


def metadata(video: Path, out: Path):
    require("ffprobe")
    r = run(["ffprobe", "-v", "quiet", "-print_format", "json", "-show_format", "-show_streams", str(video)])
    (out / "ffprobe.json").write_text(r.stdout, encoding="utf-8")


def audio(video: Path, out: Path) -> Path:
    require("ffmpeg")
    wav = out / "audio.wav"
    run(["ffmpeg", "-y", "-i", str(video), "-vn", "-ac", "1", "-ar", "16000", str(wav)])
    return wav


def transcribe(wav: Path, out: Path, model: str):
    from faster_whisper import WhisperModel
    m = WhisperModel(model, device="auto", compute_type="int8")
    segments, info = m.transcribe(str(wav), vad_filter=True)
    rows=[]
    for s in segments:
        rows.append({"start": round(s.start,3), "end": round(s.end,3), "text": s.text.strip()})
    payload={"language": info.language, "language_probability": info.language_probability, "segments": rows}
    (out / "transcript.json").write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    (out / "transcript.txt").write_text("\n".join(f"[{r['start']:.1f}-{r['end']:.1f}] {r['text']}" for r in rows), encoding="utf-8")


def scenes(video: Path, out: Path):
    require("scenedetect")
    scene_dir=out / "scenes"; scene_dir.mkdir(exist_ok=True)
    r=run(["scenedetect", "-i", str(video), "detect-content", "list-scenes", "save-images", "-o", str(scene_dir)], check=False)
    (out / "scenedetect.log").write_text((r.stdout or "")+(r.stderr or ""), encoding="utf-8")


def main():
    ap=argparse.ArgumentParser()
    ap.add_argument("source", help="Public URL or local video path")
    ap.add_argument("--out", default="izzy-video-evidence")
    ap.add_argument("--model", default="small", help="faster-whisper model")
    args=ap.parse_args()
    out=Path(args.out).resolve(); out.mkdir(parents=True, exist_ok=True)
    video=acquire(args.source, out)
    metadata(video,out)
    wav=audio(video,out)
    transcribe(wav,out,args.model)
    scenes(video,out)
    manifest={"source":args.source,"video":str(video),"transcript":"transcript.json","metadata":"ffprobe.json","scenes":"scenes/"}
    (out/"manifest.json").write_text(json.dumps(manifest,indent=2),encoding="utf-8")
    print(json.dumps(manifest,indent=2))

if __name__=="__main__": main()
