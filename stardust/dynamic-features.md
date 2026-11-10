<!-- stardust provenance: skill=stardust:dynamics · phase=triage (curated) · 2026-11-06 · from stardust/dynamics/dynamic-features.generated-plan.md (21 rows) + stardust/current/pages/*.html -->
# Dynamic features — beta.dc.gov replica (8-page scope)

Hands-off run. Each owner decision ships its interim tier and is named in the Decision batch. Nothing here is `decided-out`: that needs an owner statement.

## Listings contract

| listing | page | source mechanism | delivery |
|---|---|---|---|
| Services | /services | Drupal view, keyword + Agency/Topics/Seasons filters, Load More | document-first: the captured cards are authored rows; filters are client-side over the authored rows (interim) |
| News | /news | Drupal view, Release Type filter + keyword, pager 1–10 | document-first: the captured first page of cards is authored rows; the pager links back to the source for deeper pages (interim) |
| Events | /events | Drupal view, Load More | document-first: the captured cards are authored rows |
| Home "What's happening in DC" | / | curated cards | authored rows |

## Features

| # | id | class | feature | disposition | target | reproducibility | status | notes |
|---|---|---|---|---|---|---|---|---|
| 1 | read-settings | A | drupalSettings / dataLayer objects | static-snapshot | content | self | n/a | nothing user-visible depends on them |
| 2 | juicer-feed | A | Juicer social feed (www.juicer.io) on home | embed-passthrough | embed | self | pending | public embed script; the feed id comes from the capture |
| 3 | feedback-form | F | "We want to hear from you." — "Was this page helpful?" Yes/No + "Send your feedback" webform (comment + optional email) | rebuild-native | block | needs-backend | pending | interim: the UI is rebuilt, submission is not connected and shows a "no backend connected" message; the survey link stays live |
| 4 | govdelivery-overlay | M | timed GovDelivery subscription overlay (#prefix-overlay-outer) | rebuild-native | widget | self | pending | interim: the overlay is rebuilt and its subscribe form hands off to content.govdelivery.com |
| 5 | site-search | S | header search → /search | index-backed | widget | self | pending | /search is outside the 8-page plan; interim: the header search submits to https://beta.dc.gov/search |
| 6 | services-filter | S | /services keyword filter | client-only | block | self | pending | filters the authored rows |
| 7 | tags | T | GTM, Google Analytics/Ads, ad pixel, Cloudflare Insights | embed-passthrough | embed | needs-business-decision | scaffolded off | martech only on request |
| 8 | gtranslate | T | Translate toggle (cdn.gtranslate.net) | embed-passthrough | widget | self | pending | the toggle UI is rebuilt; the widget loads the vendor script on demand |
| 9 | runtime-iframes | V | iframes without src (tag/translate runtime) | embed-passthrough | embed | needs-human-capture | n/a | belong to rows 7/8 |
| 10 | account-links | X | sign-in / account links | link-out | — | needs-backend | pending | links keep their source targets |
| 11 | chrome-menus | M | header menus "I want to" / "I am a" / Government, alerts toggle | rebuild-native | runtime | self | pending | header contract stardust/chrome/header-contract.json is the spec |
| 12 | chrome-drawer | M | mobile menu drawer | rebuild-native | runtime | self | pending | header contract |
| 13 | chrome-search | S | header search overlay | index-backed | widget | self | pending | see row 5 |

## Decision batch (owner)

- D1 feedback backend: where "Send your feedback" submissions should go (interim: not connected).
- D2 tags on the new host: which of GTM/GA/pixel/Cloudflare Insights run on aem.live, plus property ids (interim: off).
- D3 search: bring /search into scope or keep handing off to the source (interim: hand-off).
- D4 listings depth: whether pages beyond the captured first page of News move (interim: the pager links to the source).

## Register

No inconsistency-register entries arise from the dynamic surface.

## D2 status (2026-11-06) — replay: stardust/dynamics/parity.json → stardust/qa/dynamics-report.md

- done: juicer-feed, services-filter (keyword over authored rows), gtranslate, chrome-menus, chrome-drawer, account-links, read-settings, runtime-iframes.
- interim: site-search and chrome-search (both search forms hand off to https://beta.dc.gov/search?key=…); govdelivery-overlay. Its disposition changed from rebuild-native to embed-passthrough: the source's own vendor script is loaded on every page, but the vendor account is bound to the dc.gov cookie domain, so the overlay shows on a *.dc.gov host only (environment limit, not a defect).
- awaiting owner: feedback-form submission endpoint; tags (martech ids).
