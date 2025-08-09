import React from "react";
import { FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

const data = [
  {
    title: "Engineering in Telecommunications",
    school: "ENET'Com",
    years: "2022 - 2025",
    location: "Sfax, Tunisia",
    tags: [
      "5G",
      "Network Systems",
      "Embedded Systems",
      "Cloud Computing",
      "DevOps",
      "Kubernetes",
      "Web Development",
      "AWS",
    ],
  },
  {
    title: "Bachelor’s degree in Computer Science and Communication Technologies",
    school: "ISSTM Mahdia",
    years: "2019 - 2022",
    location: "Mahdia, Tunisia",
    description:
      "Foundational education in computer science and technology, building core skills in programming, software development, and system architecture.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-700"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold mb-14 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          EDUCATION
        </motion.h2>

        <ol className="relative border-l-2 border-indigo-300 dark:border-indigo-700 space-y-14">
          {data.map((item, index) => (
            <motion.li
              key={index}
              className="relative pl-12"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              {/* Cercle timeline */}
              <span className="absolute left-0 top-2 w-7 h-7 rounded-full bg-indigo-600 border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-indigo-300 dark:bg-indigo-400"></span>
              </span>

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                {/* Left content */}
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-1">{item.school}</p>
                  <p className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <FaClock className="mr-2" /> {item.years}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.location}</p>
                </div>

                {/* Right content */}
                <div className="md:w-1/2 mt-4 md:mt-0">
                  {item.tags && (
                    <>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Relevant Coursework:
                      </p>
                      <div className="flex flex-wrap gap-3 justify-start md:justify-end">
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="inline-block px-5 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full font-semibold cursor-default select-none
                              transition-colors hover:bg-indigo-200 dark:hover:bg-indigo-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                  {item.description && (
                    <p className="text-gray-700 dark:text-gray-300 mt-1">{item.description}</p>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Education;
