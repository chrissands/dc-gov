const fs=require("fs");const f="stardust/replica/progress.json";const j=fs.existsSync(f)?JSON.parse(fs.readFileSync(f)):{types:{}};j.types=j.types||{};
j.types.landing={archetype:"index",url:"https://beta.dc.gov/",prototype:"stardust/prototypes/index-proposed.html",iterations:{"1440":8,"360":8},
 note:"rounds 1-2 were build-shell defects (header hidden attribute, missing page wrapper); fidelity rounds 3-8",
 gates:{"1440":{pixel:1.28,heightDelta:1,contentDiffRed:0,nothingLost:0,clipped:0,overflow:"ok",chromeParity:"29 text-width deltas of 2-5px (R-01 font substitute)",verdict:"PASS"},
        "360":{pixel:16.28,heightDelta:25,contentDiffRed:0,nothingLost:0,clipped:0,overflow:"ok",chromeParity:"text-width deltas (R-01)",alignedPixel:"2.93% above y4250; 5.64% below with the 21px wrap offset aligned",verdict:"RESIDUAL (R-01)"}},
 capProbe:"PASS at 2560 (0 of 8 rows failed)",
 residuals:[{width:360,what:"the What's happening feature-card paragraph wraps to 3 lines in Neue Haas Grotesk and 2 in the metric-matched fallback; one size-adjust cannot also keep the Frequently Requested card on 2 lines (needs >=1.0445 vs <=1.0412)",register:"R-01",effect:"-21px offset below y4260: 16.28% raw, about 5% aligned"},{width:1440,what:"chrome text widths 2-5px off",register:"R-01"}],
 motion:{observed:"stardust/replica/motion/index.json",implemented:["header scroll-morph (--sh-short)","tabset --active/--open","hero video pause toggle (--paused)","carousel-grid mount below 728px","hover transitions (lifted CSS)"],dead:["--hjl--shift-down (home jump links hidden at 1440/360)","c-link-arrow hover (no measured diff)"]},
 captureState:[{what:"Juicer social feed frozen as captured",restoreAtDelivery:"live Juicer embed on the https origin"},{what:"hero video autoplay, muted",restoreAtDelivery:"same"}]};
fs.writeFileSync(f,JSON.stringify(j,null,2));
