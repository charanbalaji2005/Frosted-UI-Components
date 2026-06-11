"use client";

import { Home, Search, Mail, Music, User } from "lucide-react";
import { DockBar } from "@/components/dock-bar";

export default function DockBarDemo() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="absolute left-1/4 top-1/3 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl" />
      <p className="text-sm text-white/30">Hover over icons to magnify</p>
      <DockBar
        items={[
          { id: "home",    label: "Home",   icon: <Home size={24} />,   active: true },
          { id: "search",  label: "Search", icon: <Search size={24} /> },
          { id: "mail",    label: "Mail",   icon: <Mail size={24} />,   badge: 5 },
          { id: "music",   label: "Music",  icon: <Music size={24} /> },
          { id: "profile", label: "Me",     icon: <User size={24} /> },
        ]}
        magnify
        showDots
        fixed={false}
        style={{ position: "absolute", bottom: 24 }}
      />
    </div>
  );
}
