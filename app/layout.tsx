import "./globals.css";
import "./components/whatsapp.css";
import { FloatingWhatsAppButton } from "./components/FloatingWhatsAppButton";
import type { Metadata, Viewport } from "next";
import { IBM_Plex_Serif, IBM_Plex_Sans } from "next/font/google";
import { siteConfig } from "@/lib/data";
import { isPreviewDeployment } from "@/lib/site";
const serif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
});
const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
const description =
  "Professional information about Jagdeep Kaur, Advocate, and her POSH compliance, workplace legal support and related practice. Mumbai Metropolitan Region.";
const preview = isPreviewDeployment();
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Jagdeep Kaur, Advocate | POSH & Workplace Legal Support",
    template: "%s | Jagdeep Kaur, Advocate",
  },
  description,
  alternates: { canonical: "/" },
  robots: { index: !preview, follow: !preview },
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    siteName: "Jagdeep Kaur, Advocate",
    title: "Jagdeep Kaur | POSH & Workplace Legal Support",
    description,
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Jagdeep Kaur, Advocate. POSH and workplace legal support.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagdeep Kaur | POSH & Workplace Legal Support",
    description,
    images: ["/opengraph-image"],
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#faf6ee",
};
const professional = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  url: siteConfig.siteUrl,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  description:
    "Independent advocate. POSH compliance and workplace legal support.",
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Mumbai" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={serif.variable + " " + sans.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
        <FloatingWhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professional).replace(/</g, "\u003c"),
          }}
        />
      </body>
    </html>
  );
}
