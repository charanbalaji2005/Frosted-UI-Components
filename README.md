# Frosted UI ✦

> The world's first dedicated **Frosted Glass Navigation & Mobile UX Component Library** for React.

[![npm version](https://img.shields.io/npm/v/frosted-ui.svg)](https://www.npmjs.com/package/frosted-ui)
[![license](https://img.shields.io/npm/l/frosted-ui.svg)](LICENSE)
[![downloads](https://img.shields.io/npm/dm/frosted-ui.svg)](https://www.npmjs.com/package/frosted-ui)

```bash
npx frosted-ui add floating-island-bar
```

---

## What is Frosted UI?

Frosted UI is the Shadcn UI for **frosted glass navigation and mobile UX components**. Every component is:

- 🪟 **Frosted Glass** — 5-layer glass system (blur · reflection · edge · noise · glow)
- 📱 **Mobile First** — Built for iOS/Android-grade touch UX
- 🌙 **Dark Mode** — Designed for dark backgrounds, works on light too
- ♿ **Accessible** — ARIA roles, keyboard navigation, focus rings
- ⚡ **GPU Accelerated** — Framer Motion spring physics, transform-only animations
- 🌲 **Tree Shakeable** — Install only the components you use

---

## Tech Stack

| Package | Version | Purpose |
|---|---|---|
| React | 18 / 19 | UI framework |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | v4 | Utility-first styling |
| Framer Motion | 11 | Spring animations |
| Lucide React | latest | Icons |
| CVA | 0.7 | Variant management |
| Tailwind Merge | 2.x | Class merging |

---

## Installation

### Option 1 — CLI (recommended, like shadcn/ui)

```bash
# Add a single component
npx frosted-ui add floating-island-bar

# Add multiple at once
npx frosted-ui add dock-bar expandable-nav-sheet profile-sheet

# List all available components
npx frosted-ui list

# Initialize base dependencies
npx frosted-ui init
```

The CLI will:
1. ✅ Detect your framework (Next.js / Vite / Remix)
2. ✅ Detect TypeScript vs JavaScript
3. ✅ Detect Tailwind CSS
4. ✅ Auto-create `src/components/` if it doesn't exist
5. ✅ Install only missing dependencies
6. ✅ Copy the component file directly into your project

### Option 2 — npm package

```bash
npm install frosted-ui framer-motion lucide-react tailwind-merge clsx class-variance-authority
```

---

## Quick Start

### 1. Add Tailwind preset

```ts
// tailwind.config.ts
import { frostedPreset } from "frosted-ui/tailwind";

export default {
  presets: [frostedPreset],
  content: ["./src/**/*.{ts,tsx}"],
};
```

### 2. Use a component

```tsx
import { FloatingIslandBar } from "@/components/floating-island-bar";
import { Home, Search, Plus, Heart, User } from "lucide-react";

export default function App() {
  return (
    <FloatingIslandBar
      items={[
        { id: "home",   label: "Home",   icon: <Home size={20} />,   active: true },
        { id: "search", label: "Search", icon: <Search size={20} /> },
        { id: "saved",  label: "Saved",  icon: <Heart size={20} />,  badge: 3 },
        { id: "profile",label: "Profile",icon: <User size={20} /> },
      ]}
      centerAction={{ icon: <Plus size={22} />, onClick: () => {} }}
    />
  );
}
```

---

## Components

### Navigation Bars

| Component | Command | Description |
|---|---|---|
| **FloatingIslandBar** | `add floating-island-bar` | Dynamic Island-inspired floating nav |
| **PillBar** | `add pill-bar` | Pill-shaped labeled navigation |
| **PebbleBar** | `add pebble-bar` | Organic individual glass pebbles |
| **ArcBar** | `add arc-bar` | Arched top edge with glow gradient |
| **WaveBar** | `add wave-bar` | Split panels with elevated center FAB |
| **CrystalBar** | `add crystal-bar` | Hexagonal prism clip-path nav |
| **RibbonBar** | `add ribbon-bar` | Multi-layer folded glass ribbon |
| **DockBar** | `add dock-bar` | macOS magnetic magnify dock |

### Expandable Sheets

| Component | Command | Description |
|---|---|---|
| **ExpandableNavSheet** | `add expandable-nav-sheet` | Nav bar that expands into full menu |
| **CommandSheet** | `add command-sheet` | Cmd+K fuzzy search command palette |
| **ProfileSheet** | `add profile-sheet` | Slide-up user profile panel |

### Floating Elements

| Component | Command | Description |
|---|---|---|
| **AppLauncher** | `add app-launcher` | iOS-style app grid in a glass tray |
| **FloatingSearchOrb** | `add floating-search-orb` | Pulsing orb that expands to search input |
| **FloatingActionButton** | `add floating-action-button` | FAB with radial spring action buttons |
| **FloatingCommandBar** | `add floating-command-bar` | AI-style command bar with chips |

---

## Frosted Glass System

Every component uses a consistent 5-layer glass system:

```
Layer 1 — Main backdrop blur    (backdrop-blur-2xl saturate-[180%])
Layer 2 — Glass reflection      (gradient from white/8 to transparent)
Layer 3 — Edge highlight        (1px border white/10–18)
Layer 4 — Noise texture         (SVG fractal noise, opacity 2–3%)
Layer 5 — Glow layer            (radial gradient blur beneath)
```

---

## Component API Examples

### FloatingIslandBar

```tsx
<FloatingIslandBar
  items={navItems}          // NavItem[]
  centerAction={fabConfig}  // { icon, onClick, label }
  position="bottom"         // "bottom" | "top"
  offset={24}               // px from edge
  fixed={true}              // fixed or relative positioning
  variant="dark"            // "dark" | "light" | "ultra" | "tinted"
  glow={true}               // enable glow shadow
/>
```

### DockBar

```tsx
<DockBar
  items={dockItems}
  magnify={true}            // enable magnetic magnification
  magnifyScale={1.6}        // max scale on hover
  showDots={true}           // active indicator dots
  fixed={true}
/>
```

### CommandSheet

```tsx
<CommandSheet
  actions={commandActions}  // CommandAction[]
  open={open}
  onOpenChange={setOpen}
  shortcut="k"              // Meta+K to open
  placeholder="Search…"
/>
```

### ProfileSheet

```tsx
<ProfileSheet
  user={{ name: "Alex", email: "alex@co.com", plan: "Pro" }}
  stats={[{ label: "Projects", value: 142 }]}
  actions={[
    { id: "settings", label: "Settings", icon: <Settings />, onClick: () => {} },
    { id: "logout", label: "Sign Out", icon: <LogOut />, onClick: () => {}, destructive: true },
  ]}
  open={open}
  onOpenChange={setOpen}
/>
```

### FloatingActionButton

```tsx
<FloatingActionButton
  actions={[
    { id: "share", label: "Share", icon: <Share />, onClick: () => {} },
    { id: "edit",  label: "Edit",  icon: <Edit />,  onClick: () => {} },
  ]}
  position="bottom-right"
  fixed={true}
  glow={true}
/>
```

---

## Animation System

All animations are GPU-accelerated (transform + opacity only). Use the built-in presets:

```ts
import { springs, tweens, islandBarVariants } from "frosted-ui";

// Spring presets
springs.bouncy  // stiffness: 500, damping: 28
springs.smooth  // stiffness: 300, damping: 35
springs.floaty  // stiffness: 200, damping: 25
springs.snap    // stiffness: 800, damping: 40
```

---

## Tailwind Design Tokens

```ts
// Extended tokens from frostedPreset:
"backdrop-blur-frosted"         // 40px blur
"backdrop-blur-frosted-heavy"   // 60px blur
"backdrop-blur-frosted-ultra"   // 80px blur

"shadow-frosted-sm"             // Float shadow + inset highlight
"shadow-frosted-lg"             // Deep float shadow
"shadow-glow-purple"            // Purple glow
"shadow-island-float"           // Island glow shadow

"rounded-island"                // 100px — pill/island shape
"animate-float"                 // Subtle vertical float
"animate-orb-pulse"             // Concentric ring pulse
"bg-noise"                      // SVG fractal noise texture
```

---

## License

MIT © Frosted UI Contributors

---

## Links

- 📖 [Documentation](https://frosted-ui.dev/docs)
- 🧩 [Component Playground](https://frosted-ui.dev/playground)
- 💻 [GitHub](https://github.com/frosted-ui/frosted-ui)
- 🐦 [Twitter](https://twitter.com/frostedui)
# Frosted-UI-Components
