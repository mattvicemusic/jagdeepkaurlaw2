import Link from "next/link";
import { siteConfig } from "@/lib/data";

export function SiteHeader({ full = false }: { full?: boolean }) {
  return (
    <header className={"masthead frame" + (full ? " masthead-full" : "")}>
      <div className="masthead-top">
        <p>
          Advocate <span aria-hidden="true">/</span> {siteConfig.location}
        </p>
        <nav aria-label="Main navigation">
          <a href="/#scope">Practice</a>
          <a href="/#about">Profile</a>
          <a href="/#contact">Contact</a>
        </nav>
      </div>
      <div className="masthead-name-row">
        <Link
          href="/"
          className="brand-name"
          aria-label="Jagdeep Kaur, Advocate. Home"
        >
          Jagdeep Kaur
        </Link>
        {full && (
          <p className="practice-note">
            Workplace law
            <br />& related matters
          </p>
        )}
      </div>
      <p className="website-note">
        General professional information.{" "}
        <Link href="/disclaimer">Please read the website disclaimer.</Link>
      </p>
    </header>
  );
}
