"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { WhatsAppButton } from "./WhatsAppButton";

export function FloatingWhatsAppButton() {
  const pathname = usePathname();
  const [inlineVisible, setInlineVisible] = useState(false);

  useEffect(() => {
    setInlineVisible(false);
    if (!("IntersectionObserver" in window)) return;
    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5)
            visible.add(entry.target);
          else visible.delete(entry.target);
        }
        setInlineVisible(visible.size > 0);
      },
      { threshold: [0, 0.5, 1] },
    );
    document
      .querySelectorAll(".whatsapp-button:not(.whatsapp-floating)")
      .forEach((button) => observer.observe(button));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div hidden={inlineVisible}>
      <WhatsAppButton floating />
    </div>
  );
}
