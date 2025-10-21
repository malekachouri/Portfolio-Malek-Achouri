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
    title: "End-to-End Infrastructure with Terraform & Azure DevOps",
    company: "Ongoing Learning Project",
    duration: "Oct 2025 – Present",
    summary: [
      "Built automated, enterprise-grade infrastructure using Terraform on Microsoft Azure.",
      "Integrated CI/CD pipelines with Azure DevOps to provision and deploy environments efficiently.",
      "Implemented Infrastructure as Code (IaC) principles with reusable Terraform modules and environment management.",
      "Tools: Azure DevOps, Terraform, Azure Resource Manager (ARM), YAML Pipelines, GitHub.",
    ],
    icon: <SiTerraform className="text-purple-600 text-2xl" />,
  },
  {
    title: "Real-Time DevOps with Azure DevOps & GitOps",
    company: "Ongoing Learning Project",
    duration: "Sep 2025 – Present",
    summary: [
      "Implemented GitOps workflows to automate continuous delivery from code to cloud using Azure DevOps.",
      "Configured real-time monitoring and rollback pipelines for production environments.",
      "Enhanced deployment reliability through version-controlled IaC and automated approval gates.",
      "Tools: Azure DevOps, GitOps, Kubernetes, YAML Pipelines, GitHub Actions.",
    ],
    icon: <SiMicrosoftazure className="text-blue-600 text-2xl" />,
  },
  {
    title: "Functional & UAT Testing for TunisiePara Web Application",
    company: "Ongoing Learning Project",
    duration: "Oct 2025 – Present",
    summary: [
      "Designed and executed comprehensive functional and user acceptance tests for TunisiePara, a parapharmacy e-commerce platform.",
      "Created detailed User Stories, Test Cases, and Gherkin scenarios covering login, registration, product catalog, cart operations, checkout, payment, order tracking, and profile management.",
      "Validated application behavior post-deployment, ensuring accurate error handling, stock management, and transaction flows.",
      "Tools: Jira, Xray, Gherkin, Manual Testing, Post-deployment Validation.",
    ],
    icon: <SiJira className="text-blue-500 text-2xl" />,
  },
  {
    title: "CI/CD Automation with AWS Step Functions",
    company: "Academic Project",
    duration: "Oct 2024 – Dec 2024",
    summary: [
      "Designed automated CI/CD workflows using AWS Step Functions, Lambda, and S3 to optimize deployment processes.",
      "Deployed scalable infrastructures using CloudFormation and Python Boto3 scripts.",
      "Implemented multi-environment pipelines with automatic rollback to ensure service continuity.",
      "Tools: AWS Step Functions, Lambda, S3, CloudFormation, Boto3, Python.",
    ],
    icon: <FaAws className="text-orange-500 text-2xl" />,
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
    icon: <FaLock className="text-red-600 text-2xl" />,
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
    icon: <SiGitlab className="text-orange-600 text-2xl" />,
  },
  {
    title: "Kubernetes Case Study",
    company: "Academic Project",
    duration: "May 2023 – Jul 2023",
    summary: [
      "Designed and deployed a containerized microservices application using Docker and Kubernetes (K3s).",
      "Implemented a CI/CD pipeline with GitHub Actions to automate build, test, and deployment stages.",
      "Configured Kubernetes manifests (Deployments, Services, and Ingress) to ensure scalability and high availability.",
      "Integrated monitoring and logging with Prometheus and Grafana for performance insights.",
      "Tools: Kubernetes (K3s), Docker, GitHub Actions, Prometheus, Grafana, YAML, Helm.",
    ],
    icon: <SiKubernetes className="text-blue-500 text-2xl" />,
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
      "Tools: GEPON, Optical Splitters, Simulation Tools, OLT Configurations.",
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
                    {project.company} | {project.duration}
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
