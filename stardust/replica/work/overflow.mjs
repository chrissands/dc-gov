import { chromium } from 'playwright';
const [url, w] = process.argv.slice(2);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: +w, height: 900 } });
await p.goto(url); await p.waitForTimeout(1200);
console.log(await p.evaluate((W) => {
  const clipped = (e) => { for (let a = e.parentElement; a; a = a.parentElement) { const cs = getComputedStyle(a); if (cs.overflowX !== 'visible' && a.getBoundingClientRect().right <= W + 4) return true; } return false; };
  return [...document.querySelectorAll('body *')].filter(e => { const r = e.getBoundingClientRect(); return r.right > W + 4 && r.width > 0 && !clipped(e); })
  .filter(e => !e.parentElement || e.parentElement.getBoundingClientRect().right <= W + 4).slice(0, 12)
  .map(e => { const sec = e.closest('section'); return `${e.tagName.toLowerCase()}.${[...e.classList].join('.')} right=${Math.round(e.getBoundingClientRect().right)} w=${Math.round(e.getBoundingClientRect().width)} in ${sec ? sec.className + ' ' + (sec.querySelector('h2,h3')||{}).textContent : ''}`; }).join('\n'); }, +w));
await b.close();
