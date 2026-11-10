// usage: node crop.mjs <png> <y0> <y1> <out> [scale=0.5] [x0] [x1]
import fs from 'fs'; import { PNG } from 'pngjs';
const [,, f, y0s, y1s, out, sc='0.5', x0s='0', x1s] = process.argv;
const src = PNG.sync.read(fs.readFileSync(f)); const s = +sc;
const x0=+x0s, x1=x1s?+x1s:src.width, y0=+y0s, y1=Math.min(+y1s, src.height);
const W=Math.round((x1-x0)*s), H=Math.round((y1-y0)*s); const dst=new PNG({width:W,height:H});
for(let y=0;y<H;y++)for(let x=0;x<W;x++){let r=0,g=0,b=0,n=0;const sy0=y0+Math.floor(y/s),sy1=y0+Math.floor((y+1)/s),sx0=x0+Math.floor(x/s),sx1=x0+Math.floor((x+1)/s);
for(let yy=sy0;yy<Math.max(sy1,sy0+1);yy++)for(let xx=sx0;xx<Math.max(sx1,sx0+1);xx++){const i=(yy*src.width+xx)*4;r+=src.data[i];g+=src.data[i+1];b+=src.data[i+2];n++;}
const o=(y*W+x)*4;dst.data[o]=r/n;dst.data[o+1]=g/n;dst.data[o+2]=b/n;dst.data[o+3]=255;}
fs.writeFileSync(out, PNG.sync.write(dst)); console.log(out, W+'x'+H);
