'use strict';

var chunkCBUS6MRO_js = require('./chunk-CBUS6MRO.js');
var chunkVUFUBZXH_js = require('./chunk-VUFUBZXH.js');
var react = require('react');
var framerMotion = require('framer-motion');
var lucideReact = require('lucide-react');
var jsxRuntime = require('react/jsx-runtime');

function CommandSheet({
  actions,
  open,
  onOpenChange,
  shortcut = "k",
  placeholder = "Search commands\u2026",
  className
}) {
  const [query, setQuery] = react.useState("");
  const [selectedIndex, setSelectedIndex] = react.useState(0);
  const inputRef = react.useRef(null);
  const listRef = react.useRef(null);
  react.useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === shortcut) {
        e.preventDefault();
        onOpenChange?.(!open);
      }
      if (e.key === "Escape") onOpenChange?.(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onOpenChange, shortcut]);
  react.useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 80);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [open]);
  const filtered = react.useMemo(() => {
    if (!query.trim()) return actions;
    const q = query.toLowerCase();
    return actions.filter(
      (a) => a.label.toLowerCase().includes(q) || a.group?.toLowerCase().includes(q) || a.keywords?.some((k) => k.toLowerCase().includes(q))
    );
  }, [actions, query]);
  const groups = react.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    filtered.forEach((a) => {
      const g = a.group ?? "Actions";
      if (!map.has(g)) map.set(g, []);
      map.get(g).push(a);
    });
    return map;
  }, [filtered]);
  const flat = filtered;
  react.useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, flat.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        flat[selectedIndex]?.onSelect();
        onOpenChange?.(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, flat, selectedIndex, onOpenChange]);
  react.useEffect(() => {
    const el = listRef.current?.querySelector(`[data-index="${selectedIndex}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);
  let globalIndex = 0;
  return /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      framerMotion.motion.div,
      {
        className: "fixed inset-0 z-50 backdrop-blur-sm bg-black/40",
        variants: chunkVUFUBZXH_js.backdropVariants,
        initial: "hidden",
        animate: "visible",
        exit: "exit",
        onClick: () => onOpenChange?.(false)
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      framerMotion.motion.div,
      {
        className: "fixed inset-x-4 top-[15%] z-50 mx-auto max-w-xl",
        variants: chunkVUFUBZXH_js.commandSheetVariants,
        initial: "hidden",
        animate: "visible",
        exit: "exit",
        children: /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            className: chunkCBUS6MRO_js.cn(
              "overflow-hidden rounded-2xl",
              "backdrop-blur-2xl saturate-[180%]",
              "before:absolute before:inset-0 before:rounded-2xl",
              "before:bg-gradient-to-b before:from-white/[0.07] before:to-transparent",
              "before:pointer-events-none",
              "bg-[rgba(10,10,22,0.88)]",
              "border border-white/[0.10]",
              "shadow-[0_24px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)]",
              className
            ),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 rounded-2xl opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjbikiLz48L3N2Zz4=')]" }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3 border-b border-white/[0.07] px-4 py-3.5", children: [
                /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Search, { size: 17, className: "shrink-0 text-white/30" }),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "input",
                  {
                    ref: inputRef,
                    value: query,
                    onChange: (e) => {
                      setQuery(e.target.value);
                      setSelectedIndex(0);
                    },
                    placeholder,
                    className: "flex-1 bg-transparent text-sm text-white/90 outline-none placeholder:text-white/25"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  query && /* @__PURE__ */ jsxRuntime.jsx(
                    "button",
                    {
                      className: "rounded-md p-0.5 text-white/30 hover:text-white/60 transition-colors",
                      onClick: () => setQuery(""),
                      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { size: 14 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsxs("kbd", { className: "flex items-center gap-1 rounded-lg border border-white/[0.10] bg-white/[0.05] px-2 py-1 text-[11px] text-white/30", children: [
                    /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Command, { size: 11 }),
                    "K"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("div", { ref: listRef, className: "max-h-80 overflow-y-auto overscroll-contain p-2 scrollbar-thin", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "py-10 text-center text-sm text-white/25", children: [
                "No results for \u201C",
                query,
                "\u201D"
              ] }) : Array.from(groups.entries()).map(([group, groupActions]) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mb-1", children: [
                /* @__PURE__ */ jsxRuntime.jsx("p", { className: "mb-1 px-3 pt-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/25", children: group }),
                groupActions.map((action) => {
                  const idx = globalIndex++;
                  const isSelected = idx === selectedIndex;
                  return /* @__PURE__ */ jsxRuntime.jsxs(
                    framerMotion.motion.button,
                    {
                      "data-index": idx,
                      className: chunkCBUS6MRO_js.cn(
                        "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-100",
                        "focus-visible:outline-none",
                        isSelected ? "bg-purple-500/20 text-white" : "text-white/75 hover:bg-white/[0.06] hover:text-white"
                      ),
                      onMouseEnter: () => setSelectedIndex(idx),
                      onClick: () => {
                        action.onSelect();
                        onOpenChange?.(false);
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntime.jsx(
                          "span",
                          {
                            className: chunkCBUS6MRO_js.cn(
                              "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-sm",
                              "bg-white/[0.06] border border-white/[0.08]",
                              isSelected && "bg-purple-500/20 border-purple-400/20"
                            ),
                            children: action.icon
                          }
                        ),
                        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex-1 text-sm font-medium", children: action.label }),
                        action.shortcut && /* @__PURE__ */ jsxRuntime.jsx("kbd", { className: "shrink-0 rounded-lg border border-white/[0.10] bg-white/[0.04] px-2 py-0.5 text-[11px] text-white/30", children: action.shortcut }),
                        isSelected && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowRight, { size: 14, className: "shrink-0 text-purple-400" })
                      ]
                    },
                    action.id
                  );
                })
              ] }, group)) }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-4 border-t border-white/[0.06] px-4 py-2.5", children: [
                /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex items-center gap-1 text-[11px] text-white/25", children: [
                  /* @__PURE__ */ jsxRuntime.jsx("kbd", { className: "rounded border border-white/[0.10] bg-white/[0.04] px-1.5 py-0.5", children: "\u2191\u2193" }),
                  "navigate"
                ] }),
                /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex items-center gap-1 text-[11px] text-white/25", children: [
                  /* @__PURE__ */ jsxRuntime.jsx("kbd", { className: "rounded border border-white/[0.10] bg-white/[0.04] px-1.5 py-0.5", children: "\u21B5" }),
                  "select"
                ] }),
                /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex items-center gap-1 text-[11px] text-white/25", children: [
                  /* @__PURE__ */ jsxRuntime.jsx("kbd", { className: "rounded border border-white/[0.10] bg-white/[0.04] px-1.5 py-0.5", children: "esc" }),
                  "close"
                ] })
              ] })
            ]
          }
        )
      }
    )
  ] }) });
}
var command_sheet_default = CommandSheet;

exports.CommandSheet = CommandSheet;
exports.command_sheet_default = command_sheet_default;
//# sourceMappingURL=chunk-GSQF545Z.js.map
//# sourceMappingURL=chunk-GSQF545Z.js.map