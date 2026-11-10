const fs=require("fs");const f="stardust/replica/progress.json";const j=JSON.parse(fs.readFileSync(f));
j.types.unique={archetype:"neighborhoods",url:"https://beta.dc.gov/neighborhoods",prototype:"stardust/prototypes/neighborhoods-proposed.html",iterations:{"1440":2,"360":2},
 note:"round 1 on the shared canon; round 2 (conf) after the text-400 ratio returned to its corpus mean with the footer-social compensation (R-01)",
 gates:{"1440":{pixel:1.21,heightDelta:1,contentDiffRed:0,nothingLost:0,clipped:0,overflow:"ok",chromeParity:"13 text-width deltas (R-01)",verdict:"PASS"},
        "360":{pixel:6.34,heightDelta:22,contentDiffRed:0,nothingLost:0,clipped:0,overflow:"ok",chromeParity:"quiet",verdict:"RESIDUAL (R-01)"}},
 capProbe:"PASS at 2560 (0 of 4 rows failed)",
 residuals:[{width:360,what:"the Ward 7 paragraph wraps to 5 lines on live and 4 in the fallback; text 400 at >=105.6% fixes it but wraps another paragraph on the home page (+29px)",register:"R-01",effect:"-22px offset below the ward grid at 360; pixel 6.34% under the bar"}],
 motion:{observed:"stardust/replica/motion/neighborhoods.json",implemented:["header scroll-morph (--sh-short)","ward card hover (lifted CSS, 250ms)"],dead:["c-link-pill, c-button-plus, c-link-arrow hover (no measured diff)"]},
 captureState:[]};
const U=(t,w,o)=>Object.assign(j.types[t].gates[w],o);
U("landing","1440",{pixel:2.20,heightDelta:-1,verdict:"PASS",regate:"conf round on the final canon"});U("landing","360",{pixel:11.68,heightDelta:-11,verdict:"RESIDUAL (R-01)",regate:"conf round on the final canon"});
U("listing","1440",{pixel:0.85,heightDelta:1});U("listing","360",{pixel:2.13,heightDelta:1,chromeParity:"quiet"});
U("static","1440",{pixel:1.37,heightDelta:1});U("static","360",{pixel:3.15,heightDelta:1,chromeParity:"quiet",verdict:"PASS",regate:"conf round: the corpus-mean text-400 ratio resolved the Real Property wrap"});
j.types.static.residuals=j.types.static.residuals.filter(r=>r.width!==360);
fs.writeFileSync(f,JSON.stringify(j,null,2));
