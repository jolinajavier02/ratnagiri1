# Vibrant India Tourism Website Wireframe and Design Guide

This document is a Figma-ready guide for creating both low-fidelity and high-fidelity wireframes of the tourism website. The site is a single-page React/Vite app with hash routes:

- Home: `#/`
- Destinations: `#/destinations`
- Tours: `#/tours`
- Booking: `#/booking`
- Food: `#/foods`
- Traditions: `#/tradition`

## Figma Frame Setup

Use these frames for the wireframes:

- Desktop: `1440 x 1024`
- Tablet: `768 x 1024`
- Mobile: `390 x 844`

Recommended layout grid:

- Desktop container padding: `6%` left and right, approximately `86px` on a 1440px frame
- Section spacing: `96px to 128px` vertical padding
- Card gap: `24px to 40px`
- Card radius: `8px`
- Button radius: `8px` for hero/buttons, pill radius only for filter chips

## Design System

### Colors

Primary palette:

- Saffron orange: `#f97316`
- Saffron hover: `#ea580c`
- Light saffron tint: `rgba(249, 115, 22, 0.14)`
- Deep teal: `#0f766e`
- Gold: `#b7791f`
- Dark gold: `#8a5a12`
- Deep indigo: `#1e1b4b`
- Warm ivory background: `#fffaf0`
- Light cream section background: `#fff3d7`
- White cards: `#ffffff`
- Primary text: `#20130b`
- Secondary text: `#4c3729`
- Muted text: `#786355`
- Border: `rgba(126, 64, 18, 0.16)`

Usage:

- Use saffron for primary actions, active navigation, ratings, chips, icon accents, and progress indicators.
- Use warm ivory and cream for page backgrounds.
- Use white cards with subtle brown/orange borders for content blocks.
- Use teal/indigo mainly for large cinematic footer and CTA backgrounds.
- Use gold for premium pricing, statistics, and luxury cues.

### Typography

Fonts:

- Sans serif: `Plus Jakarta Sans`
- Serif display: `Playfair Display`

Type scale:

- Hero title: `clamp(3.7rem, 7.6vw, 7.8rem)`, weight `900`, line-height `0.9`
- Hero subtitle/place: `clamp(1.7rem, 3vw, 3.1rem)`, serif, line-height `1`
- Page title: `3.5rem`, serif, weight `800`
- Section title: `2.8rem`, serif, weight `800`
- Section subtitle: `1.05rem`, sans, line-height `1.6`
- Card title: `1.35rem to 1.6rem`, serif, weight `700/800`
- Body/card text: `0.85rem to 1rem`, sans, line-height `1.5 to 1.7`
- Labels/tags: `0.7rem to 0.85rem`, uppercase, weight `700`, letter-spacing `1px to 2px`

## Shared Layout Elements

### Header / Navigation

Low-fidelity wireframe:

- Fixed top navigation bar.
- Left: logo icon and brand text.
- Center: navigation links.
- Right: search icon, language icon, and primary booking button.

High-fidelity design:

- Height approximately `72px`.
- Background: semi-transparent warm ivory `rgba(255, 250, 240, 0.82)`.
- Border bottom: `1px` saffron-tinted line.
- Brand title uses Playfair Display, `1.4rem`, dark brown.
- Navigation links use Plus Jakarta Sans, `0.95rem`.
- Active link color is saffron with a `2px` underline.
- Primary button uses saffron gradient and white text.

### Footer

Low-fidelity wireframe:

- Four-column desktop footer.
- Column 1: brand, short description, social icons.
- Column 2: quick links.
- Column 3: core experiences.
- Column 4: contact details.
- Bottom row: copyright and legal links.

High-fidelity design:

- Background gradient from dark brown to indigo to teal.
- Padding: `80px 6% 32px`.
- Footer title: white, serif, `1.15rem`.
- Links: warm white with `76%` opacity.
- Accent underline below each column title: saffron `2px`.

## Low-Fidelity Wireframes

Low-fidelity wireframes should remove colors and images. Use grayscale blocks, X placeholders for images, and simple text labels.

### Home Page Low-Fidelity Structure

