import { Variants, Transition } from 'framer-motion';

declare const springs: {
    readonly bouncy: Transition;
    readonly smooth: Transition;
    readonly floaty: Transition;
    readonly snap: Transition;
};
declare const tweens: {
    readonly fast: Transition;
    readonly mid: Transition;
    readonly slow: Transition;
    readonly expo: Transition;
};
declare const islandBarVariants: Variants;
declare const activeBubbleVariants: Variants;
declare const sheetVariants: Variants;
declare const backdropVariants: Variants;
declare const dockIconVariants: {
    rest: {
        scale: number;
        y: number;
    };
    hover: {
        scale: number;
        y: number;
        transition: Transition;
    };
    neighbor: {
        scale: number;
        y: number;
        transition: Transition;
    };
};
declare const fabActionVariants: Variants;
declare const searchExpandVariants: Variants;
declare const pebbleVariants: Variants;
declare const commandSheetVariants: Variants;
declare const profileSheetVariants: Variants;
declare const cardVariants: Variants;
declare const orbPulseVariants: Variants;
declare const tapScale: {
    whileTap: {
        scale: number;
    };
    transition: Transition;
};
declare const hoverLift: {
    whileHover: {
        y: number;
    };
    transition: Transition;
};

export { activeBubbleVariants, backdropVariants, cardVariants, commandSheetVariants, dockIconVariants, fabActionVariants, hoverLift, islandBarVariants, orbPulseVariants, pebbleVariants, profileSheetVariants, searchExpandVariants, sheetVariants, springs, tapScale, tweens };
