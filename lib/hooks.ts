import { useEffect, useState } from "react";

const DISCLAIMER_KEY = "jk_disclaimer_ok";

// Shared across DesktopSite and MobileSite so the two layouts never drift.
export function useDisclaimer() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  useEffect(() => {
    try { setShowDisclaimer(localStorage.getItem(DISCLAIMER_KEY) !== "1"); } catch { setShowDisclaimer(true); }
  }, []);
  const accept = () => {
    try { localStorage.setItem(DISCLAIMER_KEY, "1"); } catch {}
    setShowDisclaimer(false);
  };
  return { showDisclaimer, accept };
}

type ContactForm = { name: string; phone: string; email: string; matter: string; message: string };

export function useContactForm() {
  const [form, setForm] = useState<ContactForm>({ name: "", phone: "", email: "", matter: "General enquiry", message: "" });
  const [company, setCompany] = useState(""); // honeypot — must stay empty
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const field = (k: keyof ContactForm) => (e: { target: { value: string } }) =>
    setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (sending) return;
    setError(null);
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, company }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError("Something went wrong sending your message. Please try again, or reach out by phone, WhatsApp or email.");
    } finally {
      setSending(false);
    }
  };

  return { form, field, submit, sent, sending, error, company, setCompany };
}
