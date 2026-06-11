"use client";

import { Home, Search, Plus, Heart, User } from "lucide-react";
import { FloatingIslandBar } from "@/components/floating-island-bar";

export default function FloatingIslandBarDemo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
      {}
      <div className="absolute left-1/4 top-1/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/30 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-48 w-48 rounded-full bg-blue-600/20 blur-3xl" />

      {}
      <p className="text-sm font-medium text-white/40">
        Hover and click the navigation below
      </p>

      {}
      <FloatingIslandBar
        items={[
          { id: "home", label: "Home", icon: <Home size={20} />, active: true },
          { id: "search", label: "Search", icon: <Search size={20} /> },
          { id: "saved", label: "Saved", icon: <Heart size={20} />, badge: 3 },
          { id: "profile", label: "Profile", icon: <User size={20} /> },
        ]}
        centerAction={{
          icon: <Plus size={22} />,
          onClick: () => console.log("Center action"),
          label: "Create new",
        }}
        fixed={false}
        style={{ position: "absolute", bottom: 24 }}
      />
    </div>
  );
}
