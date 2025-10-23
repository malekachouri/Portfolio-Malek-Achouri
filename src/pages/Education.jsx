import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUniversity } from "react-icons/fa";

const educationData = [
  {
    title: "Telecommunications Engineering – Networks, Infrastructure & Cloud (RIC)",
    institution: "National School of Electronics and Telecommunications of Sfax (ENET’Com)",
    location: "Sfax, Tunisia",
    duration: "2022 – 2025",
    description:
      "An engineering program focused on modern telecommunications, cloud infrastructure, network virtualization, and emerging digital technologies. The RIC (Networks, Infrastructure & Cloud) specialization emphasizes SDN/NFV, automation, DevOps, and advanced cloud services. The curriculum combines both theoretical foundations and practical labs to prepare engineers for next-generation network and cloud challenges.",
    courses: [
      "Software-Defined Networking (SDN) & Network Function Virtualization (NFV)",
      "Cloud Core & Cloud Access",
      "Infrastructure Automation & DevOps",
      "Core Network Architecture",
      "Radio Access Network (RAN) Security",
      "IoT & Cloud Integration",
      "Quality of Service (QoS) and Quality of Experience (QoE)",
      "Next Generation Networks (NGN) & Cloud-RAN",
      "Data Analytics & Big Data for Telecommunications",
      "Emerging Cloud Services & 5G Technologies",
    ],
    skills: [
      "Cloud Computing (AWS, Azure, OpenStack)",
      "Kubernetes & Docker",
      "Infrastructure as Code (Terraform, Ansible)",
      "CI/CD & Automation",
      "Network Engineering (TCP/IP, OSPF, BGP)",
      "Linux System Administration",
      "Network Security & Monitoring",
      "SDN / NFV Technologies",
      "IoT & Edge Computing",
      "DevOps Practices & Agile Methodologies",
      "Python & Bash Scripting",
      "Service Reliability (SRE) & Observability",
    ],
  },
  {
    title: "Bachelor’s in Computer Science and Communication Technologies",
    institution: "Higher Institute of Applied Sciences and Technology of Mahdia (ISSAT Mahdia)",
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
      "Java","C++","JavaScript","HTML/CSS","SQL","Linux","Git/GitHub",
      "REST APIs","OOP","Agile/Scrum","Problem Solving","Team Collaboration",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 select-none"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-indigo-200 dark:border-indigo-700 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <FaUniversity className="text-indigo-600 text-2xl" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{edu.title}</h3>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                <FaCalendarAlt />
                <span>{edu.duration}</span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 font-medium">{edu.institution}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{edu.location}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">{edu.description}</p>

              <h4 className="text-md font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Key Courses</h4>
              <div className="grid grid-cols-2 gap-2 mb-5">
                {edu.courses.map((course, i) => (
                  <span key={i} className="text-xs bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-200 px-2 py-1 rounded-full">
                    {course}
                  </span>
                ))}
              </div>

              <h4 className="text-md font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Relevant Skills</h4>
              <div className="flex flex-wrap gap-2">
                {edu.skills.map((skill, i) => (
                  <span key={i} className="text-xs bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-200 px-3 py-1 rounded-full">
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
