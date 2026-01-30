# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website for Triple Tres (333-RESEARCH) built with Next.js 15.2.4, React 18, and TypeScript. The site showcases AI Automation, Complex Systems Analysis and development work and is deployed to GitHub Pages via static export.

## Development Commands

```bash
# Development
npm run dev      # Start development server (next dev)
npm run build    # Production build with static export (next build && next export)
npm run lint     # Run ESLint (next lint)
npm start        # Start production server (next start)
```

The project supports both npm and pnpm (both lock files present).

## Architecture Overview

### Single Page Application Structure

- **App Router**: Uses Next.js 13+ app directory structure
- **Component-Based**: Main page composed of 7 sections (Header, Hero, About, Research, Publications, Contact, Footer)
- **Static Generation**: Configured for static export to GitHub Pages

### Key Directories

- `app/`: Next.js App Router with main layout and page
- `components/`: React components including extensive shadcn/ui component library (60+ components)
- `components/ui/`: Complete shadcn/ui component system built on Radix UI primitives
- `hooks/`: Custom React hooks (mobile detection, toast notifications)
- `lib/`: Utility functions (primarily Tailwind class merging)
- `public/`: Static assets including research images and hero image

### Technology Stack

- **Framework**: Next.js 15.2.4 with React 18.3.1 and TypeScript
- **Styling**: Tailwind CSS 3.4.17 with custom dark theme configuration
- **UI Library**: shadcn/ui components with Radix UI primitives
- **Animations**: Framer Motion for hero section and interactions
- **Forms**: React Hook Form with Zod validation
- **Theme**: next-themes with dark mode as default

## Build Configuration

### Static Export Setup

- **Output**: Static files in `out/` directory
- **Image Optimization**: Disabled for static hosting compatibility
- **Deployment**: GitHub Actions workflow builds and deploys to GitHub Pages
- **Build Process**: `next build && next export` for static generation

### Development Considerations

- ESLint errors ignored in build for deployment flexibility
- Webpack worker optimization enabled
- Path aliases configured (`@/*` for src imports)
- Custom CSS variables system using HSL color values

## Component Architecture

### Main Sections (components/)

- `hero.tsx` (170 lines): Animated introduction with Framer Motion
- `about.tsx` (138 lines): Personal background and expertise
- `contact.tsx` (154 lines): Contact form with validation
- `research.tsx` (136 lines): Research showcase section
- `publications.tsx` (129 lines): Featured articles with images
- `header.tsx` (82 lines): Responsive navigation
- `footer.tsx` (25 lines): Social links and info

### UI Components

Complete shadcn/ui implementation with 40+ Radix UI-based components available in `components/ui/`. The project uses Class Variance Authority (CVA) for component variants and follows a consistent design system with custom dark theme colors.

## Styling System

### Tailwind Configuration

- Custom color palette using CSS variables (HSL values)
- Extended animations including pulse effects  
- Mobile-first responsive design
- Dark mode as default theme

### Theme Implementation

- CSS variables defined in `app/globals.css`
- `next-themes` integration with `theme-provider.tsx`
- Custom color system optimized for dark mode presentation

## Content Focus

This portfolio website targets the Mexican SMEs community and potential AI Automation clients. Content sections emphasize n8n, MCP expertise, full-stack development, and AI Integration systems.
