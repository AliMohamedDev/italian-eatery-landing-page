# Menu Card Pattern Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a subtle geometric SVG diamond lattice pattern and red top border to each menu card, making the section look more polished and modern.

**Architecture:** Pure CSS change — inline SVG `data:` URI as `background-image` on `.menu__column`, plus a `border-top` accent. Dark mode override via `[data-theme="dark"]` selector. No JS, no new files.

**Tech Stack:** CSS, inline SVG

---

### Task 1: Add diamond lattice pattern and red top border to menu cards

**Files:**
- Modify: `css/styles.css` (`.menu__column` block, lines ~858–864)

- [ ] **Step 1: Open `css/styles.css` and replace the `.menu__column` rule**

Find this existing block (around line 858):

```css
.menu__column {
  background: var(--surface);
  border-radius: 14px;
  padding: 1.25rem 1.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  border: 1px solid rgba(28, 18, 10, 0.06);
}
```

Replace with:

```css
.menu__column {
  background: var(--surface);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Cpath d='M14 0 L28 14 L14 28 L0 14 Z' fill='none' stroke='rgba(28%2C18%2C10%2C0.08)' stroke-width='1'/%3E%3C/svg%3E");
  background-size: 28px 28px;
  border-radius: 14px;
  border-top: 3px solid var(--red);
  border-left: 1px solid rgba(28, 18, 10, 0.06);
  border-right: 1px solid rgba(28, 18, 10, 0.06);
  border-bottom: 1px solid rgba(28, 18, 10, 0.06);
  padding: 1.25rem 1.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
}
```

- [ ] **Step 2: Add dark mode override for the pattern**

Find this existing block (around line 1867):

```css
[data-theme="dark"] .menu__tab {
  border-color: rgba(255, 255, 255, 0.1);
}
```

Add immediately after it:

```css
[data-theme="dark"] .menu__column {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Cpath d='M14 0 L28 14 L14 28 L0 14 Z' fill='none' stroke='rgba(255%2C255%2C255%2C0.06)' stroke-width='1'/%3E%3C/svg%3E");
}
```

- [ ] **Step 3: Verify in browser**

Open `index.html` in a browser (or dev server). Check:
- Each menu card shows a faint diamond grid pattern on its background
- Each card has a red top border
- Pattern is subtle — doesn't fight the text
- Toggle dark mode: pattern still visible at lower opacity, red top border remains

- [ ] **Step 4: Commit**

```bash
git add css/styles.css
git commit -m "feat: add geometric pattern and red top border to menu cards"
```
