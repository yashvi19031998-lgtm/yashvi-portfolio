"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code, Cpu, Database, Network, ShieldCheck, 
  Layers, Lock, Server, Terminal, Globe, 
  Workflow, GitBranch 
} from "lucide-react";

const INNER_SKILLS = [
  { name: "Next.js", icon: Globe, angle: 0, color: "from-blue-500 to-cyan-500" },
  { name: "Angular", icon: Cpu, angle: 90, color: "from-red-500 to-rose-500" },
  { name: "PHP", icon: Code, angle: 180, color: "from-indigo-500 to-purple-500" },
  { name: "Node.js", icon: Server, angle: 270, color: "from-emerald-500 to-teal-500" },
];

const OUTER_SKILLS = [
  { name: "Laravel", icon: Terminal, angle: 0, color: "from-red-600 to-orange-500" },
  { name: "CodeIgniter", icon: Layers, angle: 45, color: "from-orange-500 to-amber-500" },
  { name: "TypeScript", icon: Code, angle: 90, color: "from-blue-600 to-indigo-600" },
  { name: "PostgreSQL", icon: Database, angle: 135, color: "from-blue-500 to-indigo-500" },
  { name: "MySQL", icon: Database, angle: 180, color: "from-cyan-500 to-blue-500" },
  { name: "REST APIs", icon: Network, angle: 225, color: "from-purple-500 to-pink-500" },
  { name: "Git", icon: GitBranch, angle: 270, color: "from-orange-600 to-red-500" },
  { name: "Auth / JWT", icon: Lock, angle: 315, color: "from-emerald-600 to-emerald-400" },
];

export function SkillsOrbit() {
  return (
    <div className="relative w-full max-w-xl aspect-square flex items-center justify-center select-none group-hover-paused">
      
      {/* Central Branding Hub */}
      <div className="relative z-20 flex items-center justify-center w-24 h-24 rounded-full bg-black border border-white/10 shadow-2xl shadow-primary/20">
        {/* Hub Glow Pulsing */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 animate-pulse blur-md" />
        <div className="relative text-2xl font-extrabold text-white tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          YS<span className="text-primary">.</span>
        </div>
      </div>

      {/* INNER ORBIT PATH */}
      <div className="absolute w-[260px] h-[260px] rounded-full border border-white/5 bg-transparent pointer-events-none z-10" />

      {/* INNER ORBIT SPIN CONTAINER */}
      <div className="absolute w-[260px] h-[260px] animate-[spin_35s_linear_infinite] group-hover:pause z-10">
        {INNER_SKILLS.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="absolute w-12 h-12 -ml-6 -mt-6 left-1/2 top-1/2"
              style={{
                transform: `rotate(${skill.angle}deg) translate(130px) rotate(-${skill.angle}deg)`,
              }}
            >
              {/* Counter-rotation to keep the skill label upright */}
              <div className="w-full h-full animate-[spin_35s_linear_infinite_reverse] group-hover:pause">
                <div className="relative group/node flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-[#0F0F0F] hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/15 cursor-pointer">
                  {/* Subtle skill color gradient dot */}
                  <div className={`absolute inset-0.5 rounded-full bg-gradient-to-tr ${skill.color} opacity-0 group-hover/node:opacity-10 transition-opacity duration-300`} />
                  <Icon className="h-5 w-5 text-white/80 group-hover/node:text-primary transition-colors duration-300" />
                  
                  {/* Skill Tooltip Label */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 scale-0 group-hover/node:scale-100 px-2.5 py-1 rounded bg-black/90 border border-white/10 text-[10px] font-semibold text-white tracking-wide transition-all duration-200 shadow-xl whitespace-nowrap z-50">
                    {skill.name}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* OUTER ORBIT PATH */}
      <div className="absolute w-[460px] h-[460px] rounded-full border border-white/5 bg-transparent pointer-events-none z-10" />

      {/* OUTER ORBIT SPIN CONTAINER */}
      <div className="absolute w-[460px] h-[460px] animate-[spin_55s_linear_infinite] group-hover:pause z-10">
        {OUTER_SKILLS.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="absolute w-10 h-10 -ml-5 -mt-5 left-1/2 top-1/2"
              style={{
                transform: `rotate(${skill.angle}deg) translate(230px) rotate(-${skill.angle}deg)`,
              }}
            >
              {/* Counter-rotation */}
              <div className="w-full h-full animate-[spin_55s_linear_infinite_reverse] group-hover:pause">
                <div className="relative group/node flex items-center justify-center w-10 h-10 rounded-full border border-white/5 bg-[#0F0F0F] hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/15 cursor-pointer">
                  <div className={`absolute inset-0.5 rounded-full bg-gradient-to-tr ${skill.color} opacity-0 group-hover/node:opacity-10 transition-opacity duration-300`} />
                  <Icon className="h-4.5 w-4.5 text-white/70 group-hover/node:text-secondary transition-colors duration-300" />
                  
                  {/* Skill Tooltip Label */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 scale-0 group-hover/node:scale-100 px-2 py-1 rounded bg-black/90 border border-white/10 text-[9px] font-semibold text-white tracking-wide transition-all duration-200 shadow-xl whitespace-nowrap z-50">
                    {skill.name}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
