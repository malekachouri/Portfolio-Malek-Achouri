import React from "react";
import { motion } from "framer-motion";

// Fades content in once when it scrolls into view. MotionConfig in App honours reduced motion.
export default function Reveal({ children, delay = 0, className = "", as = "div", ...rest }) {
  const Component = motion[as];
  return (
    <Component
      {...rest}
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </Component>
  );
}
