import { chromium } from 'playwright';
const [url, w, sel] = process.argv.slice(2);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: +w, height: 900 } });
await p.goto(url, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(3500);
console.log(await p.evaluate(async (sel) => { await document.fonts.ready; const el = document.querySelector(sel); const r = document.createRange(); r.selectNodeContents(el);
  const cs = getComputedStyle(el); const rects = [...r.getClientRects()].map(x => `${Math.round(x.left)}-${Math.round(x.right)}@${Math.round(x.top)}`);
  return `font ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily.slice(0, 30)} width ${el.getBoundingClientRect().width}\n` + rects.join(' '); }, sel));
await b.close();
