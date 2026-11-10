# Journal — beta.dc.gov replica

## Extract — 8 pages captured live, typed into 4 templates (2026-11-06)

- `crawl.mjs --pages` (8 site-plan URLs, --dynamics): 8/8 captured, Playwright provenance 8/8, real Chrome headless, no bot wall.
- Vision check: all 8 pages ok. The home page carries a timed GovDelivery subscription overlay (`#prefix-overlay-outer`, close `.prefix-overlay-close`). Every gate passes `--dismiss .prefix-overlay-close`.
- Census at 1440 and 360 (`_computed-styles.json`). Palette: primary #03438d, accent #0774e4, navy #053068, canvas #e8ebf1. Type: Neue Haas Grotesk Display/Text, commercial and self-hosted by the source without CORS, so a substitute stack is used with the brand family name kept first.
- cap-probe: the model is fluid, with module caps of 1920 (home, neighborhoods) and 1464 (sidebar pages). It differs per template; recorded in DESIGN.json `extensions.breakpoints`.
- Page types: landing (index), unique (neighborhoods), listing (services, news, events), static (org-charts, agency-directory, community-engagement).
- 17 module candidates in DESIGN.json `extensions.modules`.
- Decision: the 8-page scope is small, so first-page-first's two-track opening was not used. The phases run sequentially, and home is recreated first.

## Preserve direction — spec promoted verbatim, register R-01, dynamics detect + triage (2026-11-06)

- Promoted current/PRODUCT.md, DESIGN.md and DESIGN.json to the root verbatim. direction.md records preserve mode, hands-off assumptions A1–A3 and the publish decision.
- Register: one applied entry, R-01, the licensed Neue Haas Grotesk substitution. Otherwise a pure replica.
- Dynamics detect: 18 findings over 4 pages. Triage: 21 draft rows curated into 13 in dynamic-features.md, every row dispositioned. The owner batch D1–D4 (feedback backend, tags, search scope, news depth) ships on interim tiers.

## Source-fidelity gate — home (landing) archetype gated (2026-11-06)

- Method: markup is re-emitted from the captured DOM through a whitelist (design-system classes, content attributes, rehosted media; CMS view wrappers keep their box but lose their classes). Component CSS is lifted from the theme by rule matching against the prototype plus its JS-state DOM snapshots (`stardust/replica/work/lift-used.cjs`). That keeps the source's clamp/cqw sizing model. Chrome JS covers the header switch at 1100.01px, the short header, the carousel mount below 728px, tabs and the video toggle.
- R-01: metric-matched local fallbacks (`nhg-*-fallback`, size-adjust from canvas advance ratios measured on the live faces).
- 1440: 1.28% pixel, Δh 1px, content-diff 0 🔴 / 0 🟡, clip 0, cap-probe PASS. 360: 16.28% raw, Δh 25px. All of it is explained by one paragraph wrap junction (R-01). Aligned crops come to 2.93% / 5.64%. Logged as a residual.
- Motion: 22 parity, 1 dead (jump-links class at hidden widths).

## Recreate — News (listing) archetype gated; shared R-01 metrics retuned (2026-11-06)

- The listing grid (side filters + results) depends on `views-element-container` / `view` / `js-form-item` hooks; the emitter keeps them now (CMS wrappers otherwise unchanged). `lift-used.cjs` takes `LIFT_KEEP` so earlier JS-state lifts stay in `lifted.css`.
- R-01 fallback metrics: ascent/descent overrides are scaled by size-adjust, so they are now divided by it (mixed-weight lines were 1px short). Digits, space and comma/period get their own unicode-range faces with measured ratios. Letter ratios are measured on letters only. text 400 and display 600 sit at the wrap-junction optimum (103.6% / 93.3%).
- News: 1440 0.86% Δh 1, 360 2.17% Δh 1, content-diff 0 🔴 / 0 🟡, clip 0, cap PASS, motion 9 parity. Home re-gated: 1440 2.32% Δh -1 PASS; 360 11.71% Δh -11 (R-01 residual, was 16.28% / 25).

## Recreate — Agency directory (static) archetype gated (2026-11-06)

- Built on the shared canon in one round: 1440 1.32% Δh 1 PASS; 360 7.91% Δh 22, logged as an R-01 residual. One list item wraps on live at 292.6px in a 292px column. The text-400 ratio that would force the wrap breaks the footer on every desktop page. Content-diff 0 🔴 / 0 🟡, clip 0, cap PASS, motion 7 parity.

## Recreate — all four archetypes gated; Neighborhoods (unique) closes the phase (2026-11-06)

