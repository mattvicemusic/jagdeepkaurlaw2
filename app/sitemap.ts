import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";
import { isPreviewDeployment } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  if (isPreviewDeployment()) return [];
  return [
    { url: siteConfig.siteUrl, changeFrequency: "yearly", priority: 1 },
    {
      url: siteConfig.siteUrl + "/disclaimer",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: siteConfig.siteUrl + "/privacy",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
