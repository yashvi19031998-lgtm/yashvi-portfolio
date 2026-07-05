"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Magnetic } from "../ui/magnetic";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Spring config to make the scroll bar track smooth and fluid
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-white/5 py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Magnetic range={50} strength={0.3}>
          <a
            href="#home"
            className="text-2xl font-bold tracking-tight text-white hover:opacity-90 transition-all duration-300"
            style={{ fontFamily: "var(--font-display)" }}
            aria-label="Yashvi Shah Portfolio Home"
          >
            YS<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">.</span>
          </a>
        </Magnetic>

        {/* Navigation Items */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Magnetic key={item.label} range={40} strength={0.25}>
              <a
                href={item.href}
                className="text-sm font-medium text-muted-text hover:text-white transition-colors duration-300 relative py-1"
              >
                {item.label}
              </a>
            </Magnetic>
          ))}
        </nav>

        {/* Dynamic CTA Button */}
        <div className="flex items-center gap-4">
          <Magnetic range={45} strength={0.2}>
            <a
              href="#contact"
              className="relative inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition-all duration-300 hover:bg-neutral-100 hover:shadow-lg hover:shadow-white/10"
            >
              Let's Talk
            </a>
          </Magnetic>
        </div>
      </div>

      {/* Luxury Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-primary via-secondary to-primary origin-left"
        style={{ scaleX }}
      />
    </header>
  );
}
