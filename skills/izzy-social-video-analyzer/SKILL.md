# IZZY Social Video Analyzer

## Purpose
Use this skill whenever Moisés asks to analyze, study, reverse-engineer, summarize, transcribe, compare, or learn from a social-media video or provides a video URL from Instagram, Facebook, TikTok, YouTube/Shorts, or a similar public video platform.

The goal is not merely to summarize the video. Recover the media/evidence when authorized and technically possible, then analyze the content as a marketing, sales, creative, funnel, and learning asset for IZZY.

## Trigger examples
- "revisa este reel/video"
- "analiza esto"
- "qué podemos aprender de este señor"
- "cómo hizo este video"
- "quiero hacer algo parecido"
- Instagram/Facebook/TikTok/YouTube URL accompanied by analysis intent
- uploaded MP4/MOV/screen recording accompanied by analysis intent

## Tool routing
### A. Uploaded/local video
If the video is already attached or locally available, DO NOT download it again. Inspect the supplied media directly. Use FFmpeg for audio extraction, metadata, thumbnails/keyframes, or format normalization when needed. Use faster-whisper for local speech-to-text when a transcript materially improves the analysis. Use PySceneDetect when scene/cut structure matters.

### B. Public social URL
Try the simplest authorized extraction path first:
1. yt-dlp — primary URL/media extractor for supported public video pages.
2. gallery-dl — fallback, especially for Instagram/social collections or metadata when appropriate.
3. Platform/public web evidence — use when extraction is unnecessary or a public transcript/caption is available.

Never claim the media was reviewed unless the actual video/audio/transcript/frames were successfully obtained. If extraction is blocked by login, permissions, anti-bot controls, or platform changes, state that clearly and ask for the video/upload or an authorized local-session workflow. Never ask the user to expose a password. Treat browser cookies/session files as secrets; never commit them to Git or include them in logs.

## Core open-source stack
- yt-dlp/yt-dlp — primary media extraction.
- FFmpeg — audio extraction, remux/transcode, thumbnails/keyframes.
- SYSTRAN/faster-whisper — local transcription.
- Breakthrough/PySceneDetect — scene/cut detection and representative frames.
- gallery-dl — secondary social/media extractor.

Prefer mature, actively maintained upstream projects. Do not add a new downloader merely because one URL fails; first diagnose whether the failure is authentication, rate limiting, unsupported extraction, or a platform change.

## Evidence pipeline
URL/upload -> media acquisition -> metadata -> audio/transcript -> scenes/keyframes -> evidence timeline -> analysis.

Preserve, when available:
- source URL/platform/creator
- title/caption/date
- duration
- transcript with timestamps
- representative frames/scenes
- on-screen text
- CTA and destination
- claims that may require verification

## Analysis schema: IZZY Reel DNA
Return the sections that matter for the user's goal, not boilerplate.

1. HOOK DNA
- first 1-3 seconds
- opening words/on-screen text/visual interruption
- curiosity, fear, aspiration, authority, controversy, story, question, etc.

2. AUDIENCE + PROBLEM
- likely intended audience
- pain/desire addressed
- awareness level

3. MESSAGE DNA
- central thesis
- story/teaching structure
- proof/authority/testimonial elements
- objections handled

4. OFFER DNA
- what is actually being offered
- product/service/category mentioned
- lead magnet/consultation/demo/event if any
- urgency/scarcity if any

5. CTA + FUNNEL DNA
- exact next action
- DM keyword, comment, link-in-bio, form, calendar, phone, WhatsApp, etc.
- infer downstream funnel only when evidence supports it; label inference explicitly

6. VISUAL DNA
- camera/framing
- B-roll
- captions/text treatment
- cuts/pacing
- music/audio pattern
- graphics/screenshots/social proof

7. SALES DNA
- persuasion mechanism
- discovery/qualification clues
- transition from education to offer
- closing/referral mechanisms when visible

8. COMPLIANCE / CLAIM CHECK
For insurance, annuities, investments, health, telecom, or regulated offers, flag claims that should be checked against carrier/platform/regulatory rules. Distinguish education from a recommendation. Do not copy misleading performance claims or unverified income claims.

9. IZZY ADAPTATION
- what to learn
- what NOT to copy
- a differentiated IZZY angle
- suggested hook/CTA/funnel adaptation
- production notes for Remotion/IZZY Video Engine when relevant

## Pattern library
When multiple videos from the same creator are analyzed, compare them rather than treating each as isolated. Track recurring hooks, topics, avatars, offers, CTAs, visual structures, proof mechanisms, posting series, and funnel behavior. The long-term output should answer questions such as: "What formula does this creator repeatedly use?" and "Which parts are adaptable to IZZY?"

## Integrity rules
- Separate observed evidence from inference.
- Never fabricate a transcript, scene, CTA, product, metric, or funnel step.
- Creator income/production claims are unverified unless independently supported.
- Do not bypass access controls or platform authentication.
- Use content for analysis/learning; do not reproduce copyrighted videos wholesale.
- If only a caption/page is accessible, say that the analysis is caption/page-level, not full-video analysis.

## Preferred user experience
Moisés should normally be able to paste a URL and say "revisa esto." Route automatically through this skill. Do not make him re-explain the pipeline each time. If URL extraction fails, request the smallest fallback: upload the video or screen recording.
