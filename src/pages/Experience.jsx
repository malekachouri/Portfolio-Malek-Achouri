import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Cloud & DevOps Engineer",
    company: "KPIT Technologies",
    location: "Sfax, Tunisia",
    duration: "Feb 2025 – Jul 2025",
    projectDuration: "6 months",
    responsibilities: [
      "Designed and automated a multi-node private cloud using OpenStack, Ceph, Kolla-Ansible, and Terraform, reducing deployment time by 40%.",
      "Deployed a Kubernetes (K3s) cluster inside OpenStack VMs for reliable orchestration of containerized applications.",
      "Integrated distributed services (MongoDB, MariaDB, Memcached, RabbitMQ) to enhance performance and modularity.",
      "Implemented centralized monitoring with Prometheus, Grafana, Fluentd, and OpenSearch for improved incident detection and response.",
      "Delivered a highly available, scalable, and secure cloud architecture ready for production workloads.",
    ],
    technologies: [
      "OpenStack", "Ceph", "Kolla-Ansible", "Terraform", "Kubernetes (K3s)",
      "MongoDB", "MariaDB", "Memcached", "RabbitMQ",
      "Prometheus", "Grafana", "Fluentd", "OpenSearch"
    ],
  },
  {
    title: "DevOps Engineer",
    company: "Sofrecom",
    location: "Sfax, Tunisia",
    duration: "Jul 2024 – Aug 2024",
    projectDuration: "2 months",
    responsibilities: [
      "Deployed a lightweight Kubernetes (K3s) cluster after evaluating KIND and Kubeadm for optimized development environments.",
      "Automated deployments using GitLab CI/CD and ArgoCD based on GitOps practices.",
      "Developed a custom deployment dashboard in ArgoCD to monitor real-time deployments.",
      "Implemented proactive alerting and performance monitoring with Prometheus, Alertmanager, and Grafana.",
    ],
    technologies: [
      "Kubernetes (K3s)", "KIND", "Kubeadm", "GitLab CI/CD", "ArgoCD",
      "Prometheus", "Alertmanager", "Grafana"
    ],
  },
  {
    title: "Cloud & DevOps Engineer",
    company: "Primatec Engineering",
    location: "Sfax, Tunisia",
    duration: "Jun 2024 – Aug 2024",
    projectDuration: "3 months",
    responsibilities: [
      "Deployed an OpenStack 'all-in-one' cloud using Packstack, comparing Kolla-Ansible and DevStack for performance and scalability.",
      "Set up a Minikube Kubernetes cluster for testing and deploying web applications.",
      "Used Docker for efficient containerization and resource optimization.",
    ],
    technologies: [
      "OpenStack (Packstack, Kolla-Ansible, DevStack)", "Minikube", "Docker"
    ],
  },
  {
    title: "Deep Learning Research Engineer",
    company: "ATMS Lab Research Unit",
    location: "Sfax, Tunisia",
    duration: "Jun 2023 – Aug 2023",
    projectDuration: "3 months",
    responsibilities: [
      "Prepared and preprocessed medical images for brain tumor detection.",
      "Applied the 3D U-Net model to segment regions of interest in brain scans.",
      "Classified segmented images using deep learning models (VGG19, InceptionV3, ResNet50V2) to identify tumors.",
      "Developed a Flask web interface to display results and assist healthcare professionals in analysis.",
    ],
    technologies: [
      "Deep Learning", "Transfer Learning", "Flask", "U-Net", "VGG19", "InceptionV3", "ResNet50V2"
    ],
  },
  {
    title: "IT Automation Engineer",
    company: "GENIOS",
    location: "Mahdia, Tunisia",
    duration: "Feb 2022 – Jul 2022",
    projectDuration: "6 months",
    responsibilities: [
      "Automated deployment and configuration of infrastructure components (Docker, DNS, essential services) using Ansible.",
      "Deployed web applications across multiple machines with Ansible, ensuring consistency and reliability.",
      "Maintained high availability through proactive maintenance and automation.",
    ],
    technologies: [
      "Ansible", "Docker", "DNS", "Infrastructure Automation"
    ],
  },
  {
    title: "Telecommunications Engineer",
    company: "Tunisie Telecom",
    location: "Sidi Bouzid, Tunisia",
    duration: "Jun 2021 – Jul 2021",
    projectDuration: "2 months",
    responsibilities: [
      "Resolved network issues, improving overall performance and reliability.",
      "Implemented monitoring solutions to detect and resolve network anomalies.",
    ],
    technologies: [
      "TCP/IP", "SNMP", "ICMP"
    ],
  },
];

// Check icon component
const CheckIcon = () => (
  <span className="inline-block text-green-500 mr-3 mt-1 font-bold select-none">✓</span>
);

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 select-none"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Professional Experience
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">
          {experiences.map((exp, idx) => (
            <motion.article
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-indigo-200 dark:border-indigo-700 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-5">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {exp.title}{" "}
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                    @ {exp.company}
                  </span>
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                  <time className="whitespace-nowrap">{exp.duration}</time>
                  <span className="font-semibold text-indigo-500">{exp.projectDuration}</span>
                </div>
              </header>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 italic select-none">{exp.location}</p>

              <section>
                <h4 className="font-semibold text-indigo-700 mb-3 select-none">Key Highlights</h4>
                <ul className="list-none space-y-2 text-gray-700 dark:text-gray-200 pl-5">
                  {exp.responsibilities.map((task, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon />
                      <p>{task}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-6">
                <h4 className="font-semibold text-indigo-700 mb-3 select-none">Technologies</h4>
                <div className="flex flex-wrap gap-2 text-sm text-indigo-600 dark:text-indigo-400 font-semibold">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 dark:bg-indigo-900 px-3 py-1 rounded-full select-none cursor-default"
                      title={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
