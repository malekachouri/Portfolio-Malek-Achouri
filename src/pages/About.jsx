import React from "react";
import {
  FaAws,
  FaTools,
  FaCogs,
  FaSearch,
  FaHeart,
  FaBullseye,
  FaStar,
  FaLightbulb,
} from "react-icons/fa";
import { motion } from "framer-motion";

const highlights = [
  { icon: <FaHeart className="text-pink-500" />, title: "Passion", desc: "Turning complex cloud & DevOps challenges into streamlined solutions." },
  { icon: <FaBullseye className="text-indigo-500" />, title: "Mission", desc: "Automate, secure, and scale infrastructures for faster innovation." },
  { icon: <FaStar className="text-yellow-400" />, title: "Excellence", desc: "Deliver high-quality cloud architectures and robust CI/CD pipelines." },
  { icon: <FaLightbulb className="text-green-400" />, title: "Innovation", desc: "Design creative solutions that reduce deployment times by 50%." },
];

const skills = [
  { icon: <FaAws />, title: "Cloud Infrastructure", level: 70 },
  { icon: <FaTools />, title: "Containers & CI/CD", level: 75 },
  { icon: <FaCogs />, title: "Automation & IaC", level: 70 },
  { icon: <FaSearch />, title: "Monitoring & Observability", level: 80 },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 
          bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 select-none"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        {/* Intro with Photo */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20 
          text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Text Section */}
          <div className="md:flex-1 space-y-4 text-center md:text-left text-lg leading-relaxed">
            <p>
              Hi! I’m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r 
              from-indigo-700 via-purple-600 to-pink-500 font-bold">
                Achouri Malek
              </span>, a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r 
              from-indigo-700 via-purple-600 to-pink-500 font-bold">
                Cloud & DevOps Engineer
              </span>{" "}
              from Sfax, Tunisia.  I design and optimize multi-cloud infrastructures that enhance scalability, reliability, and performance.

            </p>
            <p>
              I’m a lifelong learner who adapts quickly to any environment and embraces 
              challenges that create real value. From Kubernetes orchestration to CI/CD 
              pipelines with ArgoCD, and monitoring with Prometheus & Grafana, I ensure 
              cloud ecosystems run smoothly.
            </p>
            <p>
              Always eager to take on new challenges, I strive to enhance my professional 
              growth and contribute to innovative solutions that drive efficiency.
            </p>
          </div>

          {/* Photo Section */}
          <div className="md:flex-1 flex justify-center">
            <div
              className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl 
              border-4 border-indigo-500 hover:scale-105 transition-transform duration-500"
            >
              <img
                src="/assets/malekkk.png"
                alt="Portrait of Achouri Malek"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg flex flex-col 
              items-center text-center cursor-default hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-4 gap-12">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col 
              cursor-default hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <div className="text-indigo-600 text-4xl mb-4">{skill.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>

              <div className="w-full bg-gray-300 dark:bg-gray-700 h-4 rounded-full overflow-hidden mb-2">
                <motion.div
                  className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 
                  h-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
              <span className="text-right text-indigo-700 dark:text-indigo-300 font-bold">
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
