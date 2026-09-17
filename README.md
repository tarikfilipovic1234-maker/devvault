# devvault

Personal portfolio site for Tarik Filipović, a full-stack developer in
Sarajevo. Built with Next.js 16 (App Router), React 19, TypeScript and
Tailwind CSS v4.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

The site builds and runs with no environment variables set. Copy
`.env.example` to `.env.local` to configure the optional ones.

## Structure

```
app/            routes, metadata files (sitemap, robots, icons, OG images)
components/     ui/ primitives, layout/, sections/, and feature folders
content/        site config, projects, skills, experience — the editable data
lib/            data access (lib/projects.ts), SEO helpers, validation, actions
public/         CV and profile photo
```

Content lives in `content/` as typed data, not in the pages. Adding a project
means adding one entry to `content/projects.ts`; its detail page, static
params, OG image and sitemap entry all follow automatically.

`lib/projects.ts` is the only place pages read project data from, so the source
can move from content files to a database without touching any page.

## Environment variables

| Variable | Effect if unset |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Falls back to the Vercel URL. Used for canonical URLs, OG images, sitemap and JSON-LD, so it must be correct in production. |
| `RESEND_API_KEY` | The contact form validates input but reports that it cannot deliver, and offers a `mailto:` fallback instead of silently discarding the message. |
| `CONTACT_TO_EMAIL` | Falls back to the address in `content/site.ts`. |
| `CONTACT_FROM_EMAIL` | Falls back to Resend's onboarding sender. |
| `NEXT_PUBLIC_HAS_SCREENSHOTS` | Project cards render without an image slot. Set to `1` once real screenshots exist at `public/projects/<slug>.png`. |

## Design

One accent colour on a neutral near-black ground, solid surfaces separated by
hairlines, and a tight radius scale defined in `app/globals.css`. Deliberately
no gradients, no glassmorphism and no scroll-triggered animation; the only
motion is a short CSS fade between routes, which `prefers-reduced-motion`
disables.
