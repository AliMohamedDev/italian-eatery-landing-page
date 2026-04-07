# Design Spec: Color Palette Redesign — Deep Italian

**Date:** 2026-04-07
**Project:** Main Street Italian Eatery Landing Page

---

## Overview

Swap the existing terracotta/olive color scheme for a richer "Deep Italian" palette: deep wine red, warm gold accents, darker near-black text, and warmer cream backgrounds. All changes are confined to CSS custom property values in `css/styles.css`. No HTML changes required.

---

## Color Changes

| Variable | Old Value | New Value | Role |
|----------|-----------|-----------|------|
| `--terracotta` | `#C4735A` | `#8B1A1A` | Primary accent (wine red) |
| `--olive` | `#6B7A4A` | `#C9A84C` | Secondary accent (warm gold) |
| `--cream` | `#F8F4EE` | `#F2EBE0` | Alternate section backgrounds |
| `--warm-white` | `#FFFCF7` | `#FAF7F2` | Primary page background |
| `--charcoal` | `#2C2824` | `#1C1410` | Body text + footer background |

Variable names stay the same — only hex values change. All existing CSS selectors that reference these variables automatically pick up the new colors.

---

## What Changes Visually

- **Hero overlay**: stays dark, slightly warmer tone from `--charcoal` update
- **Section labels** (Our Story, Visit Us): terracotta → wine red
- **Accent quote block** (Our Story): cream block unchanged in structure, slightly warmer tone
- **Menu category headers**: olive → gold
- **Menu prices**: olive → gold
- **Specialty card top border**: terracotta → wine red
- **Review card left border**: terracotta → wine red
- **Review card stars**: terracotta → gold (using `--olive` variable)
- **Aggregate rating stars**: terracotta → wine red
- **Cash-only note border**: terracotta → wine red
- **Visit Us tagline**: terracotta → wine red
- **Footer background**: charcoal → near-black
- **Instagram link hover**: terracotta → wine red
- **Hero scroll button + bounce animation**: unaffected (uses rgba values)

---

## Files Changed

- `css/styles.css` — update 5 hex values in `:root` block only
