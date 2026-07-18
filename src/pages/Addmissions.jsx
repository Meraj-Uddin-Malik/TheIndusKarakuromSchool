import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import * as Icons from 'lucide-react';

import Principal from "../assets/Principal.jpeg";

// Safe destructuring of icons with fallbacks to avoid undefined errors
const { 
  FileText, Cpu, UserPlus, ShieldCheck, ArrowUpRight, 
  Download, Zap, Phone, Mail, Globe, Sparkles, 
  Fingerprint, Activity, Quote, ChevronDown, CheckCircle2,
  GraduationCap, Award, BookOpen, Compass
} = Icons;

// --- REFINED UI UTILITIES ---

const SectionLabel = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-600/5 text-blue-600 dark:text-blue-400 text-[9px] font-black uppercase tracking-[0.4em] mb-12 border border-blue-600/10 shadow-sm"
  >
    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
    {children}
  </motion.div>
);

const Admissions = ({ setPage }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/prospectus.pdf'; 
    link.download = 'EIA_Nexus_Prospectus.pdf';
    link.click();
  };

  // Helper to safely render icons
  const SafeIcon = ({ icon: IconComponent, ...props }) => {
    if (!IconComponent) return <Icons.HelpCircle {...props} />;
    return <IconComponent {...props} />;
  };

  return (
    <div ref={containerRef} className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-1000 selection:bg-blue-600 selection:text-white">
      
      {/* 1. MINIMALIST HERO (High Speed, High Impact) */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden">
        <div className="container mx-auto text-center z-10">
          <SectionLabel>Admission Cycle 2024/25</SectionLabel>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-[10vw] font-black tracking-tighter leading-[0.8] mb-10"
          >
            THE <span className="text-blue-600">INTAKE.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-tight mb-12"
          >
            We don't look for students who fit the mold. We look for those who are ready to break it and build something entirely new.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-blue-600/30 hover:scale-105 transition-all">
              Initiate Inquiry
            </button>
            <button onClick={handleDownload} className="px-10 py-5 border border-slate-200 dark:border-white/10 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-white/5 transition-all">
              <Download size={16} /> Prospectus
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. THE CIRCUIT PATH (Process Design) */}
      <section className="container mx-auto px-6 py-40">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <SectionLabel>The Protocol</SectionLabel>
            <h2 className="text-5xl font-black tracking-tighter leading-none mb-8">Four Steps <br/>to the Core.</h2>
            <p className="text-slate-500 font-medium mb-12">Our evaluation process is holistic, focusing on the intersection of logical rigor and creative empathy.</p>
            <div className="hidden lg:block w-full aspect-square bg-blue-600/5 rounded-[3rem] border border-blue-600/10 p-12 relative overflow-hidden">
              <SafeIcon icon={Fingerprint} size={120} className="text-blue-600/20 absolute -bottom-10 -right-10" />
              <div className="relative z-10 space-y-4">
                 <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-widest">
                   <SafeIcon icon={Zap} size={14} /> Systems Status: Open
                 </div>
                 <p className="text-xs font-bold text-slate-400 leading-relaxed uppercase tracking-wider">Cohort 2024 is currently processing phase 01 applications.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {[
              { title: "Portfolio Submission", icon: FileText, desc: "A curated record of your intellectual and creative journey." },
              { title: "Logical Resonance", icon: Cpu, desc: "A challenge-based assessment of your problem-solving architecture." },
              { title: "Architect Dialogue", icon: UserPlus, desc: "A one-on-one synchronization with our lead faculty members." },
              { title: "Nexus Induction", icon: ShieldCheck, desc: "Final verification and assignment to your specialized Guild." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-8 p-8 md:p-12 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 group hover:border-blue-600 transition-all duration-500"
              >
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <SafeIcon icon={step.icon} size={32} />
                </div>
                <div>
                  <span className="text-[10px] font-black text-blue-600 mb-2 block tracking-[0.3em] uppercase">Phase 0{i + 1}</span>
                  <h4 className="text-2xl md:text-3xl font-black mb-2 tracking-tighter">{step.title}</h4>
                  <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ELIGIBILITY TILES (Non-Grid Modular) */}
      <section className="container mx-auto px-6 py-40">
        <SectionLabel>Requirements</SectionLabel>
        <div className="flex flex-wrap gap-6 justify-center">
          {[
            { label: "Grade Cohort", val: "Grades 6–12", icon: GraduationCap || Award },
            { label: "Aptitude", val: "STEM & Logic", icon: Zap },
            { label: "Community", val: "Global Ethics", icon: Globe }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex-1 min-w-[280px] p-10 rounded-[3rem] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5"
            >
              <SafeIcon icon={item.icon} size={30} className="text-blue-600 mb-8" />
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">{item.label}</p>
              <h4 className="text-3xl font-black tracking-tighter">{item.val}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. LEADERSHIP (Compact High-Contrast) */}
      <section className="container mx-auto px-6 py-40">
        <div className="relative p-12 md:p-24 rounded-[4rem] bg-blue-600 text-white overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-white/5 blur-[100px] pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
            <div className="w-48 h-64 md:w-64 md:h-80 flex-shrink-0 rounded-[2.5rem] overflow-hidden border-4 border-white/20">
              <img 
                src={Principal}
                alt="Principal" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="flex-1">
              <SafeIcon icon={Quote} size={60} className="opacity-20 mb-8" />
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-8 italic">
                "We are not training students for the world that exists, but for the one they will create."
              </h3>
              <p className="text-blue-100 font-bold text-xl uppercase tracking-widest">Muhammad Riaz</p>
              <p className="text-blue-200 text-xs font-black uppercase tracking-[0.3em]">Chief Academic Architect</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INQUIRY FORM (Refined & Fast) */}
      <section className="container mx-auto px-6 py-60 text-center">
        <SectionLabel>Initialize Inquiry</SectionLabel>
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-16">Sync <span className="text-blue-600">Now.</span></h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="FULL NAME" className="px-10 py-6 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 font-black uppercase tracking-widest text-[10px] focus:border-blue-600 outline-none" />
          <input type="email" placeholder="EMAIL ADDRESS" className="px-10 py-6 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 font-black uppercase tracking-widest text-[10px] focus:border-blue-600 outline-none" />
          <div className="md:col-span-2 relative">
             <select className="w-full px-10 py-6 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 font-black uppercase tracking-widest text-[10px] appearance-none outline-none focus:border-blue-600">
               <option>SELECT COHORT LEVEL</option>
               <option>PRIMARY GUILD (GR 6-8)</option>
               <option>SECONDARY NEXUS (GR 9-10)</option>
               <option>ADVANCED CORE (GR 11-12)</option>
             </select>
             <SafeIcon icon={ChevronDown} size={16} className="absolute right-8 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
          <button className="md:col-span-2 py-8 bg-blue-600 text-white rounded-full font-black uppercase tracking-[0.4em] text-[10px] shadow-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-4 group">
            Transmit Signal <SafeIcon icon={ArrowUpRight} size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Global Scroll Scrubber */}
      <motion.div 
        className="fixed top-0 left-0 bottom-0 w-1 bg-blue-600 z-[100] origin-top" 
        style={{ scaleY: smoothProgress }} 
      />

    </div>
  );
};

export default Admissions;
