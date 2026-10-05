"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">BuildTrack</p>
        <h1>RFIs</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"id":"RFI-441","job":"Pier 9","age":"6d","owner":"Architect","status":"Open"},{"id":"RFI-442","job":"Harbor Lofts","age":"3d","owner":"MEP","status":"Open"},{"id":"RFI-443","job":"Bridge Span","age":"8d","owner":"Structural","status":"Escalated"},{"id":"RFI-444","job":"Clinic Wing","age":"1d","owner":"Envelope","status":"Answered"}]} columns={[{"key":"id","label":"RFI"},{"key":"job","label":"Job"},{"key":"age","label":"Age"},{"key":"owner","label":"Owner"},{"key":"status","label":"Status"}]} searchKeys={["id","job","age","owner","status"]} />
</section>
    </div>
  );
}
