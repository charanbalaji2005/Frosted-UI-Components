"use client";

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  rating?: number;
}

export interface TestimonialsProps {
  items: TestimonialItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const Testimonials = ({ items, title, subtitle, className }: TestimonialsProps) => {
  return (
    <section className={cn("py-12 text-white max-w-6xl mx-auto px-4", className)}>
      {/* Header */}
      {(title || subtitle) && (
        <div className="text-center mb-12 space-y-4">
          {title && <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>}
          {subtitle && <p className="text-white/50 text-base max-w-xl mx-auto">{subtitle}</p>}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            className={cn(
              "relative flex flex-col justify-between rounded-3xl p-6 transition-all duration-500",
              "backdrop-blur-xl saturate-[180%] bg-white/[0.04] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
            )}
          >
            {/* Glossy shine */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-[inherit]" />

            <div>
              {/* Star Rating */}
              {item.rating && (
                <div className="flex gap-1 mb-4 text-amber-300">
                  {Array.from({ length: item.rating }).map((_, rIdx) => (
                    <Star key={rIdx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              )}

              {/* Quote */}
              <p className="text-white/80 text-sm leading-relaxed italic mb-6">
                "{item.quote}"
              </p>
            </div>

            {/* Author details */}
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/[0.05]">
              {item.avatar ? (
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white/80 text-xs border border-white/20">
                  {item.author.substring(0, 2).toUpperCase()}
                </div>
              )}
              <div className="space-y-0.5">
                <div className="font-semibold text-sm text-white">{item.author}</div>
                <div className="text-xs text-white/50">{item.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
