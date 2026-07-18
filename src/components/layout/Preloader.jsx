import React from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/Logo.png";
const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-slate-950">
      {/* ROUND LOGO */}
      <motion.img
                src={Logo}
        alt="School Logo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 3, -3, 0],
          opacity: 1,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-24 h-24 rounded-full border-4 shadow-lg"
        style={{ borderColor: "#07112f" }}
      />

      {/* LOADING BAR */}
      <div className="w-60 h-1 mt-8 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-full w-full bg-[#07112f]"
        />
      </div>

      {/* TEXT */}
      <p className="mt-6 text-xs tracking-[0.3em] font-bold text-gray-400 uppercase">
       The Indus Karakuram School
      </p>
    </div>
  );
};

export default Preloader;
