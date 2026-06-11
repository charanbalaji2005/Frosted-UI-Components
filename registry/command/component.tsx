"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, Command as CmdIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CommandItem {
  id: string;
  label: string;
  category: string;
  onSelect: () => void;
}

export interface CommandProps {
  isOpen: boolean;
  onClose: () => void;
  items: CommandItem[];
  placeholder?: string;
  className?: string;
}

export const Command = ({
  isOpen,
  onClose,
  items,
  placeholder = "Search commands...",
  className,
}: CommandProps) => {
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Filter items
  const filtered = items.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setSearch("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].onSelect();
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  // Group by category
  const categories: Record<string, typeof filtered> = {};
  filtered.forEach((item) => {
    if (!categories[item.category]) categories[item.category] = [];
    categories[item.category].push(item);
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[15vh]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
          />

          {/* Dialog Body */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={cn(
              "relative w-full max-w-lg overflow-hidden rounded-3xl",
              "backdrop-blur-2xl saturate-[190%] bg-white/[0.06] border border-white/[0.12]",
              "shadow-[0_24px_64px_rgba(0,0,0,0.5)] flex flex-col text-white",
              className
            )}
          >
            {/* Input Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.08] relative z-10">
              <Search className="h-5 w-5 text-white/40" />
              <input
                ref={inputRef}
                type="text"
                placeholder={placeholder}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full bg-transparent border-0 p-0 text-sm text-white focus:outline-none placeholder-white/40 focus:ring-0"
              />
              <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-0.5 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-white/40">
                <span className="text-xs">ESC</span>
              </kbd>
            </div>

            {/* List */}
            <div
              ref={listRef}
              className="flex-1 max-h-[300px] overflow-y-auto p-2 relative z-10 space-y-3"
            >
              {filtered.length === 0 ? (
                <div className="py-6 text-center text-sm text-white/40">No results found.</div>
              ) : (
                Object.entries(categories).map(([catName, catItems]) => (
                  <div key={catName}>
                    <div className="px-3 py-1.5 text-xs font-semibold text-white/30 tracking-wider uppercase">
                      {catName}
                    </div>
                    <div className="space-y-0.5 mt-1">
                      {catItems.map((item) => {
                        const globalIndex = filtered.findIndex((f) => f.id === item.id);
                        const isSelected = globalIndex === selectedIndex;

                        return (
                          <div
                            key={item.id}
                            onClick={() => {
                              item.onSelect();
                              onClose();
                            }}
                            className={cn(
                              "flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 text-sm",
                              isSelected
                                ? "bg-white/10 text-white border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                                : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
                            )}
                          >
                            <CmdIcon className="h-4 w-4 opacity-50" />
                            <span className="flex-1 font-medium">{item.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Command;
