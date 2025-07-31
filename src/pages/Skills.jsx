// src/pages/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaAws, FaJenkins, FaDocker, FaCodeBranch, FaLinux,
  FaTools, FaDatabase, FaCogs
} from 'react-icons/fa';
import {
  SiKubernetes, SiTerraform, SiAnsible, SiGithub,
  SiSonarqube, SiGrafana, SiPrometheus, SiApachetomcat
} from 'react-icons/si';

const skills = [
  { name: 'AWS', icon: <FaAws />, category: 'Cloud' },
  { name: 'Docker', icon: <FaDocker />, category: 'Containers' },
  { name: 'Kubernetes', icon: <SiKubernetes />, category: 'Containers' },
  { name: 'Terraform', icon: <SiTerraform />, category: 'IaC' },
  { name: 'Ansible', icon: <SiAnsible />, category: 'IaC' },
  { name: 'Jenkins', icon: <FaJenkins />, category: 'CI/CD' },
  { name: 'Git', icon: <FaCodeBranch />, category: 'VCS' },
  { name: 'GitHub', icon: <SiGithub />, category: 'VCS' },
  { name: 'SonarQube', icon: <SiSonarqube />, category: 'CI/CD' },
  { name: 'Nexus', icon: <FaDatabase />, category: 'CI/CD' },
  { name: 'Grafana', icon: <SiGrafana />, category: 'Monitoring' },
  { name: 'Prometheus', icon: <SiPrometheus />, category: 'Monitoring' },
  { name: 'Linux/Shell', icon: <FaLinux />, category: 'Scripting' },
  { name: 'Tomcat', icon: <SiApachetomcat />, category: 'Servers' },
  { name: 'Maven', icon: <FaCogs />, category: 'Build' }, // ✅ Changed icon
  { name: 'YAML/Groovy', icon: <FaTools />, category: 'Scripting' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          DevOps Tools & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="text-3xl text-indigo-600 mb-2">{skill.icon}</div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
