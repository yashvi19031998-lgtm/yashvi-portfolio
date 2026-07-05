"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  challenge: string;
  solution: string;
  results: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock background scroll when the modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/75 backdrop-blur-md overflow-hidden">
          {/* Overlay Click-Away */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 cursor-zoom-out"
          />

          {/* Immersive Case-Study Slide Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="relative w-full max-w-3xl h-full bg-[#050505] border-l border-white/5 p-6 md:p-12 overflow-y-auto shadow-2xl flex flex-col justify-between z-10 select-text"
          >
            {/* Close action */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2.5 rounded-full border border-white/5 bg-white/5 text-muted-text hover:text-white hover:border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-10">
              {/* Header details */}
              <div className="space-y-4 pr-12">
                <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold">
                  Detailed Case Study
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-none" style={{ fontFamily: "var(--font-display)" }}>
                  {project.title}
                </h2>
                <p className="text-lg text-muted-text">{project.subtitle}</p>
              </div>

              {/* Large Mockup Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/5 bg-secondary-bg">
                <Image
                  src={project.image}
                  alt={`${project.title} mockup illustration`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 768px"
                  className="object-cover"
                />
              </div>

              {/* Narrative Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Story block */}
                <div className="md:col-span-2 space-y-6">
                  <div className="space-y-2.5">
                    <h3 className="text-xs font-bold uppercase text-white font-mono tracking-wider">
                      The Challenge
                    </h3>
                    <p className="text-sm text-muted-text leading-relaxed">{project.challenge}</p>
                  </div>
                  <div className="space-y-2.5">
                    <h3 className="text-xs font-bold uppercase text-white font-mono tracking-wider">
                      The Solution & Architecture
                    </h3>
                    <p className="text-sm text-muted-text leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Technical side spec block */}
                <div className="space-y-6">
                  <div className="space-y-2.5">
                    <h3 className="text-xs font-bold uppercase text-white font-mono tracking-wider">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-muted-text"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2.5">
                    <h3 className="text-xs font-bold uppercase text-white font-mono tracking-wider">
                      Business Outcomes
                    </h3>
                    <p className="text-xs text-muted-text leading-relaxed">{project.results}</p>
                  </div>
                </div>

              </div>

              {/* Detailed Features List */}
              <div className="space-y-4 pt-6 border-t border-white/5">
                <h3 className="text-xs font-bold uppercase text-white font-mono tracking-wider">
                  Features Delivered
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feat) => (
                    <li key={feat} className="text-sm text-muted-text flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-12 flex items-center gap-4">
              <button className="h-11 px-6 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-100 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 cursor-pointer flex items-center gap-2">
                Launch Live Demo
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <button
                onClick={onClose}
                className="h-11 px-6 rounded-full border border-white/10 bg-transparent text-white font-semibold text-sm hover:bg-white/5 transition-all duration-300 cursor-pointer"
              >
                Close Case Study
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
