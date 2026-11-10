# Learnings — beta.dc.gov replica run (2026-11-06)

- **Live social feeds poison cached origin captures.** The home page's Juicer feed changes between captures; a stale origin capture read 13.6 % at 360 against a true ~7 %. Gate pages with live feeds with fresh origin captures.
- **Out-of-scope chrome links need a decision before E2.** With an 8-page scope, 23 nav/footer targets were outside it; repointing them to the source host kept 0 internal 404s without widening scope.
- **Replica + optimize:** content-draft findings (shared meta descriptions) stay open as P3 by design — fixing them would be content rewriting outside the register.
- **Mobile wrap junctions are the dominant residual** on hero-heavy pages (R-01); align-to-anchor readings put them near 5 % while full-page pixel % reads higher.
