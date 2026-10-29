# Jagdeep Kaur, Advocate

A responsive POSH-first professional website built with Next.js App Router.

## Development

```sh
npm ci
npm run dev
```

## Release checks

```sh
npm run typecheck
npm test
npm audit
npm run build
```

## Deployment

The Vercel project is `jagdeepkaurlaw`, connected to `mattvicemusic/jagdeepkaurlaw2` on `main`. Its public domains are `jagdeepkaur.legal` and `jagdeepkaurlaw.vercel.app`.

- Production: leave `MAINTENANCE_MODE` and `SITE_PREVIEW` unset for normal public service and indexing.
- Emergency maintenance: set `MAINTENANCE_MODE=1` and redeploy to return a temporary 503. Remove it and redeploy to restore public service. A prolonged 503 can affect indexing.
- Vercel preview builds automatically carry noindex metadata/headers. `SITE_PREVIEW=1` provides the same behavior for local review builds. Crawling is permitted so search engines can read noindex.
- Canonical URL and public contact details are centralised in `lib/data.ts`.

## Architecture

One responsive server-rendered homepage replaces the former user-agent-based desktop/mobile implementations. Native disclosure controls organise POSH scopes. Disclaimer and privacy routes are retained.

There is no public complaint/enquiry form, upload endpoint or Resend contact API. Contact uses email and telephone links. The existing client portal remains a separate application and is not deployed or modified by this repository.

The dependency stack is Next 15.5.28 and matching React/React DOM 19.2.9. Compatible transitive overrides address the audit findings in the original Next 14 source.

## Content

The content describes agreed POSH support scopes, not a universal quarterly-filing obligation, compulsory Advocate-on-Record appointment, certification or outcome guarantee. Employer and IC statutory responsibilities remain explicit. This software and its disclaimer do not establish regulatory approval. Professional information and media should be reviewed by the practice when updated.
