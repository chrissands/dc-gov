# EDS conversion log — beta.dc.gov replica

## Publish decision (2026-11-06)

Decision: **publish**. It was made by the run owner before the run started. Every delivered page, the redirects sheet and the chrome documents (nav, footer and any locale variants) go live on the aem.live origin: deploy-batch.mjs without `--no-publish`, or POST https://admin.hlx.page/live/….

## C0 foundation (2026-11-06)

- **Decode tier:** chrome is template-slotted. `blocks/header/header.js` and `blocks/footer/footer.js` carry the prototype's `header#site-header` / `footer.site-footer` with every authored slot emptied. The `/nav` and `/footer` DA documents are MOVED into those slots by role, using section styles `nav-*` and `footer-*`. Logos, sprite icons, control labels and the gtranslate selector stay in code (`@ew-exempt`).
- **Behaviour:** canon.js only. That covers the large/small switch at `(min-width: 1100.01px)`, the `--site-header-*` variables and the short header from `#intersection-trigger`. Menus, drawers and alerts stay closed, as in the gated prototype.
- **CSS:** lifted.css and canon.css are split by DOM class sets of the 4 prototypes. Global (tokens, `@layer base`, `set-*` grounds, shared `c-*` components, `c-layout-container|grid|stack|flex|content-width`) goes to `styles/styles.css`. Header-only rules go to header.css and footer-only rules to footer.css. Content-only rules are left to the block units. Names are mapped to kebab-case (see the styles.css header). Stylelint rules that would reorder or rewrite lifted values are disabled per file; everything else is autofixed.
- **R-01:** the `nhg-*-fallback` faces are carried verbatim into styles.css. fonts.css ships no face, and the roboto files were removed.
- **Media:** the mayor photo was uploaded to DA `media/chrome/mayor-image.webp` (nav-leadership; the panel is hidden in the prototype).
- **Lint:** `.eslintignore` gains `stardust/`, because captured source JS is not runtime. `lint:breakpoints` was not added, since DESIGN.json has no `extensions.breakpoints.target`.

## C-archetype index (landing, home page) (2026-11-06)

- **Encoder:** `stardust/.work/rollout/probes/gen-index.mjs` (re-runnable) turns each prototype section into a block. TPL is the section's DOM, kebab-mapped, with every authored element replaced by an empty slot (`data-s` = i|h|p|a|l) and every repeat unit marked `data-u`. The authored rows are emitted in slot order: one row per unit and one row per run of fixed slots, with images in their own cell. The engine (`snippets/engine.js`, inlined into each block, because blocks may not import each other) MOVES the authored nodes into the slots and grafts the slot's classes and attributes onto them. A lone CTA keeps its `<p>`, which gets `.tp` (display: contents). It has a leftovers pass.
- **CSS:** block CSS is the content-only lifted rules (`foundation/drop.css`) whose class tokens all exist in the block template. Each rule is scoped as `<selector>:where(.<block> *)`, which adds zero specificity, so the lifted cascade is unchanged. The inline `<style>` media rules of the scroll combos and the double layout are carried as they are.
- **Tier per section:**
  - hero-home (jump links, hero, search, post-hero): template-slotted.
  - mayors-greeting: template-slotted, with reconstructive blocky links.
  - carousel-grid: reconstructive slides.
  - tabset: reconstructive. The tabs are `div[role=tab]` (EW7), and the card and link groups are filled per panel.
  - scroll-combo: reconstructive event card and slabs.
  - card-shapes: reconstructive.
  - seasonal-area: template-slotted lock cards, with reconstructive service cards.
  - stats: reconstructive.
  - social-feed: template-slotted heading plus the live Juicer embed.
  - feedback: template-slotted.
