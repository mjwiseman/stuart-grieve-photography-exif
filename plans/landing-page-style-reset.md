# Stuart Grieve Photography Landing Page Style Reset

Supersedes: `plans/landing-page-redesign.md`

## Purpose / Big Picture

The first pass solved the routing problem, but it did not solve the design
problem. `/` is now a landing page and `/photos` is the archive, but the
homepage still feels like gallery UI wearing marketing copy rather than a
confident photography site.

This plan resets the homepage art direction so the site feels calmer, more
editorial, and more intentional, while keeping the existing archive experience
working at `/photos`.

## Local Overlays

- Repo instructions in `AGENTS.md`
- Existing route split between `/` and `/photos`
- Shared app shell in `app/layout.tsx`, `src/app/NavClient.tsx`, and
  `src/app/Footer.tsx`
- Current landing page implementation in `src/landing/`

## Current Assessment

### 1. The header/nav is structurally wrong for a homepage

- The current landing nav is still driven by shared app config.
- On this install, `navTitle` resolves to
  `stuart-grieve-photography.vercel.app`, so the brand lockup renders as:
  `Stuart Grieve Photography` plus the Vercel domain.
- The homepage header therefore feels broken before styling is even considered.
- The CTA/button treatment is also gallery-shell behavior, not a considered
  homepage masthead.

Relevant files:

- `src/app/NavClient.tsx`
- `src/app/config.ts`

### 2. The hero is using the wrong image treatment

- The current hero depends on a full-width stretched background image.
- `pittenweem-storm.jpg` is not a strong enough hero for that treatment.
- The dark overlays and large type flatten the image rather than letting the
  photography lead.
- The result feels like a generic banner instead of a composed opening frame.

Relevant file:

- `src/landing/LandingPage.tsx`

### 3. The page is over-boxed

- Too many sections are large rounded cards on tinted backgrounds.
- The repeated use of panels, glass boxes, and dark blocks makes the page feel
  segmented and UI-heavy.
- The current composition relies on boxes to create hierarchy instead of using
  spacing, image scale, alignment, and typography.

Relevant files:

- `src/landing/LandingPage.tsx`
- `src/landing/LandingPhotoPreview.tsx`

### 4. The content structure is repetitive

- Several sections repeat the eyebrow and the headline with the same text.
- Example: `Travel Scotland's hidden secrets` appears as both the eyebrow and
  the main heading.
- The same pattern also weakens sections like `Our photographic journeys` and
  `Where every vista tells a tale`.
- This makes the copy feel padded instead of precise.

Relevant files:

- `src/landing/LandingPage.tsx`
- `src/landing/content.ts`

### 5. Homepage and gallery chrome are leaking into each other

- The landing page still uses gallery-era wrappers and footer behavior.
- The footer repeats the same marketing links already present in the header.
- The page therefore reads like stacked modules inside an app shell, not a
  single narrative page.

Relevant files:

- `app/layout.tsx`
- `src/app/Footer.tsx`
- `src/app/NavClient.tsx`

### 6. Metadata polish is incomplete

- The page-level metadata title and description were updated, but the shared
  layout is still emitting placeholder OG/Twitter description content.
- This is not the main visual issue, but it is part of the same first-pass
  incompleteness and should be fixed in the next redesign pass.

Relevant file:

- `app/layout.tsx`

## Decision

Do not iterate on the current homepage by changing colors, border radius, or
image choices alone.

The next pass should treat the existing landing page as a prototype that proved
the route split, then rebuild the homepage structure around a cleaner shell and
stronger photographic composition.

## Design Reset Principles

- Photography first, interface second.
- One strong idea per section.
- Use space and image scale instead of boxes to create hierarchy.
- Keep the homepage calm and editorial, not app-like.
- Make the homepage shell distinct from the archive shell.
- Use motion sparingly and only where it adds rhythm.
- Prefer fewer, better images over more sections.

## New Art Direction

### Visual tone

- Premium but quiet.
- More magazine feature than product landing page.
- Warm neutrals, soft contrast, and restrained accent color.
- No glassmorphism, no stacked callout cards, no heavy dark slabs unless there
  is a very clear reason.

### Typography

