/** @type {import('next').NextConfig} */
const securityHeaders = [
  // Clickjacking protection — the site is never meant to be framed.
  { key: "X-Frame-Options", value: "DENY" },
  // Stop MIME-type sniffing.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Don't leak full URLs to third parties (e.g. WhatsApp, maps).
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Drop powerful APIs the site doesn't use.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // Enforce HTTPS for two years, including subdomains.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          ...securityHeaders,
          ...(process.env.SITE_PREVIEW === "1" ||
          process.env.VERCEL_ENV === "preview"
            ? [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }]
            : []),
        ],
      },
    ];
  },
};

export default nextConfig;
