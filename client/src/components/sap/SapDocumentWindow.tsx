import type { ReactNode } from "react";

type SapDocumentWindowProps = {
  title: string;
  code?: string;
  children: ReactNode;
  className?: string;
};

export default function SapDocumentWindow({ title, code, children, className = "" }: SapDocumentWindowProps) {
  return (
    <section className={`sap-document-window ${className}`}>
      <div className="sap-document-titlebar">
        <span className="sap-document-title"><u>{title.slice(0, 1)}</u>{title.slice(1)}</span>
        {code && <span className="sap-document-code">{code}</span>}
        <span className="sap-document-controls" aria-hidden="true"><i>—</i><i>×</i></span>
      </div>
      <div className="sap-document-body">{children}</div>
    </section>
  );
}
