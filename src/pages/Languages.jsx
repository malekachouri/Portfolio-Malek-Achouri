import React from "react";

const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Highly proficient" },
  { name: "English", level: "Proficient" },
  { name: "Italian", level: "Beginner" },
];

const Languages = () => {
  return (
    <section
      id="languages"
      className="py-16 px-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-indigo-600 dark:text-indigo-400">
          Languages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="flex items-start bg-white dark:bg-gray-800 rounded-lg shadow p-4"
            >
              <div className="text-left">
                <p className="text-xl font-semibold">{lang.name}</p>
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
