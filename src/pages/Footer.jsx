import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-700 text-center">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
          Achouri Malek
        </span>. Made with{" "}
        <motion.span
          className="text-pink-500 inline-block"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          ❤️
        </motion.span>
      </p>
    </footer>
  );
};

export default Footer;
