# Design Spec: Main Street Italian Eatery Landing Page

**Date:** 2026-03-31
**Project:** Static landing page for Main Street Italian Eatery, Milton ON

---

## Overview

A single-page, multi-file static website for a local homemade Italian takeout restaurant in Milton, Ontario. The tone is warm, honest, and unpretentious — reflecting a family-run, cash-only spot known for fresh daily cooking and generous portions.

No framework, no build tools. Pure HTML, CSS, and vanilla JS.

---

## File Structure

```
index.html          # Markup and content
css/styles.css      # All styles
js/main.js          # Scroll animations, smooth scroll
image.png           # Exterior restaurant photo (provided)
```

---

## Restaurant Info

- **Name:** Main Street Italian Eatery
- **Address:** 18 Thompson Rd N, Milton, ON L9T 2X5
- **Phone:** (905) 878-2938
- **Cuisine:** Homemade Italian — primarily takeout
- **Payment:** Cash only (ATM on site)
- **Rating:** 4.7 ★ on Google

---

## Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Terracotta | `#C4735A` | Primary accent, CTAs, highlights |
| Olive Green | `#6B7A4A` | Menu section headers |
| Cream | `#F8F4EE` | Alternate section backgrounds |
| Warm White | `#FFFCF7` | Primary background |
| Charcoal | `#2C2824` | Body text |

### Typography
- **Headings:** Crimson Pro (Google Fonts, serif) — elegant, warm
- **Body:** Inter (Google Fonts, sans-serif) — clean, readable
- Loaded via single Google Fonts `<link>` in `<head>`

### Animations
- Fade-in on scroll via `IntersectionObserver` (no libraries)
- Smooth scroll for anchor links
- Subtle hover effects on cards and links

---

## Sections

### 1. Hero
- Full-viewport-height section
- Background: `image.png` (exterior photo) with a warm dark overlay
- Headline: *"Cooking from the Heart"* (Crimson Pro, large, cream)
- Subtext: *"Homemade Italian food made fresh daily in Milton, ON"*
- Scroll-down arrow (animated bounce)

### 2. Our Story
- Two-column layout: copy left, decorative right (subtle pattern or solid color block)
- Copy: warm, personal, community-focused. Emphasizes fresh daily cooking, homemade recipes, family feel, Milton roots
- No images needed — typography and color carry this section

### 3. Menu
- Section heading: *"Made Fresh Daily"*
- Four columns (stacks to 2 on tablet, 1 on mobile):
  - **Pastas & Mains** — Chicken Parm, Veal Parm, Lasagna, Gnocchi, Tortellini in Rose Sauce, Eggplant Parm, Penne (placeholder prices $8–15)
  - **Sandwiches** — Chicken Parm Sandwich, Veal Parm Sandwich (placeholder prices $7–10)
  - **Sides** — Roasted Potatoes, Rapini, Stuffed Peppers, Tomato Cream Soup (placeholder prices $5–8)
  - **Sweets & Coffee** — Fresh Donuts (daily), Chocolate Glazed Donut, Espresso, Coffee (placeholder prices $2–6)
- Olive green headers per column
- Note below menu: *"Menu changes daily. Cash only — ATM available on site."*

### 4. Specialties
- Heading: *"What We're Known For"*
- 3 cards in a row (stacks on mobile):
  - **Chicken Parmigiana** — short description
  - **Homemade Lasagna** — short description
  - **Fresh Daily Donuts** — short description
- Cards: cream background, terracotta accent on top border, hover lift effect
- No photos needed — icons or simple illustration-style decoration

### 5. Reviews
- Heading: *"What People Are Saying"*
- Subtext: *"4.7 ★ on Google"* with star icons
- 3 review cards in a row (stacks on mobile):
  - *"Big portions and great taste!"*
  - *"Great quality, price AND most importantly, they treat you like family."*
  - *"They go out of their way to make sure everything is fresh."*
- Each card: reviewer name (generic: "Google Reviewer"), 5 stars, quote
- Warm cream background section

### 6. Visit Us
- Two-column: info left, Google Maps embed right
- Info column:
  - Address: 18 Thompson Rd N, Milton, ON L9T 2X5
  - Phone: (905) 878-2938
  - Hours: placeholder (Mon–Sat 10am–7pm, Sun 11am–5pm)
  - Payment: *"Cash only — ATM available in store"*
  - Warm closing line: *"Come hungry. Leave happy."*
- Map: Google Maps embed iframe for the address

### 7. Footer
- Simple single row
- Restaurant name + tagline: *"Homemade Italian, Milton's best-kept secret"*
- Phone number
- No social links (none confirmed)

---

## Responsive Behavior

- Mobile-first CSS with breakpoints at `768px` (tablet) and `1024px` (desktop)
- Hero text scales down on mobile
- Menu columns: 4 → 2 → 1
- Specialties/Reviews cards: 3 → 1
- Two-column sections collapse to single column on mobile
- Map embed is full-width on mobile

---

## Content Notes

- All menu items and prices are **placeholders** — restaurant to update
- Hours are **placeholders** — restaurant to confirm
- Copy for Our Story and Specialties is **generated** — warm, honest tone, no corporate language
- Review quotes are **real** — sourced from Google/TripAdvisor reviews
