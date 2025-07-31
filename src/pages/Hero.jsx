import React from 'react';

const Hero = () => {
  return (
    <section className="py-20 px-4 bg-indigo-100 dark:bg-indigo-900 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Hi, I’m Ramagiri Jithendar
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
        Senior DevOps Engineer | AWS | CI/CD | Kubernetes
      </p>
      <a
        href="/assets/Ramagiri_Jithendar_DevOps_Engineer_Resume.pdf"
        download
        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition duration-300 ease-in-out"
        aria-label="Download Resume of Ramagiri Jithendar"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Hero;
