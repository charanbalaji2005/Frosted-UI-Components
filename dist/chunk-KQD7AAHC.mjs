// src/lib/animations.ts
var springs = {
  bouncy: { type: "spring", stiffness: 500, damping: 28 },
  smooth: { type: "spring", stiffness: 300, damping: 35 },
  floaty: { type: "spring", stiffness: 200, damping: 25 },
  snap: { type: "spring", stiffness: 800, damping: 40 }
};
var tweens = {
  fast: { type: "tween", duration: 0.15, ease: [0.4, 0, 0.2, 1] },
  mid: { type: "tween", duration: 0.25, ease: [0.4, 0, 0.2, 1] },
  slow: { type: "tween", duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  expo: { type: "tween", duration: 0.5, ease: [0.16, 1, 0.3, 1] }
};
var islandBarVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springs.bouncy
  },
  exit: { opacity: 0, y: 16, scale: 0.96, transition: tweens.fast }
};
var activeBubbleVariants = {
  inactive: { scale: 0.8, opacity: 0 },
  active: { scale: 1, opacity: 1, transition: springs.bouncy }
};
var sheetVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    y: 20,
    transition: { ...tweens.mid, height: tweens.expo }
  },
  expanded: {
    height: "auto",
    opacity: 1,
    y: 0,
    transition: { ...springs.smooth, height: tweens.expo }
  }
};
var backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: tweens.mid },
  exit: { opacity: 0, transition: tweens.fast }
};
var dockIconVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.35, y: -10, transition: springs.bouncy },
  neighbor: { scale: 1.15, y: -5, transition: springs.bouncy }
};
var fabActionVariants = {
  closed: { opacity: 0, scale: 0.5, y: 20 },
  open: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { ...springs.bouncy, delay: i * 0.05 }
  })
};
var searchExpandVariants = {
  collapsed: { width: 60, borderRadius: 30 },
  expanded: {
    width: "100%",
    borderRadius: 16,
    transition: springs.smooth
  }
};
var pebbleVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.08, y: -4, transition: springs.bouncy },
  tap: { scale: 0.95, transition: springs.snap }
};
var commandSheetVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springs.smooth
  },
  exit: { opacity: 0, y: 20, scale: 0.98, transition: tweens.fast }
};
var profileSheetVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...springs.smooth, damping: 30 }
  },
  exit: { opacity: 0, y: "100%", transition: tweens.mid }
};
var cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...tweens.expo, delay: i * 0.06 }
  })
};
var orbPulseVariants = {
  rest: { scale: 1, opacity: 0.4 },
  pulse: {
    scale: [1, 1.12, 1],
    opacity: [0.4, 0.15, 0.4],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }
};
var tapScale = {
  whileTap: { scale: 0.94 },
  transition: springs.snap
};
var hoverLift = {
  whileHover: { y: -4 },
  transition: springs.floaty
};

export { activeBubbleVariants, backdropVariants, cardVariants, commandSheetVariants, dockIconVariants, fabActionVariants, hoverLift, islandBarVariants, orbPulseVariants, pebbleVariants, profileSheetVariants, searchExpandVariants, sheetVariants, springs, tapScale, tweens };
//# sourceMappingURL=chunk-KQD7AAHC.mjs.map
//# sourceMappingURL=chunk-KQD7AAHC.mjs.map