// usage: node state-snap.mjs <proto-url> <outprefix> — DOM snapshots after JS at 1440/360, top + scrolled
import { chromium } from 'playwright'; import fs from 'fs';
const [url, out] = process.argv.slice(2);
const b = await chromium.launch(); 
for (const w of [1440, 360]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  await p.goto(url, { waitUntil: 'load' }); await p.waitForTimeout(800);
  fs.writeFileSync(`${out}-${w}-top.html`, await p.content());
  await p.evaluate(() => window.scrollTo(0, 1200)); await p.waitForTimeout(600);
  fs.writeFileSync(`${out}-${w}-scrolled.html`, await p.content());
  await p.close();
}
await b.close(); console.log('snapshots written', out);
