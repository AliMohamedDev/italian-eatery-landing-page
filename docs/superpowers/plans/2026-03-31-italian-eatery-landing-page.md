# Italian Eatery Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a multi-file static HTML/CSS/JS landing page for Main Street Italian Eatery in Milton, ON.

**Architecture:** Three files — `index.html` for markup, `css/styles.css` for all styles, `js/main.js` for scroll animations and smooth scroll. No build tools, no dependencies, no framework. The existing `image.png` (restaurant exterior) is the hero background.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox), vanilla JS (IntersectionObserver). Google Fonts (Crimson Pro + Inter) loaded via CDN link.

> **Note on testing:** This is a static site with no test runner. Each task's "test" step is visual browser verification — open `index.html` in a browser and confirm the described behavior. Firefox or Chrome both work.

---

## File Map

| File | Responsibility |
|------|---------------|
| `index.html` | All markup and content for all 7 sections |
| `css/styles.css` | Design system variables, reset, shared utilities, all section styles, responsive breakpoints |
| `js/main.js` | IntersectionObserver fade-in animations, smooth scroll for anchor links |
| `image.png` | Already present — hero background photo |

---

## Task 1: Project Setup

**Files:**
- Create: `index.html`
- Create: `css/styles.css`
- Create: `js/main.js`

- [ ] **Step 1: Initialize git and create file structure**

```bash
cd /home/hassan/Documents/ClaudeProjects
git init
mkdir css js
touch index.html css/styles.css js/main.js
```

- [ ] **Step 2: Verify the structure looks right**

```bash
ls -R /home/hassan/Documents/ClaudeProjects | grep -E "(index|styles|main)"
```

Expected output includes `index.html`, `css/styles.css`, `js/main.js`.

- [ ] **Step 3: Commit**

```bash
git add index.html css/styles.css js/main.js
git commit -m "chore: scaffold project files"
```

---

## Task 2: HTML Scaffold + Head

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Write the full HTML skeleton with head and empty section stubs**

Replace the contents of `index.html` with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Main Street Italian Eatery — Homemade Italian food made fresh daily in Milton, ON. Chicken parm, lasagna, fresh donuts, and more." />
  <title>Main Street Italian Eatery | Milton, ON</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>

  <!-- 1. Hero -->
  <section class="hero" id="home"></section>

  <!-- 2. Our Story -->
  <section class="story" id="story"></section>

  <!-- 3. Menu -->
  <section class="menu" id="menu"></section>

  <!-- 4. Specialties -->
  <section class="specialties" id="specialties"></section>

  <!-- 5. Reviews -->
  <section class="reviews" id="reviews"></section>

  <!-- 6. Visit Us -->
  <section class="visit" id="visit"></section>

  <!-- 7. Footer -->
  <footer class="footer"></footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open in browser and verify**

Open `index.html` in a browser. Page should load blank (no styles yet) with no console errors. Google Fonts request should appear in DevTools Network tab.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add HTML scaffold with head and section stubs"
```

---

## Task 3: CSS Design System (Variables, Reset, Shared Utilities)

**Files:**
- Modify: `css/styles.css`

- [ ] **Step 1: Write the design system foundation**

Replace `css/styles.css` with:

```css
/* =========================================
   DESIGN SYSTEM
   ========================================= */

:root {
  --terracotta: #C4735A;
  --olive: #6B7A4A;
  --cream: #F8F4EE;
  --warm-white: #FFFCF7;
  --charcoal: #2C2824;
  --font-heading: 'Crimson Pro', serif;
  --font-body: 'Inter', sans-serif;
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
  font-family: var(--font-body);
  color: var(--charcoal);
  background: var(--warm-white);
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
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 3rem);
  color: var(--charcoal);
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.15;
}

/* Fade-in animation class — JS adds .visible when element enters viewport */
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

- [ ] **Step 2: Verify in browser**

Reload `index.html`. Page background should be `#FFFCF7` (warm white). Font should be Inter for any text. No console errors.

- [ ] **Step 3: Commit**

```bash
git add css/styles.css
git commit -m "feat: add CSS design system, reset, and shared utilities"
```

---

## Task 4: Hero Section

**Files:**
- Modify: `index.html` (hero section content)
- Modify: `css/styles.css` (append hero styles)

- [ ] **Step 1: Add hero HTML**

Replace `<section class="hero" id="home"></section>` in `index.html` with:

