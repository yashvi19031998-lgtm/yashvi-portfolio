"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics configuration for luxurious mouse-trailing glow
  const springConfig = { damping: 50, stiffness: 250, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half of cursor glow element size (128px) to center it
      mouseX.set(e.clientX - 128);
      mouseY.set(e.clientY - 128);
    };

    window.addEventListener("pointermove", handleMouseMove);

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed z-30 h-64 w-64 rounded-full opacity-60 mix-blend-screen blur-[80px] will-change-transform"
      style={{
        x: cursorX,
        y: cursorY,
        background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.1) 60%, transparent 100%)",
      }}
    />
  );
}
