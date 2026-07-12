import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Sender must be on a domain verified in Resend (jagdeepkaur.legal).
const FROM = "Jagdeep Kaur Website <noreply@jagdeepkaur.legal>";
const MAX = { name: 120, phone: 40, email: 160, matter: 80, message: 5000, company: 100 };

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const esc = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c] as string));

export async function POST(req: NextRequest) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Silently accept, don't send.
  if (clean(data.company, MAX.company)) return NextResponse.json({ ok: true });

  const name = clean(data.name, MAX.name);
  const phone = clean(data.phone, MAX.phone);
  const email = clean(data.email, MAX.email);
  const matter = clean(data.matter, MAX.matter) || "General enquiry";
  const message = clean(data.message, MAX.message);

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
  }

  const text = `Name: ${name}\nPhone: ${phone}\nEmail: ${email || "—"}\nNature of matter: ${matter}\n\n${message || "—"}`;
  const html = `<h2 style="font-family:Georgia,serif;color:#1f3a34">Consultation request</h2>
<p><strong>Name:</strong> ${esc(name)}</p>
<p><strong>Phone:</strong> ${esc(phone)}</p>
<p><strong>Email:</strong> ${esc(email) || "—"}</p>
<p><strong>Nature of matter:</strong> ${esc(matter)}</p>
<p><strong>Message:</strong><br>${esc(message).replace(/\n/g, "<br>") || "—"}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [siteConfig.email],
      reply_to: isEmail(email) ? email : undefined,
      subject: `Consultation request — ${matter}`,
      text,
      html,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Could not send. Please try again." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
