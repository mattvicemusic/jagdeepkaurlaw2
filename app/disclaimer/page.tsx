import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Disclaimer — Jagdeep Kaur, Advocate",
  description: "Disclaimer for the website of Advocate Jagdeep Kaur.",
  alternates: { canonical: "/disclaimer" },
};

const h2 = { font: "600 17px/1.4 var(--font-serif)", color: "#1f3a34", margin: "26px 0 8px" } as const;
const p = { font: "400 15px/1.75 var(--font-sans)", color: "#4a564f", margin: "0 0 14px" } as const;

export default function DisclaimerPage() {
  return (
    <main style={{ background: "#fdfcf8", minHeight: "100vh" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "clamp(48px,8vw,88px) clamp(20px,5vw,40px)" }}>
        <a href="/" style={{ font: "500 11px var(--font-sans)", letterSpacing: 1.8, textTransform: "uppercase", color: "#b08d3f", textDecoration: "none" }}>
          ← Jagdeep Kaur, Advocate
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "26px 0 14px" }}>
          <span style={{ width: 30, height: 1, background: "#b08d3f" }} />
          <span style={{ font: "500 12px var(--font-sans)", letterSpacing: 3, textTransform: "uppercase", color: "#b08d3f" }}>Disclaimer</span>
        </div>
        <h1 style={{ font: "600 clamp(28px,5vw,40px)/1.15 var(--font-serif)", color: "#1f3a34", margin: "0 0 22px" }}>
          Disclaimer
        </h1>

        <p style={p}>
          As per the rules of the Bar Council of India, advocates are not permitted to solicit work
          or advertise. This website has not been created for that purpose.
        </p>
        <p style={p}>
          It is intended only to provide general information about Advocate Jagdeep Kaur, her areas
          of practice, and her contact details, for those who seek it of their own accord.
        </p>

        <h2 style={h2}>No legal advice</h2>
        <p style={p}>
          The contents of this website are for general information only and do not constitute legal
          advice. The law applicable to any matter depends on its particular facts, and nothing here
          should be acted upon without appropriate professional advice.
        </p>

        <h2 style={h2}>No lawyer–client relationship</h2>
        <p style={p}>
          Viewing this website, sending an enquiry, or communicating through it does not create a
          lawyer–client relationship. Such a relationship arises only through a formal engagement.
        </p>

        <h2 style={h2}>Voluntary access</h2>
        <p style={p}>
          Any person accessing this website does so voluntarily and of their own accord, wishing to
          know more about the advocate for their own information and use.
        </p>

        <h2 style={h2}>No warranty; outcomes vary</h2>
        <p style={p}>
          While care is taken to keep the information accurate, no warranty is made as to its
          completeness or currentness. The outcome of any case depends on the facts and the law
          applicable to that matter; past matters are no indication of future results.
        </p>

        <p style={{ ...p, marginTop: 26, paddingTop: 18, borderTop: "1px solid #eee9dc", color: "#66716b", fontSize: 13 }}>
          Chambers of Adv. Jagdeep Kaur · {siteConfig.address} · <a href={`mailto:${siteConfig.email}`} style={{ color: "#66716b" }}>{siteConfig.email}</a>
        </p>
      </div>
    </main>
  );
}
