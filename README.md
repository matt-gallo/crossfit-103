# CrossFit 103 — Website

The CrossFit 103 marketing site, rebuilt as a Next.js app to replace the
GoHighLevel-hosted version. Deployed via Railway.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- Self-hosted Inter + Roboto via `next/font`
- All images served locally from `public/images/` (no external CDN dependency)

## Project structure

```
app/
  layout.tsx        Root layout (fonts, header, footer, metadata)
  page.tsx          Home (hero, trust bar, problems, programs, coaches, …)
  programs/         Programs page
  coaches/          Coaches page
  faq/              FAQ page
components/         Header, Footer, LeadForm, FaqAccordion, Reveal
lib/content.ts      All site copy, links, coaches, programs, FAQs — edit here
public/images/      Logo, hero, coach photos, gym/gallery shots, icons
legacy/             The previous static-HTML build (kept for reference)
```

To change copy, links, phone/email, or the booking URL, edit `lib/content.ts`.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

## Deploying to Railway

Railway auto-detects Next.js via Nixpacks. `railway.json` pins the start
command (`npm run start`). Railway provides `PORT` automatically.

1. Create a new Railway service from this repo.
2. Railway runs `npm run build`, then `npm run start`.
3. Add the custom domain (crossfit103.com) under the service's Settings →
   Networking, and point DNS at the Railway target.

## Notes

- The lead form (`components/LeadForm.tsx`) currently routes submissions to the
  booking URL in `lib/content.ts`. To capture leads directly, wire its
  `handleSubmit` to a GoHighLevel form endpoint or an API route.
- The phone/email in `lib/content.ts` are the current site's published
  placeholders — swap in the real contact details before launch.
