import * as react from 'react';
import { b as ArcBarProps, e as CrystalBarProps, R as RibbonBarProps } from '../index-DByljg6f.js';

declare function CrystalBar({ items, clipAngle, variant, glow, fixed, className, }: CrystalBarProps & {
    fixed?: boolean;
}): react.JSX.Element;
declare function ArcBar({ items, arcHeight, variant, glow, fixed, className, }: ArcBarProps & {
    fixed?: boolean;
}): react.JSX.Element;
declare function RibbonBar({ items, showRibbonLayers, variant, glow, fixed, className, }: RibbonBarProps & {
    fixed?: boolean;
}): react.JSX.Element;

export { ArcBar, CrystalBar, RibbonBar };
