import React from "react";

const languages = [
  { name: "Arabic", level: "Native", icon: "🌍" },
  { name: "French", level: "Highly proficient", icon: "🌐" },
  { name: "English", level: "Proficient", icon: "🗣️" },
  { name: "Italian", level: "Beginner", icon: "📝" },
];

const Languages = () => {
  return (
    <section
      id="languages"
      className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-700"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12 text-indigo-600 dark:text-indigo-400">
          Languages
        </h2>

        <div className="space-y-6">
          {languages.map((lang, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-lg shadow-md p-5"
            >
              <div className="text-3xl">{lang.icon}</div>
              <div className="text-left">
                <h3 className="text-xl font-medium">{lang.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{lang.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