- **Repeat units:** each one picks the prototype unit template of the same index and shape, and clones the last unit when authors add more.
- **Capture state restored:** the hero video (`/assets/video/herohome.mp4`, served from code) autoplays, muted and looping, with the pause toggle. The Juicer feed `mayorbowser-…` is loaded live once it nears the viewport.
- **D1/D3 lint notes:** hero-home, social-feed and feedback are bespoke fixed compositions, not default content. The image cells make the cell counts differ.
- **Round-trip:** the `--ew` round-trip runs against `stardust/.work/rollout/archetype-index/rt-proto.html`. That is a copy of the prototype with `data-section` wrappers and the frozen Juicer posts emptied. Result: 202/202 editable, 0 🔴.
- **Published-origin gate (fresh captures on both sides):** 1440 at 3.93%, Δh 59 px; 360 at 7.27%, Δh 31 px. Both rows: clipped 0, MISSING+HIDDEN 0, PASS. The live Juicer feed changes between captures, so a stale origin capture once read 13.6% at 360. Always gate with `--recapture-origin`.
- **Crop bands at 1440:** header 0.50%; footer 1.41%. The footer number is aligned per side with `--y-b`, because there is a 1px sub-pixel offset.
- **Behaviour checked on preview:**
  - The video plays: currentTime advances, and it is muted and looping.
  - The tabs switch panels.
  - Below 728px the carousel mounts (`mod-stackable is-active`).
  - Juicer renders 6 items.
- **Foundation requests:** none.

## C-archetype news (listing) (2026-11-06)

