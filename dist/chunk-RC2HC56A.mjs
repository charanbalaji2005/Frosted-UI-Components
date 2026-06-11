import { cn } from './chunk-H46JMQON.mjs';
import { springs } from './chunk-KQD7AAHC.mjs';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { jsxs, jsx } from 'react/jsx-runtime';

var glassBase = [
  "backdrop-blur-2xl saturate-[180%]",
  "before:absolute before:inset-0 before:rounded-[inherit]",
  "before:bg-gradient-to-b before:from-white/[0.08] before:to-transparent",
  "before:pointer-events-none"
].join(" ");
function CrystalBar({
  items,
  clipAngle = 16,
  variant = "dark",
  glow = true,
  fixed = true,
  className
}) {
  const [activeId, setActiveId] = useState(
    items.find((i) => i.active)?.id ?? items[0]?.id
  );
  const styles = fixed ? { position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 50 } : {};
  const clipPath = `polygon(${clipAngle}px 0%, calc(100% - ${clipAngle}px) 0%, 100% 50%, calc(100% - ${clipAngle}px) 100%, ${clipAngle}px 100%, 0% 50%)`;
  return /* @__PURE__ */ jsxs(
    motion.nav,
    {
      style: styles,
      initial: { opacity: 0, scale: 0.9, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      transition: springs.smooth,
      "aria-label": "Crystal navigation",
      children: [
        glow && /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 left-1/2 h-8 w-2/3 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-xl pointer-events-none" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "relative flex items-center gap-2 px-8 py-3",
              glassBase,
              variant === "dark" ? "bg-white/[0.07] border-0 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "bg-black/[0.06]",
              className
            ),
            style: { clipPath },
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent pointer-events-none",
                  style: { clipPath }
                }
              ),
              items.map((item) => {
                const isActive = activeId === item.id;
                return /* @__PURE__ */ jsxs(
                  motion.button,
                  {
                    className: cn(
                      "relative flex h-11 w-11 items-center justify-center rounded-xl text-[18px]",
                      "transition-colors duration-150",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                      isActive ? "text-cyan-300" : "text-white/45 hover:text-white/80"
                    ),
                    whileTap: { scale: 0.88 },
                    transition: springs.snap,
                    onClick: () => {
                      setActiveId(item.id);
                      item.onClick?.();
                    },
                    "aria-label": item.label,
                    "aria-current": isActive ? "page" : void 0,
                    children: [
                      isActive && /* @__PURE__ */ jsx(
                        motion.span,
                        {
                          className: "absolute inset-0 rounded-xl bg-cyan-400/15 ring-1 ring-cyan-400/30",
                          layoutId: "crystal-active",
                          transition: springs.smooth
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        motion.span,
                        {
                          className: "relative z-10 flex items-center justify-center",
                          animate: isActive ? { y: [0, -5, 0] } : { y: 0 },
                          transition: { type: "spring", stiffness: 400, damping: 10 },
                          whileHover: { scale: 1.15, rotate: [0, -6, 6, 0] },
                          children: item.icon
                        }
                      )
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
function ArcBar({
  items,
  arcHeight = 18,
  variant = "dark",
  glow = true,
  fixed = true,
  className
}) {
  const [activeId, setActiveId] = useState(
    items.find((i) => i.active)?.id ?? items[0]?.id
  );
  const styles = fixed ? { position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 50 } : {};
  return /* @__PURE__ */ jsx(
    motion.nav,
    {
      style: styles,
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: springs.smooth,
      "aria-label": "Arc navigation",
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "relative flex items-center gap-2 px-6 py-4",
            glassBase,
            variant === "dark" ? "bg-white/[0.07] border border-white/[0.11] shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "bg-black/[0.05] border border-black/[0.08]",
            className
          ),
          style: {
            borderRadius: `${arcHeight * 2}px ${arcHeight * 2}px 20px 20px`
          },
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute left-[10%] right-[10%] top-[-2px] h-[2px] rounded-full bg-gradient-to-r from-transparent via-purple-400/60 to-transparent pointer-events-none"
              }
            ),
            glow && /* @__PURE__ */ jsx("div", { className: "absolute left-[20%] right-[20%] top-0 h-px rounded-full bg-gradient-to-r from-transparent via-blue-300/40 to-transparent pointer-events-none" }),
            items.map((item) => {
              const isActive = activeId === item.id;
              return /* @__PURE__ */ jsxs(
                motion.button,
                {
                  className: cn(
                    "relative flex h-11 w-11 items-center justify-center rounded-2xl text-[18px]",
                    "transition-colors duration-150",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                    isActive ? "text-purple-300" : "text-white/45 hover:text-white/80"
                  ),
                  whileTap: { scale: 0.88 },
                  transition: springs.snap,
                  onClick: () => {
                    setActiveId(item.id);
                    item.onClick?.();
                  },
                  "aria-label": item.label,
                  "aria-current": isActive ? "page" : void 0,
                  children: [
                    isActive && /* @__PURE__ */ jsx(
                      motion.span,
                      {
                        className: "absolute inset-0 rounded-2xl bg-purple-400/15 ring-1 ring-purple-400/25",
                        layoutId: "arc-active",
                        transition: springs.smooth
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      motion.span,
                      {
                        className: "relative z-10 flex items-center justify-center",
                        animate: isActive ? { y: [0, -5, 0] } : { y: 0 },
                        transition: { type: "spring", stiffness: 400, damping: 10 },
                        whileHover: { scale: 1.15, rotate: [0, -6, 6, 0] },
                        children: item.icon
                      }
                    ),
                    isActive && /* @__PURE__ */ jsx(
                      motion.span,
                      {
                        className: "absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-purple-400",
                        initial: { scale: 0 },
                        animate: { scale: 1 },
                        transition: springs.bouncy
                      }
                    )
                  ]
                },
                item.id
              );
            })
          ]
        }
      )
    }
  );
}
function RibbonBar({
  items,
  showRibbonLayers = true,
  variant = "dark",
  glow = true,
  fixed = true,
  className
}) {
  const [activeId, setActiveId] = useState(
    items.find((i) => i.active)?.id ?? items[0]?.id
  );
  const styles = fixed ? { position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 50 } : {};
  return /* @__PURE__ */ jsxs(
    motion.nav,
    {
      style: styles,
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: springs.smooth,
      "aria-label": "Ribbon navigation",
      className: cn("flex flex-col items-stretch", className),
      children: [
        showRibbonLayers && /* @__PURE__ */ jsx("div", { className: cn(
          "relative mx-3 h-3 rounded-t-2xl border border-b-0 backdrop-blur-xl",
          variant === "dark" ? "bg-white/[0.05] border-white/[0.08]" : "bg-black/[0.03] border-black/[0.05]"
        ) }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "relative z-10 flex items-center justify-around px-5 py-3.5 rounded-3xl",
              glassBase,
              variant === "dark" ? "bg-white/[0.08] border border-white/[0.13] shadow-[0_8px_32px_rgba(0,0,0,0.45)]" : "bg-black/[0.06] border border-black/[0.09]"
            ),
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-3xl opacity-[0.025] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjbikiLz48L3N2Zz4=')] pointer-events-none" }),
              items.map((item) => {
                const isActive = activeId === item.id;
                return /* @__PURE__ */ jsxs(
                  motion.button,
                  {
                    className: cn(
                      "relative flex h-11 w-11 items-center justify-center rounded-2xl text-[18px]",
                      "transition-colors duration-150",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                      isActive ? "text-amber-300" : "text-white/45 hover:text-white/80"
                    ),
                    whileTap: { scale: 0.88 },
                    transition: springs.snap,
                    onClick: () => {
                      setActiveId(item.id);
                      item.onClick?.();
                    },
                    "aria-label": item.label,
                    "aria-current": isActive ? "page" : void 0,
                    children: [
                      isActive && /* @__PURE__ */ jsx(
                        motion.span,
                        {
                          className: "absolute inset-0 rounded-2xl bg-amber-400/15 ring-1 ring-amber-400/25",
                          layoutId: "ribbon-active",
                          transition: springs.smooth
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        motion.span,
                        {
                          className: "relative z-10 flex items-center justify-center",
                          animate: isActive ? { y: [0, -5, 0] } : { y: 0 },
                          transition: { type: "spring", stiffness: 400, damping: 10 },
                          whileHover: { scale: 1.15, rotate: [0, -6, 6, 0] },
                          children: item.icon
                        }
                      )
                    ]
                  },
                  item.id
                );
              })
            ]
          }
        ),
        showRibbonLayers && /* @__PURE__ */ jsx("div", { className: cn(
          "relative mx-5 h-2.5 rounded-b-2xl border border-t-0 backdrop-blur-lg",
          variant === "dark" ? "bg-white/[0.03] border-white/[0.06]" : "bg-black/[0.02] border-black/[0.04]"
        ) }),
        glow && /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 left-1/2 h-6 w-3/5 -translate-x-1/2 rounded-full bg-amber-500/15 blur-xl pointer-events-none" })
      ]
    }
  );
}

export { ArcBar, CrystalBar, RibbonBar };
//# sourceMappingURL=chunk-RC2HC56A.mjs.map
//# sourceMappingURL=chunk-RC2HC56A.mjs.map