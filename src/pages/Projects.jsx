import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-indigo-600 mb-4">Projects</h2>
      <ul className="text-gray-700 dark:text-gray-300">
        <li>✅ CI/CD pipeline for Java/Node app using Jenkins, Docker, GitHub</li>
        <li>✅ EKS Cluster setup with Terraform + Helm Charts</li>
        <li>✅ Monitoring & Alerting: Prometheus + Grafana</li>
      </ul>
    </section>
  );
};

export default Projects;
