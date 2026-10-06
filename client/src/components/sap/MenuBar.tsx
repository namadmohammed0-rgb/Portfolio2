import { useEffect, useRef, useState } from "react";

const menus = [
  { label: "File", key: "F", items: ["New", "Open", "Print", "Exit"] },
  { label: "Edit", key: "E", items: ["Undo", "Cut", "Copy", "Paste"] },
  { label: "View", key: "V", items: ["Refresh", "Toolbar", "Status Bar"] },
  { label: "Data", key: "D", items: ["Filter", "Sort", "Export"] },
  { label: "Go To", key: "G", items: ["About Me", "Projects", "Experience", "Contact"] },
  { label: "Modules", key: "M", items: ["Open Module Navigator"] },
  { label: "Tools", key: "T", items: ["Download Resume", "Share Portfolio"] },
  { label: "Window", key: "W", items: ["Cascade", "Tile"] },
  { label: "Help", key: "H", items: ["About this portfolio", "Keyboard shortcuts"] },
];

function AccessLabel({ label, accessKey }: { label: string; accessKey: string }) {
  const index = label.toLowerCase().indexOf(accessKey.toLowerCase());
  if (index < 0) return <>{label}</>;
  return <>{label.slice(0, index)}<u>{label[index]}</u>{label.slice(index + 1)}</>;
}

export default function MenuBar({ onModulesOpen }: { onModulesOpen: () => void }) {
  const [open, setOpen] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const activeIndex = menus.findIndex((menu) => menu.label === open);

  const focusDropdownItem = (label: string, last = false) => {
    window.setTimeout(() => {
      const root = menuRef.current?.querySelector(`[data-menu="${label}"]`);
      const items = root?.querySelectorAll<HTMLButtonElement>('[role="menu"] [role="menuitem"]');
      if (items?.length) items[last ? items.length - 1 : 0].focus();
    }, 0);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      const match = menus.find((menu) => menu.key === key);
      if (event.altKey && match) {
        event.preventDefault();
        setOpen(match.label);
        if (match.label === "Modules") onModulesOpen();
        return;
      }
      if (!open) return;
      if (event.key === "Escape") { setOpen(null); return; }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        const next = menus[(activeIndex + 1) % menus.length];
        setOpen(next.label);
        if (next.label === "Modules") onModulesOpen();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        const next = menus[(activeIndex - 1 + menus.length) % menus.length];
        setOpen(next.label);
        if (next.label === "Modules") onModulesOpen();
      }
      if (event.key === "Escape") setOpen(null);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(null);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => { window.removeEventListener("keydown", onKeyDown); window.removeEventListener("pointerdown", onPointerDown); };
  }, [activeIndex, onModulesOpen, open]);

  return (
    <div ref={menuRef} className="sap-menu-bar" role="menubar" aria-label="Application menu">
      <div className="sap-menu-brand"><span className="sap-menu-brand-badge">B1</span><span>SAP Business One</span></div>
      <div className="sap-menu-items">
        {menus.map((menu) => (
          <div key={menu.label} className="sap-menu-item" data-menu={menu.label} onMouseEnter={() => open && setOpen(menu.label)}>
            <button className="sap-menu-trigger" role="menuitem" aria-haspopup="menu" aria-expanded={open === menu.label} onKeyDown={(event) => {
              if (event.key === "ArrowDown" || event.key === "Enter") { event.preventDefault(); setOpen(menu.label); if (menu.label === "Modules") onModulesOpen(); else focusDropdownItem(menu.label); }
              if (event.key === "ArrowUp") { event.preventDefault(); setOpen(menu.label); if (menu.label === "Modules") onModulesOpen(); else focusDropdownItem(menu.label, true); }
            }} onClick={() => { setOpen(open === menu.label ? null : menu.label); if (menu.label === "Modules") onModulesOpen(); }}>
              <AccessLabel label={menu.label} accessKey={menu.key} />
            </button>
            {open === menu.label && menu.label !== "Modules" && (
              <div className="sap-menu-dropdown" role="menu" onKeyDown={(event) => {
                const items = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="menuitem"]'));
                const index = items.indexOf(document.activeElement as HTMLButtonElement);
                if (event.key === "ArrowDown" || event.key === "ArrowUp") { event.preventDefault(); items[(index + (event.key === "ArrowDown" ? 1 : -1) + items.length) % items.length]?.focus(); }
                if (event.key === "Escape") { event.preventDefault(); setOpen(null); }
              }}>
                {menu.items.map((item) => <button key={item} role="menuitem" onClick={() => setOpen(null)}>{item}</button>)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
