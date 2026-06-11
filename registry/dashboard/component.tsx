"use client";

import React from "react";
import { Activity, Users, CreditCard, DollarSign, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface DashboardStat {
  title: string;
  value: string;
  change: string;
  icon: "dollar" | "users" | "credit" | "activity";
}

export interface DashboardProps {
  stats: DashboardStat[];
  title?: string;
  recentActivity?: { user: string; action: string; time: string }[];
  className?: string;
}

export const Dashboard = ({
  stats,
  title = "Analytics Overview",
  recentActivity = [],
  className,
}: DashboardProps) => {
  const iconMap = {
    dollar: <DollarSign className="h-4 w-4 text-white/60" />,
    users: <Users className="h-4 w-4 text-white/60" />,
    credit: <CreditCard className="h-4 w-4 text-white/60" />,
    activity: <Activity className="h-4 w-4 text-white/60" />,
  };

  return (
    <div className={cn("p-6 text-white max-w-7xl mx-auto space-y-6 w-full", className)}>
      {/* Title */}
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.05]">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      </div>

      {/* Grid Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -2 }}
            className={cn(
              "relative overflow-hidden rounded-2xl p-6 transition-all duration-300",
              "backdrop-blur-xl saturate-[180%] bg-white/[0.04] border border-white/[0.08]",
              "shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
            )}
          >
            {/* Top Shine */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-[inherit]" />

            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <span className="text-sm font-medium text-white/50">{stat.title}</span>
              <span className="rounded-lg p-2 bg-white/5 border border-white/5">{iconMap[stat.icon]}</span>
            </div>
            <div className="mt-2">
              <span className="text-2xl font-bold">{stat.value}</span>
              <p className="text-xs text-emerald-400 mt-1 flex items-center gap-0.5">
                <ArrowUpRight className="h-3 w-3" />
                <span>{stat.change}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Grid Subsections */}
      <div className="grid gap-6 md:grid-cols-7">
        {/* Main chart panel placeholder */}
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl p-6 md:col-span-4",
            "backdrop-blur-xl saturate-[180%] bg-white/[0.04] border border-white/[0.08]"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-[inherit]" />
          <h2 className="text-lg font-bold mb-4">Traffic Graph</h2>
          <div className="h-[250px] flex items-end justify-between gap-2 pt-8">
            {[35, 45, 60, 40, 75, 55, 90, 65, 80, 95, 70, 85].map((val, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${val}%` }}
                  transition={{ duration: 0.8, delay: idx * 0.05 }}
                  className="w-full bg-gradient-to-t from-indigo-500/20 to-sky-400/40 border-t border-sky-300/30 rounded-t-lg"
                />
                <span className="text-[10px] text-white/30 hidden sm:block">M{idx + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity feeds */}
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl p-6 md:col-span-3",
            "backdrop-blur-xl saturate-[180%] bg-white/[0.04] border border-white/[0.08]"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-[inherit]" />
          <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs border border-white/10">
                  {activity.user.substring(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 space-y-0.5">
                  <div className="text-white/80">
                    <span className="font-semibold text-white">{activity.user}</span>{" "}
                    {activity.action}
                  </div>
                  <div className="text-xs text-white/40">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