- **Encoder:** `stardust/.work/rollout/probes/gen-news.mjs` is a copy of gen-index with two changes. Text slots keep their classed and `span` wrappers: breadcrumb text spans, slab heading spans, arrow-link classes. A block can also wrap its sections (`wrap: 'node-bottom'`, which keeps the source's node-bottom margin).
- **Tier per section:**
  - hero-simple (breadcrumb + h1): template-slotted. The hidden "Breadcrumb" label is `@ew-exempt`.
  - view-listing: the section heading and view title are template-slotted, and the slabs are reconstructive. The exposed filter form and the pager are code (`@ew-exempt`). Pager hrefs point to beta.dc.gov/news?page=N, and pager items carry `data-num`.
  - emblem-section: template-slotted emblem, feedback pair and attribution. The feedback form behaviour is the same as in the index feedback block.
- **CSS fixes, carried forward to every later encoder:**
  - Legacy single-colon pseudo-elements (`:before`/`:after`) are kept last when `:where(.block *)` is appended. hero-home.css was regenerated with the same fix.
  - The source's pager neighbour rules are `@container` rules on the full-width content wrapper. They are written as viewport queries, the way lifted.css writes them.
- **Media:** `media/news/`, 3 images (emblem logo, DC.gov logo, mayor profile).
- **Published-origin gate:** 1440 at 0.86%, Δh 1 px; 360 at 2.09%, Δh 1 px. Clipped 0, MISSING+HIDDEN 0. Both rows PASS. The feedback form opens on preview.

## C-cluster listing (2026-11-06)

- **Pages:** /services and /events, siblings of /news. The encoder input is `stardust/prototypes/siblings/<slug>.html`, with sections dumped to `stardust/.work/rollout/cluster-listing/<slug>/sec`.
- **Encoder:** `stardust/.work/rollout/probes/gen-listing.mjs` (re-runnable; pre-PUT chain `chain-listing.sh <slug>`, round-trip fixture `rt-fixture-listing.mjs`). Its encoder functions are copied from gen-news. Before it writes anything, it re-encodes the /news listing and asserts that the result is byte-identical to the default template in the block.
  - It now owns `blocks/view-listing/*`. Do not re-run gen-news.mjs for view-listing, because that would drop the variants.
  - A `>img` step in a lifted selector also gets a `>picture>img` alternate, because EDS wraps authored images in `<picture>` (`.tp`, display: contents).
- **CSS delta:** `stardust/.work/rollout/probes/lift-extra.mjs` collects the source rules (site-0.css) that lifted.css lacks and whose selectors match an element of the sibling prototypes, kebab-mapped into `cluster-listing/extra.css`. selectCss reads drop.css plus extra.css. It covers 71 rules: `c-hero-stack`, `c-slab-action --img` and `_set-bg-dark`, the `--new-tab` link pill, the filterset sort and `form-select`.
- **Variants, not forks:** `view-listing` carries `TPLS = { default, grid, media }`, picked by block class.
  - default (/news): unchanged.
  - grid (/services): section heading and view title are template-slotted. Units are reconstructive: one feature `c-card-frame` (311, with a Login small pill) plus 20 `c-card-service-link` cards in `c-layout-adaptive-grid`. The services exposed form (keyword, Agency / Topics / Seasons, Sort) and the Load More link are code (`@ew-exempt`), with the href pointing to beta.dc.gov/services?page=1.
  - media (/events): view title is template-slotted. Units are 5 reconstructive image slabs (`set-bg-dark`), each with an image cell, a linked heading, the date run and an optional address. Load More is code. The variant keeps the source's node-bottom top margin as its own padding-bottom, because the reused feedback block has no node-bottom wrapper.
  - The block CSS is the selection for the union of the three templates' classes.
- **Tier per section:**
  - services:
    - hero-stack (new block; breadcrumb and h1 on the dark stacked hero): template-slotted.
    - view-listing grid: as above.
    - emblem-section: reused as is.
  - events:
    - hero-simple: reused as is.
    - view-listing media: as above.
    - feedback (the index block): reused as is. Its template matches the events node-feedback and node-attribution; only ids and the form internals differ, and those are code.
- **Round-trip --ew:** services 61/61, events 27/27, news (with the new view-listing) 79/79. All three have 0 🔴. Events shows 4 🟡 EXTRA, because the date runs `<time>…</time> - <time>…</time>` are authored as one text run. The rendered text is the same.
- **Media:** `media/services/` has 3 images (the emblem set). `media/events/` has 5 slab images. media-reconcile hosted 3/3 and 5/5.
- **Published-origin gate:**
  - services: 1440 at 1.37%, Δh 1 px; 360 at 2.25%, Δh 1 px.
  - events: 1440 at 0.81%, Δh 1 px; 360 at 1.32%, Δh 1 px.
  - All rows: clipped 0, MISSING+HIDDEN 0, PASS.
  - Fix round 1 (events): the images did not match through the picture wrapper (slab 231 → 262 px), and the node-bottom margin was missing (60 px).
- **News re-gate (view-listing changed):** fresh captures. 1440 at 0.86%, Δh 1 px; 360 at 2.09%, Δh 1 px. Clipped 0, MISSING+HIDDEN 0, PASS.
- **Foundation requests:** none.

## C-archetype agency-directory (static) (2026-11-06)

- **Encoder:** `stardust/.work/rollout/probes/gen-agency-directory.mjs` (re-runnable; pre-PUT chain `chain-agency-directory.sh`, round-trip fixture `rt-fixture-agency-directory.mjs`). Its encoder functions are copied from gen-listing. Sections are dumped to `stardust/.work/rollout/archetype-agency-directory/sec`. For each reused block, the encoder asserts that the re-encoded slot skeleton (slot tags, kinds and unit marks, in order) equals the TPL in `blocks/<name>/<name>.js`. Ids and the internals of code regions are ignored in that check. The CSS source is drop.css only. lift-extra found no source rule for this page's blocks that lifted.css lacks.
- **Tier per section:**
  - hero-simple: reused as is. Only the breadcrumb and h1 text differ from /news.
  - sidebar-layout (new block, named generically for the static siblings): the `c-layout-sidebar` section.
    - Row 1 is the main column. It is free-form: every authored element lands in `_set-editor-text` in order. Here that is the 68-link agency list as one `<ul>`.
    - Each further row is a reconstructive `c-card-sidebar` unit. Contact has a heading, h4, link and logo image cell; Follow has a heading and 3 links. Extra rows clone the last card.
    - The visually hidden "Additional information" aside label is code (`@ew-exempt`).
    - The block carries the source's node-core → node-bottom gap as its own padding-bottom, the same way view-listing.media does, because the following feedback block has no node-bottom wrapper.
  - feedback (the index block): reused as is.
- **D1/D3 lint notes:** hero-simple and feedback are bespoke fixed compositions. The image cell makes the sidebar-layout cell counts differ.
- **Round-trip --ew:** 17/17 editable, 0 🔴.
- **Media:** `media/agency-directory/`, 1 image (the DC.gov sidebar logo). media-reconcile hosted 1/1.
- **Published-origin gate:**
  - 1440 at 1.37%, Δh 1 px; 360 at 3.15%, Δh 1 px. Clipped 0, MISSING+HIDDEN 0, PASS. Both match the prototype's numbers.
  - Fix round 1: the node-bottom gap (60 px at 1440, 36 px at 360) was missing. Before the fix: 5.37% / Δh 61 and 8.74% / Δh 37.
- **Behaviour checked on preview:** the header scroll-morph adds `mod-sh-short`; agency link hover colour rgb(7,116,228) → rgb(5,48,104); the feedback form opens.
- **Known carry-over:** the shared hero-simple TPL grafts its first page's h1 id (`all-news`) onto the authored h1, on /events too. It was left alone so that the shared block's output stays unchanged.
- **Foundation requests:** none.

## C-cluster static (2026-11-06)

- **Pages:** /organizational-charts-agencies-and-offices-under-mayors-authority and /community-engagement-and-feedback, siblings of /agency-directory. The encoder input is `stardust/prototypes/siblings/<slug>.html`, with sections dumped to `stardust/.work/rollout/cluster-static/<slug>/sec`.
- **Encoder:** `gen-agency-directory.mjs` now encodes the whole static template, all three pages (pre-PUT chain `chain-static.sh <slug>`, round-trip fixture `rt-fixture-static.mjs <slug> <out>`). The attribute mapping is factored into `mapAttrs`. Snippets for the new block are in `cluster-static/snippets`.
  - It still owns `blocks/sidebar-layout/*`, which now carries `TPLS = { default, mist }`. Every run asserts that the default TPL is byte-identical to the /agency-directory TPL.
  - Reused blocks (hero-stack, feedback, emblem-section) are skeleton-checked against their TPLs, the same way as hero-simple.
- **CSS delta:** `lift-extra.mjs` over both pages' sections gives `cluster-static/extra.css` (52 rules: c-accordion, c-layout-stack, accordion-toggle-all-l, `set-editor-text p`/`h4`, c-hero-stack). Only accordion-stack reads it (drop.css + extra.css). The sidebar-layout CSS is unchanged apart from the mist rule. The accordion's `@container` rules stay container queries, because `.c-accordion` is its own container (`accordion/inline-size`). `c-button-plus` is already global through the header block CSS.
- **Tier per section:**
  - org-charts:
    - hero-stack: reused as is.
    - accordion-stack (new bespoke block, named generically): the `--regular` c-layout-container holding 9 c-accordion items.
      - OUTER and ITEM templates are cut from the section. Each row is one item: cell 1 is the title, cell 2 is a free-form panel (h4, ul and p land in the editor text in order; headings get `c-heading`).
      - Ids, `aria-controls` and `data-set` are assigned at run time. Panels start `hidden`.
      - The toggle and "Toggle all" behaviour is the source's: the control gets `mod-active`, and it opens all panels unless one is already open.
      - "Toggle all" is code (`@ew-exempt`).
      - The block carries the node-core → node-bottom gap as its own padding-bottom.
    - feedback: reused as is.
  - community-engagement:
    - hero-stack: reused as is.
    - sidebar-layout `mist` (new variant): the main column sits on the `--bg _set-bg-mid --bg-mist` container. The variant sets padding-bottom to 0, because the emblem-section that follows carries its own node-bottom wrapper.
    - emblem-section: reused as is (node-bottom wrap, as on /services).
- **Pipeline loss:** the source panel lists end every item except the last with `<br>&nbsp;`, and the EDS pipeline drops both. The blank line is kept with `li:not(:last-child) { padding-bottom: 1lh }`. Open-panel heights match live: the EOM panel is 750 px on both. Toggle-all checked on preview.
- **Round-trip --ew:** org-charts 36/36, community 25/25. Both 0 🔴.
- **Media:** `media/community-engagement-and-feedback/`, 4 images (sidebar logo + emblem set), media-reconcile hosted 4/4. org-charts has no images.
- **Published-origin gate:**
  - org-charts: 1440 at 0.91%, Δh 1 px; 360 at 8.08%, Δh 19 px. Both PASS.
    - Residual at 360: the first title, "Executive Office of the Mayor (EOM)", wraps on live but not on EDS. Its text measures about 267 px live and 263.5 px on EDS, in a 264 px box. This is a font-metric edge, not CSS: every other item matches to 1 px.
  - community: 1440 at 0.88%, Δh 1 px; 360 at 1.47%, Δh 1 px. PASS.
  - All rows: clipped 0, MISSING+HIDDEN 0. No fix rounds were needed.
- **Re-gates:** none. No live page's output changed: the sidebar-layout default TPL is byte-identical, and the only CSS addition is scoped to `.sidebar-layout.mist`.
- **Foundation requests:** none.

## C-archetype neighborhoods (unique) (2026-11-06)

- **Encoder:** `stardust/.work/rollout/probes/gen-neighborhoods.mjs` (re-runnable; pre-PUT chain `chain-neighborhoods.sh`, round-trip fixture `rt-fixture-neighborhoods.mjs`). Its encoder functions are copied from gen-agency-directory. Sections are dumped to `stardust/.work/rollout/archetype-neighborhoods/sec`, snippets are in `archetype-neighborhoods/snippets`. The CSS source is drop.css only: lift-extra found one source rule lifted.css lacks (a reduced-motion `html` rule), and no block uses it.
- **Tier per section:**
  - hero-image (new block, named generically): the dark `c-hero --img` split hero. Template-slotted: breadcrumb list, h1 and image. The hidden "Breadcrumb" label is `@ew-exempt`.
  - link-card-grid (new bespoke block): the `--regular` c-layout-container of 8 `c-card-link-tabbed` ward cards in a 2-column `c-layout-grid`.
    - OUTER and ITEM templates are cut from the section. Row 1 (headings only, optional) is the section heading. Each further row is one card: [image | linked heading, description p, footer p].
    - The heading's link becomes the card's stretched link. The heading and description are MOVED into their slots. The footer `<p>` sits in `c-card-link-tabbed-bottom` as `.tp`. Missing cells are dropped and extra paragraphs stay in the card body.
    - Heading ids are derived from the text (`choose-your-ward`, `ward-1` …).
    - No padding of its own: the following emblem-section carries the node-bottom margin.
  - emblem-section `plain` (new variant): the emblem band and attribution without the feedback pair. Live /neighborhoods has no feedback cards. `TPL_PLAIN` sits beside the unchanged `TPL`, and decorate picks it only for `.plain`. Unclassed blocks (/news, /services, /community-engagement-and-feedback) run the same TPL through the same path, so their output is unchanged and no re-gate was needed. CSS is unchanged.
- **Round-trip --ew:** 37/37 editable, 0 🔴.
- **Media:** `media/neighborhoods/`, 12 images (hero, 8 ward cards, emblem set). media-reconcile hosted 12/12.
- **Published-origin gate:**
  - 1440 at 1.21%, Δh 1 px; 360 at 6.35%, Δh 22 px. Clipped 0, MISSING+HIDDEN 0, PASS. No fix rounds were needed.
  - Both rows match the prototype's numbers. The 360 Δh is the known R-01 residual: the Ward 7 paragraph wraps to 5 lines live and 4 in the fallback face.
  - 1440 shows one 🟡 COUNT TEXT (band "ward 8": 12 → 8). The probe does not count the card footer lines and attribution, because they are text inside `display: contents` `.tp` paragraphs. They render, and the pixel diff covers them.
- **Behaviour checked on preview:** ward card hover background rgb(232,235,241) → rgb(7,116,228), the same as live. Card links go to oanc.dc.gov. The header scroll-morph is foundation code.
- **Dynamic features:** none listed for /neighborhoods.
- **Foundation requests:** none.
