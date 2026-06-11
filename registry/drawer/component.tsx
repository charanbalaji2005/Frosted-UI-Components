"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position?: "bottom" | "right" | "left";
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Drawer = ({
  isOpen,
  onClose,
  position = "bottom",
  title,
  children,
  className,
}: DrawerProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const variants = {
    bottom: {
      initial: { y: "100%", x: 0 },
      animate: { y: 0, x: 0 },
      exit: { y: "100%", x: 0 },
      styles: "bottom-0 left-0 right-0 max-h-[85vh] rounded-t-[32px] border-t",
    },
    right: {
      initial: { x: "100%", y: 0 },
      animate: { x: 0, y: 0 },
      exit: { x: "100%", y: 0 },
      styles: "top-0 right-0 bottom-0 w-full max-w-md rounded-l-[32px] border-l",
    },
    left: {
      initial: { x: "-100%", y: 0 },
      animate: { x: 0, y: 0 },
      exit: { x: "-100%", y: 0 },
      styles: "top-0 left-0 bottom-0 w-full max-w-md rounded-r-[32px] border-r",
    },
  }[position];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer Body */}
          <motion.div
            initial={variants.initial}
            animate={variants.animate}
            exit={variants.exit}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className={cn(
              "absolute z-10 overflow-hidden flex flex-col text-white",
              "backdrop-blur-2xl saturate-[190%] bg-white/[0.06] border-white/[0.12]",
              "shadow-[0_-8px_32px_rgba(0,0,0,0.37)] p-6",
              variants.styles,
              className
            )}
          >
            {/* Top Shine */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none rounded-[inherit]" />

            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.05] relative z-10">
              <h2 className="text-lg font-bold">{title || "Menu"}</h2>
              <button
                onClick={onClose}
                className="rounded-full p-1 bg-white/5 hover:bg-white/10 border border-white/5 transition-all"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content Scroll Area */}
            <div className="flex-1 overflow-y-auto relative z-10 text-white/80">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
