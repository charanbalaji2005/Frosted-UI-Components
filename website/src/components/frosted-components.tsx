"use client";

import React, { useState, useEffect, useRef, createContext, useContext } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import { 
  Check, ChevronDown, Star, Search, Menu, X, ArrowRight, 
  Terminal, Activity, Network, Shield, Cpu, Users, CreditCard, DollarSign, ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── BUTTON ──────────────────────────────────────────────────────────────────
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "glass" | "outline" | "flat";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, any>(
  ({ className, variant = "glass", size = "md", isLoading = false, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    return (
      <motion.button
        ref={ref as any}
        disabled={disabled || isLoading}
        whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -1 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className={cn(
          "relative inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 active:outline-none disabled:opacity-50 disabled:pointer-events-none overflow-hidden",
          {
            "backdrop-blur-md saturate-[180%] bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.15] text-white shadow-[0_4px_24px_rgba(255,255,255,0.03)]": variant === "glass",
            "backdrop-blur-sm bg-transparent border border-white/[0.1] hover:border-white/[0.2] text-white/80 hover:text-white": variant === "outline",
            "bg-white text-black hover:bg-white/90 shadow-[0_4px_16px_rgba(0,0,0,0.1)]": variant === "flat",
          },
          {
            "px-4 py-2 text-xs gap-1.5": size === "sm",
            "px-6 py-3 text-sm gap-2": size === "md",
            "px-8 py-4 text-base gap-2.5": size === "lg",
          },
          className
        )}
        {...props}
      >
        {variant === "glass" && (
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
        )}
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {!isLoading && leftIcon && <span className="inline-flex items-center">{leftIcon}</span>}
        <span className="relative z-10">{children}</span>
        {!isLoading && rightIcon && <span className="inline-flex items-center">{rightIcon}</span>}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

// ─── CARD ────────────────────────────────────────────────────────────────────
export const Card = ({ className, hoverGlow = true, children, ...props }: any) => (
  <motion.div
    whileHover={hoverGlow ? { y: -4, shadow: "0 12px 40px rgba(0,0,0,0.3)" } : {}}
    className={cn(
      "relative overflow-hidden rounded-3xl transition-all duration-500",
      "backdrop-blur-xl saturate-[180%] bg-white/[0.05] border border-white/[0.1]",
      "shadow-[0_8px_32px_rgba(0,0,0,0.25)]",
      className
    )}
    {...props}
  >
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

export const CardHeader = ({ className, ...props }: any) => <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />;
export const CardTitle = ({ className, ...props }: any) => <h3 className={cn("text-xl font-semibold leading-none tracking-tight text-white", className)} {...props} />;
export const CardDescription = ({ className, ...props }: any) => <p className={cn("text-sm text-white/50", className)} {...props} />;
export const CardContent = ({ className, ...props }: any) => <div className={cn("p-6 pt-0 text-white/80 text-sm leading-relaxed", className)} {...props} />;
export const CardFooter = ({ className, ...props }: any) => <div className={cn("flex items-center p-6 pt-0 border-t border-white/[0.05]", className)} {...props} />;

// ─── MODAL ───────────────────────────────────────────────────────────────────
export const Modal = ({ isOpen, onClose, title, description, children, className }: any) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/40 backdrop-blur-md" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4 }}
            className={cn(
              "relative w-full max-w-lg overflow-hidden rounded-3xl",
              "backdrop-blur-2xl saturate-[180%] bg-white/[0.06] border border-white/[0.12]",
              "shadow-[0_24px_64px_rgba(0,0,0,0.5)] p-6 text-white z-10",
              className
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
            <div className="flex items-start justify-between mb-4">
              <div className="space-y-1">
                {title && <h2 className="text-xl font-bold tracking-tight">{title}</h2>}
                {description && <p className="text-sm text-white/50">{description}</p>}
              </div>
              <button onClick={onClose} className="rounded-full p-1 bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-white/70 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="relative z-10 text-sm text-white/80 leading-relaxed">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
export const Navbar = ({ logo, links, action, className }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={cn("sticky top-4 z-40 mx-auto w-full max-w-7xl px-4 md:px-8", className)}>
      <div className="relative flex items-center justify-between py-3 px-6 rounded-3xl backdrop-blur-xl saturate-[180%] bg-white/[0.06] border border-white/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none rounded-[inherit]" />
        <div className="flex items-center gap-2 relative z-10 text-white font-bold text-lg">{logo || "Frosted UI"}</div>
        <div className="hidden md:flex items-center gap-6 relative z-10">
          {links.map((link: any, idx: number) => (
            <a key={idx} href={link.href} className={cn("relative text-sm transition-all duration-300 py-1.5 px-3 rounded-full text-white/70 hover:text-white hover:bg-white/5", link.active && "text-white bg-white/10")}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block relative z-10">{action}</div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden relative z-10 rounded-full p-2 bg-white/5 border border-white/10 text-white">
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
    </nav>
  );
};

// ─── ACCORDION ───────────────────────────────────────────────────────────────
export const Accordion = ({ items, allowMultiple = false, className }: any) => {
  const [openIds, setOpenIds] = useState<string[]>([]);
  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds(openIds.includes(id) ? openIds.filter((o) => o !== id) : [...openIds, id]);
    } else {
      setOpenIds(openIds.includes(id) ? [] : [id]);
    }
  };
  return (
    <div className={cn("space-y-3 w-full", className)}>
      {items.map((item: any) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className={cn("rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-xl bg-white/[0.04] border border-white/[0.08]", isOpen && "bg-white/[0.08] border-white/[0.12]")}>
            <button onClick={() => toggleItem(item.id)} className="flex items-center justify-between w-full p-4 font-semibold text-white/80 hover:text-white transition-all text-left">
              <span>{item.title}</span>
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <ChevronDown className="h-4 w-4 text-white/60" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                  <div className="p-4 pt-0 border-t border-white/[0.05] text-sm text-white/60 leading-relaxed">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

// ─── TABS ────────────────────────────────────────────────────────────────────
export const Tabs = ({ items, defaultTabId, className }: any) => {
  const [activeTab, setActiveTab] = useState(defaultTabId || items[0]?.id);
  return (
    <div className={cn("space-y-4 w-full", className)}>
      <div className="inline-flex p-1 rounded-2xl backdrop-blur-xl bg-white/[0.04] border border-white/[0.08]">
        {items.map((tab: any) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} className="relative py-2 px-4 text-sm font-medium rounded-xl transition-all duration-300 text-white/60 hover:text-white focus:outline-none">
            {activeTab === tab.id && (
              <motion.div layoutId="active-tab-indicator" className="absolute inset-0 rounded-[inherit] bg-white/[0.08] border border-white/[0.1] shadow-inner" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="relative overflow-hidden min-h-[100px] text-white/80">
        <AnimatePresence mode="wait">
          {items.map((tab: any) => {
            if (tab.id !== activeTab) return null;
            return (
              <motion.div key={tab.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                {tab.content}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

// ─── DIALOG ──────────────────────────────────────────────────────────────────
const DialogContext = createContext<any>(null);
export function Dialog({ children, open, onOpenChange }: any) {
  const [localOpen, setLocalOpen] = useState(false);
  const isOpen = open !== undefined ? open : localOpen;
  const setIsOpen = onOpenChange !== undefined ? onOpenChange : setLocalOpen;
  return <DialogContext.Provider value={{ isOpen, setIsOpen }}>{children}</DialogContext.Provider>;
}
export function DialogTrigger({ children }: any) {
  const { setIsOpen } = useContext(DialogContext);
  return React.cloneElement(children, { onClick: () => setIsOpen(true) });
}
export function DialogContent({ children, className }: any) {
  const { isOpen, setIsOpen } = useContext(DialogContext);
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="absolute inset-0 bg-black/40 backdrop-blur-md" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className={cn(
              "relative w-full max-w-lg overflow-hidden rounded-3xl",
              "backdrop-blur-2xl saturate-[180%] bg-white/[0.06] border border-white/[0.12]",
              "shadow-[0_24px_64px_rgba(0,0,0,0.5)] p-6 text-white z-10",
              className
            )}
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 rounded-full p-1 bg-white/5 hover:bg-white/10 border border-white/5 text-white/70 hover:text-white">
              <X className="h-4 w-4" />
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
export const DialogHeader = ({ className, ...props }: any) => <div className={cn("flex flex-col space-y-1.5 text-left mb-4", className)} {...props} />;
export const DialogTitle = ({ className, ...props }: any) => <h3 className={cn("text-lg font-bold leading-none tracking-tight text-white", className)} {...props} />;
export const DialogDescription = ({ className, ...props }: any) => <p className={cn("text-sm text-white/50", className)} {...props} />;

// ─── DRAWER ──────────────────────────────────────────────────────────────────
export const Drawer = ({ isOpen, onClose, position = "bottom", title, children, className }: any) => {
  const variants = ({
    bottom: { initial: { y: "100%" }, animate: { y: 0 }, exit: { y: "100%" }, styles: "bottom-0 left-0 right-0 max-h-[85vh] rounded-t-[32px] border-t" },
    right: { initial: { x: "100%" }, animate: { x: 0 }, exit: { x: "100%" }, styles: "top-0 right-0 bottom-0 w-full max-w-md rounded-l-[32px] border-l" }
  } as Record<string, any>)[position];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <motion.div
            initial={variants.initial}
            animate={variants.animate}
            exit={variants.exit}
            className={cn(
              "absolute z-10 overflow-hidden flex flex-col text-white",
              "backdrop-blur-2xl saturate-[180%] bg-white/[0.06] border-white/[0.12]",
              "shadow-[0_-8px_32px_rgba(0,0,0,0.37)] p-6",
              variants.styles,
              className
            )}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.05]">
              <h2 className="text-lg font-bold">{title || "Menu"}</h2>
              <button onClick={onClose} className="rounded-full p-1 bg-white/5 hover:bg-white/10 border border-white/5"><X className="h-4 w-4" /></button>
            </div>
            <div className="flex-1 overflow-y-auto">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// ─── COMMAND ─────────────────────────────────────────────────────────────────
export const Command = ({ isOpen, onClose, items, placeholder = "Search commands...", className }: any) => {
  const [search, setSearch] = useState("");
  const filtered = items.filter((item: any) => item.label.toLowerCase().includes(search.toLowerCase()));
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[15vh]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/40 backdrop-blur-md" />
          <motion.div className={cn("relative w-full max-w-lg overflow-hidden rounded-3xl backdrop-blur-2xl saturate-[180%] bg-white/[0.06] border border-white/[0.12] shadow-2xl flex flex-col text-white z-10", className)}>
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.08]">
              <Search className="h-5 w-5 text-white/40" />
              <input type="text" placeholder={placeholder} value={search} onChange={(e) => setSearch(e.target.value)} className="w-full bg-transparent border-0 p-0 text-sm focus:outline-none" />
            </div>
            <div className="p-2 space-y-1">
              {filtered.map((item: any, idx: number) => (
                <div key={idx} onClick={() => { item.onSelect(); onClose(); }} className="px-3 py-2 rounded-xl hover:bg-white/5 cursor-pointer text-sm">{item.label}</div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// ─── SPOTLIGHT ───────────────────────────────────────────────────────────────
export const SpotlightCard = ({ children, className, glowColor = "rgba(255, 255, 255, 0.08)", glowSize = 250 }: any) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);
  function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div ref={cardRef} onMouseMove={handleMouseMove} className={cn("group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/[0.05] border border-white/[0.1] shadow-lg", className)}>
      <motion.div className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{ background: useMotionTemplate`radial-gradient(${glowSize}px circle at ${mouseX}px ${mouseY}px, ${glowColor}, transparent 80%)` }} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// ─── PRICING ─────────────────────────────────────────────────────────────────
export const Pricing = ({ plans, title, subtitle, className }: any) => (
  <section className={cn("py-6 text-white w-full", className)}>
    <div className="text-center mb-8">
      {title && <h2 className="text-3xl font-extrabold">{title}</h2>}
      {subtitle && <p className="text-white/50 text-sm mt-2">{subtitle}</p>}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan: any, idx: number) => (
        <div key={idx} className={cn("relative flex flex-col justify-between rounded-3xl p-6 backdrop-blur-xl border bg-white/[0.04] border-white/[0.08]")}>
          <div>
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <div className="text-3xl font-extrabold mb-4">{plan.price}</div>
            <ul className="space-y-2 mb-6 text-sm text-white/70">
              {plan.features.map((f: string, fIdx: number) => <li key={fIdx}>✓ {f}</li>)}
            </ul>
          </div>
          <button className="w-full py-2.5 rounded-xl bg-white text-black font-semibold text-sm">{plan.buttonText}</button>
        </div>
      ))}
    </div>
  </section>
);

// ─── HERO ────────────────────────────────────────────────────────────────────
export const Hero = ({ title, highlightText, description, primaryCtaText, secondaryCtaText }: any) => (
  <div className="py-12 flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
      {title} <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">{highlightText}</span>
    </h1>
    <p className="text-white/60 text-base md:text-lg max-w-xl">{description}</p>
    <div className="flex gap-4">
      <button className="px-6 py-3 rounded-2xl bg-white text-black font-medium text-sm">{primaryCtaText}</button>
      {secondaryCtaText && <button className="px-6 py-3 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 text-white text-sm">{secondaryCtaText}</button>}
    </div>
  </div>
);

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────
export const Testimonials = ({ items, title, subtitle }: any) => (
  <section className="py-8 w-full">
    <div className="text-center mb-8">
      {title && <h2 className="text-2xl font-bold">{title}</h2>}
      {subtitle && <p className="text-white/50 text-sm mt-1">{subtitle}</p>}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item: any, idx: number) => (
        <div key={idx} className="p-6 rounded-3xl backdrop-blur-xl bg-white/[0.04] border border-white/[0.08]">
          <p className="text-white/80 text-sm italic mb-4">"{item.quote}"</p>
          <div className="font-semibold text-sm">{item.author}</div>
          <div className="text-xs text-white/40">{item.role}</div>
        </div>
      ))}
    </div>
  </section>
);

// ─── DASHBOARD ───────────────────────────────────────────────────────────────
export const Dashboard = ({ stats, title = "Dashboard" }: any) => (
  <div className="p-6 space-y-6 w-full text-white">
    <h2 className="text-xl font-bold">{title}</h2>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s: any, idx: number) => (
        <div key={idx} className="p-5 rounded-2xl backdrop-blur-xl bg-white/[0.04] border border-white/[0.08]">
          <div className="text-xs text-white/50">{s.title}</div>
          <div className="text-2xl font-bold mt-1">{s.value}</div>
          <div className="text-[10px] text-emerald-400 mt-0.5">{s.change}</div>
        </div>
      ))}
    </div>
  </div>
);

// ─── FORMS ───────────────────────────────────────────────────────────────────
export const Label = ({ className, ...props }: any) => <label className={cn("text-xs font-semibold text-white/70 select-none", className)} {...props} />;
export const Input = React.forwardRef(({ className, type = "text", ...props }: any, ref: any) => (
  <input ref={ref} type={type} className={cn("w-full px-3 py-2 text-sm rounded-xl text-white outline-none backdrop-blur-md bg-white/[0.04] border border-white/[0.08] focus:bg-white/[0.08] focus:border-white/[0.18]", className)} {...props} />
));
Input.displayName = "Input";
