# Prototype gate — every crafted prototype, 360px

2026-11-06T19:15:44.379Z · **3 PASS / 1 FAIL / 0 error of 4**

Verdict: overlap pixel % ≤ 10 AND |Δh| ≤ 5% of origin height AND clipped ≤ 0 (+ documented allowance)

Calibration — pixel-only verdict (criteria 1+2): **3 PASS**; full verdict (1–4): **3 PASS**. Failing by criterion: pixel 1, height 0, clip 0, content 0; content n/a (origin not probed) 0.
| page | template | tier | origin | browser | pixel % (text %) | Δh px | clipped | content | units | verdict | reasons |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `/news-proposed.html` | - | - | stitch-live | chrome | 2.13 | 1 | 0 | n/a | - | PASS | - |
| `/agency-directory-proposed.html` | - | - | stitch-live | chrome | 3.15 | 1 | 0 | n/a | - | PASS | - |
| `/neighborhoods-proposed.html` | - | - | stitch-live | chrome | 6.34 | 22 | 0 | n/a | - | PASS | - |
| `/index-proposed.html` | - | - | stitch-live | chrome | 11.68 | -11 | 0 | n/a | - | FAIL | pixel 11.68% > 10% |
