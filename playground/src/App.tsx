import { useState } from "react";
import {
  Home,
  Plus,
  Heart,
  User,
  Settings,
  LogOut,
  Share,
  Edit,
  Mail,
  Bell,
  Compass,
  Terminal,
  ExternalLink,
  Smartphone,
  Laptop,
  Layers,
  Palette
} from "lucide-react";
import {
  FloatingIslandBar,
  PillBar,
  PebbleBar,
  CrystalBar,
  ArcBar,
  RibbonBar,
  ExpandableNavSheet,
  CommandSheet,
  ProfileSheet,
  AppLauncher,
  FloatingSearchOrb,
  FloatingActionButton,
  FloatingCommandBar,
  GlassThinkingPanel,
  GlassAgentCard,
  GlassWorkflowNode,
  GlassReasoningBubble,
  GlassMemoryPanel,
  GlassCommandCenter,
  GlassKnowledgeGraph
} from "frosted-ui";

type ComponentCategory = "navigation" | "sheets" | "floating" | "agents";

export default function App() {
  const [activeCategory, setActiveCategory] = useState<ComponentCategory>("navigation");
  const [selectedComponent, setSelectedComponent] = useState<string>("floating-island-bar");

  const [variant, setVariant] = useState<"dark" | "light" | "ultra" | "tinted">("dark");
  const [glow, setGlow] = useState<boolean>(true);
  const [deviceMode, setDeviceMode] = useState<"mobile" | "desktop">("mobile");
  
  // Custom glass options
  const [glassColor, setGlassColor] = useState("#ffffff");
  const [glassOpacity, setGlassOpacity] = useState(0.06);

  const [commandOpen, setCommandOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: <Home size={20} />, active: true },
    { id: "explore", label: "Explore", icon: <Compass size={20} /> },
    { id: "saved", label: "Saved", icon: <Heart size={20} />, badge: 3 },
    { id: "notifications", label: "Inbox", icon: <Bell size={20} />, badge: 12 },
    { id: "profile", label: "Profile", icon: <User size={20} /> }
  ];

  const simpleNavItems = [
    { id: "home", label: "Home", icon: <Home size={20} />, active: true },
    { id: "explore", label: "Explore", icon: <Compass size={20} /> },
    { id: "saved", label: "Saved", icon: <Heart size={20} /> },
    { id: "profile", label: "Profile", icon: <User size={20} /> }
  ];

  const commandActions = [
    { id: "docs", label: "Search Documentation", icon: <Terminal size={16} />, shortcut: "D", onSelect: () => alert("Documentation search triggered") },
    { id: "settings", label: "Account Settings", icon: <Settings size={16} />, shortcut: "S", onSelect: () => setProfileOpen(true) },
    { id: "logout", label: "Sign Out", icon: <LogOut size={16} />, onSelect: () => alert("Signed out") }
  ];

  const profileActions = [
    { id: "settings", label: "Settings", icon: <Settings size={18} />, onClick: () => alert("Settings opened") },
    { id: "logout", label: "Sign Out", icon: <LogOut size={18} />, onClick: () => alert("Logging out"), destructive: true }
  ];

  const apps = [
    { id: "mail", label: "Mail", icon: <Mail size={22} />, color: "#3b82f6" },
    { id: "settings", label: "Settings", icon: <Settings size={22} />, color: "#6b7280" },
    { id: "profile", label: "Profile", icon: <User size={22} />, color: "#ec4899" },
    { id: "home", label: "Console", icon: <Terminal size={22} />, color: "#10b981" }
  ];

  const fabActions = [
    { id: "share", label: "Share Link", icon: <Share size={16} />, onClick: () => alert("Share clicked") },
    { id: "edit", label: "Edit Page", icon: <Edit size={16} />, onClick: () => alert("Edit clicked") }
  ];

  const componentsList = {
    navigation: [
      { id: "floating-island-bar", name: "Floating Island Bar", desc: "Dynamic Island-inspired floating nav bar" },
      { id: "pill-bar", name: "Pill Bar", desc: "Clean, organic pill-shaped navigation" },
      { id: "pebble-bar", name: "Pebble Bar", desc: "Staggered individual glass pebbles" },
      { id: "crystal-bar", name: "Crystal Bar", desc: "Hexagonal prism clip-path nav bar" },
      { id: "arc-bar", name: "Arc Bar", desc: "Arched top edge with smooth gradient glow" },
      { id: "ribbon-bar", name: "Ribbon Bar", desc: "Folded ribbon glass design" }
    ],
    sheets: [
      { id: "expandable-nav-sheet", name: "Expandable Nav Sheet", desc: "Nav bar that expands into a full screen menu" },
      { id: "command-sheet", name: "Command Sheet", desc: "Cmd+K fuzzy search command palette" },
      { id: "profile-sheet", name: "Profile Sheet", desc: "Slide-up interactive user profile panel" }
    ],
    floating: [
      { id: "app-launcher", name: "App Launcher", desc: "iOS-style app grid tray" },
      { id: "floating-search-orb", name: "Floating Search Orb", desc: "Search orb that springs to full input" },
      { id: "floating-action-button", name: "Floating Action Button", desc: "FAB with radial action animations" },
      { id: "floating-command-bar", name: "Floating Command Bar", desc: "AI-style input bar with quick chips" }
    ],
    agents: [
      { id: "glass-agent-card", name: "Glass Agent Card", desc: "Agent profile with animated status" },
      { id: "glass-thinking-panel", name: "Glass Thinking Panel", desc: "Agent reasoning and execution steps" },
      { id: "glass-workflow-node", name: "Glass Workflow Node", desc: "DAG node for agent pipelines" },
      { id: "glass-reasoning-bubble", name: "Glass Reasoning Bubble", desc: "Chain of thought explanation bubble" },
      { id: "glass-memory-panel", name: "Glass Memory Panel", desc: "Short/long term context chunk viewer" },
      { id: "glass-knowledge-graph", name: "Glass Knowledge Graph", desc: "Animated nodes floating in glass space" },
      { id: "glass-command-center", name: "Glass Command Center", desc: "Expansive agent dashboard wrapper" }
    ]
  };

  const getCodeSnippet = () => {
    const commonProps = `variant="${variant}" glow={${glow}}`;
    switch (selectedComponent) {
      case "floating-island-bar":
        return `import { FloatingIslandBar } from "frosted-ui";\n\n` +
               `<FloatingIslandBar\n` +
               `  items={navItems} // NavItem[]\n` +
               `  centerAction={{\n` +
               `    icon: <Plus />,\n` +
               `    onClick: () => {}\n` +
               `  }}\n` +
               `  fixed={${deviceMode === "desktop"}}\n` +
               `  ${commonProps}\n` +
               `/>`;
      case "pill-bar":
        return `import { PillBar } from "frosted-ui";\n\n` +
               `<PillBar\n` +
               `  items={navItems}\n` +
               `  showLabels={${deviceMode === "desktop"}}\n` +
               `  pillShape="full"\n` +
               `  ${commonProps}\n` +
               `/>`;
      case "pebble-bar":
        return `import { PebbleBar } from "frosted-ui";\n\n` +
               `<PebbleBar\n` +
               `  items={navItems}\n` +
               `  layout="organic"\n` +
               `  ${commonProps}\n` +
               `/>`;
      case "crystal-bar":
        return `import { CrystalBar } from "frosted-ui";\n\n` +
               `<CrystalBar\n` +
               `  items={navItems}\n` +
               `  clipAngle={12}\n` +
               `  ${commonProps}\n` +
               `/>`;
      case "arc-bar":
        return `import { ArcBar } from "frosted-ui";\n\n` +
               `<ArcBar\n` +
               `  items={navItems}\n` +
               `  arcHeight={15}\n` +
               `  ${commonProps}\n` +
               `/>`;
      case "ribbon-bar":
        return `import { RibbonBar } from "frosted-ui";\n\n` +
               `<RibbonBar\n` +
               `  items={navItems}\n` +
               `  showRibbonLayers={true}\n` +
               `  ${commonProps}\n` +
               `/>`;
      case "expandable-nav-sheet":
        return `import { ExpandableNavSheet } from "frosted-ui";\n\n` +
               `<ExpandableNavSheet\n` +
               `  items={navItems}\n` +
               `  menuItems={menuItems} // NavSheetItem[]\n` +
               `  loginLabel="Login"\n` +
               `  signupLabel="Sign Up"\n` +
               `  ${commonProps}\n` +
               `/>`;
      case "command-sheet":
        return `import { CommandSheet } from "frosted-ui";\n\n` +
               `const [open, setOpen] = useState(false);\n\n` +
               `<CommandSheet\n` +
               `  actions={actions} // CommandAction[]\n` +
               `  open={open}\n` +
               `  onOpenChange={setOpen}\n` +
               `  shortcut="k"\n` +
               `  placeholder="Search..."\n` +
               `  ${commonProps}\n` +
               `/>`;
      case "profile-sheet":
        return `import { ProfileSheet } from "frosted-ui";\n\n` +
               `const [open, setOpen] = useState(false);\n\n` +
               `<ProfileSheet\n` +
               `  user={{\n` +
               `    name: "Alex Rivera",\n` +
               `    email: "alex@frosted.dev",\n` +
               `    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",\n` +
               `    plan: "Pro Member"\n` +
               `  }}\n` +
               `  stats={[\n` +
               `    { label: "Projects", value: 48 },\n` +
               `    { label: "Stars", value: "2.4k" }\n` +
               `  ]}\n` +
               `  actions={actions} // ProfileAction[]\n` +
               `  open={open}\n` +
               `  onOpenChange={setOpen}\n` +
               `  ${commonProps}\n` +
               `/>`;
      case "app-launcher":
        return `import { AppLauncher } from "frosted-ui";\n\n` +
               `<AppLauncher\n` +
               `  apps={apps} // AppItem[]\n` +
               `  columns={4}\n` +
               `  pages={true}\n` +
               `  ${commonProps}\n` +
               `/>`;
      case "floating-search-orb":
        return `import { FloatingSearchOrb } from "frosted-ui";\n\n` +
               `<FloatingSearchOrb\n` +
               `  placeholder="Search..."\n` +
               `  onSearch={(val) => {}}\n` +
               `  fixed={${deviceMode === "desktop"}}\n` +
               `  ${commonProps}\n` +
               `/>`;
      case "floating-action-button":
        return `import { FloatingActionButton } from "frosted-ui";\n\n` +
               `<FloatingActionButton\n` +
               `  icon={<Plus />}\n` +
               `  actions={actions} // FABAction[]\n` +
               `  fixed={${deviceMode === "desktop"}}\n` +
               `  ${commonProps}\n` +
               `/>`;
      case "floating-command-bar":
        return `import { FloatingCommandBar } from "frosted-ui";\n\n` +
               `<FloatingCommandBar\n` +
               `  placeholder="Type a command..."\n` +
               `  onSubmit={(val) => {}}\n` +
               `  fixed={${deviceMode === "desktop"}}\n` +
               `  ${commonProps}\n` +
               `/>`;
      case "glass-agent-card":
        return `import { GlassAgentCard } from "frosted-ui";\n\n` +
               `<GlassAgentCard\n` +
               `  name="AutoGPT"\n` +
               `  role="Autonomous Execution Agent"\n` +
               `  status="thinking"\n` +
               `  tools={["Search", "Code Interpreter"]}\n` +
               `/>`;
      case "glass-thinking-panel":
        return `import { GlassThinkingPanel } from "frosted-ui";\n\n` +
               `<GlassThinkingPanel\n` +
               `  steps={[\n` +
               `    { text: "Analyzing goal...", status: "done" },\n` +
               `    { text: "Executing subtask...", status: "active" },\n` +
               `    { text: "Verifying output...", status: "pending" }\n` +
               `  ]}\n` +
               `/>`;
      case "glass-workflow-node":
        return `import { GlassWorkflowNode } from "frosted-ui";\n\n` +
               `<GlassWorkflowNode\n` +
               `  title="Data Extraction"\n` +
               `  type="process"\n` +
               `  active={true}\n` +
               `/>`;
      case "glass-reasoning-bubble":
        return `import { GlassReasoningBubble } from "frosted-ui";\n\n` +
               `<GlassReasoningBubble>\n` +
               `  <p>Based on the user's request, I should first extract the data...</p>\n` +
               `</GlassReasoningBubble>`;
      case "glass-memory-panel":
        return `import { GlassMemoryPanel } from "frosted-ui";\n\n` +
               `<GlassMemoryPanel\n` +
               `  memories={[\n` +
               `    { id: "1", type: "short", content: "User prefers dark mode." },\n` +
               `    { id: "2", type: "long", content: "Main project is frosted-ui." }\n` +
               `  ]}\n` +
               `/>`;
      case "glass-knowledge-graph":
        return `import { GlassKnowledgeGraph } from "frosted-ui";\n\n` +
               `<GlassKnowledgeGraph\n` +
               `  nodes={[\n` +
               `    { id: "1", label: "User", x: 20, y: 30 },\n` +
               `    { id: "2", label: "Settings", x: 80, y: 70 }\n` +
               `  ]}\n` +
               `/>`;
      case "glass-command-center":
        return `import { GlassCommandCenter } from "frosted-ui";\n\n` +
               `<GlassCommandCenter>\n` +
               `  <h1>Agent Dashboard</h1>\n` +
               `</GlassCommandCenter>`;
      default:
        return "";
    }
  };

  const handleCategoryChange = (cat: ComponentCategory) => {
    setActiveCategory(cat);
    setSelectedComponent(componentsList[cat][0].id);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between pb-8 z-10">

      {}
      <header className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-white/[0.08] backdrop-blur-md sticky top-0 z-40 bg-[#030303]/60">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-[0_0_24px_rgba(168,85,247,0.4)]">
            <span className="text-xl font-bold text-white leading-none">✦</span>
          </div>
          <div>
            <h1 className="text-xl font-bold m-0 p-0 tracking-tight text-white flex items-center gap-2">
              Frosted UI <span className="text-[11px] font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded-full uppercase tracking-wider">v1.0.0</span>
            </h1>
            <p className="text-xs text-white/50 m-0 p-0 mt-0.5">Component Playground & Interactive Sandbox</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/charanbalaji2005/Frosted-UI-Components"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.03]"
          >
            <span>GitHub</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </header>

      {}
      <main className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 flex-1">

        {}
        <section className="lg:col-span-4 flex flex-col gap-6">

          {}
          <div className="flex p-1 rounded-2xl bg-white/[0.04] border border-white/[0.06] backdrop-blur-md overflow-x-auto scrollbar-none">
            {(["navigation", "sheets", "floating", "agents"] as ComponentCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`flex-1 py-2 text-sm font-medium capitalize rounded-xl transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-white/[0.09] text-white shadow-sm border border-white/[0.08]"
                    : "text-white/40 hover:text-white/75 border border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {}
          <div className="flex flex-col gap-2 p-4 rounded-3xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-md max-h-[350px] overflow-y-auto scrollbar-none">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-2 px-2 flex items-center gap-1.5">
              <Layers size={13} />
              <span>Select Component</span>
            </h3>
            {componentsList[activeCategory].map((comp) => (
              <button
                key={comp.id}
                onClick={() => setSelectedComponent(comp.id)}
                className={`text-left p-3 rounded-2xl border transition-all duration-200 group ${
                  selectedComponent === comp.id
                    ? "bg-gradient-to-r from-purple-500/15 to-pink-500/15 border-purple-500/35 text-white shadow-sm"
                    : "bg-transparent border-transparent hover:bg-white/[0.02] text-white/60 hover:text-white/90"
                }`}
              >
                <div className="font-semibold text-sm group-hover:text-white transition-colors">{comp.name}</div>
                <div className="text-[11px] opacity-65 mt-0.5 font-light leading-relaxed">{comp.desc}</div>
              </button>
            ))}
          </div>

          {}
          <div className="p-5 rounded-3xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-md flex flex-col gap-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 flex items-center gap-1.5">
              <Palette size={13} />
              <span>Customize Options</span>
            </h3>

            {}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-white/65">Glass Theme Variant</label>
              <div className="grid grid-cols-4 gap-1.5 p-1 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                {(["dark", "light", "ultra", "tinted"] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`py-1.5 text-xs rounded-lg font-medium transition-all ${
                      variant === v
                        ? "bg-white/[0.1] text-white border border-white/[0.08]"
                        : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {}
            <div className="flex items-center justify-between py-2 border-t border-white/[0.06]">
              <div>
                <label className="text-xs font-medium text-white/75 block">Enable Glow Aura</label>
                <span className="text-[10px] text-white/40">Soft background color radial glow</span>
              </div>
              <button
                onClick={() => setGlow(!glow)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none ${
                  glow ? "bg-purple-500" : "bg-white/[0.08]"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    glow ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {}
            <div className="flex items-center justify-between py-2 border-t border-white/[0.06]">
              <div>
                <label className="text-xs font-medium text-white/75 block">Device Sandbox</label>
                <span className="text-[10px] text-white/40">Simulate mobile or desktop canvas</span>
              </div>
              <div className="flex bg-white/[0.04] p-0.5 rounded-lg border border-white/[0.05]">
                <button
                  onClick={() => setDeviceMode("mobile")}
                  className={`p-1.5 rounded-md transition-all ${
                    deviceMode === "mobile" ? "bg-white/[0.08] text-white" : "text-white/40 hover:text-white/70"
                  }`}
                  title="Simulate iOS/Android Mobile"
                >
                  <Smartphone size={14} />
                </button>
                <button
                  onClick={() => setDeviceMode("desktop")}
                  className={`p-1.5 rounded-md transition-all ${
                    deviceMode === "desktop" ? "bg-white/[0.08] text-white" : "text-white/40 hover:text-white/70"
                  }`}
                  title="Full Screen Canvas"
                >
                  <Laptop size={14} />
                </button>
              </div>
            </div>
            
            {/* Glass Customization Options */}
            <div className="flex flex-col gap-3 py-3 border-t border-white/[0.06]">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-xs font-medium text-white/75 block">Glass Color</label>
                  <span className="text-[10px] text-white/40">Base tint for all frosted layers</span>
                </div>
                <div className="p-0.5 bg-white/[0.04] rounded-lg border border-white/[0.05] flex items-center justify-center">
                  <input 
                    type="color" 
                    value={glassColor} 
                    onChange={(e) => setGlassColor(e.target.value)}
                    className="w-7 h-7 rounded-md cursor-pointer bg-transparent border-0 p-0 m-0"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2 mt-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium text-white/75 block">Glass Transparency</label>
                  <span className="text-[10px] text-white/40 font-mono">{Math.round(glassOpacity * 100)}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" max="1" step="0.01" 
                  value={glassOpacity} 
                  onChange={(e) => setGlassOpacity(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500 hover:accent-purple-400"
                />
              </div>
            </div>

          </div>
        </section>

        {}
        <section className="lg:col-span-8 flex flex-col gap-6 items-center">
          <style>{`
            .backdrop-blur-2xl {
              background-color: color-mix(in srgb, ${glassColor} ${Math.round(glassOpacity * 100)}%, transparent) !important;
            }
          `}</style>

          <div className="w-full flex items-center justify-between px-2">
            <h2 className="text-sm font-semibold tracking-wider uppercase text-white/50 m-0">Live Active Preview</h2>
            <div className="text-xs text-white/40 flex items-center gap-1.5 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Interactive Simulator</span>
            </div>
          </div>

          {}
          <div className="w-full flex items-center justify-center p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md min-h-[780px] relative overflow-hidden">

            {}
            <div className="absolute top-1/4 left-1/4 h-48 w-48 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20 blur-3xl pointer-events-none animate-float" />
            <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-gradient-to-tr from-blue-500/10 to-teal-500/10 blur-3xl pointer-events-none" />

            {}
            {deviceMode === "mobile" ? (
              <div className="w-[360px] h-[720px] rounded-[48px] border-[8px] border-neutral-800 bg-[#07070a] shadow-[0_24px_50px_rgba(0,0,0,0.8)] relative flex flex-col justify-between overflow-hidden z-10 [transform:translate3d(0,0,0)]">
                {}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-28 rounded-full bg-black z-50 flex items-center justify-center gap-1.5">
                  <div className="h-1 w-1 rounded-full bg-neutral-800" />
                  <div className="h-1 w-8 rounded-full bg-neutral-900" />
                  <div className="h-1.5 w-1.5 rounded-full bg-neutral-800" />
                </div>

                {}
                <div className="flex-1 w-full p-6 pt-12 flex flex-col justify-between relative overflow-y-auto scrollbar-none bg-simulator-dark bg-noise">
                  {}
                  <div className="absolute top-1/3 left-10 w-44 h-44 rounded-full bg-gradient-to-tr from-purple-600/25 to-pink-600/25 blur-2xl pointer-events-none" />
                  <div className="absolute bottom-1/4 right-10 w-36 h-36 rounded-full bg-gradient-to-tr from-blue-600/20 to-teal-600/20 blur-2xl pointer-events-none" />
                  <div className="text-center mt-6">
                    <span className="text-[10px] font-bold tracking-widest text-purple-400 uppercase">Simulated View</span>
                    <h3 className="text-xl font-bold mt-1 text-white">Glassmorphism Touch UX</h3>
                    <p className="text-xs text-white/50 leading-relaxed mt-2">
                      Interact with the widgets and triggers to feel the spring velocity. All components are GPU accelerated.
                    </p>
                  </div>

                  {}
                  {activeCategory === "sheets" && (
                    <div className="flex flex-col gap-2.5 my-8">
                      {selectedComponent === "command-sheet" && (
                        <button
                          onClick={() => setCommandOpen(true)}
                          className="w-full py-3 px-4 rounded-2xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.12] text-sm font-semibold text-white shadow-sm flex items-center justify-between transition-all"
                        >
                          <span>Open Command Palette</span>
                          <kbd className="text-[10px] bg-white/10 px-2 py-0.5 rounded border border-white/15 text-white/70">⌘ K</kbd>
                        </button>
                      )}

                      {selectedComponent === "profile-sheet" && (
                        <button
                          onClick={() => setProfileOpen(true)}
                          className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-purple-500/80 to-pink-500/80 border border-white/[0.12] text-sm font-semibold text-white shadow-md flex items-center justify-center gap-2 transition-all hover:brightness-110"
                        >
                          <User size={15} />
                          <span>Trigger Profile Sheet</span>
                        </button>
                      )}
                    </div>
                  )}

                  <div className="h-32" />

                  {}
                  {selectedComponent === "floating-island-bar" && (
                    <div className="w-full flex justify-center pb-2">
                      <FloatingIslandBar
                        items={simpleNavItems}
                        centerAction={{
                          icon: <Plus size={20} />,
                          onClick: () => alert("Island Center action clicked")
                        }}
                        fixed={false}
                        variant={variant}
                        glow={glow}
                      />
                    </div>
                  )}

                  {selectedComponent === "pill-bar" && (
                    <div className="absolute inset-x-0 bottom-12 flex justify-center z-30">
                      <PillBar
                        items={simpleNavItems}
                        showLabels={false}
                        pillShape="full"
                        variant={variant}
                        glow={glow}
                        fixed={false}
                      />
                    </div>
                  )}

                  {selectedComponent === "pebble-bar" && (
                    <div className="absolute inset-x-0 bottom-12 flex justify-center z-30">
                      <PebbleBar
                        items={simpleNavItems}
                        layout="organic"
                        variant={variant}
                        glow={glow}
                        fixed={false}
                      />
                    </div>
                  )}



                  {selectedComponent === "crystal-bar" && (
                    <div className="absolute inset-x-0 bottom-12 flex justify-center z-30">
                      <CrystalBar
                        items={simpleNavItems}
                        variant={variant}
                        glow={glow}
                        fixed={false}
                      />
                    </div>
                  )}

                  {selectedComponent === "arc-bar" && (
                    <div className="absolute inset-x-0 bottom-12 flex justify-center z-30">
                      <ArcBar
                        items={simpleNavItems}
                        variant={variant}
                        glow={glow}
                        fixed={false}
                      />
                    </div>
                  )}

                  {selectedComponent === "ribbon-bar" && (
                    <div className="absolute inset-x-0 bottom-12 flex justify-center z-30">
                      <RibbonBar
                        items={simpleNavItems}
                        showRibbonLayers={true}
                        variant={variant}
                        glow={glow}
                        fixed={false}
                      />
                    </div>
                  )}

                  {}
                  {selectedComponent === "expandable-nav-sheet" && (
                    <div className="absolute inset-x-0 bottom-12 flex justify-center pb-2 z-30">
                      <ExpandableNavSheet
                        items={simpleNavItems}
                        menuItems={[
                          { id: "settings", label: "Account Settings", icon: <Settings size={18} />, onClick: () => alert("Settings clicked") },
                          { id: "feedback", label: "Submit Feedback", icon: <Mail size={18} />, onClick: () => alert("Feedback clicked") }
                        ]}
                        loginLabel="Sign In"
                        signupLabel="Sign Up"
                        variant={variant}
                        glow={glow}
                      />
                    </div>
                  )}

                  {selectedComponent === "command-sheet" && (
                    <CommandSheet
                      actions={commandActions}
                      open={commandOpen}
                      onOpenChange={setCommandOpen}
                      variant={variant}
                      glow={glow}
                    />
                  )}

                  {selectedComponent === "profile-sheet" && (
                    <ProfileSheet
                      user={{
                        name: "Alex Rivera",
                        email: "alex@frosted.dev",
                        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
                        plan: "Pro Member"
                      }}
                      stats={[
                        { label: "Projects", value: 48 },
                        { label: "Stars", value: "2.4k" }
                      ]}
                      actions={profileActions}
                      open={profileOpen}
                      onOpenChange={setProfileOpen}
                      variant={variant}
                      glow={glow}
                    />
                  )}

                  {}
                  {selectedComponent === "app-launcher" && (
                    <div className="w-full flex justify-center pb-2">
                      <AppLauncher
                        apps={apps}
                        columns={4}
                        pages={true}
                        variant={variant}
                        glow={glow}
                      />
                    </div>
                  )}

                  {selectedComponent === "floating-search-orb" && (
                    <FloatingSearchOrb
                      placeholder="Search sandbox..."
                      onSearch={(v) => alert(`Searching for: ${v}`)}
                      fixed={false}
                      variant={variant}
                      glow={glow}
                    />
                  )}

                  {selectedComponent === "floating-action-button" && (
                    <FloatingActionButton
                      icon={<Plus size={20} />}
                      actions={fabActions}
                      fixed={false}
                      variant={variant}
                      glow={glow}
                    />
                  )}

                  {selectedComponent === "floating-command-bar" && (
                    <div className="absolute inset-x-0 bottom-12 z-30">
                      <FloatingCommandBar
                        placeholder="Type a command..."
                        onSubmit={(v) => alert(`Submitted: ${v}`)}
                        fixed={false}
                        variant={variant}
                        glow={glow}
                      />
                    </div>
                  )}

                  {selectedComponent === "glass-agent-card" && (
                    <div className="absolute inset-x-4 top-1/3 flex justify-center z-30">
                      <GlassAgentCard
                        name="AutoGPT"
                        role="Autonomous Execution Agent"
                        status="thinking"
                        tools={["Search", "Code Interpreter"]}
                        className="w-full max-w-sm"
                      />
                    </div>
                  )}

                  {selectedComponent === "glass-thinking-panel" && (
                    <div className="absolute inset-x-4 top-1/4 flex justify-center z-30">
                      <GlassThinkingPanel
                        steps={[
                          { text: "Analyzing goal...", status: "done" },
                          { text: "Executing subtask...", status: "active" },
                          { text: "Verifying output...", status: "pending" }
                        ]}
                        className="w-full max-w-sm"
                      />
                    </div>
                  )}

                  {selectedComponent === "glass-workflow-node" && (
                    <div className="absolute inset-x-4 top-1/2 flex justify-center z-30">
                      <GlassWorkflowNode
                        title="Data Extraction"
                        type="process"
                        active={true}
                      />
                    </div>
                  )}

                  {selectedComponent === "glass-reasoning-bubble" && (
                    <div className="absolute inset-x-4 bottom-24 flex justify-center z-30">
                      <GlassReasoningBubble className="w-full max-w-sm">
                        <p>Based on the user's request, I should first extract the data, then parse it...</p>
                      </GlassReasoningBubble>
                    </div>
                  )}

                  {selectedComponent === "glass-memory-panel" && (
                    <div className="absolute inset-x-4 top-20 flex justify-center z-30">
                      <GlassMemoryPanel
                        memories={[
                          { id: "1", type: "short", content: "User prefers dark mode." },
                          { id: "2", type: "long", content: "Main project is frosted-ui." }
                        ]}
                        className="w-full max-w-sm"
                      />
                    </div>
                  )}

                  {selectedComponent === "glass-knowledge-graph" && (
                    <div className="absolute inset-x-4 top-1/3 flex justify-center z-30">
                      <GlassKnowledgeGraph
                        nodes={[
                          { id: "1", label: "User", x: 20, y: 30 },
                          { id: "2", label: "Settings", x: 80, y: 70 }
                        ]}
                        className="w-full max-w-sm"
                      />
                    </div>
                  )}

                  {selectedComponent === "glass-command-center" && (
                    <div className="absolute inset-4 flex items-center justify-center z-30">
                      <GlassCommandCenter>
                        <div className="grid grid-cols-1 gap-4 h-full">
                          <div className="h-24 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/[0.08] p-4 flex flex-col justify-between">
                            <h3 className="text-[10px] font-medium text-white/50 uppercase tracking-widest">Active Threads</h3>
                            <div className="text-3xl font-light text-white tracking-tighter">1,204</div>
                          </div>
                          <div className="h-24 rounded-2xl bg-white/[0.02] border border-white/[0.04] p-4 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full border-[3px] border-blue-500/30 border-t-blue-400 animate-spin shrink-0" />
                            <div>
                              <div className="text-sm font-medium text-white/80">Data Sync</div>
                              <div className="text-[10px] text-white/40 mt-1">Processing cluster nodes...</div>
                            </div>
                          </div>
                          <div className="h-24 rounded-2xl bg-white/[0.02] border border-white/[0.04] p-4 flex flex-col justify-center">
                            <div className="flex justify-between mb-2">
                              <span className="text-[10px] font-medium text-white/80">Memory Usage</span>
                              <span className="text-[10px] text-white/40">4.2 / 8.0 TB</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
                              <div className="w-[52%] h-full bg-gradient-to-r from-blue-500 to-purple-500" />
                            </div>
                          </div>
                        </div>
                      </GlassCommandCenter>
                    </div>
                  )}

                </div>

                {}
                <div className="w-full h-8 flex items-center justify-center bg-[#07070a] z-40 border-t border-white/[0.03]">
                  <div className="w-32 h-1 rounded-full bg-white/20" />
                </div>
              </div>
            ) : (

              <div className="w-full max-w-4xl h-[560px] border border-white/[0.08] bg-[#07070a] rounded-3xl relative overflow-hidden flex flex-col justify-between [transform:translate3d(0,0,0)]">

                {}
                <div className="w-full h-10 bg-[#0e0e12] border-b border-white/[0.04] px-4 flex items-center gap-2 justify-between z-20">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/35" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/35" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/20 border border-emerald-500/35" />
                  </div>
                  <div className="w-1/2 h-6 rounded-md bg-neutral-900 border border-white/[0.04] text-[10px] text-white/40 flex items-center justify-center font-mono">
                    https:
                  </div>
                  <div className="w-10" />
                </div>

                {}
                <div className="flex-1 w-full p-8 flex flex-col justify-center items-center bg-simulator-dark bg-noise relative">
                  {}
                  <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-tr from-purple-600/20 to-pink-600/20 blur-3xl pointer-events-none" />
                  <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-gradient-to-tr from-blue-600/15 to-teal-600/15 blur-3xl pointer-events-none" />

                  {}
                  <div className="text-center max-w-md">
                    <h3 className="text-lg font-bold text-white">Full Canvas Mode</h3>
                    <p className="text-xs text-white/40 mt-1">
                      See how the components anchor and float in standard web layouts.
                    </p>

                    {selectedComponent === "command-sheet" && (
                      <button
                        onClick={() => setCommandOpen(true)}
                        className="mt-6 py-2.5 px-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.12] text-xs font-semibold text-white shadow-sm transition-all"
                      >
                        Trigger Command Sheet
                      </button>
                    )}

                    {selectedComponent === "profile-sheet" && (
                      <button
                        onClick={() => setProfileOpen(true)}
                        className="mt-6 py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-500/80 to-pink-500/80 text-xs font-semibold text-white shadow-sm transition-all"
                      >
                        Trigger Profile Sheet
                      </button>
                    )}
                  </div>

                  {}
                  {selectedComponent === "floating-island-bar" && (
                    <div className="absolute bottom-6 z-30">
                      <FloatingIslandBar
                        items={navItems}
                        centerAction={{
                          icon: <Plus size={20} />,
                          onClick: () => alert("Island Center action clicked")
                        }}
                        fixed={false}
                        variant={variant}
                        glow={glow}
                      />
                    </div>
                  )}

                  {selectedComponent === "pill-bar" && (
                    <div className="absolute bottom-6 z-30">
                      <PillBar
                        items={navItems}
                        showLabels={true}
                        pillShape="full"
                        variant={variant}
                        glow={glow}
                        fixed={false}
                      />
                    </div>
                  )}

                  {selectedComponent === "pebble-bar" && (
                    <div className="absolute bottom-6 z-30">
                      <PebbleBar
                        items={navItems}
                        layout="organic"
                        variant={variant}
                        glow={glow}
                        fixed={false}
                      />
                    </div>
                  )}



                  {selectedComponent === "crystal-bar" && (
                    <div className="absolute bottom-6 z-30">
                      <CrystalBar
                        items={navItems}
                        variant={variant}
                        glow={glow}
                        fixed={false}
                      />
                    </div>
                  )}

                  {selectedComponent === "arc-bar" && (
                    <div className="absolute bottom-0 inset-x-0 w-full flex justify-center z-30">
                      <ArcBar
                        items={navItems}
                        variant={variant}
                        glow={glow}
                        fixed={false}
                      />
                    </div>
                  )}

                  {selectedComponent === "ribbon-bar" && (
                    <div className="absolute bottom-6 z-30">
                      <RibbonBar
                        items={navItems}
                        showRibbonLayers={true}
                        variant={variant}
                        glow={glow}
                        fixed={false}
                      />
                    </div>
                  )}

                  {}
                  {selectedComponent === "expandable-nav-sheet" && (
                    <div className="absolute bottom-6 z-30">
                      <ExpandableNavSheet
                        items={navItems}
                        menuItems={[
                          { id: "settings", label: "Account Settings", icon: <Settings size={18} />, onClick: () => alert("Settings clicked") },
                          { id: "feedback", label: "Submit Feedback", icon: <Mail size={18} />, onClick: () => alert("Feedback clicked") }
                        ]}
                        loginLabel="Sign In"
                        signupLabel="Sign Up"
                        variant={variant}
                        glow={glow}
                      />
                    </div>
                  )}

                  {selectedComponent === "command-sheet" && (
                    <CommandSheet
                      actions={commandActions}
                      open={commandOpen}
                      onOpenChange={setCommandOpen}
                      variant={variant}
                      glow={glow}
                    />
                  )}

                  {selectedComponent === "profile-sheet" && (
                    <ProfileSheet
                      user={{
                        name: "Alex Rivera",
                        email: "alex@frosted.dev",
                        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
                        plan: "Pro Member"
                      }}
                      stats={[
                        { label: "Projects", value: 48 },
                        { label: "Stars", value: "2.4k" }
                      ]}
                      actions={profileActions}
                      open={profileOpen}
                      onOpenChange={setProfileOpen}
                      variant={variant}
                      glow={glow}
                    />
                  )}

                  {}
                  {selectedComponent === "app-launcher" && (
                    <div className="absolute bottom-6 z-30">
                      <AppLauncher
                        apps={apps}
                        columns={4}
                        pages={true}
                        variant={variant}
                        glow={glow}
                      />
                    </div>
                  )}

                  {selectedComponent === "floating-search-orb" && (
                    <div className="absolute top-16 right-6 z-30">
                      <FloatingSearchOrb
                        placeholder="Search sandbox..."
                        onSearch={(v) => alert(`Searching for: ${v}`)}
                        fixed={false}
                        variant={variant}
                        glow={glow}
                      />
                    </div>
                  )}

                  {selectedComponent === "floating-action-button" && (
                    <div className="absolute bottom-6 right-6 z-30">
                      <FloatingActionButton
                        icon={<Plus size={20} />}
                        actions={fabActions}
                        fixed={false}
                        variant={variant}
                        glow={glow}
                      />
                    </div>
                  )}

                  {selectedComponent === "floating-command-bar" && (
                    <div className="absolute inset-x-0 bottom-12 flex justify-center z-30 px-4">
                      <div className="w-full max-w-md">
                        <FloatingCommandBar
                          placeholder="Type a command..."
                          onSubmit={(v) => alert(`Submitted: ${v}`)}
                          fixed={false}
                          variant={variant}
                          glow={glow}
                        />
                      </div>
                    </div>
                  )}

                  {selectedComponent === "glass-agent-card" && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                      <GlassAgentCard
                        name="AutoGPT"
                        role="Autonomous Execution Agent"
                        status="thinking"
                        tools={["Search", "Code Interpreter"]}
                        className="w-[380px]"
                      />
                    </div>
                  )}

                  {selectedComponent === "glass-thinking-panel" && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-lg">
                      <GlassThinkingPanel
                        steps={[
                          { text: "Analyzing goal...", status: "done" },
                          { text: "Executing subtask...", status: "active" },
                          { text: "Verifying output...", status: "pending" }
                        ]}
                      />
                    </div>
                  )}

                  {selectedComponent === "glass-workflow-node" && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                      <GlassWorkflowNode
                        title="Data Extraction"
                        type="process"
                        active={true}
                      />
                    </div>
                  )}

                  {selectedComponent === "glass-reasoning-bubble" && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 max-w-lg">
                      <GlassReasoningBubble>
                        <p>Based on the user's request, I should first extract the data, then parse it...</p>
                      </GlassReasoningBubble>
                    </div>
                  )}

                  {selectedComponent === "glass-memory-panel" && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 h-96">
                      <GlassMemoryPanel
                        memories={[
                          { id: "1", type: "short", content: "User prefers dark mode." },
                          { id: "2", type: "long", content: "Main project is frosted-ui." }
                        ]}
                      />
                    </div>
                  )}

                  {selectedComponent === "glass-knowledge-graph" && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-2xl">
                      <GlassKnowledgeGraph
                        nodes={[
                          { id: "1", label: "User", x: 20, y: 30 },
                          { id: "2", label: "Settings", x: 80, y: 70 }
                        ]}
                      />
                    </div>
                  )}

                  {selectedComponent === "glass-command-center" && (
                    <div className="absolute inset-8 flex items-center justify-center z-30">
                      <GlassCommandCenter>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                          <div className="col-span-1 md:col-span-2 h-48 rounded-2xl bg-white/[0.03] border border-white/[0.05] p-5 flex flex-col relative overflow-hidden group">
                            <h3 className="text-xs font-medium text-white/50 uppercase tracking-widest mb-4">Neural Activity</h3>
                            <div className="flex-1 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAxMDBMMjAgODBMMzAgOTVMNTAgNTBMNzAgNzBMMTAwIDIwTDEwMCAxMDBaIiBmaWxsPSJyZ2JhKDE2OCw4NSwyNDcsMC4xKSIvPjxwYXRoIGQ9Ik0wIDEwMEwyMCA4MEwzMCA5NUw1MCA1MEw3MCA3MEwxMDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNjgsODUsMjQ3LDAuOCkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] bg-no-repeat bg-[length:100%_100%] opacity-70 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-3xl pointer-events-none" />
                          </div>
                          
                          <div className="h-48 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/[0.08] p-5 flex flex-col justify-between">
                            <h3 className="text-xs font-medium text-white/50 uppercase tracking-widest">Active Threads</h3>
                            <div className="text-5xl font-light text-white tracking-tighter">1,204</div>
                            <div className="flex items-center gap-2 text-xs text-emerald-400">
                              <span>↑ 14%</span>
                              <span className="text-white/40">vs last hour</span>
                            </div>
                          </div>

                          <div className="h-32 rounded-2xl bg-white/[0.02] border border-white/[0.04] p-4 flex items-center gap-4">
                            <div className="w-12 h-12 shrink-0 rounded-full border-[3px] border-blue-500/30 border-t-blue-400 animate-spin" />
                            <div>
                              <div className="text-sm font-medium text-white/80">Data Sync</div>
                              <div className="text-xs text-white/40 mt-1">Processing cluster nodes...</div>
                            </div>
                          </div>
                          
                          <div className="h-32 rounded-2xl bg-white/[0.02] border border-white/[0.04] p-4 flex flex-col justify-center">
                            <div className="flex justify-between items-end mb-3">
                              <div>
                                <div className="text-sm font-medium text-white/80">Memory Usage</div>
                                <div className="text-xs text-white/40 mt-1">4.2 TB / 8.0 TB</div>
                              </div>
                              <span className="text-xs text-purple-400">52%</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-white/[0.05] overflow-hidden">
                              <div className="w-[52%] h-full bg-gradient-to-r from-blue-500 to-purple-500" />
                            </div>
                          </div>
                          
                          <div className="h-32 rounded-2xl bg-white/[0.02] border border-white/[0.04] p-4 flex items-center gap-4 overflow-hidden relative">
                            <div className="absolute inset-0 bg-amber-500/5" />
                            <div className="w-10 h-10 shrink-0 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 text-lg relative z-10">!</div>
                            <div className="relative z-10">
                              <div className="text-sm font-medium text-amber-400/90">Anomaly Detected</div>
                              <div className="text-xs text-white/40 mt-1">Sector 7G deviation</div>
                            </div>
                          </div>
                        </div>
                      </GlassCommandCenter>
                    </div>
                  )}

                </div>
              </div>
            )}
          </div>

          {}
          <div className="w-full flex flex-col gap-3 p-6 rounded-3xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 flex items-center gap-1.5 m-0">
                <Terminal size={13} />
                <span>Code Implementation</span>
              </h3>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(getCodeSnippet());
                  alert("Code copied to clipboard!");
                }}
                className="text-xs text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 px-3 py-1 rounded-full transition-all active:scale-95"
              >
                Copy Code
              </button>
            </div>

            {}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex flex-col gap-1 text-left">
                <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Install Package</span>
                <code className="text-xs font-mono text-white/85 select-all">npm install frosted-ui</code>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex flex-col gap-1 text-left">
                <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Import Component via CLI</span>
                <code className="text-xs font-mono text-purple-300 select-all">npx frosted {selectedComponent}</code>
              </div>
            </div>

            <pre className="text-xs text-white/80 overflow-x-auto p-4 rounded-xl bg-black/40 border border-white/5 font-mono leading-relaxed text-left max-h-[500px]">
              {getCodeSnippet()}
            </pre>
          </div>
        </section>

      </main>

      {}
      <footer className="text-xs text-white/35 mt-8 border-t border-white/[0.04] pt-4 w-full text-center">
        Built with Frosted UI Glassmorphism Core ✦ MIT License
      </footer>
    </div>
  );
}
