import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome' }).catch(() => chromium.launch()); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('https://beta.dc.gov/services', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(4000);
const r = await p.evaluate(async () => {
  await document.fonts.ready;
  const s = 'Mayor Muriel Bowser, serving since 2015, is dedicated to making DC a city of opportunity for all. Frequently Requested Services 0123456789';
  const c = document.createElement('canvas').getContext('2d'); const out = {};
  for (const [fam, ws] of [['neue-haas-grotesk-display', [500, 600, 700]], ['neue-haas-grotesk-text', [400, 500, 700]]]) for (const w of ws) {
    c.font = `${w} 100px ${fam}`; const a = c.measureText(s).width; const asc = c.measureText('Hxg');
    c.font = `${w} 100px "Liberation Sans", Arial`; const bb = c.measureText(s).width;
    out[`${fam} ${w}`] = { nhg: Math.round(a), fb: Math.round(bb), ratio: +(a / bb).toFixed(4), asc: Math.round(asc.fontBoundingBoxAscent), desc: Math.round(asc.fontBoundingBoxDescent) };
  }
  c.font = '400 100px "Liberation Sans", Arial'; const m = c.measureText('Hxg'); out.fbMetrics = { asc: Math.round(m.fontBoundingBoxAscent), desc: Math.round(m.fontBoundingBoxDescent) };
  return out;
});
console.log(JSON.stringify(r, null, 1)); await b.close();
