import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="bg-white dark:bg-gray-900 py-20 md:py-32 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I’m <span className="text-indigo-600">Achouri Malek</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          DevOps & Cloud Engineer | CI/CD, Terraform, Docker, Kubernetes , AWS , Openstack 
        </motion.p>

        <motion.div
          className="mt-6 flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="https://github.com/malekachouri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded hover:bg-indigo-600 hover:text-white transition"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/achouri-malek/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded hover:bg-indigo-600 hover:text-white transition"
          >
            <FaLinkedin className="mr-2" />
            LinkedIn
          </a>
          <a
            href="/assets/Achouri-Malek-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            <FiDownload className="mr-2" />
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
