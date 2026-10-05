"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">BuildTrack</p>
        <h1>Change Orders</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"id":"CO-18","job":"Pier 9","amount":"$42k","impact":"+4d","status":"Approved"},{"id":"CO-19","job":"Tower B","amount":"$18k","impact":"+1d","status":"Pending"},{"id":"CO-20","job":"Bridge Span","amount":"$91k","impact":"+9d","status":"Review"}]} columns={[{"key":"id","label":"CO"},{"key":"job","label":"Job"},{"key":"amount","label":"Amount"},{"key":"impact","label":"Impact"},{"key":"status","label":"Status"}]} searchKeys={["id","job","amount","impact","status"]} />
</section>
    </div>
  );
}
