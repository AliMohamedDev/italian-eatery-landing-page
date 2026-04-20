# Italian Eatery Colorful Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply Colorful design system principles (vibrant, high-contrast, modern, gradients) to the Italian Eatery landing page using Italian-appropriate colors — same page structure and content, full visual overhaul.

**Architecture:** Two files change — `index.html` (font link only) and `css/styles.css` (full visual overhaul). No new files. No JS changes. No HTML structure changes.

**Tech Stack:** Vanilla HTML/CSS, Google Fonts (Inter 100–900), static site.

---

## Approved Design

### Palette
| Token | Value | Role |
|---|---|---|
| Tomato Red | `#E63535` | Primary — CTAs, accents, borders |
| Basil Green | `#1F7A4A` | Category labels, secondary accents |
| Gold | `#F59E0B` | Stars, highlights |
| Surface | `#FFFFFF` | Main backgrounds |
| Parchment | `#FFF8F0` | Alternating section backgrounds |
| Text | `#111827` | High-contrast body |

### Typography
- Remove Crimson Pro — full Inter (weights 100–900) only
- Display headings: weight 800, tighter tracking
- Body: weight 400, Inter

### Section changes
- **Hero** — gradient overlay (tomato red → near-black) instead of flat dark; Inter 800 headline
- **Story** — white bg; quote block becomes tomato red bg + white text
- **Menu** — pill-style colored category headers; card layout with shadow
- **Specialties** — gradient top border (red → orange); colored shadow on hover
- **Reviews** — gold stars; parchment cards with subtle left gradient border
- **Visit** — tomato red accent block for tagline/note
- **Footer** — deep tomato red gradient background

---

## File Map

| File | Action | What changes |
|---|---|---|
| `index.html` | Modify line 10 | Replace font `<link>` with Inter 100–900 |
| `css/styles.css` | Modify | Everything below — full visual overhaul |

---

## Task 1: Update Font Loading

**Files:**
- Modify: `index.html:10`

- [ ] **Step 1: Replace the Google Fonts link**

In `index.html`, replace line 10:
```html
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
```
With:
```html
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
```

- [ ] **Step 2: Verify in browser**

Open `index.html` in a browser. The page should still render (text visible). The font may look slightly different — that's expected.

- [ ] **Step 3: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add index.html
git commit -m "style: load Inter 100-900, drop Crimson Pro"
```

---

## Task 2: Update CSS Variables & Base Styles

**Files:**
- Modify: `css/styles.css:1-35`

- [ ] **Step 1: Replace `:root` block and body styles**

In `css/styles.css`, replace the entire `:root` block and `body` rule (lines 1–35):
```css
/* =========================================
   DESIGN SYSTEM
   ========================================= */

:root {
  --red: #E63535;
  --red-dark: #B91C1C;
  --green: #1F7A4A;
  --gold: #F59E0B;
  --surface: #FFFFFF;
  --parchment: #FFF8F0;
  --text: #111827;
  --text-muted: #6B7280;
  --font: 'Inter', sans-serif;
}

/* =========================================
   RESET
   ========================================= */

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font);
  color: var(--text);
  background: var(--surface);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  display: block;
}
```

- [ ] **Step 2: Update `.section-title`**

Find and replace the `.section-title` rule:
```css
.section-title {
  font-family: var(--font);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: var(--text);
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}
```

- [ ] **Step 3: Verify in browser**

Open `index.html`. All text should now use Inter. Section titles should look bolder/tighter.

- [ ] **Step 4: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add css/styles.css
git commit -m "style: new color tokens, Inter everywhere, bold section titles"
```

---

## Task 3: Hero Section

**Files:**
- Modify: `css/styles.css` — Hero block (~lines 80–150)

- [ ] **Step 1: Replace the Hero CSS block**

Find and replace the entire `/* HERO */` block (from `.hero {` through the `@keyframes bounce` rule):

