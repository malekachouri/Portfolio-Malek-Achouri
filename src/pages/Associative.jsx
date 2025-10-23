import React from "react";
import { motion } from "framer-motion";

const activities = [
  {
    role: "General Secretary",
    organization: "Microsoft Tech Club - ENET'Com",
    period: "2023 – 2024",
    location: "Sfax, Tunisia",
    description:
      "Coordinated administrative duties, maintained documentation, and ensured smooth communication between club members and partners. Organized tech events, workshops, and hackathons promoting Microsoft technologies.",
    images: [
      "/assets/ag9.jpg",
      "/assets/WhatsApp Image 2025-08-07 at 1.35.27 PM.jpeg",
      "/assets/WhatsApp Image 2025-08-07 at 1.36.17 PM.jpeg",
    ],
  },
  {
    role: "Active Member",
    organization: "IEEE ISIMA",
    period: "2022",
    location: "Mahdia, Tunisia",
    description:
      "Participated in planning and delivering AI-focused events in agriculture, including agenda management, inviting speakers, and supporting hands-on workshops demonstrating real-world AI applications.",
    images: ["/assets/i3e2.png", "/assets/i3e3.png"],
  },
];

const Associative = () => {
  return (
    <section
      id="associative"
      className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 select-none"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Associative Activities
        </motion.h2>

        <div className="space-y-12">
          {activities.map((activity, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 border-l-4 border-gradient-to-b from-indigo-600 via-purple-600 to-pink-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {activity.role}
                </h3>
                <p className="text-lg text-indigo-600 font-semibold">{activity.organization}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {activity.period} | {activity.location}
                </p>
              </div>

              {activity.description && (
                <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {activity.description}
                </p>
              )}

              {activity.images && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {activity.images.map((img, i) => (
                    <motion.img
                      key={i}
                      src={img}
                      alt={`${activity.organization} ${i + 1}`}
                      className="w-full h-40 object-cover rounded-xl shadow-md cursor-pointer transition-transform duration-300"
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

export default Associative;
