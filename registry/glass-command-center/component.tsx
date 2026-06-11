"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { springs, tweens } from "@/lib/animations";
import { Terminal, Activity, Network, Shield, Cpu } from "lucide-react";

const glassBase = [
  "backdrop-blur-2xl saturate-[180%]",
  "before:absolute before:inset-0 before:rounded-[inherit]",
  "before:bg-gradient-to-b before:from-white/[0.08] before:to-transparent",
  "before:pointer-events-none",
].join(" ");

export function GlassCommandCenter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(
      "w-full h-full rounded-[40px] p-2 relative overflow-hidden flex flex-col",
      glassBase,
      "bg-[#0a0a0f]/80 border border-white/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.8)]",
      className
    )}>
      {}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPPHBhdGggZD0iTTAgNDBoNDBNNDAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] pointer-events-none" />
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(168,85,247,0.15)_360deg)] pointer-events-none" 
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {}
      <div className="relative z-10 flex flex-1 overflow-hidden rounded-[32px] bg-black/40 border border-white/[0.05] backdrop-blur-3xl">
        
        {}
        <div className="w-[72px] md:w-64 border-r border-white/[0.05] bg-white/[0.02] flex flex-col p-4 shrink-0">
          <div className="flex items-center gap-3 mb-8 px-1 md:px-0 justify-center md:justify-start">
            <div className="w-10 h-10 md:w-8 md:h-8 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <Terminal size={16} className="text-white" />
            </div>
            <span className="hidden md:block font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 tracking-wide">
              NEXUS
            </span>
          </div>

          <nav className="flex flex-col gap-2 flex-1">
            {[
              { id: 'dash', icon: <Activity size={18} />, label: "Dashboard", active: true },
              { id: 'nodes', icon: <Network size={18} />, label: "Neural Nodes" },
              { id: 'sec', icon: <Shield size={18} />, label: "Security Logs" },
              { id: 'sys', icon: <Cpu size={18} />, label: "System Core" },
            ].map((item) => (
              <button key={item.id} className={cn(
                "flex items-center justify-center md:justify-start gap-3 px-3 py-3 rounded-xl transition-all duration-300 group",
                item.active ? "bg-white/[0.08] border border-white/[0.05]" : "hover:bg-white/[0.04]"
              )}>
                <span className={cn(item.active ? "text-purple-400" : "text-white/40 group-hover:text-white/80")}>
                  {item.icon}
                </span>
                <span className={cn(
                  "hidden md:block text-sm font-medium",
                  item.active ? "text-white/90" : "text-white/50 group-hover:text-white/80"
                )}>
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {}
        <div className="flex-1 flex flex-col relative overflow-hidden">
          {}
          <header className="h-16 shrink-0 border-b border-white/[0.05] flex items-center justify-between px-6 bg-white/[0.01]">
            <div className="flex items-center gap-3">
              <h2 className="text-sm font-medium text-white/80 hidden sm:block">Command Overview</h2>
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">Online</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-[10px] text-purple-300 font-bold z-20 backdrop-blur-md">A1</div>
                <div className="w-7 h-7 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-[10px] text-blue-300 font-bold z-10 backdrop-blur-md">A2</div>
                <div className="w-7 h-7 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-[10px] text-rose-300 font-bold z-0 backdrop-blur-md">A3</div>
              </div>
            </div>
          </header>

          {}
          <div className="flex-1 p-6 overflow-y-auto scrollbar-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