```html
<!-- 1. Hero -->
<section class="hero" id="home">
  <div class="hero__overlay"></div>
  <div class="hero__content">
    <h1 class="hero__title">Cooking from<br>the Heart</h1>
    <p class="hero__subtitle">Homemade Italian food made fresh daily in Milton, ON</p>
    <a href="#story" class="hero__scroll" aria-label="Scroll down to Our Story">&#8595;</a>
  </div>
</section>
```

- [ ] **Step 2: Append hero styles to `css/styles.css`**

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
  background: rgba(44, 40, 36, 0.58);
}

.hero__content {
  position: relative;
  z-index: 1;
  color: var(--warm-white);
  padding: 0 1.5rem;
}

.hero__title {
  font-family: var(--font-heading);
  font-size: clamp(2.75rem, 9vw, 5.5rem);
  font-weight: 700;
  line-height: 1.08;
  margin-bottom: 1.25rem;
  letter-spacing: -0.01em;
}

.hero__subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  opacity: 0.88;
  margin-bottom: 3.5rem;
  font-weight: 400;
}

.hero__scroll {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 1.5px solid rgba(255,252,247,0.5);
  border-radius: 50%;
  color: var(--warm-white);
  text-decoration: none;
  font-size: 1.25rem;
  animation: bounce 2.2s ease-in-out infinite;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.hero__scroll:hover {
  border-color: var(--warm-white);
  background: rgba(255,252,247,0.1);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(9px); }
}
```

- [ ] **Step 3: Verify in browser**

Reload `index.html`. Hero should be full viewport height with the restaurant photo as background, dark overlay, "Cooking from the Heart" in large serif font, subtitle text, and a bouncing down-arrow. Clicking the arrow should smooth-scroll to the story section (empty for now).

- [ ] **Step 4: Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: add hero section with photo background and scroll CTA"
```

---

## Task 5: Our Story Section

**Files:**
- Modify: `index.html` (story section content)
- Modify: `css/styles.css` (append story styles)

- [ ] **Step 1: Add story HTML**

Replace `<section class="story" id="story"></section>` in `index.html` with:

```html
<!-- 2. Our Story -->
<section class="story" id="story">
  <div class="container">
    <div class="story__grid fade-in">
      <div class="story__copy">
        <p class="story__label">Our Story</p>
        <h2 class="story__title">Made with love,<br>served with pride</h2>
        <p class="story__text">We're a small family-run kitchen in the heart of Milton, and we cook the way our family has always cooked — from scratch, every single day. No shortcuts. Just honest, homemade Italian food the way it was meant to taste.</p>
        <p class="story__text">Whether it's a perfectly layered lasagna, a crispy chicken parm, or a fresh donut still warm from the fryer, everything that leaves our kitchen started with real ingredients and real care. We've been feeding Milton's families for years, and we're not stopping anytime soon.</p>
      </div>
      <div class="story__accent">
        <p class="story__accent-quote">"Everything is made fresh.<br>Every single day."</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append story styles to `css/styles.css`**

```css
/* =========================================
   OUR STORY
   ========================================= */

.story {
  background: var(--warm-white);
}

.story__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

.story__label {
  font-family: var(--font-body);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--terracotta);
  margin-bottom: 1rem;
}

.story__title {
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 4vw, 2.6rem);
  color: var(--charcoal);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.story__text {
  font-size: 1rem;
  line-height: 1.85;
  color: var(--charcoal);
  opacity: 0.82;
}

.story__text + .story__text {
  margin-top: 1rem;
}

.story__accent {
  background: var(--cream);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.5rem 2.5rem;
  min-height: 280px;
}

.story__accent-quote {
  font-family: var(--font-heading);
  font-size: clamp(1.3rem, 3vw, 1.65rem);
  color: var(--terracotta);
  text-align: center;
  font-style: italic;
  line-height: 1.55;
}

@media (min-width: 768px) {
  .story__grid {
    grid-template-columns: 1fr 1fr;
  }
}
```

- [ ] **Step 3: Verify in browser**

Reload. Below the hero should be a two-column layout (on desktop): copy on the left with the label, title, and two paragraphs; cream block on the right with the italic quote in terracotta. On mobile/narrow viewport it should stack vertically.

- [ ] **Step 4: Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: add Our Story section"
```

---

## Task 6: Menu Section

**Files:**
- Modify: `index.html` (menu section content)
- Modify: `css/styles.css` (append menu styles)

