"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">BuildTrack</p>
        <h1>Jobs</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"job":"Pier 9 Retrofit","phase":"Structure","spi":"0.86","budget":"92%","status":"At risk"},{"job":"Tower B Core","phase":"MEP","spi":"0.98","budget":"88%","status":"On track"},{"job":"Garage P3","phase":"Finish","spi":"1.02","budget":"81%","status":"Ahead"},{"job":"Bridge Span","phase":"Structure","spi":"0.84","budget":"95%","status":"At risk"}]} columns={[{"key":"job","label":"Job"},{"key":"phase","label":"Phase"},{"key":"spi","label":"SPI"},{"key":"budget","label":"Budget"},{"key":"status","label":"Status"}]} searchKeys={["job","phase","spi","budget","status"]} />
</section>
    </div>
  );
}