```css
/* =========================================
   HERO
   ========================================= */

.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  background-image: url('../image.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(230, 53, 53, 0.55) 0%,
    rgba(10, 10, 10, 0.82) 100%
  );
}

.hero__content {
  position: relative;
  z-index: 1;
  color: #FFFFFF;
  padding: 0 1.5rem;
}

.hero__title {
  font-family: var(--font);
  font-size: clamp(2.75rem, 9vw, 5.5rem);
  font-weight: 800;
  line-height: 1.05;
  margin-bottom: 1.25rem;
  letter-spacing: -0.03em;
}

.hero__subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 400;
  opacity: 0.88;
  margin-bottom: 3.5rem;
}

.hero__scroll {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  color: #FFFFFF;
  text-decoration: none;
  font-size: 1.25rem;
  animation: bounce 2.2s ease-in-out infinite;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.hero__scroll:hover,
.hero__scroll:focus-visible {
  border-color: #FFFFFF;
  background: rgba(255, 255, 255, 0.15);
  outline: 2px solid #FFFFFF;
  outline-offset: 3px;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(9px); }
}
```

- [ ] **Step 2: Verify in browser**

Hero should have a red-to-dark gradient overlay instead of flat charcoal. Title should be heavy Inter.

- [ ] **Step 3: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add css/styles.css
git commit -m "style: hero gradient overlay and bold Inter headline"
```

---

## Task 4: Story Section

**Files:**
- Modify: `css/styles.css` — Story block

- [ ] **Step 1: Replace the Story CSS block**

Find and replace the entire `/* OUR STORY */` block:

```css
/* =========================================
   OUR STORY
   ========================================= */

.story {
  background: var(--surface);
}

.story__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

.story__label {
  font-family: var(--font);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 1rem;
}

