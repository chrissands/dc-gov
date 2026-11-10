<!-- stardust provenance: skill=stardust:dynamics · phase=plan draft · 2026-11-06T19:18:56.627Z · input stardust/current/_dynamics.json (4 pages, 18 findings) · target probe https://main--7ddb4c84--aemcoder.aem.live · reconciled against stardust/migrated -->
# Dynamic features — draft inventory (curate into `stardust/dynamic-features.md`)

One row per detected finding. Merge duplicates, drop noise, keep every axis honest. Columns: disposition = what we do · target = the delivery form (widget where no authored rows remain) · reproducibility = what it needs · status = where it stands (reference/triage.md).

| # | id | class | feature | pages | disposition | target | reproducibility | status | pattern | decision needed | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | a-cms-app-settings-object-drupalsettings | A | CMS / app settings object drupalSettings | 4/4 | static-snapshot | content | self | delivered-by-capture | read-settings | — (keys name endpoints, ids, vendors) | output already carries "webform" |
| 2 | a-cms-app-settings-object-datalayer | A | CMS / app settings object dataLayer | 4/4 | static-snapshot | content | self | pending | read-settings | — (keys name endpoints, ids, vendors) |  |
| 3 | a-unknown-third-party-host-www-juicer-io | A | unknown third-party host www.juicer.io | 1/4 | static-snapshot | — | needs-human-capture | delivered-by-capture | inspect | inspect the XHR, add a vendor row | output already carries "www.juicer.io" |
| 4 | f-form-webform-submission-send-your-feedback-add-form-7-orig | F | form "webform-submission-send-your-feedback-add-form--7" → origin / (3 fields) | 1/4 | rebuild-native | block | needs-backend | pending | forms | production endpoint; interim capture ships now |  |
| 5 | f-form-email-e-checkbox-consent-no-action-js-wired-2-fields | F | form "email:e+checkbox:consent" → no action (JS-wired) (2 fields) | 1/4 | client-only | widget | self | pending | client-compute | none |  |
| 6 | f-form-webform-submission-send-your-feedback-node-391-add-fo | F | form "webform-submission-send-your-feedback-node-391-add-form--20" → origin /services (3 fields) | 1/4 | rebuild-native | block | needs-backend | pending | forms | production endpoint; interim capture ships now |  |
| 7 | f-form-webform-submission-send-your-feedback-node-661-add-fo | F | form "webform-submission-send-your-feedback-node-661-add-form" → origin /organizational-charts-agencies-and-offices-under-mayors-authority (3 fields) | 1/4 | rebuild-native | block | needs-backend | pending | forms | production endpoint; interim capture ships now |  |
| 8 | m-modal-trigger-prefix-overlay-action-later-button-content | M | modal trigger prefix-overlay-action-later → button:content | 1/4 | rebuild-native | runtime | self | pending | modal-loader | none |  |
| 9 | s-site-search-form-search | S | site search form → /search | 4/4 (reach 3/8) | index-backed | widget | self | pending | search-index-backed | none (corpus = the migrated pages; second corpora stay out) |  |
| 10 | s-site-search-form-services | S | site search form → /services | 1/4 (reach 3/8) | index-backed | widget | self | pending | search-index-backed | none (corpus = the migrated pages; second corpora stay out) |  |
| 11 | t-unknown-third-party-host-static-cloudflareinsights-com | T | unknown third-party host static.cloudflareinsights.com | 4/4 | embed-passthrough | embed | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 12 | t-unknown-third-party-host-cdn-gtranslate-net | T | unknown third-party host cdn.gtranslate.net | 4/4 | embed-passthrough | embed | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 13 | t-tag-manager-google-tag-manager | T | tag manager: Google Tag Manager | 4/4 | embed-passthrough | embed | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 14 | t-marketing-ad-retargeting-pixel | T | marketing: ad / retargeting pixel | 4/4 | embed-passthrough | embed | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 15 | t-analytics-google-analytics-ads | T | analytics: Google Analytics / Ads | 4/4 | embed-passthrough | embed | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 16 | t-unknown-third-party-host-content-govdelivery-com | T | unknown third-party host content.govdelivery.com | 1/4 | embed-passthrough | embed | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 17 | v-iframe-without-src-runtime-injected-embed | V | iframe without src (runtime-injected embed) | 4/4 | embed-passthrough | embed | needs-human-capture | pending | embed-passthrough | resolve the runtime src from a rendered capture |  |
| 18 | x-sign-in-account-links | X | sign-in / account links | 4/4 | decided-out | — | needs-backend | delivered-by-capture | decided-out | auth / commerce on the new host? | output already carries "https://mybusiness.dc.gov/login" |

## Triage

- **Ships autonomously (reproducibility `self`):** 5 row(s) — read-settings, client-compute, modal-loader, search-index-backed.
- **One owner decision batch:** 10 row(s) — production endpoint; interim capture ships now · which tags run on the new host; property ids · resolve the runtime src from a rendered capture.
- **Already delivered by the capture pipeline:** 3 row(s) — no work.
- **Host-bound on the target:** 0 of 0 probed API paths — the off-origin data work.

## Phases

- **tags** — 6
- **detect** — 3
- **forms** — 3
- **search** — 2
- **client tools** — 1
- **interactive** — 1
- **embeds** — 1
- **register** — 1
