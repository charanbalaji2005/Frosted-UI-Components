import type { Variants, Transition } from "framer-motion";

export const springs = {
    bouncy: { type: "spring", stiffness: 500, damping: 28 } as Transition,
    smooth: { type: "spring", stiffness: 300, damping: 35 } as Transition,
    floaty: { type: "spring", stiffness: 200, damping: 25 } as Transition,
    snap: { type: "spring", stiffness: 800, damping: 40 } as Transition,
} as const;

export const tweens = {
  fast: { type: "tween", duration: 0.15, ease: [0.4, 0, 0.2, 1] } as Transition,
  mid: { type: "tween", duration: 0.25, ease: [0.4, 0, 0.2, 1] } as Transition,
  slow: { type: "tween", duration: 0.4, ease: [0.4, 0, 0.2, 1] } as Transition,
  expo: { type: "tween", duration: 0.5, ease: [0.16, 1, 0.3, 1] } as Transition,
} as const;

export const islandBarVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springs.bouncy,
  },
  exit: { opacity: 0, y: 16, scale: 0.96, transition: tweens.fast },
};

export const activeBubbleVariants: Variants = {
  inactive: { scale: 0.8, opacity: 0 },
  active: { scale: 1, opacity: 1, transition: springs.bouncy },
};

export const sheetVariants: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    y: 20,
    transition: { ...tweens.mid, height: tweens.expo },
  },
  expanded: {
    height: "auto",
    opacity: 1,
    y: 0,
    transition: { ...springs.smooth, height: tweens.expo },
  },
};
