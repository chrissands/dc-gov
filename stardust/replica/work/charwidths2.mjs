// Letter-only advance ratio (live NHG / Liberation) over the captured pages' own text corpus — R-01 base size-adjust.
import { chromium } from 'playwright'; import fs from 'fs';
const corpus = fs.readFileSync('stardust/replica/work/letter-corpus.txt', 'utf8');
const b = await chromium.launch(); const p = await b.newPage();
await p.goto('https://beta.dc.gov/news', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(4000);
console.log(await p.evaluate(async (s) => { await document.fonts.ready; const c = document.createElement('canvas').getContext('2d'); const o = [];
  for (const [fam, ws] of [['neue-haas-grotesk-display', [500, 600, 700]], ['neue-haas-grotesk-text', [400, 500, 600, 700]]]) for (const w of ws) {
    c.font = `${w} 20px ${fam}`; const a = c.measureText(s).width; c.font = `${w >= 600 ? 700 : 400} 20px "Liberation Sans"`; const x = c.measureText(s).width; o.push(`${fam.slice(17)} ${w}: ${(a / x).toFixed(4)}`); }
  return o.join('\n'); }, corpus));
await b.close();
