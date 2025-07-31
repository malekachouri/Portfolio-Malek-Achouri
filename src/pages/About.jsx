// src/pages/About.jsx
import React from 'react';
import { FaUserTie } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <FaUserTie className="text-indigo-600 dark:text-indigo-400 text-3xl" />
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">About Me</h2>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm an <strong className="text-indigo-600 dark:text-indigo-400">AWS & DevOps Engineer</strong> with over <strong>5 years of experience</strong> in automating infrastructure, streamlining CI/CD pipelines, and managing cloud-native deployments. I’ve worked with tools like <strong>Jenkins, Docker, Kubernetes, Terraform, AWS, and GitHub Actions</strong> to deliver fast, reliable, and scalable systems. I focus on improving release reliability, system performance, and collaborating with cross-functional teams to deliver continuous value.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