- Neighborhoods: 1440 1.21% Δh 1 PASS; 360 6.34% Δh 22 (R-01 residual: the Ward 7 paragraph wraps one line less), cap PASS, motion 5 parity.
- The text-400 ratio went back to its corpus mean (105.2%), with one scoped R-01 compensation on the footer social column (registered). That resolved Agency Directory 360 (3.15% Δh 1).
- Prototype table (gate-all --stage prototype): 1440 4/4 PASS; 360 3/4. Home 360 fails at 11.68% Δh -11: a tabular-"1" wrap junction plus two others, all R-01 and documented in progress.json.

## A-inventory — 8 pages inventoried, 4 archetypes to deliver first (2026-11-06)

- The migrate plan unit rendered the 4 gated archetypes into `stardust/migrated/`. The canon tokens are in `stardust/canon/canon.css`, and each page's modules[] is declared. Rollout inventory: 8 pages, 4 pending archetypes, 4 content-pending siblings. DA target aemcoder/7ddb4c84@main.

## B-block — 14 distinct blocks, each converted once (2026-11-06)

- blocks.mjs + plan.mjs: 14 module blocks over 17 instances. Reused: feedback, hero-simple, emblem. Delivery is representative-first.

## B2-dynamic — dynamic surface re-verified against the migrated tree (2026-11-06)

- dynamics-plan with the EDS target origin and the migrated tree: 18 findings (self 5, owner batch 10, already delivered 3, host-bound 0). The curated 13-row `stardust/dynamic-features.md` still covers all of them. Blocks to build in C: feedback form, services filter. Widgets: GovDelivery overlay, site search (interim link to the source search), gtranslate. Chrome menus and drawer are runtime under the header contract.

## C-deliver — foundation unit live and frozen (2026-11-06)

- C0 subagent: styles and fonts (R-01 fallback faces), header and footer blocks, and the nav/footer DA documents, published with noindex. Lint is clean; pushed ab3a592. Chrome parity on the published /footer shell: 1440 13 deltas (R-01 widths), 360 0. Class names are kebab-mapped (`_x`→`x`, `--x`→`mod-x`, `__`→`-`); blocks must lift through the same mapping (`stardust/.work/rollout/probes/split-lifted.mjs`). Crop-compare of the bands is deferred to the first archetype page.

## C-deliver — home archetype live and gated on the published origin (2026-11-06)

- 10 blocks, generated by an encoder (`stardust/.work/rollout/probes/gen-index.mjs`, slot engine copied per block, EW round-trip clean, 202/202 texts editable). Published gate: 1440 3.93% Δh 0.6%, 360 7.27% Δh 0.2%, crop header 0.50% / footer 1.41%. Video autoplay and the Juicer live embed are restored. The gate needs `--recapture-origin --recapture-eds` because the live feed drifts.

## C-deliver — news (listing) archetype live and gated on the published origin (2026-11-06)

- 3 blocks from `stardust/.work/rollout/probes/gen-news.mjs` (a copy of the index encoder that keeps classed and span wrappers inside text slots): hero-simple, view-listing, emblem-section. Round-trip 79/79 editable. Published gate: 1440 0.86% Δh 1 px, 360 2.09% Δh 1 px, clipped 0, MISSING+HIDDEN 0. Round 1 hid pager page 3 at 360, because the source's `@container` neighbour rules key on `data-num`, which the capture had dropped. Round 2 found `:before:where(…)` scoping invalid. The same scoping fix went into hero-home: the jump links, shown only at 1800 px and wider.

## Migrate render — listing siblings (Services, Events) rendered from the News archetype (2026-11-06)

- The variance probe against /news found real template deltas. Services has a hero-stack hero, a card grid and a load-more pager. Events has no filters, dark image slabs, a load-more pager and the node-feedback band in place of the emblem. These are budgeted as one new block (hero-stack), two view-listing variants (`grid`, `media`) and a reuse of the index feedback block. There are no per-page forks.
- The structural clones (`make-sibling.mjs`) use the news prototype shell plus each page's captured node__l. Both were rendered as A′ siblings. Content-diff from capture to render shows 🔴 0, and the only 🟡 are the header language options, the same as the gated canon. The 5 event images were fetched into prototypes/assets/media.

## C-deliver — listing cluster (Services, Events) live and gated (2026-11-06)

- The cluster subagent added the hero-stack block and gave view-listing per-variant templates: `grid` for Services and `media` for Events. The default template is byte-identical, so /news did not change. Events reuses the index feedback block. Published gates: Services 1440 1.37% / 360 2.25%; Events 1440 0.81% / 360 1.32%; /news re-gated at 0.86% / 2.09%. All rows have clipped 0 and MISSING+HIDDEN 0. Events needed one fix round: the image rules now also match through EDS `<picture>`, and the node-bottom spacing was added. Re-generate view-listing only through `gen-listing.mjs`; gen-news.mjs would drop the variants.

