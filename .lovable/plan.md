

# Presage Website — Implementation Plan

## Overview
Build a 7-page enterprise marketing website for Presage, an AI simulation platform. Dark navy aesthetic, serif/sans-serif typography, authoritative tone.

## Step 1: Design System & Shared Infrastructure
- Update `index.css` with Presage color palette (navy `#0A0F1E`, off-white `#F0EEE8`, indigo `#4F46E5`, slates)
- Load Google Fonts: Playfair Display + Inter
- Update `tailwind.config.ts` with custom colors, font families, and animation keyframes for fade-in/scroll reveals
- Update `index.html` with title "Presage" and meta tags

## Step 2: Shared Components
- **Nav** — Sticky navbar with PRESAGE serif wordmark, page links, indigo CTA, mobile hamburger menu via Sheet
- **Footer** — 3-column dark footer with wordmark, site links, mailing list input, copyright row
- **Layout wrapper** — Shared layout component wrapping Nav + children + Footer

## Step 3: Homepage `/`
- Hero section (full viewport, centered headline, stat bar)
- Problem section (3-column grid)
- How It Works (5-step horizontal flow + callout)
- Three Modules cards (Signal, Civitas, Mandate)
- Validation pull quote
- Agent Interview (2-col with mock chat terminal)

## Step 4: Products Overview `/products`
- Hero + expanded module cards linking to detail pages
- Unified platform explanation section

## Step 5: Module Detail Pages (`/products/signal`, `/products/civitas`, `/products/mandate`)
- Module-specific hero with label, headline, CTA
- 2-column capabilities grid
- 3-step domain workflow
- Example simulation questions (indigo left border boxes)

## Step 6: About Page `/about`
- Mission hero, 2-column statement, 3-column differentiators
- Team placeholder grid, careers CTA

## Step 7: Contact Page `/contact`
- 2-column layout: sidebar info + controlled form with validation
- Fields: name, email, org, role, module dropdown, decision textarea

## Step 8: Routing
- Add all routes to `App.tsx`
- Ensure scroll-to-top on navigation

## Technical Details
- All custom components styled with Tailwind — no additional UI libraries
- Scroll-triggered fade-in animations using Intersection Observer
- Contact form with react-hook-form + zod validation
- Fully responsive: grids collapse on mobile, nav becomes hamburger
- Reusable ModuleCard component shared between homepage and products page

