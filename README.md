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

The consultation form (`app/api/contact`) sends enquiries via Resend, using the
**same setup as the portal** (domain `jagdeepkaur.legal` is already verified). Set:

```
EMAIL_PROVIDER_KEY=re_...              # Resend API key (same as the portal)
EMAIL_FROM=noreply@jagdeepkaur.legal   # any address on the verified domain
# CONTACT_TO=someone@example.com       # optional recipient override
```

in `.env.local` for dev and in the host's env for production. Enquiries are delivered
to `siteConfig.email` (`lib/data.ts`) unless `CONTACT_TO` is set, with the enquirer's
email as reply-to.

## Notes

Replace the placeholder images in `public/images/` with real photos.