## C-deliver — agency directory (static) archetype live and gated (2026-11-06)

- One new block, sidebar-layout. The main column is free-form, the sidebar cards are repeat units, and hero-simple and feedback are reused unchanged. Published gate: 1440 1.37% Δh 1, 360 3.15% Δh 1, clipped 0, MISSING+HIDDEN 0. One fix round put back the gap above the feedback band that the source's node-bottom carries. Header scroll morph, link hover and the feedback form were all checked on preview.

## Migrate render — static siblings rendered from the Agency Directory archetype (2026-11-06)

- The variance probe against /agency-directory found that both siblings use the hero-stack hero, which /services already ships. Community engagement keeps the sidebar layout with a shorter column. The org-charts page has no sidebar, so its body composition is new to this template. Both pages were cloned from their captures as A′ siblings. Content-diff from capture to render shows 0 🔴, and the main root has no 🟡.

## C-deliver — static cluster (Org charts, Community engagement) live and gated (2026-11-06)

- One new block, accordion-stack, with 9 panels and Toggle all, observed to behave like the source. Community engagement uses the sidebar-layout variant `mist`. hero-stack, feedback and emblem-section are reused. Published gates: org charts 1440 0.91% / 360 8.08% Δh 19, where the residual is one R-01 wrap junction (263.5 vs 267 px of a 264 px box); community engagement 0.88% / 1.47%. All rows have clipped 0 and MISSING+HIDDEN 0. No live page's output changed, because the default templates are byte-identical.

## C-deliver — neighborhoods (unique) archetype live and gated (2026-11-06)

- Two new blocks, hero-image and link-card-grid, plus an emblem-section `plain` variant; the page has no feedback cards. Published gate: 1440 1.21% Δh 1, 360 6.35% Δh 22. That is the prototype's R-01 wrap residual, one Ward 7 paragraph line. Clipped 0, MISSING+HIDDEN 0, no fix rounds. All 8 pages are now live; the roster gate-all run follows.

## C-deliver — roster gate-all on the published origin (2026-11-06)

- All 8 delivered pages were gated together, reusing captures: 1440 8 PASS / 0 FAIL, 360 8 PASS / 0 FAIL. Coverage was updated from both summaries. The C-final unit is next: check, foundation requests, and the C-deliver end.

## C-deliver — C-final: header behaviour applied, C-deliver closed (2026-11-06)

- The foundation-freeze check passed. Running chrome-compare against the header contract found every header toggle dead on the build (16 errors). The prototype had never wired menus, drawers or alerts, and the gates only measure the header at rest.
- One foundation request was applied once. The live header's toggle behaviour was implemented after observing it: mutually exclusive drawers with a scroll lock, Escape closing only the search drawers, the Government dropover closing on an outside click, accordions, and the dismiss buttons. The nav, i-menus and search now move between the large and small header slots. 133 open-state and small-drawer rules were ported from the live CSS, renamed `__`→`-`, `--x`→`mod-x`. Commit be72451, freeze re-taken.
- Verification: a browser probe with the code routed to the published page opens every contract toggle at 1440 and 390, and the open Government panel and mobile drawer match the live crops. The machine's browser egress cache (Cloudflare HIT, max-age 7200) still serves the 19:35 header to Chromium, so the live-host chrome-compare and the archetype re-gate move to E-full-site.

## D-site — site assembled, redirects wired, root answers (2026-11-06)

- The source root serves a page, so `/` is delivered from the `index` document and the sheet has no `/` row. `curl -sIL` on the aem.page root ends in 200.
- Redirects sheet: the source answers 301 from `<path>/` to `<path>`, which the EDS build answered with 404. `stardust/redirects.tsv` now carries 7 trailing-slash rows (no spec knowledge exists for seed-redirects). They went through PUT /redirects.json → preview → live, and `/news/` now answers 301 → `/news`.
- `/nav` and `/footer` are published, both with `Robots: noindex`. assemble.mjs: 8 expected URLs. `--verify-origin` shows the served sitemap at 8, equal to the assembled set, with 0 extra and 0 missing.

## D2-dynamic — dynamic surface wired and replayed (2026-11-06)

- Found unwired: both search forms had no action (a submit reloaded the EDS home page), and the listing filter, gtranslate and the GovDelivery overlay were not delivered. Fixed: the search forms GET https://beta.dc.gov/search with `key` (as on the source); a keyword filter over the authored rows (/services "permit": 19 → 1); gtranslate dropdown.js runs with the source settings (1440 Spanish, 390 Chinese, verified); the GovDelivery overlay script is loaded as on the source but stays silent off *.dc.gov (vendor cookie domain).
- parity.json has 14 features. The replay passes 2/2 checks (juicer 6 items, 0 page errors over 8 pages). The other rows carry verifiedBy numbers or an owner decision.
- CDN note: a browser request carrying `Origin` gets a Cloudflare-cached variant of block/script JS that the admin purge does not clear (max-age 7200; header.js, hero-home.js, scripts.js expire ≈ 00:10, view-listing.js ≈ 00:30). Verification therefore routed the repo code onto the published page. The browser re-checks (chrome-compare, the archetype re-gate) run once those expire.

