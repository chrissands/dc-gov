/**
 * hero-home — template-slotted home hero (beta.dc.gov replica): jump links, hero heading
 * with the autoplaying background video, the services search bar and the post-hero strip
 * (today / weather, snapline link, ANC link). Authored nodes are MOVED into the slots.
 *
 * @ew-exempt video toggle labels (Pause animation / Play animation), the search form
 * controls (Search services, Search, Close search services results) — theme UI, not content.
 */

const TPL = '<ul class="home-jump-links" id="home-jump-links" hidden="" data-s="l" data-t></ul><div class="node-header" id="today-in-dc"><section class="c-hero-home set-bg-light mod-has-video mod-loaded mod-reveal"><div class="c-hero-home-l"><div class="c-hero-home-text"><div class="c-hero-home-text-l"><h1 class="c-heading c-hero-home-heading" id="welcome-to-washington-dc" data-s="h" data-t></h1><div class="c-hero-home-content"><p data-s="p" data-t></p></div></div></div><video class="c-hero-home-video" muted="" playsinline="" autoplay="" type="video/mp4" height="353" width="1416" aria-hidden="true" role="presentation" hidden="" src="/assets/video/herohome.mp4"></video><button class="c-hero-home-video-toggle" type="button" hidden=""><span class="c-hero-home-video-toggle-label mod-pause">Pause animation</span><span class="c-hero-home-video-toggle-icon mod-pause"><svg class="icon icon-pause" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#pause"></use></svg></span><span class="c-hero-home-video-toggle-label mod-play" hidden="">Play animation</span><span class="c-hero-home-video-toggle-icon mod-play" hidden=""><svg class="icon icon-play" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#play"></use></svg></span></button></div></section></div><section class="home-search" id="home-search"><h2 class="visually-hidden" data-s="h" data-t></h2><form id="home-search-form" action="https://beta.dc.gov/search" method="get" accept-charset="UTF-8"><div class="home-search-l"><div class="home-search-icon" aria-hidden="true"><svg class="icon icon-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#search"></use></svg></div><div class="home-search-loading-icon" aria-hidden="true" hidden=""><svg class="icon icon-loading" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#loading"></use></svg></div><label for="home-search-edit-keys" class="visually-hidden">Search services</label><input class="home-search-key" id="home-search-edit-keys" placeholder="Look up services and actions like “Pay Ticket” here" type="search" name="key" value=""><input class="home-search-submit" type="submit" value="Search"></div></form><div class="home-search-drawer set-bg-mid" id="home-search-drawer" hidden=""><h3 class="visually-hidden">Search services results</h3><button class="home-search-drawer-dismiss" type="button"><span class="visually-hidden">Close search services results</span><div class="c-icon icon" style="--i-icon-m-width: 12px; --i-icon-m-height: 12px;" aria-hidden="true"><svg class="icon icon-close-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#close-x"></use></svg></div></button><div class="home-search-drawer-view" id="home-search-drawer-view"></div></div></section><div class="home-post-hero"><div class="hph-item mod-weather set-bg-dark"><div class="hph-item-text"><p class="hph-item-heading" data-s="p"><svg class="icon icon-calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#calendar"></use></svg><i data-t></i></p><p class="hph-item-date" data-s="p" data-t></p></div><div class="hph-item-weather"><div><div data-s="p" data-t></div><div><span data-s="p" data-t></span></div></div></div></div><div class="hph-item mod-link mod-snapline set-bg-dark stretch-shape"><p class="hph-item-label" data-s="p" data-t></p><a href="#essential-fall-resources" class="hph-item-link stretch-link mod-new-tab" data-s="a"><i data-t></i><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></a></div><div class="hph-item mod-link mod-neighborhood set-bg-dark stretch-shape"><div class="hph-item-icon"><div class="c-icon" aria-hidden="true"><svg class="icon icon-building-tree" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#building-tree"></use></svg></div></div><a href="https://oanc.dc.gov/landing-page/ancs-ward" class="hph-item-link stretch-link mod-new-tab" target="_blank" data-s="a"><i data-t></i><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></a></div></div>';

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

function behave(block) {
  const hero = block.querySelector('.c-hero-home');
  const v = hero && hero.querySelector('video');
  const btn = hero && hero.querySelector('.c-hero-home-video-toggle');
  if (!v) return;
  v.muted = true;
  v.loop = true;
  v.setAttribute('loop', '');
  v.setAttribute('preload', 'auto');
  const p = v.play();
  if (p && p.catch) p.catch(() => {});
  if (!btn) return;
  const labels = (paused) => {
    btn.querySelectorAll('.mod-pause').forEach((n) => { n.hidden = paused; });
    btn.querySelectorAll('.mod-play').forEach((n) => { n.hidden = !paused; });
  };
  btn.addEventListener('click', () => {
    const paused = !hero.classList.contains('mod-paused');
    hero.classList.toggle('mod-paused', paused);
    labels(paused);
    if (paused) v.pause();
    else v.play();
  });
}

export default function decorate(block) {
  if (block.dataset.filled) return;
  block.dataset.filled = 'true';
  run(block, TPL);
  behave(block);
}
