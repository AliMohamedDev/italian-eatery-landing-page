# Colorful Component Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Italian Eatery landing page with real Colorful design system components — sticky nav, gradient hero with CTA buttons, badge labels, stats block, alert component, and gradient footer — using Italian-appropriate colors.

**Architecture:** Three files change: `index.html` (new HTML structure for nav, hero buttons, badges, stats, alert), `css/styles.css` (full rewrite with Colorful component rules), `js/main.js` (nav scroll + mobile menu added to existing observers). No new files created.

**Tech Stack:** Vanilla HTML, CSS custom properties, vanilla JS, Google Fonts (Inter 100–900), static site.

---

## File Map

| File | Changes |
|---|---|
| `index.html` | Add `<nav>`, restructure hero content, add badge markup, section accent bars, stats block, alert component |
| `css/styles.css` | Full rewrite — new tokens, nav, button, badge, stats, alert, all section styles |
| `js/main.js` | Append nav scroll class + mobile menu toggle to existing file |

---

## Task 1: Update CSS tokens and font loading

**Files:**
- Modify: `index.html:10`
- Modify: `css/styles.css:1-15`

- [ ] **Step 1: Update the Google Fonts link in `index.html`**

The current line 10 loads Inter 100–900. Confirm it reads:
```html
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
```
If it already matches exactly, skip this step. If not, replace it with the line above.

- [ ] **Step 2: Replace the `:root` block in `css/styles.css`**

Find the existing `:root { ... }` block (lines 5–15) and replace it entirely:

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

- [ ] **Step 3: Verify in browser**

Open `index.html` in a browser. Page should still render (may look broken — that's expected until CSS is complete).

- [ ] **Step 4: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add index.html css/styles.css
git commit -m "style: update color tokens to Colorful Italian palette"
```

---

## Task 2: Full CSS rewrite — reset, utilities, shared components

**Files:**
- Modify: `css/styles.css` — everything after `:root` through end of shared utilities section

- [ ] **Step 1: Replace everything from the RESET comment through the end of SHARED UTILITIES**

Find the `/* RESET */` comment and replace from there through the end of the `.fade-in.visible` rule with:

```css
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

/* =========================================
   SHARED UTILITIES
   ========================================= */

.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

section {
  padding: 5rem 0;
}

.section-title {
  font-family: var(--font);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: var(--text);
  text-align: center;
  margin-bottom: 0.75rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.section-accent {
  width: 40px;
  height: 3px;
  background: var(--red);
  margin: 0 auto 3rem;
  border-radius: 2px;
}

/* Colorful badge component */
.badge {
  display: inline-block;
  font-family: var(--font);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-radius: 999px;
  padding: 0.25rem 0.75rem;
  margin-bottom: 1rem;
}

.badge--green {
  background: var(--green);
  color: #FFFFFF;
}

.badge--red-light {
  background: var(--red-light);
  color: var(--red);
}

/* Fade-in animation */
.fade-in {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: none;
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add css/styles.css
git commit -m "style: shared utilities, badge component, section accent"
```

---

## Task 3: Navigation — CSS

**Files:**
- Modify: `css/styles.css` — add NAV block after SHARED UTILITIES

- [ ] **Step 1: Add the NAV CSS block after the SHARED UTILITIES section**

Insert this block after the `.fade-in.visible` rule:

```css
/* =========================================
   NAVIGATION
   ========================================= */

.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid rgba(17, 24, 39, 0.08);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: box-shadow 0.2s ease;
}

.nav.scrolled {
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.08);
  background: #FFFFFF;
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.nav__brand {
  font-family: var(--font);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
  white-space: nowrap;
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
}

.nav__links a {
  font-family: var(--font);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.15s ease;
}

.nav__links a:hover {
  color: var(--text);
}

.nav__cta {
  display: inline-block;
  background: var(--red);
  color: #FFFFFF;
  font-family: var(--font);
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.5rem 1.1rem;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.15s ease;
  white-space: nowrap;
}

.nav__cta:hover {
  background: var(--red-dark);
}

.nav__hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--text);
  padding: 0.25rem;
  line-height: 1;
}

.nav__mobile {
  display: none;
  flex-direction: column;
  background: #FFFFFF;
  border-top: 1px solid rgba(17, 24, 39, 0.08);
  padding: 1rem 1.5rem 1.5rem;
}

