export function isPreviewDeployment() {
  return (
    process.env.SITE_PREVIEW === "1" || process.env.VERCEL_ENV === "preview"
  );
}
