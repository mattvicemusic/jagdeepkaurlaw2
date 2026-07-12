import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";

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
  const [sent, setSent] = useState(false);

  const field = (k: keyof ContactForm) => (e: { target: { value: string } }) =>
    setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const subj = encodeURIComponent("Consultation request — " + (form.matter || "Enquiry"));
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nNature of matter: ${form.matter}\n\n${form.message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subj}&body=${body}`;
    setSent(true);
  };

  return { form, field, submit, sent };
}
