import React from 'react';
import { FaAws, FaTools, FaCogs } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">About Me</h2>
        <p className="text-lg mb-6 leading-relaxed">
          I'm <strong>Ramagiri Jithendar</strong>, a <strong>DevOps & Cloud Engineer</strong> based in Bengaluru, India, with over <strong>5 years of experience</strong> in automating infrastructure, CI/CD pipelines, and managing scalable cloud-native applications.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          With strong hands-on expertise in AWS, Kubernetes, Jenkins, Terraform, and Docker, I have helped organizations reduce deployment time, enhance system availability, and ensure production reliability through DevOps best practices.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-left mt-10">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <FaAws className="text-3xl mb-4 text-indigo-500" />
            <h3 className="text-xl font-semibold mb-2">Cloud & Infrastructure</h3>
            <p>Hands-on with AWS (EC2, EKS, VPC, S3, Route 53), Terraform, and Ansible for secure, scalable cloud environments.</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <FaTools className="text-3xl mb-4 text-indigo-500" />
            <h3 className="text-xl font-semibold mb-2">DevOps Tools</h3>
            <p>Expert in Jenkins, GitHub Actions, ArgoCD, Maven, SonarQube, and Nexus for automated, quality-driven delivery pipelines.</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <FaCogs className="text-3xl mb-4 text-indigo-500" />
            <h3 className="text-xl font-semibold mb-2">Automation & Monitoring</h3>
            <p>Automated environments using Shell scripting, YAML, and monitored infrastructure with Prometheus and Grafana.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
