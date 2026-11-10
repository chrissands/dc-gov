const fs=require("fs");const f="stardust/replica/progress.json";const j=JSON.parse(fs.readFileSync(f));
j.types.listing={archetype:"news",url:"https://beta.dc.gov/news",prototype:"stardust/prototypes/news-proposed.html",iterations:{"1440":4,"360":4},
 note:"round 1: the side-filters listing grid needs the views-element-container/view/js-form-item hooks (emitter now keeps them); rounds 2-3: R-01 fallback metrics (overrides divided by size-adjust; digit/space/comma faces; letter ratios at the wrap-junction optimum); round 4 --full confirmation",
 gates:{"1440":{pixel:0.86,heightDelta:1,contentDiffRed:0,nothingLost:0,clipped:0,overflow:"ok",chromeParity:"13 text-width deltas of 2-5px (R-01)",verdict:"PASS"},
        "360":{pixel:2.17,heightDelta:1,contentDiffRed:0,nothingLost:0,clipped:0,overflow:"ok",chromeParity:"7 text-width deltas (R-01)",verdict:"PASS"}},
 capProbe:"PASS at 2560 (0 of 4 rows failed)",
 residuals:[{width:"1440,360",what:"chrome text widths 2-5px off",register:"R-01"}],
 motion:{observed:"stardust/replica/motion/news.json",implemented:["header scroll-morph (--sh-short)","filter-link and pager hover colour (lifted CSS)"],dead:["c-link-pill hover (no measured diff)","_tag hover (no measured diff)"]},
 captureState:[]};
const L=j.types.landing; L.iterations={"1440":11,"360":11};
L.gates["1440"]=Object.assign(L.gates["1440"],{pixel:2.32,heightDelta:-1,verdict:"PASS",regate:"iter11 after the shared R-01 metric retune (was 1.28%)"});
L.gates["360"]=Object.assign(L.gates["360"],{pixel:11.71,heightDelta:-11,verdict:"RESIDUAL (R-01)",regate:"iter11 after the shared R-01 metric retune (was 16.28%, Δh 25)"});
L.residuals[0].effect="-11px wrap offset at 360 after the retune: 11.71% raw";
fs.writeFileSync(f,JSON.stringify(j,null,2));
