import React from "react";
import { motion } from "framer-motion";

const MagneticButton = ({ children, className = "", onClick }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      animate={{ x: position.x, y: position.y }}
      // 1. Added spring physics for a hyper-realistic magnetic snap
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      // 2. Added relative positioning and smoother shadow transitions
      className={`relative px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;