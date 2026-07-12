import type { MetadataRoute } from "next";

const SITE_URL = "https://jagdeepkaur.legal";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: "2026-07-12", changeFrequency: "yearly", priority: 1 },
  ];
}
