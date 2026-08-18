"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Users, Cpu, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Magnetic } from "@/components/ui/magnetic";
import { Particles } from "@/components/ui/particles";
import { TypingEffect } from "@/components/ui/typing-effect";
import { SkillsOrbit } from "@/components/sections/skills-orbit";
import { TiltCard } from "@/components/ui/tilt-card";
import { ProjectModal } from "@/components/ui/project-modal";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";

import { PERSONAL_INFO, PROFESSIONAL_SUMMARY, SKILLS_CATEGORIES, EXPERIENCE as TIMELINE, PROJECTS, EDUCATION } from "@/data/portfolio";




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
        const errorData = await response.json().catch(() => ({}));
        console.error("Server returned an error:", errorData);
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form (network level):", error);
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
                  Hi, I'm <span className="text-foreground font-bold">{PERSONAL_INFO.name}</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3}>
                <h1 className="text-lg font-semibold tracking-wide uppercase text-muted-text flex flex-wrap items-center gap-2">
                  <span className="text-primary font-bold">
                    <TypingEffect phrases={[PERSONAL_INFO.role, "Software Engineer", "Backend Developer"]} />
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4}>
                <h3
                  className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05]"
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
              <div className="flex items-center gap-2 mt-4 text-sm font-medium text-muted-text bg-card-bg border border-card-border w-fit px-4 py-2 rounded-full">
                <span>📍 {PERSONAL_INFO.location}</span>
                <span className="w-1 h-1 rounded-full bg-muted-text/30"></span>
                <span>Open to Remote or Hybrid in Ahmedabad</span>
              </div>
            </ScrollReveal>

            {/* Hero CTAs */}
            <ScrollReveal direction="up" delay={0.6}>
              <div className="flex flex-wrap items-center gap-5 pt-2">
                <Magnetic range={45} strength={0.2}>
                  <a
                    href="#projects"
                    className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-background transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] cursor-pointer"
                  >
                    View Projects
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </Magnetic>

                <Magnetic range={45} strength={0.2}>
                  <a
                    href="#contact"
                    className="inline-flex h-12 px-8 rounded-full border border-primary bg-transparent text-primary font-semibold text-sm hover:bg-primary/10 transition-all duration-300 cursor-pointer items-center"
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
                        src="/images/yashvi-image-2.png"
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
                <div className="absolute -bottom-4 right-4 bg-card-bg/80 backdrop-blur-xl border border-card-border px-4 py-2 rounded-xl shadow-2xl flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-foreground">Shah.dev</span>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="w-full max-w-4xl mx-auto px-6 md:px-12 py-20 border-t border-card-border relative z-10 text-center">
        <ScrollReveal direction="up">
          <div className="space-y-6">
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              About Me
            </h2>
            <p className="text-lg md:text-xl text-muted-text leading-relaxed whitespace-pre-line">
              {PROFESSIONAL_SUMMARY}
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full max-w-7xl px-6 md:px-12 py-24 border-t border-card-border relative z-10 overflow-hidden">
        {/* Ambient backlight glow */}
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] glow-primary rounded-full opacity-10 blur-[100px] pointer-events-none" />

        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                Skills & Technologies
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-lg text-foreground/90 leading-relaxed max-w-2xl mx-auto">
                The core tools, languages, and frameworks I use to build robust applications.
              </p>
            </ScrollReveal>
          </div>

          {/* Full Grid for Skills */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SKILLS_CATEGORIES.map((category) => (
                <div key={category.title} className="p-6 rounded-2xl border border-card-border bg-card-bg shadow-sm hover:shadow-[0_0_15px_rgba(56,189,248,0.1)] hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
                  <h4 className="text-base md:text-lg font-mono text-foreground font-extrabold mb-4 uppercase tracking-wider">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((s) => (
                      <span key={s} className="px-3 py-1.5 text-[11px] font-mono text-primary font-semibold border border-primary/20 rounded-md bg-primary/10 hover:bg-primary hover:text-background transition-colors uppercase tracking-wider">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section >

      {/* Featured Projects Section */}
      < section id="projects" className="w-full max-w-7xl px-6 md:px-12 py-24 border-t border-card-border relative z-10" >
        <ScrollReveal direction="up">
          <div className="space-y-4 mb-20 text-center md:text-left">
            <h2
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              My Work
            </h2>
            <p className="text-muted-text max-w-xl text-base">
              A selection of featured projects, showcasing custom business applications and full-stack integrations.
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
                    <TiltCard className="relative overflow-hidden rounded-2xl border border-card-border bg-card-bg p-2 shadow-2xl hover:shadow-[0_0_15px_rgba(56,189,248,0.15)] transition-all duration-300">
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
                        className="text-2xl md:text-4xl font-bold text-foreground tracking-tight leading-tight"
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
                          <span className="h-1 w-1 rounded-full bg-primary" />
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
                          className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-card-bg border border-card-border text-muted-text uppercase tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </ScrollReveal>

                  {/* CTA link to slide study drawer */}
                  <ScrollReveal direction="up" delay={0.4}>
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Magnetic range={35} strength={0.25}>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-primary bg-transparent px-6 text-sm font-semibold text-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                        >
                          View Case Study
                          <ArrowUpRight className="h-4 w-4" />
                        </button>
                      </Magnetic>

                      {/* External Links */}
                      {(project as any).links && ((project as any).links as any[]).map((link, idx) => (
                        <Magnetic range={35} strength={0.25} key={idx}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-card-bg border border-card-border text-foreground px-6 text-sm font-semibold hover:bg-card-border transition-all duration-300 cursor-pointer hover:-translate-y-1"
                          >
                            {link.label}
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </Magnetic>
                      ))}
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            );
          })}
        </div>
      </section >

      {/* Experience Timeline Section */}
      < section id="experience" className="w-full max-w-7xl px-6 md:px-12 py-24 border-t border-card-border relative z-10 overflow-hidden" >
        {/* Radial backing glow */}
        < div className="absolute left-0 top-1/4 w-[400px] h-[400px] glow-secondary rounded-full opacity-10 blur-[100px] pointer-events-none" />

        <ScrollReveal direction="up">
          <div className="space-y-4 mb-20 text-center">
            <h2
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Experience
            </h2>
          </div>
        </ScrollReveal>

        <ExperienceTimeline />
      </section >

      {/* Education & Academic history section */}
      < section id="education" className="w-full max-w-4xl mx-auto px-6 md:px-12 py-24 border-t border-card-border relative z-10" >
        <div className="space-y-12">
          <ScrollReveal direction="up">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground font-display" style={{ fontFamily: "var(--font-display)" }}>
                Education
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative border-l border-card-border pl-6 ml-3 space-y-10">
            {EDUCATION.map((edu, idx) => (
              <ScrollReveal key={idx} direction="up" delay={0.1 * (idx + 1)} className="relative">
                <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-lg font-bold text-foreground leading-tight font-display" style={{ fontFamily: "var(--font-display)" }}>
                      {edu.degree}
                    </h4>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-card-bg border border-card-border text-muted-text">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-primary">{edu.institution}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section >

      {/* Contact Section */}
      < section id="contact" className="w-full py-28 border-t border-card-border bg-mesh-gradient relative z-10 overflow-hidden" >
        {/* Floating particles specific to contact background */}
        < Particles quantity={30} />

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
                className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.05]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Let's Work Together
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-base md:text-lg text-muted-text max-w-lg leading-relaxed">
                Have a project in mind or need a senior full-stack developer? Write me a message, or contact me directly through my social channels.
              </p>
            </ScrollReveal>

            {/* Direct Social / Contact Buttons */}
            <ScrollReveal direction="left" delay={0.3}>
              <div className="space-y-4 max-w-sm">
                <Magnetic range={35} strength={0.2}>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    aria-label={`Send email to ${PERSONAL_INFO.name} directly at ${PERSONAL_INFO.email}`}
                    className="flex items-center gap-3 px-5 py-3 rounded-xl border border-card-border bg-card-bg hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                  >
                    <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <span className="block text-[10px] text-muted-text font-mono font-bold leading-none mb-1">EMAIL ME DIRECTLY</span>
                      <span className="text-sm font-semibold text-foreground">{PERSONAL_INFO.email}</span>
                    </div>
                  </a>
                </Magnetic>

                <Magnetic range={35} strength={0.2}>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/[\s\+]/g, '')}`}
                    aria-label={`Call ${PERSONAL_INFO.name} directly at ${PERSONAL_INFO.phone}`}
                    className="flex items-center gap-3 px-5 py-3 rounded-xl border border-card-border bg-card-bg hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="h-5 w-5 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5 text-primary group-hover:scale-110 transition-transform duration-300">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] text-muted-text font-mono font-bold leading-none mb-1">CALL ME DIRECTLY</span>
                      <span className="text-sm font-semibold text-foreground">{PERSONAL_INFO.phone}</span>
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
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-card-border bg-card-bg hover:border-primary/50 transition-all duration-300 group cursor-pointer text-xs font-semibold text-foreground justify-center"
                    >
                      <WhatsappIcon className="h-4.5 w-4.5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                      WhatsApp
                    </a>
                  </Magnetic>

                  <Magnetic range={30} strength={0.2}>
                    <a
                      href="https://www.linkedin.com/in/yashvi-shah-3a1915174"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Yashvi Shah's LinkedIn profile"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-card-border bg-card-bg hover:border-primary/50 transition-all duration-300 group cursor-pointer text-xs font-semibold text-foreground justify-center"
                    >
                      <LinkedinIcon className="h-4.5 w-4.5 text-primary group-hover:scale-105 transition-transform duration-300" />
                      LinkedIn
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
                glowColor="rgba(56, 189, 248, 0.12)"
                borderColor="#1E293B"
                className="p-8 md:p-10 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.1)] transition-all duration-500"
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
                      className="w-full h-11 px-4 rounded-xl border border-card-border bg-background text-sm text-foreground placeholder-muted-text/50 focus:border-primary/50 focus:outline-none transition-colors duration-300"
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
                      className="w-full h-11 px-4 rounded-xl border border-card-border bg-background text-sm text-foreground placeholder-muted-text/50 focus:border-primary/50 focus:outline-none transition-colors duration-300"
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
                      className="w-full p-4 rounded-xl border border-card-border bg-background text-sm text-foreground placeholder-muted-text/50 focus:border-primary/50 focus:outline-none transition-colors duration-300 resize-none"
                    />
                  </div>

                  {/* Form Submit Button */}
                  <div className="pt-2">
                    <Magnetic range={40} strength={0.15}>
                      <button
                        type="submit"
                        disabled={formStatus === "sending"}
                        className="h-12 px-8 rounded-full bg-primary text-background font-semibold text-sm hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
                  {formStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 text-center text-xs font-semibold text-rose-500"
                    >
                      Failed to send message. Please check your credentials or email me directly!
                    </motion.div>
                  )}
                </form>
              </GlassCard>
            </ScrollReveal>
          </div>

        </div>
      </section >

      {/* Immersive Slide Drawer Case-Study Modal */}
      < ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)
        }
      />
    </div >
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
