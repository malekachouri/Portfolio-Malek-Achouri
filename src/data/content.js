// All portfolio content lives here. Edit this file to update the site; components only handle layout.

export const profile = {
  name: "Achouri Malek",
  title: "AI DevOps & Cloud Engineer",
  location: "Tunis, Tunisia",
  email: "malakachouri200@gmail.com",
  summary:
    "I automate how software and infrastructure are built, deployed and monitored, and I dig into production issues until they make sense. Hands-on with AWS, Terraform, Kubernetes and CI/CD in production for international clients. Now focused on making AI agents reliable in production: testable, observable and safe for real users.",
  about: [
    "I'm a Cloud & DevOps engineer with a telecommunications engineering degree (Networks, Infrastructure & Cloud) from ENET'Com Sfax. Today I design and run AWS infrastructure with Terraform for clients in the UK, France, Belgium and Italy: multi-environment IaC, DevSecOps pipelines, secure networking and centralized monitoring.",
    "Before that I built a distributed OpenStack private cloud with Ceph and Kubernetes at KPIT, and GitOps delivery with Argo CD at Sofrecom. My current focus is where platform engineering meets AI: running LLM agents and MCP servers with the same rigor as any production workload, with tests, CI gates, least-privilege access and metrics.",
  ],
  resumes: [
    { label: "English", lang: "EN", href: "/cv/Achouri_Malek_AI_DevOps_Cloud_Engineer_EN.pdf" },
    { label: "Français", lang: "FR", href: "/cv/Achouri_Malek_Ingenieure_AI_DevOps_Cloud_FR.pdf" },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/achouri-malek/",
    gitlab: "https://gitlab.com/malekachouri025",
    github: "https://github.com/malekachouri",
  },
};

export const metrics = [
  { value: "99.9%", label: "availability on a private OpenStack cloud" },
  { value: "−40%", label: "deployment time with Kolla-Ansible & Terraform" },
  { value: "30–40%", label: "public-cloud spend cut" },
  { value: "−50%", label: "incident detection time with Prometheus alerting" },
];

