# Inconsistency register — beta.dc.gov replica

Everything not listed here is frozen. Any design delta the gate finds is a defect, not an improvement.

## R-01 — Licensed Neue Haas Grotesk faces cannot be rehosted

- **Evidence:** the census (`stardust/current/_computed-styles.json` § aggregate.type.families) shows neue-haas-grotesk-display (302 nodes) and neue-haas-grotesk-text (255 nodes), served from https://beta.dc.gov/themes/custom/dc/fonts/nhg/*.woff2 with no `Access-Control-Allow-Origin` header (curl, 2026-11-06). Neue Haas Grotesk is a commercial face.
- **Finding:** the delivered domain may neither rehost nor cross-origin load the licensed files. This is a licensing constraint, not a taste preference.
- **Minimal change:** the font stacks keep `neue-haas-grotesk-display` / `neue-haas-grotesk-text` first, so a licensed drop-in wins later, followed by `"Helvetica Neue", Helvetica, Arial, sans-serif`. Sizes, weights, line-heights and letter-spacing stay as lifted. No other typographic change.
- **Status:** applied
- **Where:** all page types, all text. Expected gate delta: glyph-shape and wrap-width differences, bounded by the pixel bar.
- **Fallback detail (2026-11-06):** the stand-in faces (`nhg-*-fallback`, canon.css) carry measured per-weight letter ratios, separate digit / space / comma-period faces, and ascent/descent overrides divided by size-adjust. One scoped compensation, `.menu-social-footer .social-item { letter-spacing: -0.015em }`, is part of this entry. The live footer's YouTube line fits its 205px column with 0.5px to spare, and without it the fallback wraps that line on every desktop page (+18px). Remove it together with the fallback when the licensed face is dropped in.
