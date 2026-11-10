// usage: node lines2.mjs <url> <width> <selector> <text-substring> — per-line rects of the first match containing the text
import { chromium } from 'playwright';
const [url, w, sel, txt] = process.argv.slice(2);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: +w, height: 900 } });
await p.goto(url, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(3500);
console.log(await p.evaluate(async ([sel, txt]) => { await document.fonts.ready; const el = [...document.querySelectorAll(sel)].find(e => e.textContent.includes(txt)); if (!el) return 'no match';
  const cs = getComputedStyle(el); const tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT); const out = [];
  while (tw.nextNode()) { const n = tw.currentNode; const r = document.createRange(); for (let i = 0; i < n.length; i++) { r.setStart(n, i); r.setEnd(n, i + 1); const q = r.getClientRects()[0]; if (!q) continue; const k = Math.round(q.top); const last = out[out.length - 1]; if (!last || last.top !== k) out.push({ top: k, s: '', l: q.left, r: q.right }); const L = out[out.length - 1]; L.s += n.data[i]; L.r = q.right; } }
  return `font ${cs.fontWeight} ${cs.fontSize} ls ${cs.letterSpacing} width ${el.getBoundingClientRect().width.toFixed(1)}\n` + out.map(o => `  ${o.l.toFixed(1)}–${o.r.toFixed(1)} "${o.s}"`).join('\n'); }, [sel, txt]));
await b.close();
