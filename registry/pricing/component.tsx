"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  onSelect?: () => void;
}

export interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const Pricing = ({ plans, title, subtitle, className }: PricingProps) => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className={cn("py-12 text-white max-w-6xl mx-auto px-4", className)}>
      {/* Header */}
      <div className="text-center mb-12 space-y-4">
        {title && <h2 className="text-4xl font-extrabold tracking-tight">{title}</h2>}
        {subtitle && <p className="text-white/50 text-lg max-w-2xl mx-auto">{subtitle}</p>}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6 }}
            className={cn(
              "relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-500",
              "backdrop-blur-xl saturate-[180%] border",
              plan.isPopular
                ? "bg-white/[0.08] border-white/[0.2] shadow-[0_16px_48px_rgba(255,255,255,0.06)]"
                : "bg-white/[0.04] border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
            )}
          >
            {/* Top Shine */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-[inherit]" />

            {/* Popular Badge */}
            {plan.isPopular && (
              <span className="absolute top-0 right-6 -translate-y-1/2 bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                Popular
              </span>
            )}

            <div>
              {/* Header Details */}
              <div className="mb-6 space-y-2">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-sm text-white/50">{plan.description}</p>
              </div>

              {/* Pricing */}
              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                <span className="text-sm text-white/40 ml-2">/{plan.period}</span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="rounded-full p-0.5 bg-white/10 text-white mt-0.5">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button CTA */}
            <button
              onClick={plan.onSelect}
              className={cn(
                "w-full py-3.5 px-4 rounded-2xl font-semibold text-sm transition-all duration-300",
                plan.isPopular
                  ? "bg-white text-black hover:bg-white/95"
                  : "backdrop-blur-md bg-white/10 hover:bg-white/15 border border-white/10"
              )}
            >
              {plan.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
