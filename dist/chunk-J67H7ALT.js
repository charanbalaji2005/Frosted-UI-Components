'use strict';

var chunkCBUS6MRO_js = require('./chunk-CBUS6MRO.js');
var chunkVUFUBZXH_js = require('./chunk-VUFUBZXH.js');
var react = require('react');
var framerMotion = require('framer-motion');
var lucideReact = require('lucide-react');
var jsxRuntime = require('react/jsx-runtime');

function positionClass(pos) {
  return {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "bottom-center": "bottom-6 left-1/2 -translate-x-1/2",
    "top-right": "top-6 right-6"
  }[pos] ?? "bottom-6 right-6";
}
function FloatingSearchOrb({
  placeholder = "Search anything\u2026",
  onSearch,
  defaultExpanded = false,
  position = "bottom-right",
  fixed = true,
  glow = true,
  className
}) {
  const [expanded, setExpanded] = react.useState(defaultExpanded);
  const [value, setValue] = react.useState("");
  const inputRef = react.useRef(null);
  react.useEffect(() => {
    if (expanded) setTimeout(() => inputRef.current?.focus(), 150);
  }, [expanded]);
  const handleSubmit = () => {
    if (value.trim()) {
      onSearch?.(value);
      setValue("");
      setExpanded(false);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: chunkCBUS6MRO_js.cn(fixed && "fixed", positionClass(position), "z-50", className),
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          framerMotion.motion.div,
          {
            className: chunkCBUS6MRO_js.cn(
              "relative flex items-center overflow-hidden",
              "backdrop-blur-2xl saturate-[180%]",
              "bg-white/[0.09] border border-white/[0.15]",
              glow ? "shadow-[0_8px_40px_rgba(0,0,0,0.4),0_0_60px_rgba(120,80,255,0.25)]" : "shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
              "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/[0.10] before:to-transparent before:pointer-events-none"
            ),
            animate: {
              width: expanded ? 280 : 56,
              borderRadius: expanded ? 18 : 28
            },
            transition: chunkVUFUBZXH_js.springs.smooth,
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWx0ZXI9InVybCgjbikiLz48L3N2Zz4=')]" }),
              /* @__PURE__ */ jsxRuntime.jsx(
                framerMotion.motion.button,
                {
                  className: "relative flex h-14 w-14 shrink-0 items-center justify-center text-white/70 hover:text-white focus-visible:outline-none",
                  onClick: () => setExpanded((e) => !e),
                  "aria-label": expanded ? "Close search" : "Open search",
                  whileTap: { scale: 0.88 },
                  transition: chunkVUFUBZXH_js.springs.snap,
                  children: /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { mode: "wait", children: expanded ? /* @__PURE__ */ jsxRuntime.jsx(framerMotion.motion.span, { initial: { scale: 0, rotate: -90 }, animate: { scale: 1, rotate: 0 }, exit: { scale: 0, rotate: 90 }, transition: chunkVUFUBZXH_js.springs.snap, whileHover: { scale: 1.15, rotate: 10 }, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { size: 20 }) }, "x") : /* @__PURE__ */ jsxRuntime.jsx(framerMotion.motion.span, { initial: { scale: 0 }, animate: { scale: 1 }, exit: { scale: 0 }, transition: chunkVUFUBZXH_js.springs.snap, whileHover: { scale: 1.15, rotate: 10 }, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Search, { size: 20 }) }, "s") })
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { children: expanded && /* @__PURE__ */ jsxRuntime.jsxs(
                framerMotion.motion.div,
                {
                  className: "flex flex-1 items-center gap-2 pr-3",
                  initial: { opacity: 0, x: -10 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0 },
                  transition: { ...chunkVUFUBZXH_js.springs.smooth, delay: 0.05 },
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      "input",
                      {
                        ref: inputRef,
                        value,
                        onChange: (e) => setValue(e.target.value),
                        onKeyDown: (e) => e.key === "Enter" && handleSubmit(),
                        placeholder,
                        className: "flex-1 bg-transparent text-sm text-white/90 outline-none placeholder:text-white/25"
                      }
                    ),
                    value && /* @__PURE__ */ jsxRuntime.jsx(
                      framerMotion.motion.button,
                      {
                        className: "flex h-7 w-7 items-center justify-center rounded-full bg-purple-500/80 text-white shadow-[0_0_16px_rgba(120,80,255,0.4)]",
                        whileTap: { scale: 0.88 },
                        onClick: handleSubmit,
                        children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowUp, { size: 13 })
                      }
                    )
                  ]
                }
              ) })
            ]
          }
        ),
        !expanded && glow && /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.div,
          {
            className: "absolute inset-0 rounded-full border border-purple-400/20 pointer-events-none",
            variants: chunkVUFUBZXH_js.orbPulseVariants,
            initial: "rest",
            animate: "pulse"
          }
        )
      ]
    }
  );
}
function FloatingActionButton({
  icon,
  actions = [],
  position = "bottom-right",
  fixed = true,
  glow = true,
  className
}) {
  const [open, setOpen] = react.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: chunkCBUS6MRO_js.cn(fixed && "fixed", positionClass(position), "z-50 flex flex-col items-center gap-3", className), children: [
    /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { children: open && actions.map((action, i) => /* @__PURE__ */ jsxRuntime.jsxs(
      framerMotion.motion.div,
      {
        className: "flex items-center gap-2",
        custom: actions.length - 1 - i,
        variants: chunkVUFUBZXH_js.fabActionVariants,
        initial: "closed",
        animate: "open",
        exit: "closed",
        children: [
          action.label && /* @__PURE__ */ jsxRuntime.jsx(
            framerMotion.motion.span,
            {
              className: "rounded-xl border border-white/[0.10] bg-[rgba(10,10,22,0.85)] px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.4)]",
              initial: { opacity: 0, x: 10 },
              animate: { opacity: 1, x: 0 },
              transition: { ...chunkVUFUBZXH_js.springs.smooth, delay: (actions.length - 1 - i) * 0.05 + 0.05 },
              children: action.label
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            framerMotion.motion.button,
            {
              className: chunkCBUS6MRO_js.cn(
                "flex h-12 w-12 items-center justify-center rounded-full text-lg",
                "backdrop-blur-2xl",
                "bg-white/[0.09] border border-white/[0.14]",
                "shadow-[0_4px_20px_rgba(0,0,0,0.4)]",
                "hover:bg-white/[0.14] transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              ),
              style: action.color ? { background: action.color } : void 0,
              whileTap: { scale: 0.88 },
              transition: chunkVUFUBZXH_js.springs.snap,
              onClick: () => {
                action.onClick();
                setOpen(false);
              },
              "aria-label": action.label,
              children: /* @__PURE__ */ jsxRuntime.jsx(
                framerMotion.motion.span,
                {
                  className: "flex items-center justify-center",
                  whileHover: { scale: 1.18, rotate: [0, -8, 8, 0] },
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                  children: action.icon
                }
              )
            }
          )
        ]
      },
      action.id
    )) }),
    /* @__PURE__ */ jsxRuntime.jsxs(
      framerMotion.motion.button,
      {
        className: chunkCBUS6MRO_js.cn(
          "relative flex h-14 w-14 items-center justify-center rounded-full",
          "backdrop-blur-2xl",
          "bg-gradient-to-br from-purple-500/85 to-blue-500/85",
          "border border-white/[0.18] ring-1 ring-white/10",
          glow ? "shadow-[0_0_50px_rgba(120,80,255,0.5),0_8px_32px_rgba(0,0,0,0.5)]" : "shadow-[0_8px_24px_rgba(0,0,0,0.4)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
          "overflow-hidden"
        ),
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.9 },
        animate: { rotate: open ? 45 : 0 },
        transition: chunkVUFUBZXH_js.springs.bouncy,
        onClick: () => setOpen((o) => !o),
        "aria-expanded": open,
        "aria-label": open ? "Close actions" : "Open actions",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-white/[0.15] to-transparent pointer-events-none" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            framerMotion.motion.span,
            {
              className: "relative z-10 text-2xl text-white flex items-center justify-center",
              whileHover: { scale: 1.15, rotate: [0, -8, 8, 0] },
              transition: { type: "spring", stiffness: 400, damping: 10 },
              children: icon ?? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Plus, { size: 24 })
            }
          )
        ]
      }
    ),
    !open && glow && /* @__PURE__ */ jsxRuntime.jsx(
      framerMotion.motion.div,
      {
        className: "absolute bottom-0 left-1/2 h-14 w-14 -translate-x-1/2 rounded-full border border-purple-400/20 pointer-events-none",
        animate: { scale: [1, 1.15, 1], opacity: [0.4, 0.1, 0.4] },
        transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
      }
    )
  ] });
}
var DEFAULT_CHIPS = [
  { id: "voice", label: "Voice", icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Mic, { size: 13 }) },
  { id: "attach", label: "Attach", icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Paperclip, { size: 13 }) },
  { id: "quick", label: "Quick", icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Zap, { size: 13 }) },
  { id: "web", label: "Web", icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Globe, { size: 13 }) }
];
function FloatingCommandBar({
  placeholder = "Ask anything or type a command\u2026",
  onSubmit,
  chips,
  showVoice = true,
  showAttach = true,
  fixed = true,
  glow = true,
  className
}) {
  const [value, setValue] = react.useState("");
  const [focused, setFocused] = react.useState(false);
  const inputRef = react.useRef(null);
  const chipList = chips ?? DEFAULT_CHIPS;
  const handleSubmit = () => {
    if (value.trim()) {
      onSubmit?.(value);
      setValue("");
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.div,
    {
      className: chunkCBUS6MRO_js.cn(
        fixed && "fixed",
        fixed && "bottom-6 left-1/2 -translate-x-1/2",
        "z-50 w-full max-w-lg px-4",
        className
      ),
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: chunkVUFUBZXH_js.springs.smooth,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            className: chunkCBUS6MRO_js.cn(
              "relative overflow-hidden rounded-2xl",
              "backdrop-blur-2xl saturate-[180%]",
              "before:absolute before:inset-0 before:rounded-2xl",
              "before:bg-gradient-to-b before:from-white/[0.07] before:to-transparent",
              "before:pointer-events-none",
              "bg-[rgba(10,10,22,0.82)]",
              focused ? "border border-white/[0.18] shadow-[0_16px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(140,120,255,0.2)]" : "border border-white/[0.10] shadow-[0_12px_50px_rgba(0,0,0,0.5)]",
              "transition-[border-color,box-shadow] duration-300"
            ),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 rounded-2xl opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjbikiLz48L3N2Zz4=')]" }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3 px-4 py-3.5", children: [
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/70 to-blue-500/70 shadow-[0_0_20px_rgba(120,80,255,0.3)]", children: /* @__PURE__ */ jsxRuntime.jsx(
                  framerMotion.motion.span,
                  {
                    className: "text-base leading-none flex items-center justify-center",
                    animate: { rotate: 360 },
                    transition: { duration: 4, repeat: Infinity, ease: "linear" },
                    children: "\u2726"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "input",
                  {
                    ref: inputRef,
                    value,
                    onChange: (e) => setValue(e.target.value),
                    onKeyDown: (e) => e.key === "Enter" && !e.shiftKey && handleSubmit(),
                    onFocus: () => setFocused(true),
                    onBlur: () => setFocused(false),
                    placeholder,
                    className: "flex-1 bg-transparent text-sm text-white/90 outline-none placeholder:text-white/25"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  framerMotion.motion.button,
                  {
                    className: chunkCBUS6MRO_js.cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition-all duration-200",
                      value.trim() ? "bg-gradient-to-br from-purple-500/90 to-blue-500/90 border-white/[0.15] shadow-[0_4px_16px_rgba(100,80,255,0.35)] text-white" : "bg-white/[0.05] border-white/[0.08] text-white/30"
                    ),
                    whileTap: value.trim() ? { scale: 0.88 } : {},
                    transition: chunkVUFUBZXH_js.springs.snap,
                    onClick: handleSubmit,
                    disabled: !value.trim(),
                    "aria-label": "Send",
                    children: /* @__PURE__ */ jsxRuntime.jsx(
                      framerMotion.motion.span,
                      {
                        className: "flex items-center justify-center",
                        whileHover: { y: -2 },
                        transition: { type: "spring", stiffness: 400, damping: 10 },
                        children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowUp, { size: 15 })
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-2 overflow-x-auto px-4 pb-3 scrollbar-none", children: chipList.map((chip) => /* @__PURE__ */ jsxRuntime.jsxs(
                framerMotion.motion.button,
                {
                  className: "flex shrink-0 items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/50 transition-colors hover:border-white/[0.14] hover:bg-white/[0.09] hover:text-white/80 focus-visible:outline-none",
                  whileTap: { scale: 0.94 },
                  transition: chunkVUFUBZXH_js.springs.snap,
                  onClick: chip.onClick,
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      framerMotion.motion.span,
                      {
                        className: "flex items-center justify-center",
                        whileHover: { scale: 1.15, rotate: [0, -6, 6, 0] },
                        transition: { type: "spring", stiffness: 400, damping: 10 },
                        children: chip.icon
                      }
                    ),
                    chip.label
                  ]
                },
                chip.id
              )) })
            ]
          }
        ),
        glow && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pointer-events-none absolute -bottom-3 left-1/2 h-6 w-3/5 -translate-x-1/2 rounded-full bg-purple-500/15 blur-xl" })
      ]
    }
  );
}
var floating_elements_default = FloatingCommandBar;

exports.FloatingActionButton = FloatingActionButton;
exports.FloatingCommandBar = FloatingCommandBar;
exports.FloatingSearchOrb = FloatingSearchOrb;
exports.floating_elements_default = floating_elements_default;
//# sourceMappingURL=chunk-J67H7ALT.js.map
//# sourceMappingURL=chunk-J67H7ALT.js.map