// Precise font-box ascent/descent (per 100px) of the live faces, every weight, for the R-01 fallback overrides.
import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage();
await p.goto('http://localhost:8791/news-proposed.html', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(4000);
console.log(await p.evaluate(async () => { await document.fonts.ready; for (const f of ['nhg-display-fallback','nhg-text-fallback']) for (const w of [500,600,700,400]) await document.fonts.load(w+' 16px '+f); const c = document.createElement('canvas').getContext('2d'); const o = [];
  for (const fam of ['nhg-display-fallback', 'nhg-text-fallback']) for (const w of [400, 500, 600, 700]) { c.font = `${w} 100px ${fam}`; const m = c.measureText('Hxg'); o.push(`${fam} ${w}: asc ${m.fontBoundingBoxAscent.toFixed(2)} desc ${m.fontBoundingBoxDescent.toFixed(2)}`); }
  o.push('loaded: ' + [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family + ' ' + f.weight).join(', ')); return o.join('\n'); }));
await b.close();
