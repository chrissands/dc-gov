/**
 * sidebar-layout — the c-layout-sidebar section of a static page: a main column of editor text
 * and an aside of sidebar cards (Contact, Follow …) (beta.dc.gov replica).
 * Row 1 is the main column, free-form: every authored element lands in the editor text, in order.
 * Each further row is one sidebar card (heading, then its items; an image cell for a logo) —
 * reconstructive: a row picks the template card of the same shape, extra rows clone the last card.
 * Variant `mist`: the main column sits on the mist container band (c-layout-container --bg-mist).
 *
 * @ew-exempt the visually hidden "Additional information" aside label — accessibility chrome.
 */

const TPLS = {
  default: '<div class="c-layout-sidebar sidebar-section mod-no-vertical-spacing"><div class="c-layout-sidebar-main"><section class="c-layout-container" style="--i-layout-container-m-content-width: var(--content-width-m-narrow);"><div class="c-layout-container-color-wrapper"><div class="c-layout-container-l-content-width"><div class="c-layout-container-content"><div class="set-editor-text"><ul data-s="l" data-t></ul></div></div></div></div></section></div><aside class="c-layout-sidebar-sidebar"><h2 class="c-layout-sidebar-sidebar-title visually-hidden">Additional information</h2><div class="c-layout-sidebar-sidebar-l"><article class="c-card-sidebar set-bg-mid set-small-text expand-context-child" data-u="cards"><h3 class="c-heading c-card-sidebar-heading" id="contact" data-s="h" data-t></h3><div class="c-card-sidebar-content"><ul><li><div class="c-icon-content-icon" style="gap: 19px;"><div class="c-icon c-icon-content-icon-icon mod-prefix" style="--i-icon-m-width: 25px; --i-icon-m-color: var(--color-m-red);" aria-hidden="true"><svg class="icon icon-building" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#building"></use></svg></div><div class="c-icon-content-icon-content"><h4 data-s="h" data-t></h4><a href="/" class="c-link-arrow mod-arrow" data-s="a" data-t></a><div><img width="156" height="72" loading="eager" data-s="i"></div></div></div></li></ul></div></article><article class="c-card-sidebar set-bg-mid set-small-text expand-context-child" data-u="cards"><h2 class="c-heading c-card-sidebar-heading" id="follow" data-s="h" data-t></h2><div class="c-card-sidebar-content"><div class="c-icon-content-icon" style="gap: 19px;"><div class="c-icon c-icon-content-icon-icon mod-prefix" style="--i-icon-m-width: 25px; --i-icon-m-color: var(--color-m-navy);" aria-hidden="true"><svg class="icon icon-facebook" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#facebook"></use></svg></div><div class="c-icon-content-icon-content"><a href="/dc-agency-facebook-links" class="c-link-arrow mod-arrow" data-s="a" data-t></a></div></div><div class="c-icon-content-icon" style="gap: 19px;"><div class="c-icon c-icon-content-icon-icon mod-prefix" style="--i-icon-m-width: 25px; --i-icon-m-color: var(--color-m-navy);" aria-hidden="true"><svg class="icon icon-x-twitter" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#x-twitter"></use></svg></div><div class="c-icon-content-icon-content"><a href="/dc-agency-twitter-links" class="c-link-arrow mod-arrow" data-s="a" data-t></a></div></div><div class="c-icon-content-icon" style="gap: 19px;"><div class="c-icon c-icon-content-icon-icon mod-prefix" style="--i-icon-m-width: 25px; --i-icon-m-color: var(--color-m-navy);" aria-hidden="true"><svg class="icon icon-youtube" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#youtube"></use></svg></div><div class="c-icon-content-icon-content"><a href="/dc-agency-youtube-links" class="c-link-arrow mod-arrow" data-s="a" data-t></a></div></div></div></article></div></aside></div>',
  mist: '<div class="c-layout-sidebar sidebar-section mod-no-vertical-spacing"><div class="c-layout-sidebar-main"><section class="c-layout-container mod-bg set-bg-mid mod-bg-mist" style="--i-layout-container-m-content-width: var(--content-width-m-narrow); --i-layout-container-m-bg-color: var(--color-m-mist);"><div class="c-layout-container-color-wrapper"><div class="c-layout-container-l-content-width"><div class="c-layout-container-content"><div class="set-editor-text"><ul data-s="l" data-t></ul></div></div></div></div></section></div><aside class="c-layout-sidebar-sidebar"><h2 class="c-layout-sidebar-sidebar-title visually-hidden">Additional information</h2><div class="c-layout-sidebar-sidebar-l"><article class="c-card-sidebar set-bg-mid set-small-text expand-context-child" data-u="cards"><h3 class="c-heading c-card-sidebar-heading" id="contact" data-s="h" data-t></h3><div class="c-card-sidebar-content"><ul><li><div class="c-icon-content-icon" style="gap: 19px;"><div class="c-icon c-icon-content-icon-icon mod-prefix" style="--i-icon-m-width: 25px; --i-icon-m-color: var(--color-m-red);" aria-hidden="true"><svg class="icon icon-building" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#building"></use></svg></div><div class="c-icon-content-icon-content"><h4 data-s="h" data-t></h4><a href="/" class="c-link-arrow mod-arrow" data-s="a" data-t></a><div><img loading="eager" width="156" height="72" data-s="i"></div></div></div></li></ul></div></article><article class="c-card-sidebar set-bg-mid set-small-text expand-context-child" data-u="cards"><h2 class="c-heading c-card-sidebar-heading" id="follow" data-s="h" data-t></h2><div class="c-card-sidebar-content"><div class="c-icon-content-icon" style="gap: 19px;"><div class="c-icon c-icon-content-icon-icon mod-prefix" style="--i-icon-m-width: 25px; --i-icon-m-color: var(--color-m-navy);" aria-hidden="true"><svg class="icon icon-facebook" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#facebook"></use></svg></div><div class="c-icon-content-icon-content"><a href="/dc-agency-facebook-links" class="c-link-arrow mod-arrow" data-s="a" data-t></a></div></div><div class="c-icon-content-icon" style="gap: 19px;"><div class="c-icon c-icon-content-icon-icon mod-prefix" style="--i-icon-m-width: 25px; --i-icon-m-color: var(--color-m-navy);" aria-hidden="true"><svg class="icon icon-x-twitter" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#x-twitter"></use></svg></div><div class="c-icon-content-icon-content"><a href="/dc-agency-twitter-links" class="c-link-arrow mod-arrow" data-s="a" data-t></a></div></div><div class="c-icon-content-icon" style="gap: 19px;"><div class="c-icon c-icon-content-icon-icon mod-prefix" style="--i-icon-m-width: 25px; --i-icon-m-color: var(--color-m-navy);" aria-hidden="true"><svg class="icon icon-youtube" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#youtube"></use></svg></div><div class="c-icon-content-icon-content"><a href="/dc-agency-youtube-links" class="c-link-arrow mod-arrow" data-s="a" data-t></a></div></div></div></article></div></aside></div>',
};

