# IZZY Social Video Analyzer runtime

Evidence-building runtime for `skills/izzy-social-video-analyzer/SKILL.md`.

## Stack
- yt-dlp: primary public URL extraction
- gallery-dl: fallback
- FFmpeg/ffprobe: media normalization + metadata
- faster-whisper: timestamped transcript
- PySceneDetect: scene detection + representative frames

## macOS setup
```bash
brew install ffmpeg yt-dlp gallery-dl
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Run
```bash
python analyze_video.py 'https://www.instagram.com/reel/...' --out evidence/flavio-001
```
Or use an uploaded/local file:
```bash
python analyze_video.py /path/to/video.mp4 --out evidence/video-001
```

The output directory contains `manifest.json`, `ffprobe.json`, `audio.wav`, timestamped transcript files, and scene/keyframe evidence. Feed that evidence to the IZZY Social Video Analyzer skill for Hook/Audience/Message/Offer/CTA/Funnel/Visual/Sales/Compliance/IZZY Adaptation analysis.

## Authentication rule
Do not commit cookies, passwords, browser profiles, session tokens, downloaded media, or evidence folders. If a platform blocks public extraction, use an authorized local browser-session workflow or upload the video. Never paste session secrets into ChatGPT/GitHub.
