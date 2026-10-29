import { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  MessageCircle,
  CheckCircle2,
  GraduationCap,
  Quote,
  Mail,
  Info,
} from "lucide-react";

import Principal from "../assets/Principal.jpeg";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Reveal = ({ children, className = "", delay = 0 }) => (
  <motion.div
    variants={reveal}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionLabel = ({ children }) => (
  <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-400">
    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
    {children}
  </span>
);

const steps = [
  {
    icon: MessageCircle,
    title: "Make an Inquiry",
    description:
      "Contact the school to ask about admission availability, grade levels, and the application process.",
  },
  {
    icon: ClipboardList,
    title: "Understand the Requirements",
    description:
      "Confirm the current eligibility criteria, documents, and any assessment requirements with the admissions office.",
  },
  {
    icon: BookOpen,
    title: "Complete the Application",
    description:
      "Follow the school's official application instructions and submit the requested information.",
  },
  {
    icon: CheckCircle2,
    title: "Admission Confirmation",
    description:
      "The school will communicate the outcome and any next steps through its official admissions process.",
  },
];

const Admissions = ({ setPage }) => {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const [showNotice, setShowNotice] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goToContact = () => {
    if (typeof setPage === "function") {
      setPage("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowNotice(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative min-w-0 overflow-x-clip bg-slate-950 text-slate-100"
    >
      {/* HERO */}
      <section className="relative flex min-h-[75vh] items-center overflow-hidden bg-[#0B1220] px-5 pb-20 pt-36 sm:px-6 sm:pt-40">
        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <Reveal>
            <SectionLabel>Admissions at TIKS</SectionLabel>

            <h1 className="mt-8 max-w-4xl text-xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              Every great journey
              <span className="mt-2 block text-blue-400">
                begins with a first step.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore the admissions journey at The Indus
              Karakuram School and find out how to take the
              next step in your child's education.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
              >
                Admission Inquiry
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                onClick={goToContact}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact School
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ADMISSIONS INTRO */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 sm:py-20 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <Reveal>
          <SectionLabel>Getting Started</SectionLabel>

          <h2 className="mt-7 text-xl font-bold leading-tight tracking-tight sm:text-5xl">
            A clear beginning
            <span className="block text-blue-400">
              for every family.
            </span>
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            Choosing a school is an important decision.
            Families should have access to clear information
            about the admissions process, requirements,
            and learning environment.
          </p>

          <p className="mt-5 leading-8 text-slate-300">
            Our admissions information is designed to
            help you understand the next steps and
            connect with the school for current details.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[1.75rem] border border-white/10 bg-slate-900 p-7 sm:p-10">
            <GraduationCap
              size={40}
              className="text-blue-400"
              strokeWidth={1.5}
            />

            <h3 className="mt-7 text-xl font-bold">
              Before You Apply
            </h3>

            <div className="mt-7 space-y-5">
              {[
                "Confirm admission availability",
                "Ask about grade eligibility",
                "Request the current document checklist",
                "Understand the assessment and fee process",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-blue-400"
                  />
                  <span className="leading-7 text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-7 text-slate-400">
              Exact requirements and admission dates
              should be confirmed directly with the school.
            </p>
          </div>
        </Reveal>
      </section>

      {/* PROCESS */}
      <section className="border-y border-white/10 bg-[#0B1220] px-5 py-10 sm:py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>The Admissions Journey</SectionLabel>

            <h2 className="mt-7 text-xl font-bold tracking-tight sm:text-5xl">
              Four steps to
              <span className="block text-blue-400">
                getting started.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              A general guide to help families prepare
              for the admissions process.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.title} delay={index * 0.06}>
                  <div className="h-full min-w-0 rounded-[1.75rem] border border-white/10 bg-slate-900 p-6 transition-colors hover:border-blue-500/40 sm:p-9">
                    <div className="flex items-start justify-between gap-4">
                      <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                        <Icon size={25} />
                      </div>

                      <span className="text-xs font-bold tracking-widest text-slate-500">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-bold sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRINCIPAL */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-10 sm:py-20 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <Reveal>
          <div className="mx-auto max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
            <img
              src={Principal}
              alt="Principal of The Indus Karakuram School"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionLabel>School Leadership</SectionLabel>

          <Quote
            size={48}
            className="mt-8 text-blue-400/50"
          />

          <h2 className="mt-6 text-xl font-bold leading-tight sm:text-5xl">
            Supporting students
            <span className="block text-blue-400">
              from the beginning.
            </span>
          </h2>

          <p className="mt-7 leading-8 text-slate-300">
            A student's educational journey is shaped
            by encouragement, guidance, and a supportive
            school community.
          </p>

          <p className="mt-5 leading-8 text-slate-300">
            The Indus Karakuram School values communication
            between families and educators as an important
            part of student development.
          </p>

          <div className="mt-8 border-l-2 border-blue-500 pl-5">
            <p className="font-bold">
              The Indus Karakuram School
            </p>
            <p className="mt-1 text-sm text-slate-400">
              School Leadership
            </p>
          </div>
        </Reveal>
      </section>

      {/* INQUIRY FORM */}
      <section
        ref={formRef}
        className="scroll-mt-24 border-t border-white/10 bg-[#0B1220] px-5 py-10 sm:py-20 sm:px-6 lg:py-28"
      >
        <div className="mx-auto max-w-4xl">
          <Reveal className="text-center">
            <SectionLabel>Admission Inquiry</SectionLabel>

            <h2 className="mt-7 text-xl font-bold tracking-tight sm:text-5xl">
              Have a question?
              <span className="block text-blue-400">
                Start here.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
              Enter your details below to prepare an
              admissions inquiry.
            </p>
          </Reveal>

          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="mt-12 grid min-w-0 gap-5 rounded-[1.75rem] border border-white/10 bg-slate-900 p-5 sm:grid-cols-2 sm:p-10"
            >
              <label className="block min-w-0">
                <span className="mb-2 block text-sm font-medium text-slate-200">
                  Parent / Guardian Name
                </span>
                <input
                  name="parentName"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Enter full name"
                  className="w-full min-w-0 rounded-xl border border-white/10 bg-slate-950 px-4 py-4 text-base text-white outline-none transition-colors placeholder:text-slate-500 focus:border-blue-500"
                />
              </label>

              <label className="block min-w-0">
                <span className="mb-2 block text-sm font-medium text-slate-200">
                  Email Address
                </span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter email address"
                  className="w-full min-w-0 rounded-xl border border-white/10 bg-slate-950 px-4 py-4 text-base text-white outline-none transition-colors placeholder:text-slate-500 focus:border-blue-500"
                />
              </label>

              <label className="block min-w-0 sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-slate-200">
                  Grade Interested In
                </span>
                <input
                  name="grade"
                  type="text"
                  required
                  placeholder="Enter grade or class"
                  className="w-full min-w-0 rounded-xl border border-white/10 bg-slate-950 px-4 py-4 text-base text-white outline-none transition-colors placeholder:text-slate-500 focus:border-blue-500"
                />
              </label>

              <label className="block min-w-0 sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-slate-200">
                  Your Question
                </span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us what you would like to know..."
                  className="w-full min-w-0 resize-y rounded-xl border border-white/10 bg-slate-950 px-4 py-4 text-base text-white outline-none transition-colors placeholder:text-slate-500 focus:border-blue-500"
                />
              </label>

              <button
                type="submit"
                className="flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-blue-500 sm:col-span-2"
              >
                Review Inquiry
                <ArrowRight size={18} />
              </button>

              {showNotice && (
                <div
                  role="status"
                  className="flex items-start gap-3 rounded-xl border border-blue-500/30 bg-blue-500/10 p-4 text-sm leading-7 text-blue-100 sm:col-span-2"
                >
                  <Info size={20} className="mt-1 shrink-0" />
                  <p>
                    Your details have been validated locally,
                    but no inquiry has been sent. Please use
                    the school's official contact channel.
                    Online submission will become available
                    after a form service is connected.
                  </p>
                </div>
              )}

              <p className="text-center text-xs leading-6 text-slate-400 sm:col-span-2">
                This form is currently a front-end preview.
                Information is not transmitted or stored.
              </p>
            </form>
          </Reveal>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={goToContact}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
            >
              <Mail size={17} />
              Visit Contact Page
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* SCROLL PROGRESS */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 left-0 top-0 z-[100] w-1 origin-top bg-blue-600"
        style={{ scaleY: smoothProgress }}
      />
    </div>
  );
};

export default Admissions;
