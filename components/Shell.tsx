"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Copilot, LiveClock, CommandPalette, ToastStack } from "@/lib/ui";

const NAV = [["/","Board"],["/jobs","Jobs"],["/rfis","RFIs"],["/changes","Change Orders"],["/crew","Crew"],["/risks","Risks"],["/analytics","Analytics"],["/exports","Exports"],["/settings","Settings"]];
const LINKS = NAV.map(([href, label]) => ({ href, label: String(label) }));
const TOASTS = ["Signal acknowledged", "Board refreshed", "Export queued", "Copilot standing by"];
const PROMPTS = [{"q":"SPI slipping on Pier 9","a":"SPI 0.86. Re-sequence glazing after MEP rough-in; add Saturday crew of 6. Forecast recover to 0.95 in 2 weeks."},{"q":"RFI bottleneck","a":"12 open RFIs >5 days. Batch architect office hours Tue/Thu; auto-escalate structural RFIs."},{"q":"Crew leveling","a":"Electric overloaded on Tower B. Borrow 3 from Garage phase; delay low-critical finish punch."}];

export function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div className="shell ">
      <header className="topbar">
        <div>
          <div className="brand">Build<span>Track</span></div>
          <p style={{ margin: "0.2rem 0 0", fontSize: 11, color: "var(--muted)" }}>Construction Kanban — blueprint + boards · <LiveClock /></p>
        </div>
        <nav className="nav" aria-label="Primary">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className={path === href ? "active" : ""}>{label}</Link>
          ))}
        </nav>
      </header>
      <main className="main">{children}</main>
      <CommandPalette links={LINKS} />
      <ToastStack items={TOASTS} />
      <Copilot brand="BuildTrack" prompts={PROMPTS} />
    </div>
  );
}
