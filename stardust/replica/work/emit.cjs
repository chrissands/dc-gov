// Whitelisted component re-emitter: content verbatim from the capture, CMS cruft dropped, media rehosted.
const path = require("path");
const KEEP_TAGS = new Set("section div article aside header footer main nav h1 h2 h3 h4 h5 h6 p a ul ol li img picture source button span strong em b i br svg use path video form input label figure figcaption table thead tbody tr th td blockquote hr small time details summary select option iframe".split(" "));
const UNWRAP_CLASS = /^(view-content|views-row|field|field__item|field__items|clearfix|node__content|contextual-region)$/;
// Layout-bearing view/form hooks the theme styles (side-filters listing grid, bef form items) are kept.

const DROP_CLASS = /^(?!(views-element-container|js-form-item|js-form-wrapper)$)(js-|views-|view-|contextual)/;
const KEEP_ATTR = new Set(["style","class","href","src","alt","type","id","role","aria-label","aria-hidden","aria-expanded","aria-controls","aria-labelledby","placeholder","name","value","autoplay","muted","playsinline","loop","poster","width","height","viewBox","viewbox","fill","d","xmlns","color","for","target","rel","colspan","rowspan","datetime","open","hidden","tabindex","label","selected"]);
const media = new Map(); // source url -> local file
function rehost(u) {
  if (!u || u.startsWith("data:") || u.startsWith("#")) return u;
  if (u.includes("dc-icons-sprite.svg")) return "assets/dc-icons-sprite.svg" + u.slice(u.indexOf("#"));
  let abs; try { abs = new URL(u, "https://beta.dc.gov/").href; } catch { return u; }
  if (!/^https:\/\/beta\.dc\.gov\//.test(abs)) return u;
  if (!/\.(jpe?g|png|gif|webp|svg|mp4|webm|avif)(\?|$)/i.test(abs)) return u;
  const base = path.basename(new URL(abs).pathname).replace(/[^A-Za-z0-9._-]/g, "_");
  const style = (abs.match(/\/styles\/([^/]+)\//) || [])[1];
  const name = (style ? style + "--" : "") + base;
  media.set(abs, name); return "assets/media/" + name;
}
function emit($, el, depth = 0) {
  if (el.type === "text") return el.data.replace(/[<>&]/g, c => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]));
  if (el.type !== "tag" && el.type !== "style") return "";
  const tag = el.tagName.toLowerCase();
  if (tag === "style" && /scope-id/.test($(el).html() || "")) return `<style>${($(el).html() || "").replace(/\s+/g, " ").trim()}</style>`; // per-instance authored component breakpoints
  if (["script", "style", "noscript", "template", "link", "meta"].includes(tag)) return "";
  const cls = ($(el).attr("class") || "").split(/\s+/).filter(Boolean);
  const kids = () => $(el).contents().map((i, c) => emit($, c, depth + 1)).get().join("");
  if (!KEEP_TAGS.has(tag)) return kids();
  if (tag === "div" && cls.length && cls.every(c => UNWRAP_CLASS.test(c) || DROP_CLASS.test(c))) return `<div>${kids()}</div>`; // CMS wrapper: class dropped, box kept (it carries flex/grid gaps)
  if (tag === "input" && $(el).attr("type") === "hidden") return "";
  const attrs = [];
  for (const [k, v] of Object.entries(el.attribs || {})) {
    if (!KEEP_ATTR.has(k)) continue;
    if (k === "class") { const c = cls.filter(x => !DROP_CLASS.test(x)); if (c.length) attrs.push(`class="${c.join(" ")}"`); continue; }
    let val = v; if (k === "src" || k === "href" || k === "poster") val = rehost(v);
    if (k === "href" && tag === "use") val = rehost(v);
    attrs.push(v === "" ? k : `${k}="${String(val).replace(/"/g, "&quot;")}"`);
  }
  if (tag === "use" && el.attribs["xlink:href"]) attrs.push(`href="${rehost(el.attribs["xlink:href"])}"`);
  if (tag === "img") { if (!("alt" in el.attribs)) attrs.push('alt=""'); attrs.push('loading="eager"'); }
  const open = `<${tag}${attrs.length ? " " + attrs.join(" ") : ""}>`;
  if (["img", "br", "input", "source", "hr", "use", "path"].includes(tag) && tag !== "use" && tag !== "path") return open;
  return open + kids() + `</${tag}>`;
}
module.exports = { emit, media, rehost };
