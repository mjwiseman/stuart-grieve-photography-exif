# Handover

## Current Goal

Turn the site into a cleaner, more professional photography site:

- `/` should be a proper landing page for Stuart Grieve Photography
- `/photos` should hold the existing archive/gallery experience
- the landing page should feel neat, readable, and intentionally designed
- the result should be a clear improvement on `https://www.tikusphotography.co.uk/`, which currently has broken alignment and weak styling

The key standard from the user is not "fancy". It is "professional, neat, readable".

## What Has Already Been Implemented

- The root route was moved to a new landing page.
- The old root photo feed was moved to `/photos`.
- Landing-specific content and imagery were added under:
  - `src/landing/`
  - `public/landing/`
- Shared route logic was updated so gallery traffic now resolves to `/photos`.
- The landing header and footer were separated from the archive shell.
- The earlier landing nav bug was fixed:
  - `clsx/lite` had been used with array arguments in `src/app/NavClient.tsx`
  - that caused landing classes like `flex` and `gap-x-*` to be dropped
  - result: `PhotosAboutCommissionsContact` appeared jammed together
  - this is now fixed
- The dark-on-black landing issue was also fixed by giving the landing page its own light shell/background.

## Files Most Relevant To Continue Work

- `app/page.tsx`
- `app/photos/page.tsx`
- `src/landing/LandingPage.tsx`
- `src/landing/LandingPhotoPreview.tsx`
- `src/landing/content.ts`
- `src/landing/brand.ts`
- `src/app/Nav.tsx`
- `src/app/NavClient.tsx`
- `src/app/Footer.tsx`
- `src/app/path.ts`

## Current State

The site is materially better than the previous broken landing page pass, but it is not yet at a polished "professional" finish.

### Confirmed Good

- The landing page now renders with proper header nav spacing.
- The landing page no longer has unreadable dark text sitting on a black background.
- `/photos` is still working as the archive route.
- The overall route split is correct:
  - marketing homepage on `/`
  - archive on `/photos`

### Confirmed Remaining Visual Issues

These are the main issues from the latest review on `2026-04-09`.

1. The landing page still feels under-designed rather than premium.
   - The structure works, but the typography/layout rhythm is still plain.
   - It reads more like a tidy wireframe than a finished photography site.

2. The hero is still too text-dominant.
   - The headline is large and breaks awkwardly.
   - The image is better than before, but the left text block still visually outweighs it.

3. The page relies too heavily on one repeated component pattern.
   - Large rounded image block
   - small uppercase eyebrow
   - serif heading
   - short body copy
   - repeated again
   - This makes the page feel formulaic.

4. Some image choices weaken the premium feel.
   - The commissions section image is the weakest example.
   - It feels more documentary/incidental than flagship editorial photography.

5. Copy still contains at least one internal/meta sentence that should not ship.
   - In `src/landing/LandingPhotoPreview.tsx:43`
   - Current text:
     - "The landing page should be clear and readable."
   - That is process language, not public-facing copy.

6. Some homepage copy is still functional rather than distinctive.
   - `src/landing/content.ts` is cleaner than before, but several sections still read like tidy placeholders rather than strong brand voice.
   - Especially:
     - `about` copy at `src/landing/content.ts:81`
     - `contact` copy at `src/landing/content.ts:105`

7. The archive and landing page still feel like two different products.
   - `/photos` is functional, but visually it still feels utilitarian and app-like.
   - The landing page is warmer and editorial; the archive remains stark and mechanical.
   - This is not broken, but the brand transition is abrupt.

8. First-load dev performance is slow enough to interfere with review.
   - Fresh compile of `/` on a clean dev server took roughly 75 seconds to compile and ~30 seconds for first response.
   - That affected `agent-browser` and caused load-event timeouts during review.

## Visual Review Evidence

I captured the current state with headless Chrome on `http://localhost:3004/`.

What the latest screenshots showed:

- Landing page:
  - much improved over the broken earlier version
  - readable
  - nav spacing fixed
  - still visually conservative and somewhat generic
  - commissions image and lower-page rhythm need another pass

- `/photos` archive:
  - functioning
  - clean enough
  - still very tool-like and disconnected from the warmer homepage language

## Practical Next Steps

If this is picked up later, I would work in this order:

1. Tighten the landing copy.
   - Remove internal/process phrasing.
   - Make the homepage voice more specific and confident.
   - Start with:
     - `src/landing/LandingPhotoPreview.tsx:43`
     - `src/landing/content.ts:81`
     - `src/landing/content.ts:105`

2. Rework the hero composition.
   - Reduce headline dominance.
   - Improve line breaking.
   - Either enlarge the image’s presence or reduce text width/size.

3. Replace or improve the commissions image.
   - The current one is not carrying the section.

4. Introduce more section variety.
   - Reduce the feeling that every section is the same layout module repeated.
   - Keep it neat, but vary rhythm and balance.

5. Decide whether `/photos` should get a mild brand pass.
   - Not a full redesign.
   - Just enough to make the transition from homepage to archive feel intentional.

## Run / Verify

Useful commands used during this work:

```bash
pnpm exec tsc --noEmit
pnpm lint
pnpm exec next dev --port 3004
```

Headless screenshot commands used for review:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --hide-scrollbars \
  --run-all-compositor-stages-before-draw \
  --virtual-time-budget=45000 \
  --window-size=1440,2600 \
  --screenshot=/tmp/stuart-landing-1440-settled.png \
  http://localhost:3004/

"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --hide-scrollbars \
  --run-all-compositor-stages-before-draw \
  --virtual-time-budget=45000 \
  --window-size=1440,2200 \
  --screenshot=/tmp/stuart-photos-1440-settled.png \
  http://localhost:3004/photos
```

## Repo State

- The worktree is currently dirty with the landing-page changes in progress.
- No handoff cleanup or commit was done in this step.
- A new `handover.md` file was added at repo root for future pickup.
