export { FloatingIslandBar } from './components/floating-island-bar.mjs';
export { PillBar } from './components/pill-bar.mjs';
export { PebbleBar } from './components/pebble-bar.mjs';
export { ArcBar, CrystalBar, RibbonBar } from './components/shape-bars.mjs';
export { ExpandableNavSheet } from './components/expandable-nav-sheet.mjs';
export { CommandSheet } from './components/command-sheet.mjs';
export { ProfileSheet } from './components/profile-sheet.mjs';
export { AppLauncher } from './components/app-launcher.mjs';
export { FloatingActionButton, FloatingCommandBar, FloatingSearchOrb } from './components/floating-elements.mjs';
export { A as AppItem, a as AppLauncherProps, b as ArcBarProps, C as CommandAction, c as CommandChip, d as CommandSheetProps, e as CrystalBarProps, D as DockBarProps, E as ExpandableNavSheetProps, F as FABAction, f as FloatingActionButtonProps, g as FloatingCommandBarProps, h as FloatingIslandBarProps, i as FloatingSearchOrbProps, j as FrostedBaseProps, k as FrostedBlur, l as FrostedSize, m as FrostedVariant, N as NavItem, n as NavSheetItem, P as PebbleBarProps, o as PebbleItem, p as PillBarProps, q as ProfileAction, r as ProfileSheetProps, s as ProfileStat, R as RibbonBarProps, W as WaveBarProps } from './index-DByljg6f.mjs';
export { GLASS_TOKENS, cn, glassLayers } from './lib/utils.mjs';
export { activeBubbleVariants, backdropVariants, cardVariants, commandSheetVariants, dockIconVariants, fabActionVariants, hoverLift, islandBarVariants, orbPulseVariants, pebbleVariants, profileSheetVariants, searchExpandVariants, sheetVariants, springs, tapScale, tweens } from './lib/animations.mjs';
export { default as frostedPreset } from './tailwind.mjs';
import react__default from 'react';
import 'clsx';
import 'framer-motion';
import 'tailwindcss';

declare function GlassAgentCard({ name, role, status, avatar, tools, className, }: {
    name: string;
    role: string;
    status?: "idle" | "thinking" | "executing";
    avatar?: react__default.ReactNode;
    tools?: string[];
    className?: string;
}): react__default.JSX.Element;
declare function GlassThinkingPanel({ steps, currentStepIndex, className, }: {
    steps: {
        text: string;
        status: "pending" | "active" | "done";
    }[];
    currentStepIndex?: number;
    className?: string;
}): react__default.JSX.Element;
declare function GlassWorkflowNode({ title, type, active, className, }: {
    title: string;
    type?: "input" | "process" | "output" | "default";
    active?: boolean;
    className?: string;
}): react__default.JSX.Element;
declare function GlassReasoningBubble({ children, className, }: {
    children: react__default.ReactNode;
    className?: string;
}): react__default.JSX.Element;
declare function GlassMemoryPanel({ memories, className, }: {
    memories: {
        id: string;
        content: string;
        type: "short" | "long";
    }[];
    className?: string;
}): react__default.JSX.Element;
declare function GlassCommandCenter({ children, className, }: {
    children: react__default.ReactNode;
    className?: string;
}): react__default.JSX.Element;
declare function GlassKnowledgeGraph({ nodes, className, }: {
    nodes: {
        id: string;
        label: string;
        x: number;
        y: number;
    }[];
    className?: string;
}): react__default.JSX.Element;

export { GlassAgentCard, GlassCommandCenter, GlassKnowledgeGraph, GlassMemoryPanel, GlassReasoningBubble, GlassThinkingPanel, GlassWorkflowNode };
