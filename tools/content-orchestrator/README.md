# IZZY Content Orchestrator V1

This directory defines the lightweight contracts used to connect the existing IZZY content components without rewriting them.

## Architecture

DISCOVER -> ANALYZE -> LEARN -> PLAN -> CREATE -> QA -> APPROVE -> SCHEDULE -> PUBLISH -> MEASURE -> LEARN AGAIN

Existing/adjacent components:
- `skills/izzy-social-video-analyzer/` — analysis and IZZY Reel DNA.
- `tools/social-video-analyzer/` — local analysis runtime.
- Existing Carousel Engine — carousel rendering/production.
- IZZY Video Engine / Remotion — video rendering/production.
- Metricool — calendar, drafts, scheduling, publishing, and available performance data.

The orchestrator owns planning and routing. It does not own rendering or social publishing APIs.

## V1 contracts
- `schemas/content-brief.schema.json` — one content item's strategic/production contract.
- `schemas/content-week.schema.json` — weekly campaign plan.
- `schemas/performance.schema.json` — observed post-publication measurements.

## V1 data layout
- `data/content/patterns/`
- `data/content/weeks/`
- `data/content/performance/`

Directories are created naturally when the first real JSON records are committed. Avoid placeholder databases or dashboards in V1.

## Status lifecycle
`idea -> planned -> production -> qa -> approved -> draft -> scheduled -> published -> measured`

Approval remains an explicit gate between QA and distribution.

## First real flow
The first reference object is `IZZY-W43-001`, working title `Sacaste tu licencia… ¿y ahora qué?`.

Only verified facts should be stored in its record. Unknown Metricool identifiers, schedule timestamps, asset paths, and performance values remain absent until observed.
