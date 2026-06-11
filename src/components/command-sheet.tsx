"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, Command } from "lucide-react";
import { cn } from "../lib/utils";
import { springs, commandSheetVariants, backdropVariants } from "../lib/animations";
import type { CommandSheetProps } from "../types";

export function CommandSheet({
  actions,
  open,
  onOpenChange,
  shortcut = "k",
  placeholder = "Search commands…",
  className,
}: CommandSheetProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcut to open
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === shortcut) {
        e.preventDefault();
        onOpenChange?.(!open);
      }
      if (e.key === "Escape") onOpenChange?.(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onOpenChange, shortcut]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 80);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [open]);

  // Fuzzy filter
  const filtered = useMemo(() => {
    if (!query.trim()) return actions;
    const q = query.toLowerCase();
    return actions.filter(
      (a) =>
        a.label.toLowerCase().includes(q) ||
        a.group?.toLowerCase().includes(q) ||
        a.keywords?.some((k) => k.toLowerCase().includes(q))
    );
  }, [actions, query]);

  // Group results
  const groups = useMemo(() => {
    const map = new Map<string, typeof filtered>();
    filtered.forEach((a) => {
      const g = a.group ?? "Actions";
      if (!map.has(g)) map.set(g, []);
      map.get(g)!.push(a);
    });
    return map;
  }, [filtered]);

  const flat = filtered;

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, flat.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        flat[selectedIndex]?.onSelect();
        onOpenChange?.(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, flat, selectedIndex, onOpenChange]);

  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-index="${selectedIndex}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  let globalIndex = 0;

  return (
    <AnimatePresence>
      {open && (
        <>
          {}
          <motion.div
            className="fixed inset-0 z-50 backdrop-blur-sm bg-black/40"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => onOpenChange?.(false)}
          />

          {}
          <motion.div
            className="fixed inset-x-4 top-[15%] z-50 mx-auto max-w-xl"
            variants={commandSheetVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div
              className={cn(
                "overflow-hidden rounded-2xl",

                "backdrop-blur-2xl saturate-[180%]",

                "before:absolute before:inset-0 before:rounded-2xl",
                "before:bg-gradient-to-b before:from-white/[0.07] before:to-transparent",
                "before:pointer-events-none",
                "bg-[rgba(10,10,22,0.88)]",
                "border border-white/[0.10]",
                "shadow-[0_24px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)]",
                className
              )}
            >
              {}
              <div className="absolute inset-0 rounded-2xl opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjbikiLz48L3N2Zz4=')]" />

              {}
              <div className="flex items-center gap-3 border-b border-white/[0.07] px-4 py-3.5">
                <Search size={17} className="shrink-0 text-white/30" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
                  placeholder={placeholder}
                  className="flex-1 bg-transparent text-sm text-white/90 outline-none placeholder:text-white/25"
                />
                <div className="flex items-center gap-1.5">
                  {query && (
                    <button
                      className="rounded-md p-0.5 text-white/30 hover:text-white/60 transition-colors"
                      onClick={() => setQuery("")}
                    >
                      <X size={14} />
                    </button>
                  )}
                  <kbd className="flex items-center gap-1 rounded-lg border border-white/[0.10] bg-white/[0.05] px-2 py-1 text-[11px] text-white/30">
                    <Command size={11} />K
                  </kbd>
                </div>
              </div>

              {}
              <div ref={listRef} className="max-h-80 overflow-y-auto overscroll-contain p-2 scrollbar-thin">
                {filtered.length === 0 ? (
                  <div className="py-10 text-center text-sm text-white/25">
                    No results for &ldquo;{query}&rdquo;
                  </div>
                ) : (
                  Array.from(groups.entries()).map(([group, groupActions]) => (
                    <div key={group} className="mb-1">
                      <p className="mb-1 px-3 pt-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/25">
                        {group}
                      </p>
                      {groupActions.map((action) => {
                        const idx = globalIndex++;
                        const isSelected = idx === selectedIndex;
                        return (
                          <motion.button
                            key={action.id}
                            data-index={idx}
                            className={cn(
                              "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-100",
                              "focus-visible:outline-none",
                              isSelected
                                ? "bg-purple-500/20 text-white"
                                : "text-white/75 hover:bg-white/[0.06] hover:text-white"
                            )}
                            onMouseEnter={() => setSelectedIndex(idx)}
                            onClick={() => {
                              action.onSelect();
                              onOpenChange?.(false);
                            }}
                          >
                            {}
                            <span
                              className={cn(
                                "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-sm",
                                "bg-white/[0.06] border border-white/[0.08]",
                                isSelected && "bg-purple-500/20 border-purple-400/20"
                              )}
                            >
                              {action.icon}
                            </span>

                            <span className="flex-1 text-sm font-medium">{action.label}</span>

                            {}
                            {action.shortcut && (
                              <kbd className="shrink-0 rounded-lg border border-white/[0.10] bg-white/[0.04] px-2 py-0.5 text-[11px] text-white/30">
                                {action.shortcut}
                              </kbd>
                            )}

                            {isSelected && (
                              <ArrowRight size={14} className="shrink-0 text-purple-400" />
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {}
              <div className="flex items-center gap-4 border-t border-white/[0.06] px-4 py-2.5">
                <span className="flex items-center gap-1 text-[11px] text-white/25">
                  <kbd className="rounded border border-white/[0.10] bg-white/[0.04] px-1.5 py-0.5">↑↓</kbd>
                  navigate
                </span>
                <span className="flex items-center gap-1 text-[11px] text-white/25">
                  <kbd className="rounded border border-white/[0.10] bg-white/[0.04] px-1.5 py-0.5">↵</kbd>
                  select
                </span>
                <span className="flex items-center gap-1 text-[11px] text-white/25">
                  <kbd className="rounded border border-white/[0.10] bg-white/[0.04] px-1.5 py-0.5">esc</kbd>
                  close
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default CommandSheet;
