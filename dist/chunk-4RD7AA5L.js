'use strict';

var chunkCBUS6MRO_js = require('./chunk-CBUS6MRO.js');
var chunkVUFUBZXH_js = require('./chunk-VUFUBZXH.js');
var react = require('react');
var framerMotion = require('framer-motion');
var jsxRuntime = require('react/jsx-runtime');

function PillBar({
  items,
  showLabels = true,
  pillShape = "full",
  variant = "dark",
  glow = true,
  fixed = true,
  className
}) {
  const [activeId, setActiveId] = react.useState(
    items.find((i) => i.active)?.id ?? items[0]?.id
  );
  const positionStyles = fixed ? { position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 50 } : {};
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.nav,
    {
      style: positionStyles,
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: chunkVUFUBZXH_js.springs.smooth,
      "aria-label": "Pill navigation",
      children: [
        glow && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute -bottom-3 left-1/2 h-6 w-3/5 -translate-x-1/2 rounded-full bg-purple-500/20 blur-xl pointer-events-none" }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            className: chunkCBUS6MRO_js.cn(
              "relative flex items-center gap-1 p-2",
              pillShape === "full" ? "rounded-full" : "rounded-3xl",
              "backdrop-blur-2xl saturate-[180%]",
              "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/[0.08] before:to-transparent before:pointer-events-none",
              pillShape === "full" ? "before:rounded-full" : "before:rounded-3xl",
              "after:absolute after:inset-[-1px] after:border after:border-white/[0.10] after:pointer-events-none",
              pillShape === "full" ? "after:rounded-full" : "after:rounded-3xl",
              variant === "dark" ? "bg-white/[0.07] border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "bg-black/[0.06] border border-black/[0.08]",
              className
            ),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: chunkCBUS6MRO_js.cn(
                    "absolute inset-0 opacity-[0.025] pointer-events-none",
                    pillShape === "full" ? "rounded-full" : "rounded-3xl",
                    "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjbikiLz48L3N2Zz4=')]"
                  )
                }
              ),
              items.map((item) => {
                const isActive = activeId === item.id;
                return /* @__PURE__ */ jsxRuntime.jsxs(
                  framerMotion.motion.button,
                  {
                    className: chunkCBUS6MRO_js.cn(
                      "relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors duration-200",
                      pillShape === "full" ? "rounded-full" : "rounded-2xl",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                      isActive ? "text-white" : "text-white/45 hover:text-white/75"
                    ),
                    onClick: () => {
                      setActiveId(item.id);
                      item.onClick?.();
                    },
                    whileTap: { scale: 0.94 },
                    transition: chunkVUFUBZXH_js.springs.snap,
                    "aria-label": item.label,
                    "aria-current": isActive ? "page" : void 0,
                    children: [
                      isActive && /* @__PURE__ */ jsxRuntime.jsx(
                        framerMotion.motion.span,
                        {
                          className: chunkCBUS6MRO_js.cn(
                            "absolute inset-0 bg-white/[0.13] ring-1 ring-white/20 shadow-[0_2px_12px_rgba(0,0,0,0.3)]",
                            pillShape === "full" ? "rounded-full" : "rounded-2xl"
                          ),
                          layoutId: "pill-active",
                          transition: chunkVUFUBZXH_js.springs.smooth
                        }
                      ),
                      /* @__PURE__ */ jsxRuntime.jsx(
                        framerMotion.motion.span,
                        {
                          className: "relative z-10 text-[18px] leading-none flex items-center justify-center",
                          animate: isActive ? { y: [0, -5, 0] } : { y: 0 },
                          transition: { type: "spring", stiffness: 400, damping: 10 },
                          whileHover: { scale: 1.15, rotate: [0, -6, 6, 0] },
                          children: item.icon
                        }
                      ),
                      showLabels && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "relative z-10 whitespace-nowrap", children: item.label }),
                      item.badge !== void 0 && item.badge > 0 && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "relative z-10 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white", children: item.badge > 99 ? "99+" : item.badge })
                    ]
                  },
                  item.id
                );
              })
            ]
          }
        )
      ]
    }
  );
}
var pill_bar_default = PillBar;

exports.PillBar = PillBar;
exports.pill_bar_default = pill_bar_default;
//# sourceMappingURL=chunk-4RD7AA5L.js.map
//# sourceMappingURL=chunk-4RD7AA5L.js.map