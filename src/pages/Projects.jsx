import React from 'react';

const Projects = () => (
  <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
    <h3 className="text-3xl font-bold text-indigo-600 mb-4 text-center">Projects</h3>
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
        <h4 className="text-xl font-semibold mb-2">CI/CD with Jenkins & EKS (Symplocos)</h4>
        <p>Built robust Jenkins pipelines with Helm, Terraform, and GitHub Actions on AWS EKS to automate container deployment pipelines. Reduced release time by 60%.</p>
      </div>
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
        <h4 className="text-xl font-semibold mb-2">Cloud Infra Automation (People Tech)</h4>
        <p>Used Terraform & Ansible to provision AWS EC2, Route 53, and S3, with Docker & Kubernetes for container orchestration.</p>
      </div>
    </div>
  </section>
);

export default Projects;
