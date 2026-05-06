# InternshipsPlus

A lightweight, static Next.js website for international students searching for paid internships and entry-level jobs in Europe.

## Principles

- No Supabase, PostgreSQL, authentication, or database
- Static JSON configuration for countries, SEO copy, FAQs, and external links
- SEO-friendly country pages with metadata, OpenGraph, sitemap, robots, and FAQ structured data
- Fast, mobile-first UI built with TypeScript and TailwindCSS
- Ready for Vercel deployment

## Development

```bash
npm install
npm run dev
```

## Data

Country content lives in `app/data/countries.json`; curated external application links live in `app/data/external-links.json`.
