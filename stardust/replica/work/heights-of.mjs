// usage: node heights-of.mjs <live> <build> <width> <selector> — every match's height on both sides, printing only the differing ones
import { chromium } from 'playwright';
const [live, build, w, sel] = process.argv.slice(2); const b = await chromium.launch();
async function get(u) { const p = await b.newPage({ viewport: { width: +w, height: 900 } }); await p.goto(u, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(3500);
  return p.evaluate(async (sel) => { await document.fonts.ready; return [...document.querySelectorAll(sel)].map(e => [Math.round(e.getBoundingClientRect().height), e.textContent.trim().replace(/\s+/g, ' ').slice(0, 70)]); }, sel); }
const A = await get(live), B = await get(build);
console.log(`${A.length} vs ${B.length} matches`); A.forEach((a, i) => { const bb = B[i] || [NaN, '']; if (a[0] !== bb[0]) console.log(`#${i} ${a[0]} → ${bb[0]}  "${a[1]}"`); });
await b.close();
