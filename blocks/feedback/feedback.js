/**
 * feedback — "We want to hear from you" card pair and the page attribution
 * (beta.dc.gov replica). Template-slotted; the form opens from "Send feedback".
 *
 * @ew-exempt form UI (Yes, No, Send feedback, Send your feedback, field labels, Submit,
 * Close feedback form, the privacy and 911 notes) — webform chrome, not page content.
 */

const TPL = '<div class="node-feedback"><section class="c-layout-container" style="--i-layout-container-m-content-width: var(--content-width-m-narrow);"><div class="c-layout-container-color-wrapper"><div class="c-layout-container-l-content-width"><div class="c-layout-container-content"><article class="c-feedback"><div class="c-feedback-l"><div class="c-feedback-cards-l"><div class="c-feedback-card mod-left set-bg-dark"><h2 class="c-heading c-feedback-heading" id="we-want-to-hear-from-you-7" data-s="h" data-t></h2><p data-s="p" data-t></p><div class="c-feedback-card-bottom"><p data-s="p" data-t></p><div class="c-feedback-card-actions"><button class="c-button-pill c-feedback-form-open" type="button" style="--i-button-pill-m-icon-size: 16px;">Yes </button><button class="c-button-pill c-feedback-form-open" type="button" style="--i-button-pill-m-icon-size: 16px;">No </button></div></div></div><div class="c-feedback-card mod-right"><div class="c-feedback-card-top set-bg-dark"><svg class="icon icon-document-list-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#document-list-check"></use></svg><p data-s="p" data-t></p></div><div class="c-feedback-card-bottom set-bg-mid"><button class="c-button-pill mod-icon c-feedback-form-toggle" type="button" style="--i-button-pill-m-icon-size: 12px;">Send feedback<div class="c-icon c-button-pill-icon" aria-hidden="true"><svg class="icon icon-caret-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#caret-down"></use></svg></div></button><a href="/" class="c-link-arrow mod-arrow c-feedback-form-link" data-s="a" data-t></a></div></div></div><div class="c-feedback-form set-bg-mid" hidden=""><div class="c-feedback-form-scroll-anchor" aria-hidden="true"></div><div class="c-feedback-form-top"><h3 class="c-heading c-feedback-form-heading" id="send-your-feedback-7">Send your feedback</h3><button class="c-feedback-form-close" type="button"><span class="visually-hidden">Close feedback form</span><svg class="icon icon-close-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#close-x"></use></svg></button></div><div class="c-feedback-form-l"><div id="webform-submission-send-your-feedback-form-ajax-content" tabindex="-1"><div id="webform-submission-send-your-feedback-form-ajax" class="webform-ajax-form-wrapper"><form class="webform-submission-form webform-submission-add-form webform-submission-send-your-feedback-form webform-submission-send-your-feedback-add-form webform-details-toggle" id="webform-submission-send-your-feedback-add-form-7"><div id="edit-description-7" class="webform-type-webform-markup form-item form-type-webform-markup form-item-description form-no-label"><p>Please do not include personal information (home address, tax ID, social security number, etc.)</p></div><div class="webform-type-textarea form-item form-type-textarea form-item-about-this-page"><label for="edit-about-this-page--7" class="form-required">What was helpful about this page?</label><div></div></div><div class="webform-type-email form-item form-type-email form-item-email"><label for="edit-email--7" class="form-required">If you need us to contact you, please provide an email address:</label><input type="email" id="edit-email-7" name="email" value="" class="form-email required"></div><div id="edit-footer-text-7" class="webform-type-webform-markup form-item form-type-webform-markup form-item-footer-text form-no-label"><p>If this is an emergency, please call 911</p></div><div class="form-actions webform-actions form-wrapper" id="edit-actions-13"><input class="webform-button-submit submit button button-primary form-submit" type="submit" id="edit-actions-submit-7" name="op" value="Submit"></div><div class="url-textfield form-wrapper" style="display: none !important;"><div class="form-item form-type-textfield form-item-url"><label for="edit-url--7">Leave this field blank</label><input type="text" id="edit-url-7" name="url" value="" class="form-text"></div></div></form></div></div></div></div></div></article></div></div></div></section></div><div class="node-attribution"><div class="node-attribution-updated" data-s="p" data-t></div><div class="node-attribution-maintainer" data-s="p" data-t></div></div>';

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
  const form = block.querySelector('.c-feedback-form');
  if (!form) return;
  const open = () => { form.hidden = false; };
  block.querySelectorAll('.c-feedback-form-toggle, .c-feedback-form-open').forEach((b) => b.addEventListener('click', open));
  const close = block.querySelector('.c-feedback-form-close');
  if (close) close.addEventListener('click', () => { form.hidden = true; });
}

export default function decorate(block) {
  if (block.dataset.filled) return;
  block.dataset.filled = 'true';
  run(block, TPL);
  behave(block);
}