/* Template-slot engine (shared shape across the index blocks; inlined because blocks
 * may not import each other). TPL is the prototype section with every authored element
 * replaced by an empty slot ([data-s] = i|h|p|a|l); repeat units carry [data-u]. Authored
 * nodes are MOVED into the slots; the slot's classes and attributes are grafted onto them. */
const KEEP = new Set(['href', 'src', 'srcset', 'alt', 'data-s', 'data-t', 'data-u']);

function frag(html) {
  const t = document.createElement('template');
  t.innerHTML = html;
  return t.content;
}

function copyAttrs(t, host) {
  [...t.attributes].forEach(({ name, value }) => {
    if (KEEP.has(name)) return;
    if (name === 'class') host.classList.add(...value.split(/\s+/).filter(Boolean));
    else host.setAttribute(name, value);
  });
}

const isTextHost = (n) => n.hasAttribute('data-t') || !!n.querySelector('[data-t]');

function graft(t, host, pool) {
  if (t !== host) copyAttrs(t, host);
  const kids = [...t.children];
  if (!kids.length) {
    if (t === host) host.replaceChildren(...pool);
    return;
  }
  const out = [];
  kids.forEach((k) => {
    if (!isTextHost(k)) {
      out.push(k);
      return;
    }
    if (k.tagName === 'I' && k.hasAttribute('data-t')) {
      out.push(...pool.splice(0));
      return;
    }
    const m = pool.find((n) => n.nodeType === 1 && n.tagName === k.tagName);
    if (m) {
      pool.splice(pool.indexOf(m), 1);
      graft(k, m, [...m.childNodes]);
      out.push(m);
    } else {
      graft(k, k, pool.splice(0));
      out.push(k);
    }
  });
  out.push(...pool);
  host.replaceChildren(...out);
}

function kind(el) {
  if (!el) return '';
  const tag = el.tagName;
  if (tag === 'IMG' || tag === 'PICTURE') return 'i';
  if (el.querySelector('img') && !el.textContent.trim()) return 'i';
  if (/^H[1-6]$/.test(tag)) return 'h';
  if (tag === 'UL' || tag === 'OL') return 'l';
  if (tag === 'A') return 'a';
  const only = el.children.length === 1 ? el.firstElementChild : null;
  if (only && only.tagName === 'A' && only.textContent.trim() === el.textContent.trim()) return 'a';
  return 'p';
}

function place(slot, el) {
  const tag = slot.tagName;
  if (tag === 'IMG') {
    const img = el.tagName === 'IMG' ? el : el.querySelector('img');
    if (img) copyAttrs(slot, img);
    if (el !== img) {
      el.classList.add('tp');
      el.querySelectorAll('picture').forEach((p) => p.classList.add('tp'));
    }
    slot.replaceWith(el);
    return;
  }
  if (el.tagName === tag) {
    graft(slot, el, [...el.childNodes]);
    slot.replaceWith(el);
    return;
  }
  const only = el.children.length === 1 ? el.firstElementChild : null;
  if (only && only.tagName === tag && only.textContent.trim() === el.textContent.trim()) {
    graft(slot, only, [...only.childNodes]);
    el.classList.add('tp');
    slot.replaceWith(el);
    return;
  }
  el.classList.add('tp');
  graft(slot, slot, [el]);
  slot.removeAttribute('data-s');
}

