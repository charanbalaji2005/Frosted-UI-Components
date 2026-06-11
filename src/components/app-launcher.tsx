"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { springs, backdropVariants } from "../lib/animations";
import type { AppLauncherProps } from "../types";

const COLS_MAP = { 3: "grid-cols-3", 4: "grid-cols-4", 5: "grid-cols-5" };

export function AppLauncher({
  apps,
  columns = 4,
  pages = false,
  variant = "dark",
  glow = true,
  className,
}: AppLauncherProps) {
  const [page, setPage] = useState(0);
  const perPage = columns * 2;
  const totalPages = Math.ceil(apps.length / perPage);
  const visible = pages ? apps.slice(page * perPage, (page + 1) * perPage) : apps;

  return (
    <div className={cn("relative w-full", className)}>
      {}
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl p-4",

          "backdrop-blur-2xl saturate-[180%]",

          "before:absolute before:inset-0 before:rounded-3xl",
          "before:bg-gradient-to-b before:from-white/[0.08] before:to-transparent",
          "before:pointer-events-none",

          "after:absolute after:inset-[-1px] after:rounded-3xl",
          "after:border after:border-white/[0.12] after:pointer-events-none",
          variant === "dark"
            ? "bg-white/[0.05] border border-white/[0.10]"
            : "bg-black/[0.04] border border-black/[0.08]",
          glow ? "shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)]"
            : "shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
        )}
      >
        {}
        <div className="absolute inset-0 rounded-3xl opacity-[0.025] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjbikiLz48L3N2Zz4=')]" />

        {}
        <motion.div
          key={page}
          className={cn("grid gap-4", COLS_MAP[columns])}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={springs.smooth}
        >
          {visible.map((app, i) => (
            <AppIcon key={app.id} app={app} index={i} />
          ))}
        </motion.div>

        {}
        {pages && totalPages > 1 && (
          <div className="mt-4 flex justify-center gap-1.5">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === page ? "w-4 bg-white/70" : "w-1.5 bg-white/25"
                )}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function AppIcon({ app, index }: { app: AppLauncherProps["apps"][0]; index: number }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-1.5"
      initial={{ opacity: 0, scale: 0.7, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ ...springs.bouncy, delay: index * 0.04 }}
    >
      <motion.button
        className={cn(
          "relative flex h-14 w-14 items-center justify-center rounded-2xl text-2xl",
          "ring-1 ring-white/[0.15] shadow-[0_4px_16px_rgba(0,0,0,0.35)]",
          "overflow-hidden",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
          app.color
            ? `bg-gradient-to-br ${app.color}`
            : "bg-gradient-to-br from-white/[0.12] to-white/[0.06]"
        )}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.88 }}
        transition={springs.bouncy}
        onClick={app.onClick}
        aria-label={app.label}
      >
        {}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.18] to-transparent pointer-events-none" />
        <motion.span
          className="relative z-10 leading-none flex items-center justify-center"
          whileHover={{ scale: 1.15, rotate: [0, -6, 6, 0] }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {app.icon}
        </motion.span>
      </motion.button>

      <span className="max-w-[56px] truncate text-center text-[11px] font-medium text-white/65">
        {app.label}
      </span>
    </motion.div>
  );
}

export default AppLauncher;
