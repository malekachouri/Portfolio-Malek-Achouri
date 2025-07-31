import React from 'react';

const Hero = () => {
  return (
    <section className="py-20 px-4 bg-indigo-100 dark:bg-indigo-900 text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Hi, I’m Ramagiri Jithendar</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Senior DevOps Engineer | AWS | CI/CD | Kubernetes</p>
      <a
        href="/assets/Ramagiri_Jithendar_DevOps_Engineer_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Hero;
