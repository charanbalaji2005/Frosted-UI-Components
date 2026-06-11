import { ClassValue } from 'clsx';

declare function cn(...inputs: ClassValue[]): string;
declare const GLASS_TOKENS: {
    readonly blurSm: "backdrop-blur-md";
    readonly blurMd: "backdrop-blur-xl";
    readonly blurLg: "backdrop-blur-2xl";
    readonly blurXl: "backdrop-blur-3xl";
    readonly glassDark: "bg-white/[0.04]";
    readonly glassMid: "bg-white/[0.07]";
    readonly glassLight: "bg-white/[0.10]";
    readonly glassActive: "bg-white/[0.14]";
    readonly borderSubtle: "border border-white/[0.08]";
    readonly borderMid: "border border-white/[0.12]";
    readonly borderBright: "border border-white/[0.18]";
    readonly shadowFloat: "shadow-[0_8px_32px_rgba(0,0,0,0.4)]";
    readonly shadowGlow: "shadow-[0_0_40px_rgba(120,80,255,0.3)]";
    readonly shadowDeep: "shadow-[0_20px_60px_rgba(0,0,0,0.6)]";
};
declare const glassLayers: {
    readonly layer1: "backdrop-blur-2xl saturate-[180%]";
    readonly layer2: "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/[0.06] before:to-transparent before:rounded-[inherit] before:pointer-events-none";
    readonly layer3: "after:absolute after:inset-[-1px] after:rounded-[inherit] after:border after:border-white/[0.1] after:pointer-events-none";
};

export { GLASS_TOKENS, cn, glassLayers };
