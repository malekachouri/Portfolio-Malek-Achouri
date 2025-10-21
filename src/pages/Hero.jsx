import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 py-32 overflow-hidden"
    >
      {/* Top banner */}
      <motion.div
        className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-200 px-5 py-2 rounded-full text-sm font-semibold shadow-lg z-20 flex items-center gap-3 select-none cursor-default"
        initial={{ y: -30, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      >
        <motion.span
          className="w-3 h-3 rounded-full bg-green-500 dark:bg-green-400"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
        Available for DevOps & Cloud Opportunities
      </motion.div>

      {/* Background circles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute rounded-full bg-indigo-300 dark:bg-indigo-700 opacity-20"
          style={{ width: 250, height: 250, top: "10%", left: "10%" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full bg-pink-300 dark:bg-pink-700 opacity-15"
          style={{ width: 200, height: 200, bottom: "15%", right: "15%" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hello, I'm <br />
          <span className="block mt-2 text-6xl md:text-8xl font-black">
            Achouri Malek
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
            I’m actively seeking <span className="font-semibold text-indigo-600 dark:text-indigo-400">Cloud & DevOps roles</span> where I can contribute, innovate, and grow professionally.

        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="https://github.com/malekachouri"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-7 py-3 rounded-full bg-gray-900 dark:bg-gray-700 text-white text-lg font-semibold shadow-lg hover:scale-105 hover:bg-indigo-600 transition"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/achouri-malek/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-7 py-3 rounded-full bg-blue-700 dark:bg-blue-800 text-white text-lg font-semibold shadow-lg hover:scale-105 hover:bg-blue-500 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
            LinkedIn
          </a>

          <a
            href="/assets/Achouri-Malek---Resume (2) (3).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-7 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold shadow-lg hover:scale-105 hover:from-indigo-700 hover:to-purple-700 transition"
            aria-label="Download Resume"
          >
            <FiDownload size={24} />
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
