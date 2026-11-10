# Dynamics parity check — https://main--7ddb4c84--aemcoder.aem.live — 2026-11-06T22:39:20.983Z

Replayed 3 checks over 15 features · pass 3 · fail 0. Flows, not presence.

| feature | class | status | check | result | detail | third-party requests |
|---|---|---|---|---|---|---|
| Juicer social feed on home | A | done | dom-count | PASS | 6 × .juicer-feed li.feed-item (min 3) | www.juicer.io:200×20 |
| no uncaught exceptions on the delivered pages | A | done | no-page-errors | PASS | none on 8 page(s) |  |
| home hero video (autoplay, muted; frozen at capture, restoreAtDelivery) | V | done | video-plays | PASS | iframe/video: false · video playing (Δt 0.80s) | www.juicer.io:200×20 |

## Features without checks

- drupalSettings / dataLayer objects (A) — done
- "Was this page helpful?" + "Send your feedback" webform (F) — scaffolded-awaiting-owner · owner: name the endpoint that receives "Send your feedback" submissions (the source posts to its Drupal webform)
- timed GovDelivery subscription overlay (#prefix-overlay-outer) (M) — interim · environment limit: the vendor account stores its state on the dc.gov cookie domain, so the overlay shows on a *.dc.gov host only; on the aem.live preview host it stays silent (injected at DOMContentLoaded or after load: no overlay). Not a defect: it activates when the site is served from dc.gov
- header search → /search (S) — interim · owner: /search is outside the 8-page plan: decide whether it migrates (index-backed) or keeps handing off to the source
- /services and /news keyword filter (S) — done
- GTM, Google Analytics/Ads, ad pixel, Cloudflare Insights (T) — scaffolded-awaiting-owner · owner: martech only on request: name the container / property ids to carry over
- Translate (cdn.gtranslate.net dropdown) (T) — done
- iframes without src (tag/translate runtime) (V) — done
- sign-in / account links (X) — done
- header menus (Government dropover, I want to / I am a), alerts toggle (M) — done
- mobile menu drawer (M) — done
- header search overlay (S) — interim
