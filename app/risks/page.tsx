"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">BuildTrack</p>
        <h1>Risks</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"risk":"SPI slip Pier 9","severity":"High","owner":"PM Lee","status":"Mitigating"},{"risk":"RFI bottleneck","severity":"Med","owner":"Architect","status":"Open"},{"risk":"Weather window","severity":"Med","owner":"Site lead","status":"Watch"},{"risk":"Steel lead time","severity":"High","owner":"Procurement","status":"Open"}]} columns={[{"key":"risk","label":"Risk"},{"key":"severity","label":"Severity"},{"key":"owner","label":"Owner"},{"key":"status","label":"Status"}]} searchKeys={["risk","severity","owner","status"]} />
</section>
    </div>
  );
}
