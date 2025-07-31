// src/pages/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaDocker, FaCogs, FaCodeBranch } from 'react-icons/fa';

const projects = [
  {
    title: "Enterprise DevOps Automation",
    company: "Symplocos Solutions Ltd",
    duration: "Jan 2024 – Present",
    summary: [
      "Modernized software delivery for large-scale apps using DevOps practices.",
      "Built automated CI/CD pipelines with Jenkins, GitHub Actions.",
      "Managed scalable Kubernetes clusters (EKS) with Helm and Docker.",
      "Streamlined infrastructure with Terraform & Ansible, reducing downtime.",
    ],
    icon: <FaAws className="text-indigo-600 text-2xl" />,
  },
  {
    title: "Cloud Infrastructure Optimization",
    company: "People Tech Group",
    duration: "Jan 2023 – Jan 2024",
    summary: [
      "Designed Jenkins-based CI/CD pipelines reducing failures by 40%.",
      "Provisioned scalable AWS infra using Terraform & Ansible.",
      "Managed Tomcat servers and deployed Dockerized services to Kubernetes.",
      "Integrated SonarQube and Nexus for secure code delivery.",
    ],
    icon: <FaDocker className="text-indigo-600 text-2xl" />,
  },
  {
    title: "Monitoring & Infra Automation",
    company: "Elancer IT Solutions",
    duration: "Dec 2019 – Jan 2023",
    summary: [
      "Deployed EKS clusters and set up monitoring via Prometheus & Grafana.",
      "Automated server setups using Ansible, improving release speed by 50%.",
      "Configured EC2, S3, VPC, IAM for production-grade AWS environments.",
      "Managed source control workflows using Git & GitHub.",
    ],
    icon: <FaCogs className="text-indigo-600 text-2xl" />,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Real-Time DevOps Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {project.icon}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{project.company} | {project.duration}</p>
                </div>
              </div>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 space-y-2">
                {project.summary.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
