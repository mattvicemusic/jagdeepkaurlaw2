import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy — Jagdeep Kaur, Advocate",
  description: "Privacy notice for the website of Advocate Jagdeep Kaur.",
  alternates: { canonical: "/privacy" },
};

const h2 = { font: "600 17px/1.4 var(--font-serif)", color: "#1f3a34", margin: "26px 0 8px" } as const;
const p = { font: "400 15px/1.75 var(--font-sans)", color: "#4a564f", margin: "0 0 14px" } as const;

export default function PrivacyPage() {
  return (
    <main style={{ background: "#fdfcf8", minHeight: "100vh" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "clamp(48px,8vw,88px) clamp(20px,5vw,40px)" }}>
        <a href="/" style={{ font: "500 11px var(--font-sans)", letterSpacing: 1.8, textTransform: "uppercase", color: "#b08d3f", textDecoration: "none" }}>
          ← Jagdeep Kaur, Advocate
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "26px 0 14px" }}>
          <span style={{ width: 30, height: 1, background: "#b08d3f" }} />
          <span style={{ font: "500 12px var(--font-sans)", letterSpacing: 3, textTransform: "uppercase", color: "#b08d3f" }}>Privacy</span>
        </div>
        <h1 style={{ font: "600 clamp(28px,5vw,40px)/1.15 var(--font-serif)", color: "#1f3a34", margin: "0 0 22px" }}>
          Privacy notice
        </h1>

        <h2 style={h2}>What is collected</h2>
        <p style={p}>
          If you use the contact form on this website, the details you provide are collected: your
          name, phone number, email address, your message, and anything else you choose to include.
          Nothing more is gathered from the form than what you submit.
        </p>

        <h2 style={h2}>How it is used</h2>
        <p style={p}>
          Submitted details are used to respond to your enquiry, to manage subsequent
          communications, and — where an engagement follows — for ordinary client administration.
          They are not used for marketing lists.
        </p>

        <h2 style={h2}>No sale of personal data</h2>
        <p style={p}>Personal information submitted through this website is not sold or traded to anyone.</p>

        <h2 style={h2}>Protection</h2>
        <p style={p}>
          Reasonable technical and organisational steps are taken to protect the information you
          submit, in keeping with the confidentiality expected of a legal practice.
        </p>

        <h2 style={h2}>A note on enquiries</h2>
        <p style={p}>
          Submitting the form does not create a lawyer–client relationship. Please do not send
          confidential information through the form until it is formally requested.
        </p>

        <p style={{ ...p, marginTop: 26, paddingTop: 18, borderTop: "1px solid #eee9dc", color: "#66716b", fontSize: 13 }}>
          Questions about this notice may be sent to{" "}
          <a href={`mailto:${siteConfig.email}`} style={{ color: "#66716b" }}>{siteConfig.email}</a>.
        </p>
      </div>
    </main>
  );
}
