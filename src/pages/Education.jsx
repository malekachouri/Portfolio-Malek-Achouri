import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUniversity } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      title: "Engineering in Telecommunications (Cloud & Infrastructure)",
      institution: "National School of Electronics and Telecommunications of Sfax (ENET'Com)",
      location: "Sfax, Tunisia",
      duration: "2022 – 2025",
      description:
        "Comprehensive training in cloud infrastructure design, virtualization, IT architecture principles, and scalable distributed systems. Gained hands-on experience with cloud platforms, network configuration, and security best practices.",
      courses: [
        "Cloud Computing and Virtualization",
        "IT Infrastructure Architecture",
        "Distributed Systems and Microservices",
        "Network Security and Management",
        "Data Storage and Management",
        "DevOps and Automation",
        "Kubernetes & Docker Orchestration",
        "Software-Defined Networking (SDN)",
        "Edge & 5G Network Technologies",
        "AI for Network Optimization",
        "Operating System Administration (Linux, Windows Server)",
      ],
      skills: [
        "AWS",
        "Kubernetes",
        "Docker",
        "Terraform",
        "Ansible",
        "CI/CD",
        "DevOps",
        "Linux",
        "Security",
        "VMware",
        "Hyper-V",
        "Prometheus",
        "Grafana",
        "ELK",
        "IaC",
        "API Management",
        "Bash",
        "Python",
        "Agile/Scrum",
        "System Design",
      ],
    },
    {
      title: "Bachelor’s in Computer Science and Communication Technologies",
      institution:
        "Higher Institute of Applied Sciences and Technology of Mahdia (ISSAT Mahdia)",
      location: "Mahdia, Tunisia",
      duration: "2019 – 2022",
      description:
        "Foundational education in computer science and technology, providing solid skills in programming, software development, system architecture, networks, and databases. Emphasis on practical projects and teamwork.",
      courses: [
        "Algorithms & Data Structures",
        "Object-Oriented Programming (Java / C++)",
        "Database Systems & SQL",
        "Web Development (HTML, CSS, JavaScript)",
        "Computer Networks & TCP/IP",
        "Software Engineering & UML",
        "Operating Systems & Linux",
        "Mobile Development Basics",
      ],
      skills: [
        "Java",
        "C++",
        "JavaScript",
        "HTML/CSS",
        "SQL",
        "Linux",
        "Git/GitHub",
        "REST APIs",
        "OOP",
        "Agile/Scrum",
        "Problem Solving",
        "Team Collaboration",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-700"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 select-none"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-indigo-200 dark:border-indigo-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <FaUniversity className="text-indigo-600 text-2xl" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {edu.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                <FaCalendarAlt />
                <span>{edu.duration}</span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 font-medium">
                {edu.institution}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {edu.location}
              </p>

              <p className="text-sm text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                {edu.description}
              </p>

              <h4 className="text-md font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
                Key Courses
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 mb-5 space-y-1">
                {edu.courses.map((course, i) => (
                  <li key={i}>{course}</li>
                ))}
              </ul>

              <h4 className="text-md font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
                Relevant Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {edu.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-200 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
