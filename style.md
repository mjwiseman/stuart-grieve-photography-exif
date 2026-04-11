# Landing Page Style Notes

These notes describe the current Tikus Photography landing page direction so
other pages can be brought into the same visual system.

## Overall Direction

The style is quiet, editorial, and photography-led. It should feel more like a
high-end landscape photography portfolio than a generic web app. The layout
uses generous whitespace, restrained colours, large photographic moments, and
small amounts of slow motion.

Avoid heavy UI boxes, strong borders, dense controls, or decorative clutter.
The page should stay neat, readable, and calm.

## Brand And Tone

- Use `Tikus Photography` as the public brand name.
- Keep copy concise and direct.
- Prefer calm landscape-photography language over sales-heavy messaging.
- Let the photographs carry much of the atmosphere.

## Typography

- Headings and the brand wordmark use `Playfair Display` via
  `--font-landing-serif`.
- Body copy, eyebrow labels, navigation, and form text use `Source Sans 3` via
  `--font-landing-sans`.
- Headings should be elegant and moderately weighted, usually `font-medium`.
- Body text should be readable and relaxed, with generous line height.
- Eyebrow labels should be small uppercase text with wide tracking.

Current landing-page type examples:

- Main hero title: white serif, large and centred.
- Section headings: serif, `text-[#22282e]`, responsive from roughly `text-3xl`
  to `lg:text-5xl`.
- Body copy: sans, `text-[#717274]`, `leading-relaxed`, roughly base to large.
- Navigation: sans, uppercase, small, wide tracking.

## Colour Palette

Use the current warm neutral palette unless there is a clear reason to extend
it.

- Page background: `#fbfaf7`
- Alternating section background: `#f0ebe5`
- Primary text / charcoal: `#22282e`
- Secondary text / muted grey: `#717274`
- Soft icon accent: `#e7d8c5`
- Nav scrolled border: `#e3dacf`
- Form field border: `#ddd2c5`
- Form field background: `#faf8f4`
- Form button background: `#222c33`
- Form button hover: `#2a3640`

Keep contrast strong enough for readability. Do not place dark text on dark
photography or low-contrast text over busy image areas without an overlay,
shadow, or background change.

## Layout

- Use a generous content width, currently `max-w-6xl` for main landing sections.
- Use section padding similar to `px-6 py-24 md:py-32`.
- Alternate warm neutral backgrounds between major sections where it helps
  page rhythm.
- Avoid card-heavy layouts. The current style relies on whitespace and image
  placement rather than boxed content.
- Use centred section intros for portfolio/services/testimonial areas.
- Use a two-column about section on desktop, collapsing naturally on mobile.
- Use a three-column gallery preview on desktop, stacked on mobile.

## Hero

- The hero is full viewport height with a full-bleed photograph.
- Use `object-cover` imagery with a high-resolution landscape image.
- Add a dark gradient overlay over the hero image:
  `from-[#22282e]/30 via-[#22282e]/10 to-[#22282e]/60`.
- Centre the hero text vertically and horizontally.
- Use white text with enough weight/shadow for readability.
- Use a simple scroll cue instead of primary CTA buttons on the hero.
- Keep the initial animation subtle: a slow image scale down and staggered text
  fade-up.

## Navigation

- On the landing page, the nav is fixed and transparent over the hero.
- Once scrolled, it becomes a warm translucent bar:
  `bg-[#fbfaf7]/90`, subtle border, light shadow, and backdrop blur.
- Desktop nav uses uppercase, widely tracked links with generous spacing.
- Mobile nav uses a simple hamburger and a warm translucent dropdown.
- `Gallery` in the landing nav should link to the real photo archive at
  `/photos`, not just the landing-page preview section.
- Non-landing app headers should use the same warm header palette rather than
  plain white/black chrome. Keep the Tikus serif brand visible and preserve
  the existing photo controls without redesigning the grid.

## Imagery

- Use real Stuart photography, not AI-generated imagery.
- Current selected landing images from `Stuart Images`:
  `Rannoch Moor.JPG`, `St Abbs Lighthouse.JPG`,
  `The Lonely Tree Loch Lomond.JPG`, `Kilchurn Castle.JPG`, and
  `The Bridge to Nowhere.JPG`.
- Optimized public copies live under `public/stuart-home/`.
- Choose images by role: hero needs a strong wide crop; gallery previews need
  subjects that survive portrait crops; section images need clean focal points.
- Use `next/image` and accurate alt text.
- Image hover effects should be restrained, usually a slow scale such as
  `duration-700 hover:scale-105` or gallery `group-hover:scale-110`.

## Motion

- Motion should be slow and subtle.
- Hero text uses staggered `landing-fade-up` timing.
- Hero image uses `landing-hero-scale` over about `1.8s`.
- Section content uses `LandingReveal`: fade in from `y: 40`, duration `0.8`,
  once per viewport.
- Gallery tiles may lift slightly on hover, but avoid bouncy or playful motion.

## Forms And Controls

- Keep controls simple and rectangular with small radii, currently `4px`.
- Use warm off-white field backgrounds and soft beige borders.
- Use charcoal buttons with white text.
- Avoid generic high-contrast app controls unless the page is outside the
  marketing/landing context.

## Reuse Guidance

- For future public-facing pages, start with the landing palette, typography,
  spacing, and image treatment.
- Prefer extending shared constants/classes if similar styling appears in more
  than one page.
- Preserve the app/gallery-specific UI where needed, but avoid mixing the older
  app chrome into marketing sections unless it is intentionally transitional.
