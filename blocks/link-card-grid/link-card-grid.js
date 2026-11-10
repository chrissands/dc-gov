/**
 * link-card-grid — a section heading over a two-column grid of linked image cards
 * (beta.dc.gov replica, the c-card-link-tabbed cards of a --regular c-layout-container).
 * Row 1 (optional, no image): the section heading. Every other row is one card — image, then a
 * heading whose link is the card's target, a description paragraph and a footer line. Missing
 * cells are skipped; extra paragraphs stay in the card body. The whole card is the link target
 * (stretched link); the arrow overlay is decoration.
 */

const OUTER = '<section class="c-layout-container mod-regular" style="--i-layout-container-m-content-width: var(--content-width-m-regular);"><div class="c-layout-container-color-wrapper"><div class="c-layout-container-l-content-width"><h2 class="c-heading c-layout-container-heading"></h2><div class="c-layout-container-content"><div class="c-layout-grid expand-context mod-fill" style="--i-layout-grid-m-max-column-count: 2;"></div></div></div></div></section>';

const ITEM = '<article class="c-card-link-tabbed set-small-text set-bg-mid stretch-shape hover-dark mod-new-tab"><div class="c-card-link-tabbed-l"><a href="" class="stretch-link"><div class="c-card-link-tabbed-l-top"><div class="c-card-link-tabbed-img" aria-hidden="true"><img width="660" height="230" loading="eager"></div><h3 class="c-heading c-card-link-tabbed-heading"></h3></div></a><div class="c-card-link-tabbed-content"></div><div class="c-card-link-tabbed-bottom"></div><div class="c-card-link-tabbed-arrow-overlay" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="42" height="30" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></article>';

function frag(html) {
  const t = document.createElement('template');
  t.innerHTML = html;
  return t.content;
}

const slug = (s) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const elems = (row) => [...row.children].flatMap((cell) => [...cell.children]);
const isHeading = (n) => /^H[1-6]$/.test(n.tagName);

/** the authored element takes the template slot's place and attributes (MOVED, never rebuilt) */
function adopt(slot, el) {
  [...slot.attributes].forEach(({ name, value }) => {
    if (name === 'class') el.classList.add(...value.split(/\s+/).filter(Boolean));
    else el.setAttribute(name, value);
  });
  slot.replaceWith(el);
  if (!el.id && /^H[1-6]$/.test(el.tagName)) el.id = slug(el.textContent);
}

/** slot tag differs (div ← p): the authored node sits inside it, display: contents */
function nest(slot, el) {
  el.classList.add('tp');
  slot.replaceChildren(el);
}

function card(row) {
  const unit = frag(ITEM).firstElementChild;
  const all = elems(row);
  const isImg = (n) => ['PICTURE', 'IMG'].includes(n.tagName)
    || (n.querySelector('img') && !n.textContent.trim());
  const imgEl = all.find(isImg);
  const rest = all.filter((n) => n !== imgEl);
  const box = unit.querySelector('.c-card-link-tabbed-img');
  const tplImg = box.querySelector('img');
  if (imgEl) {
    const img = imgEl.tagName === 'IMG' ? imgEl : imgEl.querySelector('img');
    ['width', 'height', 'loading'].forEach((a) => img.setAttribute(a, tplImg.getAttribute(a)));
    if (imgEl !== img) {
      imgEl.classList.add('tp');
      imgEl.querySelectorAll('picture').forEach((p) => p.classList.add('tp'));
    }
    tplImg.replaceWith(imgEl);
  } else tplImg.remove();
  const link = unit.querySelector('a.stretch-link');
  const head = unit.querySelector('.c-card-link-tabbed-heading');
  const title = rest.find(isHeading) || rest.find((n) => n.querySelector('a') || n.tagName === 'A');
  if (title) {
    const a = title.tagName === 'A' ? title : title.querySelector('a');
    if (a) {
      link.href = a.href;
      a.replaceWith(...a.childNodes);
    }
    adopt(head, title);
    rest.splice(rest.indexOf(title), 1);
  } else head.remove();
  const content = unit.querySelector('.c-card-link-tabbed-content');
  const bottom = unit.querySelector('.c-card-link-tabbed-bottom');
  if (rest.length > 1) nest(bottom, rest.pop());
  else bottom.remove();
  if (rest.length) content.replaceChildren(...rest);
  else content.remove();
  return unit;
}

export default function decorate(block) {
  if (block.dataset.filled) return;
  block.dataset.filled = 'true';
  const rows = [...block.children];
  const root = frag(OUTER);
  const grid = root.querySelector('.c-layout-grid');
  const h = root.querySelector('.c-layout-container-heading');
  const first = rows[0] ? elems(rows[0]) : [];
  if (first.length && first.every(isHeading)) {
    rows.shift();
    const [authored, ...more] = first;
    adopt(h, authored);
    h.after(...more);
  } else h.remove();
  rows.forEach((row) => grid.append(card(row)));
  block.replaceChildren(root);
}
