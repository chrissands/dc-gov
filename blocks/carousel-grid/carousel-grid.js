/**
 * carousel-grid — "Service Status" (beta.dc.gov replica). Template-slotted: heading row,
 * then one row per slide card. Below 728px of grid width (2 x 328 min + 24 gap + 48) the
 * grid mounts as a one-slide swipe carousel with dots and arrows (lifted Splide rule).
 *
 * @ew-exempt carousel controls (Swipe / Stack, Previous slide / Next slide, as a carousel,
 * in a list) — UI labels of the theme, not authored content.
 */

const TPL = '<section class="c-layout-container mod-no-content-padding mod-regular"><div class="c-layout-container-color-wrapper"><div class="c-layout-container-l-content-width"><h2 class="c-heading c-layout-container-heading" id="service-status" data-s="h" data-t></h2><div class="c-layout-container-content"><div class="c-layout-carousel-grid mod-edge mod-multiple expand-context" style="--i-layout-carousel-grid-m-child-min: 280px; --i-layout-carousel-grid-m-max-column-count: 3;"><ul class="c-layout-carousel-grid-stackable-controls"><li><button class="c-button-pill-toggle mod-active c-layout-carousel-grid-swipe" type="button">Swipe <span class="visually-hidden">as a carousel</span></button></li><li><button class="c-button-pill-toggle c-layout-carousel-grid-stack" type="button">Stack <span class="visually-hidden">in a list</span></button></li></ul><div class="splide is-overflow is-initialized" id="splide01"><div class="c-layout-carousel-grid-controls"><div class="c-layout-carousel-grid-arrows splide-arrows"><button type="button" class="c-layout-carousel-grid-arrow c-layout-carousel-grid-arrow-prev splide-arrow splide-arrow-prev"><span class="visually-hidden">Previous slide</span><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5H13M13 5L9.19048 1M13 5L9.19048 9"></path></svg></button><button type="button" class="c-layout-carousel-grid-arrow c-layout-carousel-grid-arrow-next splide-arrow splide-arrow-next"><span class="visually-hidden">Next slide</span><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5H13M13 5L9.19048 1M13 5L9.19048 9"></path></svg></button></div><ul class="c-layout-carousel-grid-pagination splide-pagination" role="tablist" aria-label="Select a slide to show"></ul><div class="c-layout-carousel-grid-track splide-track" id="splide01-track"><ul class="c-layout-carousel-grid-list splide-list mod-fill" id="splide01-list"><li class="c-layout-carousel-grid-slide splide-slide" id="splide01-slide01" data-u="slides"><div class="c-card-service-link stretch-shape hover-dark set-bg-mid mod-new-tab" rel="noopener" target="_blank"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-icon c-card-service-link-icon" style="--i-icon-m-width: 40px; --i-icon-m-color: var(--color-m-red);" aria-hidden="true"><svg class="icon icon-311" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#311"></use></svg></div><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="services" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div></li><li class="c-layout-carousel-grid-slide splide-slide" id="splide01-slide02" data-u="slides"><div class="c-card-service-link stretch-shape hover-dark set-bg-mid mod-new-tab" rel="noopener" target="_blank"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-icon c-card-service-link-icon" style="--i-icon-m-width: 40px; --i-icon-m-color: var(--color-m-red);" aria-hidden="true"><svg class="icon icon-car" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#car"></use></svg></div><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="dmv-service-centers" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div></li><li class="c-layout-carousel-grid-slide splide-slide" id="splide01-slide03" data-u="slides"><div class="c-card-service-link stretch-shape hover-dark set-bg-mid mod-new-tab" rel="noopener" target="_blank"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-icon c-card-service-link-icon" style="--i-icon-m-width: 40px; --i-icon-m-color: var(--color-m-red);" aria-hidden="true"><svg class="icon icon-garbage" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#garbage"></use></svg></div><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="trash-amp-recycling" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div></li><li class="c-layout-carousel-grid-slide splide-slide" id="splide01-slide04" data-u="slides"><div class="c-card-service-link stretch-shape hover-dark set-bg-mid mod-new-tab" rel="noopener" target="_blank"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-icon c-card-service-link-icon" style="--i-icon-m-width: 40px; --i-icon-m-color: var(--color-m-red);" aria-hidden="true"><svg class="icon icon-car-parking-meter" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#car-parking-meter"></use></svg></div><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="parking" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div></li><li class="c-layout-carousel-grid-slide splide-slide" id="splide01-slide05" data-u="slides"><div class="c-card-service-link stretch-shape hover-dark set-bg-mid mod-new-tab" rel="noopener" target="_blank"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-icon c-card-service-link-icon" style="--i-icon-m-width: 40px; --i-icon-m-color: var(--color-m-red);" aria-hidden="true"><svg class="icon icon-truck" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#truck"></use></svg></div><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="metro-service" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div></li><li class="c-layout-carousel-grid-slide splide-slide" id="splide01-slide06" data-u="slides"><div class="c-card-service-link stretch-shape hover-dark set-bg-mid mod-new-tab" rel="noopener" target="_blank"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-icon c-card-service-link-icon" style="--i-icon-m-width: 40px; --i-icon-m-color: var(--color-m-red);" aria-hidden="true"><svg class="icon icon-truck" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#truck"></use></svg></div><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="road-closures" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div></li></ul></div></div></div></div></div></div></div></section>';

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
  block.querySelectorAll('.c-layout-carousel-grid').forEach((grid) => {
    const sp = grid.querySelector('.splide');
    if (!sp) return;
    const track = sp.querySelector('.splide-track');
    const list = sp.querySelector('.splide-list');
    const slides = [...list.children];
    const pag = sp.querySelector('.splide-pagination');
    const prev = sp.querySelector('.c-layout-carousel-grid-arrow-prev');
    const next = sp.querySelector('.c-layout-carousel-grid-arrow-next');
    const min = 328;
    const gap = 24;
    const bp = 2 * min + gap + 48;
    let idx = 0;
    let mounted = false;
    if (prev) prev.setAttribute('aria-label', 'Previous slide');
    if (next) next.setAttribute('aria-label', 'Next slide');
    const go = (i) => {
      idx = Math.max(0, Math.min(slides.length - 1, i));
      const w = slides[0].getBoundingClientRect().width + gap;
      list.style.transform = `translateX(${-idx * w}px)`;
      slides.forEach((s, j) => {
        s.classList.toggle('is-active', j === idx);
        s.classList.toggle('is-visible', j === idx);
      });
      [...pag.querySelectorAll('button')].forEach((bt, j) => {
        bt.classList.toggle('is-active', j === idx);
        bt.setAttribute('aria-selected', String(j === idx));
      });
      if (prev) prev.disabled = idx === 0;
      if (next) next.disabled = idx === slides.length - 1;
    };
    const mount = () => {
      mounted = true;
      sp.classList.add('mod-stackable');
      if (sp.classList.contains('mod-stacked')) return;
      sp.classList.add('is-initialized', 'is-overflow', 'is-active');
      slides.forEach((s, j) => {
        s.setAttribute('role', 'group');
        s.setAttribute('aria-roledescription', 'slide');
        s.setAttribute('aria-label', `${j + 1} of ${slides.length}`);
      });
      if (grid.classList.contains('mod-edge')) {
        track.style.paddingLeft = '16px';
        track.style.paddingRight = '16px';
      }
      slides.forEach((s) => {
        s.style.width = '100%';
        s.style.marginRight = `${gap}px`;
        s.style.flexShrink = '0';
      });
      pag.replaceChildren(...slides.map((s, j) => {
        const li = document.createElement('li');
        li.setAttribute('role', 'presentation');
        const bt = document.createElement('button');
        bt.className = 'splide-pagination-page';
        bt.type = 'button';
        bt.setAttribute('role', 'tab');
        bt.setAttribute('aria-label', `Go to slide ${j + 1}`);
        bt.addEventListener('click', () => go(j));
        li.append(bt);
        return li;
      }));
      go(idx);
    };
    const unmount = () => {
      mounted = false;
      sp.classList.remove('mod-stackable', 'is-active');
      list.style.transform = '';
      pag.replaceChildren();
      track.style.paddingLeft = '';
      track.style.paddingRight = '';
      slides.forEach((s) => {
        s.style.width = '';
        s.style.marginRight = '';
        s.style.flexShrink = '';
        s.classList.remove('is-active', 'is-visible');
      });
    };
    if (prev) prev.addEventListener('click', () => go(idx - 1));
    if (next) next.addEventListener('click', () => go(idx + 1));
    const swipe = grid.querySelector('.c-layout-carousel-grid-swipe');
    const stack = grid.querySelector('.c-layout-carousel-grid-stack');
    if (swipe) {
      swipe.addEventListener('click', () => {
        sp.classList.remove('mod-stacked');
        swipe.classList.add('mod-active');
        if (stack) stack.classList.remove('mod-active');
        mount();
      });
    }
    if (stack) {
      stack.addEventListener('click', () => {
        sp.classList.add('mod-stacked');
        stack.classList.add('mod-active');
        if (swipe) swipe.classList.remove('mod-active');
        unmount();
        sp.classList.add('mod-stackable');
      });
    }
    const check = () => {
      const w = grid.offsetWidth;
      if (w < bp && !mounted) mount();
      else if (w >= bp && mounted) unmount();
    };
    new ResizeObserver(check).observe(grid);
    check();
  });
}

export default function decorate(block) {
  if (block.dataset.filled) return;
  block.dataset.filled = 'true';
  run(block, TPL);
  behave(block);
}
