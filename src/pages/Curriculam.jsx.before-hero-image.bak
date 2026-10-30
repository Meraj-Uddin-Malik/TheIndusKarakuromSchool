import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  GraduationCap,
  HeartHandshake,
  Languages,
  Lightbulb,
  Microscope,
  Palette,
  School,
  Users,
  Globe2,
  Monitor,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const academicLevels = [
  {
    number: "01",
    title: "Early Years",
    grades: "Playgroup • Nursery • KG",
    icon: Sparkles,
    description:
      "A welcoming start to education, helping young children build confidence, communication, curiosity, and early learning skills.",
  },
  {
    number: "02",
    title: "Primary School",
    grades: "Classes 1–5",
    icon: BookOpen,
    description:
      "Building strong foundations in reading, writing, mathematics, communication, and essential academic understanding.",
  },
  {
    number: "03",
    title: "Middle School",
    grades: "Classes 6–8",
    icon: Users,
    description:
      "Encouraging independent learning, deeper subject knowledge, critical thinking, and responsible study habits.",
  },
  {
    number: "04",
    title: "Secondary School",
    grades: "Classes 9–10 • Matric",
    icon: GraduationCap,
    description:
      "Supporting students as they strengthen subject knowledge, prepare for examinations, and plan their next educational steps.",
  },
];

const subjects = [
  { name: "English", icon: BookOpen },
  { name: "Urdu", icon: Languages },
  { name: "Mathematics", icon: Calculator },
  { name: "Science", icon: Microscope },
  { name: "Islamiat", icon: HeartHandshake },
  { name: "Social Studies", icon: Globe2 },
  { name: "Computer Studies", icon: Monitor },
  { name: "Pakistan Studies", icon: School },
];

const Reveal = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionLabel = ({ children }) => (
  <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-400">
    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
    {children}
  </span>
);

const PhotoPlaceholder = ({ label, description, icon: Icon = School }) => (
  <div className="relative flex aspect-[4/3] w-full min-w-0 items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#172B49] via-[#101E33] to-[#0B1220]">
    <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
    <div className="relative z-10 flex max-w-xs flex-col items-center px-6 text-center">
      <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5">
        <Icon size={38} strokeWidth={1.5} className="text-blue-300" />
      </div>
      <p className="mt-6 text-lg font-semibold text-white">{label}</p>
      <p className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>
    </div>
    <span className="absolute bottom-5 left-5 rounded-lg border border-white/10 bg-slate-950/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-slate-300">
      School Photo Coming Soon
    </span>
  </div>
);

