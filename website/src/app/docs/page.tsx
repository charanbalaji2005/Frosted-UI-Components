"use client";

import React, { useState, useEffect } from "react";
import { 
  Search, Sun, Moon, Copy, Check, Terminal as TermIcon, 
  ExternalLink, ChevronRight, Menu, HelpCircle, Code, Eye,
  Play, RefreshCw, Send, Radio, Compass, Maximize2, Zap, LayoutGrid,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// ─── Actual Nebula UI Registry Components (35 total) ─────────────────────────
const componentsList = [
  // UI Primitives
  { id: "accordion",               name: "Accordion",               category: "UI Primitives",   deps: ["framer-motion","lucide-react","clsx","tailwind-merge"] },
  { id: "button",                  name: "Button",                  category: "UI Primitives",   deps: ["framer-motion","clsx","tailwind-merge"] },
  { id: "card",                    name: "Card",                    category: "UI Primitives",   deps: ["framer-motion","clsx","tailwind-merge"] },
  { id: "tabs",                    name: "Tabs",                    category: "UI Primitives",   deps: ["framer-motion","clsx","tailwind-merge"] },
  { id: "forms",                   name: "Forms",                   category: "UI Primitives",   deps: ["clsx","tailwind-merge"] },
  { id: "spotlight",               name: "Spotlight",               category: "UI Primitives",   deps: ["framer-motion","clsx","tailwind-merge"] },
  // Overlays & Dialogs
  { id: "dialog",                  name: "Dialog",                  category: "Overlays",        deps: ["framer-motion","lucide-react","clsx","tailwind-merge"] },
  { id: "modal",                   name: "Modal",                   category: "Overlays",        deps: ["framer-motion","lucide-react","clsx","tailwind-merge"] },
  { id: "drawer",                  name: "Drawer",                  category: "Overlays",        deps: ["framer-motion","lucide-react","clsx","tailwind-merge"] },
  { id: "command",                 name: "Command",                 category: "Overlays",        deps: ["framer-motion","lucide-react","clsx","tailwind-merge"] },
  { id: "command-sheet",           name: "Command Sheet",           category: "Overlays",        deps: ["framer-motion","lucide-react","class-variance-authority","clsx","tailwind-merge"] },
  // Navigation
  { id: "navbar",                  name: "Navbar",                  category: "Navigation",      deps: ["framer-motion","lucide-react","clsx","tailwind-merge"] },
  { id: "arc-bar",                 name: "Arc Bar",                 category: "Navigation",      deps: ["framer-motion","lucide-react","class-variance-authority","clsx","tailwind-merge"] },
  { id: "crystal-bar",             name: "Crystal Bar",             category: "Navigation",      deps: ["framer-motion","lucide-react","class-variance-authority","clsx","tailwind-merge"] },
  { id: "pebble-bar",              name: "Pebble Bar",              category: "Navigation",      deps: ["framer-motion","lucide-react","class-variance-authority","clsx","tailwind-merge"] },
  { id: "pill-bar",                name: "Pill Bar",                category: "Navigation",      deps: ["framer-motion","lucide-react","class-variance-authority","clsx","tailwind-merge"] },
  { id: "ribbon-bar",              name: "Ribbon Bar",              category: "Navigation",      deps: ["framer-motion","lucide-react","class-variance-authority","clsx","tailwind-merge"] },
  { id: "floating-island-bar",     name: "Floating Island Bar",     category: "Navigation",      deps: ["framer-motion","lucide-react","class-variance-authority","clsx","tailwind-merge"] },
  { id: "floating-command-bar",    name: "Floating Command Bar",    category: "Navigation",      deps: ["framer-motion","lucide-react","class-variance-authority","clsx","tailwind-merge"] },
  { id: "floating-search-orb",     name: "Floating Search Orb",    category: "Navigation",      deps: ["framer-motion","lucide-react","class-variance-authority","clsx","tailwind-merge"] },
  { id: "floating-action-button",  name: "Floating Action Button",  category: "Navigation",      deps: ["framer-motion","lucide-react","class-variance-authority","clsx","tailwind-merge"] },
  { id: "expandable-nav-sheet",    name: "Expandable Nav Sheet",    category: "Navigation",      deps: ["framer-motion","lucide-react","clsx","tailwind-merge"] },
  { id: "profile-sheet",          name: "Profile Sheet",           category: "Navigation",      deps: ["framer-motion","lucide-react","class-variance-authority","clsx","tailwind-merge"] },
  { id: "app-launcher",            name: "App Launcher",            category: "Navigation",      deps: ["framer-motion","lucide-react","class-variance-authority","clsx","tailwind-merge"] },
  // Sections / Page Blocks
  { id: "hero",                    name: "Hero",                    category: "Page Blocks",     deps: ["framer-motion","lucide-react","clsx","tailwind-merge"] },
  { id: "pricing",                 name: "Pricing",                 category: "Page Blocks",     deps: ["framer-motion","lucide-react","clsx","tailwind-merge"] },
  { id: "testimonials",            name: "Testimonials",            category: "Page Blocks",     deps: ["framer-motion","lucide-react","clsx","tailwind-merge"] },
  { id: "dashboard",              name: "Dashboard",               category: "Page Blocks",     deps: ["framer-motion","lucide-react","clsx","tailwind-merge"] },
  // AI / Agent Components
  { id: "glass-agent-card",        name: "Glass Agent Card",        category: "AI Components",   deps: ["framer-motion","clsx","tailwind-merge"] },
  { id: "glass-command-center",    name: "Glass Command Center",    category: "AI Components",   deps: ["framer-motion","lucide-react","clsx","tailwind-merge"] },
  { id: "glass-knowledge-graph",   name: "Glass Knowledge Graph",   category: "AI Components",   deps: ["framer-motion","clsx","tailwind-merge"] },
  { id: "glass-memory-panel",      name: "Glass Memory Panel",      category: "AI Components",   deps: ["framer-motion","clsx","tailwind-merge"] },
  { id: "glass-reasoning-bubble",  name: "Glass Reasoning Bubble",  category: "AI Components",   deps: ["framer-motion","clsx","tailwind-merge"] },
  { id: "glass-thinking-panel",    name: "Glass Thinking Panel",    category: "AI Components",   deps: ["framer-motion","clsx","tailwind-merge"] },
  { id: "glass-workflow-node",     name: "Glass Workflow Node",     category: "AI Components",   deps: ["framer-motion","clsx","tailwind-merge"] },
];

const GITHUB_BASE = "https://raw.githubusercontent.com/charanbalaji2005/Frosted-UI-Components/main/registry";

// ─── Dynamic Code Snippet Generator ──────────────────────────────────────────
const CODE_SNIPPETS: Record<string, string> = {};

const getCustomSnippet = (id: string, name: string) => {
  if (id === "button") {
    return `"use client";
import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  glassOpacity?: number;
  blurAmount?: number;
  borderOpacity?: number;
}

export function GlassButton({ 
  glassOpacity = 0.15, 
  blurAmount = 12, 
  borderOpacity = 0.15,
  children, 
  className,
  ...props 
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        backgroundColor: \`rgba(255, 255, 255, \${glassOpacity})\`,
        backdropFilter: \`blur(\${blurAmount}px)\`,
        borderColor: \`rgba(255, 255, 255, \${borderOpacity})\`,
      }}
      className="px-4 py-2 rounded-xl border font-semibold text-xs shadow-md transition-all"
      {...props}
    >
      {children}
    </motion.button>
  );
}`;
  }
  if (id === "card") {
    return `"use client";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  glassOpacity?: number;
  blurAmount?: number;
  borderOpacity?: number;
}

export function GlassCard({ 
  title, 
  description, 
  children,
  glassOpacity = 0.15,
  blurAmount = 12,
  borderOpacity = 0.15
}: CardProps) {
  return (
    <div 
      style={{
        backgroundColor: \`rgba(255, 255, 255, \${glassOpacity})\`,
        backdropFilter: \`blur(\${blurAmount}px)\`,
        borderColor: \`rgba(255, 255, 255, \${borderOpacity})\`,
      }}
      className="p-5 rounded-xl border shadow-xl w-full max-w-sm space-y-3 text-current"
    >
      <div>
        <h3 className="font-bold text-xs">{title}</h3>
        <p className="text-[10px] opacity-50 mt-0.5">{description}</p>
      </div>
      <div className="text-xs leading-normal opacity-85">
        {children}
      </div>
    </div>
  );
}`;
  }
  if (id === "switch") {
    return `"use client";
import React from "react";
import { motion } from "framer-motion";

interface SwitchProps {
  checked: boolean;
  onChange: (val: boolean) => void;
  glassOpacity?: number;
  blurAmount?: number;
}

export function GlassSwitch({ checked, onChange, glassOpacity = 0.15, blurAmount = 12 }: SwitchProps) {
  return (
    <div 
      onClick={() => onChange(!checked)}
      style={{
        backgroundColor: \`rgba(255, 255, 255, \${glassOpacity})\`,
        backdropFilter: \`blur(\${blurAmount}px)\`,
      }}
      className="w-11 h-6 rounded-full p-0.5 border border-white/10 cursor-pointer flex items-center"
    >
      <motion.div 
        layout
        className="w-4.5 h-4.5 rounded-full bg-white shadow-md"
        animate={{ x: checked ? 18 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </div>
  );
}`;
  }
  
  const pascalName = name.replace(/\s+/g, "");
  return `"use client";
import React from "react";
import { motion } from "framer-motion";

interface GlassProps {
  glassOpacity?: number;
  blurAmount?: number;
  borderOpacity?: number;
}

export function Glass${pascalName}({
  glassOpacity = 0.15,
  blurAmount = 12,
  borderOpacity = 0.15
}: GlassProps) {
  return (
    <div 
      style={{
        backgroundColor: \`rgba(255, 255, 255, \${glassOpacity})\`,
        backdropFilter: \`blur(\${blurAmount}px)\`,
        borderColor: \`rgba(255, 255, 255, \${borderOpacity})\`,
      }}
      className="p-5 rounded-xl border text-current"
    >
      <h3 className="text-xs font-bold mb-1">${name} Preview</h3>
      <p className="text-[10px] opacity-60 leading-normal">
        Glassmorphic ${name} component registry item. Customize the live playground values to preview transparency level changes.
      </p>
    </div>
  );
}`;
};

componentsList.forEach(c => {
  CODE_SNIPPETS[c.id] = getCustomSnippet(c.id, c.name);
});

// ─── Main Component Documentation Explorer ───────────────────────────────────
export default function DocsPage() {
  const [selectedComponent, setSelectedComponent] = useState<string>("install");
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [themeMode, setThemeMode] = useState<"dark" | "light">(() => {
    // Initialise from localStorage if running in a browser
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("nebula-theme");
      if (saved === "light" || saved === "dark") return saved;
    }
    return "dark";
  });
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("nebula-cookies");
    if (stored !== null) setCookiesAccepted(stored === "true");
  }, []);

  // Sync theme preference to localStorage whenever themeMode changes
  useEffect(() => {
    localStorage.setItem("nebula-theme", themeMode);
    const root = window.document.documentElement;
    if (themeMode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [themeMode]);

  // Live Slider Parameters for Customizing Glassmorphic Styling
  const [glassBlur, setGlassBlur] = useState<number>(12);
  const [glassOpacity, setGlassOpacity] = useState<number>(0.15);
  const [borderOpacity, setBorderOpacity] = useState<number>(0.15);

  // States for specific component interactive previews
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [radioValue, setRadioValue] = useState("a");
  const [sliderValue, setSliderValue] = useState(50);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [toggleActive, setToggleActive] = useState(false);

  // Theme toggle helper — updates state (which triggers the useEffect above to persist)
  const toggleTheme = () => {
    setThemeMode(prev => (prev === "dark" ? "light" : "dark"));
  };

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3000);
  };

  const copyCode = (code: string, label?: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    triggerToast(label ? `${label} copied to clipboard!` : "Code snippet copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const getSubheadings = () => {
    if (selectedComponent === "install") {
      return [
        { name: "Use shadcn/create", id: "use-create" },
        { name: "Use the CLI", id: "use-cli" },
        { name: "Existing Project", id: "existing-project" },
        { name: "Choose Your Framework", id: "choose-framework" }
      ];
    }
    if (selectedComponent === "intro") {
      return [
        { name: "Design Philosophy", id: "philosophy" },
        { name: "Architecture Details", id: "architecture" },
        { name: "Core Features", id: "features" }
      ];
    }
    if (selectedComponent === "theming") {
      return [
        { name: "Glassmorphism Basics", id: "basics" },
        { name: "Light vs Dark Contrast", id: "contrast" },
        { name: "Tailwind Classes", id: "classes" }
      ];
    }
    if (selectedComponent === "cli") {
      return [
        { name: "Initialization", id: "init" },
        { name: "Add Command", id: "add-cmd" },
        { name: "Reference", id: "reference" }
      ];
    }
    // Default component subheadings
    return [
      { name: "Interactive Preview", id: "preview-section" },
      { name: "View Source Code", id: "code-section" },
      { name: "CLI Installation", id: "cli-install-section" }
    ];
  };

  const isGettingStartedActive = (id: string) => {
    return selectedComponent === id;
  };

  const renderGettingStartedButton = (id: string, label: string) => {
    const active = isGettingStartedActive(id);
    return (
      <button
        onClick={() => {
          setSelectedComponent(id);
          setIsMobileMenuOpen(false);
        }}
        className={cn(
          "w-full text-left py-1.5 px-3 rounded-lg text-sm transition-all border border-transparent flex items-center justify-between group",
          active
            ? (themeMode === "dark" 
                ? "bg-white/10 text-white font-medium border-white/5" 
                : "bg-black/5 text-black font-semibold border-black/5")
            : (themeMode === "dark" 
                ? "text-white/60 hover:text-white hover:bg-white/5" 
                : "text-black/60 hover:text-black hover:bg-black/5")
        )}
      >
        <span>{label}</span>
      </button>
    );
  };

  // Glass styling selectors based on the current theme mode
  const glassPanelClass = themeMode === "dark"
    ? "bg-black/45 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
    : "bg-white/45 backdrop-blur-md border border-black/10 shadow-[0_8px_30px_rgb(0,0,0,0.03)]";

  const mainBgClass = themeMode === "dark" ? "bg-black text-white" : "bg-[#fafafa] text-zinc-900";
  const borderClass = themeMode === "dark" ? "border-white/10" : "border-black/10";
  const textMutedClass = themeMode === "dark" ? "text-zinc-300" : "text-zinc-500";
  const pillBtnClass = themeMode === "dark" ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90";

  // Dynamic style values based on controls
  const glassStyle = {
    backgroundColor: themeMode === "dark" 
      ? `rgba(0, 0, 0, ${glassOpacity})` 
      : `rgba(255, 255, 255, ${glassOpacity})`,
    backdropFilter: `blur(${glassBlur}px)`,
    borderColor: themeMode === "dark"
      ? `rgba(255, 255, 255, ${borderOpacity})`
      : `rgba(0, 0, 0, ${borderOpacity})`,
  };

  // Filter components list by search query
  const filteredComponents = componentsList.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeComponentObj = componentsList.find(c => c.id === selectedComponent);

  const renderComponentDemo = (id: string) => {
    switch (id) {
      case "accordion":
        return (
          <div style={glassStyle} className="p-4 rounded-xl border w-full max-w-sm flex flex-col gap-2">
            <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex items-center justify-between text-xs font-semibold w-full">
              <span>Is it glassmorphic?</span>
              <ChevronRight className={cn("h-4 w-4 transition-transform", accordionOpen && "rotate-90")} />
            </button>
            <AnimatePresence>
              {accordionOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="text-xs opacity-60 overflow-hidden pt-1">
                  Yes, it dynamically adapts to your opaque and transparency levels in real-time!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      case "alert":
        return (
          <div style={glassStyle} className="p-4 rounded-xl border w-full max-w-sm flex gap-3 items-start">
            <Zap className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-semibold">Heads up!</h4>
              <p className="text-[11px] opacity-60 mt-0.5">You are adjusting the transparency levels in real time.</p>
            </div>
          </div>
        );
      case "alert-dialog":
        return (
          <div style={glassStyle} className="p-5 rounded-xl border w-full max-w-sm space-y-4">
            <div>
              <h4 className="text-xs font-semibold">Are you absolutely sure?</h4>
              <p className="text-[11px] opacity-60 mt-1">This action cannot be undone. This will permanently delete your account.</p>
            </div>
            <div className="flex justify-end gap-2 text-[10px]">
              <button className="px-3 py-1.5 rounded bg-transparent border border-current/10 font-medium">Cancel</button>
              <button className="px-3 py-1.5 rounded bg-red-600 text-white font-semibold">Delete</button>
            </div>
          </div>
        );
      case "aspect-ratio":
        return (
          <div style={glassStyle} className="p-3 rounded-xl border w-full max-w-sm">
            <div className="aspect-video w-full rounded-lg bg-gradient-to-tr from-sky-400 to-indigo-500 flex items-center justify-center text-xs font-semibold text-white">
              16:9 Aspect Ratio
            </div>
          </div>
        );
      case "avatar":
        return (
          <div className="flex items-center gap-3">
            <div style={glassStyle} className="h-10 w-10 rounded-full border flex items-center justify-center font-bold text-xs">
              JD
            </div>
            <div>
              <h4 className="text-xs font-semibold">John Doe</h4>
              <p className="text-[10px] opacity-45">@johndoe</p>
            </div>
          </div>
        );
      case "badge":
        return (
          <div className="flex gap-2">
            <span style={glassStyle} className="px-2.5 py-0.5 rounded-full border text-[10px] font-semibold">Active</span>
            <span style={glassStyle} className="px-2.5 py-0.5 rounded-full border text-[10px] font-semibold text-sky-400">Beta</span>
          </div>
        );
      case "breadcrumb":
        return (
          <div style={glassStyle} className="px-3 py-2 rounded-xl border flex items-center gap-1.5 text-[10px] font-medium">
            <span>Home</span>
            <ChevronRight className="h-3 w-3 opacity-40" />
            <span>Docs</span>
            <ChevronRight className="h-3 w-3 opacity-40" />
            <span className="opacity-60">Components</span>
          </div>
        );
      case "button":
        return (
          <button style={glassStyle} className="px-4 py-2 rounded-xl border text-xs font-semibold shadow-md active:scale-95 transition-transform">
            Click Me
          </button>
        );
      case "button-group":
        return (
          <div className="flex -space-x-px">
            <button style={glassStyle} className="px-3 py-1.5 rounded-l-xl border text-xs font-semibold">Left</button>
            <button style={glassStyle} className="px-3 py-1.5 border-t border-b border-current/10 text-xs font-semibold font-medium">Middle</button>
            <button style={glassStyle} className="px-3 py-1.5 rounded-r-xl border text-xs font-semibold">Right</button>
          </div>
        );
      case "calendar":
        return (
          <div style={glassStyle} className="p-4 rounded-xl border w-full max-w-xs">
            <div className="flex items-center justify-between text-xs font-bold mb-3">
              <span>June 2026</span>
              <span className="opacity-50 font-medium">Next</span>
            </div>
            <div className="grid grid-cols-7 gap-1 text-[10px] text-center">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => <span key={d} className="opacity-40 font-bold">{d}</span>)}
              {Array.from({ length: 28 }).map((_, i) => (
                <span key={i} className={cn("p-1.5 rounded-md hover:bg-current/10 cursor-pointer", i === 10 && "bg-sky-500 text-white hover:bg-sky-600 font-bold")}>
                  {i + 1}
                </span>
              ))}
            </div>
          </div>
        );
      case "card":
        return (
          <div style={glassStyle} className="p-5 rounded-xl border w-full max-w-sm space-y-3">
            <div>
              <h3 className="font-bold text-xs">Glassmorphic Card</h3>
              <p className="text-[10px] opacity-50 mt-0.5">Adjust sliders to see live contrast changes</p>
            </div>
            <p className="text-xs leading-normal opacity-85">This card adapts dynamically to both dark and light modes, showing the power of frosted glass borders.</p>
            <div className="pt-2 flex justify-end">
              <button style={glassStyle} className="px-3 py-1.5 rounded-lg border text-[10px] font-semibold">Action</button>
            </div>
          </div>
        );
      case "carousel":
        return (
          <div style={glassStyle} className="p-4 rounded-xl border w-full max-w-sm flex items-center justify-between gap-4">
            <button className="h-6 w-6 rounded-full border border-current/10 flex items-center justify-center text-xs opacity-60">{"<"}</button>
            <div className="text-xs font-semibold text-center py-6">Slide Item Content 1</div>
            <button className="h-6 w-6 rounded-full border border-current/10 flex items-center justify-center text-xs opacity-60">{">"}</button>
          </div>
        );
      case "chart":
        return (
          <div style={glassStyle} className="p-4 rounded-xl border w-full max-w-sm space-y-3">
            <div className="text-xs font-semibold">Analytics Summary</div>
            <div className="flex items-end gap-3 h-20 pt-4">
              {[40, 75, 95, 60, 80, 50].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                  <div className="w-full bg-gradient-to-t from-sky-400 to-indigo-500 rounded-t" style={{ height: `${h}%` }} />
                  <span className="text-[8px] opacity-40">M{i+1}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "checkbox":
        return (
          <label className="flex items-center gap-3 cursor-pointer">
            <div 
              style={glassStyle}
              className={cn("w-5 h-5 rounded border flex items-center justify-center transition-colors", checkboxChecked && "bg-sky-500 text-white")}
              onClick={() => setCheckboxChecked(!checkboxChecked)}
            >
              {checkboxChecked && <Check className="h-3 w-3" />}
            </div>
            <span className="text-xs font-semibold">Accept terms and conditions</span>
          </label>
        );
      case "collapsible":
        return (
          <div className="w-full max-w-sm space-y-2">
            <div style={glassStyle} className="p-3 rounded-xl border flex items-center justify-between text-xs font-semibold">
              <span>My Projects</span>
              <button onClick={() => setCollapsibleOpen(!collapsibleOpen)} className="text-[10px] px-2 py-0.5 rounded border border-current/10">
                {collapsibleOpen ? "Hide" : "Show"}
              </button>
            </div>
            {collapsibleOpen && (
              <div style={glassStyle} className="p-3 rounded-xl border text-xs opacity-75">
                nebula-ui-docs-site
              </div>
            )}
          </div>
        );
      case "combobox":
        return (
          <div style={glassStyle} className="p-3 rounded-xl border w-full max-w-xs flex items-center justify-between text-xs opacity-75">
            <span>Select framework...</span>
            <ChevronRight className="h-4 w-4 rotate-90 opacity-40" />
          </div>
        );
      case "command":
        return (
          <div style={glassStyle} className="p-2 rounded-xl border w-full max-w-xs space-y-1">
            <input placeholder="Type a command..." className="w-full bg-transparent border-b border-current/5 outline-none px-2 py-1 text-xs" />
            <div className="text-[10px] opacity-60 px-2 py-1">Suggestions</div>
            <div className="px-2 py-1 rounded bg-current/5 text-xs">Search files</div>
            <div className="px-2 py-1 rounded text-xs opacity-80">Settings</div>
          </div>
        );
      case "context-menu":
        return (
          <div style={glassStyle} className="p-6 rounded-xl border w-full max-w-xs text-center text-xs opacity-75 border-dashed">
            Right click here to trigger menu
          </div>
        );
      case "data-table":
        return (
          <div style={glassStyle} className="p-1 rounded-xl border w-full max-w-sm overflow-hidden text-xs">
            <table className="w-full text-left">
              <thead className="border-b border-current/10">
                <tr>
                  <th className="p-2 opacity-50">Task</th>
                  <th className="p-2 opacity-50">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-current/5">
                  <td className="p-2 font-medium">Docs layout rebuild</td>
                  <td className="p-2"><span className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-500 text-[10px]">done</span></td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Live sandbox customization</td>
                  <td className="p-2"><span className="px-1.5 py-0.5 rounded bg-sky-500/15 text-sky-500 text-[10px]">active</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case "date-picker":
        return (
          <div style={glassStyle} className="p-2.5 rounded-xl border w-full max-w-xs flex items-center gap-2.5 text-xs opacity-75">
            <Search className="h-4 w-4 opacity-50" />
            <span>Pick a date...</span>
          </div>
        );
      case "dialog":
        return (
          <div style={glassStyle} className="p-5 rounded-xl border w-full max-w-sm space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-xs">Edit profile</h4>
              <span className="text-xs opacity-40 cursor-pointer">X</span>
            </div>
            <p className="text-[11px] opacity-60">Make changes to your profile info here.</p>
            <input placeholder="Name" className="w-full bg-current/5 border border-current/10 rounded px-2.5 py-1 text-xs outline-none" />
            <div className="flex justify-end pt-2">
              <button style={glassStyle} className="px-3 py-1.5 rounded border text-[10px] font-semibold">Save changes</button>
            </div>
          </div>
        );
      case "direction":
        return (
          <div style={glassStyle} className="p-4 rounded-xl border w-full max-w-xs text-center text-xs">
            <div dir="rtl" className="font-semibold mb-1">هذا النص مكتوب من اليمين إلى اليسار</div>
            <div className="text-[10px] opacity-50 font-medium">Direction: RTL</div>
          </div>
        );
      case "drawer":
        return (
          <div style={glassStyle} className="p-4 rounded-t-2xl border-t border-l border-r w-full max-w-sm mt-12 space-y-2">
            <div className="w-10 h-1 bg-current/25 rounded-full mx-auto mb-2" />
            <h4 className="font-bold text-xs">Bottom Sheet drawer</h4>
            <p className="text-[10px] opacity-60">Draggable modal content goes here.</p>
          </div>
        );
      case "dropdown-menu":
        return (
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} style={glassStyle} className="px-3.5 py-1.5 rounded-lg border text-xs font-semibold">
              Options
            </button>
            {dropdownOpen && (
              <div style={glassStyle} className="absolute top-9 left-0 p-1.5 rounded-lg border w-36 space-y-0.5 z-20 text-[11px]">
                <div className="px-2 py-1.5 rounded hover:bg-current/5 cursor-pointer">Profile</div>
                <div className="px-2 py-1.5 rounded hover:bg-current/5 cursor-pointer">Settings</div>
              </div>
            )}
          </div>
        );
      case "empty":
        return (
          <div style={glassStyle} className="p-6 rounded-xl border w-full max-w-sm text-center space-y-3">
            <div className="h-9 w-9 rounded-full bg-current/5 border border-current/10 flex items-center justify-center mx-auto opacity-55">?</div>
            <div>
              <h4 className="text-xs font-bold">No components found</h4>
              <p className="text-[10px] opacity-50 mt-0.5">Try adjusting your active search query.</p>
            </div>
          </div>
        );
      case "field":
        return (
          <div className="space-y-1.5 w-full max-w-xs">
            <label className="text-xs font-semibold opacity-70">User Email</label>
            <input style={glassStyle} placeholder="Enter your email..." className="w-full px-3 py-1.5 rounded-xl border text-xs outline-none focus:ring-1 focus:ring-sky-500" />
            <span className="text-[10px] opacity-40">We will never share your email.</span>
          </div>
        );
      case "hover-card":
        return (
          <div style={glassStyle} className="p-4 rounded-xl border w-full max-w-xs flex gap-3">
            <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center font-bold text-white text-xs shrink-0">N</div>
            <div>
              <h4 className="text-xs font-semibold">Next.js</h4>
              <p className="text-[10px] opacity-60">The React Framework for the Web.</p>
            </div>
          </div>
        );
      case "input":
        return (
          <input style={glassStyle} type="text" placeholder="Simple text input..." className="w-full max-w-xs px-3 py-1.5 rounded-xl border text-xs outline-none" />
        );
      case "input-group":
        return (
          <div className="flex w-full max-w-xs rounded-xl overflow-hidden -space-x-px">
            <span style={glassStyle} className="px-3 py-1.5 border text-xs opacity-60 flex items-center">https://</span>
            <input style={glassStyle} placeholder="example.com" className="flex-1 px-3 py-1.5 border-t border-b border-r text-xs outline-none" />
          </div>
        );
      case "input-otp":
        return (
          <div className="flex gap-2">
            {[9, 2, 8, 4].map((v, i) => (
              <div key={i} style={glassStyle} className="w-9 h-10 rounded-lg border flex items-center justify-center font-bold text-sm">
                {v}
              </div>
            ))}
          </div>
        );
      case "item":
        return (
          <div style={glassStyle} className="p-3 rounded-xl border w-full max-w-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-gradient-to-tr from-violet-500 to-indigo-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-semibold truncate">Draft Design Asset</h4>
              <p className="text-[10px] opacity-55 truncate">Last edited 2 hours ago by admin</p>
            </div>
          </div>
        );
      case "kbd":
        return (
          <div className="flex items-center gap-1">
            <span style={glassStyle} className="px-1.5 py-0.5 rounded border text-[9px] font-mono">⌘</span>
            <span style={glassStyle} className="px-1.5 py-0.5 rounded border text-[9px] font-mono">K</span>
          </div>
        );
      case "label":
        return (
          <label className="text-xs font-bold tracking-tight opacity-75">Form Input Label</label>
        );
      case "menubar":
        return (
          <div style={glassStyle} className="p-1 rounded-lg border flex items-center gap-3 text-[11px] font-semibold">
            <span className="px-2 py-0.5 rounded hover:bg-current/5 cursor-pointer">File</span>
            <span className="px-2 py-0.5 rounded hover:bg-current/5 cursor-pointer">Edit</span>
            <span className="px-2 py-0.5 rounded hover:bg-current/5 cursor-pointer">View</span>
          </div>
        );
      case "native-select":
        return (
          <select style={glassStyle} className="px-3 py-1.5 rounded-xl border text-xs outline-none bg-transparent">
            <option className="bg-[#0b0c10] text-white">Next.js</option>
            <option className="bg-[#0b0c10] text-white">Vite</option>
          </select>
        );
      case "navigation-menu":
        return (
          <div style={glassStyle} className="p-2 rounded-xl border flex items-center gap-4 text-xs font-medium">
            <span>Home</span>
            <span>Docs</span>
            <span>Community</span>
          </div>
        );
      case "pagination":
        return (
          <div className="flex gap-1 text-[10px] font-semibold">
            <span style={glassStyle} className="w-6 h-6 rounded flex items-center justify-center border">{"<"}</span>
            <span style={glassStyle} className="w-6 h-6 rounded flex items-center justify-center border bg-sky-500/10 text-sky-400">1</span>
            <span style={glassStyle} className="w-6 h-6 rounded flex items-center justify-center border font-medium">2</span>
            <span style={glassStyle} className="w-6 h-6 rounded flex items-center justify-center border">{">"}</span>
          </div>
        );
      case "popover":
        return (
          <div className="relative">
            <button onClick={() => setPopoverOpen(!popoverOpen)} style={glassStyle} className="px-3 py-1.5 rounded-lg border text-xs font-semibold">
              Open Popover
            </button>
            {popoverOpen && (
              <div style={glassStyle} className="absolute bottom-9 left-1/2 -translate-x-1/2 p-3 rounded-lg border w-44 space-y-1.5 z-20 text-[10px]">
                <h5 className="font-bold">Dimensions</h5>
                <p className="opacity-60">Set height and width values.</p>
              </div>
            )}
          </div>
        );
      case "progress":
        return (
          <div className="space-y-1.5 w-full max-w-xs">
            <div className="flex justify-between text-[10px] opacity-60"><span>Downloading...</span><span>65%</span></div>
            <div style={glassStyle} className="h-2 rounded-full border overflow-hidden">
              <div className="h-full bg-gradient-to-r from-sky-400 to-indigo-500" style={{ width: "65%" }} />
            </div>
          </div>
        );
      case "radio-group":
        return (
          <div className="space-y-2">
            {["a", "b"].map(v => (
              <label key={v} onClick={() => setRadioValue(v)} className="flex items-center gap-2.5 cursor-pointer text-xs">
                <div style={glassStyle} className="w-4 h-4 rounded-full border flex items-center justify-center">
                  {radioValue === v && <div className="w-2 h-2 rounded-full bg-sky-400" />}
                </div>
                <span>Option {v.toUpperCase()}</span>
              </label>
            ))}
          </div>
        );
      case "resizable":
        return (
          <div style={glassStyle} className="w-full max-w-sm h-20 border rounded-xl overflow-hidden flex text-[10px] font-bold text-center">
            <div className="w-1/3 flex items-center justify-center bg-current/[0.02]">Sidebar</div>
            <div className="w-0.5 bg-current/20 hover:bg-sky-400 cursor-col-resize" />
            <div className="flex-1 flex items-center justify-center font-medium">Main Area</div>
          </div>
        );
      case "scroll-area":
        return (
          <div style={glassStyle} className="w-full max-w-xs h-24 border rounded-xl p-3 overflow-y-auto space-y-1 text-[11px] leading-normal opacity-80">
            <p>Scrollable layer content item 1.</p>
            <p>Scrollable layer content item 2.</p>
            <p>Scrollable layer content item 3.</p>
            <p>Scrollable layer content item 4.</p>
          </div>
        );
      case "select":
        return (
          <div style={glassStyle} className="p-2.5 rounded-xl border w-full max-w-xs flex items-center justify-between text-xs opacity-75">
            <span>Select option</span>
            <ChevronRight className="h-4 w-4 rotate-90 opacity-40" />
          </div>
        );
      case "separator":
        return (
          <div className="w-full max-w-xs text-xs space-y-2">
            <div>Top Block</div>
            <div style={glassStyle} className="h-px w-full border-b" />
            <div>Bottom Block</div>
          </div>
        );
      case "sheet":
        return (
          <div>
            <button onClick={() => setSheetOpen(true)} style={glassStyle} className="px-3.5 py-1.5 rounded-lg border text-xs font-semibold">
              Open Sheet
            </button>
            {sheetOpen && (
              <div style={glassStyle} className="fixed top-0 right-0 h-full w-64 p-6 border-l z-50 flex flex-col justify-between shadow-2xl">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-sm">Sheet title</h4>
                    <span onClick={() => setSheetOpen(false)} className="text-xs cursor-pointer opacity-50 font-medium">X</span>
                  </div>
                  <p className="text-xs opacity-60">Sidebar slide-out from the right.</p>
                </div>
              </div>
            )}
          </div>
        );
      case "sidebar":
        return (
          <div style={glassStyle} className="w-40 h-28 border rounded-xl p-3 space-y-2 text-[10px] font-semibold">
            <div className="opacity-40">NAVIGATION</div>
            <div className="px-2 py-1 rounded bg-current/5">Overview</div>
            <div className="px-2 py-1 opacity-70 font-medium">Analytics</div>
          </div>
        );
      case "skeleton":
        return (
          <div className="w-full max-w-xs space-y-2.5">
            <div style={glassStyle} className="h-7 w-24 rounded border animate-pulse" />
            <div style={glassStyle} className="h-4 w-full rounded border animate-pulse" />
            <div style={glassStyle} className="h-4 w-3/4 rounded border animate-pulse" />
          </div>
        );
      case "slider":
        return (
          <div className="w-full max-w-xs space-y-2">
            <div className="flex justify-between text-[10px] opacity-60"><span>Slider Range</span><span>{sliderValue}%</span></div>
            <div className="relative w-full flex items-center h-2 cursor-pointer" onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const val = Math.round(((e.clientX - rect.left) / rect.width) * 100);
              setSliderValue(Math.max(0, Math.min(100, val)));
            }}>
              <div style={glassStyle} className="absolute inset-0 rounded-full border" />
              <div className="absolute top-0 left-0 h-full bg-sky-400 rounded-full" style={{ width: `${sliderValue}%` }} />
              <div className="absolute w-4 h-4 rounded-full bg-white shadow-md border border-zinc-200" style={{ left: `calc(${sliderValue}% - 8px)` }} />
            </div>
          </div>
        );
      case "sonner":
        return (
          <button onClick={() => triggerToast("Successfully processed background worker queue!")} style={glassStyle} className="px-3.5 py-1.5 rounded-lg border text-xs font-semibold">
            Trigger Toast
          </button>
        );
      case "spinner":
        return (
          <div className="w-6 h-6 rounded-full border-2 border-current/10 border-t-sky-500 animate-spin" />
        );
      case "switch":
        return (
          <div 
            onClick={() => setSwitchChecked(!switchChecked)}
            style={glassStyle}
            className="w-11 h-6 rounded-full p-0.5 border cursor-pointer flex items-center"
          >
            <motion.div 
              layout
              className="w-4.5 h-4.5 rounded-full bg-current"
              animate={{ x: switchChecked ? 18 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </div>
        );
      case "table":
        return (
          <div style={glassStyle} className="p-1 rounded-xl border w-full max-w-sm overflow-hidden text-[10px]">
            <table className="w-full text-left">
              <thead className="border-b border-current/10">
                <tr>
                  <th className="p-2 opacity-50">Invoice</th>
                  <th className="p-2 opacity-50">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-current/5">
                  <td className="p-2">INV-001</td>
                  <td className="p-2">$250.00</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">INV-002</td>
                  <td className="p-2 font-medium">$1,200.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case "tabs":
        return (
          <div className="space-y-3 w-full max-w-xs">
            <div style={glassStyle} className="p-1 rounded-lg border flex gap-1 text-[10px] font-bold">
              {["Account", "Password"].map((t, i) => (
                <button key={t} onClick={() => setTabIndex(i)} className={cn("flex-1 py-1 rounded-md transition-all", tabIndex === i ? "bg-current/10" : "opacity-60")}>
                  {t}
                </button>
              ))}
            </div>
            <div style={glassStyle} className="p-3 rounded-xl border text-xs opacity-75">
              {tabIndex === 0 ? "Account profile credentials" : "Change secure access keys"}
            </div>
          </div>
        );
      case "textarea":
        return (
          <textarea style={glassStyle} placeholder="Enter description message..." className="w-full max-w-xs h-16 px-3 py-1.5 rounded-xl border text-xs outline-none resize-none" />
        );
      case "toast":
        return (
          <button onClick={() => triggerToast("Copied component source code!")} style={glassStyle} className="px-3.5 py-1.5 rounded-lg border text-xs font-semibold">
            Launch Toast alert
          </button>
        );
      case "toggle":
        return (
          <button onClick={() => setToggleActive(!toggleActive)} style={glassStyle} className={cn("p-2 rounded-lg border flex items-center justify-center", toggleActive && "bg-sky-500/10 text-sky-400")}>
            <Sun className="h-4.5 w-4.5" />
          </button>
        );
      case "toggle-group":
        return (
          <div className="flex -space-x-px">
            <button style={glassStyle} className="p-2 rounded-l-lg border"><Sun className="h-4 w-4" /></button>
            <button style={glassStyle} className="p-2 border-t border-b border-current/10"><Moon className="h-4 w-4" /></button>
            <button style={glassStyle} className="p-2 rounded-r-lg border"><Zap className="h-4 w-4" /></button>
          </div>
        );
      case "tooltip":
        return (
          <div className="relative">
            <button 
              onMouseEnter={() => setTooltipVisible(true)} 
              onMouseLeave={() => setTooltipVisible(false)} 
              style={glassStyle} 
              className="px-3 py-1.5 rounded-lg border text-xs font-semibold"
            >
              Hover here
            </button>
            {tooltipVisible && (
              <div style={glassStyle} className="absolute bottom-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded border text-[9px] whitespace-nowrap z-30 font-medium">
                Help tooltip message
              </div>
            )}
          </div>
        );
      case "typography":
        return (
          <div className="space-y-1 text-center">
            <h1 className="text-base font-extrabold">Typography Heading</h1>
            <p className="text-xs opacity-60">This represents standard copy layout text rendering.</p>
          </div>
        );
      default:
        return (
          <div style={glassStyle} className="p-6 rounded-2xl border text-center text-xs opacity-70">
            Preview demo not configured for {id}.
          </div>
        );
    }
  };

  return (
    <div className={cn("min-h-screen flex flex-col font-sans transition-colors duration-300 relative overflow-hidden", mainBgClass)}>
      
      {/* Glow Rings (Glass Aesthetic) */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none transition-opacity duration-1000 animate-pulse"
        style={{
          background: themeMode === "dark" 
            ? "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)" 
            : "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)"
        }}
      />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none transition-opacity duration-1000"
        style={{
          background: themeMode === "dark" 
            ? "radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)" 
            : "radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)"
        }}
      />

      {/* Header */}
      <header className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300",
        themeMode === "dark" ? "bg-black/60 border-white/10" : "bg-white/60 border-black/10"
      )}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6 md:gap-8">
            <button 
              onClick={() => setSelectedComponent("install")}
              className="flex items-center gap-2 font-bold tracking-tight text-sm cursor-pointer"
            >
              <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-sky-400 to-indigo-500 flex items-center justify-center font-bold text-white shadow-sm">
                N
              </div>
              <span className="font-bold tracking-tight text-[15px]">Nebula UI</span>
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full border border-sky-400/30 text-sky-400 bg-sky-400/10">beta</span>
            </button>

            <nav className="hidden md:flex items-center gap-6">
              {[
                { name: "Home", id: "intro" },
                { name: "Docs", id: "install" },
                { name: "Components", id: "accordion" },
                { name: "CLI", id: "cli" }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => setSelectedComponent(item.id)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:opacity-100 cursor-pointer",
                    (selectedComponent === item.id || (item.id === "install" && ["install", "theming"].includes(selectedComponent)) || (item.id === "accordion" && !["intro", "install", "cli", "theming"].includes(selectedComponent)))
                      ? "opacity-100 font-semibold"
                      : "opacity-60"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 opacity-40 text-current" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={cn(
                  "w-44 lg:w-56 pl-8 pr-3 py-1.5 text-xs rounded-md border outline-none transition-all duration-300",
                  themeMode === "dark"
                    ? "bg-white/5 border-white/10 text-white focus:bg-white/10 focus:border-white/20"
                    : "bg-black/5 border-black/10 text-black focus:bg-black/10 focus:border-black/20"
                )}
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] px-1 py-0.5 rounded font-mono opacity-40 border" style={{ borderColor: themeMode === "dark" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)" }}>
                ⌘K
              </div>
            </div>

            {/* GitHub Button */}
            <a
              href="https://github.com/frosted-ui/frosted-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-current/5 transition-colors opacity-70 hover:opacity-100"
            >
              <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md hover:bg-current/5 transition-colors opacity-70 hover:opacity-100 cursor-pointer"
            >
              {themeMode === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>

            {/* "+ New" Button */}
            <button
              onClick={() => triggerToast("New feature registry synced!")}
              className={cn("px-3 py-1.5 text-xs font-semibold rounded-md shadow-sm transition-colors cursor-pointer", pillBtnClass)}
            >
              + New
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 md:hidden rounded-md border border-transparent hover:bg-current/5 transition-all text-current"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 flex gap-6 relative z-10">
        
        {/* Left Sidebar Navigation */}
        <aside className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 pt-20 px-6 border-r transition-transform duration-300 md:translate-x-0 md:static md:w-56 md:px-0 md:pt-8 md:border-r-0 shrink-0 h-[calc(100vh-3.5rem)] overflow-y-auto no-scrollbar",
          themeMode === "dark" ? "bg-black/95 md:bg-transparent border-white/10" : "bg-[#fafafa]/95 md:bg-transparent border-black/10",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="space-y-6 pb-12">
            <div className="space-y-1.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider opacity-40 pl-3">Getting Started</h4>
              <div className="space-y-0.5">
                {renderGettingStartedButton("intro", "Introduction")}
                {renderGettingStartedButton("install", "Installation")}
                {renderGettingStartedButton("theming", "Theming")}
                {renderGettingStartedButton("cli", "CLI Reference")}
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between pl-3 pr-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider opacity-40">Components</h4>
                <span className="text-[10px] bg-sky-500/10 text-sky-400 px-1.5 py-0.5 rounded-full font-bold">59</span>
              </div>

              {/* Sidebar Search */}
              <div className="px-2 pb-2">
                <input 
                  type="text" 
                  placeholder="Filter components..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={cn(
                    "w-full px-2.5 py-1 text-[11px] rounded border outline-none bg-transparent transition-colors",
                    themeMode === "dark" ? "border-white/10 focus:border-white/20" : "border-black/10 focus:border-black/20"
                  )}
                />
              </div>

              <div className="space-y-0.5 max-h-[420px] overflow-y-auto pr-1 no-scrollbar">
                {filteredComponents.length > 0 ? (
                  filteredComponents.map((c) => {
                    const active = selectedComponent === c.id;
                    return (
                      <button
                        key={c.id}
                        onClick={() => {
                          setSelectedComponent(c.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className={cn(
                          "w-full text-left py-1 px-3 rounded-lg text-xs transition-all flex items-center justify-between cursor-pointer",
                          active
                            ? (themeMode === "dark" 
                                ? "bg-white/10 text-white font-medium border-white/5" 
                                : "bg-black/5 text-black font-semibold border-black/5")
                            : (themeMode === "dark" 
                                ? "text-white/60 hover:text-white hover:bg-white/5" 
                                : "text-black/60 hover:text-black hover:bg-black/5")
                        )}
                      >
                        <span>{c.name}</span>
                        {active && <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />}
                      </button>
                    );
                  })
                ) : (
                  <div className="text-[10px] opacity-40 pl-3 py-2">No items found</div>
                )}
              </div>
            </div>
          </div>
        </aside>

        {/* Center Workspace Content */}
        <main className="flex-1 min-w-0 py-8">
          {selectedComponent === "intro" ? (
            /* Introduction Page */
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3.5xl font-extrabold tracking-tight">Introduction</h1>
                <p className={cn("text-lg", textMutedClass)}>
                  Welcome to the world's first Frosted Glass components library matching the shadcn/ui framework layout.
                </p>
              </div>

              <div id="philosophy" className="space-y-3 pt-4 border-t" style={{ borderColor: themeMode === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }}>
                <h2 className="text-xl font-bold tracking-tight">Design Philosophy</h2>
                <p className={cn("text-sm leading-relaxed", textMutedClass)}>
                  Every user interface feels premium when it contains responsive layers, depth of field via frosted backdrop filters, and subtle animations. We took the minimalism of shadcn/ui and merged it with rich HSL colors and glassmorphism.
                </p>
              </div>

              <div id="architecture" className="space-y-3 pt-2">
                <h2 className="text-xl font-bold tracking-tight">Architecture Details</h2>
                <p className={cn("text-sm leading-relaxed", textMutedClass)}>
                  Built with Framer Motion, Tailwind CSS v4, and Radix React primitives. The structure matches the standard React component folder registry.
                </p>
              </div>

              <div id="features" className={cn("p-6 rounded-2xl space-y-3 border", glassPanelClass)}>
                <h3 className="font-bold text-[15px]">Core Features</h3>
                <ul className="list-disc list-inside space-y-1.5 text-xs opacity-80">
                  <li>59 high-fidelity interactive glassmorphism components</li>
                  <li>Live playground customization: blur amount, glass transparency, border opacity</li>
                  <li>Fully responsive white/black contrast glass layers</li>
                  <li>Spring physics powered animations using framer-motion</li>
                </ul>
              </div>
            </div>
          ) : selectedComponent === "install" ? (
            /* Installation Page */
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3.5xl font-extrabold tracking-tight">Installation</h1>
                <p className={cn("text-lg", textMutedClass)}>
                  How to install dependencies and structure your app.
                </p>
              </div>

              {/* Green recommended banner */}
              <div className={cn(
                "p-4 rounded-xl border text-sm leading-relaxed flex items-start gap-3 backdrop-blur-md",
                themeMode === "dark" 
                  ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-200" 
                  : "bg-emerald-500/10 border-emerald-500/25 text-emerald-950"
              )}>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 animate-ping shrink-0" />
                <span>
                  <strong>Recommended for new projects:</strong> Use <strong className="underline cursor-pointer" onClick={() => copyCode("npx shadcn@latest init", "shadcn/create")}>shadcn/create</strong> to build your preset visually and generate the right setup command for your framework.
                </span>
              </div>

              {/* Grid 3 column options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                {[
                  { name: "shadcn/create", desc: "Builds a fresh react project with preconfigured presets.", cmd: "npx shadcn@latest init" },
                  { name: "Use the CLI", desc: "Run init config and add components straight from terminal.", cmd: "npx frosted-ui init" },
                  { name: "Existing Project", desc: "Manually install tailwind directives and imports.", cmd: "npm install @tailwindcss/postcss" }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => copyCode(item.cmd, item.name)}
                    className={cn(
                      "p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer group space-y-2 flex flex-col justify-between",
                      glassPanelClass
                    )}
                  >
                    <div className="space-y-1.5">
                      <h4 className="font-bold text-xs group-hover:text-indigo-400 transition-colors">{item.name}</h4>
                      <p className="text-[11px] opacity-60 leading-normal">{item.desc}</p>
                    </div>
                    <div className="pt-2 flex items-center justify-between text-[9px] font-mono opacity-50 border-t" style={{ borderColor: themeMode === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }}>
                      <span className="truncate">{item.cmd}</span>
                      <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform shrink-0" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Detailed code instructions */}
              <div id="choose-framework" className="space-y-3 pt-6">
                <h3 className="text-lg font-bold tracking-tight">Choose Your Framework</h3>
                <p className="text-xs opacity-75">
                  Select your workspace compiler to setup CSS configuration and path resolving aliases:
                </p>
                
                <div className="flex flex-wrap gap-2 text-[10px] font-semibold pt-1">
                  {["Next.js", "Vite", "Remix", "Gatsby", "Astro"].map(framework => (
                    <button 
                      key={framework} 
                      onClick={() => triggerToast(`Configuring path mappings for ${framework}...`)}
                      className={cn("px-3 py-1.5 rounded-lg border cursor-pointer", themeMode === "dark" ? "bg-white/5 border-white/10 text-white hover:bg-white/10" : "bg-black/5 border-black/10 text-black hover:bg-black/10")}
                    >
                      {framework}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : selectedComponent === "theming" ? (
            /* Theming Page */
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3.5xl font-extrabold tracking-tight">Theming</h1>
                <p className={cn("text-lg", textMutedClass)}>
                  Customize global glassmorphism presets, colors, and opacity filters.
                </p>
              </div>

              <div id="basics" className="space-y-3 pt-4 border-t" style={{ borderColor: themeMode === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }}>
                <h2 className="text-xl font-bold tracking-tight">Glassmorphism Basics</h2>
                <p className="text-xs leading-relaxed opacity-75">
                  NebulaUI builds on the dual-layer style properties. By layering a subtle light/dark background over a blurred container, we produce a translucent glass sheet effect. This requires the browser to support `backdrop-filter`.
                </p>
              </div>

              <div id="contrast" className="space-y-3 pt-2">
                <h2 className="text-xl font-bold tracking-tight">Light vs Dark Contrast</h2>
                <p className="text-xs leading-relaxed opacity-75">
                  To keep text readable, dark themes use low opacity black layers (`rgba(0,0,0,0.45)`) while light themes use white transparency layers (`rgba(255,255,255,0.45)`). Sliding the opaque controls in the playground below demonstrates how visibility holds up.
                </p>
              </div>
            </div>
          ) : selectedComponent === "cli" ? (
            /* CLI Reference Page */
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3.5xl font-extrabold tracking-tight">CLI Reference</h1>
                <p className={cn("text-lg", textMutedClass)}>
                  Command line parameters to manage registry imports.
                </p>
              </div>

              <div id="init" className="space-y-3 pt-4 border-t" style={{ borderColor: themeMode === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }}>
                <h3 className="text-sm font-semibold">Initialize Configuration</h3>
                <div className={cn("relative p-3.5 rounded-xl font-mono text-xs overflow-x-auto flex items-center justify-between", themeMode === "dark" ? "bg-black/60 border border-white/5" : "bg-white border border-black/5")}>
                  <span className="text-sky-400">npx nebula-ui-cli init</span>
                  <button onClick={() => copyCode("npx nebula-ui-cli init")} className="p-1 rounded hover:bg-current/10 text-current/60"><Copy className="h-3.5 w-3.5" /></button>
                </div>
              </div>
            </div>
          ) : (
            /* Component Explorer Workspace (dynamic render) */
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-3.5xl font-extrabold tracking-tight capitalize">
                    {activeComponentObj?.name}
                  </h1>
                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-sky-500/25 bg-sky-500/5 text-sky-400 font-semibold font-mono mt-2 shrink-0">
                    registry
                  </span>
                </div>
                <p className={cn("text-sm", textMutedClass)}>
                  Interactive glassmorphic {activeComponentObj?.name} node demonstration and copyable registry source code.
                </p>
              </div>

              {/* Playground Tab Navigation */}
              <div className="flex items-center justify-between border-b pb-1" style={{ borderColor: themeMode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={cn(
                      "flex items-center gap-1.5 py-1.5 px-3 text-xs font-semibold rounded-md transition-all cursor-pointer",
                      activeTab === "preview" 
                        ? (themeMode === "dark" ? "bg-white/10 text-white" : "bg-black/5 text-black")
                        : "opacity-60 hover:opacity-100"
                    )}
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>Interactive Preview</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("code")}
                    className={cn(
                      "flex items-center gap-1.5 py-1.5 px-3 text-xs font-semibold rounded-md transition-all cursor-pointer",
                      activeTab === "code" 
                        ? (themeMode === "dark" ? "bg-white/10 text-white" : "bg-black/5 text-black")
                        : "opacity-60 hover:opacity-100"
                    )}
                  >
                    <Code className="h-3.5 w-3.5" />
                    <span>View Code</span>
                  </button>
                </div>

                <button 
                  onClick={() => copyCode(`npx nebula-ui-cli add ${selectedComponent}`, "CLI")}
                  className="text-[10px] font-mono text-sky-400 bg-sky-500/10 hover:bg-sky-500/20 px-2.5 py-1 rounded border border-sky-400/20 cursor-pointer transition-colors"
                >
                  npx nebula-ui-cli add {selectedComponent}
                </button>
              </div>

              {/* Preview Mode */}
              {activeTab === "preview" ? (
                <div className="space-y-4">
                  {/* Glass Customization Slider Control Panel */}
                  <div className={cn("p-4 rounded-xl border flex flex-col md:flex-row gap-4 justify-between items-center text-xs", glassPanelClass)}>
                    <div className="flex flex-col gap-1.5 w-full md:w-auto">
                      <div className="flex justify-between font-semibold opacity-80">
                        <span>Backdrop Blur</span>
                        <span>{glassBlur}px</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="24" 
                        value={glassBlur} 
                        onChange={(e) => setGlassBlur(Number(e.target.value))} 
                        className="w-full md:w-36 h-1 bg-current/10 rounded-lg appearance-none cursor-pointer accent-sky-500" 
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 w-full md:w-auto">
                      <div className="flex justify-between font-semibold opacity-80">
                        <span>Glass Opacity</span>
                        <span>{Math.round(glassOpacity * 100)}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={glassOpacity * 100} 
                        onChange={(e) => setGlassOpacity(Number(e.target.value) / 100)} 
                        className="w-full md:w-36 h-1 bg-current/10 rounded-lg appearance-none cursor-pointer accent-sky-500" 
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 w-full md:w-auto">
                      <div className="flex justify-between font-semibold opacity-80">
                        <span>Border Opacity</span>
                        <span>{Math.round(borderOpacity * 100)}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={borderOpacity * 100} 
                        onChange={(e) => setBorderOpacity(Number(e.target.value) / 100)} 
                        className="w-full md:w-36 h-1 bg-current/10 rounded-lg appearance-none cursor-pointer accent-sky-500" 
                      />
                    </div>
                  </div>

                  {/* Component sandbox panel */}
                  <div id="preview-section" className={cn(
                    "relative min-h-[300px] flex items-center justify-center p-8 rounded-2xl border shadow-xl overflow-hidden transition-all duration-300",
                    themeMode === "dark" ? "bg-[#050508] border-white/5" : "bg-zinc-100 border-black/5"
                  )}>
                    {/* Background grid overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

                    <div className="w-full flex items-center justify-center relative z-10">
                      {renderComponentDemo(selectedComponent)}
                    </div>
                  </div>
                </div>
              ) : (
                /* Code Editor Mode */
                <div id="code-section" className="relative rounded-xl overflow-hidden text-sm border bg-[#050508] border-white/10 shadow-2xl">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-black/40 text-xs text-zinc-400">
                    <span className="font-mono">{selectedComponent}.tsx</span>
                    <button 
                      onClick={() => copyCode(CODE_SNIPPETS[selectedComponent] || "")}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-white hover:text-white transition-all cursor-pointer border border-white/5"
                    >
                      {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                      <span>{copied ? "Copied" : "Copy Code"}</span>
                    </button>
                  </div>

                  <pre className="p-5 overflow-x-auto text-sky-200/90 font-mono leading-relaxed max-h-[440px] text-xs">
                    <code>{CODE_SNIPPETS[selectedComponent]}</code>
                  </pre>
                </div>
              )}

              {/* CLI Command under Component Preview */}
              <div id="cli-install-section" className="space-y-2.5 pt-4">
                <h3 className="text-sm font-semibold">Install Component</h3>
                <div className={cn(
                  "relative p-3.5 rounded-xl font-mono text-xs overflow-x-auto flex items-center justify-between",
                  themeMode === "dark" ? "bg-black/60 border border-white/5" : "bg-white border border-black/5"
                )}>
                  <span className="text-sky-400">npx nebula-ui-cli add {selectedComponent}</span>
                  <button 
                    onClick={() => copyCode(`npx nebula-ui-cli add ${selectedComponent}`, selectedComponent)}
                    className="p-1 rounded hover:bg-current/10 text-current/60 hover:text-current transition-colors cursor-pointer"
                  >
                    <Copy className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Right Sidebar (On This Page) */}
        <aside className="hidden xl:block w-52 shrink-0 py-8 pl-5 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto no-scrollbar space-y-6">
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider opacity-40 pl-1">On This Page</h4>
            <div className="space-y-1.5 flex flex-col items-start text-xs">
              {getSubheadings().map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    const el = document.getElementById(item.id);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="text-left py-0.5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer font-medium hover:underline pl-1"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Vercel Promo Card (glass themed) */}
          <div className={cn("p-5 rounded-xl border space-y-3", glassPanelClass)}>
            <div className="space-y-1">
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-indigo-500 font-medium">Deploy now</h5>
              <h4 className="font-semibold text-xs leading-snug">Deploy your shadcn app on Vercel</h4>
            </div>
            <p className="text-[10px] opacity-60 leading-normal">
              Vercel provides speed, stability, and serverless edge functions to host glassmorphism UI layouts.
            </p>
            <div>
              <button 
                onClick={() => triggerToast("Navigating to Vercel deployment console...")}
                className={cn("w-full py-1.5 text-[10px] font-semibold rounded-md transition-colors cursor-pointer", pillBtnClass)}
              >
                Deploy Now
              </button>
            </div>
          </div>
        </aside>

      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={cn(
              "fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl shadow-lg border backdrop-blur-xl flex items-center gap-2.5 text-xs font-medium",
              themeMode === "dark" 
                ? "bg-black/80 border-white/10 text-white" 
                : "bg-white/85 border-black/10 text-black"
            )}
          >
            <Check className="h-4 w-4 text-emerald-500 shrink-0" />
            <span>{toastMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Cookie Consent Banner ── */}
      <AnimatePresence>
        {cookiesAccepted === null && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ type: "spring", damping: 22, stiffness: 200 }}
            className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[60] w-[calc(100%-2rem)] max-w-xl"
          >
            {/* Glass panel */}
            <div
              className={cn(
                "relative rounded-2xl border p-4 md:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 overflow-hidden",
                "backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.6)]",
                themeMode === "dark"
                  ? "bg-white/[0.06] border-white/[0.12] text-white"
                  : "bg-black/[0.04] border-black/[0.1] text-black"
              )}
            >
              {/* Top-shine reflection */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none rounded-[inherit]" />

              {/* Cookie icon */}
              <div className="shrink-0 h-9 w-9 rounded-xl flex items-center justify-center text-lg bg-amber-400/10 border border-amber-400/20">
                🍪
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold leading-snug">We use cookies</p>
                <p className="text-[11px] opacity-55 mt-0.5 leading-normal">
                  We use cookies to enhance your browsing experience and analyse site traffic. You can accept or decline non-essential cookies.
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0 self-center sm:self-auto">
                <button
                  onClick={() => {
                    setCookiesAccepted(false);
                    localStorage.setItem("nebula-cookies", "false");
                  }}
                  className={cn(
                    "px-3 py-1.5 text-[11px] font-semibold rounded-lg border transition-all cursor-pointer",
                    themeMode === "dark"
                      ? "border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"
                      : "border-black/10 bg-black/5 hover:bg-black/10 text-black/70 hover:text-black"
                  )}
                >
                  Reject
                </button>
                <button
                  onClick={() => {
                    setCookiesAccepted(true);
                    localStorage.setItem("nebula-cookies", "true");
                    triggerToast("Cookies accepted — thank you!");
                  }}
                  className="px-3 py-1.5 text-[11px] font-semibold rounded-lg bg-sky-500 hover:bg-sky-400 text-white transition-all cursor-pointer shadow-[0_2px_12px_rgba(14,165,233,0.35)]"
                >
                  Accept all
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