export const experience = [
  {
    role: "Cloud & DevOps Engineer",
    company: "Neoshore Tunisie",
    client: "Hilbert Investment Solutions",
    period: "01/2026 – Present",
    location: "Tunis, Tunisia",
    current: true,
    summary:
      "Cloud & DevOps engineer on the AWS platform of a financial-services client with teams and customers in the UK, France, Belgium and Italy. I build and run the infrastructure as code, the delivery pipelines, the network and the day-to-day operations.",
    impact: [
      { value: "40", label: "reusable Terraform modules" },
      { value: "15", label: "Terraform environments" },
      { value: "9", label: "workload accounts (FR / UK / BE)" },
      { value: "0", label: "long-lived CI credentials" },
    ],
    groups: [
      {
        title: "Infrastructure as Code",
        items: [
          "Built the client's multi-account AWS infrastructure in Terraform: AWS Organizations and 9 workload accounts across France, the UK and Belgium (Production, Staging, Sandbox).",
          "Wrote 40 reusable Terraform modules, including one parameterized module that gives every workload account the same baseline (VPC, logging, budgets, deploy role).",
          "Set up the Terraform remote state backend, separate environments (Development, Staging, Production) and scheduled drift detection to keep them consistent.",
        ],
      },
      {
        title: "CI/CD & GitOps",
        items: [
          "Built Bitbucket Pipelines for the infrastructure: format and validate, Terraform tests, TFLint, Checkov, cost estimates with Infracost, plan review on every pull request and manual approval before apply.",
          "Authenticated pipelines to AWS with OIDC, so there are no stored access keys. Production changes go only through Git.",
          "Industrialized application CI/CD pipelines with automated testing, security scanning and zero-downtime deployments, and containerized applications with Docker and Docker Compose.",
        ],
      },
      {
        title: "Networking",
        items: [
          "Built the hub network: Transit Gateway, VPCs with IPAM, DNS, AWS Network Firewall, and Site-to-Site / SD-WAN VPN (Cato Networks).",
          "Configured Application Load Balancers, WAF and Route 53, and led the diagnosis and resolution of critical production connectivity incidents.",
          "Deployed SFTP infrastructure and Multi-AZ Amazon RDS databases for clients in Belgium and Italy.",
        ],
      },
      {
        title: "Operations & reliability",
        items: [
          "Set up monitoring and audit logging with CloudWatch and CloudTrail for faster troubleshooting and full traceability.",
          "Built AWS Backup with cross-account and cross-region copies and automated restore tests, with RTO/RPO objectives defined from the design stage.",
          "Automated Linux patching and hardening with SSM and Ansible, and wrote Python Lambdas for operations, such as stopping sandbox instances when their budget is exceeded.",
        ],
      },
      {
        title: "Security skills gained",
        items: [
          "Worked alongside the client's security engineer to implement security guardrails and threat detection as code (SCPs, GuardDuty, Security Hub).",
          "Gained hands-on experience of compliance requirements such as DORA in a regulated financial environment.",
        ],
      },
    ],
    stack: [
      "AWS", "Terraform", "AWS Organizations", "Bitbucket Pipelines", "OIDC", "Docker", "Ansible", "Python / Lambda",
      "Transit Gateway", "VPC / IPAM", "Route 53", "ALB / WAF", "RDS", "AWS Backup", "CloudWatch", "SSM",
    ],
  },
  {
    role: "Cloud & DevOps Engineer",
    company: "KPIT Technologies",
    subtitle: "End-of-studies project: distributed private cloud with OpenStack for resilient apps on Kubernetes",
    period: "02/2025 – 07/2025",
    location: "Sfax, Tunisia",
    summary:
      "Designed and delivered a production-grade private cloud as an alternative to public-cloud hosting for containerized applications, from bare-metal nodes to monitored Kubernetes workloads.",
    impact: [
      { value: "−40%", label: "deployment time" },
      { value: "30–40%", label: "public-cloud spend cut" },
      { value: "99.9%", label: "availability" },
      { value: "100%", label: "automated provisioning" },
    ],
    groups: [
      {
        title: "Private cloud",
        items: [
          "Architected a multi-node OpenStack cloud with Kolla-Ansible, cutting deployment time by 40%.",
          "Built Ceph distributed storage for scalable, redundant and fault-tolerant workloads.",
          "Made the control plane highly available with HAProxy and Keepalived, reaching 99.9% availability while cutting public-cloud spend by 30–40%.",
        ],
      },
      {
        title: "Networking & automation",
        items: [
          "Designed segmented virtual networks (VXLAN, NAT, security groups) to isolate workloads.",
          "Provisioned VMs and networks with Terraform, reaching 100% automated deployments.",
          "Integrated backing services (MongoDB, MariaDB, Memcached, RabbitMQ) for the platform.",
        ],
      },
      {
        title: "Kubernetes & observability",
        items: [
          "Ran a K3s Kubernetes cluster on OpenStack VMs for containerized applications.",
          "Centralized metrics and logs with Prometheus, Grafana, Fluentd and OpenSearch, shortening incident detection and response.",
        ],
      },
    ],
    stack: ["OpenStack", "Ceph", "Kolla-Ansible", "Terraform", "K3s", "HAProxy", "Keepalived", "VXLAN", "Prometheus", "Grafana", "Fluentd", "OpenSearch"],
  },
  {
    role: "Platform Engineer",
    company: "Sofrecom Tunisia",
    subtitle: "Argo CD dashboard development",
    period: "07/2024 – 08/2024",
    location: "Sfax, Tunisia",
    summary:
      "Brought GitOps to a development team: Git became the single source of truth for cluster state, with dashboards and alerting to see what is deployed where.",
    impact: [
      { value: "−40%", label: "deployment errors" },
      { value: "−50%", label: "incident detection time" },
    ],
    groups: [
      {
        title: "What I did",
        items: [
          "Set up a K3s cluster (tested alongside KIND and Kubeadm) and automated deployments with GitLab CI/CD and Argo CD, reducing deployment errors by 40%.",
          "Introduced a GitOps workflow that keeps cluster state in sync with Git, making releases faster and more consistent across development and testing environments.",
          "Built a custom Argo CD dashboard to follow deployments in real time.",
          "Configured monitoring and alerting with Prometheus, Grafana and Alertmanager, cutting incident detection time by 50%.",
        ],
      },
    ],
    stack: ["K3s", "KIND", "Kubeadm", "GitLab CI/CD", "Argo CD", "Prometheus", "Grafana", "Alertmanager"],
  },
  {
    role: "Cloud & DevOps Engineer",
    company: "Primatec Engineering",
    subtitle: "OpenStack cloud deployment & containerization",
    period: "06/2024 – 08/2024",
    location: "Sfax, Tunisia",
    summary: "Evaluated how to run a private cloud in-house and containerized the company's web applications.",
    impact: [{ value: "3", label: "OpenStack install methods benchmarked" }],
    groups: [
      {
        title: "What I did",
        items: [
          "Deployed a private OpenStack cloud with Packstack and benchmarked 3 installation methods (Packstack, Kolla-Ansible, DevStack) for performance, scalability and operational complexity.",
          "Containerized web applications with Docker and ran them on a Minikube cluster, simplifying local development and deployments.",
          "Wrote setup and configuration documentation to support reproducibility and knowledge transfer.",
        ],
      },
    ],
    stack: ["OpenStack", "Packstack", "Kolla-Ansible", "DevStack", "Docker", "Minikube"],
  },
  {
    role: "AI Engineer",
    company: "ATMS Lab Research Unit",
    subtitle: "Brain tumor detection with deep learning",
    period: "06/2023 – 08/2023",
    location: "Sfax, Tunisia",
    summary: "Research internship applying deep learning to medical imaging, from raw MRI scans to a tool clinicians can use.",
    groups: [
      {
        title: "What I did",
        items: [
          "Built an AI pipeline: MRI preprocessing, 3D U-Net segmentation of regions of interest, and tumor classification with VGG19, InceptionV3 and ResNet50V2 (transfer learning).",
          "Created a Flask web interface to visualize results and support medical analysis.",
        ],
      },
    ],
    stack: ["Python", "TensorFlow / Keras", "3D U-Net", "Transfer learning", "Flask"],
  },
  {
    role: "DevOps Engineer",
    company: "GENIOS",
    subtitle: "Deployment automation with Ansible",
    period: "02/2022 – 05/2022",
    location: "Mahdia, Tunisia",
    summary: "Replaced manual server setup with repeatable automation.",
    groups: [
      {
        title: "What I did",
        items: [
          "Automated multi-machine provisioning and rollout of Docker, DNS and critical services with Ansible playbooks.",
          "Standardized configuration management for consistent, repeatable deployments across servers.",
          "Reduced manual intervention and improved availability through automated, proactive maintenance.",
        ],
      },
    ],
    stack: ["Ansible", "Docker", "DNS", "Linux"],
  },
  {
    role: "Telecommunications Intern",
    company: "Tunisie Telecom",
    period: "06/2021 – 07/2021",
    location: "Sidi Bouzid, Tunisia",
    groups: [
      {
        title: "What I did",
        items: [
          "Troubleshot network issues to improve performance and reliability.",
          "Set up monitoring to detect network anomalies early.",
        ],
      },
    ],
    stack: ["TCP/IP", "SNMP", "ICMP"],
  },
];

