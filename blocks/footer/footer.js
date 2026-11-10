import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * Site footer (beta.dc.gov replica) — template-slotted chrome.
 *
 * The skeleton is the prototype's `footer.site-footer` with every authored slot emptied;
 * the authored /footer document is MOVED into it by role (sections styled footer-top,
 * footer-menus, footer-social, footer-legal). No behaviour: the footer accordions stay as
 * the gated prototype renders them.
 *
 * @ew-exempt the home-link label and the toggle labels are UI chrome, not authored content.
 */

const SPRITE = '/icons/dc-icons-sprite.svg';

const FOOTER_TEMPLATE = `<div class="site-footer-l"><div class="site-footer-top-l">
<a class="site-footer-logo" href="/" rel="home">
<span class="visually-hidden">Home</span>
<svg class="icon icon-dcgov-flag" xmlns="http://www.w3.org/2000/svg" width="186" height="96" color="currentColor" aria-hidden="true">
<use href="${SPRITE}#dcgov-flag"></use></svg>
</a><div class="site-footer-top-center-l"><div class="site-footer-accessibility"><div class="accessibility-link-icon" aria-hidden="true">
<svg class="icon icon-body" xmlns="http://www.w3.org/2000/svg" width="16" height="17" color="currentColor" aria-hidden="true">
<use href="${SPRITE}#body"></use></svg></div>
</div></div><div class="site-footer-submit-request">
<svg class="icon icon-311" xmlns="http://www.w3.org/2000/svg" width="65" height="50" color="currentColor" aria-hidden="true">
<use href="${SPRITE}#311"></use></svg></div></div><div class="site-footer-middle-l"></div><div class="site-footer-bottom-l"><div class="site-footer-legal"></div><div class="site-footer-final-links"></div></div></div>`;

const TOGGLE_TEMPLATE = `<button class="accordion-menu-toggle js-accordion" type="button" aria-expanded="false">
<span class="visually-hidden">Toggle sub-menu</span>
<span class="accordion-menu-toggle-icon" aria-hidden="true"></span>
</button>`;

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

/** list items of a simple link menu: `menu-item`, link unwrapped, plain text in a <span> */
function menuItems(ul, className) {
  ul.className = `menu ${className}`.trim();
  [...ul.children].forEach((li) => {
    li.className = 'menu-item';
    const pa = li.querySelector(':scope > p > a');
    if (pa) pa.parentElement.replaceWith(pa);
    if (!li.querySelector('a')) {
      const span = el('span');
      span.append(...labelNodes(li));
      li.replaceChildren(span);
    }
  });
  return ul;
}

function markActive(root) {
  root.querySelectorAll('.menu a').forEach((a) => {
    const url = new URL(a.href, window.location);
    if (url.origin === window.location.origin && url.pathname === window.location.pathname) {
      a.classList.add('is-active');
    }
  });
}

function slotTop(chrome, src) {
  if (!src) return;
  const center = chrome.querySelector('.site-footer-top-center-l');
  const list = src.querySelector('ul');
  if (list) center.prepend(menuItems(list, 'menu-simple-footer'));
  const [access, request] = [...src.querySelectorAll(':scope > p')];
  const a1 = takeLink(access);
  if (a1) center.querySelector('.site-footer-accessibility').append(a1);
  const a2 = takeLink(request);
  if (a2) chrome.querySelector('.site-footer-submit-request').prepend(a2);
}

function slotMenus(chrome, src) {
  const list = src && src.querySelector('ul');
  if (!list) return;
  list.className = 'menu menu-footer accordion-menu';
  [...list.children].forEach((li, i) => {
    li.className = 'menu-item mod-has-submenu';
    const sub = li.querySelector(':scope > ul');
    const top = el('div', 'accordion-menu-top');
    const label = el('span');
    label.append(...labelNodes(li));
    const id = `accordion-menu-footer-accordion-panel-${i + 1}`;
    const toggle = fromHTML(TOGGLE_TEMPLATE);
    toggle.querySelector('button').setAttribute('aria-controls', id);
    top.append(label, toggle);
    const panel = el('div', 'accordion-menu-panel', { id, hidden: '' });
    if (sub) panel.append(menuItems(sub, 'submenu'));
    li.replaceChildren(top, panel);
  });
  chrome.querySelector('.site-footer-middle-l').append(list);
}

function slotSocial(chrome, src) {
  const list = src && src.querySelector('ul');
  if (!list) return;
  list.className = 'menu menu-social-footer';
  [...list.children].forEach((li) => {
    li.className = 'social-item';
    const iconSpan = li.querySelector('.icon');
    const name = iconSpan && [...iconSpan.classList].find((c) => c.startsWith('icon-'));
    if (iconSpan) iconSpan.remove();
    const icon = el('div', 'social-item-icon');
    if (name) icon.append(spriteIcon(name.slice(5), 24, 24));
    const text = el('div', 'social-item-text');
    const a = takeLink(li);
    if (a) text.append(a);
    const [count, action] = [...li.querySelectorAll('p')].filter((p) => p.textContent.trim());
    if (count) {
      count.className = 'social-item-count';
      text.append(count);
    }
    if (action) {
      action.className = 'social-item-action';
      action.setAttribute('aria-hidden', 'true');
      text.append(action);
    }
    li.replaceChildren(icon, text);
  });
  chrome.querySelector('.site-footer-middle-l').append(list);
}

function slotLegal(chrome, src) {
  if (!src) return;
  const p = src.querySelector(':scope > p');
  if (p) chrome.querySelector('.site-footer-legal').append(p);
  const list = src.querySelector('ul');
  if (list) chrome.querySelector('.site-footer-final-links').append(menuItems(list, 'menu-policies-footer'));
}

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  const chrome = fromHTML(FOOTER_TEMPLATE);
  slotTop(chrome, part(fragment, 'footer-top'));
  slotMenus(chrome, part(fragment, 'footer-menus'));
  slotSocial(chrome, part(fragment, 'footer-social'));
  slotLegal(chrome, part(fragment, 'footer-legal'));
  markActive(chrome);
  block.replaceChildren(chrome);

  const footer = block.closest('footer');
  if (footer) {
    footer.classList.add('site-footer', 'set-bg-dark');
    footer.id = 'site-footer';
  }
}