- Keep the serif/sans pairing, but use it more deliberately.
- Serif should handle major statements and photo-led headings only.
- Sans should handle navigation, body copy, metadata, and CTAs.
- Reduce the number of oversized headings so the type scale feels intentional.

### Layout

- Replace the current card-stack rhythm with longer, cleaner section flows.
- Use full-width or near-full-width image bands where the crop genuinely works.
- Prefer split layouts where the image and copy have distinct visual roles.
- Allow some sections to be text-led with only a thin rule or quiet accent,
  rather than forcing every section into image-plus-box format.

### Motion

- Borrow only the restraint from `philpenman.com`, not the exact aesthetic.
- Use simple fade, slide, and slow image-scale reveals.
- Avoid stacked animated boxes in the hero.
- Motion should help the page breathe, not call attention to itself.

### Reference mapping

- `philpenman.com`: confidence, restraint, simple reveal behavior
- `jovanarikalo.com`: alternating image/text rhythm and full-width confidence
- `tibalism.com`: dense, curated image-grid energy for the archive teaser

## Content Strategy Reset

- Rewrite the imported Tikus copy into Stuart's voice rather than transplanting
  section titles directly.
- Remove all repeated eyebrow/headline pairs.
- Shorten the homepage copy overall.
- Make each section answer one question only:
  - who Stuart is
  - what makes the work distinct
  - what kinds of commissions are available
  - where to go next
- Keep the most evocative lines, but reduce generic service language.
- Avoid phrasing that sounds like tourism brochure copy.

## New Homepage Structure

### 1. Landing header

Goal:

- A proper homepage masthead with clean branding and simple navigation.

Requirements:

- Use a homepage-specific brand title, not `navTitle`.
- Remove the duplicate `Photos` CTA/button pattern.
- Keep nav items to a minimum: `Photos`, `About`, `Commissions`, `Contact`.
- Make the header feel integrated with the hero rather than sitting in a
  rounded app bar.

### 2. Intro hero

Goal:

- Open with one strong photographic statement and one clear line of copy.

Requirements:

- Do not use a stretched full-bleed background image as the default pattern.
- Use a composed split hero or contained editorial hero instead.
- Select a new hero image from Stuart's own archive first.
- Keep the text block tighter and shorter than the current version.
- Remove the hero stat boxes entirely.

### 3. Short editorial introduction

Goal:

- Transition from the hero into Stuart's point of view without another large
  boxed section.

Requirements:

- Use a short paragraph or two-column note rather than a full card.
- Introduce the "hidden Scotland" idea once, cleanly.
- Use one supporting image at a natural aspect ratio.

### 4. Alternating feature sections

Goal:

- Create rhythm through alternating image/text sections rather than repeated
  boxed blocks.

Sections:

- Hidden landscapes / way of seeing
- Private commissions
- About Stuart / guide-led perspective

Requirements:

- One image, one heading, one body block per section.
- Alternate alignment left/right.
- Avoid section intros that duplicate the headline.
- Use thin separators, whitespace, and image scale instead of colored panels.

### 5. Credibility / testimonial moment

Goal:

- Add trust without dropping into a dark quote card.

Requirements:

- Treat the testimonial as a pull quote or editorial aside.
- Integrate it into the About section or between two story sections.
- Keep it short and typographically strong.

### 6. Archive preview

Goal:

- Bridge the marketing homepage to the actual product: the photographs.

Requirements:

- Keep the preview grid, but make it feel more curated and less card-based.
- Reduce visible border treatment.
- Let imagery dominate; captions should support, not compete.
- Preserve the clear CTA through to `/photos`.

### 7. Contact close

Goal:

- End the page with a confident invitation, not two competing CTA boxes.

Requirements:

- Collapse the current two-column contact/cards treatment into one cleaner
  closing section.
- Present contact details in a quieter, more editorial way.
- Keep one primary CTA and one secondary contact path.

## Homepage Shell Strategy

The root route should stop pretending to be just another branch of the gallery
shell.

Implementation direction:

- Introduce dedicated `LandingHeader` and `LandingFooter` behavior for `/`.
- Keep the existing gallery nav/footer behavior for `/photos` and related
  archive routes.