1. Header
2. Full-screen hero
   - Left: location label, large title, subtitle, description, CTA button
   - Right: horizontal carousel cards
   - Left rail: slide progress
   - Bottom: social icons and playback controls
3. Experience India by Theme
   - Four equal cards
4. Most Popular Destinations
   - Three destination cards
5. Why Choose India
   - Left text and stats
   - Right image collage
6. Upcoming Guided Tours
   - Two horizontal tour cards
7. CTA newsletter/catalog banner
8. Footer

### Destinations Page Low-Fidelity Structure

1. Header
2. Page hero banner
3. Filter bar
   - Region chips
   - Theme chips
4. Destination grid
   - Three-column card grid on desktop
5. Footer

### Tours Page Low-Fidelity Structure

1. Header
2. Page hero banner
3. Vertical list of large horizontal tour cards
   - Left image
   - Right tour details, rating, inclusions, price, CTA
4. Footer

### Booking Page Low-Fidelity Structure

1. Header
2. Page hero banner
3. Two-column booking panel
   - Left: tabbed reservation form
   - Right: hotel showcase cards and itinerary planner
4. Footer

### Food Page Low-Fidelity Structure

1. Header
2. Page hero banner
3. Section title and subtitle
4. Four food cards
5. Centered regional food trails CTA block
6. Footer

### Traditions Page Low-Fidelity Structure

1. Header
2. Page hero banner
3. Section title and subtitle
4. Alternating festival timeline
5. Heritage walk callout with text and image
6. Footer

## High-Fidelity Page Specifications

### Home Page

Hero section:

- Size: full viewport height, minimum `760px`.
- Background: full-bleed travel image carousel.
- Overlay: cinematic dark teal/blue gradient with soft warm highlights.
- Left content width: about `48%`.
- Title: large uppercase sans, white, max width around `9ch`.
- Subtitle: Playfair Display, white at reduced opacity.
- Description: serif italic, warm white, max width `620px`.
- CTA: saffron gradient button, `0.86rem 1.65rem`, radius `8px`.
- Right carousel: starts around `46%` from left, card width `116px to 180px`, height `250px to 420px`.
- Bottom controls: social icons left, progress and playback controls right.

Experience section:

- Background: warm ivory/white gradient.
- Layout: four-column grid.
- Card height: `380px`.
- Card content sits at bottom over image.
- Overlay: dark gradient for readable white text.
- Icons: saffron-tinted square `50px`.

Popular destinations:

- Background: cream to ivory gradient.
- Three-column card grid.
- Image height: `260px`.
- Card content padding: `1.8rem`.
- Destination badges use saffron text and pale ivory background.
- Rating badge uses solid saffron.
- Price uses Playfair Display and saffron/dark gold.

Why choose India:

- Two-column layout: `1.1fr / 0.9fr`.
- Left: heading, paragraph, three stats.
- Right: overlapping image collage, `480px` tall.
- Stats use left saffron border and large gold serif numbers.

Upcoming tours:

- Two-column card grid on desktop.
- Each card is horizontal.
- Image column: `40%`.
- Text column: `60%`.
- Tour date and check icons use saffron.
- Price uses serif, `1.3rem`.

CTA banner:

- Full-width inner banner with dark teal/indigo image overlay.
- Padding: `5rem 4%`.
- Centered content, max width `700px`.
- Form width: `500px`, input plus saffron submit button.

### Destinations Page

Page header:

- Height: minimum `360px`.
- Background: destination image with dark overlay.
- Content centered.
- Subtitle: uppercase saffron/warm peach, `1.15rem`.
- Title: white Playfair Display, `3.5rem`.

Filter bar:

- Display flex with wrapping.
- Padding: `1rem 1.5rem`.
- Radius: `8px to 16px`.
- Background: white with subtle border.
- Active chip: saffron background with white text.

Destination grid:

- Desktop: three columns.
- Tablet: two columns.
- Mobile: one column.
- Cards reuse the destination card style from the home page.
- Primary action button spans full card width.

### Tours Page

Page header:

- Same header pattern as Destinations, using travel/tour imagery.

Tour package list:

