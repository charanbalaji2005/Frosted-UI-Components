"use client";

import React from "react";
import { cn } from "@/lib/utils";

// ─── LABEL ───────────────────────────────────────────────────────────────────
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}
export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn("text-sm font-semibold text-white/70 tracking-wide select-none", className)}
      {...props}
    />
  )
);
Label.displayName = "Label";

// ─── INPUT ───────────────────────────────────────────────────────────────────
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "w-full px-4 py-3 text-sm rounded-2xl text-white outline-none transition-all duration-300",
          "backdrop-blur-md bg-white/[0.04] border border-white/[0.08]",
          "focus:bg-white/[0.08] focus:border-white/[0.18] focus:ring-2 focus:ring-white/5",
          "placeholder-white/30 disabled:opacity-50 disabled:cursor-not-allowed",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

// ─── TEXTAREA ─────────────────────────────────────────────────────────────────
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full px-4 py-3 text-sm rounded-2xl text-white outline-none transition-all duration-300 resize-none min-h-[100px]",
          "backdrop-blur-md bg-white/[0.04] border border-white/[0.08]",
          "focus:bg-white/[0.08] focus:border-white/[0.18] focus:ring-2 focus:ring-white/5",
          "placeholder-white/30 disabled:opacity-50 disabled:cursor-not-allowed",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

// ─── CHECKBOX ─────────────────────────────────────────────────────────────────
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <label className="flex items-center gap-3 cursor-pointer select-none">
        <input
          type="checkbox"
          ref={ref}
          className={cn(
            "h-5 w-5 rounded-lg text-white bg-white/[0.04] border border-white/[0.1] focus:ring-0 focus:ring-offset-0 focus:outline-none transition-all duration-200 cursor-pointer checked:bg-white checked:border-white",
            className
          )}
          {...props}
        />
        {label && <span className="text-sm text-white/70">{label}</span>}
      </label>
    );
  }
);
Checkbox.displayName = "Checkbox";
