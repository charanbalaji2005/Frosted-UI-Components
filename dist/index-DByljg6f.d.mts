import { HTMLAttributes, ReactNode } from 'react';

type FrostedSize = "sm" | "md" | "lg" | "xl";
type FrostedVariant = "dark" | "light" | "ultra" | "tinted";
type FrostedBlur = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
interface FrostedBaseProps extends HTMLAttributes<HTMLElement> {
    blur?: FrostedBlur;
    variant?: FrostedVariant;
    glow?: boolean;
    glowColor?: string;
    children?: ReactNode;
    className?: string;
}
interface NavItem {
    id: string;
    label: string;
    icon: ReactNode;
    badge?: number;
    onClick?: () => void;
    active?: boolean;
    href?: string;
}
interface FloatingIslandBarProps extends FrostedBaseProps {
    items: NavItem[];
    centerAction?: {
        icon: ReactNode;
        onClick: () => void;
        label?: string;
    };
    position?: "bottom" | "top";
    offset?: number;
    fixed?: boolean;
}
interface NavSheetItem {
    id: string;
    label: string;
    icon?: ReactNode;
    href?: string;
    onClick?: () => void;
}
interface ExpandableNavSheetProps extends FrostedBaseProps {
    items: NavItem[];
    menuItems: NavSheetItem[];
    defaultExpanded?: boolean;
    loginLabel?: string;
    signupLabel?: string;
    onLogin?: () => void;
    onSignup?: () => void;
    expandTriggerId?: string;
}
interface PillBarProps extends FrostedBaseProps {
    items: NavItem[];
    showLabels?: boolean;
    pillShape?: "full" | "rounded";
}
interface PebbleItem extends NavItem {
    size?: FrostedSize;
}
interface PebbleBarProps extends FrostedBaseProps {
    items: PebbleItem[];
    layout?: "organic" | "grid" | "row";
}
interface DockBarProps extends FrostedBaseProps {
    items: NavItem[];
    magnify?: boolean;
    magnifyScale?: number;
    showDots?: boolean;
    fixed?: boolean;
}
interface AppItem {
    id: string;
    label: string;
    icon: ReactNode;
    color?: string;
    onClick?: () => void;
    href?: string;
}
interface AppLauncherProps extends FrostedBaseProps {
    apps: AppItem[];
    columns?: 3 | 4 | 5;
    pages?: boolean;
}
interface CommandAction {
    id: string;
    label: string;
    icon?: ReactNode;
    shortcut?: string;
    group?: string;
    onSelect: () => void;
    keywords?: string[];
}
interface CommandSheetProps extends FrostedBaseProps {
    actions: CommandAction[];
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    shortcut?: string;
    placeholder?: string;
}
interface ProfileStat {
    label: string;
    value: string | number;
}
interface ProfileAction {
    id: string;
    label: string;
    icon: ReactNode;
    onClick: () => void;
    destructive?: boolean;
}
interface ProfileSheetProps extends FrostedBaseProps {
    user: {
        name: string;
        email?: string;
        avatar?: string;
        plan?: string;
    };
    stats?: ProfileStat[];
    actions?: ProfileAction[];
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
interface FloatingSearchOrbProps extends FrostedBaseProps {
    placeholder?: string;
    onSearch?: (query: string) => void;
    defaultExpanded?: boolean;
    position?: "bottom-right" | "bottom-left" | "bottom-center" | "top-right";
    fixed?: boolean;
}
interface FABAction {
    id: string;
    icon: ReactNode;
    label?: string;
    onClick: () => void;
    color?: string;
}
interface FloatingActionButtonProps extends FrostedBaseProps {
    icon?: ReactNode;
    actions?: FABAction[];
    position?: "bottom-right" | "bottom-left" | "bottom-center";
    fixed?: boolean;
}
interface CommandChip {
    id: string;
    label: string;
    icon?: ReactNode;
    onClick?: () => void;
}
interface FloatingCommandBarProps extends Omit<FrostedBaseProps, "onSubmit"> {
    placeholder?: string;
    onSubmit?: (value: string) => void;
    chips?: CommandChip[];
    showVoice?: boolean;
    showAttach?: boolean;
    fixed?: boolean;
}
interface WaveBarProps extends FrostedBaseProps {
    leftItems: NavItem[];
    rightItems: NavItem[];
    centerAction?: {
        icon: ReactNode;
        onClick: () => void;
    };
}
interface CrystalBarProps extends FrostedBaseProps {
    items: NavItem[];
    clipAngle?: number;
}
interface ArcBarProps extends FrostedBaseProps {
    items: NavItem[];
    arcHeight?: number;
}
interface RibbonBarProps extends FrostedBaseProps {
    items: NavItem[];
    showRibbonLayers?: boolean;
}

export type { AppItem as A, CommandAction as C, DockBarProps as D, ExpandableNavSheetProps as E, FABAction as F, NavItem as N, PebbleBarProps as P, RibbonBarProps as R, WaveBarProps as W, AppLauncherProps as a, ArcBarProps as b, CommandChip as c, CommandSheetProps as d, CrystalBarProps as e, FloatingActionButtonProps as f, FloatingCommandBarProps as g, FloatingIslandBarProps as h, FloatingSearchOrbProps as i, FrostedBaseProps as j, FrostedBlur as k, FrostedSize as l, FrostedVariant as m, NavSheetItem as n, PebbleItem as o, PillBarProps as p, ProfileAction as q, ProfileSheetProps as r, ProfileStat as s };
