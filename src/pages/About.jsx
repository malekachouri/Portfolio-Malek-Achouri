import React from "react";
import { FaAws, FaTools, FaCogs, FaSearch, FaHeart, FaBullseye, FaStar, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const values = [
  {
    icon: <FaHeart className="text-pink-500" />,
    title: "Passion",
    desc: "Solving complex infrastructure challenges with scalable and reliable cloud solutions.",
  },
  {
    icon: <FaBullseye className="text-indigo-500" />,
    title: "Mission",
    desc: "Automate, secure, and scale cloud infrastructures to empower innovation.",
  },
  {
    icon: <FaStar className="text-yellow-400" />,
    title: "Excellence",
    desc: "Achieved over 90% vulnerability reduction by implementing security best practices.",
  },
  {
    icon: <FaLightbulb className="text-green-400" />,
    title: "Innovation",
    desc: "Enabled 50% faster deployments through automation and CI/CD pipelines.",
  },
];

const skills = [
  {
    icon: <FaAws />,
    title: "Cloud Infrastructure",
    desc: "AWS, OpenStack, and private cloud to deliver robust and scalable environments.",
    level: 90,
  },
  {
    icon: <FaTools />,
    title: "Containers & CI/CD",
    desc: "Kubernetes, Docker, GitLab CI/CD, and ArgoCD for container lifecycle automation.",
    level: 85,
  },
  {
    icon: <FaCogs />,
    title: "Automation & IaC",
    desc: "Terraform, Ansible, and Kolla-Ansible to provision infrastructure through code.",
    level: 80,
  },
  {
    icon: <FaSearch />,
    title: "Monitoring & Observability",
    desc: "Monitoring with Prometheus & Grafana, logging with EFK stack for system insights.",
    level: 75,
  },
];

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h2>

        {/* Intro */}
        <motion.div
          className="max-w-3xl mx-auto mb-20 text-center text-gray-700 dark:text-gray-300 space-y-4 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>
            I’m <strong className="text-indigo-600 dark:text-indigo-400">Achouri Malek</strong>, a passionate <strong>Cloud & DevOps Engineer</strong> based in <strong>Sfax, Tunisia</strong>.
          </p>
          <p>
            I design <span className="font-semibold text-pink-600 dark:text-pink-400">automated, scalable, and secure</span> infrastructure solutions that help businesses accelerate innovation.
          </p>
          <p>
            From Kubernetes clusters, GitOps pipelines with ArgoCD, to observability with <strong>Prometheus</strong> & <strong>Grafana</strong>, I deliver reliable cloud ecosystems.
          </p>
        </motion.div>

        {/* Values grid with icon + alternating bg */}
        <div className="grid md:grid-cols-4 gap-10 mb-24">
          {values.map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              className={`p-8 rounded-3xl shadow-lg cursor-default flex flex-col items-center text-center transition-transform transform hover:scale-105
                ${i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-indigo-100 dark:bg-indigo-900"}
              `}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
            >
              <div className="text-5xl mb-5">{icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-indigo-700 dark:text-indigo-300">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-xs">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills with progress bars */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
          {skills.map(({ icon, title, desc, level }, i) => (
            <motion.div
              key={title}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 flex flex-col cursor-default"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 + i * 0.15, duration: 0.7 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-indigo-600 text-5xl mb-6">{icon}</div>
              <h4 className="text-2xl font-semibold mb-2">{title}</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm">{desc}</p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
              <span className="mt-2 text-right text-indigo-700 dark:text-indigo-300 font-bold">{level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