- [ ] **Step 1: Add menu HTML**

Replace `<section class="menu" id="menu"></section>` in `index.html` with:

```html
<!-- 3. Menu -->
<section class="menu" id="menu">
  <div class="container">
    <h2 class="section-title fade-in">Made Fresh Daily</h2>
    <div class="menu__grid">

      <div class="menu__column fade-in">
        <h3 class="menu__category">Pastas &amp; Mains</h3>
        <ul class="menu__list">
          <li class="menu__item"><span>Chicken Parmigiana</span><span class="menu__price">$13</span></li>
          <li class="menu__item"><span>Veal Parmigiana</span><span class="menu__price">$14</span></li>
          <li class="menu__item"><span>Homemade Lasagna</span><span class="menu__price">$12</span></li>
          <li class="menu__item"><span>Gnocchi</span><span class="menu__price">$11</span></li>
          <li class="menu__item"><span>Tortellini in Rose Sauce</span><span class="menu__price">$12</span></li>
          <li class="menu__item"><span>Eggplant Parmigiana</span><span class="menu__price">$10</span></li>
          <li class="menu__item"><span>Penne Pasta</span><span class="menu__price">$9</span></li>
        </ul>
      </div>

      <div class="menu__column fade-in">
        <h3 class="menu__category">Sandwiches</h3>
        <ul class="menu__list">
          <li class="menu__item"><span>Chicken Parm Sandwich</span><span class="menu__price">$9</span></li>
          <li class="menu__item"><span>Veal Parm Sandwich</span><span class="menu__price">$10</span></li>
        </ul>
      </div>

      <div class="menu__column fade-in">
        <h3 class="menu__category">Sides</h3>
        <ul class="menu__list">
          <li class="menu__item"><span>Roasted Potatoes</span><span class="menu__price">$5</span></li>
          <li class="menu__item"><span>Rapini</span><span class="menu__price">$6</span></li>
          <li class="menu__item"><span>Stuffed Peppers</span><span class="menu__price">$7</span></li>
          <li class="menu__item"><span>Tomato Cream Soup</span><span class="menu__price">$6</span></li>
          <li class="menu__item"><span>Sauteed Mushrooms &amp; Onions</span><span class="menu__price">$5</span></li>
        </ul>
      </div>

      <div class="menu__column fade-in">
        <h3 class="menu__category">Sweets &amp; Coffee</h3>
        <ul class="menu__list">
          <li class="menu__item"><span>Fresh Donut (daily)</span><span class="menu__price">$2</span></li>
          <li class="menu__item"><span>Chocolate Glazed Donut</span><span class="menu__price">$2</span></li>
          <li class="menu__item"><span>Sprinkled Donut</span><span class="menu__price">$2</span></li>
          <li class="menu__item"><span>Espresso</span><span class="menu__price">$3</span></li>
          <li class="menu__item"><span>Coffee</span><span class="menu__price">$3</span></li>
        </ul>
      </div>

    </div>
    <p class="menu__note">Menu changes daily — call ahead to confirm availability. Cash only. ATM available on site.</p>
  </div>
</section>
```

- [ ] **Step 2: Append menu styles to `css/styles.css`**

```css
/* =========================================
   MENU
   ========================================= */

.menu {
  background: var(--cream);
}

.menu__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

.menu__category {
  font-family: var(--font-body);
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--olive);
  margin-bottom: 1.25rem;
  padding-bottom: 0.6rem;
  border-bottom: 1.5px solid var(--olive);
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
  border-bottom: 1px dotted rgba(44, 40, 36, 0.15);
  gap: 1rem;
}

.menu__item:last-child {
  border-bottom: none;
}

.menu__price {
  color: var(--terracotta);
  font-weight: 500;
  white-space: nowrap;
  flex-shrink: 0;
}

.menu__note {
  text-align: center;
  margin-top: 2.5rem;
  font-size: 0.85rem;
  color: var(--charcoal);
  opacity: 0.55;
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

- [ ] **Step 3: Verify in browser**

Reload. Menu section should have a cream background. Four columns on desktop (1100px+), 2 columns on tablet, 1 on mobile. Each column has an olive green uppercase header, items with name on left and terracotta price on right, separated by dotted lines. Note text below is italic and muted.

- [ ] **Step 4: Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: add Menu section with four columns"
```

---

## Task 7: Specialties Section

**Files:**
- Modify: `index.html` (specialties section content)
- Modify: `css/styles.css` (append specialties styles)