- Container max width: `900px`.
- Cards stacked vertically with `4rem` gap.
- Card min height: `380px`.
- Image width: `45%`.
- Details width: `55%`, padding `2.5rem`.
- Tour title: serif, `1.7rem`.
- Inclusion label: uppercase saffron, `0.8rem`.
- Price: saffron serif, `1.7rem`.
- CTA: saffron booking button.

### Booking Page

Page header:

- Same hero banner system with booking/luxury image.

Booking panel:

- Desktop grid: `1.4fr / 0.9fr`.
- Gap: `3rem`.
- Left form card padding: `2.5rem`.
- Card radius: `8px to 24px` depending on Figma fidelity.

Tabs:

- Horizontal tab row.
- Active tab: saffron text and `2px` underline.
- Include icons for flight, train, hotel.

Form:

- Two-column grid.
- Gap: `1.5rem`.
- Full-width email/contact row spans two columns.
- Inputs use pale ivory background, `12px` radius, left icon padding.
- Submit button full width, saffron gradient, `1.1rem` vertical padding.

Right column:

- Hotel showcase list: image `100 x 100`, hotel text, price at right.
- Trip planner card: dashed saffron border, budget chips, duration slider, generated itinerary result.

### Food Page

Page header:

- Dark food image overlay.
- Centered title and subtitle.

Food explorer:

- Four-column desktop grid.
- Card image height: `200px`.
- Content padding: `1.5rem`.
- Region label: uppercase saffron, `0.7rem`.
- Food name: serif, `1.35rem`.
- Badge styles:
  - Vegetarian: green tint `#4CAF50`
  - Non-vegetarian: red tint `#F44336`
- Spice text uses gold/dark gold.

Regional food trails CTA:

- Centered block with white/cream card background.
- Padding: `3rem`.
- Radius: `24px` in current implementation; reduce to `8px` if matching stricter Figma system.
- Icon: saffron utensils icon.
- Button: saffron primary CTA.

### Traditions Page

Page header:

- Dark cultural/tradition image overlay.
- Centered title and subtitle.

Timeline:

- Desktop: vertical center line.
- Timeline line: saffron-tinted `2px`.
- Dot: saffron circle `16px`.
- Cards alternate left/right.
- Card width: `44%`.
- Card padding: `2rem`.
- Timeline date: uppercase saffron, `0.85rem`.
- Timeline title: serif, `1.6rem`.

Heritage walk callout:

- Two-column grid.
- Background: dark brown to white-card gradient in current code.
- Padding: `3.5rem 4%`.
- Left: label, heading, paragraph, CTA.
- Right: image block, height `300px`, radius `20px`.

## Responsive Rules

Tablet, max `1024px`:

- Hero content becomes full width.
- Carousel moves below hero copy.
- Experience, destination, and food grids become two columns.
- Booking becomes one column.
- Timeline becomes single-side layout with line at left.

Mobile, max `768px`:

- Navigation links are hidden; logo and booking button remain.
- Grid sections become one column.
- Hero title uses `clamp(3.5rem, 18vw, 5.8rem)`.
- Footer becomes one column.
- Booking form becomes one column.
- Tour cards stack vertically.

## Figma Layer Naming

Use these layer names for clean handoff:

- `Header / Desktop`
- `Hero / Home / High Fidelity`
- `Hero / Page Header`
- `Section / Experience Themes`
- `Section / Popular Destinations`
- `Section / Why Choose India`
- `Section / Guided Tours`
- `Section / Booking Form`
- `Section / Food Cards`
- `Section / Cultural Timeline`
- `Footer / Global`

## Low-Fidelity Style Rules

- Background: `#ffffff`
- Section background: `#f5f5f5`
- Image placeholders: `#d9d9d9` with diagonal X lines
- Text blocks: `#222222`
- Muted lines: `#bdbdbd`
- Primary button placeholder: `#222222`
- Card border: `#d0d0d0`
- Avoid real photos, gradients, and final colors in low-fidelity frames.

## High-Fidelity Style Rules

- Use real travel/food/culture imagery.
- Apply saffron to actions and active states.
- Keep body surfaces warm ivory/cream instead of pure gray.
- Use Playfair Display for emotional headings and Plus Jakarta Sans for navigation, labels, forms, and body text.
- Keep cards clean, white, and image-led.
- Maintain strong hierarchy: large hero, medium section headings, compact card typography.
