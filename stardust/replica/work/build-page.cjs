// usage: node build-page.cjs <slug>  → stardust/prototypes/<slug>-proposed.html (+ media list)
const cheerio = require("cheerio"); const fs = require("fs");
const { emit, media } = require("./emit.cjs");
const slug = process.argv[2]; const src = fs.readFileSync(`stardust/current/pages/${slug}.html`, "utf8");
const $ = cheerio.load(src);
// Drop surfaces that are not part of the static page: hidden "I want to"/"I am a" menus (no live control), runtime slots, overlays.
$("#drupal-modal, #prefix-overlay-outer, .home-search-drawer__view > *").remove();
// Third-party embed passthrough: Juicer feed renders from its own script, never from the captured DOM.
// Juicer social feed: third-party embed, frozen as captured for the prototype (capture-state; delivery restores the live embed).
// gtranslate dropdown (rendered by the vendor script on small screens): static equivalent of its rendered state.
$(".shs-translate-slot").html('<select class="gt_selector notranslate" aria-label="Select Language"><option value="">Select Language</option><option value="en|am">Amharic</option><option value="en|zh-CN">Chinese (Simplified)</option><option value="en|en" selected>English</option><option value="en|fr">French</option><option value="en|ko">Korean</option><option value="en|es">Spanish</option><option value="en|vi">Vietnamese</option></select>');
const E = (sel) => $(sel).map((i, el) => emit($, el)).get().join("\n");
const title = $("title").text().trim();
const desc = $('meta[name="description"]').attr("content") || "";
const juicer = $("ul.juicer-feed").length ? `<ul class="juicer-feed" data-feed-id="${$("ul.juicer-feed").attr("data-feed-id")}" data-per="6"></ul>` : "";
let main = E("#main-content > *");
const bodyCls = ($("body").attr("class") || "").split(/\s+/).filter(c => /^(path-|page-node-type-|_set-bg-)/.test(c)).join(" ");
const html = `<!doctype html>
<html lang="en" dir="ltr" class="js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
${desc ? `<meta name="description" content="${desc.replace(/"/g, "&quot;")}">` : ""}
<link rel="icon" href="assets/favicon.ico">
<link rel="stylesheet" href="css/lifted.css">
${juicer ? '<link rel="stylesheet" href="https://www.juicer.io/embed-3cfe3e91fac2af08316cf2e072e3f6043e84c58d05ff4ca5eb86a579f61e5ac1.css">' : ""}
<link rel="stylesheet" href="css/canon.css">
<link rel="stylesheet" href="css/${slug}.css">
</head>
<body class="${bodyCls} --ready --alerts">
<a class="_visually-hidden" href="#main-content">Skip to main content</a>
<div class="page">
${E("header#site-header")}
<div class="page-below-header" id="page-below-header">
<main id="main-content" class="site-content _set-bg-light">
${main}
</main>
${E("footer.site-footer")}
</div>
</div>
<script src="js/canon.js" defer></script>
</body>
</html>
`;
fs.writeFileSync(`stardust/prototypes/${slug}-proposed.html`, html);
const list = [...media].map(([u, n]) => `${u}\t${n}`).join("\n");
fs.writeFileSync(`stardust/replica/work/media-${slug}.tsv`, list + "\n");
console.log(slug, html.length, "bytes;", media.size, "media");
