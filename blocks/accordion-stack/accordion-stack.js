/**
 * accordion-stack — a stack of collapsible items with a "Toggle all" control (beta.dc.gov replica,
 * the c-accordion items of a static page).
 * One row per item: cell 1 is the title, cell 2 the panel — free-form: every authored element lands
 * in the panel's editor text, in order. A one-cell row takes its first element as the title.
 * Panels start collapsed; a title toggles its panel, "Toggle all" opens every panel (or closes them
 * all when one is open).
 *
 * @ew-exempt the "Toggle all accordion items" control — behaviour chrome, not authored.
 */

const OUTER = '<section class="c-layout-container mod-regular"><div class="c-layout-container-color-wrapper"><div class="c-layout-container-l-content-width"><div class="c-layout-container-content"><div class="accordion-toggle-all-l"><button class="c-button-plus js-accordion-set" type="button" data-set="accordion-1141">Toggle all <span class="visually-hidden">accordion items</span><span class="c-button-plus-icon-box" aria-hidden="true"></span></button></div><ul class="c-layout-stack"></ul></div></div></div></section>';

const ITEM = '<li><article class="c-accordion"><h3 class="c-accordion-heading"><button class="c-accordion-toggle js-accordion" type="button" aria-expanded="false" data-set="accordion-1141"><div class="c-accordion-head-top"><span class="c-accordion-title"></span><span class="c-accordion-icon" aria-hidden="true"></span></div></button></h3><div class="c-accordion-panel" hidden=""><div class="c-accordion-panel-content set-editor-text"></div></div></article></li>';

function frag(html) {
  const t = document.createElement('template');
  t.innerHTML = html;
  return t.content;
}

/** the title cell's authored element (or its loose text, wrapped) and the panel's elements */
function split(row) {
  const cells = [...row.children];
  const elems = (cell) => [...cell.childNodes]
    .filter((n) => n.nodeType === 1 || n.textContent.trim());
  if (cells.length > 1) return [elems(cells[0]), cells.slice(1).flatMap(elems)];
  const all = cells[0] ? elems(cells[0]) : [];
  return [all.slice(0, 1), all.slice(1)];
}

function wrapText(nodes, tag) {
  return nodes.map((n) => {
    if (n.nodeType === 1) return n;
    const el = document.createElement(tag);
    el.append(n);
    return el;
  });
}

function setOpen(toggle, open) {
  const panel = toggle.closest('.c-accordion').querySelector('.c-accordion-panel');
  toggle.setAttribute('aria-expanded', String(open));
  if (panel) panel.hidden = !open;
}

let seq = 0;

export default function decorate(block) {
  if (block.dataset.filled) return;
  block.dataset.filled = 'true';
  seq += 1;
  const set = `accordion-stack-${seq}`;
  const root = frag(OUTER);
  const list = root.querySelector('.c-layout-stack');
  [...block.children].forEach((row) => {
    const [title, body] = split(row);
    if (!title.length && !body.length) return;
    const n = list.children.length + 1;
    const item = frag(ITEM).firstElementChild;
    const article = item.querySelector('.c-accordion');
    const toggle = item.querySelector('.c-accordion-toggle');
    const panel = item.querySelector('.c-accordion-panel');
    article.id = `${set}-item-${n}`;
    panel.id = `${set}-panel-${n}`;
    toggle.setAttribute('aria-controls', panel.id);
    toggle.dataset.set = set;
    const head = wrapText(title, 'p');
    head.forEach((el) => el.classList.add('tp'));
    item.querySelector('.c-accordion-title').append(...head);
    const content = item.querySelector('.c-accordion-panel-content');
    content.append(...wrapText(body, 'p'));
    content.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((h) => h.classList.add('c-heading'));
    list.append(item);
  });
  const all = root.querySelector('.js-accordion-set');
  if (all) all.dataset.set = set;
  block.replaceChildren(root);
  const toggles = [...block.querySelectorAll('.c-accordion-toggle')];
  toggles.forEach((t) => t.addEventListener('click', () => setOpen(t, t.getAttribute('aria-expanded') !== 'true')));
  if (!all) return;
  if (!toggles.length) {
    all.closest('.accordion-toggle-all-l').remove();
    return;
  }
  all.addEventListener('click', () => {
    all.classList.toggle('mod-active');
    const open = !toggles.some((t) => t.getAttribute('aria-expanded') === 'true');
    toggles.forEach((t) => setOpen(t, open));
  });
}
