"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { springs, tweens } from "@/lib/animations";

const glassBase = [
  "backdrop-blur-2xl saturate-[180%]",
  "before:absolute before:inset-0 before:rounded-[inherit]",
  "before:bg-gradient-to-b before:from-white/[0.08] before:to-transparent",
  "before:pointer-events-none",
].join(" ");

export function GlassReasoningBubble({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(
      "relative max-w-lg rounded-3xl rounded-tl-sm p-5",
      glassBase,
      "bg-white/[0.04] border border-white/[0.08] shadow-[8px_8px_32px_rgba(0,0,0,0.3)]",
      className
    )}>
      <div className="absolute top-0 -left-2 w-4 h-4 bg-white/[0.04] border-t border-l border-white/[0.08] transform -skew-x-[30deg] -z-10" />
      <div className="text-sm text-white/80 leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}
