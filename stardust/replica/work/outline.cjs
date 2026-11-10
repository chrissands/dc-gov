// usage: node outline.cjs <html> <selector> [maxDepth]
const cheerio=require("cheerio");const $=cheerio.load(require("fs").readFileSync(process.argv[2],"utf8"));
const root=$(process.argv[3]).first();const MD=+(process.argv[4]||8);
function walk(el,d){$(el).children().each((i,c)=>{if(["script","style","svg","noscript"].includes(c.tagName))return;const a=$(c);const cls=(a.attr("class")||"").split(/\s+/).filter(Boolean).slice(0,2).join(".");
const own=a.contents().filter((_,n)=>n.type==="text").text().replace(/\s+/g," ").trim().slice(0,90);
const extra=[a.attr("href")&&"href="+a.attr("href"),a.attr("src")&&"src="+a.attr("src").slice(0,90),a.attr("alt")!==undefined&&"alt="+a.attr("alt")].filter(Boolean).join(" ");
console.log("  ".repeat(d)+c.tagName+(cls?"."+cls:"")+(own?" | "+own:"")+(extra?" ["+extra+"]":""));if(d<MD)walk(c,d+1);});}
walk(root,0);
