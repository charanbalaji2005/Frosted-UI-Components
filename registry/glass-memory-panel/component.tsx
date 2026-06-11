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

export function GlassMemoryPanel({
  memories = [],
  className,
}: {
  memories: { id: string; content: string; type: "short" | "long" }[];
  className?: string;
}) {
  return (
    <div className={cn("w-72 rounded-3xl flex flex-col overflow-hidden", glassBase, "bg-[#07070a]/60 border border-white/[0.08]", className)}>
      <div className="p-4 border-b border-white/[0.05] bg-white/[0.02]">
        <h3 className="text-xs font-bold text-white/70 uppercase tracking-widest">Context Memory</h3>
      </div>
      <div className="p-4 flex flex-col gap-3 flex-1 overflow-y-auto">
        {memories.map((m) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] relative group"
          >
            <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="text-[9px] text-white/40 font-mono mb-1 block uppercase">{m.type} TERM</span>
            <p className="text-xs text-white/70 leading-snug">{m.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
