import React from "react";

const buttonColors = [
  "bg-indigo-600 hover:bg-indigo-700 text-white",
  "bg-green-600 hover:bg-green-700 text-white",
  "bg-yellow-600 hover:bg-yellow-700 text-white",
  "bg-red-600 hover:bg-red-700 text-white",
  "bg-purple-600 hover:bg-purple-700 text-white",
  "bg-pink-600 hover:bg-pink-700 text-white",
];
const levelColors = {
  Beginner:
    "bg-gradient-to-r from-sky-200 via-sky-300 to-sky-400 text-sky-900",
  Intermediate:
    "bg-gradient-to-r from-fuchsia-200 via-fuchsia-300 to-fuchsia-400 text-fuchsia-900",
  Advanced:
    "bg-gradient-to-r from-lime-200 via-lime-300 to-lime-400 text-lime-900",
};

const statusColors = {
  Active:
    "bg-gradient-to-r from-emerald-200 via-emerald-300 to-emerald-400 text-emerald-900",
  Completed:
    "bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-400 text-indigo-900",
  InProgress:
    "bg-gradient-to-r from-rose-200 via-rose-300 to-rose-400 text-rose-900",
};



const certifications = [
  {
    icon: "🔒",
    title: "DevSecOps - Kubernetes DevOps & Security",
    institution: "KodeKloud",
    year: "2025",
    status: "Active",
    level: "Intermediate",
    url: "https://learn.kodekloud.com/certificate/64740fd9-614b-4e35-afb4-121436ec17c5",
    description: "Focused on Kubernetes security practices and DevSecOps implementation.",
    keySkills: [
      "Kubernetes Security",
      "DevSecOps Principles",
      "CI/CD Security Integration",
      "Compliance & Best Practices",
    ],
  },
  {
    icon: "🐙",
    title: "GIT for Beginners",
    institution: "KodeKloud",
    year: "2025",
    status: "Active",
    level: "Beginner",
    url: "https://learn.kodekloud.com/certificate/2bc5e007-75f7-4d67-815b-ac7cae256d3e",
    description: "Learned the basics of Git version control and workflows.",
    keySkills: [
      "Git Basics",
      "Branching & Merging",
      "Commit & Push",
      "Collaboration with Git",
    ],
  },
  {
    icon: "🟢",
    title: "OpenShift 4",
    institution: "KodeKloud",
    year: "2025",
    status: "Active",
    level: "Intermediate",
    url: "https://learn.kodekloud.com/certificate/18642a09-0d7c-499d-8dd8-bcf10fa88ea4",
    description: "Gained hands-on experience with deploying and managing applications on OpenShift 4.",
    keySkills: [
      "OpenShift Deployment",
      "Container Management",
      "CI/CD Integration",
      "Cluster Management",
    ],
  },
  {
    icon: "⚙️",
    title: "GitOps with ArgoCD",
    institution: "kodekloud",
    year: "2024",
    status: "Active",
    level: "Intermediate",
    url: "https://learn.kodekloud.com/certificate/2D0D59264456-2DF639B82AE7-2D0D52F33408",
    description: "Mastered GitOps practices for continuous deployment using ArgoCD.",
    keySkills: [
      "GitOps Principles",
      "ArgoCD Configuration",
      "Continuous Delivery",
      "Kubernetes Integration",
    ],
  },
  {
    icon: "⚙️",
    title: "GitLab CI/CD: Architecting, Deploying, and Optimizing Pipelines",
    institution: "KodeKloud",
    year: "2024",
    status: "Completed",
    level: "Intermediate",
    url: "https://learn.kodekloud.com/certificate/e1661c52-270e-46ca-b5bf-182f01a6e0e8",
    description: "Mastering GitLab CI/CD for efficient pipeline automation and optimization.",
    keySkills: [
      "Pipeline Architecture",
      "CI/CD Automation",
      "Optimization & Monitoring",
      "Self-Managed Runners",
    ],
  },
  {
    icon: "☸️",
    title: "Terraform Basics Training Course",
    institution: "KodeKloud",
    year: "2024",
    status: "Active",
    level: "Advanced",
    url: "https://learn.kodekloud.com/certificate/19b35371-1420-4dd6-ba0f-14cec2ac4be5",
    description: "Hands-on learning of Terraform for Infrastructure as Code and resource management.",
    keySkills: [
      "Terraform CLI",
      "Resource Provisioning",
      "State Management",
      "Modules & Workspaces",
    ],
  },
  {
    icon: "☁️",
    title: "Intro to AWS Data Pipeline",
    institution: "AWS Training",
    year: "2024",
    status: "Completed",
    level: "Beginner",
    url: "https://learn.kodekloud.com/certificate/ca42687d-9a22-4ed4-9609-324f87ae415f",
    description: "Understanding AWS Data Pipeline concepts for data workflow automation.",
    keySkills: [
      "AWS Data Pipeline Basics",
      "Workflow Automation",
      "Data Processing",
      "AWS Services Integration",
    ],
  },
  {
    icon: "☸️",
    title: "Introduction to Kubernetes",
    institution: "Udemy",
    year: "2023",
    status: "Completed",
    level: "Beginner",
    url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzQyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNTA0MzI0OV8xNzEyOTUwNzUyLnBuZyIsInVzZXJuYW1lIjoiYWNob3VyaSBtYWxlayAifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fdashboard%2Fcertificate&%24web_only=true&_branch_match_id=1273020210134211979&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FV986pyikvdbT08kyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUA5FQ%2Fpz8AAAA%3D",
    description: "Introduction to Kubernetes components and containerized app management.",
    keySkills: [
      "Kubernetes Architecture",
      "Pods & Services",
      "Deployments",
      "Cluster Management",
    ],
  },
  {
    icon: "🛠️",
    title: "Getting Started with Jenkins",
    institution: "Simplilearn",
    year: "2024",
    status: "Completed",
    level: "Advanced",
    url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzM5IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNTEwMjkxOV8xNzE0NDkzMTg5LnBuZyIsInVzZXJuYW1lIjoiQWNob3VyaSBNYWxlayJ9&utm_source=shared-certificate",
    description: "Introduction to Jenkins for continuous integration and delivery.",
    keySkills: [
      "Jenkins Installation",
      "Pipeline Setup",
      "Plugin Management",
      "CI/CD Fundamentals",
    ],
  },
  {
  icon: "🛠️",
  title: "Getting Started with Ansible",
  institution: "Simplilearn",
  year: "2024",
  status: "Completed",
  level: "Beginner",
  url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzQwIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfMzY3ODk3NF8xNjU5OTkxMDEwLnBuZyIsInVzZXJuYW1lIjoiTWFsZWsgQWNob3VyaSJ9…",
  description: "Successfully completed 'Getting Started with Ansible' course on Simplilearn.",
  keySkills: [
    "Ansible Basics",
    "Automation Playbooks",
    "Configuration Management",
    "DevOps Toolchain"
  ],
},

  {
    icon: "🤖",
    title: "Artificial Intelligence on Microsoft Azure",
    institution: "Microsoft Learn",
    year: "2023",
    status: "Completed",
    level: "Advanced",
    url: "https://www.coursera.org/account/accomplishments/verify/NF4T4QRA6JYY?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    description: "Understanding AI services available on the Azure platform.",
    keySkills: [
      "Azure AI Services",
      "Machine Learning",
      "Cognitive Services",
      "Data Science Basics",
    ],
  },
];


