// src/pages/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
          Hi, I'm Ramagiri Jithendar 👋
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
          AWS & DevOps Engineer with 5+ years of experience in automating infrastructure, 
          streamlining CI/CD pipelines, and delivering scalable cloud-native solutions.
        </p>
        <a
          href="/assets/Ramagiri_Jithendar_DevOps_Engineer_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition duration-300"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
