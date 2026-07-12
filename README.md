# Jagdeep Kaur Law

Complete Next.js App Router build.

## Run

```bash
npm install
npm run dev
```

## Deploy

Upload the repo root to GitHub with these top-level folders/files:
- app
- lib
- public
- package.json
- next.config.mjs
- tsconfig.json

## Environment

The consultation form (`app/api/contact`) sends enquiries via Resend. Set:

```
RESEND_API_KEY=...   # in .env.local for dev, and in the host's env for production
```

The sender is `noreply@jagdeepkaur.legal` (see `FROM` in `app/api/contact/route.ts`) —
this domain must be verified in Resend. Enquiries are delivered to the address in
`lib/data.ts` (`siteConfig.email`), with the enquirer's email as reply-to.

## Notes

Replace the placeholder images in `public/images/` with real photos.
