# Rieayat Alkhalil Company — Website

Bilingual (Arabic/English) corporate homepage for **Rieayat Alkhalil Company**
(شركة رعاية الخليل), a plastic raw materials importer/trader based in Erbil, Iraq.

Built with Next.js (App Router), TypeScript and Tailwind CSS v4.

## Getting started

```bash
nvm use        # Node 22.x (see .nvmrc) — Tailwind v4 / eslint 9 require it
npm install
npm run dev     # http://localhost:3000 -> redirects to /ar
```

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
npx tsc --noEmit   # type check
```

## Where things live

| What | Where |
| --- | --- |
| Phone numbers, email, WhatsApp number, hours, social/map links | `src/config/company.ts` |
| Arabic copy | `src/content/ar.ts` |
| English copy | `src/content/en.ts` |
| Shared content shape | `src/content/types.ts` |
| Page sections (Hero, Materials, Contact, etc.) | `src/components/` |
| Route + per-locale layout (`/ar`, `/en`) | `src/app/[locale]/` |
| `/` → `/ar` redirect | `next.config.ts` (`redirects()`) |
| Sitemap / robots | `src/app/sitemap.ts`, `src/app/robots.ts` |
| Brand assets (logo crops, OG image) | `public/brand/` |
| Original supplied logo photos (untouched) | `.assets-original/` |
| Requested-information workbook for the owner | `docs/بيانات-مطلوبة-لموقع-شركة-رعاية-الخليل.xlsx` |

Production domain is not yet known — set `NEXT_PUBLIC_SITE_URL` before deploying
(see the fallback/comment in `src/config/company.ts`) so canonical URLs,
hreflang tags, the sitemap and JSON-LD point at the real domain.
