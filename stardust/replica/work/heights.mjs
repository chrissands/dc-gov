// Build-side document heights of the prototypes at 1440 and 360 vs the live heights (sweep helper for R-01 tuning).
import { chromium } from 'playwright';
const LIVE = { news: { 1440: 6267, 360: 8075 }, index: { 1440: 9877, 360: 18227 }, 'agency-directory': { 1440: 4271, 360: 5506 }, neighborhoods: { 1440: 4082, 360: 5171 } };
const b = await chromium.launch(); const out = [];
for (const slug of Object.keys(LIVE)) for (const w of [1440, 360]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } }); await p.goto(`http://localhost:8791/${slug}-proposed.html`, { waitUntil: 'load' }); await p.waitForTimeout(1500);
  const h = await p.evaluate(async () => { await document.fonts.ready; return document.documentElement.scrollHeight; }); out.push(`${slug}@${w} ${h - LIVE[slug][w]}`); await p.close(); }
console.log(out.join('  ')); await b.close();
