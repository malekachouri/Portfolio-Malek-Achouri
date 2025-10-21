import React from "react";
import { motion } from "framer-motion";

const languages = [
  { name: "Arabic", label: "Native", icon: "🌍" },
  { name: "French", label: "Highly proficient", icon: "🌐" },
  { name: "English", label: "Proficient", icon: "🗣️" },
  { name: "Italian", label: "Beginner", icon: "📝" },
];

const Languages = () => {
  return (
    <section
      id="languages"
      className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-700"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Languages
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {languages.map((lang, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg flex items-center space-x-4 cursor-default hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="text-4xl">{lang.icon}</div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{lang.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{lang.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
