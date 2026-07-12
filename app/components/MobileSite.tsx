"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { faqData, practiceAreas, principles, siteConfig, steps } from "@/lib/data";
import { useContactForm, useDisclaimer } from "@/lib/hooks";

const GOLD = "#b08d3f";
const GREEN = "#1f3a34";
const CREAM = "#fdfcf8";
const serif = "var(--font-serif)";
const sans = "var(--font-sans)";
const BAR_H = 64; // fixed bottom action bar

const navLinks = [
  { href: "#practice", label: "Areas of practice" },
  { href: "#about", label: "About" },
  { href: "#approach", label: "Approach" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Consultation" },
];

// small reusable eyebrow (line + uppercase label)
function Eyebrow({ text, center = false }: { text: string; center?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: center ? "center" : "flex-start", gap: 10, marginBottom: 16 }}>
      <span style={{ width: 26, height: 1, background: GOLD }} />
      <span style={{ font: `500 11px ${sans}`, letterSpacing: 2.4, textTransform: "uppercase", color: GOLD }}>{text}</span>
      {center && <span style={{ width: 26, height: 1, background: GOLD }} />}
    </div>
  );
}

export default function MobileSite() {
  const { showDisclaimer, accept } = useDisclaimer();
  const { form, field, submit, sent, sending, error, company, setCompany } = useContactForm();
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // lock body scroll while the menu or disclaimer is open
  useEffect(() => {
    const lock = menuOpen || showDisclaimer;
    document.body.classList.toggle("jk-m-locked", lock);
    return () => document.body.classList.remove("jk-m-locked");
  }, [menuOpen, showDisclaimer]);

  const inputStyle: React.CSSProperties = { width: "100%", padding: "15px 15px", border: "1px solid #ddd8c6", borderRadius: 6, background: "#fdfcf8", font: `400 16px ${sans}`, color: "#3a463f" };
  const sectionPad = "clamp(48px,12vw,72px) 20px";

  return (
    <>
      {/* Disclaimer */}
      {showDisclaimer && (
        <div className="jk-m-menu" style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(16,32,28,.62)", display: "flex", alignItems: "flex-end", padding: 0 }}>
          <div style={{ width: "100%", background: CREAM, borderTop: `3px solid ${GOLD}`, borderRadius: "14px 14px 0 0", padding: "28px 22px calc(28px + env(safe-area-inset-bottom))" }}>
            <h2 style={{ font: `600 26px/1.15 ${serif}`, color: GREEN, margin: "0 0 12px" }}>Please read before you continue</h2>
            <p style={{ font: `400 14px/1.7 ${sans}`, color: "#4a564f", margin: "0 0 20px" }}>As per the rules of the Bar Council of India, an advocate is not permitted to solicit work or advertise.</p>
            <button onClick={accept} className="jk-btn-dark jk-m-tap" style={{ width: "100%", padding: 17, background: GREEN, color: "#f4efe4", border: "none", borderRadius: 6, font: `500 12px ${sans}`, letterSpacing: 2, textTransform: "uppercase" }}>I have read &amp; agree — Enter</button>
          </div>
        </div>
      )}

      {/* Header */}
      <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(253,252,248,.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(31,58,52,.1)" }}>
        <div style={{ height: 60, padding: "0 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#top" style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <span style={{ font: `600 27px ${serif}`, color: GREEN }}>J<span style={{ color: GOLD }}>K</span></span>
            <span style={{ width: 1, height: 26, background: "#dcc98f" }} />
            <span>
              <span style={{ font: `600 15px ${serif}`, color: GREEN, display: "block", lineHeight: 1.1 }}>Jagdeep Kaur</span>
              <span style={{ font: `500 7px ${sans}`, letterSpacing: 1.8, textTransform: "uppercase", color: GOLD }}>Advocate · Bombay High Court</span>
            </span>
          </a>
          <button aria-label="Open menu" onClick={() => setMenuOpen(true)} className="jk-m-tap" style={{ width: 44, height: 44, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5, background: "none", border: "none", cursor: "pointer" }}>
            <span style={{ width: 22, height: 2, background: GREEN, borderRadius: 2 }} />
            <span style={{ width: 22, height: 2, background: GREEN, borderRadius: 2 }} />
            <span style={{ width: 22, height: 2, background: GREEN, borderRadius: 2 }} />
          </button>
        </div>
      </header>

      {/* Full-screen menu */}
      {menuOpen && (
        <div className="jk-m-menu" style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(16,32,28,.5)" }} onClick={() => setMenuOpen(false)}>
          <div className="jk-m-menu-panel" onClick={(e) => e.stopPropagation()} style={{ background: CREAM, padding: "16px 18px calc(24px + env(safe-area-inset-bottom))", borderRadius: "0 0 14px 14px", maxHeight: "92vh", overflowY: "auto" }}>
            <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ font: `500 11px ${sans}`, letterSpacing: 2.4, textTransform: "uppercase", color: GOLD }}>Menu</span>
              <button aria-label="Close menu" onClick={() => setMenuOpen(false)} className="jk-m-tap" style={{ width: 40, height: 40, fontSize: 26, lineHeight: 1, color: GREEN, background: "none", border: "none", cursor: "pointer" }}>×</button>
            </div>
            <nav style={{ display: "flex", flexDirection: "column" }}>
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="jk-m-tap" style={{ padding: "16px 4px", font: `600 21px ${serif}`, color: GREEN, borderBottom: "1px solid #eee7d6" }}>{l.label}</a>
              ))}
            </nav>
            <div style={{ display: "grid", gap: 10, marginTop: 20 }}>
              <a href={siteConfig.phoneHref} onClick={() => setMenuOpen(false)} className="jk-btn-gold jk-m-tap" style={{ padding: 16, textAlign: "center", background: "#c9a75a", color: "#16332c", borderRadius: 6, font: `600 12px ${sans}`, letterSpacing: 1.6, textTransform: "uppercase" }}>Call {siteConfig.phone}</a>
              <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="jk-btn-whatsapp jk-m-tap" style={{ padding: 16, textAlign: "center", background: "#25d366", color: "#103323", borderRadius: 6, font: `600 12px ${sans}`, letterSpacing: 1.6, textTransform: "uppercase" }}>WhatsApp</a>
              <a href={siteConfig.portalUrl} onClick={() => setMenuOpen(false)} className="jk-btn-dark jk-m-tap" style={{ padding: 16, textAlign: "center", background: GREEN, color: "#f4efe4", borderRadius: 6, font: `500 12px ${sans}`, letterSpacing: 1.6, textTransform: "uppercase" }}>Client Portal Login</a>
            </div>
          </div>
        </div>
      )}

      <main style={{ paddingBottom: `calc(${BAR_H}px + env(safe-area-inset-bottom))` }}>
        {/* Hero */}
        <section id="top" style={{ background: "linear-gradient(180deg,#f6f3ea,#fdfcf8)", padding: "40px 20px 44px" }}>
          <Eyebrow text="Advocate · Bombay High Court" />
          <h1 style={{ font: `600 clamp(34px,10vw,44px)/1.08 ${serif}`, color: GREEN, margin: "0 0 18px" }}>Family &amp; matrimonial law, approached with clarity and care.</h1>
          <p style={{ font: `400 16px/1.7 ${sans}`, color: "#4a564f", margin: "0 0 24px" }}>Advocate Jagdeep Kaur advises and represents individuals before the Family Courts of Mumbai &amp; Thane and the Bombay High Court — across divorce, maintenance, custody and related matrimonial matters.</p>
          <div style={{ position: "relative", width: "100%", maxWidth: 360, margin: "0 auto 28px" }}>
            <div style={{ position: "absolute", inset: "auto -12px -12px auto", width: "72%", height: "78%", background: "linear-gradient(180deg, rgba(176,141,63,.14), rgba(31,58,52,.08))", borderRadius: 3 }} />
            <div className="jk-photo-frame" style={{ position: "relative", aspectRatio: "4/5" }}>
              <Image src="/images/portrait.jpg" alt="Portrait of Advocate Jagdeep Kaur in her office." fill priority sizes="92vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div style={{ position: "absolute", left: -8, bottom: 18, padding: "12px 14px", background: "rgba(253,252,248,.96)", border: "1px solid rgba(176,141,63,.24)", borderRadius: 3, boxShadow: "0 14px 30px rgba(25,45,39,.12)" }}>
              <div style={{ font: `500 9px ${sans}`, letterSpacing: 2, textTransform: "uppercase", color: GOLD, marginBottom: 4 }}>Private consultations</div>
              <div style={{ font: `600 15px/1.2 ${serif}`, color: GREEN }}>Mumbai &amp; Thane</div>
            </div>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            <a href="#contact" className="jk-btn-dark jk-m-tap" style={{ padding: 17, textAlign: "center", background: GREEN, color: "#f4efe4", borderRadius: 6, font: `500 12px ${sans}`, letterSpacing: 1.8, textTransform: "uppercase" }}>Request a consultation</a>
            <a href="#practice" className="jk-btn-outline jk-m-tap" style={{ padding: 17, textAlign: "center", background: "transparent", color: GREEN, border: "1px solid #c9bd97", borderRadius: 6, font: `500 12px ${sans}`, letterSpacing: 1.8, textTransform: "uppercase" }}>Areas of practice</a>
          </div>
        </section>

        {/* Trust bar */}
        <section style={{ background: GREEN, padding: "22px 20px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 20px", justifyContent: "center" }}>
            {["Bombay High Court", "Family Court, Bandra", "Family Court, Thane", "Bar Council of Maharashtra & Goa"].map((t) => (
              <span key={t} style={{ font: `500 11px ${sans}`, letterSpacing: 1, textTransform: "uppercase", color: "#cfd9d2", textAlign: "center" }}>{t}</span>
            ))}
          </div>
        </section>

        {/* Practice areas */}
        <section id="practice" style={{ background: CREAM, padding: sectionPad }}>
          <Eyebrow text="Areas of practice" />
          <h2 style={{ font: `600 clamp(27px,7.5vw,34px)/1.14 ${serif}`, color: GREEN, margin: "0 0 12px" }}>Matrimonial and family disputes are rarely only legal — they are personal.</h2>
          <p style={{ font: `400 15px/1.7 ${sans}`, color: "#4c574f", margin: "0 0 28px" }}>These are the areas I regularly practise in. The notes below are general information, not legal advice.</p>
          <div style={{ display: "grid", gap: 14 }}>
            {practiceAreas.map((a) => (
              <div key={a.no} style={{ padding: "22px 20px", background: "#fff", border: "1px solid #ece9dc", borderRadius: 8 }}>
                <div style={{ font: `500 12px ${sans}`, letterSpacing: 1, color: "#c3ad78", marginBottom: 10 }}>{a.no}</div>
                <h3 style={{ font: `600 19px/1.25 ${serif}`, color: GREEN, margin: "0 0 8px" }}>{a.title}</h3>
                <p style={{ font: `400 14px/1.65 ${sans}`, color: "#5b665f", margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section style={{ background: "#f4f1e6", padding: "clamp(44px,11vw,64px) 24px" }}>
          <p style={{ font: `500 22px/1.5 ${serif}`, color: GREEN, margin: 0, fontStyle: "italic", textAlign: "center" }}>“A family matter is never only a legal question. It is a chapter in someone’s life — and it deserves patience, discretion, and genuine care.”</p>
        </section>

        {/* About */}
        <section id="about" style={{ background: "#fff", padding: sectionPad }}>
          <div style={{ position: "relative", width: "100%", maxWidth: 340, margin: "0 auto 28px" }}>
            <div className="jk-photo-frame" style={{ position: "relative", aspectRatio: "4/5" }}>
              <Image src="/images/about-portrait.jpg" alt="Portrait of Advocate Jagdeep Kaur seated in her office." fill sizes="92vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div style={{ position: "absolute", right: -8, bottom: 16, padding: "12px 15px", background: GREEN, borderRadius: 3, boxShadow: "0 14px 28px rgba(25,45,39,.16)" }}>
              <div style={{ font: `500 9px ${sans}`, letterSpacing: 2, textTransform: "uppercase", color: "#d8b866", marginBottom: 4 }}>Focused practice</div>
              <div style={{ font: `600 15px/1.2 ${serif}`, color: "#f4efe4" }}>Matrimonial &amp; family law</div>
            </div>
          </div>
          <Eyebrow text="About" />
          <h2 style={{ font: `600 clamp(26px,7vw,32px)/1.16 ${serif}`, color: GREEN, margin: "0 0 16px" }}>Jagdeep Kaur, Advocate</h2>
          <p style={{ font: `400 15.5px/1.75 ${sans}`, color: "#4a564f", margin: "0 0 16px" }}>Jagdeep Kaur is an advocate enrolled with the Bar Council of Maharashtra &amp; Goa, practising before the Bombay High Court and the Family Courts at Mumbai and Thane. Her practice is devoted to matrimonial and family law.</p>
          <p style={{ font: `400 15.5px/1.75 ${sans}`, color: "#4a564f", margin: "0 0 16px" }}>She works closely with each client to understand the full picture — legal, financial and personal — and explains the available options in plain language, so that decisions are made with a clear head and realistic expectations.</p>
          <p style={{ font: `400 15.5px/1.75 ${sans}`, color: "#4a564f", margin: 0 }}>Her chambers are at Mira Road (East), Thane, and she consults by appointment.</p>
        </section>

        {/* Approach */}
        <section id="approach" style={{ background: "#f4f1e6", padding: sectionPad }}>
          <Eyebrow text="Approach" />
          <h2 style={{ font: `600 clamp(26px,7vw,32px)/1.16 ${serif}`, color: GREEN, margin: "0 0 28px" }}>How each matter is handled</h2>
          <div style={{ display: "grid", gap: 24 }}>
            {principles.map((p) => (
              <div key={p.title}>
                <div style={{ width: 38, height: 38, border: `1px solid ${GOLD}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <span style={{ width: 7, height: 7, background: GOLD, transform: "rotate(45deg)" }} />
                </div>
                <h3 style={{ font: `600 19px/1.3 ${serif}`, color: GREEN, margin: "0 0 6px" }}>{p.title}</h3>
                <p style={{ font: `400 14.5px/1.68 ${sans}`, color: "#54605a", margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" style={{ background: "#fff", padding: sectionPad }}>
          <Eyebrow text="Process" />
          <h2 style={{ font: `600 clamp(26px,7vw,32px)/1.16 ${serif}`, color: GREEN, margin: "0 0 28px" }}>What to expect, step by step</h2>
          <div style={{ display: "grid", gap: 24 }}>
            {steps.map((s) => (
              <div key={s.no} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ font: `600 40px/1 ${serif}`, color: "#e4d7ae", flexShrink: 0 }}>{s.no}</div>
                <div>
                  <h3 style={{ font: `600 19px/1.3 ${serif}`, color: GREEN, margin: "0 0 6px" }}>{s.title}</h3>
                  <p style={{ font: `400 14.5px/1.68 ${sans}`, color: "#54605a", margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={{ background: "#f4f1e6", padding: sectionPad }}>
          <Eyebrow text="FAQ" />
          <h2 style={{ font: `600 clamp(26px,7vw,32px)/1.16 ${serif}`, color: GREEN, margin: "0 0 24px" }}>Common questions</h2>
          {faqData.map((f, i) => {
            const isOpen = i === openFaq;
            return (
              <div key={f.q} style={{ borderBottom: "1px solid #e2dcc4" }}>
                <button onClick={() => setOpenFaq(isOpen ? -1 : i)} aria-expanded={isOpen} aria-controls={`faq-panel-${i}`} className="jk-m-tap" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14, padding: "20px 0", background: "none", border: "none", textAlign: "left", cursor: "pointer" }}>
                  <span style={{ font: `600 16.5px/1.4 ${serif}`, color: GREEN }}>{f.q}</span>
                  <span aria-hidden="true" style={{ flexShrink: 0, display: "inline-block", transform: isOpen ? "rotate(45deg)" : "none", transition: "transform .2s ease", color: GOLD, fontSize: 24 }}>+</span>
                </button>
                {isOpen && <p id={`faq-panel-${i}`} role="region" style={{ font: `400 14.5px/1.72 ${sans}`, color: "#54605a", margin: "0 0 22px" }}>{f.a}</p>}
              </div>
            );
          })}
        </section>

        {/* Consultation CTA */}
        <section style={{ background: GREEN, color: "#eef2ee", padding: "clamp(52px,13vw,76px) 24px", textAlign: "center" }}>
          <Eyebrow text="Consultation" center />
          <h2 style={{ font: `600 clamp(28px,8vw,38px)/1.14 ${serif}`, color: "#f4efe4", margin: "0 0 16px" }}>Take the first step, in confidence.</h2>
          <p style={{ font: `400 16px/1.7 ${sans}`, color: "#b9c8bf", margin: "0 0 28px" }}>If you are facing a family or matrimonial matter, an early conversation can bring clarity. Consultations are private and by appointment.</p>
          <div style={{ display: "grid", gap: 12 }}>
            <a href={siteConfig.phoneHref} className="jk-btn-gold jk-m-tap" style={{ padding: 17, background: "#c9a75a", color: "#16332c", borderRadius: 6, font: `600 12px ${sans}`, letterSpacing: 1.8, textTransform: "uppercase" }}>Call now</a>
            <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="jk-btn-whatsapp jk-m-tap" style={{ padding: 17, background: "#25d366", color: "#103323", borderRadius: 6, font: `600 12px ${sans}`, letterSpacing: 1.8, textTransform: "uppercase" }}>WhatsApp</a>
            <a href={`mailto:${siteConfig.email}`} className="jk-m-tap" style={{ padding: 17, background: "transparent", color: "#f4efe4", border: "1px solid rgba(216,184,102,.55)", borderRadius: 6, font: `500 12px ${sans}`, letterSpacing: 1.8, textTransform: "uppercase" }}>Email now</a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ background: "#fff", padding: sectionPad }}>
          <Eyebrow text="Consultation" />
          <h2 style={{ font: `600 clamp(28px,7.5vw,36px)/1.12 ${serif}`, color: GREEN, margin: "0 0 14px" }}>Arrange a consultation</h2>
          <p style={{ font: `400 15px/1.7 ${sans}`, color: "#4c574f", margin: "0 0 24px" }}>Consultations are by appointment. Share a few details and I will get back to you, or reach out directly by phone, WhatsApp or email.</p>

          {sent ? (
            <div style={{ padding: 28, background: "#f5f1e8", border: "1px solid #e6ddc0", borderRadius: 8, textAlign: "center", marginBottom: 28 }}>
              <h3 style={{ font: `600 22px ${serif}`, color: GREEN, margin: "0 0 10px" }}>Thank you</h3>
              <p style={{ font: `400 14px/1.7 ${sans}`, color: "#54605a", margin: 0 }}>Your enquiry has been sent. I will get back to you as soon as I can. For anything urgent, please call or message on WhatsApp.</p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: "grid", gap: 14, padding: 20, background: "#f8f6ee", border: "1px solid #ece5d0", borderRadius: 8, marginBottom: 28 }}>
              <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" value={company} onChange={(e) => setCompany(e.target.value)} style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
              <input required aria-label="Full name" placeholder="Full name" value={form.name} onChange={field("name")} style={inputStyle} />
              <input required type="tel" aria-label="Phone" placeholder="Phone" value={form.phone} onChange={field("phone")} style={inputStyle} />
              <input type="email" aria-label="Email" placeholder="Email" value={form.email} onChange={field("email")} style={inputStyle} />
              <select aria-label="Nature of matter" value={form.matter} onChange={field("matter")} style={inputStyle}>
                <option>General enquiry</option>
                <option>Divorce</option>
                <option>Maintenance &amp; Alimony</option>
                <option>Child Custody</option>
                <option>Domestic Violence</option>
              </select>
              <textarea rows={4} aria-label="Message" placeholder="Message" value={form.message} onChange={field("message")} style={{ ...inputStyle, resize: "vertical" }} />
              <button type="submit" disabled={sending} className="jk-btn-dark jk-m-tap" style={{ padding: 17, background: GREEN, color: "#f4efe4", border: "none", borderRadius: 6, font: `500 12px ${sans}`, letterSpacing: 2, textTransform: "uppercase", cursor: sending ? "wait" : "pointer", opacity: sending ? 0.7 : 1 }}>{sending ? "Sending…" : "Send request"}</button>
              {error && <p role="alert" style={{ font: `400 13px/1.6 ${sans}`, color: "#a3402f", margin: 0 }}>{error}</p>}
              <p style={{ font: `400 12px/1.6 ${sans}`, color: "#66716b", margin: 0 }}>Your enquiry is sent privately to {siteConfig.email}. I will reply as soon as I can.</p>
            </form>
          )}

          <div style={{ borderTop: "1px solid #eee9dc" }}>
            <div style={{ padding: "16px 0", borderBottom: "1px solid #eee9dc", font: `400 15px ${sans}` }}><strong>Phone:</strong> <a href={siteConfig.phoneHref}>{siteConfig.phone}</a></div>
            <div style={{ padding: "16px 0", borderBottom: "1px solid #eee9dc", font: `400 15px ${sans}` }}><strong>WhatsApp:</strong> <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer">{siteConfig.whatsapp}</a></div>
            <div style={{ padding: "16px 0", borderBottom: "1px solid #eee9dc", font: `400 15px ${sans}` }}><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
            <div style={{ padding: "16px 0", borderBottom: "1px solid #eee9dc", font: `400 15px/1.6 ${sans}` }}><strong>Chambers:</strong> <a href={siteConfig.mapsHref} target="_blank" rel="noopener noreferrer">{siteConfig.address}</a></div>
          </div>

        </section>

        {/* Footer */}
        <footer style={{ background: "#1b2f2a", color: "#dce4de", padding: "30px 20px" }}>
          <div style={{ font: `600 22px ${serif}`, color: "#f4efe4", marginBottom: 8 }}>Jagdeep Kaur</div>
          <div style={{ font: `400 12px/1.7 ${sans}`, color: "#aebbb4", marginBottom: 18 }}>Advocate · Matrimonial and family law · Bombay High Court and Family Courts at Mumbai &amp; Thane.</div>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}><a href={siteConfig.portalUrl} style={{ font: `500 11px ${sans}`, letterSpacing: 1.8, textTransform: "uppercase", color: "#d8b866" }}>Client Portal</a><a href="#top" style={{ font: `500 11px ${sans}`, letterSpacing: 1.8, textTransform: "uppercase", color: "#dce4de" }}>Back to top ↑</a></div>
        </footer>
      </main>

      {/* Fixed bottom action bar */}
      <div style={{ position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 120, display: "flex", background: CREAM, borderTop: "1px solid rgba(31,58,52,.12)", boxShadow: "0 -6px 20px rgba(25,45,39,.08)", paddingBottom: "env(safe-area-inset-bottom)" }}>
        <a href={siteConfig.phoneHref} className="jk-m-tap" style={{ flex: 1, height: BAR_H, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3, color: GREEN, borderRight: "1px solid rgba(31,58,52,.1)" }}>
          <span style={{ fontSize: 18 }}>📞</span>
          <span style={{ font: `600 10px ${sans}`, letterSpacing: 1.4, textTransform: "uppercase" }}>Call</span>
        </a>
        <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="jk-m-tap" style={{ flex: 1, height: BAR_H, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3, background: "#25d366", color: "#08331d" }}>
          <span style={{ fontSize: 18 }}>💬</span>
          <span style={{ font: `600 10px ${sans}`, letterSpacing: 1.4, textTransform: "uppercase" }}>WhatsApp</span>
        </a>
        <a href="#contact" className="jk-m-tap" style={{ flex: 1, height: BAR_H, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3, background: GREEN, color: "#f4efe4" }}>
          <span style={{ fontSize: 18 }}>✉️</span>
          <span style={{ font: `600 10px ${sans}`, letterSpacing: 1.4, textTransform: "uppercase" }}>Enquire</span>
        </a>
      </div>
    </>
  );
}
