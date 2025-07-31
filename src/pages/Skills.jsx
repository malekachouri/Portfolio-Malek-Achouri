// src/pages/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Cloud & Containerization',
    items: ['AWS', 'Kubernetes', 'Docker'],
  },
  {
    category: 'CI/CD & DevOps',
    items: ['Jenkins', 'GitHub Actions', 'Argo CD', 'SonarQube', 'Nexus'],
  },
  {
    category: 'Infrastructure as Code',
    items: ['Terraform', 'Ansible', 'Shell Scripting', 'YAML', 'Groovy'],
  },
  {
    category: 'Monitoring & Version Control',
    items: ['Prometheus', 'Grafana', 'Git', 'GitHub'],
  },
  {
    category: 'Build & Application Servers',
    items: ['Maven', 'Apache Tomcat'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-950 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Tools
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-700 dark:text-white mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {skillGroup.items.map((item, index) => (
                  <li key={index} className="hover:text-indigo-500 transition">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
