import type { ReactNode, HTMLAttributes } from "react";
import type { MotionProps } from "framer-motion";

export type FrostedSize = "sm" | "md" | "lg" | "xl";
export type FrostedVariant = "dark" | "light" | "ultra" | "tinted";
export type FrostedBlur = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export interface FrostedBaseProps extends HTMLAttributes<HTMLElement> {
    blur?: FrostedBlur;
    variant?: FrostedVariant;
    glow?: boolean;
    glowColor?: string;
    children?: ReactNode;
    className?: string;
}

export interface NavItem {
    id: string;
    label: string;
    icon: ReactNode;
    badge?: number;
    onClick?: () => void;
    active?: boolean;
    href?: string;
}

export interface FloatingIslandBarProps extends FrostedBaseProps {
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

export interface NavSheetItem {
  id: string;
  label: string;
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
}

export interface ExpandableNavSheetProps extends FrostedBaseProps {
  items: NavItem[];
  menuItems: NavSheetItem[];
    defaultExpanded?: boolean;
    loginLabel?: string;
    signupLabel?: string;
  onLogin?: () => void;
  onSignup?: () => void;
    expandTriggerId?: string;
}

export interface PillBarProps extends FrostedBaseProps {
  items: NavItem[];
    showLabels?: boolean;
    pillShape?: "full" | "rounded";
}

export interface PebbleItem extends NavItem {
    size?: FrostedSize;
}

export interface PebbleBarProps extends FrostedBaseProps {
  items: PebbleItem[];
    layout?: "organic" | "grid" | "row";
}

export interface DockBarProps extends FrostedBaseProps {
  items: NavItem[];
    magnify?: boolean;
    magnifyScale?: number;
    showDots?: boolean;
    fixed?: boolean;
}

export interface AppItem {
  id: string;
  label: string;
  icon: ReactNode;
  color?: string;
  onClick?: () => void;
  href?: string;
}

export interface AppLauncherProps extends FrostedBaseProps {
  apps: AppItem[];
    columns?: 3 | 4 | 5;
    pages?: boolean;
}

export interface CommandAction {
  id: string;
  label: string;
  icon?: ReactNode;
  shortcut?: string;
  group?: string;
  onSelect: () => void;
  keywords?: string[];
}

export interface CommandSheetProps extends FrostedBaseProps {
  actions: CommandAction[];
    open?: boolean;
  onOpenChange?: (open: boolean) => void;
    shortcut?: string;
  placeholder?: string;
}

export interface ProfileStat {
  label: string;
  value: string | number;
}

export interface ProfileAction {
  id: string;
  label: string;
  icon: ReactNode;
  onClick: () => void;
  destructive?: boolean;
}

export interface ProfileSheetProps extends FrostedBaseProps {
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

export interface FloatingSearchOrbProps extends FrostedBaseProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
    defaultExpanded?: boolean;
    position?: "bottom-right" | "bottom-left" | "bottom-center" | "top-right";
  fixed?: boolean;
}

export interface FABAction {
  id: string;
  icon: ReactNode;
  label?: string;
  onClick: () => void;
  color?: string;
}

export interface FloatingActionButtonProps extends FrostedBaseProps {
    icon?: ReactNode;
    actions?: FABAction[];
    position?: "bottom-right" | "bottom-left" | "bottom-center";
  fixed?: boolean;
}

export interface CommandChip {
  id: string;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export interface FloatingCommandBarProps extends Omit<FrostedBaseProps, "onSubmit"> {
  placeholder?: string;
  onSubmit?: (value: string) => void;
  chips?: CommandChip[];
    showVoice?: boolean;
    showAttach?: boolean;
  fixed?: boolean;
}

export interface WaveBarProps extends FrostedBaseProps {
  leftItems: NavItem[];
  rightItems: NavItem[];
  centerAction?: {
    icon: ReactNode;
    onClick: () => void;
  };
}

export interface CrystalBarProps extends FrostedBaseProps {
  items: NavItem[];
    clipAngle?: number;
}

export interface ArcBarProps extends FrostedBaseProps {
  items: NavItem[];
    arcHeight?: number;
}

export interface RibbonBarProps extends FrostedBaseProps {
  items: NavItem[];
    showRibbonLayers?: boolean;
}
