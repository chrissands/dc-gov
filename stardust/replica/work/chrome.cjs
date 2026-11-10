// Shared chrome builder: reads the captured page DOM (verbatim content source) and emits clean re-authored markup.
const cheerio = require("cheerio"); const fs = require("fs");
const load = (slug) => cheerio.load(fs.readFileSync(`stardust/current/pages/${slug}.html`, "utf8"));
const svg = ($, sel) => { const s = $(sel).first(); return s.length ? $.html(s).replace(/\s(class|id|data-[a-z-]+)="[^"]*"/g, "").replace(/\s+/g, " ") : ""; };
const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const txt = ($el) => esc($el.text().replace(/\s+/g, " ").trim());

function header($) {
  const iTranslate = svg($, ".shl-translate-toggle__icon svg");
  const iBell = svg($, ".shl-alerts-toggle__icon svg");
  const iSearch = svg($, ".shl-search-toggle__icon svg");
  const iBellS = svg($, ".shs-alerts-toggle__icon svg");
  const iSearchS = svg($, ".shs-search-toggle svg");
  const alert = $(".shl-alerts .c-slab-alert").first();
  const alertIcon = svg($, ".shl-alerts .c-slab-alert__icon svg");
  const nav = $(".shl .menu-main > li").map((i, li) => { const a = $(li).children("a"); const hasSub = $(li).children(".menu-main-toggle").length;
    return `<li class="hdr-nav__item"><a href="${a.attr("href")}">${txt(a)}</a>${hasSub ? `<button class="hdr-nav__toggle" type="button" aria-expanded="false"><span class="vh">Toggle sub-menu</span></button>` : ""}</li>`; }).get().join("");
  return `<header class="site-header" id="site-header">
  <div class="hdr-s">
    <div class="hdr-s__top"><a class="hdr-s__flag" href="/"><img src="assets/logo-flag.svg" alt="Home" width="33" height="25"></a>
      <button class="hdr-alerts-toggle hdr-s__alerts" type="button"><span class="vh"> 1 alert </span><span class="hdr-alerts-toggle__icon">${iBellS || iBell}<span class="hdr-alerts-toggle__count">1</span></span></button></div>
    <div class="hdr-s__bottom">
      <button class="hdr-s__menu" type="button" aria-expanded="false"><span class="vh">Toggle menu</span><span class="hdr-s__line --top"></span><span class="hdr-s__line --middle"></span><span class="hdr-s__line --bottom"></span></button>
      <a class="hdr-s__logo" href="/"><img src="assets/logo-small.svg" alt="Home" width="72" height="26"></a>
      <button class="hdr-s__search" type="button" aria-expanded="false"><span class="vh">Toggle search</span>${iSearchS || iSearch}</button>
    </div>
  </div>
  <div class="hdr-l">
    <div class="hdr-l__alert" hidden><div class="hdr-alert"><span class="hdr-alert__icon">${alertIcon}</span><div><h3 class="hdr-alert__heading">${txt(alert.find(".c-slab-alert__heading"))}</h3><div class="hdr-alert__content">${alert.find(".c-slab-alert__content").html() || ""}</div></div></div></div>
    <div class="hdr-l__main"><div class="hdr-l__inner">
      <a class="hdr-l__logo" href="/"><img src="assets/logo.svg" alt="Home" width="186" height="86"></a>
      <div class="hdr-l__top">
        <button class="hdr-l__translate" type="button" aria-expanded="false"><span class="vh">Toggle translation</span><span class="hdr-l__icon">${iTranslate}</span><span class="hdr-l__translate-label">Translate</span></button>
        <button class="hdr-alerts-toggle hdr-l__alerts" type="button"><span class="vh"> 1 alert </span><span class="hdr-alerts-toggle__icon">${iBell}<span class="hdr-alerts-toggle__count">1</span></span></button>
        <button class="hdr-l__search" type="button" aria-expanded="false"><span class="vh">Toggle search</span><span class="hdr-l__icon">${iSearch}</span><span class="hdr-l__search-label">Search</span></button>
      </div>
      <div class="hdr-l__bottom"><nav class="hdr-nav" aria-label="Main Menu"><ul class="hdr-nav__list">${nav}</ul></nav></div>
    </div></div>
  </div>
</header>`;
}

function footer($) {
  const f = $("footer").first();
  const logo = svg($, "footer .site-footer__logo svg");
  const simple = f.find(".menu-simple-footer > li").map((i, li) => { const a = $(li).children("a"); return a.length ? `<li><a href="${a.attr("href")}">${txt(a)}</a></li>` : `<li><span>${txt($(li))}</span></li>`; }).get().join("");
  const acc = f.find(".site-footer__accessibility a"); const accIcon = svg($, "footer .accessibility-link__icon svg");
  const sub = f.find(".site-footer__submit-request"); const subA = sub.find("a"); const subIcon = sub.find("svg").length ? $.html(sub.find("svg").first()).replace(/\s(class|id)="[^"]*"/g, "") : "";
  const cols = f.find(".menu-footer > li").map((i, li) => { const h = txt($(li).find(".accordion-menu__top > span").first());
    const links = $(li).find(".submenu a").map((j, a) => `<li><a href="${$(a).attr("href")}">${txt($(a))}</a></li>`).get().join("");
    return `<li class="ftr-col"><div class="ftr-col__top"><span>${h}</span><button class="ftr-col__toggle" type="button" aria-expanded="false"><span class="vh">Toggle sub-menu</span></button></div><ul class="ftr-col__links">${links}</ul></li>`; }).get().join("");
  const social = f.find(".menu-social-footer .social-item").map((i, li) => { const a = $(li).find("a"); const ic = $(li).find(".social-item__icon svg");
    return `<li class="ftr-social"><span class="ftr-social__icon">${ic.length ? $.html(ic.first()).replace(/\s(class|id)="[^"]*"/g, "") : ""}</span><span class="ftr-social__text"><a href="${a.attr("href")}">${txt(a)}</a><span class="ftr-social__count">${txt($(li).find(".social-item__count"))}</span><span class="ftr-social__action">${txt($(li).find(".social-item__action"))}</span></span></li>`; }).get().join("");
  const legal = txt(f.find(".site-footer__legal p"));
  const pol = f.find(".menu-policies-footer a").map((i, a) => `<li><a href="${$(a).attr("href")}">${txt($(a))}</a></li>`).get().join("");
  return `<footer class="site-footer"><div class="ftr">
  <div class="ftr__top"><a class="ftr__logo" href="/"><span class="vh">Home</span>${logo}</a>
    <div class="ftr__center"><ul class="ftr__simple">${simple}</ul><div class="ftr__access"><span class="ftr__access-icon">${accIcon}</span><a href="${acc.attr("href")}">${txt(acc)}</a></div></div>
    <div class="ftr__request"><a href="${subA.attr("href")}">${txt(subA)}</a>${subIcon}</div></div>
  <div class="ftr__middle"><ul class="ftr__cols">${cols}</ul><ul class="ftr__social">${social}</ul></div>
  <div class="ftr__bottom"><p class="ftr__legal">${legal}</p><ul class="ftr__policies">${pol}</ul></div>
</div></footer>`;
}

function feedback($) {
  const fb = $(".c-feedback").first(); if (!fb.length) return "";
  const icon = svg($, ".c-feedback .c-feedback__survey svg, .c-feedback svg");
  return { fb, icon };
}

function attribution($) {
  const a = $(".node-attribution").first(); if (!a.length) return "";
  const m = a.find(".node-attribution__maintainer a");
  return `<div class="attribution"><div class="attribution__updated">${txt(a.find(".node-attribution__updated"))}</div><div class="attribution__maintainer">Maintained by <a href="${m.attr("href")}">${txt(m)}</a></div></div>`;
}

module.exports = { load, svg, esc, txt, header, footer, feedback, attribution };
