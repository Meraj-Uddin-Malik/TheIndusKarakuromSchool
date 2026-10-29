import React from "react";
import BentoCard from "./BentoCard";
import { BookOpen, ChevronRight, Globe } from "lucide-react";

const InnovationSection = ({ setPage }) => {
  return (
    <section className="container mx-auto px-6 py-10">
      {/* FIX 1: Removed hardcoded bg-slate-900 and text-white. Let BentoCard handle the theme automatically. */}
      <BentoCard className="flex flex-col lg:flex-row items-center gap-12 border-none p-8 md:p-16">
        {/* Left Side: Content */}
        <div className="flex-1 space-y-8 relative z-10">
          {/* FIX 2: Made the "Eyebrow" Tag adapt to light/dark mode */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] border border-blue-200 dark:border-blue-500/30">
            <BookOpen size={12} /> Innovation Hub
          </div>

          {/* FIX 3: Added text-slate-900 dark:text-white so it's always readable */}
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.1] text-slate-900 dark:text-white">
            Experience the <br className="hidden md:block" />
            TIKSCHOOLS Laboratory.
          </h2>

          {/* FIX 4: Updated paragraph text colors */}
          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-sm leading-relaxed max-w-xl">
            Our state-of-the-art research facility allows students to engage
            with Modern Computing, Programing, and Agentic Robotics starting
            from grade 9 Inshallah.
          </p>
        </div>
      </BentoCard>
    </section>
  );
};

export default InnovationSection;
