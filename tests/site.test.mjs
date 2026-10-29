import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";

const source = (file) =>
  readFile(new URL("../" + file, import.meta.url), "utf8").then((text) =>
    text.replace(/\s+/g, " "),
  );

test("one responsive POSH landing page, without user-agent branching", async () => {
  const page = await source("app/page.tsx");
  assert.match(page, /<h1\b[^]*?POSH/);
  assert.equal((page.match(/<h1\b/g) || []).length, 1);
  assert.doesNotMatch(
    page,
    /next\/headers|DesktopSite|MobileSite|user-agent|<form\b|<input\b|<textarea\b/,
  );
  for (const section of ["scope", "working-together", "about", "contact"])
    assert.ok(page.includes('id="' + section + '"'));
  for (const removed of [
    "app/components/DesktopSite.tsx",
    "app/components/MobileSite.tsx",
    "app/api/contact/route.ts",
    "lib/hooks.ts",
  ])
    await assert.rejects(access(new URL("../" + removed, import.meta.url)));
});

test("three focused support areas and a separate existing-client portal", async () => {
  const data = await source("lib/data.ts");
  for (const title of ["Establish", "Maintain", "Respond"])
    assert.ok(data.includes('title: "' + title + '"'));
  assert.match(data, /portalUrl: "https:\/\/portal\.jagdeepkaur\.legal"/);
  assert.match(
    await source("app/components/SiteFooter.tsx"),
    /noopener noreferrer/,
  );
});

test("contact links avoid a public complaint intake form", async () => {
  const page = await source("app/page.tsx");
  assert.match(page, /mailto:/);
  assert.match(page, /siteConfig\.phoneHref/);
  assert.match(page, /Do not send complaint details/);
  assert.match(await source("lib/data.ts"), /phoneHref: "tel:\+919097699097"/);
});

test("statutory roles and filing requirements stay qualified", async () => {
  const page = await source("app/page.tsx");
  assert.match(page, /retain their statutory responsibilities/);
  assert.match(page, /Filing requirements are assessed/);
  assert.match(page, /Quarterly reviews may be included/);
  assert.doesNotMatch(
    page,
    /mandatory advocate|guaranteed compliance|certified POSH|100%/i,
  );
});

test("preview indexing is controlled independently of production maintenance", async () => {
  const preview = await source("lib/site.ts");
  assert.match(preview, /SITE_PREVIEW === "1"/);
  assert.match(preview, /VERCEL_ENV === "preview"/);
  assert.match(await source("app/layout.tsx"), /index: !preview/);
  assert.doesNotMatch(await source("app/robots.ts"), /disallow:/);
  assert.match(await source("next.config.mjs"), /X-Robots-Tag/);
  const middleware = await source("middleware.ts");
  assert.match(middleware, /MAINTENANCE_MODE === "1"/);
  assert.match(middleware, /status: 503/);
  assert.match(middleware, /Retry-After/);
});

test("portrait-led homepage stays coherent and accessible", async () => {
  const css = await source("app/globals.css");
  const home = await source("app/home.css");
  const page = await source("app/page.tsx");
  assert.match(css, /prefers-reduced-motion/);
  assert.match(home, /focus-visible/);
  for (const component of [
    "home-hero",
    "home-scope",
    "home-working",
    "home-about",
    "home-contact",
  ])
    assert.ok(home.includes(component));
  assert.match(page, /<details/);
  assert.match(page, /name="posh-scope"/);
  assert.doesNotMatch(page, /VisitorNotice|<em[ >]/);
  assert.match(await source("app/layout.tsx"), /href="#main-content"/);
  assert.match(await source("app/layout.tsx"), /IBM_Plex_Sans/);
  assert.match(page, /Read the disclaimer/);
  assert.doesNotMatch(
    await source("app/privacy/page.tsx"),
    /jk_notice|localStorage/,
  );
  assert.match(
    await source("app/components/LegalPage.tsx"),
    /id="main-content"/,
  );
});