.nav__mobile.nav__mobile--open {
  display: flex;
}

.nav__mobile a {
  font-family: var(--font);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
  text-decoration: none;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(17, 24, 39, 0.06);
}

.nav__mobile a:last-of-type {
  border-bottom: none;
}

.nav__mobile-cta {
  display: block;
  background: var(--red);
  color: #FFFFFF;
  font-family: var(--font);
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  padding: 0.875rem;
  border-radius: 6px;
  text-decoration: none;
  margin-top: 1rem;
}

@media (max-width: 767px) {
  .nav__links {
    display: none;
  }
  .nav__cta {
    display: none;
  }
  .nav__hamburger {
    display: block;
  }
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add css/styles.css
git commit -m "style: navigation CSS — sticky bar, links, CTA, mobile"
```

---

## Task 4: Navigation — HTML

**Files:**
- Modify: `index.html` — add `<nav>` before the hero section

- [ ] **Step 1: Read `index.html`**

Read `/Users/alimohamed/Documents/Claude/italian-eatery-landing-page/index.html` to find the `<body>` open tag and the start of the hero section.

- [ ] **Step 2: Insert the nav element**

After the `<body>` opening tag and before `<!-- 1. Hero -->`, insert:

```html
  <!-- Navigation -->
  <nav class="nav" id="nav">
    <div class="nav__inner">
      <a href="#home" class="nav__brand">Main Street Italian Eatery</a>
      <ul class="nav__links">
        <li><a href="#story">Our Story</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#specialties">Specialties</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#visit">Visit</a></li>
      </ul>
      <a href="tel:+19058782938" class="nav__cta">Call Now</a>
      <button class="nav__hamburger" id="nav-hamburger" aria-label="Open menu" aria-expanded="false">&#9776;</button>
    </div>
    <div class="nav__mobile" id="nav-mobile">
      <a href="#story">Our Story</a>
      <a href="#menu">Menu</a>
      <a href="#specialties">Specialties</a>
      <a href="#reviews">Reviews</a>
      <a href="#visit">Visit</a>
      <a href="tel:+19058782938" class="nav__mobile-cta">Call (905) 878-2938</a>
    </div>
  </nav>

```

- [ ] **Step 3: Verify in browser**

Open `index.html`. A nav bar should appear at the top. On narrow window (< 768px) the links should disappear and a hamburger (☰) should appear. Menu links don't work yet — JS comes in Task 6.

- [ ] **Step 4: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add index.html
git commit -m "feat: add navigation bar HTML"
```

---

## Task 5: Hero — HTML restructure

**Files:**
- Modify: `index.html` — restructure the hero section

- [ ] **Step 1: Replace the entire hero section**

Find the `<!-- 1. Hero -->` comment and replace the entire hero section with:

```html
  <!-- 1. Hero -->
  <section class="hero" id="home">
    <div class="hero__overlay"></div>
    <div class="hero__content container">
      <span class="badge badge--red-light">● Open Mon–Sat 10–7 &nbsp;·&nbsp; Sun 11–5</span>
      <h1 class="hero__title">Cooking from<br>the Heart</h1>
      <p class="hero__subtitle">Homemade Italian, made fresh daily in Milton, ON</p>
      <div class="hero__actions">
        <a href="tel:+19058782938" class="btn btn--primary">Call (905) 878-2938</a>
        <a href="#menu" class="btn btn--outline">View Menu</a>
      </div>
    </div>
    <a href="#story" class="hero__scroll" aria-label="Scroll down to Our Story">&#8595;</a>
  </section>

```

- [ ] **Step 2: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add index.html
git commit -m "feat: restructure hero — badge, two CTAs, left-aligned layout"
```

---

## Task 6: Hero and Button — CSS

**Files:**
- Modify: `css/styles.css` — replace the HERO block, add button styles

- [ ] **Step 1: Add button CSS before the HERO block**

Insert this block after the NAV section and before the `/* HERO */` comment:

```css
/* =========================================
   BUTTONS
   ========================================= */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font);
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  transition: opacity 0.15s ease, background 0.15s ease;
  white-space: nowrap;
}

.btn--primary {
  background: linear-gradient(to right, var(--red-dark), var(--red));
  color: #FFFFFF;
}

.btn--primary:hover {
  opacity: 0.9;
}

