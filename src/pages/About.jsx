import React from 'react';
import { FaAws, FaTools, FaCogs, FaSearch } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
          About Me
        </h2>

        <p className="text-lg mb-6 leading-relaxed">
          I'm <strong>Achouri Malek</strong>, a <strong>Cloud & DevOps Engineer</strong> based
          in <strong>Sfax, Tunisia</strong>. I specialize in designing automated,
          scalable, and secure cloud environments that empower applications to perform
          reliably and efficiently.
        </p>

        <p className="text-lg mb-6 leading-relaxed">
          My expertise spans cloud-native deployments, CI/CD pipelines, container
          orchestration, and advanced monitoring solutions. I’ve led projects
          including private cloud implementations with OpenStack, GitOps workflows
          with ArgoCD, and observability platforms using <strong>Prometheus</strong> and{' '}
          <strong>Grafana</strong>, driving scalability and high availability for
          organizations.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-left mt-10">
          {/* Cloud Infrastructure */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <FaAws className="text-3xl mb-4 text-indigo-500" />
            <h3 className="text-xl font-semibold mb-2">Cloud Infrastructure</h3>
            <p>
              Expertise in AWS, OpenStack, and private cloud solutions to build scalable
              and secure environments.
            </p>
          </div>

          {/* Containers & CI/CD */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <FaTools className="text-3xl mb-4 text-indigo-500" />
            <h3 className="text-xl font-semibold mb-2">Containers & CI/CD</h3>
            <p>
              Skilled with Kubernetes, Docker, GitLab CI/CD, and ArgoCD for automated
              container deployments.
            </p>
          </div>

          {/* Automation & IaC */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <FaCogs className="text-3xl mb-4 text-indigo-500" />
            <h3 className="text-xl font-semibold mb-2">Automation & IaC</h3>
            <p>
              Infrastructure as Code with Terraform, Ansible, and Kolla-Ansible to
              automate infrastructure provisioning.
            </p>
          </div>

          {/* Monitoring & Observability */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <FaSearch className="text-3xl mb-4 text-indigo-500" />
            <h3 className="text-xl font-semibold mb-2">Monitoring & Observability</h3>
            <p>
              Implement monitoring with Prometheus and Grafana, and logging with the EFK
              stack for full observability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
