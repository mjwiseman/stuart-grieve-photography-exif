# Stuart Grieve Photography Landing Page Redesign

> Superseded on 2026-04-08 by `plans/landing-page-style-reset.md`.
>
> The route split and first-pass landing page shipped from this plan, but the
> visual direction here is no longer the recommended implementation path.

## Purpose / Big Picture

The current site opens directly onto the photo feed. That works for browsing, but it does not explain who Stuart is, what kind of photography he creates, or what a visitor should do next.

The goal of this change is to:

- turn `/` into a true landing page
- move the existing gallery-home experience to `/photos`
- preserve the existing photo browsing and admin workflows
- reuse the Tikus Photography homepage messaging and imagery direction while delivering a more premium, editorial visual style

## Local Overlays

- Repo instructions in `AGENTS.md`
- Existing route and gallery behavior in `app/`, `src/app/`, and `src/photo/`
- React/Next guidance from the `react-best-practices` skill

## Current State

- Root page is the gallery feed: `app/page.tsx`
- Shared shell is gallery-oriented: `src/app/NavClient.tsx`, `src/app/Footer.tsx`
- Routing helpers still treat `/` as the inferred gallery home: `src/app/path.ts`
- Sort/view-switcher behavior depends on those inferred routes: `src/app/AppViewSwitcher.tsx`, `src/photo/sort/path.ts`
- Cache invalidation and some redirects still assume `/` is the gallery fallback: `src/photo/cache.ts` and multiple route files under `app/`

## Design Direction

- Editorial rather than template-like
- Serif-led display typography with a clean sans-serif for body copy
- Full-width sections and alternating text/image composition
- Restrained motion: fade/slide/scale reveals only
- Muted, atmospheric palette inspired by Scottish landscape tones

## Content Source Mapping

Primary source: `https://www.tikusphotography.co.uk/`

Key copy blocks to adapt:

- Inspired by nature's grandeur
- Travel Scotland's hidden secrets
- Our photographic journeys
- Private commissions
- About Tikus Photography
- Testimonial / tour-guide credibility
- Where every vista tells a tale
- Contact / studio details

Reference styling cues:

- motion restraint from `https://www.philpenman.com/`
- alternating layout rhythm from `https://jovanarikalo.com/`
- dense curated image grid from `https://tibalism.com/`

## Plan of Work

### 1. Save plan and establish route strategy

- Save this plan in-repo under `plans/`
- Introduce `/photos` as the canonical gallery-home route
- Update path helpers so inferred gallery routes no longer point at `/`

### 2. Split landing page and gallery home

- Extract the current root gallery logic into a reusable component
- Reuse that component at `app/photos/page.tsx`
- Replace `app/page.tsx` with a landing-page implementation

### 3. Build homepage sections

- Hero with statement copy and CTAs
- Scenic intro split sections
- Services / commissions area
- About Stuart section
- Testimonial block
- Full-width visual statement section
- Curated gallery preview linking to `/photos`
- Contact section

### 4. Adjust shared navigation behavior

- Root page should show marketing-oriented navigation
- Gallery routes should retain search and view-switcher behavior
- Nav title/link behavior should no longer assume `/` is the gallery home

### 5. Update gallery fallbacks and validation paths

- Modal/photo-detail escape paths should return to `/photos` where appropriate
- Missing photo/category redirects should return to `/photos`, not `/`
- Revalidation should include `/photos`

### 6. Validate locally

- Verify `/` renders the landing page
- Verify `/photos` renders the previous gallery-home experience
- Verify `/grid`, `/full`, photo details, and category pages still work

## Validation and Acceptance

- `/` presents a clear homepage with identity, narrative, and calls to action
- `/photos` preserves the prior browse-first experience
- Existing detail routes and admin behavior still work
- Styling feels bespoke and editorial rather than utility-template driven
- Homepage and gallery are both usable on mobile and desktop

## Decision Log

### 2026-04-08

- Use `/photos` as the canonical gallery-home route instead of redirecting users to `/grid` or `/full`
- Preserve `grid/full` as explicit gallery variants to minimize regression risk
- Keep the plan as a living repo artifact under `plans/`

## Progress

- [x] Assess current site and reference sites
- [x] Define the redesign and routing plan
- [x] Save the plan in-repo
- [x] Refactor gallery home to `/photos`
- [x] Implement the landing page
- [x] Update navigation and fallbacks
- [x] Run local validation

## Validation Notes

- `pnpm exec tsc --noEmit`
- `pnpm lint`
- `pnpm dev`
- verified `http://localhost:3001/` returns the landing page content
- verified `http://localhost:3001/photos` returns the prior gallery feed
- verified browser snapshot for `/` showed the new marketing nav, CTAs, archive teaser, and contact section
- verified browser snapshot for `/photos` showed the existing photo feed with `Load More`

## Surprises & Discoveries

- The route helpers and sort/view-switcher logic are more coupled to `/` than the page files alone suggest
- A clean homepage split requires updating fallback and revalidation behavior, not just replacing `app/page.tsx`