.btn--outline {
  background: transparent;
  color: #FFFFFF;
  border: 1.5px solid rgba(255, 255, 255, 0.6);
}

.btn--outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #FFFFFF;
}
```

- [ ] **Step 2: Replace the entire HERO block**

Find the `/* HERO */` comment and replace everything from that comment through the closing `}` of the `@keyframes bounce` rule with:

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
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(153, 27, 27, 0.88) 0%,
    rgba(10, 10, 10, 0.25) 100%
  );
}

.hero__content {
  position: relative;
  z-index: 1;
  padding-top: 2rem;
  padding-bottom: 2rem;
  max-width: 600px;
}

.hero__title {
  font-family: var(--font);
  font-size: clamp(2.75rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  color: #FFFFFF;
  margin-bottom: 1rem;
  letter-spacing: -0.03em;
}

.hero__subtitle {
  font-size: clamp(1rem, 2vw, 1.15rem);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.82);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero__scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  color: #FFFFFF;
  text-decoration: none;
  font-size: 1.1rem;
  animation: bounce 2.2s ease-in-out infinite;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.hero__scroll:hover,
.hero__scroll:focus-visible {
  border-color: #FFFFFF;
  background: rgba(255, 255, 255, 0.1);
  outline: 2px solid #FFFFFF;
  outline-offset: 3px;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}

@media (max-width: 767px) {
  .hero__content {
    text-align: center;
    max-width: 100%;
  }
  .hero__actions {
    justify-content: center;
  }
}
```

- [ ] **Step 3: Verify in browser**

Hero should show: directional dark-red gradient (left/bottom dark, right/top lighter), left-aligned content at desktop with badge + headline + subhead + two buttons. On narrow screen, content should center.

- [ ] **Step 4: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add css/styles.css
git commit -m "style: hero directional gradient, button components"
```

---

## Task 7: Navigation — JS

**Files:**
- Modify: `js/main.js` — append nav behavior

- [ ] **Step 1: Read `js/main.js`**

Read `/Users/alimohamed/Documents/Claude/italian-eatery-landing-page/js/main.js` to confirm current content (smooth scroll + IntersectionObserver fade-in).

- [ ] **Step 2: Append nav JS to the end of `js/main.js`**

Add this after the existing observer code:

```js
// Nav scroll behavior — adds .scrolled class when page is scrolled
var nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });
}

// Mobile menu toggle
var hamburger = document.getElementById('nav-hamburger');
var mobileMenu = document.getElementById('nav-mobile');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', function() {
    var isOpen = mobileMenu.classList.toggle('nav__mobile--open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu when a link inside it is clicked
  mobileMenu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('nav__mobile--open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}
```

- [ ] **Step 3: Verify in browser**

Scroll down — nav should gain a shadow. On mobile: tap ☰, menu opens; tap a link, menu closes.

- [ ] **Step 4: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add js/main.js
git commit -m "feat: nav scroll shadow and mobile hamburger toggle"
```

---

## Task 8: Our Story section

**Files:**
- Modify: `index.html` — update story label to badge
- Modify: `css/styles.css` — replace OUR STORY block

- [ ] **Step 1: Update the story label in `index.html`**

Find:
```html
          <p class="story__label">Our Story</p>
```

Replace with:
```html
          <span class="badge badge--green">Our Story</span>
```

- [ ] **Step 2: Replace the OUR STORY CSS block**

Find the `/* OUR STORY */` comment and replace the entire block through the closing `}` of the `@media (min-width: 768px)` story rule:

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
  position: relative;
  background: linear-gradient(135deg, var(--red-dark) 0%, var(--red) 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2.5rem;
  min-height: 280px;
  overflow: hidden;
}

.story__accent::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.07) 0%, transparent 60%);
}

.story__accent-quote {
  position: relative;
  font-family: var(--font);
  font-size: clamp(1.25rem, 3vw, 1.6rem);
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
  line-height: 1.5;
}

@media (min-width: 768px) {
  .story__grid {
    grid-template-columns: 1fr 1fr;
  }
}
```

- [ ] **Step 3: Verify in browser**

Story section: white bg, green pill badge "OUR STORY", bold Inter heading, gradient red quote card with subtle radial overlay.

- [ ] **Step 4: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add index.html css/styles.css
git commit -m "style: story — green badge, gradient quote card"
```

---

## Task 9: Menu section

