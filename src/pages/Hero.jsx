
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      className="text-center py-20 bg-indigo-600 text-white"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-5xl font-extrabold mb-2">AWS & DevOps Engineer</h2>
      <p className="text-lg">5+ years in cloud automation | CI/CD | Kubernetes | Terraform | Docker</p>
      <div className="mt-6">
        <a href="/assets/resume.pdf" download className="inline-block px-6 py-3 bg-white text-indigo-700 font-semibold rounded shadow hover:shadow-md">
          Download Resume
        </a>
      </div>
    </motion.section>
  )
}

export default Hero;
