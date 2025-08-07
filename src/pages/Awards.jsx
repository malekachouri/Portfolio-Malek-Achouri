import React from "react";

const Awards = () => {
  const awards = [
    {
      date: "17/10/2024",
      title: "1st Place - Green Tech Hackathon",
      description:
        "WE-SPICE Program: Training Tomorrow's Innovators, organized by Technische Universität Chemnitz, supported by the DRÄXLMAIER Group.",
      images: [
        "/assets/Green Tech Hackathon1.jpeg",
        "/assets/Green Tech Hackathon4.jpeg",
      ],
    },
  ];

  return (
    <section
      id="awards"
      className="py-16 px-6 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-indigo-600 dark:text-indigo-400">
          AWARDS
        </h2>

        <ul className="space-y-12 max-w-4xl mx-auto text-left">
          {awards.map((award, index) => (
            <li
              key={index}
              className="border-l-4 border-indigo-600 pl-6 relative"
            >
              <span className="block text-indigo-600 font-semibold mb-2">
                {award.date}
              </span>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {award.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{award.description}</p>

              {/* Images container */}
              <div className="flex gap-6 justify-center md:justify-start">
                {award.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${award.title} - ${i + 1}`}
                    className="w-40 h-40 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Awards;
