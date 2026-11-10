# Rollout report — beta.dc.gov → AEM Edge Delivery (replica)

Live origin: https://main--7ddb4c84--aemcoder.aem.live/ · publish decision: publish (all pages, redirects, nav/footer live)

## Pages
8 / 8 in scope delivered, verified and published (0 pending, 0 content-pending, 0 failed).

## Templates
4 page types, one gated archetype each: landing (`/`), listing (`/news`; siblings `/services`, `/events`), static (`/agency-directory`; siblings `/organizational-charts-…`, `/community-engagement-and-feedback`), unique (`/neighborhoods`).

## Blocks
25 block folders in the project (14 distinct content blocks from the rollout plan, plus header, footer, fragment and widget support).

## Quality
- Published-origin gate, all pages: 1440 → 8 PASS (pixel 0.81–3.93 %); 360 → 8 PASS (pixel 1.32–8.08 %); clipped 0, MISSING/HIDDEN 0 everywhere.
- Optimize: health 99/100 (seo 100, ai-search 100, cross-page 96); open P1 0 · P2 0 · P3 1 (shared meta description on 4 pages, kept verbatim from the source); 10 source-parity findings informational.
- Links: 0 internal 404; 23 out-of-scope nav/footer targets repointed to beta.dc.gov.

## To deliver / owner items
- Dynamic surface: 3 interim (site search hand-off ×2, GovDelivery signup host-bound), 2 awaiting the owner (feedback form endpoint, martech IDs) — see `stardust/dynamic-features.md`.
- Residual R-01 (index/neighborhoods 360 wrap junction) documented in the inconsistency register.
