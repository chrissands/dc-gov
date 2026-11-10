// usage: node lift.cjs <regex> [out]  — writes source rules whose selector matches, with media context, compact
const postcss=require("postcss");const fs=require("fs");
const css=fs.readFileSync("stardust/current/assets/css/site-0.css","utf8");const re=new RegExp(process.argv[2]);
const root=postcss.parse(css);const out=[];
root.walkRules(r=>{const sels=r.selector.split(",").map(s=>s.trim()).filter(s=>re.test(s)&&!/:hover|:focus|:active|focus-visible|:has\(|print/.test(s));if(!sels.length)return;r=Object.assign(Object.create(Object.getPrototypeOf(r)),r);r.selector=sels.join(",");let ctx=[];let p=r.parent;while(p&&p.type!=="root"){if(p.type==="atrule")ctx.unshift("@"+p.name+" "+p.params);p=p.parent;}
const decls=[];r.walkDecls(d=>{if(/^transition|^-webkit-|^cursor$|^will-change/.test(d.prop))return;decls.push(d.prop+":"+d.value.replace(/url\('data:[^']{40,}'\)/g,"url(DATA)").replace(/url\("data:[^"]{40,}"\)/g,"url(DATA)")+(d.important?"!important":""))});
if(decls.length) out.push((ctx.length?ctx.filter(c=>!c.startsWith("@layer")).join(" ")+" ":"")+r.selector.replace(/\s+/g," ")+"{"+decls.join(";")+"}");});
const s=out.join("\n");if(process.argv[3])fs.writeFileSync(process.argv[3],s);console.log(out.length+" rules, "+s.length+" chars");
