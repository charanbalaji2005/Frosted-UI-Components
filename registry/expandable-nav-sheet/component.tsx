"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { springs, sheetVariants, backdropVariants } from "../lib/animations";
import type { ExpandableNavSheetProps } from "../types";

export function ExpandableNavSheet({
  items,
  menuItems,
  defaultExpanded = false,
  loginLabel = "Log In",
  signupLabel = "Sign Up",
  onLogin,
  onSignup,
  expandTriggerId,
  className,
}: ExpandableNavSheetProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [activeId, setActiveId] = useState(
    items.find((i) => i.active)?.id ?? items[0]?.id
  );

  const triggerItem = expandTriggerId ?? items[items.length - 1]?.id;

  const handleItemClick = (id: string) => {
    const item = items.find((i) => i.id === id);
    if (id === triggerItem) {
      setExpanded((prev) => !prev);
    } else {
      setActiveId(id);
      setExpanded(false);
      item?.onClick?.();
    }
  };

  return (
    <div className={cn("relative", className)}>
      {}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setExpanded(false)}
          />
        )}
      </AnimatePresence>

      {}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
        <div className="w-full max-w-lg">

          {}
          <AnimatePresence>
            {expanded && (
              <motion.div
                className={cn(
                  "overflow-hidden rounded-t-3xl",
                  "backdrop-blur-2xl saturate-[180%]",
                  "bg-[rgba(10,10,22,0.88)]",
                  "border border-white/[0.10] border-b-0",
                  "shadow-[0_-20px_80px_rgba(0,0,0,0.6)]",
                  "before:absolute before:inset-0 before:rounded-t-3xl",
                  "before:bg-gradient-to-b before:from-white/[0.05] before:to-transparent",
                  "before:pointer-events-none"
                )}
                variants={sheetVariants}
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
              >
                {}
                <div className="flex justify-center pt-3 pb-1">
                  <div className="h-1 w-10 rounded-full bg-white/20" />
                </div>

                <div className="px-6 pb-4 pt-2">
                  {}
                  <p className="mb-4 text-[11px] font-bold tracking-[0.1em] uppercase text-white/30">
                    Menu
                  </p>

                  {}
                  <nav aria-label="Expanded menu">
                    {menuItems.map((item, i) => (
                      <motion.button
                        key={item.id}
                        className={cn(
                          "flex w-full items-center justify-between py-3",
                          "border-b border-white/[0.06] last:border-none",
                          "text-[15px] text-white/75 transition-colors duration-150",
                          "hover:text-white focus-visible:text-white",
                          "focus-visible:outline-none"
                        )}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...springs.smooth, delay: i * 0.04 }}
                        onClick={() => item.onClick?.()}
                      >
                        <span className="flex items-center gap-3">
                          {item.icon && (
                            <span className="text-base opacity-60">{item.icon}</span>
                          )}
                          {item.label}
                        </span>
                        <span className="text-white/20">›</span>
                      </motion.button>
                    ))}
                  </nav>

                  {}
                  <div className="mt-5 flex gap-3">
                    <motion.button
                      className={cn(
                        "flex-1 rounded-2xl py-3 text-sm font-semibold",
                        "bg-white/[0.06] border border-white/[0.10]",
                        "text-white/80 backdrop-blur-sm",
                        "transition-colors hover:bg-white/[0.10]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                      )}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...springs.smooth, delay: menuItems.length * 0.04 }}
                      onClick={onLogin}
                    >
                      {loginLabel}
                    </motion.button>
                    <motion.button
                      className={cn(
                        "flex-1 rounded-2xl py-3 text-sm font-semibold",
                        "bg-gradient-to-br from-purple-500/80 to-blue-500/80",
                        "text-white shadow-[0_4px_20px_rgba(100,80,255,0.35)]",
                        "ring-1 ring-white/10",
                        "transition-all hover:shadow-[0_6px_30px_rgba(100,80,255,0.5)]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                      )}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...springs.smooth, delay: menuItems.length * 0.04 + 0.04 }}
                      onClick={onSignup}
                    >
                      {signupLabel}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {}
          <div
            className={cn(
              "relative flex items-center justify-around px-4 py-3",
              "backdrop-blur-2xl saturate-[180%]",
              "bg-[rgba(10,10,22,0.85)]",
              "border border-white/[0.10]",
              expanded ? "rounded-none border-t border-white/[0.07]" : "rounded-3xl",
              "shadow-[0_-4px_40px_rgba(0,0,0,0.3)]",
              "transition-[border-radius] duration-300",

              "before:absolute before:inset-0",
              expanded ? "before:rounded-none" : "before:rounded-3xl",
              "before:bg-gradient-to-b before:from-white/[0.06] before:to-transparent",
              "before:pointer-events-none"
            )}
          >
            {items.map((item) => {
              const isActive = activeId === item.id;
              const isExpander = item.id === triggerItem;
              const isOpenExpander = isExpander && expanded;

              return (
                <button
                  key={item.id}
                  className={cn(
                    "relative flex flex-col items-center gap-1 p-2 rounded-2xl",
                    "transition-colors duration-150",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                    isActive ? "text-purple-400" : "text-white/40 hover:text-white/70",
                    isOpenExpander && "text-purple-400"
                  )}
                  onClick={() => handleItemClick(item.id)}
                  aria-label={item.label}
                  aria-expanded={isExpander ? expanded : undefined}
                >
                  <motion.span
                    className="text-xl leading-none"
                    animate={isOpenExpander ? { rotate: 45, scale: 1.1 } : { rotate: 0, scale: 1 }}
                    transition={springs.snap}
                  >
                    {item.icon}
                  </motion.span>

                  {}
                  <span className="h-1 flex items-center justify-center">
                    {isActive && (
                      <motion.span
                        className="block h-1 w-1 rounded-full bg-purple-400"
                        layoutId="sheet-active"
                        transition={springs.bouncy}
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandableNavSheet;
