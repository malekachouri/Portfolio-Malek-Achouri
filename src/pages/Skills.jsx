// src/pages/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinux, FaPython, FaDocker, FaAws, FaGitAlt, FaGithub, FaReact, FaNodeJs, FaAngular 
} from 'react-icons/fa';
import { 
  SiKubernetes, SiTerraform, SiAnsible, SiJenkins, SiGrafana, 
  SiPrometheus, SiHelm, SiFlask, SiSpringboot, SiAzuredevops 
} from 'react-icons/si';

const categories = [
  {
    title: "Cloud & Virtualization",
    skills: [
      { name: "OpenStack", icon: <SiAzuredevops /> },
      { name: "Ceph", icon: <SiAzuredevops /> },
      { name: "Kolla-Ansible", icon: <SiAnsible /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Azure", icon: <SiAzuredevops /> },
    ],
  },
  {
    title: "DevOps & CI/CD",
    skills: [
      { name: "Terraform", icon: <SiTerraform /> },
      { name: "Ansible", icon: <SiAnsible /> },
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "ArgoCD", icon: <SiAzuredevops /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitLab CI", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Prometheus", icon: <SiPrometheus /> },
      { name: "Grafana", icon: <SiGrafana /> },
      { name: "EFK Stack", icon: <SiGrafana /> },
    ],
  },
  {
    title: "Systems & Scripting",
    skills: [
      { name: "Linux", icon: <FaLinux /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Bash", icon: <FaPython /> },
      { name: "YAML", icon: <SiHelm /> },
      { name: "Helm", icon: <SiHelm /> },
      { name: "Kustomize", icon: <SiHelm /> },
    ],
  },
  {
    title: "Frameworks & Development",
    skills: [
      { name: "Angular", icon: <FaAngular /> },
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
    ],
  },
  {
    title: "AI & Deep Learning",
    skills: [
      { name: "Deep Learning", icon: <SiFlask /> },
      { name: "Transfer Learning", icon: <SiFlask /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "U-Net", icon: <SiFlask /> },
      { name: "VGG19", icon: <SiFlask /> },
      { name: "InceptionV3", icon: <SiFlask /> },
      { name: "ResNet50V2", icon: <SiFlask /> },
    ],
  },
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
          My Skills
        </motion.h2>

        {categories.map((category, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">{category.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <div className="text-3xl text-indigo-600 mb-2">{skill.icon}</div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
