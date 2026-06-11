"use client";

import React from "react";
import { Magnetic } from "../ui/magnetic";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-white/5 bg-[#050505] py-12 overflow-hidden">
      {/* Background glow shadow effect */}
      <div className="pointer-events-none absolute -bottom-48 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-secondary/5 blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div>
          <p className="text-sm text-muted-text">
            &copy; {currentYear} Yashvi Shah. Crafted with precision.
          </p>
        </div>
        
        <div className="flex items-center gap-8">
          <Magnetic range={30} strength={0.2}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Yashvi Shah's GitHub Profile"
              className="text-sm text-muted-text hover:text-white transition-colors duration-300"
            >
              GitHub
            </a>
          </Magnetic>
          <Magnetic range={30} strength={0.2}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Yashvi Shah's LinkedIn Profile"
              className="text-sm text-muted-text hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
          </Magnetic>
          <Magnetic range={30} strength={0.2}>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Yashvi Shah's Twitter Profile"
              className="text-sm text-muted-text hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
