import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage();
await p.goto('https://beta.dc.gov/services', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(4000);
const strs = JSON.parse(process.argv[2]);
console.log(await p.evaluate(async (strs) => { await document.fonts.ready; const c = document.createElement('canvas').getContext('2d');
  return strs.map(([font, fb, s]) => { c.font = font; const a = c.measureText(s).width; c.font = fb; const x = c.measureText(s).width; return `${font} | ${s.slice(0, 40)} | nhg ${a.toFixed(1)} fb ${x.toFixed(1)} ratio ${(a / x).toFixed(4)}`; }).join('\n'); }, strs));
await b.close();