**Files:**
- Modify: `index.html` — add section accent bar
- Modify: `css/styles.css` — replace MENU block

- [ ] **Step 1: Add accent bar after menu section title in `index.html`**

Find:
```html
      <h2 class="section-title fade-in">Made Fresh Daily</h2>
```

Replace with:
```html
      <h2 class="section-title fade-in">Made Fresh Daily</h2>
      <div class="section-accent"></div>
```

- [ ] **Step 2: Replace the MENU CSS block**

Find the `/* MENU */` comment and replace the entire block through the last `@media` rule for the menu grid:

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

- [ ] **Step 3: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add index.html css/styles.css
git commit -m "style: menu — parchment bg, card layout, red accent bar, green badges"
```

---

## Task 10: Specialties section

**Files:**
- Modify: `index.html` — add section accent bar
- Modify: `css/styles.css` — replace SPECIALTIES block

- [ ] **Step 1: Add accent bar after specialties section title in `index.html`**

Find:
```html
      <h2 class="section-title fade-in">What We're Known For</h2>
```

Replace with:
```html
      <h2 class="section-title fade-in">What We're Known For</h2>
      <div class="section-accent"></div>
```

- [ ] **Step 2: Replace the SPECIALTIES CSS block**

Find the `/* SPECIALTIES */` comment and replace through the last `@media` rule for specialties:

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
  border-image: linear-gradient(to right, var(--red), var(--gold)) 1;
  border-radius: 0 0 10px 10px;
  padding: 2.25rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-left 0.25s ease;
}

.specialty-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 32px rgba(220, 38, 38, 0.18);
  border-left: 3px solid var(--red);
}

.specialty-card__title {
  font-family: var(--font);
  font-size: 1.3rem;
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

- [ ] **Step 3: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add index.html css/styles.css
git commit -m "style: specialties — gradient border, red-gold top, red hover shadow"
```

---

## Task 11: Reviews section — stats block HTML + CSS

**Files:**
- Modify: `index.html` — replace aggregate rating with stats block
- Modify: `css/styles.css` — replace REVIEWS block

- [ ] **Step 1: Replace the aggregate rating markup in `index.html`**

Find:
```html
      <div class="reviews__rating fade-in">
        <div class="reviews__stars" aria-label="5 out of 5 stars"><span aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span></div>
        <p class="reviews__score">4.7 on Google Reviews</p>
      </div>
```

Replace with:
```html
      <div class="reviews__stat fade-in">
        <div class="reviews__stat-score">
          <span class="reviews__stat-star" aria-hidden="true">&#9733;</span>
          <span class="reviews__stat-number">4.7</span>
        </div>
        <p class="reviews__stat-label">based on Google Reviews</p>
      </div>
```

- [ ] **Step 2: Replace the REVIEWS CSS block**

Find the `/* REVIEWS */` comment and replace through the last `@media` rule for reviews:

```css
/* =========================================
   REVIEWS
   ========================================= */

.reviews {
  background: var(--parchment);
}

.reviews__stat {
  text-align: center;
  margin-bottom: 3rem;
}

.reviews__stat-score {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.35rem;
}

.reviews__stat-star {
  color: var(--gold);
  font-size: 2.25rem;
  line-height: 1;
}

.reviews__stat-number {
  font-family: var(--font);
  font-size: 3rem;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.03em;
  line-height: 1;
}

.reviews__stat-label {
  font-size: 0.875rem;
  color: var(--text-muted);
  letter-spacing: 0.02em;
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

- [ ] **Step 3: Verify in browser**

Reviews section: parchment bg. Stat block shows large gold star + "4.7" in Inter 800 at 3rem. Review cards have gold left border, no italic quote text.

- [ ] **Step 4: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add index.html css/styles.css
git commit -m "feat: reviews stats block, gold-bordered cards"
```

---

## Task 12: Visit Us section — alert component

**Files:**
- Modify: `index.html` — update label badge + cash note alert markup
- Modify: `css/styles.css` — replace VISIT US block

- [ ] **Step 1: Update visit label and cash note in `index.html`**

Find:
```html
          <p class="visit__label">Come See Us</p>
```
Replace with:
```html
          <span class="badge badge--green">Come See Us</span>
```

Find:
```html
          <p class="visit__note">Cash only &mdash; ATM available in store</p>
```
Replace with:
```html
          <div class="visit__note">
            <span aria-hidden="true">⚠</span>
            Cash only &mdash; ATM available in store
          </div>
```

