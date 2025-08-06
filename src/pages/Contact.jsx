import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaGitlab } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-50 dark:bg-gray-950 text-center text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Get In Touch</h2>
        <p className="text-lg mb-8">Interested in working together or have questions? Feel free to reach out!</p>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <FaEnvelope className="text-3xl text-indigo-600 mb-2 mx-auto" />
            <h4 className="text-lg font-semibold">Email</h4>
            <p className="text-sm">malakachouri200@gmail.com</p>
          </div>

          <a
            href="https://github.com/malekachouri"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <FaGithub className="text-3xl text-indigo-600 mb-2 mx-auto" />
            <h4 className="text-lg font-semibold">GitHub</h4>
            <p className="text-sm">malekachouri</p>
          </a>

          <a
            href="https://gitlab.com/malekachouri025"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <FaGitlab className="text-3xl text-indigo-600 mb-2 mx-auto" />
            <h4 className="text-lg font-semibold">GitLab</h4>
            <p className="text-sm">malekachouri025</p>
          </a>

          <a
            href="https://www.linkedin.com/in/achouri-malek/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <FaLinkedin className="text-3xl text-indigo-600 mb-2 mx-auto" />
            <h4 className="text-lg font-semibold">LinkedIn</h4>
            <p className="text-sm">/in/achouri-malek</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
