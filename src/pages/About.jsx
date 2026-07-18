import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import * as Icons from 'lucide-react';

import bgImage from "../assets/Books.jpeg";
import Principal from "../assets/Principal.jpeg";

const { Fingerprint, Activity, ShieldCheck, Zap, Orbit, Quote } = Icons;

const SectionLabel = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 text-[9px] font-black uppercase tracking-[0.5em] mb-10 border border-blue-600/20"
  >
    <div className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
    {children}
  </motion.div>
);

const FloatingIcon = ({ Icon, className = "", delay = 0 }) => (
  <motion.div
    animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
    transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}
    className={`absolute pointer-events-none opacity-20 ${className}`}
  >
    <Icon size={120} />
  </motion.div>
);

const About = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20
  });

  const heroScale = useTransform(smoothProgress, [0, 0.1], [1, 0.7]);
  const heroRotate = useTransform(smoothProgress, [0, 0.1], [0, -10]);

  return (
    <div
      ref={containerRef}
      className="relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-1000 overflow-hidden selection:bg-blue-500 selection:text-white"
    >

      {/* 🌄 BACKGROUND IMAGE (FIXED) */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="background"
          className="object-cover opacity-40 dark:opacity-20"
        />
      </div>

      {/* 🌫 OVERLAY (FIXED BALANCED CONTRAST) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/40 via-white/60 to-white/80 dark:from-black/70 dark:via-black/80 dark:to-black/90" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HERO */}
        <section className="relative h-[120vh] flex items-center justify-center px-6 overflow-hidden">
          <motion.div
            style={{ scale: heroScale, rotate: heroRotate }}
            className="container mx-auto text-center z-10"
          >
            <SectionLabel>PHASE 01: GENESIS</SectionLabel>

            <h1 className="text-[16vw] md:text-[14vw] font-black tracking-tighter leading-[0.7] mb-12">
              BORN <br />
              <span className="italic font-serif opacity-50">OF</span> VOID.
            </h1>

            <p className="text-xl md:text-3xl max-w-3xl mx-auto font-medium leading-tight opacity-70">
              EIA Nexus began as a radical experiment: can we teach machines to learn, and humans to feel?
            </p>
          </motion.div>

          <FloatingIcon Icon={Orbit} className="top-1/4 left-1/4" delay={0} />
          <FloatingIcon Icon={Activity} className="bottom-1/4 right-1/4" delay={1} />
        </section>

        {/* SKILL TREE */}
        <section className="container mx-auto px-6 py-40 min-h-screen">
          <SectionLabel>PHASE 02: NEURAL ARCHITECTURE</SectionLabel>

          <div className="grid lg:grid-cols-2 gap-24 items-center">

            <div className="space-y-12">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
                The Skill <br />Tree.
              </h2>

              <div className="space-y-8">
                {[
                  { title: "Cognitive Fluency", desc: "Adaptive neural paths.", icon: Activity },
                  { title: "Planetary Ethics", desc: "Solving AI dilemmas.", icon: ShieldCheck },
                  { title: "Quantum Logic", desc: "Multi-state intelligence.", icon: Zap }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 20 }}
                    className="flex gap-6 items-start border-l-2 border-slate-300 dark:border-slate-700 pl-8 py-4 opacity-60 hover:opacity-100 transition-all"
                  >
                    <item.icon size={32} />
                    <div>
                      <h4 className="text-2xl font-black">{item.title}</h4>
                      <p className="font-medium opacity-70">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ORBIT VISUAL */}
            <div className="relative aspect-square bg-slate-500/5 rounded-[4rem] border border-slate-300 dark:border-white/10 flex items-center justify-center overflow-hidden">

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-20"
              >
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" className="text-blue-600" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" className="text-blue-500" />
                  <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" className="text-blue-400" />
                </svg>
              </motion.div>

              <div className="relative z-10 text-center">
                <Fingerprint size={120} className="mx-auto mb-6 text-blue-600 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em]">
                  Biometric Hub
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="container mx-auto px-6 py-40">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>
              <SectionLabel>PHASE 04: PRINCIPAL</SectionLabel>

              <Quote size={80} className="opacity-20 mb-10" />

              <h3 className="text-5xl md:text-7xl font-black leading-[0.85] mb-10">
                "WE DO NOT <br />REPRESENT <br />THE PAST."
              </h3>

              <p className="opacity-60 max-w-lg">
                TIKSchools exists to redefine education itself — replacing outdated, factory-style learning with an adaptive, intelligence-driven ecosystem where every learner evolves with purpose, not pressure.</p>
            </div>

            <div className="aspect-[3/4] rounded-[4rem] overflow-hidden border border-slate-300 dark:border-white/10">
              <img
                src={Principal}
                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
                alt="leader"
              />
            </div>

          </div>
        </section>

      </div>

      {/* SCROLL PROGRESS */}
      <motion.div
        className="fixed top-0 left-0 bottom-0 w-1 bg-blue-600 z-[100] origin-top"
        style={{ scaleY: smoothProgress }}
      />

    </div>
  );
};

export default About;
