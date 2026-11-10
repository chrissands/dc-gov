// usage: node strcmp.mjs '<json [[weight, "display"|"text", px, string], …]>' — canvas width of each string in the live NHG face vs the prototype's fallback face
import { chromium } from 'playwright';
const items = JSON.parse(process.argv[2]); const b = await chromium.launch();
async function run(url, famOf) { const p = await b.newPage(); await p.goto(url, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(3500);
  return p.evaluate(async ([items, famOf]) => { for (const [w, f, px] of items) await document.fonts.load(`${w} ${px}px ${famOf[f]}`, 'a0 ,'); await document.fonts.ready; const c = document.createElement('canvas').getContext('2d');
    return items.map(([w, f, px, s]) => { c.font = `${w} ${px}px ${famOf[f]}`; return c.measureText(s).width; }); }, [items, famOf]); }
const live = await run('https://beta.dc.gov/news', { display: 'neue-haas-grotesk-display', text: 'neue-haas-grotesk-text' });
const build = await run('http://localhost:8791/news-proposed.html', { display: 'nhg-display-fallback', text: 'nhg-text-fallback' });
items.forEach((it, i) => console.log(`${it[0]} ${it[1]} ${it[2]}px "${it[3]}": live ${live[i].toFixed(1)} build ${build[i].toFixed(1)} Δ ${(build[i] - live[i]).toFixed(1)}`));
await b.close();
