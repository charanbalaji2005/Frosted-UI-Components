export { ProfileSheet } from './chunk-6ON3GBAM.mjs';
export { FloatingActionButton, FloatingCommandBar, FloatingSearchOrb } from './chunk-IRSNCBS5.mjs';
export { frostedPreset } from './chunk-YT3Q3PUV.mjs';
export { FloatingIslandBar } from './chunk-TRKO44UD.mjs';
export { ExpandableNavSheet } from './chunk-Z7YU4R6B.mjs';
export { PillBar } from './chunk-CQRLW3RG.mjs';
export { PebbleBar } from './chunk-FMS23VZE.mjs';
export { ArcBar, CrystalBar, RibbonBar } from './chunk-RC2HC56A.mjs';
export { AppLauncher } from './chunk-EK52DXSX.mjs';
export { CommandSheet } from './chunk-WNDN3WOH.mjs';
import { cn } from './chunk-H46JMQON.mjs';
export { GLASS_TOKENS, cn, glassLayers } from './chunk-H46JMQON.mjs';
import { springs } from './chunk-KQD7AAHC.mjs';
export { activeBubbleVariants, backdropVariants, cardVariants, commandSheetVariants, dockIconVariants, fabActionVariants, hoverLift, islandBarVariants, orbPulseVariants, pebbleVariants, profileSheetVariants, searchExpandVariants, sheetVariants, springs, tapScale, tweens } from './chunk-KQD7AAHC.mjs';
import { motion } from 'framer-motion';
import { Terminal, Activity, Network, Shield, Cpu } from 'lucide-react';
import { jsxs, jsx } from 'react/jsx-runtime';

