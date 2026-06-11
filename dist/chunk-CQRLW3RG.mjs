import { cn } from './chunk-H46JMQON.mjs';
import { springs } from './chunk-KQD7AAHC.mjs';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { jsxs, jsx } from 'react/jsx-runtime';

function PillBar({
  items,
  showLabels = true,
  pillShape = "full",
  variant = "dark",
  glow = true,
  fixed = true,
  className
}) {
  const [activeId, setActiveId] = useState(
    items.find((i) => i.active)?.id ?? items[0]?.id
  );
  const positionStyles = fixed ? { position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 50 } : {};
  return /* @__PURE__ */ jsxs(
    motion.nav,
    {
      style: positionStyles,
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: springs.smooth,
      "aria-label": "Pill navigation",
      children: [
        glow && /* @__PURE__ */ jsx("div", { className: "absolute -bottom-3 left-1/2 h-6 w-3/5 -translate-x-1/2 rounded-full bg-purple-500/20 blur-xl pointer-events-none" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
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
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: cn(
                    "absolute inset-0 opacity-[0.025] pointer-events-none",
                    pillShape === "full" ? "rounded-full" : "rounded-3xl",
                    "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjbikiLz48L3N2Zz4=')]"
                  )
                }
              ),
              items.map((item) => {
                const isActive = activeId === item.id;
                return /* @__PURE__ */ jsxs(
                  motion.button,
                  {
                    className: cn(
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
                    transition: springs.snap,
                    "aria-label": item.label,
                    "aria-current": isActive ? "page" : void 0,
                    children: [
                      isActive && /* @__PURE__ */ jsx(
                        motion.span,
                        {
                          className: cn(
                            "absolute inset-0 bg-white/[0.13] ring-1 ring-white/20 shadow-[0_2px_12px_rgba(0,0,0,0.3)]",
                            pillShape === "full" ? "rounded-full" : "rounded-2xl"
                          ),
                          layoutId: "pill-active",
                          transition: springs.smooth
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        motion.span,
                        {
                          className: "relative z-10 text-[18px] leading-none flex items-center justify-center",
                          animate: isActive ? { y: [0, -5, 0] } : { y: 0 },
                          transition: { type: "spring", stiffness: 400, damping: 10 },
                          whileHover: { scale: 1.15, rotate: [0, -6, 6, 0] },
                          children: item.icon
                        }
                      ),
                      showLabels && /* @__PURE__ */ jsx("span", { className: "relative z-10 whitespace-nowrap", children: item.label }),
                      item.badge !== void 0 && item.badge > 0 && /* @__PURE__ */ jsx("span", { className: "relative z-10 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white", children: item.badge > 99 ? "99+" : item.badge })
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

export { PillBar, pill_bar_default };
//# sourceMappingURL=chunk-CQRLW3RG.mjs.map
//# sourceMappingURL=chunk-CQRLW3RG.mjs.map