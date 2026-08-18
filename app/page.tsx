"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Award, Users, Code2, Zap, TrendingUp, HeartHandshake, Box, Cpu, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Magnetic } from "@/components/ui/magnetic";
import { Particles } from "@/components/ui/particles";
import { TypingEffect } from "@/components/ui/typing-effect";
import { StatCounter } from "@/components/ui/stat-counter";
import { SkillsOrbit } from "@/components/sections/skills-orbit";
import { TiltCard } from "@/components/ui/tilt-card";
import { ProjectModal } from "@/components/ui/project-modal";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";

import { PERSONAL_INFO, PROFESSIONAL_SUMMARY, SKILLS_CATEGORIES, EXPERIENCE as TIMELINE, PROJECTS, EDUCATION, STRENGTHS as STRENGTHS_DATA } from "@/data/portfolio";

const STATS = [
  {
    label: "Years Experience",
    value: parseInt(PERSONAL_INFO.experience),
    suffix: "+",
    icon: Award,
    color: "text-secondary",
    glow: "rgba(139, 92, 246, 0.15)"
  }
];

const STRENGTHS = STRENGTHS_DATA.map((strength, index) => {
  const icons = [Zap, Code2, TrendingUp, HeartHandshake, Box];
  const colors = ["text-amber-500", "text-blue-500", "text-emerald-500", "text-rose-500", "text-purple-500"];
  const bgs = ["rgba(245, 158, 11, 0.05)", "rgba(59, 130, 246, 0.05)", "rgba(16, 185, 129, 0.05)", "rgba(244, 63, 94, 0.05)", "rgba(168, 85, 247, 0.05)"];
  
  return {
    ...strength,
    icon: icons[index % icons.length],
    color: colors[index % colors.length],
    bg: bgs[index % bgs.length]
  };
});


