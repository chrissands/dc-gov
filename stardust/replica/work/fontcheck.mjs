import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(process.argv[2]); await p.waitForTimeout(1500);
console.log(await p.evaluate(async () => { await document.fonts.ready; const out = []; for (const f of document.fonts) out.push(`${f.family} ${f.weight} ${f.status}`);
  const c = document.createElement('canvas').getContext('2d'); const s = 'Services Neighborhoods Government';
  const m = (font) => { c.font = font; return Math.round(c.measureText(s).width * 10) / 10; };
  return out.join('\n') + '\n' + ['700 20px nhg-display-fallback', '700 20px "Liberation Sans"', '700 20px Arial', '400 20px nhg-text-fallback', '400 20px "Liberation Sans"'].map(f => f + ' = ' + m(f)).join('\n'); }));
await b.close();
