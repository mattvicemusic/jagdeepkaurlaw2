import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { siteConfig } from "@/lib/data";

// Self-hosted (no external Google Fonts request). Exposed as CSS variables
// consumed throughout the two layout components via var(--font-serif/-sans).
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const SITE_URL = "https://jagdeepkaur.legal";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Jagdeep Kaur — Advocate | Matrimonial & Family Law",
  description:
    "Advocate Jagdeep Kaur practises matrimonial and family law before the Bombay High Court and the Family Courts of Mumbai & Thane.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Jagdeep Kaur, Advocate",
    title: "Jagdeep Kaur — Advocate | Matrimonial & Family Law",
    description:
      "Matrimonial and family law before the Bombay High Court and the Family Courts of Mumbai & Thane. Consultations by appointment.",
    locale: "en_IN",
    images: [{ url: "/images/portrait.jpg", width: 800, height: 1000, alt: "Advocate Jagdeep Kaur" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagdeep Kaur — Advocate | Matrimonial & Family Law",
    description:
      "Matrimonial and family law before the Bombay High Court and the Family Courts of Mumbai & Thane.",
    images: ["/images/portrait.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1f3a34",
};

// Factual professional listing — no promotional language (Bar Council of India rules).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "Jagdeep Kaur, Advocate",
  description:
    "Advocate practising matrimonial and family law before the Bombay High Court and the Family Courts of Mumbai & Thane.",
  url: SITE_URL,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  areaServed: ["Mumbai", "Thane"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office No. 11, Navrajshree CHS, Opp. McDonald's, Mira Road (East)",
    addressLocality: "Thane",
    postalCode: "401107",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
