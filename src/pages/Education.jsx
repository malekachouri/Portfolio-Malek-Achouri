import React from "react";
import { FaClock } from "react-icons/fa";

const Education = () => {
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

  return (
    <section
      id="education"
      className="py-16 px-6 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-indigo-600 dark:text-indigo-400">
          EDUCATION
        </h2>

        <ol className="space-y-12 text-left">
          {data.map((item, index) => (
            <li key={index} className="relative pl-10">
              {/* Cercle indicateur */}
              <span className="absolute left-0 top-1.5 flex items-center justify-center w-7 h-7 bg-white dark:bg-gray-900 border-2 border-indigo-600 rounded-full">
                <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
              </span>

              {/* Contenu */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-1">
                    {item.school}
                  </p>
                  <p className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <FaClock className="mr-2" /> {item.years}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.location}</p>
                </div>

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
                            className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full font-medium cursor-default"
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
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Education;
