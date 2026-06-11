"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { springs, islandBarVariants, activeBubbleVariants } from "../lib/animations";
import type { FloatingIslandBarProps } from "../types";

const islandBarVariantsCVA = cva(
  [
    "relative flex items-center gap-1 rounded-full",

    "backdrop-blur-2xl saturate-[180%]",

    "before:absolute before:inset-0 before:rounded-full",
    "before:bg-gradient-to-b before:from-white/[0.08] before:to-transparent",
    "before:pointer-events-none",

    "after:absolute after:inset-[-1px] after:rounded-full",
    "after:border after:border-white/[0.1] after:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        dark: "bg-white/[0.06] border border-white/[0.12]",
        light: "bg-black/[0.05] border border-black/[0.08]",
        ultra: "bg-white/[0.04] border border-white/[0.08]",
        tinted: "bg-purple-500/[0.12] border border-purple-400/[0.2]",
      },
      glow: {
        true: "shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_60px_rgba(120,80,255,0.2)]",
        false: "shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
      },
      size: {
        sm: "p-2 gap-0.5",
        md: "p-3 gap-1",
        lg: "p-4 gap-2",
      },
    },
    defaultVariants: {
      variant: "dark",
      glow: true,
      size: "md",
    },
  }
);

function NavIcon({
  item,
  isActive,
  onClick,
}: {
  item: FloatingIslandBarProps["items"][0];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      className={cn(
        "relative flex h-11 w-11 items-center justify-center rounded-full",
        "transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
        isActive
          ? "text-white"
          : "text-white/50 hover:text-white/80"
      )}
      onClick={onClick}
      whileTap={{ scale: 0.88 }}
      transition={springs.snap}
      aria-label={item.label}
      aria-current={isActive ? "page" : undefined}
    >
      {}
      <AnimatePresence>
        {isActive && (
          <motion.span
            className="absolute inset-0 rounded-full bg-white/[0.14] shadow-[0_0_20px_rgba(160,120,255,0.35)] ring-1 ring-white/20"
            variants={activeBubbleVariants}
            initial="inactive"
            animate="active"
            exit="inactive"
            layoutId="island-active-bubble"
          />
        )}
      </AnimatePresence>

      {}
      <motion.span
        className="relative z-10 text-[18px] leading-none flex items-center justify-center"
        animate={isActive ? { y: [0, -6, 0] } : { y: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        whileHover={{ scale: 1.15, rotate: [0, -6, 6, 0] }}
      >
        {item.icon}
      </motion.span>

      {}
      {item.badge !== undefined && item.badge > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
          {item.badge > 99 ? "99+" : item.badge}
        </span>
      )}

      {}
      {isActive && (
        <motion.span
          className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-purple-400"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={springs.bouncy}
        />
      )}
    </motion.button>
  );
}

export function FloatingIslandBar({
  items,
  centerAction,
  position = "bottom",
  offset = 24,
  fixed = true,
  blur,
  variant,
  glow,
  className,
  ...props
}: FloatingIslandBarProps) {
  const [activeId, setActiveId] = useState(
    items.find((i) => i.active)?.id ?? items[0]?.id
  );

  const half = centerAction ? Math.ceil(items.length / 2) : items.length;
  const leftItems = centerAction ? items.slice(0, half) : items;
  const rightItems = centerAction ? items.slice(half) : [];

  const positionStyles = fixed
    ? {
        position: "fixed" as const,
        [position === "bottom" ? "bottom" : "top"]: offset,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 50,
      }
    : {};

  return (
    <motion.nav
      style={positionStyles}
      variants={islandBarVariants}
      initial="hidden"
      animate="visible"
      aria-label="Main navigation"
    >
      {}
      <div className="absolute inset-0 rounded-full opacity-[0.03] [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')] pointer-events-none" />

      {}
      <div className="absolute -bottom-3 left-1/2 h-4 w-3/5 -translate-x-1/2 rounded-full bg-purple-500/20 blur-lg pointer-events-none" />

      <div
        className={cn(
          islandBarVariantsCVA({ variant, glow: glow as boolean | undefined }),
          className
        )}
        {...props}
      >
        {}
        {leftItems.map((item) => (
          <NavIcon
            key={item.id}
            item={item}
            isActive={activeId === item.id}
            onClick={() => {
              setActiveId(item.id);
              item.onClick?.();
            }}
          />
        ))}

        {}
        {centerAction && (
          <motion.button
            className={cn(
              "relative mx-1 flex h-13 w-13 items-center justify-center rounded-full",
              "bg-gradient-to-br from-purple-500/80 to-blue-500/80",
              "shadow-[0_0_30px_rgba(120,80,255,0.5)] ring-1 ring-white/20",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            )}
            style={{ width: 52, height: 52 }}
            whileHover={{ scale: 1.1, rotate: 45 }}
            whileTap={{ scale: 0.92 }}
            transition={springs.bouncy}
            onClick={centerAction.onClick}
            aria-label={centerAction.label ?? "Action"}
          >
            <span className="text-white text-xl">{centerAction.icon}</span>
          </motion.button>
        )}

        {}
        {rightItems.map((item) => (
          <NavIcon
            key={item.id}
            item={item}
            isActive={activeId === item.id}
            onClick={() => {
              setActiveId(item.id);
              item.onClick?.();
            }}
          />
        ))}
      </div>
    </motion.nav>
  );
}

export default FloatingIslandBar;
