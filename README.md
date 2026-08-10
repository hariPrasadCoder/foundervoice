# FounderVoice

The FounderVoice marketing site — a small, founder-led LinkedIn service run directly by Hari Prasad. Built with React 19, TypeScript, Vite, and Tailwind CSS v4.

## Run locally

**Prerequisites:** Node.js

1. Install dependencies: `npm install`
2. Run the app: `npm run dev`
3. Build for production: `npm run build`

## Structure

- `config/site.ts` — single source of truth for metrics, pricing, capacity and links. Update values here, not in components.
- `components/` — page sections, composed in `App.tsx`.
- `components/ui/` — shared primitives (`Button`, `Section`).
- `styles/global.css` — design tokens (colors, fonts, motion) via Tailwind v4's `@theme`.
- `public/` — static assets served as-is (favicon, OG image, robots.txt, sitemap.xml).
