import { cn } from './chunk-H46JMQON.mjs';
import { springs, pebbleVariants } from './chunk-KQD7AAHC.mjs';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { jsx, jsxs } from 'react/jsx-runtime';

var SIZE_MAP = {
  sm: "w-11 h-11 text-base rounded-2xl",
  md: "w-14 h-14 text-xl rounded-[20px]",
  lg: "w-[72px] h-[72px] text-2xl rounded-3xl",
  xl: "w-20 h-20 text-3xl rounded-[28px]"
};
function PebbleBar({
  items,
  layout = "organic",
  variant = "dark",
  glow = true,
  fixed = true,
  className
}) {
  const [activeId, setActiveId] = useState(
    items.find((i) => i.active)?.id ?? items[0]?.id
  );
  const positionStyles = fixed ? { position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 50 } : {};
  const half = Math.ceil(items.length / 2);
  const row1 = items.slice(0, half);
  const row2 = items.slice(half);
  if (layout === "row") {
    return /* @__PURE__ */ jsx(
      motion.nav,
      {
        style: positionStyles,
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: springs.smooth,
        className: cn("flex items-end gap-3", className),
        "aria-label": "Pebble navigation",
        children: items.map((item, i) => /* @__PURE__ */ jsx(
          Pebble,
          {
            item,
            index: i,
            isActive: activeId === item.id,
            onActivate: () => {
              setActiveId(item.id);
              item.onClick?.();
            },
            glow
          },
          item.id
        ))
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    motion.nav,
    {
      style: positionStyles,
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: springs.smooth,
      className: cn("flex flex-col items-center gap-3", className),
      "aria-label": "Pebble navigation",
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-end gap-3", children: row1.map((item, i) => /* @__PURE__ */ jsx(
          Pebble,
          {
            item: { ...item, size: item.size ?? "lg" },
            index: i,
            isActive: activeId === item.id,
            onActivate: () => {
              setActiveId(item.id);
              item.onClick?.();
            },
            glow
          },
          item.id
        )) }),
        row2.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex items-end gap-3", children: row2.map((item, i) => /* @__PURE__ */ jsx(
          Pebble,
          {
            item: { ...item, size: item.size ?? "md" },
            index: i + row1.length,
            isActive: activeId === item.id,
            onActivate: () => {
              setActiveId(item.id);
              item.onClick?.();
            },
            glow
          },
          item.id
        )) })
      ]
    }
  );
}
function Pebble({
  item,
  index,
  isActive,
  onActivate,
  glow
}) {
  const size = item.size ?? "md";
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.8, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      transition: { ...springs.bouncy, delay: index * 0.05 },
      children: /* @__PURE__ */ jsxs(
        motion.button,
        {
          className: cn(
            "relative flex items-center justify-center",
            SIZE_MAP[size],
            "backdrop-blur-2xl saturate-[180%]",
            "before:absolute before:inset-0 before:rounded-[inherit]",
            "before:bg-gradient-to-br before:from-white/[0.10] before:to-transparent",
            "before:pointer-events-none",
            "after:absolute after:inset-[-1px] after:rounded-[inherit]",
            "after:border after:border-white/[0.10] after:pointer-events-none",
            isActive ? "bg-gradient-to-br from-purple-500/30 to-blue-500/20 border border-purple-400/40" : "bg-white/[0.07] border border-white/[0.10]",
            isActive && glow ? "shadow-[0_0_30px_rgba(120,80,255,0.35),0_4px_20px_rgba(0,0,0,0.4)]" : "shadow-[0_4px_20px_rgba(0,0,0,0.35)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
            "transition-[background,border-color,box-shadow] duration-300"
          ),
          variants: pebbleVariants,
          initial: "rest",
          whileHover: "hover",
          whileTap: "tap",
          onClick: onActivate,
          "aria-label": item.label,
          "aria-current": isActive ? "page" : void 0,
          title: item.label,
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-[inherit] opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWx0ZXI9InVybCgjbikiLz48L3N2Zz4=')] pointer-events-none" }),
            isActive && /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "absolute inset-0 rounded-[inherit] ring-2 ring-purple-400/40",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: springs.smooth
              }
            ),
            /* @__PURE__ */ jsx(
              motion.span,
              {
                className: "relative z-10 leading-none flex items-center justify-center",
                animate: isActive ? { y: [0, -6, 0] } : { y: 0 },
                transition: { type: "spring", stiffness: 450, damping: 12 },
                whileHover: { scale: 1.15, rotate: [0, -6, 6, 0] },
                children: item.icon
              }
            ),
            item.badge !== void 0 && item.badge > 0 && /* @__PURE__ */ jsx("span", { className: "absolute -right-1 -top-1 z-20 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white", children: item.badge })
          ]
        }
      )
    }
  );
}
var pebble_bar_default = PebbleBar;

export { PebbleBar, pebble_bar_default };
//# sourceMappingURL=chunk-FMS23VZE.mjs.map
//# sourceMappingURL=chunk-FMS23VZE.mjs.map