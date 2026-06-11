"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HeroProps {
  title: string;
  highlightText?: string;
  description: string;
  primaryCtaText: string;
  secondaryCtaText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

export const Hero = ({
  title,
  highlightText,
  description,
  primaryCtaText,
  secondaryCtaText,
  onPrimaryClick,
  onSecondaryClick,
  className,
}: HeroProps) => {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden min-h-[80vh] flex flex-col justify-center items-center text-center px-4 md:px-8",
        className
      )}
    >
      {/* Background decoration (glowing glass blobs) */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-indigo-500/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-fuchsia-500/25 blur-[120px] pointer-events-none" />

      {/* Floating reflection bubbles to show glass backdrop-blur capability */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-[30%] right-[20%] w-16 h-16 rounded-full backdrop-blur-md bg-white/[0.05] border border-white/[0.1] shadow-lg pointer-events-none hidden md:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[25%] left-[20%] w-24 h-24 rounded-full backdrop-blur-lg bg-white/[0.03] border border-white/[0.08] shadow-lg pointer-events-none hidden md:block"
      />

      {/* Hero Content wrapper */}
      <div className="relative z-10 max-w-4xl space-y-6">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight"
        >
          {title}{" "}
          {highlightText && (
            <span className="block mt-2 bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
              {highlightText}
            </span>
          )}
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          {/* Primary CTA */}
          <button
            onClick={onPrimaryClick}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 bg-white text-black hover:bg-white/95 hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] active:scale-95"
          >
            <span>{primaryCtaText}</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* Secondary CTA */}
          {secondaryCtaText && (
            <button
              onClick={onSecondaryClick}
              className="px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 backdrop-blur-xl saturate-[180%] bg-white/[0.06] border border-white/[0.12] text-white hover:bg-white/[0.12] active:scale-95"
            >
              {secondaryCtaText}
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
