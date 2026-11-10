const fs=require("fs");const f="stardust/replica/progress.json";const j=JSON.parse(fs.readFileSync(f));
j.types.static={archetype:"agency-directory",url:"https://beta.dc.gov/agency-directory",prototype:"stardust/prototypes/agency-directory-proposed.html",iterations:{"1440":1,"360":1},
 note:"first round --full on the shared canon (emitter + lift + R-01 faces from the landing/listing archetypes); no new modules beyond c-layout-sidebar and c-card-sidebar",
 gates:{"1440":{pixel:1.32,heightDelta:1,contentDiffRed:0,nothingLost:0,clipped:0,overflow:"ok",chromeParity:"13 text-width deltas (R-01)",verdict:"PASS"},
        "360":{pixel:7.91,heightDelta:22,contentDiffRed:0,nothingLost:0,clipped:0,overflow:"ok",chromeParity:"7 text-width deltas (R-01)",verdict:"RESIDUAL (R-01)"}},
 capProbe:"PASS at 2560 (0 of 4 rows failed)",
 residuals:[{width:360,what:"'Real Property Tax Appeals Commission' wraps on live (292.6px in a 292px column) and fits in the fallback (290.4px); forcing it needs text 400 >= 104.4%, which wraps the footer's YouTube line on every 1440 page (needs <= 103.8%)",register:"R-01",effect:"-22px offset below the agency list at 360; pixel 7.91% still under the bar"},{width:"1440,360",what:"chrome text widths 2-5px off",register:"R-01"}],
 motion:{observed:"stardust/replica/motion/agency-directory.json",implemented:["header scroll-morph (--sh-short)","agency link hover colour (lifted CSS)"],dead:["c-card-sidebar link hover (no measured diff)","c-icon-content-icon hover (no measured diff)"]},
 captureState:[]};
fs.writeFileSync(f,JSON.stringify(j,null,2));
