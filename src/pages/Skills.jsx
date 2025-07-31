import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-indigo-600 mb-4">Skills</h2>
      <ul className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
        <li>Jenkins, GitHub Actions</li>
        <li>Docker, Kubernetes, Helm</li>
        <li>Terraform, Ansible</li>
        <li>AWS, Linux, Bash</li>
        <li>Monitoring: Prometheus, Grafana</li>
      </ul>
    </section>
  );
};

export default Skills;
