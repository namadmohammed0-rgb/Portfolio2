import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, Download, Filter, FolderOpen, Grid3X3, HelpCircle, Menu, Printer, Share2, SortAsc, X } from "lucide-react";
import { useLocation } from "wouter";
import MenuBar from "./MenuBar";

type SapChromeProps = { children: ReactNode };

export function TitleBar() {
  return <div className="sap-title-bar"><span>Namad Mohammed | SAP Consultant</span><div className="sap-window-controls" aria-hidden="true"><span className="sap-window-control">—</span><span className="sap-window-control">□</span><span className="sap-window-control">×</span></div></div>;
}

export function Toolbar({ onDrawer, onModules }: { onDrawer: () => void; onModules: () => void }) {
  return <div className="sap-toolbar" aria-label="Toolbar">
    <button className="sap-tool-button sap-toolbar-hamburger" type="button" onClick={onDrawer} aria-label="Open navigation drawer"><Menu size={17} /></button>
    <button className="sap-tool-button" type="button" disabled aria-label="Back"><ArrowLeft size={16} /></button>
    <button className="sap-tool-button" type="button" disabled aria-label="Forward"><ArrowRight size={16} /></button>
    <span className="sap-toolbar-separator" />
    <button className="sap-tool-button" type="button" onClick={onModules} aria-label="Open modules"><Grid3X3 size={16} /></button>
    <button className="sap-tool-button" type="button" aria-label="Filter"><Filter size={16} /></button>
    <button className="sap-tool-button" type="button" aria-label="Sort A-Z"><SortAsc size={16} /></button>
    <span className="sap-toolbar-separator" />
    <button className="sap-tool-button" type="button" onClick={() => window.print()} aria-label="Print"><Printer size={16} /></button>
    <button className="sap-tool-button" type="button" onClick={() => window.print()} aria-label="Download resume"><Download size={16} /></button>
    <button className="sap-tool-button" type="button" aria-label="Share"><Share2 size={16} /></button>
    <button className="sap-tool-button" type="button" aria-label="Help"><HelpCircle size={16} /></button>
  </div>;
}

const drawerLinks = ["about", "work", "analysis", "stats", "experience", "education", "contact"] as const;
const drawerLabels: Record<(typeof drawerLinks)[number], string> = { about: "About Me", work: "Projects", analysis: "Business Analysis", stats: "Metrics", experience: "Experience", education: "Education", contact: "Contact" };

export function SideDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  const jump = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); onClose(); };
  return <aside className="sap-drawer" aria-label="Portfolio navigation"><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><h2>Navigation</h2><button className="sap-tool-button" onClick={onClose} aria-label="Close navigation"><X size={16} /></button></div>{drawerLinks.map((id) => <button key={id} className="sap-drawer-link" onClick={() => jump(id)}>{drawerLabels[id]}</button>)}</aside>;
}

const moduleItems = [
  { label: "Administration", key: "A", icon: FolderOpen, children: ["About Me"] },
  { label: "Financials", key: "F", icon: Grid3X3, children: ["Experience"] },
  { label: "CRM", key: "C", icon: Share2, children: ["Clients / Testimonials"] },
  { label: "Opportunities", key: "O", icon: Grid3X3, children: ["Case Studies"] },
  { label: "Sales - A/R", key: "S", icon: ArrowRight, children: ["Projects (Order-to-Cash)"] },
  { label: "Purchasing - A/P", key: "P", icon: ArrowLeft, children: ["Projects (Procure-to-Pay)"] },
  { label: "Business Partners", key: "B", icon: Share2, children: ["Clients"] },
  { label: "Banking", key: "N", icon: Grid3X3, children: ["Certifications"] },
  { label: "Inventory", key: "I", icon: FolderOpen, children: ["Skills (MM/WM)"] },
  { label: "Resources", key: "R", icon: Grid3X3, children: ["Tools & Tech"] },
  { label: "Production", key: "D", icon: Grid3X3, children: ["Implementations"] },
  { label: "MRP", key: "M", icon: Grid3X3, children: ["Methodologies"] },
  { label: "Service", key: "E", icon: HelpCircle, children: ["Support Experience"] },
  { label: "Human Resources", key: "H", icon: FolderOpen, children: ["Contact"] },
  { label: "Reports", key: "T", icon: Printer, children: ["Resume / Downloads"] },
];

function underlined(label: string, key: string) { const index = label.toLowerCase().indexOf(key.toLowerCase()); return index < 0 ? <>{label}</> : <>{label.slice(0, index)}<u>{label[index]}</u>{label.slice(index + 1)}</>; }

export function ModulesMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [active, setActive] = useState<string | null>(null);
  const [, navigate] = useLocation();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setActive(null); onClose(); }
      if (event.key === "ArrowRight" && active) event.preventDefault();
      if (event.key === "ArrowLeft") { event.preventDefault(); setActive(null); }
    };
    const onPointer = (event: PointerEvent) => { if (ref.current && !ref.current.contains(event.target as Node)) onClose(); };
    window.addEventListener("keydown", onKey); window.addEventListener("pointerdown", onPointer);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("pointerdown", onPointer); };
  }, [active, onClose, open]);
  if (!open) return null;
  const select = (label: string) => { const map: Record<string, string> = { "About Me": "about", Experience: "experience", "Projects (Order-to-Cash)": "work", "Projects (Procure-to-Pay)": "work", Clients: "contact", Certifications: "stats", "Resume / Downloads": "contact", Contact: "contact" }; const id = map[label]; if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); else navigate("#work"); onClose(); setActive(null); };
  return <div ref={ref} className="sap-modules-menu" role="menu" aria-label="Modules"><div className="sap-modules-title">Modules</div>{moduleItems.map(({ label, key, icon: Icon, children }) => <div key={label} className="sap-module-item"><button className={`sap-module-row ${active === label ? "is-active" : ""}`} role="menuitem" aria-haspopup="menu" aria-expanded={active === label} onMouseEnter={() => setActive(label)} onFocus={() => setActive(label)} onClick={() => setActive(active === label ? null : label)}><span className="sap-module-icon"><Icon size={16} /></span><span className="sap-module-label">{underlined(label, key)}</span><span className="sap-module-arrow">▸</span></button>{active === label && <div className="sap-flyout" role="menu">{children.map((child) => <button key={child} role="menuitem" onClick={() => select(child)}>{child}</button>)}</div>}</div>)}</div>;
}

export function StatusBar() { return <div className="sap-status-bar" role="status"><span className="sap-status-segment">Ready</span><span className="sap-status-segment">Company: Namad Mohammed</span><span className="sap-status-segment">User: Guest</span></div>; }

export default function SapShell({ children }: SapChromeProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modulesOpen, setModulesOpen] = useState(false);
  const openModules = () => { setModulesOpen(true); setDrawerOpen(false); };
  return <div className="sap-shell"><MenuBar onModulesOpen={openModules} /><TitleBar /><div className="sap-workspace"><div className="sap-content-area"><Toolbar onDrawer={() => setDrawerOpen((value) => !value)} onModules={openModules} /><SideDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} /><div className="sap-content-scroll">{children}</div></div><ModulesMenu open={modulesOpen} onClose={() => setModulesOpen(false)} /></div><StatusBar /></div>;
}
