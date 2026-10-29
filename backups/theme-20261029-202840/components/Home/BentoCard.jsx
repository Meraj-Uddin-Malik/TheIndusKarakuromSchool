import { motion } from "framer-motion";

const BentoCard = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      // 1. Added 'group', 'duration-500', and 'hover:border-blue-500'
      className={`relative group overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/50 backdrop-blur-xl p-8 hover:border-blue-500 transition-all duration-500 shadow-xl hover:shadow-blue-500/10 ${className}`}
    >
      {/* 2. Interactive Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
      
      {/* 3. Z-Index Wrapper to keep content above the gradient */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default BentoCard;