## E-full-site — in progress: verify 8/8, re-gate waits for the CDN expiry (2026-11-06)

- verify.mjs on the live origin: 8 checked, 8 verified, 0 failed.
- Still open in this phase (started 22:38, no second start): from ≈00:30, after the Origin-variant JS copies expire, re-run `gate.sh <archetype> … pub2 --full` at 1440 and 360 for index, news, agency-directory and neighborhoods (the header request changed the shared chrome). Then chrome-explore the live root, run `chrome-compare … --profile replica --json stardust/chrome/header-parity.json`, re-replay dynamics-check, run the restoreAtDelivery render check, then `update-coverage.mjs --gate` and E end. Check freshness first: `curl -s -H "Origin: https://main--7ddb4c84--aemcoder.aem.live" https://main--7ddb4c84--aemcoder.aem.live/blocks/header/header.js | grep -c initToggles` must be > 0.

## E-full-site — 8/8 verified, delivery media restored (2026-11-06)

- verify.mjs: 8 of 8 verified. Coverage was re-read from the all-1440 and all-360 gate tables (8 PASS each).
- restoreAtDelivery entries replayed on the published origin: Juicer live with 6 items; the home hero video plays (currentTime advances 0.80 s); 0 page errors over the 8 pages (parity.json, 15 features).
- Carried to the pre-done-check step, once the CDN Origin-variant JS has expired: the live-host header chrome-compare and the four archetype pub re-gates after the C-final header change (closed-state chrome unaffected: the new rules apply only in open states).

## E2-link-audit — every internal link resolves (2026-11-06)

- localize-links --check: CHECK PASS (0 source-host links localizable; links to undelivered pages kept absolute to beta.dc.gov).
- GETting every root-relative href on the live tree found 23 targets answering 404, all in /nav (16) and /footer (8) and all outside the fixed 8-page scope: policies, FAQ, taxonomy terms, /search suggestions, two services, one news article, actions/roles. They are repointed to https://beta.dc.gov<path> (decision recorded in direction.md). nav and footer were re-driven with deploy-batch (live, noindex kept). The re-run over nav, footer, index, services and news: 0 non-200.

## F-optimize — gate clean, health 99/100 (2026-11-06)
- `optimize.mjs --all` against the aem.live origin: 8 pages + site checks, health 99/100 (seo 100, ai 100, cross-page 96; a11y layer not assessed by the automated run).
- Open: P1 0, P2 0, P3 1 — `cross-page/duplicate-description` on 4 pages (design-pass, upstream). Left as captured: replica keeps source content verbatim; a new description would be content rewriting with no register entry.
- Source parity (informational, not gated): 10 — no JSON-LD on any page (as on the source), two titles carried verbatim.
- Artifacts: `stardust/rollout/optimize/findings.json`, `scorecard.json`; run log `stardust/rollout/optimize-run.log`.

## G-aem — no platform fixes needed (2026-11-06)
- `autofix-aem.mjs --project . --dry-run` over the F-optimize ledger: 0 candidates (0 applied, 0 manual). The one open P3 (shared meta description) has no registered fixer and stays as captured — a drafted description would be a content change outside the inconsistency register.
- No re-deploy needed; F-optimize numbers stand (health 99/100, 0 open P1).

## H-report — delivery summary and learnings written (2026-11-06)
- Summary: 8/8 pages verified + published; 4 templates; gate 1440 8 PASS, 360 8 PASS; optimize 99/100, 0 P1; 0 internal 404.
- Owner items carried: feedback endpoint, martech ids (D2-dynamic); search hand-off and GovDelivery interim.
- Artifacts: `stardust/rollout/report.md`, `stardust/learnings.md`.

## I-dashboard — rollout dashboard generated (2026-11-06)
- `dashboard.mjs`: `stardust/rollout/dashboard/index.html` + `data.json`; 8 pages identified, prototyped, deployed. Rollout phases A–I closed.

## Handoff — replica run complete (2026-11-06)
- migrate → deploy → rollout closed for all 8 site-plan pages; every page published on aem.live and passing the published-origin gate at 1440 and 360.
- Runner done-check: complete, 0 gaps. Owner follow-ups: feedback form endpoint and martech ids (see `stardust/dynamic-features.md`).
