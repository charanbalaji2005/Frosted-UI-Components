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

export function GlassKnowledgeGraph({
  nodes = [],
  className,
}: {
  nodes: { id: string; label: string; x: number; y: number }[];
  className?: string;
}) {
  return (
    <div className={cn(
      "relative w-full h-64 rounded-3xl overflow-hidden",
      glassBase,
      "bg-black/20 border border-white/[0.08]",
      className
    )}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none text-white/[0.05]">
        {/* Simple decorative connections */}
        {nodes.length > 1 && nodes.map((n, i) => {
          if (i === 0) return null;
          const prev = nodes[i - 1];
          return (
            <line
              key={`line-${i}`}
              x1={`${prev.x}%`} y1={`${prev.y}%`}
              x2={`${n.x}%`} y2={`${n.y}%`}
              stroke="currentColor"
              strokeWidth="1"
            />
          );
        })}
      </svg>
      {nodes.map((n) => (
        <motion.div
          key={n.id}
          className="absolute w-20 text-center transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-8 h-8 mx-auto rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-md flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <div className="w-2 h-2 rounded-full bg-white/40" />
          </div>
          <span className="mt-2 block text-[10px] text-white/60 font-medium">{n.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
