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

export function GlassThinkingPanel({
  steps = [],
  currentStepIndex = 0,
  className,
}: {
  steps: { text: string; status: "pending" | "active" | "done" }[];
  currentStepIndex?: number;
  className?: string;
}) {
  return (
    <div className={cn("relative rounded-3xl p-6 overflow-hidden", glassBase, "bg-[#07070a]/40 border border-white/[0.08]", className)}>
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-purple-500/30 blur-3xl rounded-full pointer-events-none"
      />
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc] animate-pulse" />
        <h4 className="text-sm font-medium text-white/80">Agent Thinking Process</h4>
      </div>
      <div className="flex flex-col gap-3 relative">
        <div className="absolute left-[9px] top-4 bottom-4 w-[1px] bg-white/[0.05]" />
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-4 relative z-10">
            <div className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center shrink-0 border mt-0.5 transition-colors duration-500",
              step.status === "done" ? "bg-purple-500/20 border-purple-500/50" :
              step.status === "active" ? "bg-white/[0.1] border-white/30" :
              "bg-black/20 border-white/[0.05]"
            )}>
              {step.status === "active" && (
                <motion.div animate={{ scale: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 bg-white/80 rounded-full" />
              )}
              {step.status === "done" && (
                <svg className="w-3 h-3 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: step.status === "pending" ? 0.4 : 1, x: 0 }}
              className="py-0.5"
            >
              <p className={cn("text-xs leading-relaxed", step.status === "active" ? "text-white/90" : "text-white/50")}>
                {step.text}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
