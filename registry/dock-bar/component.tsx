"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { cn } from "../lib/utils";
import { springs } from "../lib/animations";
import type { DockBarProps } from "../types";

const ICON_SIZE = 52;
const ICON_SIZE_MAX = 80;
const MAGNIFY_RANGE = 120; 

export function DockBar({
  items,
  magnify = true,
  magnifyScale = 1.6,
  showDots = true,
  fixed = true,
  variant = "dark",
  glow = true,
  className,
}: DockBarProps) {
  const [activeId, setActiveId] = useState(
    items.find((i) => i.active)?.id ?? items[0]?.id
  );
  const mouseX = useMotionValue(Infinity);
  const dockRef = useRef<HTMLDivElement>(null);

  const positionStyles = fixed
    ? {
        position: "fixed" as const,
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 50,
      }
    : {};

  return (
    <motion.nav
      style={positionStyles}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={springs.smooth}
      aria-label="Dock navigation"
    >
      {}
      {glow && (
        <div className="absolute -bottom-3 left-1/2 h-6 w-2/3 -translate-x-1/2 rounded-full bg-purple-500/20 blur-xl pointer-events-none" />
      )}

      <div
        ref={dockRef}
        className={cn(
          "relative flex items-end gap-2 rounded-3xl px-4 py-3",

          "backdrop-blur-2xl saturate-[180%]",

          "before:absolute before:inset-0 before:rounded-3xl",
          "before:bg-gradient-to-b before:from-white/[0.10] before:to-transparent",
          "before:pointer-events-none",

          "after:absolute after:inset-[-1px] after:rounded-3xl",
          "after:border after:border-white/[0.15] after:pointer-events-none",
          variant === "dark"
            ? "bg-white/[0.08] border border-white/[0.12] shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
            : "bg-black/[0.05] border border-black/[0.1]",
          className
        )}
        onMouseMove={(e) => {
          if (!dockRef.current) return;
          const rect = dockRef.current.getBoundingClientRect();
          mouseX.set(e.clientX - rect.left);
        }}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {}
        <div className="absolute inset-0 rounded-3xl opacity-[0.025] [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIvPjwvc3ZnPg==')] pointer-events-none" />

        {items.map((item, index) => (
          <DockIcon
            key={item.id}
            item={item}
            index={index}
            mouseX={mouseX}
            isActive={activeId === item.id}
            magnify={magnify}
            magnifyScale={magnifyScale}
            showDot={showDots}
            onActivate={() => {
              setActiveId(item.id);
              item.onClick?.();
            }}
          />
        ))}
      </div>
    </motion.nav>
  );
}

function DockIcon({
  item,
  index,
  mouseX,
  isActive,
  magnify,
  magnifyScale,
  showDot,
  onActivate,
}: {
  item: DockBarProps["items"][0];
  index: number;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  isActive: boolean;
  magnify: boolean;
  magnifyScale: number;
  showDot: boolean;
  onActivate: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    if (!magnify || !ref.current) return 0;
    const rect = ref.current.getBoundingClientRect();
    const parentRect = ref.current.parentElement?.getBoundingClientRect();
    const iconCenter = rect.left - (parentRect?.left ?? 0) + ICON_SIZE / 2;
    return Math.abs(val - iconCenter);
  });

  const scaleVal = useTransform(
    distance,
    [0, MAGNIFY_RANGE / 2, MAGNIFY_RANGE],
    magnify ? [magnifyScale, 1.25, 1] : [1, 1, 1]
  );

  const yVal = useTransform(
    distance,
    [0, MAGNIFY_RANGE / 2, MAGNIFY_RANGE],
    magnify ? [-14, -6, 0] : [0, 0, 0]
  );

  const scale = useSpring(scaleVal, { mass: 0.1, stiffness: 200, damping: 15 });
  const y = useSpring(yVal, { mass: 0.1, stiffness: 200, damping: 15 });

  return (
    <motion.div
      className="flex flex-col items-center gap-1"
      style={{ scale, y }}
    >
      <motion.button
        ref={ref as React.RefObject<HTMLButtonElement>}
        className={cn(
          "relative flex items-center justify-center rounded-2xl",
          "bg-white/[0.08] border border-white/[0.10]",
          "shadow-[0_2px_12px_rgba(0,0,0,0.3)]",
          "transition-colors duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
          isActive && "bg-white/[0.12] ring-1 ring-white/20"
        )}
        style={{ width: ICON_SIZE, height: ICON_SIZE }}
        whileTap={{ scale: 0.9 }}
        onClick={onActivate}
        aria-label={item.label}
        aria-current={isActive ? "page" : undefined}
        title={item.label}
      >
        <span className="text-2xl leading-none">{item.icon}</span>

        {}
        {item.badge !== undefined && item.badge > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
            {item.badge > 99 ? "99+" : item.badge}
          </span>
        )}
      </motion.button>

      {}
      {showDot && (
        <div className="flex h-1 w-1 items-center justify-center">
          {isActive && (
            <motion.div
              className="h-1 w-1 rounded-full bg-white/50"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={springs.bouncy}
            />
          )}
        </div>
      )}
    </motion.div>
  );
}

export default DockBar;
