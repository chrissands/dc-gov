import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * Site header (beta.dc.gov replica) — template-slotted chrome.
 *
 * The chrome skeleton below is the prototype's `header#site-header` with every authored
 * slot emptied; the authored /nav document is MOVED into it by role (sections carry a
 * `nav-*` style: nav-alerts, nav-menu, nav-leadership, nav-featured, nav-iwt, nav-iaa,
 * nav-search). Behaviour is exactly the prototype's chrome JS (canon.js): the large/small
 * header switch at 1100.01px with its header-height variables, and the short header once
 * #intersection-trigger passes 50px under the viewport top. Menus, drawers, alerts and
 * accordions open and close as observed on the live header (initToggles).
 *
 * @ew-exempt control labels (Toggle menu/search/translation, Close, Translate, Search,
 * I want to, I am a, Skip to main content) and the gtranslate language selector are UI
 * chrome of the vendor/theme, not authored content.
 */

const SPRITE = '/icons/dc-icons-sprite.svg';
const LARGE_MQ = '(min-width: 1100.01px)';

const HEADER_TEMPLATE = `
<div class="shs" id="site-header-small" hidden><div class="shs-alerts set-bg-dark mod-single" id="site-header-small-alerts" hidden><div class="shs-alerts-controls">
<button class="shs-alerts-dismiss" type="button">
<span class="visually-hidden">Close alerts</span>
<svg class="icon icon-close-x" xmlns="https://www.w3.org/2000/svg" width="12" height="12" color="currentColor" aria-hidden="true">
<use href="/icons/dc-icons-sprite.svg#close-x"></use></svg>
</button></div><div class="shs-alerts-content"><div class="shs-alerts-slot shs-alerts-single"></div></div></div><div class="shs-main"><div class="shs-main-l"><div class="shs-main-top set-bg-dark">
<a class="shs-top-logo" href="/" rel="home">
<img src="/icons/logo-flag.svg" alt="Home" height="35" width="35" loading="eager">
</a>
<button class="shs-alerts-toggle" type="button" aria-controls="site-header-small-alerts" aria-expanded="false">
<span class="visually-hidden"> 1 alert </span>
<span class="shs-alerts-toggle-icon" aria-hidden="true">
<svg class="icon icon-bell" xmlns="https://www.w3.org/2000/svg" width="16" height="16" color="currentColor" aria-hidden="true">
<use href="/icons/dc-icons-sprite.svg#bell"></use></svg>
<span class="shs-alerts-toggle-icon-count">1</span>
</span>
</button></div><div class="shs-main-bottom">
<button class="shs-menu-toggle" type="button" aria-expanded="false" aria-controls="site-header-small-menu-drawer">
<span class="visually-hidden">Toggle menu</span>
<span class="menu-toggle-line mod-top" aria-hidden="true"></span>
<span class="menu-toggle-line mod-middle" aria-hidden="true"></span>
<span class="menu-toggle-line mod-bottom" aria-hidden="true"></span>
</button>
<a class="shs-logo" href="/" rel="home">
<img src="/icons/logo-small.svg" alt="Home" height="26" width="72" loading="eager">
</a>
<button class="shs-search-toggle" type="button" aria-expanded="false" aria-controls="site-header-small-search-drawer">
<span class="visually-hidden">Toggle search</span>
<svg class="icon icon-search" xmlns="https://www.w3.org/2000/svg" width="18" height="18" color="currentColor" aria-hidden="true">
<use href="/icons/dc-icons-sprite.svg#search"></use></svg>
<span class="menu-toggle-line mod-top" aria-hidden="true"></span>
<span class="menu-toggle-line mod-bottom" aria-hidden="true"></span>
</button></div><div class="shs-menu-drawer shs-drawer set-bg-dark" id="site-header-small-menu-drawer"><div class="shs-nav-slot">
</div><div class="shs-iwt-slot"></div><div class="shs-iaa-slot" hidden></div>
<button class="c-button-pill mod-secondary mod-icon shs-menu-drawer-dismiss" type="button" style="--i-button-pill-m-icon-size: 12px;">Close<div class="c-icon c-button-pill-icon" aria-hidden="true">
<svg class="icon icon-close-x" xmlns="https://www.w3.org/2000/svg" width="12" height="12" color="currentColor" aria-hidden="true">
<use href="/icons/dc-icons-sprite.svg#close-x"></use></svg></div>
</button></div><div class="shs-search-drawer shs-drawer" id="site-header-small-search-drawer"><div class="shs-search-slot"></div></div></div></div></div><div class="shl" id="site-header-large" hidden><div class="shl-alerts set-bg-dark mod-single" id="site-header-large-alerts" hidden><div class="shl-alerts-l"><div class="shl-alerts-content"><div class="shl-alerts-slot"><div class="sh-alerts">
<article class="c-slab-alert set-small-text set-bg-dark mod-header-alert mod-has-link" style="--i-slab-alert-m-bg-color: var(--color-m-dark-blue);"><div class="c-slab-alert-l"><div class="c-icon c-slab-alert-icon" style="--i-icon-m-width: 16px; --i-icon-m-height: 16px;" aria-hidden="true">
<svg class="icon icon-alert" xmlns="https://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true">
<use href="/icons/dc-icons-sprite.svg#alert"></use></svg></div><div class="c-slab-alert-text-l"><div class="c-slab-alert-content"></div></div></div>
</article></div></div></div><div class="shl-alerts-controls">
<button class="shl-alerts-dismiss" type="button">
<span class="visually-hidden">Close alerts</span>
<svg class="icon icon-close-x" xmlns="https://www.w3.org/2000/svg" width="16" height="16" color="currentColor" aria-hidden="true">
<use href="/icons/dc-icons-sprite.svg#close-x"></use></svg>
</button></div></div></div><div class="shl-main"><div class="shl-main-l">
<a class="shl-logo" href="/" rel="home">
<img src="/icons/logo.svg" alt="Home" height="47" width="102" loading="eager">
</a><div class="shl-main-top"><div class="shl-translate-toggle-slot-tall">
<button class="shl-translate-toggle" type="button" aria-expanded="false" aria-controls="site-header-large-translate-drawer">
<span class="visually-hidden">Toggle translation</span><div class="shl-translate-toggle-icon shl-toggle-icon" aria-hidden="true">
<svg class="icon icon-translate" xmlns="https://www.w3.org/2000/svg" width="20" height="18" color="currentColor" aria-hidden="true">
<use href="/icons/dc-icons-sprite.svg#translate"></use></svg>
<span class="menu-toggle-line mod-top"></span>
<span class="menu-toggle-line mod-bottom"></span></div>
<span class="shl-translate-toggle-label" aria-hidden="true">Translate</span>
</button></div><div class="shl-alerts-toggle-slot-tall">
<button class="shl-alerts-toggle" type="button" aria-controls="site-header-large-alerts" aria-expanded="false">
<span class="visually-hidden"> 1 alert </span>
<span class="shl-alerts-toggle-icon" aria-hidden="true">
<svg class="icon icon-bell" xmlns="https://www.w3.org/2000/svg" width="16" height="16" color="currentColor" aria-hidden="true">
<use href="/icons/dc-icons-sprite.svg#bell"></use></svg>
<span class="shl-alerts-toggle-icon-count">1</span>
</span>
</button></div><div class="shl-search-toggle-slot-tall">
<button class="shl-search-toggle" type="button" aria-expanded="false" aria-controls="site-header-large-search-drawer">
<span class="visually-hidden">Toggle search</span><div class="shl-search-toggle-icon shl-toggle-icon" aria-hidden="true">
<svg class="icon icon-search" xmlns="https://www.w3.org/2000/svg" width="16" height="16" color="currentColor" aria-hidden="true">
<use href="/icons/dc-icons-sprite.svg#search"></use></svg>
<span class="menu-toggle-line mod-top"></span>
<span class="menu-toggle-line mod-bottom"></span></div>
<span class="shl-search-toggle-label" aria-hidden="true">Search</span>
</button></div></div><div class="shl-main-bottom"><div class="shl-i-menus"><div class="shl-iwt-slot"><div class="sh-iwt i-menu js-dropover" hidden>
<button class="iwt-toggle i-menu-toggle js-dropover-toggle" type="button" aria-expanded="false" aria-controls="sh-iwt-panel">
<svg class="icon icon-location-pin-question" xmlns="https://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true">
<use href="/icons/dc-icons-sprite.svg#location-pin-question"></use></svg> I want to<div class="i-menu-accordion-icon"></div>
</button><div class="iwt-panel i-menu-panel js-dropover-panel set-bg-dark" id="sh-iwt-panel" hidden><div class="iwt-action"><ul class="menu iwt-action-menu"></ul></div><div class="iwt-life"><div class="iwt-life-intro"><div class="iwt-life-card i-menu-card"><div class="iwt-life-card-body i-menu-card-body"></div><div class="iwt-life-card-link i-menu-card-link"></div></div></div><ul class="menu iwt-life-menu i-menu-icon-links"></ul></div></div></div></div><div class="shl-iaa-slot"><div class="sh-iaa i-menu js-dropover" hidden>
<button class="iaa-toggle i-menu-toggle js-dropover-toggle" type="button" aria-expanded="false" aria-controls="sh-iaa-panel">
<svg class="icon icon-user" xmlns="https://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true">
<use href="/icons/dc-icons-sprite.svg#user"></use></svg> I am a<div class="i-menu-accordion-icon"></div>
</button><div class="iaa-panel i-menu-panel js-dropover-panel set-bg-dark" id="sh-iaa-panel" hidden><div class="iaa-intro"><div class="iaa-card i-menu-card"><div class="iaa-card-body i-menu-card-body"></div><div class="iaa-card-link i-menu-card-link"></div></div></div><ul class="menu iaa-menu i-menu-icon-links"></ul></div></div></div></div><div class="shl-nav-slot"><nav class="sh-nav" aria-labelledby="site-header-nav-title"><h2 id="site-header-nav-title" class="visually-hidden">Main Menu</h2><ul class="menu menu-main"></ul>
</nav></div><div class="shl-misc"><div class="shl-translate-toggle-slot-short"></div><div class="shl-accessibility-slot-short"></div><div class="shl-alerts-toggle-slot-short"></div><div class="shl-search-toggle-slot-short"></div></div></div><div class="shl-translate-drawer shl-drawer" id="site-header-large-translate-drawer" hidden><div class="shl-translate-slot shl-drawer-slot"><div class="sh-translate"><div class="sh-translate-icon">
<svg class="icon icon-translate" xmlns="https://www.w3.org/2000/svg" width="20" height="18" color="currentColor" aria-hidden="true">
<use href="/icons/dc-icons-sprite.svg#translate"></use></svg></div><div class="gtranslate-wrapper gt-container-wz96ug"><select class="gt-selector notranslate" aria-label="Select Language"><option value="">Select Language</option><option value="en|en" selected="">English</option><option value="en|es">Spanish</option><option value="en|am">Amharic</option><option value="en|zh-CN">Chinese (Simplified)</option><option value="en|fr">French</option><option value="en|ko">Korean</option><option value="en|vi">Vietnamese</option></select></div></div></div></div><div class="shl-search-drawer shl-drawer set-bg-mid" id="site-header-large-search-drawer" hidden><div class="shl-search-slot shl-drawer-slot"><div class="sh-search" id="sh-search"><form id="sh-search-form" action="https://beta.dc.gov/search" method="get" accept-charset="UTF-8"><div class="sh-search-l"><div class="sh-search-icon" aria-hidden="true">
<svg class="icon icon-search" xmlns="https://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true">
<use href="/icons/dc-icons-sprite.svg#search"></use></svg></div><div class="sh-search-loading-icon" aria-hidden="true" hidden>
<svg class="icon icon-loading" xmlns="https://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true">
<use href="/icons/dc-icons-sprite.svg#loading"></use></svg></div>
<label for="sh-edit-keys" class="visually-hidden">Search</label>
<input class="sh-search-key" id="sh-edit-keys" placeholder="Type your search here" type="search" name="key" value="">
<input class="sh-search-submit" type="submit" value="Search"></div></form><div class="sh-search-results"><div class="sh-search-results-view" id="sh-search-results-view"></div><div class="search-block-view-middle-columns" id="sh-search-results-middle-columns">
<article class="c-card-sidebar set-bg-mid set-small-text expand-context-child search-suggested"><div class="c-card-sidebar-content"><ul class="search-suggested-list"></ul></div>
</article>
<article class="c-card-sidebar set-bg-mid set-small-text expand-context-child search-questions"><div class="c-card-sidebar-content"><div class="search-questions-all-link flex-col-center-h"></div></div>
</article></div>
<article class="c-card-sidebar set-bg-mid set-small-text expand-context-child search-recent"><div class="c-card-sidebar-content"><ul class="search-recent-links"></ul>
<button class="c-button-plus mod-active mod-icon-first search-recent-clear js-search-recent-clear mod-hide" type="button" hidden="true">Clear <span class="visually-hidden">recent searches</span>
<span class="c-button-plus-icon-box" aria-hidden="true"></span>
</button></div>
</article></div></div></div></div></div></div></div>
`;

