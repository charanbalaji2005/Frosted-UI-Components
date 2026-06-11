"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavbarLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavbarProps {
  logo?: React.ReactNode;
  links: NavbarLink[];
  action?: React.ReactNode;
  className?: string;
}

export const Navbar = ({ logo, links, action, className }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={cn(
        "sticky top-4 z-40 mx-auto w-full max-w-7xl px-4 md:px-8",
        className
      )}
    >
      <div
        className={cn(
          "relative flex items-center justify-between py-3 px-6 rounded-3xl",
          "backdrop-blur-xl saturate-[180%] bg-white/[0.06] border border-white/[0.1]",
          "shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
        )}
      >
        {/* Shine Layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none rounded-[inherit]" />

        {/* Logo */}
        <div className="flex items-center gap-2 relative z-10 text-white font-bold text-lg">
          {logo || <span>Frosted UI</span>}
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 relative z-10">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className={cn(
                "relative text-sm transition-all duration-300 py-1.5 px-3 rounded-full text-white/70 hover:text-white hover:bg-white/5",
                link.active && "text-white bg-white/10"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block relative z-10">{action}</div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-10 rounded-full p-2 bg-white/5 border border-white/10 text-white"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={cn(
              "absolute top-full left-4 right-4 mt-2 p-6 rounded-3xl md:hidden",
              "backdrop-blur-2xl saturate-[180%] bg-black/80 border border-white/[0.1]",
              "shadow-[0_16px_48px_rgba(0,0,0,0.4)] flex flex-col gap-4 text-white"
            )}
          >
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium text-white/75 hover:text-white py-1 px-2 rounded-xl transition-all",
                  link.active && "text-white bg-white/10"
                )}
              >
                {link.label}
              </a>
            ))}
            {action && <div className="pt-2 border-t border-white/5">{action}</div>}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
