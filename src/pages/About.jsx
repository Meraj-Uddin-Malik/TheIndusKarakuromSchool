import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Compass,
  HeartHandshake,
  Lightbulb,
  GraduationCap,
  Quote,
  Sparkles,
} from "lucide-react";

import bgImage from "../assets/Books.jpeg";
import Principal from "../assets/Principal.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const SectionLabel = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
    {children}
  </span>
);

const Reveal = ({ children, className = "", delay = 0 }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.65, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const values = [
  {
    icon: BookOpen,
    title: "Meaningful Learning",
    description:
      "We believe education should build understanding, curiosity, and the confidence to ask questions.",
  },
  {
    icon: HeartHandshake,
    title: "Character & Respect",
    description:
      "Kindness, responsibility, and mutual respect are essential parts of a healthy learning environment.",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    description:
      "We value imagination, thoughtful problem-solving, and opportunities for students to express their ideas.",
  },
  {
    icon: Compass,
    title: "Growth With Purpose",
    description:
      "Our approach places importance on personal development alongside academic progress.",
  },
];

const About = ({ setPage }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const navigate = (destination) => {
    if (typeof setPage === "function") {
      setPage(destination);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100"
    >
      {/* HERO */}
      <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-[#0B1220] px-6 py-32 text-white">
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt="Books representing learning and education"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/95 via-[#0B1220]/80 to-[#0B1220]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/90 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <Reveal>
            <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-blue-200 backdrop-blur-md">
              <Sparkles size={14} />
              Discover Our School
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="max-w-5xl text-2xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              A place to learn.
              <span className="mt-2 block text-blue-400">
                A foundation to grow.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Get to know The Indus Karakuram School — our
              educational values, our approach to learning,
              and the people who make a school community.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-10">
            <button
              type="button"
              onClick={() => navigate("admissions")}
              className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Explore Admissions
              <ArrowRight size={18} />
            </button>
          </Reveal>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-12 sm:py-24 lg:grid-cols-2 lg:gap-24 lg:py-32">
        <Reveal>
          <SectionLabel>Who We Are</SectionLabel>

          <h2 className="mt-7 text-xl font-bold leading-tight tracking-tight sm:text-5xl">
            Education is about
            <span className="block text-blue-600 dark:text-blue-400">
              more than lessons.
            </span>
          </h2>

          <div className="mt-7 space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            <p>
              At The Indus Karakuram School, we believe
              education should help young people develop
              knowledge, confidence, character, and curiosity.
            </p>
            <p>
              A meaningful school experience is shaped by
              learning in the classroom, relationships with
              teachers, and opportunities to discover
              individual strengths.
            </p>
            <p>
              Our educational philosophy brings academic
              learning and personal development together,
              with the student at the centre.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-9 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900 sm:p-12">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

            <GraduationCap
              size={42}
              strokeWidth={1.5}
              className="mb-10 text-blue-600 dark:text-blue-400"
            />

            <p className="relative text-2xl font-semibold leading-relaxed tracking-tight sm:text-3xl">
              "Every student deserves an environment
              where learning feels meaningful and
              personal growth matters."
            </p>

            <div className="mt-10 h-1 w-16 rounded-full bg-blue-600" />
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Our Educational Philosophy
            </p>
          </div>
        </Reveal>
      </section>

      {/* VISION AND MISSION */}
      <section className="border-y border-slate-200 bg-white py-12 sm:py-24 dark:border-white/10 dark:bg-slate-900/50 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionLabel>Our Direction</SectionLabel>
            <h2 className="mt-7 max-w-3xl text-xl font-bold tracking-tight sm:text-5xl">
              Guided by purpose.
              <span className="block text-blue-600 dark:text-blue-400">
                Focused on students.
              </span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[2rem] border border-slate-200 bg-slate-50 p-9 dark:border-white/10 dark:bg-slate-950 sm:p-12">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  01 / Our Vision
                </span>
                <h3 className="mt-6 text-xl font-bold">
                  A brighter future through education.
                </h3>
                <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                  We aspire to help students become thoughtful,
                  capable, and responsible individuals who
                  approach the future with confidence.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full rounded-[2rem] border border-blue-500/20 bg-blue-600 p-9 text-white sm:p-12">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
                  02 / Our Mission
                </span>
                <h3 className="mt-6 text-xl font-bold">
                  Learning that supports every stage of growth.
                </h3>
                <p className="mt-5 leading-8 text-blue-50">
                  Our mission is to encourage academic
                  understanding, good character, independent
                  thinking, and a lasting interest in learning.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EDUCATIONAL VALUES */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-24 lg:py-32">
        <Reveal>
          <SectionLabel>What Matters To Us</SectionLabel>
          <h2 className="mt-7 max-w-3xl text-xl font-bold tracking-tight sm:text-5xl">
            Values that shape
            <span className="block text-blue-600 dark:text-blue-400">
              the learning experience.
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="group h-full rounded-[1.75rem] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl dark:border-white/10 dark:bg-slate-900 sm:p-10">
                  <div className="mb-8 inline-flex rounded-2xl bg-blue-600/10 p-4 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:text-blue-400">
                    <Icon size={28} strokeWidth={1.7} />
                  </div>

                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* PRINCIPAL SECTION */}
      <section className="border-y border-slate-200 bg-white py-12 sm:py-24 dark:border-white/10 dark:bg-slate-900/50 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -inset-4 rounded-[2.5rem] border border-blue-500/15" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-200 dark:bg-slate-800">
                <img
                  src={Principal}
                  alt="School principal"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionLabel>From the Principal's Desk</SectionLabel>

            <Quote
              size={48}
              className="mt-8 text-blue-600/40 dark:text-blue-400/40"
            />

            <h2 className="mt-5 text-xl font-bold leading-tight tracking-tight sm:text-5xl">
              A Message from
              <span className="block text-blue-600 dark:text-blue-400">
                Our Principal.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-slate-600 dark:text-slate-300">
              At The Indus Karakuram School, we believe that every
              child deserves the opportunity to learn, grow, and
              discover their true potential. Education is not only
              about academic achievement, but also about building
              character, confidence, kindness, and responsibility.
            </p>

            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
              Our aim is to provide a safe, supportive, and inspiring
              environment where every student feels valued and every
              teacher makes a meaningful difference. We believe that
              a strong partnership between parents, teachers, and
              the school is essential for every child's success.
            </p>

            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
              Together, we strive to nurture curious learners,
              responsible individuals, and confident future leaders
              who are prepared to make a positive difference in
              society.
            </p>

            <div className="mt-8 border-l-2 border-blue-600 pl-5">
              <p className="text-lg font-semibold italic leading-8 text-slate-800 dark:text-slate-100">
                "Our greatest achievement is not only what our
                students learn, but who they become."
              </p>
            </div>

            <div className="mt-8">
              <p className="font-bold">
                Principal
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                The Indus Karakuram School
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative overflow-hidden bg-[#0B1220] px-6 py-12 sm:py-24 text-white lg:py-32">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Reveal>
            <SectionLabel>Take The Next Step</SectionLabel>

            <h2 className="mt-8 text-xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Discover what comes next
              <span className="block text-blue-400">
                for your child.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl leading-8 text-slate-300">
              Explore admissions information or get in
              touch to learn more about The Indus
              Karakuram School.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => navigate("admissions")}
                className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
              >
                Explore Admissions
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                onClick={() => navigate("contact")}
                className="rounded-xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                Contact Us
              </button>
            </div>
          </Reveal>
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

export default About;
