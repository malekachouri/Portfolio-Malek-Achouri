
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'AWS (EC2, S3, VPC, IAM, ELB)', 'Jenkins, ArgoCD',
  'Docker, Kubernetes, Helm', 'Terraform, Ansible',
  'Shell Scripting, Groovy, YAML', 'Prometheus, Grafana',
  'Git, GitHub', 'Maven, SonarQube, Nexus'
];

const Skills = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-indigo-600 mb-10">Technical Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="p-4 bg-white shadow rounded"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
