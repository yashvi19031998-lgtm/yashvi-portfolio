"use client";

import React from "react";
import { motion, UseInViewOptions } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  viewportOptions?: UseInViewOptions;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 30,
  className = "",
  viewportOptions = { once: true, margin: "-10% 0px -10% 0px" },
}: ScrollRevealProps) {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const initial = {
    opacity: 0,
    ...directions[direction],
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.215, 0.61, 0.355, 1] as const, // Smooth custom cubic bezier easing curve (similar to power3.out)
    },
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={viewportOptions}
      className={className}
    >
      {children}
    </motion.div>
  );
}
