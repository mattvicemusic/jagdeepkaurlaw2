import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jagdeep Kaur — Advocate | Matrimonial & Family Law",
  description: "Advocate Jagdeep Kaur practises matrimonial and family law before the Bombay High Court and the Family Courts of Mumbai & Thane.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
