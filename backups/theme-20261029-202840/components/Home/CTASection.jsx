
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const CTASection = ({ setPage }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative bg-transparent px-5 pb-24 pt-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-12 rounded-3xl border border-[#526A87]/60 bg-[#041225] px-8 py-14 sm:px-12 lg:grid-cols-[1.3fr_0.7fr] lg:px-16 lg:py-20"
        >
          <div>
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102B53] text-blue-200">
                <GraduationCap size={25} />
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
                Your Journey Starts Here
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              A Bright Beginning
              <span className="block text-blue-200">
                Starts With the Right School.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              Discover an education built around
              meaningful learning, strong values,
              and personal growth.
            </p>
          </div>

          {typeof setPage === "function" && (
            <div className="flex flex-col gap-4">
              <button
                type="button"
                onClick={() => setPage("admissions")}
                className="min-h-[54px] rounded-lg bg-blue-600 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-blue-700"
              >
                Explore Admissions
              </button>

              <button
                type="button"
                onClick={() => setPage("contact")}
                className="min-h-[54px] rounded-lg border border-[#526A87] bg-[#041225] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#091C36]"
              >
                Contact Our School
              </button>

              <p className="mt-2 text-center text-xs leading-6 text-slate-400">
                Have questions? Our school team can help.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
