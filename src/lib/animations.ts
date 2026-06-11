
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

export const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: tweens.mid },
  exit: { opacity: 0, transition: tweens.fast },
};

export const dockIconVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.35, y: -10, transition: springs.bouncy },
  neighbor: { scale: 1.15, y: -5, transition: springs.bouncy },
};

export const fabActionVariants: Variants = {
  closed: { opacity: 0, scale: 0.5, y: 20 },
  open: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { ...springs.bouncy, delay: i * 0.05 },
  }),
};

export const searchExpandVariants: Variants = {
  collapsed: { width: 60, borderRadius: 30 },
  expanded: {
    width: "100%",
    borderRadius: 16,
    transition: springs.smooth,
  },
};

export const pebbleVariants: Variants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.08, y: -4, transition: springs.bouncy },
  tap: { scale: 0.95, transition: springs.snap },
};

export const commandSheetVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springs.smooth,
  },
  exit: { opacity: 0, y: 20, scale: 0.98, transition: tweens.fast },
};

export const profileSheetVariants: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...springs.smooth, damping: 30 },
  },
  exit: { opacity: 0, y: "100%", transition: tweens.mid },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...tweens.expo, delay: i * 0.06 },
  }),
};

export const orbPulseVariants: Variants = {
  rest: { scale: 1, opacity: 0.4 },
  pulse: {
    scale: [1, 1.12, 1],
    opacity: [0.4, 0.15, 0.4],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

export const tapScale = {
  whileTap: { scale: 0.94 },
  transition: springs.snap,
};

export const hoverLift = {
  whileHover: { y: -4 },
  transition: springs.floaty,
};
