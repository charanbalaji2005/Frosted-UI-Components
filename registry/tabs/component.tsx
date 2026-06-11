"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultTabId?: string;
  className?: string;
}

export const Tabs = ({ items, defaultTabId, className }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTabId || items[0]?.id);

  return (
    <div className={cn("space-y-4 w-full", className)}>
      {/* Tab Headers */}
      <div
        className={cn(
          "inline-flex p-1 rounded-2xl",
          "backdrop-blur-xl bg-white/[0.04] border border-white/[0.08]"
        )}
      >
        {items.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative py-2 px-4 text-sm font-medium rounded-xl transition-all duration-300 text-white/60 hover:text-white focus:outline-none"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab-indicator"
                  className="absolute inset-0 rounded-[inherit] bg-white/[0.08] border border-white/[0.1] shadow-inner"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Panels */}
      <div className="relative overflow-hidden min-h-[100px] text-white/80">
        <AnimatePresence mode="wait">
          {items.map((tab) => {
            if (tab.id !== activeTab) return null;

            return (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {tab.content}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
