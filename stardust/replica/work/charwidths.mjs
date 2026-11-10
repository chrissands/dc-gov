// Per-character advance ratio (live NHG face / Liberation fallback at the same weight) for space, punctuation and digits — R-01 unicode-range tuning.
import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage();
await p.goto('https://beta.dc.gov/news', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(4000);
console.log(await p.evaluate(async () => { await document.fonts.ready; const c = document.createElement('canvas').getContext('2d'); const o = [];
  const chars = '0123456789'.split('');
  for (const [fam, ws] of [['neue-haas-grotesk-display', [500, 600, 700]], ['neue-haas-grotesk-text', [400, 500, 600, 700]]]) for (const w of ws) {
    const row = chars.map(ch => { c.font = `${w} 100px ${fam}`; const a = c.measureText(ch).width; c.font = `${w >= 600 ? 700 : 400} 100px "Liberation Sans"`; const x = c.measureText(ch).width; return `'${ch}' ${(a / x).toFixed(3)}`; });
    o.push(`${fam.slice(17)} ${w}: ` + row.join('  ')); }
  return o.join('\n'); }));
await b.close();