/** authored elements of one block row, cell by cell */
function items(row) {
  return row ? [...row.children].flatMap((cell) => [...cell.children]) : [];
}

function slotsOf(unit) {
  return unit.hasAttribute('data-s') ? [unit] : [...unit.querySelectorAll('[data-s]')];
}

/** kind-aligned fill: unmatched slots are dropped, unmatched authored nodes are kept */
function fill(slots, els, host) {
  let e = 0;
  let last = null;
  slots.forEach((s) => {
    const el = els[e];
    if (el && kind(el) === s.dataset.s) {
      place(s, el);
      last = el;
      e += 1;
    } else s.remove();
  });
  const rest = els.slice(e);
  if (!rest.length) return;
  if (last) last.after(...rest);
  else if (host) host.append(...rest);
}

const shapeOf = (unit) => slotsOf(unit).map((s) => s.dataset.s).join();

function segments(root) {
  const segs = [];
  root.querySelectorAll('[data-u], [data-s]').forEach((n) => {
    const last = segs[segs.length - 1];
    if (n.hasAttribute('data-u')) {
      if (last && last.g === n.dataset.u && n.parentElement === last.units[0].parentElement) {
        last.units.push(n);
      } else segs.push({ g: n.dataset.u, units: [n] });
    } else if (n.closest('[data-u]')) {
      // slot of a unit: filled with its unit
    } else if (last && !last.g) last.slots.push(n);
    else segs.push({ slots: [n] });
  });
  return segs;
}

function fillGroup(seg, rows) {
  const pristine = seg.units.map((u) => u.cloneNode(true));
  const shapes = pristine.map(shapeOf);
  const used = new Set();
  const marker = document.createComment('u');
  seg.units[0].before(marker);
  seg.units.forEach((u) => u.remove());
  const placed = rows.map((row, j) => {
    const els = items(row);
    const sh = els.map(kind).join();
    const order = [j, ...shapes.keys()].filter((x) => x < shapes.length);
    let idx = order.find((x) => !used.has(x) && shapes[x] === sh);
    if (idx === undefined) idx = order.find((x) => shapes[x] === sh);
    if (idx === undefined) idx = Math.min(j, shapes.length - 1);
    let unit;
    if (!used.has(idx)) {
      unit = seg.units[idx];
      used.add(idx);
    } else {
      unit = pristine[idx].cloneNode(true);
      [unit, ...unit.querySelectorAll('[id]')].forEach((n) => n.removeAttribute('id'));
    }
    const box = document.createDocumentFragment();
    box.append(unit);
    fill(slotsOf(unit), els, unit);
    return [...box.childNodes];
  });
  marker.replaceWith(...placed.flat());
}

const rowShape = (row) => items(row).map(kind).join();

function segShapes(seg) {
  return seg.g ? seg.units.map(shapeOf) : [seg.slots.map((s) => s.dataset.s).join()];
}

function run(block, html) {
  const root = frag(html);
  const rows = [...block.children];
  const segs = segments(root);
  let r = 0;
  segs.forEach((seg, i) => {
    const need = segs.length - i - 1;
    if (!seg.g) {
      fill(seg.slots, items(rows[r]), seg.slots[0] && seg.slots[0].parentElement);
      r += 1;
      return;
    }
    const mineShapes = segShapes(seg);
    const nextShapes = segs[i + 1] ? segShapes(segs[i + 1]) : [];
    const first = mineShapes[0].split(',')[0];
    const fits = (row) => {
      const sh = rowShape(row);
      if (mineShapes.includes(sh)) return true;
      return sh.split(',')[0] === first && !nextShapes.includes(sh);
    };
    const mine = [];
    while (r < rows.length && rows.length - r > need && fits(rows[r])) {
      mine.push(rows[r]);
      r += 1;
    }
    fillGroup(seg, mine);
  });
  // leftovers pass: authored rows the template had no segment for stay visible
  const spare = rows.slice(r).flatMap(items);
  root.querySelectorAll('[data-s]').forEach((s) => s.remove());
  root.querySelectorAll('i[data-t]').forEach((s) => s.remove());
  root.querySelectorAll('[data-t], [data-u]').forEach((n) => {
    n.removeAttribute('data-t');
    n.removeAttribute('data-u');
  });
  block.replaceChildren(root);
  if (spare.length) block.append(...spare);
}

export default function decorate(block) {
  if (block.dataset.filled) return;
  block.dataset.filled = 'true';
  const variant = Object.keys(TPLS).find((k) => k !== 'default' && block.classList.contains(k)) || 'default';
  run(block, TPLS[variant]);
}
