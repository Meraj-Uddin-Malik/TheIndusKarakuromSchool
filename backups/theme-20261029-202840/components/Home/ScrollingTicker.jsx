
import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  "Innovation",
  "Excellence",
  "Global Leadership",
  "Curiosity",
  "Future Ready",
  "Beyond Limits",
];

const TickerGroup = ({ duplicate = false }) => (
  <div
    className="flex shrink-0 items-center"
    aria-hidden={duplicate}
  >
    {items.map((item) => (
      <div
        key={item}
        className="flex shrink-0 items-center"
      >
        <span className="mx-8 whitespace-nowrap text-sm font-black uppercase tracking-[0.2em] text-white transition-colors hover:text-blue-100 md:text-base">
          {item}
        </span>

        <Star
          size={14}
          aria-hidden="true"
          className="shrink-0 fill-white/20 text-white/60"
        />
      </div>
    ))}
  </div>
);

export default function ScrollingTicker() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative z-20 w-full scale-105 -rotate-2 overflow-hidden border-y border-white/10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-5 text-white shadow-2xl">
      <motion.div
        className="flex w-max items-center"
        animate={
          reduceMotion
            ? undefined
            : { x: ["0%", "-50%"] }
        }
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <TickerGroup />
        <TickerGroup duplicate />
      </motion.div>
    </div>
  );
}