export const featuredProjects = [
  {
    id: "project-landing-zone",
    title: "Multi-Account AWS Landing Zone",
    date: "2026 · Neoshore / Hilbert Investment Solutions",
    tagline: "The AWS platform foundation for a financial-services group in France, the UK and Belgium, fully in Terraform and delivered through Git. I owned the infrastructure code, pipelines, networking and backup, working alongside the security engineer.",
    flow: ["Pull request", "Validate · test · lint", "OIDC plan", "Approval", "Terraform apply"],
    highlights: [
      "AWS Organizations with 9 workload accounts (France / UK / Belgium × Production, Staging, Sandbox), built from 40 reusable Terraform modules and 15 environments.",
      "Bitbucket Pipelines with OIDC (no stored keys): Terraform tests, TFLint, Checkov, Infracost, plan on every pull request, manual approval, and drift detection.",
      "Hub networking with Transit Gateway, VPCs and IPAM, Network Firewall, DNS and VPN.",
      "AWS Backup with cross-account and cross-region copies and automated restore tests, plus patching with SSM. Security controls such as SCP guardrails were implemented as code together with the security engineer.",
    ],
    stats: [
      { value: "40", label: "Terraform modules" },
      { value: "15", label: "environments" },
      { value: "0", label: "stored AWS keys" },
    ],
    stack: ["AWS Organizations", "Terraform", "Bitbucket Pipelines", "OIDC", "Transit Gateway", "IPAM", "AWS Backup", "SSM", "Python", "Checkov", "Infracost"],
  },
  {
    title: "Conversational AI Agent Service",
    date: "09/2026",
    tagline: "A customer-support agent built and shipped like a production service.",
    flow: ["FastAPI", "Claude API", "Tool calls", "PostgreSQL", "Prometheus"],
    highlights: [
      "Customer-support agent in Python/FastAPI on the Claude API with tool calling (order lookup, escalation to a human) and multi-turn state in PostgreSQL. Every tool call is validated against a JSON schema.",
      "Test suite replays realistic multi-turn conversations from JSON fixtures and checks outcomes (tools called, arguments, final database state) rather than exact wording.",
      "A deterministic mock LLM runs all 23 tests in CI in about 2 seconds with no API key. The same scenarios run against the real model or a live container.",
      "GitHub Actions: tests against the built container, Trivy gate on HIGH/CRITICAL, keyless push to GHCR with OIDC-signed provenance, non-root multi-stage image.",
    ],
    stats: [
      { value: "23", label: "replay tests" },
      { value: "~2s", label: "CI test run" },
      { value: "0", label: "stored secrets" },
    ],
    stack: ["Python", "FastAPI", "Claude API", "PostgreSQL", "pytest", "Docker", "GitHub Actions", "Trivy", "Prometheus"],
  },
  {
    title: "Cloud-native GitOps Platform on AKS",
    date: "07/2026",
    tagline: "Secretless Azure platform delivered end to end through Git.",
    flow: ["Terraform", "GitHub Actions", "ACR", "Argo CD", "AKS"],
    highlights: [
      "Provisioned AKS, ACR and Key Vault with Terraform, using Azure Workload Identity for secretless authentication.",
      "GitHub Actions pipeline with multi-stage Docker builds, Trivy scanning and OIDC-based push to a private registry.",
      "Delivered with Argo CD (app-of-apps): Helm releases, ingress-nginx and cert-manager with automatic Let's Encrypt TLS.",
      "Deployed a Python MCP server on Kubernetes exposing cluster-introspection tools to an LLM agent under least-privilege RBAC.",
    ],
    stats: [
      { value: "App-of-apps", label: "GitOps pattern" },
      { value: "OIDC", label: "no stored credentials" },
      { value: "MCP", label: "LLM agent tools" },
    ],
    stack: ["Azure", "AKS", "Terraform", "Key Vault", "Argo CD", "Helm", "cert-manager", "Trivy", "MCP"],
  },
];

