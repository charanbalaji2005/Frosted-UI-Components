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

export function GlassAgentCard({
  name,
  role,
  status = "idle",
  avatar,
  tools = [],
  className,
}: {
  name: string;
  role: string;
  status?: "idle" | "thinking" | "executing";
  avatar?: React.ReactNode;
  tools?: string[];
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={springs.smooth}
      className={cn(
        "relative flex flex-col gap-4 rounded-3xl p-5",
        glassBase,
        "bg-white/[0.05] border border-white/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 rounded-full bg-white/[0.1] border border-white/[0.15] flex items-center justify-center text-white/80 overflow-hidden">
          {avatar}
          {status === "thinking" && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(168,85,247,0.4)_360deg)]"
            />
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-base">{name}</h3>
          <p className="text-white/50 text-xs">{role}</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 border border-white/[0.05]">
          <motion.div
            animate={
              status === "thinking"
                ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }
                : status === "executing"
                ? { scale: [1, 1.2, 1] }
                : {}
            }
            transition={{ duration: 1.5, repeat: Infinity }}
            className={cn(
              "w-2 h-2 rounded-full",
              status === "idle" && "bg-white/30",
              status === "thinking" && "bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.8)]",
              status === "executing" && "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
            )}
          />
          <span className="text-[10px] text-white/60 font-medium uppercase tracking-wider">
            {status}
          </span>
        </div>
      </div>
      
      {tools.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.05]">
          {tools.map((tool) => (
            <span key={tool} className="px-2 py-1 rounded-md bg-white/[0.06] border border-white/[0.05] text-[10px] text-white/60">
              {tool}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
