// src/pages/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Cloud & DevOps Engineer",
    company: "KPIT Technologies",
    location: "Sfax, Tunisia",
    duration: "Feb 2025 – Jul 2025",
    responsibilities: [
      "Designed and automated a multi-node private cloud using OpenStack, Ceph, Kolla-Ansible, and Terraform, reducing deployment time by 40%.",
      "Deployed a Kubernetes (K3s) cluster inside OpenStack VMs for reliable orchestration of containerized applications.",
      "Integrated distributed services (MongoDB, MariaDB, Memcached, RabbitMQ) to enhance performance and modularity.",
      "Implemented centralized monitoring with Prometheus, Grafana, Fluentd, and OpenSearch for improved incident detection and response.",
      "Delivered a highly available, scalable, and secure cloud architecture ready for production workloads.",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "Sofrecom",
    location: "Sfax, Tunisia",
    duration: "Jul 2024 – Aug 2024",
    responsibilities: [
      "Deployed a lightweight Kubernetes (K3s) cluster after evaluating KIND and Kubeadm for optimized development environments.",
      "Automated deployments using GitLab CI/CD and ArgoCD based on GitOps practices.",
      "Developed a custom deployment dashboard in ArgoCD to monitor real-time deployments.",
      "Implemented proactive alerting and performance monitoring with Prometheus, Alertmanager, and Grafana.",
    ],
  },
  {
    title: "Cloud & DevOps Engineer",
    company: "Primatec Engineering",
    location: "Sfax, Tunisia",
    duration: "Jun 2024 – Aug 2024",
    responsibilities: [
      "Deployed an OpenStack 'all-in-one' cloud using Packstack, comparing Kolla-Ansible and DevStack for performance and scalability.",
      "Set up a Minikube Kubernetes cluster for testing and deploying web applications.",
      "Used Docker for efficient containerization and resource optimization.",
    ],
  },
  {
    title: "Deep Learning Research Engineer",
    company: "ATMS Lab Research Unit",
    location: "Sfax, Tunisia",
    duration: "Jun 2023 – Aug 2023",
    responsibilities: [
      "Prepared and preprocessed medical images for brain tumor detection.",
      "Applied the 3D U-Net model to segment regions of interest in brain scans.",
      "Classified segmented images using deep learning models (VGG19, InceptionV3, ResNet50V2) to identify tumors.",
      "Developed a Flask web interface to display results and assist healthcare professionals in analysis.",
      "Tools: Deep Learning, Transfer Learning, Flask, U-Net, VGG19, InceptionV3, ResNet50V2.",
    ],
  },
  {
    title: "IT Automation Engineer",
    company: "GENIOS",
    location: "Mahdia, Tunisia",
    duration: "Feb 2022 – Jul 2022",
    responsibilities: [
      "Automated deployment and configuration of infrastructure components (Docker, DNS, essential services) using Ansible.",
      "Deployed web applications across multiple machines with Ansible, ensuring consistency and reliability.",
      "Maintained high availability through proactive maintenance and automation.",
    ],
  },
  {
    title: "Telecommunications Engineer",
    company: "Tunisie Télécom",
    location: "Sidi Bouzid, Tunisia",
    duration: "Jun 2021 – Jul 2021",
    responsibilities: [
      "Resolved network issues, improving overall performance and reliability.",
      "Implemented monitoring solutions to detect and resolve network anomalies.",
      "Tools: TCP/IP, SNMP, ICMP.",
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
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {exp.title} - <span className="text-indigo-600">{exp.company}</span>
                </h3>
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