const SHCT_TEMPLATE = '<div class="shct" id="site-header-content-top" hidden><div class="shs-translate-slot"><select class="gt-selector notranslate" aria-label="Select Language"><option value="">Select Language</option><option value="en|am">Amharic</option><option value="en|zh-CN">Chinese (Simplified)</option><option value="en|en" selected="">English</option><option value="en|fr">French</option><option value="en|ko">Korean</option><option value="en|es">Spanish</option><option value="en|vi">Vietnamese</option></select></div></div>';

const GOV_TOGGLE_TEMPLATE = `<button type="button" class="menu-main-toggle js-dropover-toggle" aria-expanded="false" aria-controls="gov-menu-dropover-panel">
<span class="visually-hidden">Toggle sub-menu</span>
<span class="menu-main-toggle-icon" aria-hidden="true"></span>
</button>`;

const GOV_PANEL_TEMPLATE = '<div class="menu-main-panel js-dropover-panel set-bg-dark" id="gov-menu-dropover-panel" hidden><div class="mm-leadership"><div class="mm-leadership-mayor"><div class="mm-leadership-photo-l"></div><div class="mm-leadership-content-l"></div></div><div class="mm-leadership-featured" hidden></div></div><div class="menu-main-panel-submenu"><ul class="menu submenu"></ul></div></div>';

