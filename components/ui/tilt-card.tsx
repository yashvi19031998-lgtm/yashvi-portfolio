"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag" | "onAnimationEnd" | "onAnimationIteration"> {
  children: React.ReactNode;
}

export function TiltCard({ children, className, ...props }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Set up basic normalized mouse coordinate hooks
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs to govern acceleration and deceleration physics
  const springX = useSpring(x, { stiffness: 120, damping: 20 });
  const springY = useSpring(y, { stiffness: 120, damping: 20 });

  // Map coordinates to small degree rotation scales for natural depth (tilt limit of 7 deg)
  const rotateX = useTransform(springY, [0, 1], [7, -7]);
  const rotateY = useTransform(springX, [0, 1], [-7, 7]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Normalized coordinates from 0 to 1
    const mouseX = (e.clientX - rect.left) / rect.width;
    const mouseY = (e.clientY - rect.top) / rect.height;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative rounded-2xl transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* Inner wrapper pushing items outwards along Z-axis for a floating 3D overlay */}
      <div 
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        className="w-full h-full"
      >
        {children}
      </div>
    </motion.div>
  );
}
