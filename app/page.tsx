"use client";
import { FadeIn, FilterTable, Marquee, Meter, Spark, Heatmap, useTick } from "@/lib/ui";
import { MixBars, TrendArea } from "@/components/Charts";
const KPIS=[{label:"Active jobs",values:[14,14,15,13],suffix:""},{label:"Avg SPI",values:[0.94,0.92,0.96,0.91],suffix:""},{label:"Open RFIs",values:[27,29,24,31],suffix:""},{label:"COs pending",values:[8,7,9,6],suffix:""},{label:"Crew util",values:[88,91,85,90],suffix:"%"},{label:"Risk flags",values:[5,6,4,7],suffix:""}];
const ACTIVITY=["RFI-441 answered","CO-18 approved","Pier 9 SPI 0.86","Crew move Tower B","Inspection Wed 09:00"];
const ROWS=[{job:"Pier 9 Retrofit",phase:"Structure",spi:"0.86",rfi:6,status:"At risk"},{job:"Tower B Core",phase:"MEP",spi:"0.98",rfi:2,status:"On track"},{job:"Garage P3",phase:"Finish",spi:"1.02",rfi:1,status:"Ahead"},{job:"Clinic Wing",phase:"Envelope",spi:"0.91",rfi:4,status:"Watch"},{job:"River School",phase:"Structure",spi:"0.95",rfi:3,status:"On track"},{job:"Harbor Lofts",phase:"Interior",spi:"0.88",rfi:5,status:"At risk"},{job:"Civic Annex",phase:"Site",spi:"1.05",rfi:0,status:"Ahead"},{job:"Lab Expansion",phase:"MEP",spi:"0.93",rfi:3,status:"Watch"},{job:"Depot Reno",phase:"Demo",spi:"0.99",rfi:1,status:"On track"},{job:"Bridge Span",phase:"Structure",spi:"0.84",rfi:7,status:"At risk"},{job:"Midtown Hotel",phase:"Envelope",spi:"0.97",rfi:2,status:"On track"},{job:"Yard Office",phase:"Finish",spi:"1.01",rfi:0,status:"Ahead"}];
export default function Page(){return(<div className="page-stack">
<header className="page-head"><p className="kicker"><span className="live-dot"/>CONSTRUCTION KANBAN</p><h1>Field board</h1>
<p style={{color:"var(--muted)",maxWidth:560,margin:"0.4rem 0 0"}}>Blueprint grid + living kanban — SPI, RFIs, crew leveling.</p></header>
<div className="video-film"><img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80" alt="Site"/><div className="cap">SITE FILM · STRUCTURE</div></div>
<Marquee items={ACTIVITY} className="panel"/>
<div className="kpi-grid">{KPIS.map((k,i)=><FadeIn key={k.label} delay={i*0.05} className="kpi"><Kpi {...k}/><Spark seed={i+1}/></FadeIn>)}</div>
<section className="kanban" aria-label="Kanban board">
{[["Backlog",0],["In field",3],["Review",6],["Done",9]].map(([col,start])=>(
  <div className="kan-col" key={String(col)}><h3>{col}</h3>
  {ROWS.slice(Number(start),Number(start)+3).map(r=>(
    <div className="kan-card" key={r.job}><strong>{r.job}</strong><div>{r.phase} · SPI {r.spi}</div><Meter value={Math.round(parseFloat(r.spi)*100)}/><div>{r.status}</div></div>
  ))}</div>
))}
</section>
<div className="grid-2"><section className="panel"><h2>SPI trend</h2><TrendArea/></section><section className="panel"><h2>Phase mix</h2><MixBars/></section></div>
<section className="panel"><h2>Job register</h2><FilterTable rows={ROWS} columns={[{key:"job",label:"Job"},{key:"phase",label:"Phase"},{key:"spi",label:"SPI"},{key:"rfi",label:"RFIs"},{key:"status",label:"Status"}]} searchKeys={["job","phase","status"]}/></section>
</div>);}
function Kpi({label,values,suffix}:{label:string;values:number[];suffix:string}){const v=useTick(values);const display=Number.isInteger(values[0])?String(v):v.toFixed(2);return(<><b>{display}{suffix}</b><span>{label}</span></>);}
