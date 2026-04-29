# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static portfolio website for Triple Tres (333-RESEARCH) — an AI automation consultancy targeting Mexican SMEs. Built with Next.js 15.2.4 / React 18 / TypeScript, deployed to GitHub Pages via static export (`out/` directory).

## Development Commands

```bash
# From new-webpage-repo/
pnpm dev          # Start dev server at localhost:3000
pnpm build        # Static export → out/
pnpm lint         # ESLint check
```

Deployment is automatic: push to `main` → GitHub Actions builds and deploys to GitHub Pages.

Note: `typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds` are both `true` in `next.config.mjs` — the build will not fail on type or lint errors.

## Architecture

### Routing

- `/` — single-page portfolio (all sections in `app/page.tsx`)
- `/cv` — iframe embed of `/public/cv/index.html` (the actual CV HTML file lives in `public/cv/`)

### Internationalization

Two-layer system:

1. **`lib/translations.ts`** — flat object of all copy, keyed by section then field, each with `{ en: "...", es: "..." }`.
2. **`lib/use-translation.ts`** — `useTranslation()` hook resolves dot-path strings against `translations` for the active language.

Usage pattern in components:
```tsx
const { t, language } = useTranslation()
// t("hero.tagline") returns the string for the active language
```

The `t()` function in `lib/i18n-context.tsx` is a stub — do not use it for translations. Always use `useTranslation()` from `lib/use-translation.ts`.

Language state is held in `I18nContext` (localStorage-persisted) and toggled by `components/language-toggle.tsx`.

### Analytics

Umami is loaded via `<Script>` in `app/layout.tsx`. `components/analytics-tracker.tsx` attaches Intersection Observer and DOM event listeners after Umami initializes to track:
- Section views and dwell time
- Scroll depth milestones (25/50/75/100%)
- Button/link clicks (respects `data-umami-event` attributes)
- Form submissions and external links

To track custom events, add `data-umami-event="event-name"` on any element.

### Key Components

- `components/mouse-trail.tsx` — canvas-based cursor trail effect (client-only)
- `components/analytics-tracker.tsx` — Umami wrapper (client-only, returns `null`)
- `components/language-toggle.tsx` — EN/ES switcher
- `components/theme-toggle.tsx` — dark/light mode toggle

### Styling

Tailwind CSS 3.4 with CSS variables (HSL) defined in `app/globals.css`. Dark mode is the default theme via `next-themes`. Custom color system — avoid hardcoding colors, use `bg-background`, `text-foreground`, etc.

### Static Export Constraints

- `images.unoptimized: true` — use plain `<img>` or Next.js `<Image>` with explicit dimensions; optimization is disabled
- `basePath` and `assetPrefix` are empty strings — site is served from a custom domain root (`public/CNAME` contains the domain)
- No server-side features (API routes, server actions, middleware) — this is a fully static site

## Repository Notes

- `components/*.backup` and `components/*.old` files are left-over backups — they are not imported anywhere
- Both `package-lock.json` and `pnpm-lock.yaml` exist; use `pnpm` locally
- `public/` contains PDFs (certificates, publications) and images referenced by components
