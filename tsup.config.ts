import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "components/floating-island-bar": "src/components/floating-island-bar.tsx",
    "components/expandable-nav-sheet": "src/components/expandable-nav-sheet.tsx",
    "components/pill-bar": "src/components/pill-bar.tsx",
    "components/pebble-bar": "src/components/pebble-bar.tsx",
    "components/shape-bars": "src/components/shape-bars.tsx",
    "components/app-launcher": "src/components/app-launcher.tsx",
    "components/command-sheet": "src/components/command-sheet.tsx",
    "components/profile-sheet": "src/components/profile-sheet.tsx",
    "components/floating-elements": "src/components/floating-elements.tsx",
    "lib/utils": "src/lib/utils.ts",
    "lib/animations": "src/lib/animations.ts",
    tailwind: "src/lib/tailwind-preset.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  splitting: true,
  treeshake: true,
  sourcemap: true,
  external: ["react", "react-dom", "framer-motion", "lucide-react"],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});
