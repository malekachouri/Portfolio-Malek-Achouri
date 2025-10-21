import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaGitlab } from "react-icons/fa";
import { motion } from "framer-motion";

const contacts = [
  { icon: <FaEnvelope />, title: "Email", info: "malakachouri200@gmail.com", href: "mailto:malakachouri200@gmail.com" },
  { icon: <FaGithub />, title: "GitHub", info: "malekachouri", href: "https://github.com/malekachouri" },
  { icon: <FaGitlab />, title: "GitLab", info: "malekachouri025", href: "https://gitlab.com/malekachouri025" },
  { icon: <FaLinkedin />, title: "LinkedIn", info: "/in/achouri-malek", href: "https://www.linkedin.com/in/achouri-malek/" },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-700"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-12 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Interested in collaborating, hiring, or have a question? Let’s connect! I’m open to exciting opportunities.
        </motion.p>

        <div className="grid md:grid-cols-4 gap-8">
          {contacts.map((contact, idx) => (
            <motion.a
              key={idx}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 flex flex-col items-center text-center cursor-pointer hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="text-4xl text-indigo-600 mb-4">{contact.icon}</div>
              <h4 className="text-xl font-semibold mb-1">{contact.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{contact.info}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
