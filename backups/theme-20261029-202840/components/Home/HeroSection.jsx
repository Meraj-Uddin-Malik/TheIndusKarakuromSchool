
import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, HeartHandshake, Lightbulb } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Quality Learning",
    description: "Building strong foundations",
  },
  {
    icon: HeartHandshake,
    title: "Strong Values",
    description: "Growing with character",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    description: "Encouraging curiosity",
  },
];

const HeroSection = ({ setPage }) => {
  const reduceMotion = useReducedMotion();

  const navigate = (page) => {
    if (typeof setPage === "function") {
      setPage(page);
    }
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[90vh] items-center bg-transparent px-5 pb-16 pt-32 sm:px-6 lg:pt-36"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">

        {/* HERO CONTENT */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          {/* EYEBROW */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-blue-300" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
              Welcome to The Indus Karakuram School
            </span>
          </div>

          {/* MAIN HEADING */}
          <h1
            id="hero-heading"
            className="text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[76px]"
          >
            Learn Today.
            <span className="block text-blue-200">
              Build Tomorrow.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-100 sm:text-lg">
            A welcoming place where young minds are
            encouraged to learn, explore, and grow
            through meaningful education and strong values.
          </p>

          {/* BUTTONS */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate("admissions")}
className="inline-flex min-h-[54px] items-center justify-center rounded-lg border border-slate-500/60 bg-[#041225] px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#091C36] hover:border-blue-300"            >
              Explore Admissions
            </button>

            <button
              type="button"
              onClick={() => navigate("about")}
              className="inline-flex min-h-[54px] items-center justify-center rounded-lg border border-white/50 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Discover Our School
            </button>
          </div>
        </motion.div>

        {/* TRANSPARENT FEATURE CARDS */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 grid gap-4 sm:grid-cols-3 lg:mt-20"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
className="rounded-xl border border-[#355477] bg-[#12345B] p-6 shadow-sm transition-colors hover:bg-[#19416D]"              >
                <Icon
                  size={25}
                  className="mb-5 text-blue-200"
                  aria-hidden="true"
                />

                <h3 className="text-base font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm text-slate-200">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
