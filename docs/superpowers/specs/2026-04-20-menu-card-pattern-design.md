# Menu Card Pattern Design

**Date:** 2026-04-20  
**Scope:** Visual enhancement of `.menu__column` cards in the Menu section

## Objective

Add decorative pattern to menu cards to make the section feel more designed and modern, without altering layout, functionality, or dark mode behavior.

## Approach

Geometric SVG tile pattern as CSS `background-image` on each `.menu__column` card.

## Design Spec

### Pattern

- **Shape:** Diamond lattice — thin diagonal lines forming repeating diamond shapes
- **Tile size:** ~28px × 28px repeat
- **Technique:** Inline `data:image/svg+xml` URI in CSS `background-image`
- **Opacity:** Pattern lines at ~8% opacity (light mode), ~6% (dark mode)
- **Color:** `currentColor` or a low-opacity version of `var(--text)` so it adapts naturally

### Card Top Border

- `border-top: 3px solid var(--red)` on each `.menu__column`
- Replaces the plain rounded-top edge, ties card to brand color, frames the pattern

### Dark Mode

- `[data-theme="dark"] .menu__column` overrides pattern color to white at same low opacity
- No JS required — pure CSS

## Files Changed

- `css/styles.css` — modify `.menu__column` block only

## Out of Scope

- No layout changes
- No new files
- No JS changes
- No changes to tab behavior or grid structure