export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormStatus("sending");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
    } finally {
      setTimeout(() => setFormStatus("idle"), 4000);
    }
  };

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center min-h-screen">
      {/* Premium Particles Canvas Background */}
      <Particles quantity={50} />

      {/* Aurora Radial Spotlights */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] glow-primary rounded-full opacity-35 blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-[35vh] right-1/4 w-[700px] h-[700px] glow-secondary rounded-full opacity-25 blur-[140px] pointer-events-none" />

      {/* Hero Section */}
      <section id="home" className="w-full max-w-7xl px-6 md:px-12 pt-12 md:pt-20 pb-16 flex flex-col justify-center min-h-[90vh] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Content Side */}
          <div className="lg:col-span-7 space-y-8 text-left order-2 lg:order-1">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-text">
                  Available for Senior Roles & Consulting
                </span>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              <ScrollReveal direction="up" delay={0.2}>
                <h2 className="text-2xl md:text-3xl font-semibold text-muted-text">
                  Hi, I'm <span className="text-white font-bold">{PERSONAL_INFO.name}</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3}>
                <h1 className="text-sm font-semibold tracking-wide uppercase text-muted-text flex flex-wrap items-center gap-2">
                  A Passionate{" "}
                  <span className="text-primary font-bold">
                    <TypingEffect phrases={[PERSONAL_INFO.role, "Software Engineer", "Backend Developer"]} />
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4}>
                <h3
                  className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[size:200%] animate-gradient">
                    {PERSONAL_INFO.tagline}
                  </span>
                </h3>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={0.5}>
              <p className="text-lg text-muted-text max-w-xl leading-relaxed">
                Over {PERSONAL_INFO.experience} of experience building enterprise web applications, designing robust RESTful APIs, securing authentication pipelines, and automating complex business processes.
              </p>
              <div className="flex items-center gap-2 mt-4 text-sm font-medium text-muted-text bg-white/5 border border-white/10 w-fit px-4 py-2 rounded-full">
                <span>📍 {PERSONAL_INFO.location}</span>
                <span className="w-1 h-1 rounded-full bg-white/30"></span>
                <span>Open to Remote or Hybrid in Ahmedabad</span>
              </div>
            </ScrollReveal>

            {/* Hero CTAs */}
            <ScrollReveal direction="up" delay={0.6}>
              <div className="flex flex-wrap items-center gap-5 pt-2">
                <Magnetic range={45} strength={0.2}>
                  <a
                    href="#projects"
                    className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-black transition-all duration-300 hover:bg-neutral-100 hover:shadow-xl hover:shadow-white/10 cursor-pointer"
                  >
                    View Projects
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </Magnetic>

                <Magnetic range={45} strength={0.2}>
                  <a
                    href="#contact"
                    className="inline-flex h-12 px-8 rounded-full border border-white/10 bg-[#0F0F0F]/50 text-white font-semibold text-sm hover:bg-white/5 transition-all duration-300 cursor-pointer items-center"
                  >
                    Contact Me
                  </a>
                </Magnetic>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Profile Side */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <ScrollReveal direction="none" delay={0.3}>
              <motion.div
                className="relative group cursor-pointer"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                {/* Backdrop Glow Behind Profile */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Rotating Gradient Border Wrapper */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full p-[3px] bg-gradient-to-tr from-primary via-secondary to-primary bg-[size:200%] animate-[spin_8s_linear_infinite]">
                  {/* Mask / Inner Container */}
                  <div className="w-full h-full rounded-full bg-background overflow-hidden p-2">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-secondary-bg">
                      <Image
                        src="/images/profile.png"
                        alt="Yashvi Shah Profile Avatar"
                        fill
                        sizes="(max-width: 768px) 288px, 320px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        preload={true}
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Micro-Badge Branding */}
                <div className="absolute -bottom-4 right-4 bg-black/80 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl shadow-2xl flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase">Shah.dev</span>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Statistics Section */}
      <section className="w-full max-w-7xl px-6 md:px-12 py-16 border-t border-white/5 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={stat.label} direction="up" delay={i * 0.1}>
                <GlassCard
                  glowColor={stat.glow}
                  borderColor="rgba(255, 255, 255, 0.08)"
                  className="flex flex-col justify-between p-6 h-40 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-muted-text uppercase tracking-widest">
                      Stat 0{i + 1}
                    </span>
                    <Icon className={`h-5 w-5 ${stat.color} opacity-80`} />
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-1">
                      <StatCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-xs text-muted-text font-medium uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="w-full max-w-7xl px-6 md:px-12 py-24 border-t border-white/5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Side: Workspace Image and Animated Badges */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0F0F0F]/50 p-3 shadow-2xl">
                {/* Accent lighting border glow */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-60 pointer-events-none" />

                <div className="relative aspect-video lg:aspect-square rounded-xl overflow-hidden bg-secondary-bg">
                  <Image
                    src="/images/workspace.png"
                    alt="Yashvi Shah Workspace Desk Mockup"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Core Capability Cards */}
            <div className="grid grid-cols-2 gap-4">
              <ScrollReveal direction="left" delay={0.1}>
                <div className="p-4 rounded-xl border border-white/5 bg-card-bg/40 backdrop-blur-xl">
                  <span className="text-[10px] text-primary font-mono font-bold tracking-wider block mb-1">CORE SPECIALTY</span>
                  <span className="text-sm font-semibold text-white">ERP Architectures</span>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={0.2}>
                <div className="p-4 rounded-xl border border-white/5 bg-card-bg/40 backdrop-blur-xl">
                  <span className="text-[10px] text-secondary font-mono font-bold tracking-wider block mb-1">DATABASES</span>
                  <span className="text-sm font-semibold text-white">High Scalability</span>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Side: Narrative and Interactive Timeline */}
          <div className="lg:col-span-7 space-y-12">
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-wide">
                  My Story
                </div>
                <h2
                  className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Solving Complex Enterprise Problems with Code.
                </h2>
                <p className="text-base text-muted-text leading-relaxed whitespace-pre-line">
                  {PROFESSIONAL_SUMMARY}
                </p>
              </div>
            </ScrollReveal>

            {/* Expertise Highlights Grid */}
            <div className="space-y-4">
              <ScrollReveal direction="right" delay={0.1}>
                <h3 className="text-xs font-mono uppercase tracking-widest text-white mb-4">Expertise Focus</h3>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ScrollReveal direction="right" delay={0.15}>
                  <GlassCard className="p-5">
                    <h4 className="font-semibold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                      ERP & Operational Logic
                    </h4>
                    <p className="text-xs text-muted-text leading-relaxed">
                      Designing ledger accounts, supply chain pipelines, inventory automations, and secure corporate permissions systems.
                    </p>
                  </GlassCard>
                </ScrollReveal>
                <ScrollReveal direction="right" delay={0.2}>
                  <GlassCard className="p-5">
                    <h4 className="font-semibold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                      Enterprise CRM Platforms
                    </h4>
                    <p className="text-xs text-muted-text leading-relaxed">
                      Connecting omnichannel user communications, automated billing funnels, lead scoring engines, and dashboard analytics.
                    </p>
                  </GlassCard>
                </ScrollReveal>
              </div>
            </div>

            {/* Vertical Career Timeline */}
            <div className="space-y-8 pt-4">
              <ScrollReveal direction="right" delay={0.1}>
                <h3 className="text-xs font-mono uppercase tracking-widest text-white">Milestone Journey</h3>
              </ScrollReveal>

              <div className="relative border-l border-white/10 pl-6 ml-3 space-y-10">
                {TIMELINE.map((item, idx) => (
                  <ScrollReveal key={item.role} direction="right" delay={idx * 0.1} className="relative">
                    {/* Timeline dot indicator */}
                    <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-[#050505] flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-lg font-bold text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                          {item.role}
                        </h4>
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-muted-text">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-primary">{item.company}</p>
                      <p className="text-sm text-muted-text leading-relaxed">{item.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full max-w-7xl px-6 md:px-12 py-24 border-t border-white/5 relative z-10 overflow-hidden">
        {/* Ambient backlight glow */}
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] glow-primary rounded-full opacity-10 blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Side: Skills Introduction Copy */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-xs font-semibold tracking-wide">
                Interactive Stack
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                Futuristic & Core Tooling.
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-base text-muted-text leading-relaxed">
                A preview of technologies and frameworks configured within my current engineering system. Core architectures (inner circle) drive rapid development loops, while auxiliary microservices and APIs (outer circle) ensure robust data routing and integrity.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.3}>
              <div className="pt-4 space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {SKILLS_CATEGORIES.map((category) => (
                  <div key={category.title}>
                    <h4 className="text-xs font-mono text-white mb-2 uppercase tracking-wider">{category.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((s) => (
                        <span key={s} className="px-2 py-1 text-[10px] font-mono text-muted-text border border-white/10 rounded-md bg-white/5">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: Interactive Orbit Component Container */}
          <div className="lg:col-span-7 flex justify-center items-center py-8">
            <ScrollReveal direction="none" delay={0.2}>
              <SkillsOrbit />
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="w-full max-w-7xl px-6 md:px-12 py-24 border-t border-white/5 relative z-10">
        <ScrollReveal direction="up">
          <div className="space-y-4 mb-20 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-wide">
              Case Studies
            </div>
            <h2
              className="text-3xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Enterprise Architectures
            </h2>
            <p className="text-muted-text max-w-xl text-base">
              A detailed inspection of custom business applications, transactional ERP logic, and scalable full-stack integrations.
            </p>
          </div>
        </ScrollReveal>

        {/* Alternating Projects Layout Showcase */}
        <div className="space-y-28">
          {PROJECTS.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={project.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Product Interface Card (Large Screenshot with Tilt) */}
                <div className={`lg:col-span-6 ${isEven ? "order-1" : "order-1 lg:order-2"}`}>
                  <ScrollReveal direction={isEven ? "left" : "right"}>
                    <TiltCard className="relative overflow-hidden rounded-2xl border border-white/5 bg-card-bg/20 p-2 shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                      <div className="absolute -inset-1 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-60 pointer-events-none" />
                      <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-secondary-bg">
                        <Image
                          src={project.image}
                          alt={`${project.title} UI dashboard preview`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    </TiltCard>
                  </ScrollReveal>
                </div>

                {/* Narrative Details */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? "order-2" : "order-2 lg:order-1"}`}>
                  <ScrollReveal direction="up" delay={0.1}>
                    <div className="space-y-4">
                      <h3
                        className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-sm font-semibold text-primary/80 font-mono tracking-wider">
                        {project.subtitle}
                      </p>
                      <p className="text-base text-muted-text leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Core Features list preview */}
                  <ScrollReveal direction="up" delay={0.2}>
                    <ul className="grid grid-cols-2 gap-2 text-xs text-muted-text font-semibold uppercase tracking-wider font-mono">
                      {project.features.slice(0, 4).map((feat) => (
                        <li key={feat} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-secondary" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </ScrollReveal>

                  {/* Project Tech Tags */}
                  <ScrollReveal direction="up" delay={0.3}>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-white/5 border border-white/5 text-muted-text uppercase tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </ScrollReveal>

                  {/* CTA link to slide study drawer */}
                  <ScrollReveal direction="up" delay={0.4}>
                    <div className="pt-4">
                      <Magnetic range={35} strength={0.25}>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-[#0F0F0F]/50 px-6 text-sm font-semibold text-white hover:bg-white/5 transition-all duration-300 cursor-pointer"
                        >
                          View Case Study
                          <ArrowUpRight className="h-4 w-4" />
                        </button>
                      </Magnetic>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="w-full max-w-7xl px-6 md:px-12 py-24 border-t border-white/5 relative z-10 overflow-hidden">
        {/* Radial backing glow */}
        <div className="absolute left-0 top-1/4 w-[400px] h-[400px] glow-secondary rounded-full opacity-10 blur-[100px] pointer-events-none" />

        <ScrollReveal direction="up">
          <div className="space-y-4 mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-xs font-semibold tracking-wide">
              Timeline
            </div>
            <h2
              className="text-3xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Milestones & Journey
            </h2>
            <p className="text-muted-text max-w-xl mx-auto text-base">
              Visualizing the roadmap of software engineering, process automation, and full-scale enterprise ERP/CRM developments.
            </p>
          </div>
        </ScrollReveal>

        <ExperienceTimeline />
      </section>

      {/* Education & Academic history section */}
      <section id="education" className="w-full max-w-7xl px-6 md:px-12 py-24 border-t border-white/5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Side: Education timeline (M.Sc., B.Sc., H.S.C., S.S.C.) */}
          <div className="lg:col-span-6 space-y-12">
            <ScrollReveal direction="left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-wide">
                  Credentials
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-display" style={{ fontFamily: "var(--font-display)" }}>
                  Education & Academic Path
                </h2>
                <p className="text-base text-muted-text leading-relaxed">
                  My structured educational milestones from Gujarat University and schools laying down robust foundations in computational logic, database models, algorithms, and application engineering.
                </p>
              </div>
            </ScrollReveal>

            <div className="relative border-l border-white/10 pl-6 ml-3 space-y-10">
              {EDUCATION.map((edu, idx) => (
                <ScrollReveal key={idx} direction="left" delay={0.1 * (idx + 1)} className="relative">
                  <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-[#050505] flex items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-lg font-bold text-white leading-tight font-display" style={{ fontFamily: "var(--font-display)" }}>
                        {edu.degree}
                      </h4>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-muted-text">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-primary">{edu.institution}</p>
                    <p className="text-sm text-muted-text">Completed with a score of {edu.score}.</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Side: Key Strengths & Traits (Resume strengths) */}
          <div className="lg:col-span-6 space-y-12">
            <ScrollReveal direction="right">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-xs font-semibold tracking-wide">
                  Qualities
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-display" style={{ fontFamily: "var(--font-display)" }}>
                  Strengths & Core Traits
                </h2>
                <p className="text-base text-muted-text leading-relaxed">
                  Professional traits and work ethics that define my day-to-day engineering and enable seamless developer collaborations.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ScrollReveal direction="right" delay={0.15}>
                <GlassCard className="p-5 flex flex-col justify-between h-40">
                  <span className="text-[10px] text-primary font-mono font-bold tracking-wider block mb-1">LEARNING</span>
                  <h4 className="font-bold text-white mb-2 font-display" style={{ fontFamily: "var(--font-display)" }}>
                    Quick & Adaptable
                  </h4>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Proven ability to learn and adapt to new frameworks, backend APIs, and systems logic instantly.
                  </p>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <GlassCard className="p-5 flex flex-col justify-between h-40">
                  <span className="text-[10px] text-secondary font-mono font-bold tracking-wider block mb-1">ENGINEERING</span>
                  <h4 className="font-bold text-white mb-2 font-display" style={{ fontFamily: "var(--font-display)" }}>
                    Problem Solving
                  </h4>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Highly analytical debugger diagnosing database bottlenecks and optimizing REST query structures.
                  </p>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.25}>
                <GlassCard className="p-5 flex flex-col justify-between h-40">
                  <span className="text-[10px] text-emerald-500 font-mono font-bold tracking-wider block mb-1">COMMUNICATION</span>
                  <h4 className="font-bold text-white mb-2 font-display" style={{ fontFamily: "var(--font-display)" }}>
                    Effective Teamwork
                  </h4>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Collaborative team player aligning cleanly with Scrum masters, frontend developers, and product leads.
                  </p>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.3}>
                <GlassCard className="p-5 flex flex-col justify-between h-40">
                  <span className="text-[10px] text-amber-500 font-mono font-bold tracking-wider block mb-1">PUNCTUALITY</span>
                  <h4 className="font-bold text-white mb-2 font-display" style={{ fontFamily: "var(--font-display)" }}>
                    Deadline Driven
                  </h4>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Strict deadline management and structural priority setting ensuring timely and secure codebase updates.
                  </p>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>

        </div>
      </section>



      {/* Why Work With Me Section */}
      <section id="strengths" className="w-full max-w-7xl px-6 md:px-12 py-24 border-t border-white/5 relative z-10">
        <ScrollReveal direction="up" className="mb-20 text-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-xs font-semibold tracking-wide">
              Value Proposition
            </div>
            <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Why Work With Me.
            </h2>
            <p className="text-muted-text max-w-xl mx-auto text-base">
              A commitment to engineering standards, robust logic patterns, and long-term partnership goals.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STRENGTHS.map((strength, i) => {
            const Icon = strength.icon;
            return (
              <ScrollReveal key={strength.title} direction="up" delay={i * 0.08}>
                <GlassCard
                  glowColor="rgba(255, 255, 255, 0.05)"
                  borderColor="rgba(255, 255, 255, 0.05)"
                  className="group hover:border-white/10 hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between h-64"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="p-3 rounded-xl border border-white/5 transition-all duration-300 group-hover:scale-105"
                      style={{ backgroundColor: strength.bg }}
                    >
                      <Icon className={`h-6 w-6 ${strength.color}`} />
                    </div>
                    <span className="text-[10px] font-mono text-muted-text font-bold">
                      Val 0{i + 1}
                    </span>
                  </div>
                  <div className="space-y-2 mt-4">
                    <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-primary" style={{ fontFamily: "var(--font-display)" }}>
                      {strength.title}
                    </h3>
                    <p className="text-xs text-muted-text leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-28 border-t border-white/5 bg-mesh-gradient relative z-10 overflow-hidden">
        {/* Floating particles specific to contact background */}
        <Particles quantity={30} />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

          {/* Left Side: Call to Action Details */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-wide">
                Get In Touch
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <h2
                className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Let's Build Something <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[size:200%] animate-gradient">
                  Amazing Together.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-base md:text-lg text-muted-text max-w-lg leading-relaxed">
                Have a complex ERP system to deploy, a CRM funnel to automate, or need senior full-stack development consulting? Write me a message, or contact me directly through my social channels. Let's discuss your timelines.
              </p>
            </ScrollReveal>

            {/* Direct Social / Contact Buttons */}
            <ScrollReveal direction="left" delay={0.3}>
              <div className="space-y-4 max-w-sm">
                <Magnetic range={35} strength={0.2}>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    aria-label={`Send email to ${PERSONAL_INFO.name} directly at ${PERSONAL_INFO.email}`}
                    className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/5 bg-card-bg/40 backdrop-blur-xl hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                  >
                    <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <span className="block text-[10px] text-muted-text font-mono font-bold leading-none mb-1">EMAIL ME DIRECTLY</span>
                      <span className="text-sm font-semibold text-white">{PERSONAL_INFO.email}</span>
                    </div>
                  </a>
                </Magnetic>

                <Magnetic range={35} strength={0.2}>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/[\s\+]/g, '')}`}
                    aria-label={`Call ${PERSONAL_INFO.name} directly at ${PERSONAL_INFO.phone}`}
                    className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/5 bg-card-bg/40 backdrop-blur-xl hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="h-5 w-5 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5 text-primary group-hover:scale-110 transition-transform duration-300">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] text-muted-text font-mono font-bold leading-none mb-1">CALL ME DIRECTLY</span>
                      <span className="text-sm font-semibold text-white">{PERSONAL_INFO.phone}</span>
                    </div>
                  </a>
                </Magnetic>

                <div className="flex gap-4">
                  <Magnetic range={30} strength={0.2}>
                    <a
                      href="https://wa.me/919106060400"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat with Yashvi Shah on WhatsApp at +91 91060 60400"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/5 bg-card-bg/40 backdrop-blur-xl hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer text-xs font-semibold text-white justify-center"
                    >
                      <WhatsappIcon className="h-4.5 w-4.5 text-emerald-500 group-hover:rotate-12 transition-transform duration-300" />
                      WhatsApp
                    </a>
                  </Magnetic>

                  <Magnetic range={30} strength={0.2}>
                    <a
                      href="https://www.linkedin.com/in/yashvi-shah-3a1915174"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Yashvi Shah's LinkedIn profile"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/5 bg-card-bg/40 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300 group cursor-pointer text-xs font-semibold text-white justify-center"
                    >
                      <LinkedinIcon className="h-4.5 w-4.5 text-blue-500 group-hover:scale-105 transition-transform duration-300" />
                      LinkedIn
                    </a>
                  </Magnetic>

                  <Magnetic range={30} strength={0.2}>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Yashvi Shah's GitHub profile"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/5 bg-card-bg/40 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 group cursor-pointer text-xs font-semibold text-white justify-center"
                    >
                      <GithubIcon className="h-4.5 w-4.5 text-purple-500 group-hover:scale-105 transition-transform duration-300" />
                      GitHub
                    </a>
                  </Magnetic>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: Interactive Form Card */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="right" delay={0.2}>
              <GlassCard
                glowColor="rgba(139, 92, 246, 0.12)"
                borderColor="rgba(255, 255, 255, 0.08)"
                className="p-8 md:p-10 hover:border-white/10 hover:shadow-2xl transition-all duration-500"
              >
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name-input" className="text-xs font-mono uppercase tracking-widest text-muted-text font-bold block">
                      Your Name
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Vikram Mehta"
                      className="w-full h-11 px-4 rounded-xl border border-white/10 bg-black/40 text-sm text-white placeholder-white/20 focus:border-primary/50 focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email-input" className="text-xs font-mono uppercase tracking-widest text-muted-text font-bold block">
                      Email Address
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. vikram@mehtajewel.com"
                      className="w-full h-11 px-4 rounded-xl border border-white/10 bg-black/40 text-sm text-white placeholder-white/20 focus:border-primary/50 focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message-input" className="text-xs font-mono uppercase tracking-widest text-muted-text font-bold block">
                      Project Specification
                    </label>
                    <textarea
                      id="message-input"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe the ERP module, CRM integration, or full-stack software requirements..."
                      className="w-full p-4 rounded-xl border border-white/10 bg-black/40 text-sm text-white placeholder-white/20 focus:border-primary/50 focus:outline-none transition-colors duration-300 resize-none"
                    />
                  </div>

                  {/* Form Submit Button */}
                  <div className="pt-2">
                    <Magnetic range={40} strength={0.15}>
                      <button
                        type="submit"
                        disabled={formStatus === "sending"}
                        className="h-12 px-8 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-100 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        {formStatus === "sending" ? "Dispatching..." : "Send Message"}
                      </button>
                    </Magnetic>
                  </div>

                  {/* Form Status Messages */}
                  {formStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-center text-xs font-semibold text-emerald-500"
                    >
                      Message Sent Successfully! Yashvi will get in touch with you shortly.
                    </motion.div>
                  )}
                </form>
              </GlassCard>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Immersive Slide Drawer Case-Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

// Custom Premium Vector SVGs
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);
