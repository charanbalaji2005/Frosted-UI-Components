'use strict';

var chunkCBUS6MRO_js = require('./chunk-CBUS6MRO.js');
var chunkVUFUBZXH_js = require('./chunk-VUFUBZXH.js');
var react = require('react');
var framerMotion = require('framer-motion');
var jsxRuntime = require('react/jsx-runtime');

function ExpandableNavSheet({
  items,
  menuItems,
  defaultExpanded = false,
  loginLabel = "Log In",
  signupLabel = "Sign Up",
  onLogin,
  onSignup,
  expandTriggerId,
  className
}) {
  const [expanded, setExpanded] = react.useState(defaultExpanded);
  const [activeId, setActiveId] = react.useState(
    items.find((i) => i.active)?.id ?? items[0]?.id
  );
  const triggerItem = expandTriggerId ?? items[items.length - 1]?.id;
  const handleItemClick = (id) => {
    const item = items.find((i) => i.id === id);
    if (id === triggerItem) {
      setExpanded((prev) => !prev);
    } else {
      setActiveId(id);
      setExpanded(false);
      item?.onClick?.();
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: chunkCBUS6MRO_js.cn("relative", className), children: [
    /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { children: expanded && /* @__PURE__ */ jsxRuntime.jsx(
      framerMotion.motion.div,
      {
        className: "fixed inset-0 z-40 backdrop-blur-sm bg-black/30",
        variants: chunkVUFUBZXH_js.backdropVariants,
        initial: "hidden",
        animate: "visible",
        exit: "exit",
        onClick: () => setExpanded(false)
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "fixed bottom-0 left-0 right-0 z-50 flex justify-center", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-full max-w-lg", children: [
      /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { children: expanded && /* @__PURE__ */ jsxRuntime.jsxs(
        framerMotion.motion.div,
        {
          className: chunkCBUS6MRO_js.cn(
            "overflow-hidden rounded-t-3xl",
            "backdrop-blur-2xl saturate-[180%]",
            "bg-[rgba(10,10,22,0.88)]",
            "border border-white/[0.10] border-b-0",
            "shadow-[0_-20px_80px_rgba(0,0,0,0.6)]",
            "before:absolute before:inset-0 before:rounded-t-3xl",
            "before:bg-gradient-to-b before:from-white/[0.05] before:to-transparent",
            "before:pointer-events-none"
          ),
          variants: chunkVUFUBZXH_js.sheetVariants,
          initial: "collapsed",
          animate: "expanded",
          exit: "collapsed",
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex justify-center pt-3 pb-1", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-1 w-10 rounded-full bg-white/20" }) }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "px-6 pb-4 pt-2", children: [
              /* @__PURE__ */ jsxRuntime.jsx("p", { className: "mb-4 text-[11px] font-bold tracking-[0.1em] uppercase text-white/30", children: "Menu" }),
              /* @__PURE__ */ jsxRuntime.jsx("nav", { "aria-label": "Expanded menu", children: menuItems.map((item, i) => /* @__PURE__ */ jsxRuntime.jsxs(
                framerMotion.motion.button,
                {
                  className: chunkCBUS6MRO_js.cn(
                    "flex w-full items-center justify-between py-3",
                    "border-b border-white/[0.06] last:border-none",
                    "text-[15px] text-white/75 transition-colors duration-150",
                    "hover:text-white focus-visible:text-white",
                    "focus-visible:outline-none"
                  ),
                  initial: { opacity: 0, x: -10 },
                  animate: { opacity: 1, x: 0 },
                  transition: { ...chunkVUFUBZXH_js.springs.smooth, delay: i * 0.04 },
                  onClick: () => item.onClick?.(),
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex items-center gap-3", children: [
                      item.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-base opacity-60", children: item.icon }),
                      item.label
                    ] }),
                    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-white/20", children: "\u203A" })
                  ]
                },
                item.id
              )) }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-5 flex gap-3", children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  framerMotion.motion.button,
                  {
                    className: chunkCBUS6MRO_js.cn(
                      "flex-1 rounded-2xl py-3 text-sm font-semibold",
                      "bg-white/[0.06] border border-white/[0.10]",
                      "text-white/80 backdrop-blur-sm",
                      "transition-colors hover:bg-white/[0.10]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    ),
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { ...chunkVUFUBZXH_js.springs.smooth, delay: menuItems.length * 0.04 },
                    onClick: onLogin,
                    children: loginLabel
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  framerMotion.motion.button,
                  {
                    className: chunkCBUS6MRO_js.cn(
                      "flex-1 rounded-2xl py-3 text-sm font-semibold",
                      "bg-gradient-to-br from-purple-500/80 to-blue-500/80",
                      "text-white shadow-[0_4px_20px_rgba(100,80,255,0.35)]",
                      "ring-1 ring-white/10",
                      "transition-all hover:shadow-[0_6px_30px_rgba(100,80,255,0.5)]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    ),
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { ...chunkVUFUBZXH_js.springs.smooth, delay: menuItems.length * 0.04 + 0.04 },
                    onClick: onSignup,
                    children: signupLabel
                  }
                )
              ] })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: chunkCBUS6MRO_js.cn(
            "relative flex items-center justify-around px-4 py-3",
            "backdrop-blur-2xl saturate-[180%]",
            "bg-[rgba(10,10,22,0.85)]",
            "border border-white/[0.10]",
            expanded ? "rounded-none border-t border-white/[0.07]" : "rounded-3xl",
            "shadow-[0_-4px_40px_rgba(0,0,0,0.3)]",
            "transition-[border-radius] duration-300",
            "before:absolute before:inset-0",
            expanded ? "before:rounded-none" : "before:rounded-3xl",
            "before:bg-gradient-to-b before:from-white/[0.06] before:to-transparent",
            "before:pointer-events-none"
          ),
          children: items.map((item) => {
            const isActive = activeId === item.id;
            const isExpander = item.id === triggerItem;
            const isOpenExpander = isExpander && expanded;
            return /* @__PURE__ */ jsxRuntime.jsxs(
              "button",
              {
                className: chunkCBUS6MRO_js.cn(
                  "relative flex flex-col items-center gap-1 p-2 rounded-2xl",
                  "transition-colors duration-150",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                  isActive ? "text-purple-400" : "text-white/40 hover:text-white/70",
                  isOpenExpander && "text-purple-400"
                ),
                onClick: () => handleItemClick(item.id),
                "aria-label": item.label,
                "aria-expanded": isExpander ? expanded : void 0,
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    framerMotion.motion.span,
                    {
                      className: "text-xl leading-none",
                      animate: isOpenExpander ? { rotate: 45, scale: 1.1 } : { rotate: 0, scale: 1 },
                      transition: chunkVUFUBZXH_js.springs.snap,
                      children: item.icon
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "h-1 flex items-center justify-center", children: isActive && /* @__PURE__ */ jsxRuntime.jsx(
                    framerMotion.motion.span,
                    {
                      className: "block h-1 w-1 rounded-full bg-purple-400",
                      layoutId: "sheet-active",
                      transition: chunkVUFUBZXH_js.springs.bouncy
                    }
                  ) })
                ]
              },
              item.id
            );
          })
        }
      )
    ] }) })
  ] });
}
var expandable_nav_sheet_default = ExpandableNavSheet;

exports.ExpandableNavSheet = ExpandableNavSheet;
exports.expandable_nav_sheet_default = expandable_nav_sheet_default;
//# sourceMappingURL=chunk-J23Y4733.js.map
//# sourceMappingURL=chunk-J23Y4733.js.map