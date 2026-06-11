import { cn } from './chunk-H46JMQON.mjs';
import { backdropVariants, profileSheetVariants, springs } from './chunk-KQD7AAHC.mjs';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';

function ProfileSheet({
  user,
  stats = [],
  actions = [],
  open,
  onOpenChange,
  className
}) {
  return /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "fixed inset-0 z-50 backdrop-blur-sm bg-black/50",
        variants: backdropVariants,
        initial: "hidden",
        animate: "visible",
        exit: "exit",
        onClick: () => onOpenChange?.(false)
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "fixed inset-x-0 bottom-0 z-50 flex justify-center",
        variants: profileSheetVariants,
        initial: "hidden",
        animate: "visible",
        exit: "exit",
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "w-full max-w-lg overflow-hidden rounded-t-3xl",
              "backdrop-blur-2xl saturate-[180%]",
              "before:absolute before:inset-0 before:rounded-t-3xl",
              "before:bg-gradient-to-b before:from-white/[0.07] before:to-transparent",
              "before:pointer-events-none",
              "bg-[rgba(10,10,22,0.90)]",
              "border border-b-0 border-white/[0.10]",
              "shadow-[0_-20px_80px_rgba(0,0,0,0.7)]",
              className
            ),
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-t-3xl opacity-[0.025] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjbikiLz48L3N2Zz4=')]" }),
              /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-center pb-2 pt-3", children: [
                /* @__PURE__ */ jsx("div", { className: "h-1 w-10 rounded-full bg-white/20" }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "absolute right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.07] border border-white/[0.10] text-white/50 hover:text-white transition-colors",
                    onClick: () => onOpenChange?.(false),
                    "aria-label": "Close",
                    children: /* @__PURE__ */ jsx(X, { size: 15 })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative px-6 pb-5 pt-2 text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" }),
                /* @__PURE__ */ jsxs("div", { className: "relative mx-auto mb-3 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full", children: [
                  user.avatar ? /* @__PURE__ */ jsx("img", { src: user.avatar, alt: user.name, className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-500/70 to-blue-500/70 text-3xl", children: user.name.charAt(0) }),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full ring-2 ring-white/[0.18] ring-offset-0" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full shadow-[0_0_30px_rgba(120,80,255,0.4)]" })
                ] }),
                /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-white", children: user.name }),
                user.email && /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-sm text-white/40", children: user.email }),
                user.plan && /* @__PURE__ */ jsx("span", { className: "mt-2 inline-block rounded-full border border-purple-400/30 bg-gradient-to-r from-purple-500/25 to-blue-500/20 px-3 py-0.5 text-xs font-medium text-purple-300", children: user.plan })
              ] }),
              stats.length > 0 && /* @__PURE__ */ jsx("div", { className: "mx-4 mb-4 flex overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03]", children: stats.map((stat, i) => /* @__PURE__ */ jsxs(
                "div",
                {
                  className: cn(
                    "flex-1 py-3 text-center",
                    i < stats.length - 1 && "border-r border-white/[0.07]"
                  ),
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-white", children: stat.value }),
                    /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-[11px] text-white/35", children: stat.label })
                  ]
                },
                stat.label
              )) }),
              actions.length > 0 && /* @__PURE__ */ jsx("div", { className: "mx-4 mb-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]", children: actions.map((action, i) => /* @__PURE__ */ jsxs(
                motion.button,
                {
                  className: cn(
                    "flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors duration-150",
                    "focus-visible:outline-none focus-visible:bg-white/[0.06]",
                    i < actions.length - 1 && "border-b border-white/[0.06]",
                    action.destructive ? "hover:bg-red-500/10 text-red-400/80 hover:text-red-400" : "hover:bg-white/[0.05] text-white/75 hover:text-white"
                  ),
                  whileTap: { scale: 0.98 },
                  transition: springs.snap,
                  onClick: action.onClick,
                  children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg",
                          "bg-white/[0.06] border border-white/[0.08]",
                          action.destructive && "bg-red-500/10 border-red-400/15"
                        ),
                        children: action.icon
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "flex-1 text-sm font-medium", children: action.label }),
                    !action.destructive && /* @__PURE__ */ jsx(ChevronRight, { size: 15, className: "shrink-0 text-white/20" })
                  ]
                },
                action.id
              )) })
            ]
          }
        )
      }
    )
  ] }) });
}
var profile_sheet_default = ProfileSheet;

export { ProfileSheet, profile_sheet_default };
//# sourceMappingURL=chunk-6ON3GBAM.mjs.map
//# sourceMappingURL=chunk-6ON3GBAM.mjs.map