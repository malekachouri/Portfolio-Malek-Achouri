import React from "react";

const certifications = [
  {
    title: "GitOps avec ArgoCD",
    url: "https://www.udemy.com/certificate/UC-XXXXXXXX/",
  },
  {
    title: "Introduction à AWS Data Pipeline",
    url: "https://www.aws.training/Transcript/Completion/XXXXXX",
  },
  {
    title: "Introduction à Kubernetes",
    url: "https://www.udemy.com/certificate/UC-XXXXXXXX/",
  },
  {
    title: "AWS Cloud Practitioner (CLF-C02)",
    url: "https://www.credly.com/badges/XXXXXXXX",
  },
  {
    title: "CCNA1",
    url: "https://www.netacad.com/portal/XXX",
  },
  {
    title: "Débuter avec Jenkins",
    url: "https://www.udemy.com/certificate/UC-XXXXXXXX/",
  },
  {
    title: "Intelligence artificielle sur Microsoft Azure",
    url: "https://learn.microsoft.com/en-us/training/achievements/XXXXXXXX",
  },
  {
    title: "Introduction au DevOps",
    url: "https://www.udemy.com/certificate/UC-XXXXXXXX/",
  },
  {
    title: "DevOps 101",
    url: "https://www.edx.org/certificates/XXXXXXXX",
  },
  {
    title: "Terraform Basics Training Course",
    url: "https://www.udemy.com/certificate/UC-XXXXXXXX/",
  },
  {
    title: "Introduction à DevOps sur AWS",
    url: "https://explore.skillbuilder.aws/learn/XXXXXXXX",
  },
  {
    title: "Débuter avec Ansible",
    url: "https://www.udemy.com/certificate/UC-XXXXXXXX/",
  },
  {
    title: "GitLab CI/CD: Architecting, Deploying, and Optimizing Pipelines",
    url: "https://www.udemy.com/certificate/UC-XXXXXXXX/",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-16 px-6 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-indigo-600 dark:text-indigo-400">
          Certifications
        </h2>

        <ul className="space-y-4 text-left">
          {certifications.map((cert, index) => (
            <li key={index}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline text-lg font-medium"
              >
                {cert.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
