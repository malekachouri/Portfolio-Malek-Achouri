import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Education</h2>

        {/* Modern tagline */}
        <p className="text-slate-600 text-base mb-10">
          From the classroom to the cloud—my academic journey has forged a future-proof skillset
          in computer science, telecom, DevOps and web technologies, ready to power tomorrow’s
          digital world.
        </p>

        {/* Engineering degree */}
        <div className="relative pl-10 border-l border-slate-300">
          <span className="absolute -left-[7px] top-1 w-3.5 h-3.5 bg-slate-400 rounded-full" />

          <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
            <FaCalendarAlt />
            <span>2022 – 2025</span>
          </div>

          <h3 className="text-xl font-bold text-slate-900">
            Engineering in Telecommunications (Cloud & Infrastructure)
          </h3>
          <p className="text-slate-700 font-medium">
            National School of Electronics and Telecommunications of Sfax (ENET'Com)
          </p>
          <p className="text-slate-500 text-sm mb-3">Sfax, Tunisia</p>

          <p className="text-sm text-slate-600 mb-4">
            Comprehensive training in cloud infrastructure design, virtualization, IT architecture
            principles, and scalable distributed systems. Gained hands-on experience with cloud
            platforms, network configuration, and security best practices.
          </p>

          <h4 className="text-md font-semibold text-slate-800 mb-2">Key Courses</h4>
          <ul className="list-disc list-inside text-sm text-slate-700 mb-5 space-y-1">
            <li>Cloud Computing and Virtualization</li>
            <li>IT Infrastructure Architecture</li>
            <li>Distributed Systems and Microservices</li>
            <li>Network Security and Management</li>
            <li>Data Storage and Management</li>
            <li>DevOps and Automation</li>
            <li>Orchestration and Container Management (Kubernetes, Docker)</li>
            <li>Software-Defined Networking (SDN)</li>
            <li>Edge & 5G Network Technologies</li>
            <li>AI for Network Optimization</li>
            <li>Operating System Administration (Linux, Windows Server)</li>
          </ul>

          <h4 className="text-md font-semibold text-slate-800 mb-2">Relevant Skills</h4>
          <div className="flex flex-wrap gap-2">
            {[
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
            ].map((skill) => (
              <span
                key={skill}
                className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Bachelor's degree */}
        <div className="relative pl-10 border-l border-slate-300 mt-12">
          <span className="absolute -left-[7px] top-1 w-3.5 h-3.5 bg-slate-400 rounded-full" />

          <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
            <FaCalendarAlt />
            <span>2019 – 2022</span>
          </div>

          <h3 className="text-xl font-bold text-slate-900">
            Bachelor’s degree in Computer Science and Communication Technologies
          </h3>
          <p className="text-slate-700 font-medium">
            Higher Institute of Applied Sciences and Technology of Mahdia (ISSAT Mahdia)
          </p>
          <p className="text-slate-500 text-sm mb-3">Mahdia, Tunisia</p>

          <p className="text-sm text-slate-600 mb-4">
            Foundational education in computer science and technology, providing solid
            skills in programming, software development, system architecture, networks,
            and databases. Emphasis on practical projects and teamwork.
          </p>

          <h4 className="text-md font-semibold text-slate-800 mb-2">Key Courses</h4>
          <ul className="list-disc list-inside text-sm text-slate-700 mb-5 space-y-1">
            <li>Algorithms & Data Structures</li>
            <li>Object-Oriented Programming (Java / C++)</li>
            <li>Database Systems & SQL</li>
            <li>Web Development (HTML, CSS, JavaScript)</li>
            <li>Computer Networks & TCP/IP</li>
            <li>Software Engineering & UML</li>
            <li>Operating Systems & Linux</li>
            <li>Mobile Development Basics</li>
          </ul>

          <h4 className="text-md font-semibold text-slate-800 mb-2">Relevant Skills</h4>
          <div className="flex flex-wrap gap-2">
            {[
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
            ].map((skill) => (
              <span
                key={skill}
                className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;