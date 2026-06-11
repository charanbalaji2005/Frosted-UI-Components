import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const GLASS_TOKENS = {

  blurSm: "backdrop-blur-md",
  blurMd: "backdrop-blur-xl",
  blurLg: "backdrop-blur-2xl",
  blurXl: "backdrop-blur-3xl",

  glassDark: "bg-white/[0.04]",
  glassMid: "bg-white/[0.07]",
  glassLight: "bg-white/[0.10]",
  glassActive: "bg-white/[0.14]",

  borderSubtle: "border border-white/[0.08]",
  borderMid: "border border-white/[0.12]",
  borderBright: "border border-white/[0.18]",

  shadowFloat: "shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
  shadowGlow: "shadow-[0_0_40px_rgba(120,80,255,0.3)]",
  shadowDeep: "shadow-[0_20px_60px_rgba(0,0,0,0.6)]",
} as const;

export const glassLayers = {
  layer1: "backdrop-blur-2xl saturate-[180%]",
  layer2: "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/[0.06] before:to-transparent before:rounded-[inherit] before:pointer-events-none",
  layer3: "after:absolute after:inset-[-1px] after:rounded-[inherit] after:border after:border-white/[0.1] after:pointer-events-none",
} as const;
