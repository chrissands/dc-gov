// usage: node sbs.mjs <live.png> <build.png> <y0> <y1> <out> [scale=0.4] [yb0]
import fs from 'fs'; import { PNG } from 'pngjs';
const [,, fa, fb, y0s, y1s, out, sc = '0.4', yb0s] = process.argv;
const A = PNG.sync.read(fs.readFileSync(fa)), B = PNG.sync.read(fs.readFileSync(fb)); const s = +sc;
const y0 = +y0s, y1 = +y1s, yb0 = yb0s ? +yb0s : y0, H = Math.round((y1 - y0) * s), W = Math.round(A.width * s);
const dst = new PNG({ width: W * 2 + 6, height: H }); dst.data.fill(255);
const put = (src, sy0, ox) => { for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const sx = Math.floor(x / s), sy = sy0 + Math.floor(y / s); if (sy >= src.height || sx >= src.width) continue; const i = (sy * src.width + sx) * 4, o = (y * dst.width + x + ox) * 4; dst.data[o] = src.data[i]; dst.data[o + 1] = src.data[i + 1]; dst.data[o + 2] = src.data[i + 2]; dst.data[o + 3] = 255; } };
put(A, y0, 0); put(B, yb0, W + 6); fs.writeFileSync(out, PNG.sync.write(dst)); console.log(out, dst.width + 'x' + H);
