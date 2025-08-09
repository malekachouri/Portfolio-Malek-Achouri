import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinux, FaPython, FaDocker, FaAws, FaGitAlt, FaGithub, FaReact, FaNodeJs, FaAngular, FaCloud, FaDatabase, FaProjectDiagram 
} from 'react-icons/fa';
import { 
  SiKubernetes, SiTerraform, SiAnsible, SiJenkins, SiGrafana, 
  SiPrometheus, SiHelm, SiFlask, SiSpringboot, SiAzuredevops,
  SiTensorflow, SiPytorch, SiKeras
} from 'react-icons/si';

const categories = [
  {
    title: "Cloud & Virtualization",
    skills: [
      { name: "OpenStack", icon: <FaCloud />, color: "#0078D4" },
      { name: "Ceph", icon: <FaDatabase />, color: "#E54B4B" },
      { name: "Kolla-Ansible", icon: <SiAnsible />, color: "#EE6C4D" },
      { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
      { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
      { name: "AWS", icon: <FaAws />, color: "#FF9900" },
      { name: "Azure", icon: <SiAzuredevops />, color: "#0078D4" },
    ],
  },
  {
    title: "DevOps & CI/CD",
    skills: [
      { name: "Terraform", icon: <SiTerraform />, color: "#7B42BC" },
      { name: "Ansible", icon: <SiAnsible />, color: "#EE6C4D" },
      { name: "Jenkins", icon: <SiJenkins />, color: "#D33833" },
      { name: "ArgoCD", icon: <FaProjectDiagram />, color: "#B5314C" },
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitLab CI", icon: <FaGitAlt />, color: "#FCA121" },
      { name: "GitHub", icon: <FaGithub />, color: "#181717" },
      { name: "Prometheus", icon: <SiPrometheus />, color: "#E6522C" },
      { name: "Grafana", icon: <SiGrafana />, color: "#F46800" },
      { name: "EFK Stack", icon: <SiGrafana />, color: "#4C8BF5" },
    ],
  },
  {
    title: "Systems & Scripting",
    skills: [
      { name: "Linux", icon: <FaLinux />, color: "#FCC624" },
      { name: "Python", icon: <FaPython />, color: "#3776AB" },
      { name: "Bash", icon: <FaPython />, color: "#4EAA25" },
      { name: "YAML", icon: <SiHelm />, color: "#326CE5" },
      { name: "Helm", icon: <SiHelm />, color: "#326CE5" },
      { name: "Kustomize", icon: <SiHelm />, color: "#326CE5" },
    ],
  },
  {
    title: "Frameworks & Development",
    skills: [
      { name: "Angular", icon: <FaAngular />, color: "#DD0031" },
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Node.js", icon: <FaNodeJs />, color: "#83CD29" },
      { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
    ],
  },
  {
    title: "AI & Deep Learning",
    skills: [
      { name: "Deep Learning", icon: <SiTensorflow />, color: "#FF6F61" },
      { name: "Transfer Learning", icon: <SiPytorch />, color: "#EE4C2C" },
      { name: "Flask", icon: <SiFlask />, color: "#000000" },
      { name: "U-Net", icon: <SiKeras />, color: "#D00000" },
      { name: "VGG19", icon: <SiKeras />, color: "#D00000" },
      { name: "InceptionV3", icon: <SiKeras />, color: "#D00000" },
      { name: "ResNet50V2", icon: <SiKeras />, color: "#D00000" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900 dark:to-gray-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 text-gray-900 dark:text-gray-100">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          My Skills
        </motion.h2>

        <div className="space-y-20">
          {categories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 border-l-4 border-indigo-500 pl-5 mb-6 select-none">
                {category.title}
              </h3>

              <div className="flex space-x-6 overflow-x-auto no-scrollbar py-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center flex-shrink-0 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 cursor-default select-none"
                    style={{ minWidth: '90px' }}
                    whileHover={{ scale: 1.1, boxShadow: '0 10px 15px rgba(99, 102, 241, 0.4)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div 
                      className="text-3xl mb-2"
                      style={{ color: skill.color }}
                      aria-label={skill.name + " icon"}
                      role="img"
                    >
                      {skill.icon}
                    </div>
                    <span className="text-xs font-semibold text-center text-gray-900 dark:text-gray-100">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