function fromHTML(html) {
  const tpl = document.createElement('template');
  tpl.innerHTML = html;
  return tpl.content;
}

function el(tag, className, attrs = {}) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v));
  return e;
}

function spriteIcon(name, width, height) {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('class', `icon icon-${name}`);
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute('color', 'currentColor');
  svg.setAttribute('aria-hidden', 'true');
  const use = document.createElementNS(ns, 'use');
  use.setAttribute('href', `${SPRITE}#${name}`);
  svg.append(use);
  return svg;
}

/** the default-content wrapper of the fragment section styled `name` */
function part(fragment, name) {
  const section = fragment && fragment.querySelector(`.${name}`);
  if (!section) return null;
  return section.querySelector('.default-content-wrapper') || section;
}

/** an authored link, unwrapped from its paragraph when it sits alone in one */
function takeLink(node) {
  if (!node) return null;
  const a = node.tagName === 'A' ? node : node.querySelector('a');
  if (!a) return null;
  const p = a.parentElement;
  a.remove();
  if (p && p.tagName === 'P' && !p.textContent.trim() && !p.children.length) p.remove();
  return a;
}

/** label nodes of a list item (everything but its nested list), unwrapped from a <p> */
function labelNodes(li) {
  const nodes = [...li.childNodes].filter((n) => !(n.nodeType === 1 && /^(UL|OL)$/.test(n.tagName)));
  const p = nodes.find((n) => n.nodeType === 1 && n.tagName === 'P');
  return p ? [...p.childNodes] : nodes;
}