var glassBase = [
  "backdrop-blur-2xl saturate-[180%]",
  "before:absolute before:inset-0 before:rounded-[inherit]",
  "before:bg-gradient-to-b before:from-white/[0.08] before:to-transparent",
  "before:pointer-events-none"
].join(" ");
function GlassAgentCard({
  name,
  role,
  status = "idle",
  avatar,
  tools = [],
  className
}) {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      whileHover: { y: -4, scale: 1.02 },
      transition: springs.smooth,
      className: cn(
        "relative flex flex-col gap-4 rounded-3xl p-5",
        glassBase,
        "bg-white/[0.05] border border-white/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-12 w-12 rounded-full bg-white/[0.1] border border-white/[0.15] flex items-center justify-center text-white/80 overflow-hidden", children: [
            avatar,
            status === "thinking" && /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: { rotate: 360 },
                transition: { duration: 3, repeat: Infinity, ease: "linear" },
                className: "absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(168,85,247,0.4)_360deg)]"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold text-base", children: name }),
            /* @__PURE__ */ jsx("p", { className: "text-white/50 text-xs", children: role })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 border border-white/[0.05]", children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: status === "thinking" ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : status === "executing" ? { scale: [1, 1.2, 1] } : {},
                transition: { duration: 1.5, repeat: Infinity },
                className: cn(
                  "w-2 h-2 rounded-full",
                  status === "idle" && "bg-white/30",
                  status === "thinking" && "bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.8)]",
                  status === "executing" && "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
                )
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] text-white/60 font-medium uppercase tracking-wider", children: status })
          ] })
        ] }),
        tools.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 pt-2 border-t border-white/[0.05]", children: tools.map((tool) => /* @__PURE__ */ jsx("span", { className: "px-2 py-1 rounded-md bg-white/[0.06] border border-white/[0.05] text-[10px] text-white/60", children: tool }, tool)) })
      ]
    }
  );
}
function GlassThinkingPanel({
  steps = [],
  currentStepIndex = 0,
  className
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn("relative rounded-3xl p-6 overflow-hidden", glassBase, "bg-[#07070a]/40 border border-white/[0.08]", className), children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        animate: { opacity: [0.1, 0.3, 0.1] },
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        className: "absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-purple-500/30 blur-3xl rounded-full pointer-events-none"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc] animate-pulse" }),
      /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-white/80", children: "Agent Thinking Process" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-[9px] top-4 bottom-4 w-[1px] bg-white/[0.05]" }),
      steps.map((step, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: cn(
          "w-5 h-5 rounded-full flex items-center justify-center shrink-0 border mt-0.5 transition-colors duration-500",
          step.status === "done" ? "bg-purple-500/20 border-purple-500/50" : step.status === "active" ? "bg-white/[0.1] border-white/30" : "bg-black/20 border-white/[0.05]"
        ), children: [
          step.status === "active" && /* @__PURE__ */ jsx(motion.div, { animate: { scale: [1, 0.5, 1] }, transition: { duration: 1.5, repeat: Infinity }, className: "w-1.5 h-1.5 bg-white/80 rounded-full" }),
          step.status === "done" && /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 text-purple-300", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) })
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, x: -10 },
            animate: { opacity: step.status === "pending" ? 0.4 : 1, x: 0 },
            className: "py-0.5",
            children: /* @__PURE__ */ jsx("p", { className: cn("text-xs leading-relaxed", step.status === "active" ? "text-white/90" : "text-white/50"), children: step.text })
          }
        )
      ] }, i))
    ] })
  ] });
}
function GlassWorkflowNode({
  title,
  type = "default",
  active = false,
  className
}) {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      whileHover: { scale: 1.05 },
      className: cn(
        "relative rounded-xl px-5 py-3 min-w-[140px] text-center flex items-center justify-center gap-3",
        glassBase,
        active ? "bg-purple-500/[0.15] border-purple-400/30" : "bg-white/[0.05] border-white/[0.1]",
        "border shadow-lg",
        className
      ),
      children: [
        type !== "input" && /* @__PURE__ */ jsx("div", { className: "absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/20 ring-4 ring-[#07070a]" }),
        /* @__PURE__ */ jsx("span", { className: cn("text-xs font-semibold tracking-wide", active ? "text-purple-100" : "text-white/70"), children: title }),
        type !== "output" && /* @__PURE__ */ jsx("div", { className: "absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/20 ring-4 ring-[#07070a]" }),
        active && /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute inset-0 rounded-xl border border-purple-400/50",
            animate: { opacity: [0, 1, 0] },
            transition: { duration: 2, repeat: Infinity }
          }
        )
      ]
    }
  );
}
function GlassReasoningBubble({
  children,
  className
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn(
    "relative max-w-lg rounded-3xl rounded-tl-sm p-5",
    glassBase,
    "bg-white/[0.04] border border-white/[0.08] shadow-[8px_8px_32px_rgba(0,0,0,0.3)]",
    className
  ), children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 -left-2 w-4 h-4 bg-white/[0.04] border-t border-l border-white/[0.08] transform -skew-x-[30deg] -z-10" }),
    /* @__PURE__ */ jsx("div", { className: "text-sm text-white/80 leading-relaxed space-y-2", children })
  ] });
}
function GlassMemoryPanel({
  memories = [],
  className
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn("w-72 rounded-3xl flex flex-col overflow-hidden", glassBase, "bg-[#07070a]/60 border border-white/[0.08]", className), children: [
    /* @__PURE__ */ jsx("div", { className: "p-4 border-b border-white/[0.05] bg-white/[0.02]", children: /* @__PURE__ */ jsx("h3", { className: "text-xs font-bold text-white/70 uppercase tracking-widest", children: "Context Memory" }) }),
    /* @__PURE__ */ jsx("div", { className: "p-4 flex flex-col gap-3 flex-1 overflow-y-auto", children: memories.map((m) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        className: "p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] relative group",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-white/20" }),
          /* @__PURE__ */ jsxs("span", { className: "text-[9px] text-white/40 font-mono mb-1 block uppercase", children: [
            m.type,
            " TERM"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-white/70 leading-snug", children: m.content })
        ]
      },
      m.id
    )) })
  ] });
}
function GlassCommandCenter({
  children,
  className
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn(
    "w-full h-full rounded-[40px] p-2 relative overflow-hidden flex flex-col",
    glassBase,
    "bg-[#0a0a0f]/80 border border-white/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.8)]",
    className
  ), children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPPHBhdGggZD0iTTAgNDBoNDBNNDAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] pointer-events-none" }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        animate: { rotate: 360 },
        transition: { duration: 150, repeat: Infinity, ease: "linear" },
        className: "absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(168,85,247,0.15)_360deg)] pointer-events-none"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-1 overflow-hidden rounded-[32px] bg-black/40 border border-white/[0.05] backdrop-blur-3xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-[72px] md:w-64 border-r border-white/[0.05] bg-white/[0.02] flex flex-col p-4 shrink-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-8 px-1 md:px-0 justify-center md:justify-start", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 md:w-8 md:h-8 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.4)]", children: /* @__PURE__ */ jsx(Terminal, { size: 16, className: "text-white" }) }),
          /* @__PURE__ */ jsx("span", { className: "hidden md:block font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 tracking-wide", children: "NEXUS" })
        ] }),
        /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-2 flex-1", children: [
          { id: "dash", icon: /* @__PURE__ */ jsx(Activity, { size: 18 }), label: "Dashboard", active: true },
          { id: "nodes", icon: /* @__PURE__ */ jsx(Network, { size: 18 }), label: "Neural Nodes" },
          { id: "sec", icon: /* @__PURE__ */ jsx(Shield, { size: 18 }), label: "Security Logs" },
          { id: "sys", icon: /* @__PURE__ */ jsx(Cpu, { size: 18 }), label: "System Core" }
        ].map((item) => /* @__PURE__ */ jsxs("button", { className: cn(
          "flex items-center justify-center md:justify-start gap-3 px-3 py-3 rounded-xl transition-all duration-300 group",
          item.active ? "bg-white/[0.08] border border-white/[0.05]" : "hover:bg-white/[0.04]"
        ), children: [
          /* @__PURE__ */ jsx("span", { className: cn(item.active ? "text-purple-400" : "text-white/40 group-hover:text-white/80"), children: item.icon }),
          /* @__PURE__ */ jsx("span", { className: cn(
            "hidden md:block text-sm font-medium",
            item.active ? "text-white/90" : "text-white/50 group-hover:text-white/80"
          ), children: item.label })
        ] }, item.id)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col relative overflow-hidden", children: [
        /* @__PURE__ */ jsxs("header", { className: "h-16 shrink-0 border-b border-white/[0.05] flex items-center justify-between px-6 bg-white/[0.01]", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-sm font-medium text-white/80 hidden sm:block", children: "Command Overview" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20", children: [
              /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold text-emerald-400 uppercase tracking-wider", children: "Online" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex -space-x-2", children: [
            /* @__PURE__ */ jsx("div", { className: "w-7 h-7 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-[10px] text-purple-300 font-bold z-20 backdrop-blur-md", children: "A1" }),
            /* @__PURE__ */ jsx("div", { className: "w-7 h-7 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-[10px] text-blue-300 font-bold z-10 backdrop-blur-md", children: "A2" }),
            /* @__PURE__ */ jsx("div", { className: "w-7 h-7 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-[10px] text-rose-300 font-bold z-0 backdrop-blur-md", children: "A3" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 p-6 overflow-y-auto scrollbar-none", children })
      ] })
    ] })
  ] });
}
function GlassKnowledgeGraph({
  nodes = [],
  className
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn(
    "relative w-full h-64 rounded-3xl overflow-hidden",
    glassBase,
    "bg-black/20 border border-white/[0.08]",
    className
  ), children: [
    /* @__PURE__ */ jsx("svg", { className: "absolute inset-0 w-full h-full pointer-events-none text-white/[0.05]", children: nodes.length > 1 && nodes.map((n, i) => {
      if (i === 0) return null;
      const prev = nodes[i - 1];
      return /* @__PURE__ */ jsx(
        "line",
        {
          x1: `${prev.x}%`,
          y1: `${prev.y}%`,
          x2: `${n.x}%`,
          y2: `${n.y}%`,
          stroke: "currentColor",
          strokeWidth: "1"
        },
        `line-${i}`
      );
    }) }),
    nodes.map((n) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "absolute w-20 text-center transform -translate-x-1/2 -translate-y-1/2",
        style: { left: `${n.x}%`, top: `${n.y}%` },
        whileHover: { scale: 1.1 },
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 mx-auto rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-md flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)]", children: /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-white/40" }) }),
          /* @__PURE__ */ jsx("span", { className: "mt-2 block text-[10px] text-white/60 font-medium", children: n.label })
        ]
      },
      n.id
    ))
  ] });
}

export { GlassAgentCard, GlassCommandCenter, GlassKnowledgeGraph, GlassMemoryPanel, GlassReasoningBubble, GlassThinkingPanel, GlassWorkflowNode };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map