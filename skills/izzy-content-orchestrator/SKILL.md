# IZZY Content Orchestrator V1

## Purpose
Use this skill to plan and coordinate IZZY social content across the existing analysis, carousel, video, QA, scheduling, publishing, and performance layers.

The Orchestrator is a director, not a renderer. It MUST NOT reimplement the Social Video Analyzer, Carousel Engine, Video Engine, Metricool, or CRM. It creates structured plans and hands work to the appropriate existing component.

## Core loop
DISCOVER -> ANALYZE -> LEARN -> PLAN -> CREATE -> QA -> APPROVE -> SCHEDULE -> PUBLISH -> MEASURE -> LEARN AGAIN

## Responsibilities
1. Decide what content should be produced.
2. Define audience, campaign, objective, format, hook, CTA, source patterns, and intended distribution.
3. Build a Content Week plan without repeating recent topics unnecessarily.
4. Route analysis to IZZY Social Video Analyzer when source media must be studied.
5. Route carousel production to the existing Carousel Engine.
6. Route reel/video production to the existing IZZY Video Engine/Remotion workflow.
7. Require unified QA before distribution.
8. Keep approval separate from scheduling/publishing.
9. Use Metricool as the distribution/calendar/performance layer, not as the strategy engine.
10. Feed observed performance back into the Pattern Library.

## Non-goals / guards
- Do not modify FlowSuiteCRM in V1.
- Do not rewrite working content engines.
- Do not create a new dashboard or database in V1.
- Do not publish content merely because it passed QA; preserve an explicit approval state unless Moisés explicitly authorizes publishing.
- Do not invent performance metrics, best times, source patterns, or compliance status.
- Keep observed evidence separate from inference.

## Content Week
A Content Week is the planning unit for a campaign week. It should capture:
- week ID
- campaign
- audience
- objectives
- content items
- day/date when known
- format
- status
- scheduling/distribution state

Recommended lifecycle:
IDEA -> PLANNED -> PRODUCTION -> QA -> APPROVED -> DRAFT -> SCHEDULED -> PUBLISHED -> MEASURED

## Content item contract
Each content item should be representable with:
- content_id
- campaign
- audience[]
- objective[]
- format
- topic
- hook
- CTA
- source_patterns[]
- engine
- brief/storyboard references when applicable
- QA results: brand, copy, compliance, dimensions/assets
- distribution targets
- Metricool state/scheduled time when known
- performance state/metrics when observed

## Planning rules
- Start with business objective and audience, not visual format.
- Select format because it serves the objective.
- Prefer patterns supported by analyzed evidence or prior performance.
- Avoid repeating the same topic/hook/CTA pattern too frequently unless intentional testing is documented.
- Treat best-time recommendations as inputs to planning, not strategy by themselves.
- A weekly plan should have enough variety to test hooks, formats, and CTAs while remaining coherent around the campaign.

## QA gate
Before APPROVED, check as applicable:
- brand consistency
- spelling/copy
- mobile legibility and safe zones
- dimensions/asset completeness
- CTA alignment with objective
- insurance/financial/health/telecom compliance risks
- no unsupported earnings/performance/product claims
- no broken or missing media

A failed critical QA item blocks approval.

## Distribution contract
Metricool is the execution layer for drafts, calendar, scheduling, publishing, and available performance data. The Orchestrator decides what/why; Metricool handles when/where after strategy and approval.

## Learning loop
After publication, store only observed metrics. Compare results by audience, campaign, format, hook family, CTA family, topic, and source pattern. Promote recurring evidence-backed structures into the Pattern Library; do not declare a pattern 'winning' from one isolated post without context.

## V1 storage
Use repository-backed structured files under data/content/ for patterns, weeks, and performance. Keep V1 simple and inspectable before introducing a database.

## First reference flow
Use the real content item 'IZZY-W43-001 — Sacaste tu licencia… ¿y ahora qué?' as the first documented end-to-end example when its verified assets, Metricool state, schedule, and performance data are available. Never invent missing values.
