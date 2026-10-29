import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";
import { isPreviewDeployment } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Crawlers must be able to fetch preview pages to see their noindex directive.
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(isPreviewDeployment()
      ? {}
      : { sitemap: siteConfig.siteUrl + "/sitemap.xml" }),
  };
}