.story__title {
  font-family: var(--font);
  font-size: clamp(1.75rem, 4vw, 2.6rem);
  font-weight: 800;
  color: var(--text);
  margin-bottom: 1.5rem;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.story__text {
  font-size: 1rem;
  line-height: 1.85;
  color: var(--text);
  opacity: 0.75;
}

.story__text + .story__text {
  margin-top: 1rem;
}

.story__accent {
  background: var(--red);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.5rem 2.5rem;
  min-height: 280px;
}

.story__accent-quote {
  font-family: var(--font);
  font-size: clamp(1.3rem, 3vw, 1.65rem);
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
  line-height: 1.55;
}

@media (min-width: 768px) {
  .story__grid {
    grid-template-columns: 1fr 1fr;
  }
}
```

- [ ] **Step 2: Verify in browser**

Story section: white background, green label, bold Inter headings. Quote block should be a solid tomato red rectangle with white text (not italic, not serif).

- [ ] **Step 3: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add css/styles.css
git commit -m "style: story section — white bg, red quote block, Inter headings"
```

---

## Task 5: Menu Section

**Files:**
- Modify: `css/styles.css` — Menu block

- [ ] **Step 1: Replace the Menu CSS block**

Find and replace the entire `/* MENU */` block:

```css
/* =========================================
   MENU
   ========================================= */

.menu {
  background: var(--parchment);
}

.menu__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.menu__column {
  background: var(--surface);
  border-radius: 12px;
  padding: 1.75rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
}

.menu__category {
  display: inline-block;
  font-family: var(--font);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #FFFFFF;
  background: var(--green);
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  margin-bottom: 1.25rem;
}

.menu__list {
  list-style: none;
}

.menu__item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.6rem 0;
  font-size: 0.95rem;
  border-bottom: 1px solid rgba(17, 24, 39, 0.08);
  gap: 1rem;
}

.menu__item:last-child {
  border-bottom: none;
}

.menu__price {
  color: var(--red);
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
}

.menu__note {
  text-align: center;
  margin-top: 2.5rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  font-style: italic;
}

@media (min-width: 600px) {
  .menu__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .menu__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

- [ ] **Step 2: Verify in browser**

Menu section: parchment background. Each category in its own white card with shadow. Green pill labels at top. Prices in tomato red.

- [ ] **Step 3: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add css/styles.css
git commit -m "style: menu — card layout, green pill category headers, parchment bg"
```

---

## Task 6: Specialties Section

**Files:**
- Modify: `css/styles.css` — Specialties block

- [ ] **Step 1: Replace the Specialties CSS block**

Find and replace the entire `/* SPECIALTIES */` block:

```css
/* =========================================
   SPECIALTIES
   ========================================= */

.specialties {
  background: var(--surface);
}

.specialties__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.specialty-card {
  background: var(--surface);
  border-top: 4px solid transparent;
  border-image: linear-gradient(to right, var(--red), #F97316) 1;
  padding: 2.25rem 2rem;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.specialty-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 32px rgba(230, 53, 53, 0.18);
}

.specialty-card__title {
  font-family: var(--font);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.75rem;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.specialty-card__desc {
  font-size: 0.92rem;
  line-height: 1.75;
  color: var(--text-muted);
}

@media (min-width: 768px) {
  .specialties__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

- [ ] **Step 2: Verify in browser**

Specialty cards: white bg, red→orange gradient top border, colored red shadow on hover.

- [ ] **Step 3: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add css/styles.css
git commit -m "style: specialties — gradient border cards, colored hover shadow"
```

---

## Task 7: Reviews Section

**Files:**
- Modify: `css/styles.css` — Reviews block

- [ ] **Step 1: Replace the Reviews CSS block**

Find and replace the entire `/* REVIEWS */` block:

```css
/* =========================================
   REVIEWS
   ========================================= */

.reviews {
  background: var(--parchment);
}

.reviews__rating {
  text-align: center;
  margin-bottom: 3rem;
}

.reviews__stars {
  color: var(--gold);
  font-size: 1.6rem;
  letter-spacing: 0.1em;
  margin-bottom: 0.35rem;
}

.reviews__score {
  font-size: 0.9rem;
  color: var(--text-muted);
  letter-spacing: 0.04em;
}

.reviews__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.review-card {
  background: var(--surface);
  padding: 2rem;
  border-radius: 10px;
  border-left: 4px solid var(--gold);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.review-card__stars {
  color: var(--gold);
  font-size: 0.95rem;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.review-card__quote {
  font-family: var(--font);
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 1.65;
  color: var(--text);
  margin-bottom: 1.25rem;
}

.review-card__author {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: auto;
}

@media (min-width: 768px) {
  .reviews__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

- [ ] **Step 2: Verify in browser**

Reviews: parchment background. Stars are gold (not red). Cards have gold left border, white surface, subtle shadow.

- [ ] **Step 3: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add css/styles.css
git commit -m "style: reviews — gold stars, parchment bg, gold-bordered cards"
```

---

## Task 8: Visit Us Section

**Files:**
- Modify: `css/styles.css` — Visit block

- [ ] **Step 1: Replace the Visit Us CSS block**

Find and replace the entire `/* VISIT US */` block:

```css
/* =========================================
   VISIT US
   ========================================= */

.visit {
  background: var(--surface);
}

.visit__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: start;
}

.visit__label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 0.75rem;
}

.visit__title {
  font-family: var(--font);
  font-size: clamp(1.75rem, 4vw, 2.6rem);
  font-weight: 800;
  color: var(--text);
  margin-bottom: 2rem;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.visit__detail {
  margin-bottom: 1.5rem;
}

.visit__detail h3 {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 0.35rem;
}

.visit__detail p,
.visit__detail a {
  font-size: 1rem;
  color: var(--text);
  text-decoration: none;
  line-height: 1.65;
}

.visit__detail a:hover {
  color: var(--red);
}

.visit__note {
  display: inline-block;
  background: var(--red);
  color: #FFFFFF;
  font-weight: 600;
  padding: 0.65rem 1.1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  margin-bottom: 2rem;
}

.visit__tagline {
  font-family: var(--font);
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--red);
  letter-spacing: -0.01em;
}

.visit__map iframe {
  width: 100%;
  height: 420px;
  border: 0;
  border-radius: 10px;
  display: block;
}

@media (min-width: 768px) {
  .visit__grid {
    grid-template-columns: 1fr 1fr;
  }
}
```

- [ ] **Step 2: Verify in browser**

Visit section: green section labels/detail headers. "Cash only" note should be a solid red pill/badge with white text (not a left-bordered block). Tagline in bold red Inter (not italic).

- [ ] **Step 3: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add css/styles.css
git commit -m "style: visit — red accent badge, green labels, bold Inter tagline"
```

---

## Task 9: Footer

**Files:**
- Modify: `css/styles.css` — Footer block

- [ ] **Step 1: Replace the Footer CSS block**

Find and replace the entire `/* FOOTER */` block:

```css
/* =========================================
   FOOTER
   ========================================= */

.footer {
  background: linear-gradient(135deg, var(--red-dark) 0%, var(--red) 100%);
  color: #FFFFFF;
  padding: 2.5rem 0;
  text-align: center;
}

.footer__name {
  font-family: var(--font);
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 0.4rem;
}

.footer__tagline {
  font-size: 0.85rem;
  opacity: 0.65;
  margin-bottom: 0.75rem;
}

.footer__phone a {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}

.footer__instagram {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  transition: color 0.2s ease;
}

.footer__instagram:hover {
  color: #FFFFFF;
}

.footer__phone a:hover {
  color: #FFFFFF;
}
```

- [ ] **Step 2: Verify in browser**

Footer: red gradient background (dark red → tomato red). Restaurant name bold Inter. All text white.

- [ ] **Step 3: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add css/styles.css
git commit -m "style: footer — red gradient background, bold Inter name"
```

---

## Task 10: Responsive Polish & Reduced Motion

**Files:**
- Modify: `css/styles.css` — bottom responsive/utility blocks

- [ ] **Step 1: Replace the responsive polish block**

Find and replace the entire `/* RESPONSIVE POLISH */` block (from `/* Mobile — up to 480px */` through end of file):

```css
/* =========================================
   RESPONSIVE POLISH
   ========================================= */

/* Mobile — up to 480px */
@media (max-width: 480px) {
  section {
    padding: 3.5rem 0;
  }

  .hero__title {
    font-size: 2.4rem;
  }

  .hero__subtitle {
    font-size: 0.95rem;
    margin-bottom: 2.5rem;
  }

  .story__accent {
    min-height: 200px;
    padding: 2.5rem 1.5rem;
  }

  .specialty-card {
    padding: 1.75rem 1.5rem;
  }

  .review-card {
    padding: 1.5rem;
  }

  .visit__map iframe {
    height: 300px;
  }

  .footer {
    padding: 2rem 0;
  }
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  .fade-in {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .hero__scroll {
    animation: none;
  }

  .specialty-card {
    transition: none;
  }
}
```

- [ ] **Step 2: Final full-page review in browser**

Check each section top-to-bottom:
- Hero: red-dark gradient overlay, white bold Inter headline
- Story: white bg, green label, tomato red quote block with white text
- Menu: parchment bg, white cards with shadow, green pill headers, red prices
- Specialties: white bg, red→orange gradient top border on cards, red shadow on hover
- Reviews: parchment bg, gold stars, gold left border on cards
- Visit: white bg, green labels, red badge for cash note, bold red tagline
- Footer: red gradient, white text, bold Inter name

- [ ] **Step 3: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add css/styles.css
git commit -m "style: responsive polish, reduced motion, full Colorful redesign complete"
```

---

## Task 11: Push to GitHub

- [ ] **Step 1: Push all commits**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git push origin master
```

- [ ] **Step 2: Verify on GitHub**

Check https://github.com/AliMohamedDev/italian-eatery-landing-page that all commits appear.
