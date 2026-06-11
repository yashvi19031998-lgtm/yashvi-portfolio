"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export function StatCounter({ value, suffix = "", duration = 2.5 }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration,
        ease: [0.16, 1, 0.3, 1], // Custom power4.out-style ease for elegant counting slowdown
      });
      return controls.stop;
    }
  }, [inView, count, value, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = String(latest) + suffix;
      }
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return <span ref={ref} className="font-bold">0{suffix}</span>;
}
