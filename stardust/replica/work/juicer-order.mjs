// Juicer feed post order at a width: visual (top→bottom) order of feed posts on live, DOM order (stack, index) on the build.
import { chromium } from 'playwright';
const [live, build, w] = process.argv.slice(2); const b = await chromium.launch();
async function get(u) { const p = await b.newPage({ viewport: { width: +w, height: 900 } }); await p.goto(u, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(6000);
  return p.evaluate(() => [...document.querySelectorAll('.juicer-feed li.feed-item, .juicer-feed .j-stack > li')].map((e) => { const st = e.closest('.j-stack'); const si = st ? [...st.parentNode.children].indexOf(st) + 1 : 0; const li = [...e.parentNode.children].indexOf(e) + 1;
    return [Math.round(e.getBoundingClientRect().top + scrollY), `s${si}/${li}`, (e.querySelector('.j-message, p') || e).textContent.trim().slice(0, 40)]; }).sort((a, b) => a[0] - b[0])); }
for (const u of [live, build]) { console.log(u); for (const r of await get(u)) console.log('  ' + r.join('  ')); }
await b.close();
