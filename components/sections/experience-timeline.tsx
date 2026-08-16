"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Code, Users, Briefcase, BarChart3 } from "lucide-react";

import { EXPERIENCE } from "@/data/portfolio";

const MILESTONES = EXPERIENCE.map((exp, index) => {
  const icons = [Code, Users, Briefcase, BarChart3];
  const colors = ["from-blue-500 to-indigo-500", "from-cyan-500 to-blue-500", "from-purple-500 to-secondary", "from-emerald-500 to-teal-500"];
  const glows = ["rgba(59, 130, 246, 0.1)", "rgba(6, 182, 212, 0.1)", "rgba(139, 92, 246, 0.1)", "rgba(16, 185, 129, 0.1)"];

  return {
    year: exp.duration,
    title: exp.role,
    subtitle: exp.company,
    description: exp.description,
    icon: icons[index % icons.length],
    color: colors[index % colors.length],
    glow: glows[index % glows.length]
  };
});

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Apply spring interpolation for smooth progress laser lines
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative w-full py-12">
      
      {/* Central Guide Line (Mobile: left-aligned at left-4, Desktop: centered) */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[1px] bg-white/5" />
      
      {/* Active Laser Beam Scroll Progress */}
      <motion.div 
        className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[1.5px] bg-gradient-to-b from-primary via-secondary to-primary origin-top"
        style={{ scaleY }}
      />

      <div className="space-y-16">
        {MILESTONES.map((milestone, idx) => {
          const Icon = milestone.icon;
          const isEven = idx % 2 === 0;

          return (
            <div 
              key={milestone.year}
              className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center w-full"
            >
              
              {/* Central Glowing Node (Mobile: left-aligned, Desktop: centered) */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-8 w-8 rounded-full border border-white/10 bg-[#050505] flex items-center justify-center z-10 shadow-lg">
                <div className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${milestone.color} animate-pulse`} />
              </div>

              {/* Left Side Content Block */}
              <div className={`md:col-span-5 pl-12 md:pl-0 ${isEven ? "md:text-right md:order-1" : "md:order-3"}`}>
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-2"
                >
                  <span className={`text-4xl font-black bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`} style={{ fontFamily: "var(--font-display)" }}>
                    {milestone.year}
                  </span>
                  <div className={`text-xs font-mono uppercase tracking-widest font-bold ${isEven ? "md:justify-end" : ""} flex items-center gap-2 text-muted-text`}>
                    <Icon className="h-3.5 w-3.5 text-primary" />
                    {milestone.subtitle}
                  </div>
                </motion.div>
              </div>

              {/* Empty Middle spacer */}
              <div className="hidden md:block md:col-span-2 md:order-2" />

              {/* Right Side Content Block (Hold the actual visual Card) */}
              <div className={`md:col-span-5 pl-12 md:pl-0 ${isEven ? "md:order-3" : "md:order-1"}`}>
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <GlassCard 
                    glowColor={milestone.glow}
                    borderColor="rgba(255, 255, 255, 0.05)"
                    className="p-6 hover:border-white/10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-muted-text leading-relaxed">
                      {milestone.description}
                    </p>
                  </GlassCard>
                </motion.div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
