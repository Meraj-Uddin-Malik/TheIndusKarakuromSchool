
import { motion, useReducedMotion } from "framer-motion";
import SchoolImage from "../../assets/Tiks.jpeg";

const AboutPreview = ({ setPage }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative bg-transparent px-5 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid overflow-hidden rounded-3xl border border-[#526A87]/50 bg-[#041225] lg:grid-cols-2"
        >
          <div className="relative min-h-[320px] overflow-hidden lg:min-h-[480px]">
            <img
              src={SchoolImage}
              alt="The Indus Karakuram School building"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
              About Our School
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              More Than
              <span className="block text-blue-200">
                A Classroom.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              At The Indus Karakuram School, we believe
              education is about more than lessons and
              textbooks. It is about helping every child
              discover their abilities, develop strong
              values, and grow with confidence.
            </p>

            {typeof setPage === "function" && (
              <button
                type="button"
                onClick={() => setPage("about")}
                className="mt-8 w-fit rounded-lg border border-[#526A87] bg-[#041225] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-blue-300 hover:bg-[#091C36]"
              >
                Discover Our Story
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
