"use client";

import { Home, Search, Heart, User } from "lucide-react";
import { PillBar } from "@/components/pill-bar";

export default function PillBarDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="absolute left-1/3 top-1/4 h-48 w-48 rounded-full bg-indigo-600/25 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-40 w-40 rounded-full bg-purple-600/20 blur-3xl" />
      <PillBar
        items={[
          { id: "home",    label: "Home",   icon: <Home size={18} />,   active: true },
          { id: "search",  label: "Search", icon: <Search size={18} /> },
          { id: "saved",   label: "Saved",  icon: <Heart size={18} />,  badge: 2 },
          { id: "profile", label: "Me",     icon: <User size={18} /> },
        ]}
        showLabels
        fixed={false}
        style={{ position: "absolute", bottom: 24 }}
      />
    </div>
  );
}
