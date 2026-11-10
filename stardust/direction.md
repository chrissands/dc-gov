---
_provenance:
  writtenBy: stardust:replica
  writtenAt: 2026-11-06T17:56:28Z
  againstInput: https://beta.dc.gov/
  readArtifacts:
    - stardust/current/PRODUCT.md
    - stardust/current/DESIGN.md
    - stardust/current/DESIGN.json
---

# Direction — preserve mode (same-design migration)

Mode: PRESERVE. The target spec is the captured current state of https://beta.dc.gov/. It was promoted verbatim: no direct invocation, no creative decisions.

Promoted: current/PRODUCT.md → PRODUCT.md · current/DESIGN.md → DESIGN.md · current/DESIGN.json → DESIGN.json (at 2026-11-06T17:56:28Z).

Permitted deltas: ONLY the entries of stardust/replica/inconsistency-register.md (1 entry: R-01, the licensed-font substitution forced by licensing; no design improvements).

Fidelity: ia verbatim · design verbatim · content verbatim.

Hands-off: activated 2026-11-06T17:56:28Z by the runner invocation (`--hands-off`). Approvals are recorded as `approvedBy: "hands-off"` only after every gate passes. Roster: the 8 pages fixed by stardust/.labs/site-plan.json, with no caps beyond that (8 of 8 selected pages). Gate widths are 1440 and 360 (run.json breakpoints "desktop,mobile"). Publish decision: publish (recorded in stardust/eds-conversion-log.md).

Named assumptions (hands-off):
- A1: home is the first archetype. The 8-page scope runs sequentially instead of using the two-track first-page-first opening.
- A2: the archetypes are index (landing), neighborhoods (unique), news (listing) and agency-directory (static).
- A3: the timed GovDelivery subscription overlay is a third-party dynamic surface, dismissed in captures (`.prefix-overlay-close`) and triaged in dynamic-features.md.

## Link audit decision — scope extension repointed (2026-11-06)

The page scope is fixed at the 8 site-plan pages. 23 root-relative nav/footer targets fall outside it, so they are SCOPE EXTENSION and are repointed to https://beta.dc.gov<path>, never left as 404s:
- /about-dc
- /actions/apply
- /actions/check-status
- /dc-agency-facebook-links
- /dc-agency-twitter-links
- /dc-agency-youtube-links
- /dcgov-accessibility-policy
- /faq
- /news/mayor-bowser-announces-ramon-griffin-thurgood-marshall-academy-2027-dc-teacher-year-surprise
- /privacy-and-security
- /roles/job-seeker
- /search?key=Public%20School%20Enrollment
- /search?key=School%20Boundaries%20Map
- /search?key=School%20Calendars%20and%20Holidays
- /search?key=School%20Choice%20and%20Lottery
- /search?key=Special%20Education%20Services
- /services/marriage-license
- /services/unemployment-compensation
- /taxonomy/term/22
- /taxonomy/term/27
- /taxonomy/term/31
- /taxonomy/term/8
- /terms-and-conditions-use
- Absolute beta.dc.gov links into undelivered pages (the localize-links KEPT list) stay as they are.