function kebab(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function iconContent(li, gap, icon) {
  const wrap = el('div', 'c-icon-content-icon', { style: `gap: ${gap};` });
  if (icon) wrap.append(icon);
  const content = el('div', 'c-icon-content-icon-content');
  content.append(...li.childNodes);
  wrap.append(content);
  li.append(wrap);
}

function slotAlerts(root, src) {
  if (!src) return;
  const text = root.querySelector('.c-slab-alert-text-l');
  const content = text.querySelector('.c-slab-alert-content');
  const h = src.querySelector('h1, h2, h3, h4, h5, h6');
  if (h) {
    h.classList.add('c-heading', 'c-slab-alert-heading');
    text.prepend(h);
  }
  const paras = [...src.querySelectorAll(':scope > p')];
  paras.forEach((p) => {
    if (p.querySelector('a') && p.textContent.trim() === p.querySelector('a').textContent.trim()) {
      p.classList.add('c-slab-alert-header-link');
    }
    content.append(p);
  });
}

function buildSubmenu(groups, panelPrefix) {
  const ul = el('ul', 'menu submenu');
  [...groups.children].forEach((group, i) => {
    const li = el('li', 'menu-item mod-menu-level-1 mod-has-submenu mod-expanded');
    const top = el('div', 'accordion-menu-top');
    const label = el('span');
    label.append(...labelNodes(group));
    const id = `${panelPrefix}-${i + 1}`;
    top.append(label, fromHTML(`<button class="accordion-menu-toggle js-accordion" type="button"
      aria-expanded="false" aria-controls="${id}"><span class="visually-hidden">Toggle sub-menu</span>
      <span class="accordion-menu-toggle-icon" aria-hidden="true"></span></button>`));
    const panel = el('div', 'accordion-menu-panel', { id, hidden: '' });
    const sub = group.querySelector(':scope > ul');
    if (sub) {
      sub.className = 'menu submenu';
      [...sub.children].forEach((item) => {
        item.className = 'menu-item mod-menu-level-2';
        const pa = item.querySelector(':scope > p > a');
        if (pa) pa.parentElement.replaceWith(pa);
      });
      panel.append(sub);
    }
    li.append(top, panel);
    ul.append(li);
  });
  return ul;
}

function slotMenu(root, fragment) {
  const menu = root.querySelector('.menu-main');
  const src = part(fragment, 'nav-menu');
  const list = src && src.querySelector('ul');
  if (!list) return;
  const here = window.location.pathname;
  const markActive = (li) => {
    const a = li.querySelector(':scope > a, :scope > p > a');
    if (!a) return;
    const url = new URL(a.href, window.location);
    if (url.origin === window.location.origin && url.pathname === here) {
      a.classList.add('is-active');
      let p = li;
      while (p && p !== menu) {
        if (p.classList.contains('menu-item')) p.classList.add('mod-active-trail');
        p = p.parentElement;
      }
    }
  };
  const items = [...list.children];
  items.forEach((li) => {
    li.className = 'menu-item mod-menu-level-0';
    const pa = li.querySelector(':scope > p > a');
    if (pa) pa.parentElement.replaceWith(pa);
    const groups = li.querySelector(':scope > ul');
    menu.append(li);
    if (groups) {
      li.classList.add('js-dropover', 'menu-main-dropover', 'mod-has-submenu', 'mod-expanded');
      groups.remove();
      const panel = fromHTML(GOV_PANEL_TEMPLATE);
      const submenu = panel.querySelector('.menu-main-panel-submenu');
      submenu.replaceChildren(buildSubmenu(groups, 'accordion-menu-main-accordion-panel'));
      li.append(fromHTML(GOV_TOGGLE_TEMPLATE), panel);
    }
  });
  // mark after insertion so the trail walks the real menu
  menu.querySelectorAll('.menu-item').forEach(markActive);

  const lead = part(fragment, 'nav-leadership');
  const mayor = menu.querySelector('.mm-leadership-mayor');
  if (lead && mayor) {
    const photo = mayor.querySelector('.mm-leadership-photo-l');
    const media = lead.querySelector('picture, img');
    if (media) {
      const mp = media.closest('p');
      photo.append(media);
      if (mp && !mp.textContent.trim() && !mp.children.length) mp.remove();
    }
    const visit = takeLink(lead.querySelector(':scope > p a'));
    if (visit) {
      visit.className = 'c-link-arrow mod-arrow mod-new-tab';
      visit.rel = 'noopener';
      visit.target = '_blank';
      photo.append(visit);
    }
    const content = mayor.querySelector('.mm-leadership-content-l');
    const h = lead.querySelector('h1, h2, h3, h4, h5, h6');
    if (h) {
      h.classList.add('mm-leadership-heading');
      content.append(h);
    }
    const sub = lead.querySelector(':scope > p');
    if (sub) {
      sub.classList.add('mm-leadership-subhead');
      content.append(sub);
    }
    const links = lead.querySelector('ul');
    if (links) {
      links.classList.add('mm-leadership-links');
      content.append(links);
    }
  }
  const feat = part(fragment, 'nav-featured');
  const featured = menu.querySelector('.mm-leadership-featured');
  if (feat && featured) {
    const date = feat.querySelector(':scope > p:not(:has(a))');
    if (date) {
      date.classList.add('mm-leadership-dateline');
      featured.append(date);
    }
    const h = feat.querySelector('h1, h2, h3, h4, h5, h6');
    if (h) featured.append(h);
    const cta = takeLink(feat.querySelector('a'));
    if (cta) {
      cta.className = 'c-link-pill mod-arrow mod-secondary';
      featured.append(cta);
    }
  }
}

function slotCard(scope, src, key, h2Start) {
  const nodes = [...src.children];
  const start = nodes.indexOf(h2Start);
  const rest = nodes.slice(start + 1);
  const intro = scope.querySelector(`.${key}-intro`);
  const card = scope.querySelector('.i-menu-card');
  h2Start.classList.add(`${key}-heading`, 'i-menu-pre-card-heading');
  intro.prepend(h2Start);
  const paras = rest.filter((n) => n.tagName === 'P');
  const linkP = paras.find((p) => p.querySelector('a'));
  const [head, body] = paras.filter((p) => p !== linkP);
  if (head) {
    head.classList.add(`${key}-card-heading`, 'i-menu-card-heading');
    card.prepend(head);
  }
  if (body) card.querySelector('.i-menu-card-body').append(body);
  if (linkP) card.querySelector('.i-menu-card-link').append(takeLink(linkP));
  const list = rest.find((n) => n.tagName === 'UL');
  const menu = scope.querySelector('.i-menu-icon-links');
  if (list) {
    [...list.children].forEach((li) => {
      const icon = li.querySelector('.icon');
      let prefix = null;
      if (icon) {
        const name = [...icon.classList].find((c) => c.startsWith('icon-')).slice(5);
        icon.remove();
        prefix = el('div', 'c-icon c-icon-content-icon-icon mod-prefix', {
          style: '--i-icon-m-width: 25px; --i-icon-m-color: inherit;',
          'aria-hidden': 'true',
        });
        const inner = el('div', 'c-icon', { 'aria-hidden': 'true' });
        inner.append(spriteIcon(name, 24, 24));
        prefix.append(inner);
      }
      const pa = li.querySelector(':scope > p > a');
      if (pa) pa.parentElement.replaceWith(pa);
      iconContent(li, '19px', prefix);
      menu.append(li);
    });
  }
}

function slotIwt(root, src) {
  if (!src) return;
  const scope = root.querySelector('.sh-iwt');
  const [actionH, lifeH] = src.querySelectorAll('h2');
  const action = scope.querySelector('.iwt-action');
  const menu = action.querySelector('.iwt-action-menu');
  if (actionH) {
    actionH.classList.add('iwt-action-heading');
    action.prepend(actionH);
  }
  const list = src.querySelector(':scope > ul');
  if (list) {
    [...list.children].forEach((item) => {
      const sub = item.querySelector(':scope > ul');
      const label = labelNodes(item);
      const id = `action-${kebab(label.map((n) => n.textContent).join(' '))}`;
      const li = el('li', 'iwt-flyout js-dropover js-dropover-no-slide');
      const toggle = el('button', 'iwt-flyout-toggle js-dropover-toggle', {
        type: 'button', 'aria-expanded': 'false', 'aria-controls': id,
      });
      toggle.append(...label, el('div', 'iwt-flyout-toggle-icon'));
      const panel = el('div', 'iwt-flyout-panel js-dropover-panel', { id, hidden: '' });
      if (sub) {
        sub.className = 'menu iwt-action-submenu';
        let more = null;
        [...sub.children].forEach((li2) => {
          const pa = li2.querySelector(':scope > p > a');
          if (pa) pa.parentElement.replaceWith(pa);
          const a = li2.querySelector('a');
          if (!a) return;
          const em = a.querySelector('em');
          if (em) {
            a.classList.add('iwt-action-link');
            em.classList.add('iwt-action-link-prefix');
          } else {
            more = a;
            li2.remove();
          }
        });
        panel.append(sub);
        if (more) {
          more.className = 'c-link-pill mod-arrow mod-secondary iwt-action-more-link';
          panel.append(more);
        }
      }
      li.append(toggle, panel);
      menu.append(li);
    });
  }
  if (lifeH) slotCard(scope.querySelector('.iwt-life'), src, 'iwt-life', lifeH);
}

function slotIaa(root, src) {
  if (!src) return;
  const scope = root.querySelector('.sh-iaa');
  const h = src.querySelector('h2');
  if (h) slotCard(scope, src, 'iaa', h);
}

function slotSearch(root, src) {
  if (!src) return;
  const heads = [...src.querySelectorAll('h1, h2, h3, h4, h5, h6')];
  const cards = ['.search-suggested', '.search-questions', '.search-recent']
    .map((s) => root.querySelector(s));
  heads.forEach((h, i) => {
    const card = cards[i];
    if (!card) return;
    // the authored nodes between this heading and the next one
    const own = [];
    let n = h.nextElementSibling;
    while (n && !heads.includes(n)) {
      own.push(n);
      n = n.nextElementSibling;
    }
    h.classList.add('c-heading', 'c-card-sidebar-heading');
    card.prepend(h);
    const content = card.querySelector('.c-card-sidebar-content');
    if (i === 0) {
      const list = content.querySelector('.search-suggested-list');
      const ul = own.find((x) => x.tagName === 'UL');
      if (ul) {
        [...ul.children].forEach((li) => {
          li.className = 'search-suggested-list-item';
          const pa = li.querySelector(':scope > p > a');
          if (pa) pa.parentElement.replaceWith(pa);
          const icon = el('div', 'c-icon c-icon-content-icon-icon mod-prefix', {
            style: '--i-icon-m-width: 14px; --i-icon-m-height: 14px; --i-icon-m-color: var(--color-m-red);',
            'aria-hidden': 'true',
          });
          icon.append(spriteIcon('search', 24, 24));
          iconContent(li, '10px', icon);
          list.append(li);
        });
      }
    } else if (i === 1) {
      const a = takeLink(own.find((x) => x.querySelector && x.querySelector('a')));
      if (a) {
        a.className = 'c-link-arrow mod-arrow';
        content.querySelector('.search-questions-all-link').append(a);
      }
    } else {
      const p = own.find((x) => x.tagName === 'P');
      if (p) {
        p.classList.add('search-recent-intro');
        content.prepend(p);
      }
    }
  });
}

/* ---- behaviour: lifted from the prototype chrome JS (canon.js) ---- */
function initChrome(header) {
  const b = document.body;
  const html = document.documentElement;
  const shl = header.querySelector('#site-header-large');
  const shs = header.querySelector('#site-header-small');
  const shct = document.getElementById('site-header-content-top');
  const mq = window.matchMedia(LARGE_MQ);
  const vars = () => {
    const large = mq.matches;
    const short = b.classList.contains('mod-sh-short');
    const h = large ? 170 : 112;
    const s = large ? 92 : 60;
    html.style.setProperty('--site-header-height', `${short ? s : h}px`);
    html.style.setProperty('--site-header-offset', `${h}px`);
    html.style.setProperty('--scroll-short-offset', `${s}px`);
  };
  // the live header moves one menu, one set of i-menus and one search form between the
  // large header's slots and the small header's drawers
  const moves = ['nav', 'iwt', 'iaa', 'search'].map((k) => [
    header.querySelector(`.sh-${k}`),
    header.querySelector(`.shl-${k}-slot`),
    header.querySelector(`.shs-${k}-slot`),
  ]).filter(([node, l, s]) => node && l && s);
  const size = () => {
    const large = mq.matches;
    moves.forEach(([node, l, s]) => {
      const slot = large ? l : s;
      if (node.parentElement !== slot) slot.append(node);
    });
    b.classList.toggle('mod-sh-large', large);
    b.classList.toggle('mod-sh-small', !large);
    header.hidden = false;
    if (shl) shl.hidden = !large;
    if (shs) shs.hidden = large;
    if (shct) shct.hidden = large;
    vars();
  };
  size();
  mq.addEventListener('change', size);
  const trig = document.getElementById('intersection-trigger');
  if (trig) {
    new IntersectionObserver((e) => {
      b.classList.toggle('mod-sh-short', !e[0].isIntersecting);
      vars();
    }, { root: document, rootMargin: '-50px 0px 0px 0px', threshold: 1 }).observe(trig);
  }
}

/* ---- behaviour: menus, drawers and alerts, as observed on the live header ---- */
// drawer panel id → [body class while open, display while open]; one drawer open at a time,
// each locks the page scroll below the header
const DRAWERS = {
  'site-header-large-translate-drawer': ['mod-shl-translate-open', 'flex'],
  'site-header-large-search-drawer': ['mod-shl-search-open', 'flex'],
  'site-header-large-alerts': ['mod-sh-alerts-open', 'block'],
  'site-header-small-alerts': ['mod-sh-alerts-open', 'block'],
  'site-header-small-menu-drawer': ['mod-shs-menu-open', 'flex'],
  'site-header-small-search-drawer': ['mod-shs-search-open', 'flex'],
};
// Escape closes only the search drawers on the live header
const ESCAPE_CLOSES = ['site-header-large-search-drawer', 'site-header-small-search-drawer'];

function initToggles(header) {
  const b = document.body;
  const toggleFor = (id) => header.querySelector(`[aria-controls="${id}"]`);

  const setDrawer = (id, open) => {
    const panel = document.getElementById(id);
    if (!panel) return;
    const [bodyClass, display] = DRAWERS[id];
    const toggle = toggleFor(id);
    if (toggle) toggle.setAttribute('aria-expanded', String(open));
    b.classList.toggle(bodyClass, open);
    if (open) {
      panel.hidden = false;
      panel.style.display = display;
      requestAnimationFrame(() => {
        panel.style.opacity = '1';
        panel.style.transform = 'none';
      });
    } else {
      panel.style.removeProperty('opacity');
      panel.style.removeProperty('transform');
      panel.style.display = 'none';
    }
    const anyOpen = Object.keys(DRAWERS).some((d) => toggleFor(d)?.getAttribute('aria-expanded') === 'true');
    b.classList.toggle('mod-below-header-scroll-lock', anyOpen);
    b.style.overflow = anyOpen ? 'hidden' : '';
  };
  const closeDrawers = (except) => Object.keys(DRAWERS).forEach((d) => {
    if (d !== except && toggleFor(d)?.getAttribute('aria-expanded') === 'true') setDrawer(d, false);
  });

  const setDropover = (toggle, open) => {
    const panel = document.getElementById(toggle.getAttribute('aria-controls'));
    if (!panel) return;
    toggle.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
    toggle.closest('.js-dropover')?.classList.toggle('mod-dropover-open', open);
  };
  const openDropovers = () => [...header.querySelectorAll('.js-dropover-toggle[aria-expanded="true"]')];

  header.addEventListener('click', (e) => {
    const toggle = e.target.closest('button[aria-controls]');
    if (toggle) {
      const id = toggle.getAttribute('aria-controls');
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      if (DRAWERS[id]) {
        if (open) closeDrawers(id);
        setDrawer(id, open);
      } else if (toggle.classList.contains('js-dropover-toggle')) {
        // close the open dropovers this one does not sit inside
        if (open) openDropovers().filter((t) => !t.closest('.js-dropover-panel')?.contains(toggle) && t !== toggle).forEach((t) => setDropover(t, false));
        setDropover(toggle, open);
      } else {
        const panel = document.getElementById(id);
        toggle.setAttribute('aria-expanded', String(open));
        if (panel) panel.hidden = !open;
      }
      return;
    }
    const dismiss = e.target.closest('.shl-alerts-dismiss, .shs-alerts-dismiss, .shs-menu-drawer-dismiss');
    if (dismiss) {
      const id = dismiss.closest('[id]')?.id;
      if (DRAWERS[id]) setDrawer(id, false);
    }
  });
  document.addEventListener('click', (e) => {
    openDropovers().forEach((t) => {
      if (!t.closest('.js-dropover')?.contains(e.target)) setDropover(t, false);
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    ESCAPE_CLOSES.forEach((id) => {
      const toggle = toggleFor(id);
      if (toggle?.getAttribute('aria-expanded') === 'true') {
        setDrawer(id, false);
        if (toggle.offsetParent) toggle.focus();
      }
    });
  });
}

/**
 * loads and decorates the header
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  const fragment = await loadFragment(navPath);

  const chrome = fromHTML(HEADER_TEMPLATE);
  slotAlerts(chrome, part(fragment, 'nav-alerts'));
  slotMenu(chrome, fragment);
  slotIwt(chrome, part(fragment, 'nav-iwt'));
  slotIaa(chrome, part(fragment, 'nav-iaa'));
  slotSearch(chrome, part(fragment, 'nav-search'));
  block.replaceChildren(chrome);

  const header = block.closest('header');
  if (header) {
    header.classList.add('site-header');
    header.id = 'site-header';
  }
  if (!document.querySelector('a[href="#main-content"]')) {
    const skip = el('a', 'visually-hidden', { href: '#main-content' });
    skip.textContent = 'Skip to main content';
    document.body.prepend(skip);
  }
  const main = document.querySelector('main');
  if (main && !document.getElementById('intersection-trigger')) {
    if (!main.id) main.id = 'main-content';
    const trigger = el('div', '', { id: 'intersection-trigger', 'aria-hidden': 'true' });
    main.prepend(trigger, fromHTML(SHCT_TEMPLATE));
  }
  initChrome(header || block);
  initToggles(header || block);
}