- [ ] **Step 1: Add specialties HTML**

Replace `<section class="specialties" id="specialties"></section>` in `index.html` with:

```html
<!-- 4. Specialties -->
<section class="specialties" id="specialties">
  <div class="container">
    <h2 class="section-title fade-in">What We're Known For</h2>
    <div class="specialties__grid">

      <div class="specialty-card fade-in">
        <h3 class="specialty-card__title">Chicken Parmigiana</h3>
        <p class="specialty-card__desc">Crispy breaded chicken smothered in homemade tomato sauce and melted cheese. A Milton staple — regulars come back for it every week.</p>
      </div>

      <div class="specialty-card fade-in">
        <h3 class="specialty-card__title">Homemade Lasagna</h3>
        <p class="specialty-card__desc">Layered fresh daily with house-made meat sauce, ricotta, and mozzarella. The kind of lasagna you only get from someone who really knows how to cook.</p>
      </div>

      <div class="specialty-card fade-in">
        <h3 class="specialty-card__title">Fresh Daily Donuts</h3>
        <p class="specialty-card__desc">Made fresh every morning — chocolate glazed, sprinkled, and more. They sell out fast. Come early and thank us later.</p>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Append specialties styles to `css/styles.css`**

```css
/* =========================================
   SPECIALTIES
   ========================================= */

.specialties {
  background: var(--warm-white);
}

.specialties__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.specialty-card {
  background: var(--cream);
  border-top: 3px solid var(--terracotta);
  padding: 2.25rem 2rem;
  border-radius: 2px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.specialty-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 28px rgba(44, 40, 36, 0.09);
}

.specialty-card__title {
  font-family: var(--font-heading);
  font-size: 1.45rem;
  color: var(--charcoal);
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

.specialty-card__desc {
  font-size: 0.92rem;
  line-height: 1.75;
  color: var(--charcoal);
  opacity: 0.72;
}

@media (min-width: 768px) {
  .specialties__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

- [ ] **Step 3: Verify in browser**

Reload. Three cards side-by-side on desktop (stacked on mobile). Each card has a terracotta top border, serif title, and muted body copy. Hovering a card should lift it slightly with a soft shadow.

- [ ] **Step 4: Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: add Specialties section with three cards"
```

---

## Task 8: Reviews Section

**Files:**
- Modify: `index.html` (reviews section content)
- Modify: `css/styles.css` (append reviews styles)

- [ ] **Step 1: Add reviews HTML**

Replace `<section class="reviews" id="reviews"></section>` in `index.html` with:

```html
<!-- 5. Reviews -->
<section class="reviews" id="reviews">
  <div class="container">
    <h2 class="section-title fade-in">What People Are Saying</h2>
    <div class="reviews__rating fade-in">
      <div class="reviews__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <p class="reviews__score">4.7 on Google Reviews</p>
    </div>
    <div class="reviews__grid">

      <div class="review-card fade-in">
        <div class="review-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="review-card__quote">"Big portions and great taste!"</p>
        <p class="review-card__author">Google Reviewer</p>
      </div>

      <div class="review-card fade-in">
        <div class="review-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="review-card__quote">"Great quality, price AND most importantly, they treat you like family."</p>
        <p class="review-card__author">Google Reviewer</p>
      </div>

      <div class="review-card fade-in">
        <div class="review-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="review-card__quote">"They go out of their way to make sure everything is fresh."</p>
        <p class="review-card__author">Google Reviewer</p>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Append reviews styles to `css/styles.css`**

```css
/* =========================================
   REVIEWS
   ========================================= */

.reviews {
  background: var(--cream);
}

.reviews__rating {
  text-align: center;
  margin-bottom: 3rem;
}

.reviews__stars {
  color: var(--terracotta);
  font-size: 1.4rem;
  letter-spacing: 0.12em;
  margin-bottom: 0.35rem;
}

.reviews__score {
  font-size: 0.9rem;
  color: var(--charcoal);
  opacity: 0.6;
  letter-spacing: 0.04em;
}

.reviews__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.review-card {
  background: var(--warm-white);
  padding: 2rem;
  border-radius: 2px;
  border-left: 3px solid var(--terracotta);
}

.review-card__stars {
  color: var(--terracotta);
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.review-card__quote {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  line-height: 1.65;
  color: var(--charcoal);
  font-style: italic;
  margin-bottom: 1.25rem;
}

.review-card__author {
  font-size: 0.75rem;
  color: var(--charcoal);
  opacity: 0.45;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

@media (min-width: 768px) {
  .reviews__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

- [ ] **Step 3: Verify in browser**

Reload. Cream background section with centered star rating and score. Three cards below, each with a terracotta left border, five stars, italic serif quote, and muted author label. Cards should be side-by-side on desktop, stacked on mobile.

- [ ] **Step 4: Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: add Reviews section with Google rating and quote cards"
```

---

## Task 9: Visit Us Section + Footer

**Files:**
- Modify: `index.html` (visit + footer content)
- Modify: `css/styles.css` (append visit + footer styles)

- [ ] **Step 1: Add Visit Us HTML**

Replace `<section class="visit" id="visit"></section>` in `index.html` with:

```html
<!-- 6. Visit Us -->
<section class="visit" id="visit">
  <div class="container">
    <div class="visit__grid">

      <div class="visit__info fade-in">
        <p class="visit__label">Come See Us</p>
        <h2 class="visit__title">We'd Love<br>to See You</h2>

        <div class="visit__detail">
          <h4>Address</h4>
          <p>18 Thompson Rd N<br>Milton, ON L9T 2X5</p>
        </div>

        <div class="visit__detail">
          <h4>Phone</h4>
          <p><a href="tel:+19058782938">(905) 878-2938</a></p>
        </div>

        <div class="visit__detail">
          <h4>Hours</h4>
          <p>Mon &ndash; Sat: 10:00 AM &ndash; 7:00 PM<br>Sun: 11:00 AM &ndash; 5:00 PM</p>
        </div>

        <p class="visit__note">Cash only &mdash; ATM available in store</p>
        <p class="visit__tagline">Come hungry. Leave happy.</p>
      </div>

      <div class="visit__map fade-in">
        <iframe
          src="https://maps.google.com/maps?q=18+Thompson+Rd+N,+Milton,+ON+L9T+2X5,+Canada&output=embed"
          title="Main Street Italian Eatery location map"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Add Footer HTML**

Replace `<footer class="footer"></footer>` in `index.html` with:

```html
<!-- 7. Footer -->
<footer class="footer">
  <div class="container">
    <p class="footer__name">Main Street Italian Eatery</p>
    <p class="footer__tagline">Homemade Italian, Milton's best-kept secret</p>
    <p class="footer__phone"><a href="tel:+19058782938">(905) 878-2938</a></p>
  </div>
</footer>
```

- [ ] **Step 3: Append visit + footer styles to `css/styles.css`**

```css
/* =========================================
   VISIT US
   ========================================= */

.visit {
  background: var(--warm-white);
}

.visit__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: start;
}

.visit__label {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--terracotta);
  margin-bottom: 0.75rem;
}