export const projectCategories = ["All", "Cloud & IaC", "GitOps & CI/CD", "Security", "Software", "Networking", "QA"];

export const projects = [
  {
    title: "Kubernetes Cluster Automation with Terraform",
    date: "09/2026",
    category: "Cloud & IaC",
    description:
      "One command builds a full Kubernetes cluster on KVM: Terraform creates the VMs (libvirt, cloud-init, static networking), then Ansible bootstraps it with k3s (HA), kubeadm (containerd + Calico), minikube or a pinned Kubespray release, and returns the kubeconfig.",
    stack: ["Terraform", "libvirt/KVM", "Ansible", "k3s", "kubeadm", "Kubespray", "minikube"],
    link: "https://github.com/malekachouri/terraform-k8s-cluster-automation",
  },
  {
    title: "MERN Application on Azure",
    date: "11/2025",
    category: "Cloud & IaC",
    description:
      "Containerized MERN app on AKS with Azure DevOps CI/CD and GitOps, Ansible automation, Prometheus/Grafana/Azure Monitor observability, and secrets in Key Vault with RBAC.",
    stack: ["AKS", "Docker", "Azure DevOps", "Ansible", "Key Vault", "Grafana"],
  },
  {
    title: "GitOps Automation with Azure DevOps",
    date: "10/2025 – Present",
    category: "GitOps & CI/CD",
    description:
      "Continuous delivery from code to cloud with GitOps workflows in Azure, real-time monitoring and rollback pipelines, and version-controlled IaC.",
    stack: ["Azure DevOps", "GitOps", "Kubernetes", "YAML pipelines"],
  },
  {
    title: "TunisiePara Web Application Testing",
    date: "10/2025",
    category: "QA",
    description:
      "Functional and UAT testing of an e-commerce parapharmacy platform: user stories, test cases and Gherkin scenarios for critical business workflows, plus post-deployment validation.",
    stack: ["Jira", "Xray", "Gherkin", "UAT"],
  },
  {
    title: "Terraform & Azure DevOps Automation",
    date: "09/2025",
    category: "Cloud & IaC",
    description:
      "Enterprise-grade Azure infrastructure with reusable Terraform modules, multi-environment management and Azure DevOps pipelines for Dev/Test/Prod.",
    stack: ["Terraform", "Azure", "Azure DevOps"],
  },
  {
    title: "Secure Authentication & Authorization",
    date: "11/2024 – 01/2025",
    category: "Security",
    description:
      "Authentication and authorization system with Flask and Keycloak (OIDC, OAuth2), with users and roles managed in a custom realm.",
    stack: ["Flask", "Keycloak", "OIDC", "OAuth2", "RBAC"],
  },
  {
    title: "CI/CD Automation with AWS Step Functions",
    date: "09/2024 – 01/2025",
    category: "GitOps & CI/CD",
    description: "Workflow automation with AWS Step Functions, Lambda and CloudFormation, with CI/CD integration through Boto3.",
    stack: ["Step Functions", "Lambda", "CloudFormation", "Boto3"],
  },
  {
    title: "Pharmacy Management Web Application",
    date: "10/2024 – 12/2024",
    category: "Software",
    description: "Web app with an Angular frontend and a Node.js/Express backend, MongoDB for product management and JWT authentication.",
    stack: ["Angular", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "GitOps with Argo CD",
    date: "09/2023 – 05/2024",
    category: "GitOps & CI/CD",
    description:
      "Administered Kubernetes clusters (K3s, Kubeadm, Minikube) and automated CI/CD and IaC with Argo CD and Jenkins following GitOps principles.",
    stack: ["Argo CD", "Jenkins", "K3s", "Kubeadm", "Helm"],
  },
  {
    title: "FTTH-GEPON Network Implementation",
    date: "04/2023 – 05/2023",
    category: "Networking",
    description:
      "FTTH-GEPON architecture with an LTE-2X OLT (2×64 subscribers), NTE-2C ONUs and 1×4/1×16 splitters: data and video topologies, OLT port setup and optical-loss simulation.",
    stack: ["GEPON", "OLT/ONU", "Optical budget"],
  },
  {
    title: "Sales Management System",
    date: "03/2023 – 05/2023",
    category: "Software",
    description: "Java application (Eclipse) to manage and track commercial transactions.",
    stack: ["Java", "Eclipse"],
  },
  {
    title: "Flow Optimization in Python",
    date: "02/2023 – 03/2023",
    category: "Software",
    description: "Graph algorithms for maximum-flow optimization on real-world scenarios, developed and simulated on Google Colab.",
    stack: ["Python", "Graph algorithms", "Colab"],
  },
  {
    title: "CI/CD with GitHub Actions & Kubernetes",
    date: "01/2023 – 02/2023",
    category: "GitOps & CI/CD",
    description: "CI/CD pipeline with GitHub Actions for a containerized application, with automated deployments to Kubernetes.",
    stack: ["GitHub Actions", "Docker", "Kubernetes"],
  },
  {
    title: "Kubernetes Private Cloud with OpenShift",
    date: "02/2021 – 05/2021",
    category: "Cloud & IaC",
    description: "Open-source Kubernetes platform integrating Red Hat OpenShift to build a reliable, scalable private cloud.",
    stack: ["Kubernetes", "OpenShift"],
  },
];

export const skillGroups = [
  {
    title: "AI agents & LLMs",
    items: ["Claude API (Anthropic SDK)", "Tool / function calling", "MCP", "Conversation replay testing", "Agent evaluation", "JSON-schema tool inputs", "Deep learning (CNNs, 3D U-Net)"],
  },
  { title: "Cloud platforms", items: ["AWS", "Azure", "OpenStack", "Ceph", "VMware"] },
  { title: "Containers & orchestration", items: ["Docker", "Kubernetes", "AKS", "K3s", "OpenShift", "Helm", "Kustomize"] },
  { title: "IaC & CI/CD", items: ["Terraform", "Ansible", "Argo CD", "GitLab CI/CD", "GitHub Actions", "Jenkins", "Azure DevOps", "Bitbucket"] },
  { title: "Observability", items: ["Prometheus", "Grafana", "Alertmanager", "CloudWatch", "CloudTrail", "Fluentd", "ELK", "OpenSearch"] },
  {
    title: "Networking & security",
    items: ["VPC / SG / NACLs", "Site-to-Site VPN", "WAF", "Load balancers", "HAProxy", "Keepalived", "IAM / SSM", "Keycloak", "RBAC", "cert-manager / TLS", "Trivy", "DevSecOps"],
  },
  { title: "Python & backend", items: ["Python", "FastAPI", "Flask", "pytest", "SQLAlchemy", "PostgreSQL", "REST APIs", "Bash", "PowerShell", "Node.js", "Angular", "Java"] },
  { title: "Testing & QA", items: ["Postman", "Selenium", "Jira Xray", "Gherkin (BDD)", "Manual testing"] },
];

export const certifications = [
  { title: "AI Infrastructure: LLM-D, vLLM and GPUs", issuer: "KodeKloud", year: "", url: "https://learn.kodekloud.com/learn/certificate/1e760a14-8436-41f5-a965-4009dfd99aeb" },
  { title: "Fundamentals of MLOps", issuer: "KodeKloud", year: "", url: "https://learn.kodekloud.com/learn/certificate/2865396d-2d7c-40c9-bf8a-fa57e0f92131" },
  { title: "AWS Cloud Practitioner (CLF-C02)", issuer: "Amazon Web Services", year: "" },
  { title: "DevSecOps – Kubernetes DevOps & Security", issuer: "KodeKloud", year: "2025", url: "https://learn.kodekloud.com/certificate/64740fd9-614b-4e35-afb4-121436ec17c5" },
  { title: "OpenShift 4", issuer: "KodeKloud", year: "2025", url: "https://learn.kodekloud.com/certificate/18642a09-0d7c-499d-8dd8-bcf10fa88ea4" },
  { title: "Git for Beginners", issuer: "KodeKloud", year: "2025", url: "https://learn.kodekloud.com/certificate/2bc5e007-75f7-4d67-815b-ac7cae256d3e" },
  { title: "GitOps with Argo CD", issuer: "KodeKloud", year: "2024", url: "https://learn.kodekloud.com/certificate/2D0D59264456-2DF639B82AE7-2D0D52F33408" },
  { title: "GitLab CI/CD: Architecting, Deploying, and Optimizing Pipelines", issuer: "KodeKloud", year: "2024", url: "https://learn.kodekloud.com/certificate/e1661c52-270e-46ca-b5bf-182f01a6e0e8" },
  { title: "Terraform Basics Training Course", issuer: "KodeKloud", year: "2024", url: "https://learn.kodekloud.com/certificate/19b35371-1420-4dd6-ba0f-14cec2ac4be5" },
  { title: "Introduction to AWS Data Pipeline", issuer: "KodeKloud", year: "2024", url: "https://learn.kodekloud.com/certificate/ca42687d-9a22-4ed4-9609-324f87ae415f" },
  { title: "Introduction to Containers with Docker, Kubernetes and OpenShift", issuer: "", year: "" },
  {
    title: "Getting Started with Jenkins",
    issuer: "Simplilearn",
    year: "2024",
    url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzM5IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNTEwMjkxOV8xNzE0NDkzMTg5LnBuZyIsInVzZXJuYW1lIjoiQWNob3VyaSBNYWxlayJ9&utm_source=shared-certificate",
  },
  { title: "Getting Started with Ansible", issuer: "Simplilearn", year: "2024" },
  {
    title: "Introduction to Kubernetes",
    issuer: "Simplilearn",
    year: "2023",
    url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzQyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNTA0MzI0OV8xNzEyOTUwNzUyLnBuZyIsInVzZXJuYW1lIjoiYWNob3VyaSBtYWxlayAifQ%3D%3D",
  },
  {
    title: "Artificial Intelligence on Microsoft Azure",
    issuer: "Microsoft · Coursera",
    year: "2023",
    url: "https://www.coursera.org/account/accomplishments/verify/NF4T4QRA6JYY",
  },
  { title: "CCNA1", issuer: "Cisco Networking Academy", year: "" },
];

export const education = [
  {
    degree: "Engineering degree in Telecommunications",
    focus: "Networks, Infrastructure & Cloud (RIC)",
    school: "National School of Electronics and Telecommunications of Sfax (ENET'Com)",
    period: "2022 – 2025",
    location: "Sfax, Tunisia",
  },
  {
    degree: "Bachelor's in Computer Science & Communication Technologies",
    school: "Higher Institute of Applied Sciences and Technology of Mahdia (ISSAT Mahdia)",
    period: "2019 – 2022",
    location: "Mahdia, Tunisia",
  },
];

export const award = {
  title: "1st Place – Green Tech Hackathon",
  context: "WE-SPICE Program, innovation training by TU Chemnitz & DRÄXLMAIER",
  date: "17/10/2024",
  description:
    "Our team won first place with a sustainable, tech-driven solution combining IoT and AI, competing against students from several countries.",
  images: [
    { src: "/images/green-tech-hackathon.webp", alt: "Green Tech Hackathon team on stage" },
    { src: "/images/green-tech-certificate.webp", alt: "Green Tech Hackathon first-place certificate" },
  ],
};

export const volunteering = [
  {
    role: "General Secretary",
    organization: "Microsoft Tech Club – ENET'Com",
    period: "09/2023 – 2026",
    location: "Sfax, Tunisia",
    description: "Coordinated club administration and communication with partners, and organized tech events, workshops and hackathons.",
    images: [
      { src: "/images/mstc-event-1.webp", alt: "Microsoft Tech Club event" },
      { src: "/images/mstc-event-3.webp", alt: "Microsoft Tech Club workshop" },
    ],
  },
  {
    role: "Active Member",
    organization: "IEEE ENET'Com",
    period: "09/2022 – 2026",
    location: "Sfax, Tunisia",
    description: "Organized an event on artificial intelligence and agriculture at ISSAT Mahdia: agenda, speakers and hands-on workshops.",
    images: [
      { src: "/images/ieee-event-1.webp", alt: "IEEE event on AI and agriculture" },
      { src: "/images/ieee-event-2.webp", alt: "IEEE event participants" },
    ],
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Fluent" },
  { name: "English", level: "Proficient" },
  { name: "Italian", level: "Basic" },
];
