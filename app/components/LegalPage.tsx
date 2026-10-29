import type { ReactNode } from "react";
import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export default function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: LegalPageProps) {
  return (
    <>
      <SiteHeader />
      <main tabIndex={-1} id="main-content" className="legal-shell">
        <p className="legal-eyebrow">{eyebrow}</p>
        <h1 className="legal-title">{title}</h1>
        <p className="legal-intro">{intro}</p>
        <div className="legal-copy">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}
