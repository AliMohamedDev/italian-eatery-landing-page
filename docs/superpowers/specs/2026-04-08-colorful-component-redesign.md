# Design Spec: Colorful Component Redesign
**Date:** 2026-04-08
**Project:** Main Street Italian Eatery Landing Page

---

## Overview

Apply the Colorful design system's component patterns (navigation, buttons, badges, stats blocks, alert components, gradient cards) using Italian-appropriate colors. This is a structural redesign — new HTML components added, existing sections reworked with proper Colorful component anatomy.

**Gradient usage:** Bold but not overwhelming. Gradients on: hero overlay, primary CTA button, quote card, footer background, specialty card borders.

---

## Design Tokens

```css
:root {
  --red: #DC2626;
  --red-dark: #991B1B;
  --red-light: #FEE2E2;
  --green: #16A34A;
  --gold: #D97706;
  --surface: #FFFFFF;
  --parchment: #FFF7ED;
  --text: #111827;
  --text-muted: #6B7280;
  --font: 'Inter', sans-serif;
}
```

---

## Components

### 1. Navigation Bar (new)

**Anatomy:**
- Sticky top bar, `position: sticky; top: 0; z-index: 100`
- White background (`--surface`) with `border-bottom: 1px solid rgba(17,24,39,0.08)`
- `backdrop-filter: blur(8px)` when scrolled (JS adds `.scrolled` class to `<nav>`)
- Height: 64px, padding: 0 1.5rem

**Layout (desktop):**
- Left: Restaurant name — Inter 700, `--text`, 1rem
- Center: Section links — Inter 500, `--text-muted`, 0.875rem, gap 2rem. Links: Our Story · Menu · Specialties · Reviews · Visit
- Right: "Call Now" button — solid `--red`, white text, Inter 600, border-radius 6px, padding 0.5rem 1.1rem

**Hover states:**
- Nav links: color transitions to `--text`
- Call Now button: background darkens to `--red-dark`

**Mobile (< 768px):**
- Center links hidden
- Hamburger icon (☰) on right, opens a full-width dropdown with links stacked vertically
- "Call Now" becomes a full-width red button inside dropdown

**JS behavior:**
- On scroll past hero: add `.scrolled` class to nav → background goes from `rgba(255,255,255,0.95)` to `rgba(255,255,255,1)` with shadow `0 1px 8px rgba(0,0,0,0.08)`
- Mobile menu toggle: JS toggles `.nav__menu--open` class

---

### 2. Hero

**Layout:** Full viewport height, min 600px. Background image `image.png`, `cover/center`. Overlay: `linear-gradient(135deg, rgba(153,27,27,0.85) 0%, rgba(10,10,10,0.3) 100%)` — dark red bottom-left, fading to transparent top-right.

**Content:** Left-aligned at desktop (max-width container, content in left column). Centered on mobile.

**Stack (top to bottom):**
1. Status badge: pill, `--red-light` background, `--red` text, Inter 600, 0.75rem — content: `● Open Mon–Sat 10–7 · Sun 11–5`
2. H1: "Cooking from the Heart" — Inter 800, clamp(2.75rem, 8vw, 5rem), white, letter-spacing -0.03em, line-height 1.05
3. Subhead: "Homemade Italian, made fresh daily in Milton, ON" — Inter 400, clamp(1rem, 2vw, 1.15rem), white 80% opacity
4. Button row: gap 1rem, flex-wrap wrap
   - Primary: "Call (905) 878-2938" — `background: linear-gradient(to right, --red-dark, --red)`, white text, Inter 600, border-radius 6px, padding 0.75rem 1.5rem, hover: opacity 0.92
   - Secondary: "View Menu" — transparent bg, `border: 1.5px solid rgba(255,255,255,0.6)`, white text, Inter 500, same padding, hover: `background: rgba(255,255,255,0.1)`
5. Scroll arrow centered at bottom of hero

---

### 3. Our Story

**Background:** `--surface` (white)

**Label:** Colorful badge — `display: inline-block`, `--green` background, white text, Inter 700, 0.7rem, uppercase, letter-spacing 0.12em, border-radius 999px, padding 0.25rem 0.75rem, margin-bottom 1rem. Text: `Our Story`

**H2:** "Made with love, served with pride" — Inter 800, clamp(1.75rem, 4vw, 2.6rem), `--text`, letter-spacing -0.02em

**Layout:** Two columns at ≥ 768px. Left: label + H2 + body copy. Right: gradient quote card.

