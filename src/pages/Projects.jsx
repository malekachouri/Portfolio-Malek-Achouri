// src/pages/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaLock, FaCodeBranch, FaNetworkWired, FaAngular, FaNodeJs } from 'react-icons/fa';

const projects = [
  {
    title: "CI/CD Automation with AWS Step Functions",
    company: "Academic Project",
    duration: "Oct 2024 – Dec 2024",
    summary: [
      "Designed automated CI/CD workflows using AWS Step Functions, Lambda, and S3 to optimize deployment processes.",
      "Deployed scalable infrastructures using CloudFormation and Python Boto3 scripts.",
      "Implemented multi-environment pipelines with automatic rollback to ensure service continuity.",
      "Tools: Step Functions, Lambda, S3, CloudFormation, Boto3, Python.",
    ],
    icon: <FaAws className="text-indigo-600 text-2xl" />,
  },
  {
    title: "Secure Authentication & Authorization",
    company: "Academic Project",
    duration: "Oct 2024 – Nov 2024",
    summary: [
      "Developed a secure authentication and authorization system with Flask and Keycloak.",
      "Configured a custom realm for user and role management.",
      "Enhanced security and scalability via centralized authentication.",
      "Tools: Flask, Keycloak, OIDC, OAuth2, Python, REST APIs.",
    ],
    icon: <FaLock className="text-indigo-600 text-2xl" />,
  },
  {
    title: "GitOps with Argo CD",
    company: "Final Year Project",
    duration: "Sep 2023 – May 2024",
    summary: [
      "Managed scalable Kubernetes clusters (K3s, Kubeadm, Minikube) for testing and development environments.",
      "Automated CI/CD and Infrastructure as Code (IaC) deployments with Argo CD following GitOps principles.",
      "Improved delivery consistency and release speed.",
      "Tools: Kubernetes (K3s, Kubeadm, Minikube), Argo CD, Jenkins, Docker, GitLab, Helm, Kustomize.",
    ],
    icon: <FaCodeBranch className="text-indigo-600 text-2xl" />,
  },
  {
    title: "Kubernetes Case Study",
    company: "Academic Project",
    duration: "2023",
    summary: [
      "Implemented a CI/CD pipeline with GitHub Actions for a containerized application.",
    ],
    icon: <FaCodeBranch className="text-indigo-600 text-2xl" />,
  },
  {
    title: "FTTH-GEPON Network Design",
    company: "Academic Project",
    duration: "Apr 2023 – May 2023",
    summary: [
      "Designed and implemented an FTTH-GEPON architecture using OLT LTE-2X, ONU NTE-2C, and SFT-P splitters.",
      "Created data & video network topologies with OLT port configurations.",
      "Simulated optical losses to optimize transmission and minimize attenuation.",
      "Evaluated GPON benefits: cost reduction, scalability, and higher subscriber density.",
    ],
    icon: <FaNetworkWired className="text-indigo-600 text-2xl" />,
  },
  {
    title: "Parapharmacy Web Application",
    company: "Academic Project",
    duration: "2024",
    summary: [
      "Developed a web application for a parapharmacy to manage products, categories, and online orders.",
      "Implemented a responsive frontend with Angular and a RESTful backend with Node.js & Express.",
      "Integrated MongoDB for product management and JWT authentication for secure access.",
      "Tools: Angular, Node.js, Express, MongoDB, JWT, REST APIs.",
    ],
    icon: (
      <div className="flex items-center space-x-1">
        <FaAngular className="text-red-600 text-2xl" />
        <FaNodeJs className="text-green-600 text-2xl" />
      </div>
    ),
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
          Academic Projects
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
