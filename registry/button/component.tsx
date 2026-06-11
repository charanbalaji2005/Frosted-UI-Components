"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "glass" | "outline" | "flat";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "glass",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        disabled={disabled || isLoading}
        whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -1 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className={cn(
          "relative inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 active:outline-none disabled:opacity-50 disabled:pointer-events-none overflow-hidden",
          // Variants
          {
            "backdrop-blur-md saturate-[180%] bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.15] text-white shadow-[0_4px_24px_rgba(255,255,255,0.03)]":
              variant === "glass",
            "backdrop-blur-sm bg-transparent border border-white/[0.1] hover:border-white/[0.2] text-white/80 hover:text-white":
              variant === "outline",
            "bg-white text-black hover:bg-white/90 shadow-[0_4px_16px_rgba(0,0,0,0.1)]":
              variant === "flat",
          },
          // Sizes
          {
            "px-4 py-2 text-xs gap-1.5": size === "sm",
            "px-6 py-3 text-sm gap-2": size === "md",
            "px-8 py-4 text-base gap-2.5": size === "lg",
          },
          className
        )}
        {...props}
      >
        {/* Subtle glass reflection overlay */}
        {variant === "glass" && (
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
        )}
        
        {/* Loading Spinner */}
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-4 w-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
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
export default Button;
