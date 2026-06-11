# Changelog

All notable changes to Frosted UI will be documented in this file.

## [1.0.0] - 2025-06-11

### 🎉 Initial Release

#### Navigation Bars
- **FloatingIslandBar** — Dynamic Island-inspired floating nav with active bubble animation
- **PillBar** — Pill-shaped labeled navigation with `layoutId` active slide
- **PebbleBar** — Organic individual glass pebbles with spring hover physics
- **ArcBar** — Arched top edge with gradient glow leak
- **WaveBar** — Split panels with elevated center FAB
- **CrystalBar** — Hexagonal prism clip-path navigation
- **RibbonBar** — Multi-layer folded glass ribbon with depth layers
- **DockBar** — macOS-style dock with magnetic hover magnification

#### Expandable Sheets
- **ExpandableNavSheet** — Nav bar → full menu sheet expansion with auth buttons
- **CommandSheet** — ⌘K fuzzy search command palette with keyboard navigation
- **ProfileSheet** — Slide-up user profile with stats, plan badge, action rows

#### Floating Elements
- **AppLauncher** — iOS-style glass tray app grid with pagination
- **FloatingSearchOrb** — Pulsing orb that spring-expands to search input
- **FloatingActionButton** — FAB with staggered radial action items
- **FloatingCommandBar** — AI-style command input with chip actions

#### Core System
- 5-layer frosted glass system (blur · reflection · edge · noise · glow)
- Framer Motion spring animation library (`springs`, `tweens`, component variants)
- Tailwind design tokens preset (`frostedPreset`)
- `cn()` utility with Tailwind Merge + clsx
- Full TypeScript types for all 15 components
- Smart CLI: `npx frosted-ui add <component>`
  - Auto-detects Next.js / Vite / Remix
  - Auto-detects TypeScript
  - Auto-creates `src/components/` directory
  - Installs only missing dependencies
