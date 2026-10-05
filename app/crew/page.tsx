"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">BuildTrack</p>
        <h1>Crew</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <div className="rail-progress" style={{marginBottom:12}}>
          {[["Electric",94],["Glazing",71],["MEP",88],["Finish",62]].map(([n,v])=><div className="rail-row" key={String(n)}><span>{n}</span><Meter value={Number(v)}/><span>{v}%</span></div>)}
        </div><section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"crew":"Electric A","job":"Tower B","size":12,"util":"94%","status":"Overloaded"},{"crew":"Glazing","job":"Clinic Wing","size":8,"util":"71%","status":"OK"},{"crew":"MEP North","job":"Lab Expansion","size":10,"util":"88%","status":"Watch"},{"crew":"Finish 2","job":"Garage P3","size":6,"util":"62%","status":"Available"}]} columns={[{"key":"crew","label":"Crew"},{"key":"job","label":"Job"},{"key":"size","label":"Size"},{"key":"util","label":"Util"},{"key":"status","label":"Status"}]} searchKeys={["crew","job","size","util","status"]} />
</section>
    </div>
  );
}
