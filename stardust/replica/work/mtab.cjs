// usage: node mtab.cjs <measure.json> [width] — compact: selector rect + non-default props
const j=require(require("path").resolve(process.argv[2]));const p=Object.values(j.pages)[0];
const D={display:"block",position:"static",boxSizing:"border-box",maxWidth:"none",margin:"0px",padding:"0px",gap:"normal",backgroundColor:"rgba(0, 0, 0, 0)",backgroundImage:"none",textTransform:"none",textAlign:"start",borderRadius:"0px",boxShadow:"none",opacity:"1",objectFit:"fill",letterSpacing:"normal"};
for(const w of (process.argv[3]?[process.argv[3]]:Object.keys(p))){console.log("== "+w);for(const [sel,arr] of Object.entries(p[w])){const m=arr&&arr[0];if(!m){console.log(sel+" MISSING");continue;}
const r=m.rect;const pr=m.props||{};const o=[];for(const[k,v] of Object.entries(pr)){if(D[k]===v)continue;if(k==="fontFamily"){o.push("ff:"+v.split(",")[0]);continue;}if(k==="border"&&/^0px/.test(v))continue;if(k==="width"||k==="height")continue;o.push(k+":"+v);}
console.log(`${sel} ${m.visible?"":"(hid) "}[${r.x},${r.y},${r.w}x${r.h}] ${o.join("; ")}`);}}