export default function Curriculum({ setPage }) {
  const pageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const openAdmissions = () => {
    if (typeof setPage === "function") {
      setPage("admissions");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={pageRef}
      className="min-w-0 overflow-x-clip bg-slate-950 text-slate-100"
    >
      {/* HERO */}
      <section className="relative flex min-h-[75vh] items-center overflow-hidden bg-[#0B1220] px-5 pb-20 pt-36 sm:px-6 lg:pt-40">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <Reveal>
            <SectionLabel>Academics at TIKS</SectionLabel>

            <h1 className="mt-8 max-w-5xl text-xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              Learning Begins Here.
              <span className="mt-2 block text-blue-400">
                Growing Every Day.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              From Playgroup and Nursery to Matric, The Indus
              Karakuram School supports each stage of a child's
              educational journey through knowledge, confidence,
              curiosity, and personal growth.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={openAdmissions}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
              >
                Explore Admissions
                <ArrowRight size={18} />
              </button>

              <a
                href="#academic-levels"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore Academic Levels
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ACADEMIC LEVELS */}
      <section
        id="academic-levels"
        className="scroll-mt-24 px-5 py-10 sm:py-20 sm:px-6 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Our Academic Structure</SectionLabel>
            <h2 className="mt-7 text-xl font-bold tracking-tight sm:text-5xl">
              Every Stage Matters.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              A learning journey that begins in the early years
              and continues through secondary education.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {academicLevels.map((level, index) => {
              const Icon = level.icon;

              return (
                <Reveal key={level.title} delay={index * 0.06}>
                  <div className="flex h-full min-w-0 flex-col rounded-[1.75rem] border border-white/10 bg-slate-900 p-6 transition-colors hover:border-blue-500/40 sm:p-8">
                    <div className="flex items-center justify-between gap-3">
                      <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                        <Icon size={25} />
                      </div>
                      <span className="text-xs font-bold text-slate-500">
                        {level.number}
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-bold">
                      {level.title}
                    </h3>
                    <p className="mt-3 text-sm font-semibold text-blue-400">
                      {level.grades}
                    </p>
                    <p className="mt-5 flex-1 text-sm leading-7 text-slate-300">
                      {level.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEACHING APPROACH */}
      <section className="border-y border-white/10 bg-[#0B1220] px-5 py-10 sm:py-20 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <PhotoPlaceholder
              icon={School}
              label="Classroom Learning"
              description="Space reserved for an original TIKS classroom photograph."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <SectionLabel>Our Teaching Approach</SectionLabel>

            <h2 className="mt-7 text-xl font-bold leading-tight tracking-tight sm:text-5xl">
              Building Understanding,
              <span className="block text-blue-400">
                Not Just Memorization.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Strong academic foundations begin with clear
              explanations, thoughtful practice, and an
              environment where children feel encouraged to learn.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Conceptual understanding and regular practice",
                "Communication and classroom participation",
                "Confidence, curiosity, and independent thinking",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-blue-400"
                  />
                  <span className="leading-7 text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* BEYOND THE CLASSROOM */}
      <section className="px-5 py-10 sm:py-20 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal className="lg:order-2">
            <PhotoPlaceholder
              icon={Palette}
              label="Student Development"
              description="Space reserved for an original TIKS student activity photograph."
            />
          </Reveal>

          <Reveal className="lg:order-1">
            <SectionLabel>Beyond the Classroom</SectionLabel>

            <h2 className="mt-7 text-xl font-bold leading-tight tracking-tight sm:text-5xl">
              Education Is More
              <span className="block text-blue-400">
                Than Textbooks.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Children's growth involves more than academic
              lessons. Reading, creative expression, collaboration,
              and positive relationships all contribute to
              their overall development.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              We value opportunities that encourage students
              to communicate, ask questions, work with others,
              and discover their interests.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Creativity", "Teamwork", "Confidence", "Curiosity"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-300"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CORE SUBJECTS */}
      <section className="border-y border-white/10 bg-[#0B1220] px-5 py-10 sm:py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Areas of Study</SectionLabel>

            <h2 className="mt-7 text-xl font-bold tracking-tight sm:text-5xl">
              Building Knowledge
              <span className="block text-blue-400">
                Across Subjects.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              Key subject areas commonly found across school
              education. Specific subjects and combinations
              depend on the student's grade and the school's
              approved curriculum.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {subjects.map((subject, index) => {
              const Icon = subject.icon;

              return (
                <Reveal key={subject.name} delay={(index % 4) * 0.04}>
                  <div className="flex h-full min-w-0 flex-col items-center justify-center rounded-2xl border border-white/10 bg-slate-900 px-3 py-7 text-center transition-colors hover:border-blue-500/40 sm:px-6 sm:py-9">
                    <Icon
                      size={27}
                      className="mb-5 text-blue-400"
                      strokeWidth={1.6}
                    />
                    <h3 className="break-words text-sm font-semibold leading-6 sm:text-base">
                      {subject.name}
                    </h3>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-10 sm:py-20 text-center sm:px-6 lg:py-28">
        <Reveal className="mx-auto max-w-3xl">
          <SectionLabel>Begin Your Journey</SectionLabel>

          <Lightbulb
            size={42}
            className="mx-auto mt-8 text-blue-400"
            strokeWidth={1.5}
          />

          <h2 className="mt-6 text-xl font-bold leading-tight tracking-tight sm:text-5xl">
            A Strong Foundation
            <span className="block text-blue-400">
              for a Brighter Future.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            Learn more about the admission process at
            The Indus Karakuram School.
          </p>

          <button
            type="button"
            onClick={openAdmissions}
            className="mt-9 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-blue-500 sm:w-auto"
          >
            Explore Admissions
            <ArrowRight size={18} />
          </button>
        </Reveal>
      </section>

      {/* SCROLL PROGRESS */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 left-0 top-0 z-[100] w-1 origin-top bg-blue-600"
        style={{ scaleY: progress }}
      />
    </div>
  );
}
