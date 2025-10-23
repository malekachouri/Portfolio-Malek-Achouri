import React from "react";
import { motion } from "framer-motion";

const awards = [
  {
    date: "17/10/2024",
    title: "1st Place - Green Tech Hackathon",
    description:
      "Awarded 1st place at the Green Tech Hackathon, part of the WE-SPICE program: 'Training Tomorrow’s Innovators'. Our team proposed a sustainable, tech-driven solution using IoT and AI technologies, competing with talented students worldwide.",
    images: [
      "/assets/Green Tech Hackathon1.jpeg",
      "/assets/Green Tech Hackathon4.jpeg",
    ],
  },
];

const Awards = () => {
  return (
    <section
      id="awards"
      className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 select-none"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Awards & Achievements
        </motion.h2>

        <div className="space-y-12">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 border-l-4 border-gradient-to-b from-indigo-600 via-purple-600 to-pink-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <span className="block text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
                {award.date}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {award.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {award.description}
              </p>

              {award.images && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
                  {award.images.map((img, i) => (
                    <motion.img
                      key={i}
                      src={img}
                      alt={`${award.title} - ${i + 1}`}
                      className="w-full h-40 object-cover rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300"
                      whileHover={{ scale: 1.08 }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