- [ ] **Step 2: Replace the VISIT US CSS block**

Find the `/* VISIT US */` comment and replace through the last `@media` rule for visit:

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
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--red);
  color: #FFFFFF;
  font-family: var(--font);
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0.6rem 1rem;
  border-radius: 6px;
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

- [ ] **Step 3: Verify in browser**

Visit section: green badge "COME SEE US", bold Inter heading, green detail labels, red alert badge with ⚠ icon for cash note, bold red tagline.

- [ ] **Step 4: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add index.html css/styles.css
git commit -m "feat: visit — green badge, red alert component for cash note"
```

---

## Task 13: Footer + responsive polish + reduced motion

**Files:**
- Modify: `css/styles.css` — replace FOOTER and RESPONSIVE POLISH blocks

- [ ] **Step 1: Replace the FOOTER block**

Find the `/* FOOTER */` comment and replace through `.footer__phone a:hover`:

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

.footer .footer__divider {
  width: 40px;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 1rem auto;
}

.footer__phone a {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}

.footer__phone a:hover {
  color: #FFFFFF;
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
```

- [ ] **Step 2: Replace the RESPONSIVE POLISH block**

Find the `/* RESPONSIVE POLISH */` comment and replace through end of file:

```css
/* =========================================
   RESPONSIVE POLISH
   ========================================= */

@media (max-width: 480px) {
  section {
    padding: 3.5rem 0;
  }

  .hero__title {
    font-size: 2.4rem;
  }

  .hero__subtitle {
    font-size: 0.95rem;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero__actions .btn {
    text-align: center;
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

- [ ] **Step 3: Add footer divider HTML**

In `index.html`, find the footer block and add the divider between tagline and phone:

Find:
```html
      <p class="footer__tagline">Homemade Italian, Milton's best-kept secret</p>
      <p class="footer__phone">
```
Replace with:
```html
      <p class="footer__tagline">Homemade Italian, Milton's best-kept secret</p>
      <div class="footer__divider"></div>
      <p class="footer__phone">
```

- [ ] **Step 4: Verify full page in browser**

Check top-to-bottom:
- Nav: sticky, "Call Now" button right, hamburger on mobile
- Hero: directional gradient, badge, headline, two buttons, scroll arrow
- Story: white, green badge, gradient red quote card
- Menu: parchment, white cards, green pills, red accent bar under title
- Specialties: white, red→gold gradient top border, red shadow on hover, red accent bar under title
- Reviews: parchment, large gold star + "4.7" stat, gold-bordered cards
- Visit: green badge + labels, red alert with ⚠, bold red tagline
- Footer: red gradient, divider line

- [ ] **Step 5: Commit**

```bash
cd /Users/alimohamed/Documents/Claude/italian-eatery-landing-page
git add index.html css/styles.css
git commit -m "style: footer gradient, responsive polish, reduced motion"
```

---

## Self-Review

**Spec coverage check:**
- ✅ Nav: sticky, brand left, links center, CTA right, hamburger mobile — Tasks 3, 4, 7
- ✅ Hero: directional gradient, badge, H1, subhead, two buttons, scroll — Tasks 5, 6
- ✅ Story: green badge, gradient quote card with radial overlay — Task 8
- ✅ Menu: parchment, cards, green pill badges, red accent bar — Task 9
- ✅ Specialties: gradient top border, colored hover shadow, red accent bar — Task 10
- ✅ Reviews: stats block (star + 4.7 + label), gold-bordered cards — Task 11
- ✅ Visit: green badge, green detail labels, red alert component, red tagline — Task 12
- ✅ Footer: red gradient diagonal, divider, white text — Task 13
- ✅ Buttons: gradient primary, outline secondary — Task 6
- ✅ JS: scroll shadow, hamburger toggle — Task 7
- ✅ Responsive: mobile hero stacks, 480px breakpoints — Task 13
- ✅ Reduced motion — Task 13

**Placeholder scan:** No TBDs or TODOs found.

**Consistency check:** `.badge`, `.badge--green`, `.badge--red-light` defined in Task 2, used in Tasks 5, 8, 12. `.btn`, `.btn--primary`, `.btn--outline` defined in Task 6, used in Task 5. `.section-accent` defined in Task 2, added to HTML in Tasks 9, 10. All consistent.