**Gradient quote card:**
- Background: `linear-gradient(135deg, var(--red-dark) 0%, var(--red) 100%)`
- Border-radius: 12px
- Padding: 3rem 2.5rem
- Min-height: 280px
- Subtle texture: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)` layered on top
- Quote text: Inter 700, clamp(1.25rem, 3vw, 1.6rem), white, line-height 1.5
- No italic, no serif

---

### 4. Menu

**Background:** `--parchment`

**Section title:** Inter 800, centered. Below title: a 2px × 40px `--red` underline bar, centered, margin-top 0.75rem, margin-bottom 3rem.

**Cards:** White surface, border-radius 12px, box-shadow `0 2px 12px rgba(0,0,0,0.07)`, padding 1.75rem.

**Category badge:** Colorful pill — `--green` background, white text, Inter 700, 0.7rem, uppercase, border-radius 999px, `display: inline-block`, margin-bottom 1.25rem.

**Menu items:** flex row, space-between. Price in `--red`, Inter 600.

**Grid:** 1 col → 2 col at 600px → 4 col at 1024px.

---

### 5. Specialties

**Background:** `--surface`

**Section title:** Same Inter 800 + red underline accent bar as Menu.

**Cards:**
- Background: `--surface`
- Border-top: 4px solid transparent
- Border-image: `linear-gradient(to right, var(--red), var(--gold)) 1`
- Border-radius: 0 0 10px 10px
- Box-shadow: `0 2px 10px rgba(0,0,0,0.06)`
- Padding: 2.25rem 2rem
- Transition: transform 0.25s, box-shadow 0.25s

**Hover state:**
- `transform: translateY(-6px)`
- `box-shadow: 0 16px 32px rgba(220,38,38,0.18)`
- Left border appears: `border-left: 3px solid var(--red)`

**Card title:** Inter 700, 1.3rem, `--text`
**Card desc:** Inter 400, 0.92rem, `--text-muted`, line-height 1.75

**Grid:** 1 col → 3 col at 768px

---

### 6. Reviews

**Background:** `--parchment`

**Stats block (aggregate rating):**
- Centered, margin-bottom 3rem
- Star: `★` in `--gold`, font-size 2rem
- Score: "4.7" — Inter 800, 3rem, `--text`
- Label: "based on Google Reviews" — Inter 400, 0.875rem, `--text-muted`
- Layout: star + score on same line (flex, align-center, gap 0.5rem), label below

**Review cards:**
- Background: `--surface`
- Border-radius: 10px
- Border-left: 4px solid `--gold`
- Box-shadow: `0 2px 10px rgba(0,0,0,0.05)`
- Padding: 2rem
- Display: flex, flex-direction: column

**Card stars:** `--gold`, 0.95rem
**Card quote:** Inter 500, 1.05rem, `--text`, no italic, line-height 1.65
**Card author:** Inter 400, 0.75rem, `--text-muted`, uppercase, letter-spacing 0.1em, margin-top auto

**Grid:** 1 col → 3 col at 768px

---

### 7. Visit Us

**Background:** `--surface`

**Label:** Same green Colorful badge as Story. Text: `Come See Us`

**H2:** "We'd Love to See You" — Inter 800, `--text`

**Detail headers** (Address, Phone, Hours): Inter 700, 0.68rem, uppercase, letter-spacing 0.14em, `--green`

**Cash-only alert (Colorful alert component):**
- Background: `--red`
- Color: white
- Border-radius: 6px
- Padding: 0.6rem 1rem
- Font: Inter 600, 0.875rem
- Prepend icon: `⚠` or cash icon in white
- Content: "Cash only — ATM available in store"
- Display: inline-flex, align-items: center, gap: 0.5rem

**Tagline:** "Come hungry. Leave happy." — Inter 700, 1.45rem, `--red`

**Map:** border-radius 10px, height 420px (300px mobile)

**Grid:** 1 col → 2 col at 768px

---

### 8. Footer

**Background:** `linear-gradient(135deg, var(--red-dark) 0%, var(--red) 100%)`

**Layout:** Centered, padding 2.5rem 0

**Divider:** `1px solid rgba(255,255,255,0.15)` between name block and contact block

**Restaurant name:** Inter 800, 1.5rem, white, letter-spacing -0.02em
**Tagline:** Inter 400, 0.85rem, white 65% opacity
**Phone link:** white 80% opacity, hover → white
**Instagram link:** white 75% opacity, hover → white, inline-flex with SVG icon

---

## HTML Changes Required

- Add `<nav>` element before `<section class="hero">` with hamburger menu markup
- Add `id="home"` anchor handling via JS (smooth scroll)
- Hero: add status badge `<span>`, restructure content to left-aligned, add two `<a>` buttons
- Story label: change from `<p class="story__label">` to badge markup (class stays, CSS changes)
- Menu section title: add `<div class="section-accent"></div>` after each `.section-title`
- Specialties section title: same accent bar
- Reviews: add stats block `<div class="reviews__stat">` before the grid
- Visit label: update to badge markup
- Visit note: change from `<p class="visit__note">` to alert markup with icon span

## JS Changes Required

- Nav scroll behavior: add/remove `.scrolled` class on `<nav>` based on `window.scrollY`
- Mobile menu toggle: toggle `.nav__menu--open` on hamburger click
- Existing `fade-in` intersection observer: unchanged

---

## Files Changed

| File | Change |
|---|---|
| `index.html` | Add nav, restructure hero, add accent bars, stats block, alert markup |
| `css/styles.css` | Full rewrite of all section styles + new nav/button/badge/stats/alert rules |
| `js/main.js` | Add nav scroll + mobile menu toggle |
