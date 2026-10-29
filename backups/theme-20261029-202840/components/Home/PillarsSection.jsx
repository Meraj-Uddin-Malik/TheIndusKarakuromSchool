
import { motion, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  HeartHandshake,
  School,
} from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description:
      "Encouraging meaningful learning, curiosity, and a strong academic foundation.",
  },
  {
    icon: HeartHandshake,
    title: "Character Building",
    description:
      "Helping students develop respect, responsibility, confidence, and compassion.",
  },
  {
    icon: School,
    title: "Learning Environment",
    description:
      "Creating a welcoming place where students feel supported and inspired to grow.",
  },
];

const PillarsSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative bg-transparent px-5 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center rounded-3xl border border-[#526A87]/50 bg-[#041225] p-9 sm:p-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
              What We Believe
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Rooted in Values.
              <span className="block text-blue-200">
                Focused on Learning.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-slate-300">
              Our approach brings together education,
              character, and a supportive environment
              to help young learners develop with purpose.
            </p>
          </motion.div>

          <div className="flex flex-col justify-center">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.div
                  key={pillar.title}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 16 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  className="flex gap-5 border-b border-white/20 py-8 first:pt-0 last:border-b-0"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#526A87]/50 bg-[#041225] text-blue-300">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-7 text-slate-300">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
