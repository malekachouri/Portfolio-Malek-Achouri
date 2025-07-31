// src/pages/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "DevOps Engineer",
    company: "Symplocos Solutions Limited",
    location: "Bengaluru, India",
    duration: "Jan 2024 – Present",
    responsibilities: [
      "Designed and implemented CI/CD pipelines using Jenkins and GitHub Actions.",
      "Managed AWS EKS clusters and deployed containerized microservices with Helm.",
      "Automated infra with Terraform and Ansible, reducing provisioning time by 35%.",
      "Standardized deployment workflows, enhancing delivery speed and reliability.",
    ],
  },
  {
    title: "Software Engineer",
    company: "People Tech Group",
    location: "Hyderabad, India",
    duration: "Jan 2023 – Jan 2024",
    responsibilities: [
      "Automated CI/CD with Jenkins, cutting deployment time by 50%.",
      "Managed AWS infra (EC2, VPC, S3, Route 53) and optimized resource efficiency.",
      "Reduced manual provisioning by 40% using Terraform and Ansible.",
      "Ensured 99.9% uptime using Docker and Kubernetes.",
    ],
  },
  {
    title: "Project Assistant",
    company: "Elancer IT Solutions Pvt Ltd",
    location: "Hyderabad, India",
    duration: "Dec 2019 – Jan 2023",
    responsibilities: [
      "Automated build and deployment pipelines, reducing manual effort by 30%.",
      "Supported AWS infrastructure, ensuring availability and security.",
      "Developed Ansible playbooks for consistent app configuration.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.title} - <span className="text-indigo-600">{exp.company}</span></h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 sm:mt-0">{exp.duration}</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.location}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-200">
                {exp.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
