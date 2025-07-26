
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "DevOps Engineer – Symplocos Solutions Ltd",
    location: "Bengaluru, India",
    date: "Jan 2024 – Present",
    duties: [
      "Built CI/CD pipelines with Jenkins and GitHub Actions",
      "Managed AWS EKS clusters using Docker and Helm",
      "Provisioned infrastructure using Terraform & Ansible",
      "Improved release quality by standardizing deployment workflows"
    ]
  },
  {
    title: "Software Engineer – People Tech Group",
    location: "Hyderabad, India",
    date: "Jan 2023 – Jan 2024",
    duties: [
      "Automated CI/CD with Jenkins, reducing deploy time by 50%",
      "Managed AWS infrastructure and optimized cloud usage",
      "Used Terraform and Ansible for provisioning"
    ]
  },
  {
    title: "Project Assistant – Elancer IT Solutions",
    location: "Hyderabad, India",
    date: "Dec 2019 – Jan 2023",
    duties: [
      "Helped automate deployment and testing, cutting manual effort by 30%",
      "Supported AWS infrastructure and Ansible configuration"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-indigo-600 text-center mb-10">Professional Experience</h3>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold">{exp.title}</h4>
              <p className="text-sm text-gray-500">{exp.location} | {exp.date}</p>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                {exp.duties.map((duty, idx) => <li key={idx}>{duty}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience;
