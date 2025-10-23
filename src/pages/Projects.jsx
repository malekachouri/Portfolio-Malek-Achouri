import React from 'react';
import { motion } from 'framer-motion';
import {
  FaAws,
  FaLock,
  FaNetworkWired,
  FaAngular,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiMicrosoftazure,
  SiTerraform,
  SiKubernetes,
  SiJira,
  SiGitlab,
} from "react-icons/si";

const projects = [
  {
    title: "Terraform & Azure DevOps Automation",
    type: "Learning Project",
    duration: "Oct 2025 – Present",
    summary: [
      "Automated enterprise-grade infrastructure using Terraform on Microsoft Azure.",
      "Implemented CI/CD pipelines with Azure DevOps to provision and deploy environments efficiently.",
      "Applied reusable Terraform modules and environment management for scalable deployments.",
      "Tools: Azure DevOps, Terraform, ARM Templates, YAML Pipelines, GitHub.",
    ],
    icon: <SiTerraform className="text-purple-600 text-2xl" />,
  },
  {
    title: "GitOps Automation with Azure DevOps",
    type: "Learning Project",
    duration: "Sep 2025 – Present",
    summary: [
      "Automated continuous delivery from code to cloud using GitOps workflows in Azure DevOps.",
      "Configured real-time monitoring and rollback pipelines to ensure production reliability.",
      "Enhanced deployment consistency using version-controlled Infrastructure as Code.",
      "Tools: Azure DevOps, GitOps, Kubernetes, YAML Pipelines, GitHub Actions.",
    ],
    icon: <SiMicrosoftazure className="text-blue-600 text-2xl" />,
  },
  {
    title: "TunisiePara Web Application Testing",
    type: "Learning Project",
    duration: "Oct 2025 – Present",
    summary: [
      "Designed and executed functional & UAT tests for an e-commerce parapharmacy platform.",
      "Created User Stories, Test Cases, and Gherkin scenarios covering all critical workflows.",
      "Validated application behavior after deployments, ensuring accuracy and reliability.",
      "Tools: Jira, Xray, Gherkin, Manual Testing, Post-deployment Validation.",
    ],
    icon: <SiJira className="text-blue-500 text-2xl" />,
  },
  {
    title: "CI/CD Automation with AWS Step Functions",
    type: "Academic Project",
    duration: "Oct 2024 – Dec 2024",
    summary: [
      "Designed automated CI/CD workflows using AWS Step Functions, Lambda, and S3.",
      "Provisioned scalable infrastructures using CloudFormation and Python Boto3 scripts.",
      "Implemented multi-environment pipelines with automatic rollback for service continuity.",
      "Tools: AWS Step Functions, Lambda, S3, CloudFormation, Python, Boto3.",
    ],
    icon: <FaAws className="text-orange-500 text-2xl" />,
  },
  {
    title: "Secure Authentication & Authorization System",
    type: "Academic Project",
    duration: "Oct 2024 – Nov 2024",
    summary: [
      "Developed secure authentication and authorization with Flask and Keycloak.",
      "Configured a custom realm for user and role management.",
      "Improved security and scalability via centralized authentication.",
      "Tools: Flask, Keycloak, OAuth2, OIDC, REST APIs, Python.",
    ],
    icon: <FaLock className="text-red-600 text-2xl" />,
  },
  {
    title: "Parapharmacy Web Application",
    type: "Academic Project",
    duration: "2024",
    summary: [
      "Built a web application to manage products, categories, and online orders.",
      "Implemented a responsive frontend (Angular) and RESTful backend (Node.js & Express).",
      "Integrated MongoDB for product management and JWT authentication for security.",
      "Tools: Angular, Node.js, Express, MongoDB, JWT, REST APIs.",
    ],
    icon: (
      <div className="flex items-center space-x-1">
        <FaAngular className="text-red-600 text-2xl" />
        <FaNodeJs className="text-green-600 text-2xl" />
      </div>
    ),
  },
  {
    title: "GitOps CI/CD with Argo CD",
    type: "Final Year Project",
    duration: "Sep 2023 – May 2024",
    summary: [
      "Managed scalable Kubernetes clusters (K3s, Kubeadm, Minikube) for development.",
      "Automated CI/CD and IaC deployments using Argo CD with GitOps principles.",
      "Improved delivery speed and consistency for multiple environments.",
      "Tools: Kubernetes, Argo CD, Jenkins, Docker, GitLab, Helm, Kustomize.",
    ],
    icon: <SiGitlab className="text-orange-600 text-2xl" />,
  },
  {
    title: "Kubernetes Microservices Deployment",
    type: "Academic Project",
    duration: "May 2023 – Jul 2023",
    summary: [
      "Deployed a containerized microservices application using Docker & Kubernetes.",
      "Automated CI/CD pipelines with GitHub Actions for build, test, and deploy stages.",
      "Integrated monitoring and logging with Prometheus and Grafana for insights.",
      "Tools: Kubernetes, Docker, GitHub Actions, Prometheus, Grafana, YAML, Helm.",
    ],
    icon: <SiKubernetes className="text-blue-500 text-2xl" />,
  },
  {
    title: "FTTH-GEPON Network Design",
    type: "Academic Project",
    duration: "Apr 2023 – May 2023",
    summary: [
      "Designed FTTH-GEPON architecture using OLT LTE-2X, ONU NTE-2C, and optical splitters.",
      "Created data and video network topologies and simulated optical losses for optimization.",
      "Assessed GPON benefits including scalability, cost reduction, and subscriber density.",
      "Tools: GEPON, Optical Splitters, OLT Configurations, Simulation Tools.",
    ],
    icon: <FaNetworkWired className="text-indigo-600 text-2xl" />,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 select-none"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-indigo-200 dark:border-indigo-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex items-center gap-4 mb-5">
                {project.icon}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {project.type} | {project.duration}
                  </p>
                </div>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
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
