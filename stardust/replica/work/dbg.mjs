import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 360, height: 900 } });
p.on('console', m => console.log('console:', m.text())); p.on('pageerror', e => console.log('pageerror:', e.message));
await p.goto('http://localhost:8791/index-proposed.html'); await p.waitForTimeout(1500);
console.log(await p.evaluate(() => { const g = document.querySelector('.c-layout-carousel-grid'); return [g.className, g.offsetWidth, document.querySelector('.splide').className, document.querySelectorAll('.juicer-feed li').length]; }));
await b.close();