.visit__title {
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 4vw, 2.6rem);
  color: var(--charcoal);
  margin-bottom: 2rem;
  line-height: 1.2;
}

.visit__detail {
  margin-bottom: 1.5rem;
}

.visit__detail h4 {
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--olive);
  margin-bottom: 0.35rem;
}

.visit__detail p,
.visit__detail a {
  font-size: 1rem;
  color: var(--charcoal);
  text-decoration: none;
  line-height: 1.65;
}

.visit__detail a:hover {
  color: var(--terracotta);
}

.visit__note {
  display: inline-block;
  background: var(--cream);
  border-left: 3px solid var(--terracotta);
  padding: 0.65rem 1rem;
  font-size: 0.875rem;
  color: var(--charcoal);
  margin-bottom: 2rem;
}

.visit__tagline {
  font-family: var(--font-heading);
  font-size: 1.45rem;
  color: var(--terracotta);
  font-style: italic;
}

.visit__map iframe {
  width: 100%;
  height: 420px;
  border: 0;
  border-radius: 2px;
  display: block;
}

@media (min-width: 768px) {
  .visit__grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* =========================================
   FOOTER
   ========================================= */

.footer {
  background: var(--charcoal);
  color: var(--cream);
  padding: 2.5rem 0;
  text-align: center;
}

.footer__name {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  margin-bottom: 0.4rem;
}

.footer__tagline {
  font-size: 0.85rem;
  opacity: 0.5;
  margin-bottom: 0.75rem;
}

.footer__phone a {
  font-size: 0.875rem;
  color: var(--cream);
  opacity: 0.45;
  text-decoration: none;
}

.footer__phone a:hover {
  opacity: 0.8;
}
```

- [ ] **Step 4: Verify in browser**

Reload. Visit Us section should show address/phone/hours on the left and a Google Maps embed on the right (two columns on desktop, stacked on mobile). The cash-only note should appear as a cream block with terracotta left border. Footer below should be dark charcoal with light text. Phone numbers should be clickable links.

- [ ] **Step 5: Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: add Visit Us section with map embed and footer"
```

---

## Task 10: JavaScript — Animations + Smooth Scroll

**Files:**
- Modify: `js/main.js`

- [ ] **Step 1: Write `js/main.js`**

Replace contents of `js/main.js` with:

```js
// Smooth scroll for anchor links
// (CSS scroll-behavior: smooth handles most cases, but this ensures
// consistent behavior across browsers including Safari)
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in on scroll using IntersectionObserver
// Elements with class .fade-in start invisible (opacity: 0, translateY(24px))
// When they enter the viewport, .visible is added which transitions them in
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Stop observing once visible — no need to re-trigger
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,       // Trigger when 10% of element is visible
  rootMargin: '0px 0px -40px 0px'  // Start 40px before element hits bottom of viewport
});

document.querySelectorAll('.fade-in').forEach(function(el) {
  observer.observe(el);
});
```

- [ ] **Step 2: Verify in browser**

Reload and scroll down slowly. Each section (story, menu columns, specialty cards, review cards, visit info/map) should fade in and slide up as it enters view. Clicking the hero scroll arrow should smoothly scroll to the Our Story section. Sections should not re-animate on scroll-up.

- [ ] **Step 3: Commit**

```bash
git add js/main.js
git commit -m "feat: add scroll animations and smooth scroll JS"
```

---

## Task 11: Responsive Polish

**Files:**
- Modify: `css/styles.css` (append mobile-specific overrides)

- [ ] **Step 1: Append responsive overrides to `css/styles.css`**

These handle small-screen edge cases not already covered by the grid breakpoints in each section:

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

- [ ] **Step 2: Verify responsive behavior in browser**

Use DevTools (F12) device toolbar to test:
- **375px (iPhone SE):** All sections stack to single column. Hero text readable. Menu shows 1 column. Map full width.
- **768px (tablet):** Story, Visit Us show 2 columns. Menu shows 2 columns. Specialty/review cards show 3 columns.
- **1100px+ (desktop):** Menu shows 4 columns. All two-column layouts side-by-side.

Also verify: enable "prefers-reduced-motion" in DevTools (Rendering tab) — animations should be disabled, all content visible immediately.

- [ ] **Step 3: Commit**

```bash
git add css/styles.css
git commit -m "feat: add responsive polish and prefers-reduced-motion support"
```

---

## Task 12: Final Review + Commit

- [ ] **Step 1: Full page walkthrough checklist**

Open `index.html` in browser and verify each item:

- [ ] Hero photo fills viewport, dark overlay visible, title and subtitle readable, bounce arrow present
- [ ] Clicking hero arrow smoothly scrolls to Our Story
- [ ] Our Story: two-column on desktop, terracotta label, serif title, cream accent block with italic quote
- [ ] Menu: cream background, 4 columns on desktop, olive category headers, dotted item separators, terracotta prices, italic note below
- [ ] Specialties: 3 cards with terracotta top border, hover lift effect works
- [ ] Reviews: cream background, star rating centered, 3 review cards with terracotta left border
- [ ] Visit Us: address/phone/hours/note on left, Google Maps embed on right, cash-only note styled correctly, "Come hungry. Leave happy." in terracotta italic
- [ ] Footer: dark background, restaurant name, tagline, phone
- [ ] All phone numbers are clickable `tel:` links
- [ ] Scroll down slowly — all `.fade-in` elements animate in on first appearance
- [ ] Resize to 375px — everything stacks and is readable with no horizontal overflow

- [ ] **Step 2: Final commit**

```bash
git add -A
git commit -m "feat: complete Main Street Italian Eatery landing page"
```

---

## Content Placeholder Summary

The restaurant should update these before going live:

| Item | Current Value | Notes |
|------|--------------|-------|
| All menu prices | Placeholder ($2–$14) | Update with real prices |
| Hours | Mon–Sat 10–7, Sun 11–5 | Confirm actual hours |
| Menu items | Based on reviews | Confirm current offerings |
| Our Story copy | Generated | Replace with real story if desired |