- Avoid using `navTitle` and `navCaption` directly on the homepage.
- Remove duplicated marketing links from the footer on `/`.
- Consider reducing or bypassing `AppGrid` constraints on the landing page where
  they make the composition feel boxed in.

Primary files:

- `src/app/NavClient.tsx`
- `src/app/Footer.tsx`
- `app/layout.tsx`

## Imagery Strategy

- Hero image must be chosen for both desktop and mobile crops.
- Use Stuart's archive as the first source of truth for the hero and major
  supporting images.
- Keep the imported Tikus images only if they are genuinely the best visual fit.
- Do not stretch images to create drama; use better crops and containers.
- Manually tune `object-position` for hero and key supporting images.
- Limit the homepage to a tighter set of memorable images rather than many
  interchangeable scenic shots.

## What Must Be Removed From The Current Homepage

- The current full-bleed `pittenweem-storm.jpg` hero treatment
- The two hero stat boxes
- Repeated eyebrow/headline phrases
- Large tinted cards as the default section pattern
- The duplicate footer nav on `/`
- The Vercel-domain brand lockup in the header
- The two-card closing contact area

## Implementation Plan

### Phase 1. Separate homepage chrome from archive chrome

- Create homepage-specific header behavior.
- Create homepage-specific footer behavior.
- Remove reliance on shared `navTitle` for the landing brand.
- Confirm `/photos` continues to use the existing archive navigation.

### Phase 2. Reset the content model

- Rewrite `src/landing/content.ts` so each section has unique:
  - eyebrow
  - heading
  - body
- Shorten copy and remove duplicated language.
- Recast the Tikus source text into Stuart's voice.

### Phase 3. Rebuild the page composition

- Rewrite `src/landing/LandingPage.tsx` around a cleaner section order.
- Replace most card backgrounds with whitespace, rules, and stronger image
  placement.
- Build a new hero with a contained image composition.
- Rework the testimonial and contact sections into simpler editorial moments.

### Phase 4. Refine the archive teaser

- Update `src/landing/LandingPhotoPreview.tsx` to reduce border-box feel.
- Make the grid denser and more photographic.
- Ensure the CTA to `/photos` remains obvious.

### Phase 5. Polish metadata and shell details

- Fix the placeholder OG/Twitter descriptions still emitted from `app/layout.tsx`.
- Check brand naming consistency across metadata, header, and footer.
- Review spacing, typography, and image crops across desktop and mobile.

### Phase 6. Validate with live review

- Run the site locally.
- Review the landing page at mobile, tablet, and desktop widths.
- Confirm the header no longer looks broken.
- Confirm duplicated phrases are gone.
- Confirm `/photos` still behaves as the archive home.

## Files Expected To Change

- `src/landing/LandingPage.tsx`
- `src/landing/content.ts`
- `src/landing/LandingPhotoPreview.tsx`
- `src/app/NavClient.tsx`
- `src/app/Footer.tsx`
- `app/layout.tsx`
- `app/page.tsx`
- `public/landing/*` or replacement image assets sourced from the archive

## Validation and Acceptance

- The homepage brand lockup never shows the domain as the main brand line.
- The header reads clearly on first load and feels intentional on mobile and
  desktop.
- No homepage section repeats the same eyebrow and heading text.
- The hero image looks composed rather than stretched.
- The homepage uses far fewer boxed sections than the current version.
- The page feels editorial and photographic, not like a repurposed app shell.
- `/photos` remains the working archive home with no regression in gallery
  browsing.

## Progress

- [x] Evaluate the first-pass homepage in the browser
- [x] Trace the main visual issues back to the implementation
- [x] Record a replacement plan in the repo
- [ ] Rebuild the homepage to match this new direction

## Surprises & Discoveries

- The strongest visual issue is not a single bad component. It is that the
  homepage is still structurally coupled to the archive shell.
- The brand/title bug is partly architectural: homepage branding currently comes
  from generic app metadata/config instead of a dedicated homepage identity.
- The route split itself is fine. The problem is the visual system layered on
  top of it.

## Decision Log

### 2026-04-08

- Treat the current landing page as a prototype, not the finished direction.
- Keep `/photos` as the canonical archive home.
- Make the new style-reset plan the source of truth for the next homepage pass.
