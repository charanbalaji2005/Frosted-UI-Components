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

export function GlassWorkflowNode({
  title,
  type = "default",
  active = false,
  className,
}: {
  title: string;
  type?: "input" | "process" | "output" | "default";
  active?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={cn(
        "relative rounded-xl px-5 py-3 min-w-[140px] text-center flex items-center justify-center gap-3",
        glassBase,
        active ? "bg-purple-500/[0.15] border-purple-400/30" : "bg-white/[0.05] border-white/[0.1]",
        "border shadow-lg",
        className
      )}
    >
      {type !== "input" && (
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/20 ring-4 ring-[#07070a]" />
      )}
      <span className={cn("text-xs font-semibold tracking-wide", active ? "text-purple-100" : "text-white/70")}>
        {title}
      </span>
      {type !== "output" && (
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/20 ring-4 ring-[#07070a]" />
      )}
      {active && (
        <motion.div
          className="absolute inset-0 rounded-xl border border-purple-400/50"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
}
