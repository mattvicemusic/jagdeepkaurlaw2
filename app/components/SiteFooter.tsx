import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { Arrow } from "./Arrow";

export function SiteFooter() {
  return (
    <footer className="site-footer frame">
      <div className="footer-main">
        <p>
          {siteConfig.name}
          <br />
          <span>Advocate</span>
        </p>
        <a
          className="portal-link"
          href={siteConfig.portalUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Existing clients: client portal (opens in a new tab)"
        >
          Existing clients: client portal <Arrow diagonal />
        </a>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Jagdeep Kaur</p>
        <nav aria-label="Legal information">
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/privacy">Privacy notice</Link>
          <a href="#main-content">Back to content</a>
        </nav>
      </div>
    </footer>
  );
}