const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-indigo-600 dark:text-indigo-400 text-center">
          Professional Certifications
        </h2>
        <p className="text-center mb-12 text-lg text-gray-600 dark:text-gray-400">
          Key milestones in my continuous learning journey
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="text-4xl">{cert.icon}</div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">
                    {cert.institution} • {cert.year}
                  </p>

                  {/* Badges séparés pour status et level */}
                  <div className="flex space-x-2 mt-1">
                    <div
                      className={`inline-block px-3 py-1 text-xs rounded-full font-semibold ${
                        statusColors[cert.status] || "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {cert.status}
                    </div>
                    <div
                      className={`inline-block px-3 py-1 text-xs rounded-full font-semibold ${
                        levelColors[cert.level] || "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {cert.level}
                    </div>
                  </div>
                </div>
              </div>

              <p className="mb-3 text-gray-700 dark:text-gray-300 flex-grow">
                {cert.description}
              </p>

              <h4 className="font-semibold mb-1 text-indigo-600 dark:text-indigo-400">
                Key Skills
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 mb-4">
                {cert.keySkills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>

              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto inline-block px-4 py-2 rounded-md text-sm font-semibold text-center ${
                  buttonColors[idx % buttonColors.length]
                }`}
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-2">🎓</div>
            <p className="text-3xl font-bold">4</p>
            <p className="text-sm">Active Certifications</p>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-2">⏳</div>
            <p className="text-3xl font-bold">2</p>
            <p className="text-sm">In Progress</p>
          </div>
          <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-2">📅</div>
            <p className="text-3xl font-bold">2025</p>
            <p className="text-sm">Latest Achievement</p>
          </div>
          <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-2">📈</div>
            <p className="text-3xl font-bold">85%</p>
            <p className="text-sm">Learning Progress</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
