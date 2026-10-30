import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  School, Users, UserRound, CheckCircle2
} from "lucide-react";

import facultyHeroImage from "../assets/Tiks.jpeg";
const Reveal = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.55, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const Label = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-blue-400">
    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
    {children}
  </span>
);

const PhotoPlaceholder = ({ title, subtitle }) => (
  <div className="relative flex aspect-[4/3] min-w-0 flex-col items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#1B3050] via-[#13233C] to-[#0B1220] px-6 text-center">
    <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5">
      <UserRound size={42} strokeWidth={1.4} className="text-blue-300" />
    </div>
    <h3 className="mt-6 text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-slate-400">{subtitle}</p>
    <span className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-slate-950/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-slate-300">
      Original Photo Coming Soon
    </span>
  </div>
);

export default function Faculty({ setPage }) {
  const pageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const navigate = (page) => {
    if (typeof setPage === "function") {
      setPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div ref={pageRef} className="min-w-0 overflow-x-clip bg-slate-950 text-slate-100">
      {/* HERO */}
      <section className="relative flex min-h-[72vh] items-center overflow-hidden bg-[#0B1220] px-5 pb-20 pt-36 sm:px-6 lg:pt-40">
        {/* Faculty hero background image */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={facultyHeroImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full scale-105 object-cover opacity-40 blur-[3px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/95 via-[#0B1220]/80 to-[#0B1220]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/90 via-transparent to-transparent" />
        </div>

        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <Reveal>
            <Label>Our Faculty</Label>
            <h1 className="mt-8 max-w-5xl text-xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              The People Behind
              <span className="mt-2 block text-blue-400">
                Every Learning Journey.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Teachers play an important role in shaping a child's
              confidence, knowledge, and development. Discover the
              teaching stages at The Indus Karakuram School.
            </p>
            <a
              href="#teaching-teams"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Explore Our Faculty <ArrowRight size={18} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 sm:py-20 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <Reveal>
          <PhotoPlaceholder
            title="Our School Leadership"
            subtitle="Official leadership photograph will appear here."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <Label>School Leadership</Label>
          <h2 className="mt-7 text-xl font-bold leading-tight sm:text-5xl">
            Guiding Education
            <span className="block text-blue-400">With Purpose.</span>
          </h2>
          <p className="mt-6 leading-8 text-slate-300">
            School leadership helps establish a positive learning
            environment, support teachers, and maintain clear
            communication with families.
          </p>
          <p className="mt-5 leading-8 text-slate-300">
            The official leadership profile, name, and message
            will be added once confirmed by the school.
          </p>
        </Reveal>
      </section>

      {/* FACULTY DIRECTORY INTRO */}
      <section className="border-y border-white/10 bg-[#0B1220] px-5 py-10 sm:py-20 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Label>Meet the Educators</Label>
            <h2 className="mt-7 text-xl font-bold leading-tight sm:text-5xl">
              Get to Know
              <span className="block text-blue-400">Our Teaching Team.</span>
            </h2>
            <p className="mt-6 leading-8 text-slate-300">
              This section will introduce the people who teach,
              guide, and support students at The Indus Karakuram School.
            </p>
            <p className="mt-5 leading-8 text-slate-300">
              Teacher profiles will include confirmed names,
              designations, subject responsibilities, and professional
              information provided by the school.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[1.75rem] border border-blue-500/20 bg-slate-900 p-7 sm:p-10">
              <div className="inline-flex rounded-2xl bg-blue-500/10 p-4 text-blue-400">
                <Users size={32} />
              </div>
              <h3 className="mt-7 text-xl font-bold">
                Faculty Directory
              </h3>
              <p className="mt-4 leading-8 text-slate-300">
                Official teacher information and photographs
                are being prepared for this section.
              </p>
              <div className="mt-8 border-t border-white/10 pt-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  Profiles Pending School Confirmation
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FACULTY PROFILES */}
      <section className="px-5 py-10 sm:py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Label>Meet Our Teachers</Label>
            <h2 className="mt-7 text-xl font-bold tracking-tight sm:text-5xl">
              Faces of Our
              <span className="block text-blue-400">School Community.</span>
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              Individual teacher profiles will be published
              after names, roles, and photographs are
              provided and approved by the school.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {["Faculty Profile 01", "Faculty Profile 02", "Faculty Profile 03"].map((name) => (
              <Reveal key={name}>
                <PhotoPlaceholder
                  title={name}
                  subtitle="Teacher name, role and photograph pending confirmation."
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHING VALUES */}
      <section className="border-y border-white/10 bg-[#0B1220] px-5 py-10 sm:py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Label>Our Educational Values</Label>
            <h2 className="mt-7 text-xl font-bold tracking-tight sm:text-5xl">
              What Matters
              <span className="block text-blue-400">In Teaching.</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Clear Communication", "Helping students understand lessons and feel comfortable asking questions."],
              ["Encouragement", "Supporting confidence, curiosity, and a positive attitude towards learning."],
              ["Academic Growth", "Recognizing the importance of practice, feedback, and steady progress."],
            ].map(([title, description]) => (
              <Reveal key={title}>
                <div className="h-full rounded-2xl border border-white/10 bg-slate-900 p-7">
                  <CheckCircle2 size={24} className="text-blue-400" />
                  <h3 className="mt-6 text-xl font-bold">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-10 sm:py-20 text-center sm:px-6 lg:py-28">
        <Reveal className="mx-auto max-w-3xl">
          <Label>Connect With TIKS</Label>
          <School size={43} className="mx-auto mt-8 text-blue-400" />
          <h2 className="mt-7 text-xl font-bold leading-tight sm:text-5xl">
            Learn More About
            <span className="block text-blue-400">Our School.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            Have questions about teaching, academic levels,
            or admissions? Get in touch with the school.
          </p>
          <button
            type="button"
            onClick={() => navigate("contact")}
            className="mt-9 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-blue-500 sm:w-auto"
          >
            Contact School <ArrowRight size={18} />
          </button>
        </Reveal>
      </section>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 left-0 top-0 z-[100] w-1 origin-top bg-blue-600"
        style={{ scaleY: progress }}
      />
    </div>
  );
}
