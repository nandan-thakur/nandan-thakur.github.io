import { ProfileData } from './types';

export const profileData: ProfileData = {
  name: "Nandan Thakur",
  handle: "Nandan Thakur",
  titles: ["Software Engineer III", "Full Stack Developer", "Microservices Architect"],
  location: "Bengaluru, India",
  summary: "Software Engineer with 7+ years of experience building reliable, scalable systems across fintech, legal tech, and enterprise platforms. Currently at American Express working on frontend and backend services, API design, microservice modernization, and early integrations of GenAI to streamline engineering and operations workflows. Proven track record of delivering high-impact solutions across Mphasis, Thomson Reuters, and American Express.",
  socials: [
    { name: "Email", url: "nandanthakur.in@gmail.com", badgeUrl: "https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" },
    { name: "LinkedIn", url: "https://linkedin.com/in/nandan-thakur", badgeUrl: "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" },
    { name: "GitHub", url: "https://github.com/nandan-thakur", badgeUrl: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" }
  ],
  currentWork: {
    company: "American Express",
    role: "Software Engineer III - Global Tech & Commercial Data",
    period: "Present",
    stats: [
      { label: "Fintech Experience", value: "Current", icon: "https://img.shields.io/badge/Fintech-Current-success?style=flat-square&logo=stripe" },
      { label: "Microservices", value: "Modernization", icon: "https://img.shields.io/badge/Microservices-Modernization-blue?style=flat-square&logo=docker" },
      { label: "GenAI Integration", value: "Early Stage", icon: "https://img.shields.io/badge/GenAI-Early_Stage-purple?style=flat-square&logo=openai" },
      { label: "API Design", value: "Full Stack", icon: "https://img.shields.io/badge/API_Design-Full_Stack-orange?style=flat-square&logo=api" }
    ],
    description: [
      "Building reliable, scalable systems across fintech, legal tech, and enterprise platforms.",
      "Working on frontend and backend services with modern API design principles.",
      "Leading microservice modernization initiatives to improve system architecture.",
      "Integrating GenAI technologies to streamline engineering and operations workflows.",
      "Developing solutions that handle high-volume transactions with enterprise-grade reliability."
    ]
  },
  certifications: [
    { name: "Google Cloud Fest Hackathon - 2nd Runner Up", issuer: "Google Cloud", date: "2022", badgeUrl: "https://img.shields.io/badge/Google_Cloud_Hackathon-2nd_Runner_Up-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" },
    { name: "Mphasis Hackathon - 3rd Place", issuer: "Mphasis", date: "2021", badgeUrl: "https://img.shields.io/badge/Mphasis_Hackathon-3rd_Place-0077B5?style=for-the-badge&logo=mphasis&logoColor=white" }
  ],
  achievements: [
    "GenAI Integration - Early adopter of Generative AI technologies to streamline engineering and operations workflows at American Express",
    "Microservice Modernization - Leading initiatives to modernize legacy systems with modern architecture patterns",
    "Scaled Legal Document Processing - Built ingestion pipeline handling 5,000+ EU documents daily with 40% latency reduction at Thomson Reuters",
    "AI Chatbot Development - Created 50+ AI-driven chatbots across healthcare, insurance, and HR domains at Mphasis",
    "Healthcare Portal Development - Built Medicaid telehealth portal with OCR-driven PDF-to-FHIR pipeline at Mphasis",
    "High-Volume Systems - Building reliable, scalable systems that handle enterprise-grade transaction volumes"
  ],
  projects: [
    {
      title: "Fintech Platform Modernization",
      url: "https://americanexpress.com",
      description: "Leading microservice modernization initiatives to improve system architecture and performance. Building reliable, scalable systems that handle high-volume transactions with enterprise-grade reliability. Implementing modern API design principles for frontend and backend services.",
      techStack: ["Java", "Vert.X", "React.js", "Redux", "Docker", "Kubernetes", "Microservices", "Microfrontends", "REST APIs", "Serverless Functions"]
    },
    {
      title: "EU/UK Legal Document Ingestion Pipeline",
      url: "https://content.next.westlaw.com/practical-law/global/countries/european-union",
      description: "Built a scalable ingestion pipeline processing over 5,000 legal documents daily, reducing end-to-end latency by 40% and ensuring real-time availability in Westlaw Legal Application. Architected microservices-based backend using Spring Boot for independent scaling of ingestion, search, and metadata services.",
      techStack: ["Java", "Spring Boot", "Python", "MongoDB", "PostgreSQL", "AWS", "RabbitMQ", "Jenkins", "GitHub Actions"]
    },
    {
      title: "Cognitive Guru - AI Chatbot Development Platform",
      url: "https://www.mphasis.com/home/services/cognitive/cognitive-guru-solution.html",
      description: "Developed and launched 50+ AI-driven chatbots across healthcare, insurance, and HR domains, integrating Microsoft LUIS NLP to automate customer queries and achieving 30% reduction in support tickets. Engineered a Python-based indexing algorithm for 1M+ test-case records, cutting average query latency by 60%.",
      techStack: ["Java", "Spring Boot", "Python", "MongoDB", "PostgreSQL", "Azure Bot Framework", "React.js"]
    },
    {
      title: "Cognitive Quality Engineering",
      url: "https://www.mphasis.com/home/industries/hi-tech/mphasis-cognitive-quality-engineering.html",
      description: "Engineered a Python based indexing algorithm for 1 M+ test-case records, cutting average query latency by 60% and enabling QA teams to retrieve cases instantly",
      techStack: ["React.js", "Spring Boot", "Python", "Pandas", "NumPy", "Docker"]
    },
  ],
  skills: [
    { name: "Java", category: "Language", badgeUrl: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" },
    { name: "Python", category: "Language", badgeUrl: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
    { name: "JavaScript", category: "Language", badgeUrl: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
    { name: "TypeScript", category: "Language", badgeUrl: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" },
    { name: "Node.js", category: "Language", badgeUrl: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" },
    { name: "Spring Boot", category: "Framework", badgeUrl: "https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" },
    { name: "React.js", category: "Framework", badgeUrl: "https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=black" },
    { name: "Spring Cloud", category: "Framework", badgeUrl: "https://img.shields.io/badge/Spring_Cloud-6DB33F?style=for-the-badge&logo=springcloud&logoColor=white" },
    { name: "GraphQL", category: "Framework", badgeUrl: "https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" },
    { name: "Kubernetes", category: "DevOps", badgeUrl: "https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" },
    { name: "Docker", category: "DevOps", badgeUrl: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
    { name: "AWS", category: "Cloud", badgeUrl: "https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" },
    { name: "Azure", category: "Cloud", badgeUrl: "https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white" },
    { name: "MongoDB", category: "Database", badgeUrl: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" },
    { name: "PostgreSQL", category: "Database", badgeUrl: "https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" },
    { name: "Redis", category: "Database", badgeUrl: "https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" },
    { name: "Kafka", category: "Messaging", badgeUrl: "https://img.shields.io/badge/Apache_Kafka-000000?style=for-the-badge&logo=apachekafka&logoColor=white" },
    { name: "OpenAI", category: "AI", badgeUrl: "https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" }
  ],
  specializations: [
    "Fintech Platform Development",
    "Microservices Architecture & Modernization",
    "GenAI Integration & Automation",
    "Enterprise API Design & Development",
    "Full-Stack Development (Java/React)",
    "Cloud Platforms - AWS & Azure",
    "High-Volume Transaction Systems",
    "DevOps & CI/CD Automation"
  ],
  interests: [
    "Building scalable SAAS platforms",
    "Automation and productivity tools",
    "Security research",
    "AI integration and working with automation tools",
    "Chrome extensions and browser tools",
    "Anything Tech that has Research Involved :)"
  ],
  openSource: {
    projects: {
      title: "Github Projects",
      subtitle: "Contributions to the community",
      categories: [
        {
          "name": "AI & LLM Applications",
          "items": [
            {
              "name": "Gemini AI Chat",
              "url": "https://github.com/nandan-thakur/gemini-ai",
              "description": "Streamlit chat application powered by Google's Gemini Pro and Vision models"
            },
            {
              "name": "GenAI Cold Email Generator",
              "url": "https://github.com/nandan-thakur/genai-cold-email-generator",
              "description": "Cold email generator for services companies using Groq, LangChain, and Streamlit"
            },
            {
              "name": "Log Classification",
              "url": "https://github.com/nandan-thakur/log-classification",
              "description": "Hybrid classification framework using Regex, Sentence Transformers, and LLMs"
            }
          ]
        },
        {
          "name": "Web Applications",
          "items": [
            {
              "name": "Bharat Sathi",
              "url": "https://github.com/nandan-thakur/bharat-sathi",
              "description": "Next.js application for accessing and visualizing government data from data.gov.in APIs"
            },
            {
              "name": "FinTrack",
              "url": "https://github.com/nandan-thakur/fintrack",
              "description": "Personal finance manager built with React and Firebase for tracking income and expenses"
            },
            {
              "name": "Salary Tax Calculator",
              "url": "https://github.com/nandan-thakur/salary-tax-calculator",
              "description": "React application to calculate and compare Indian income tax under Old vs New regimes"
            },
            {
              "name": "TaskFlow",
              "url": "https://github.com/nandan-thakur/task-tracker",
              "description": "Modern task management application built with React, Vite, and Tailwind CSS"
            }
          ]
        },
        {
          "name": "Utilities & Developer Tools",
          "items": [
            {
              "name": "Google Scraper",
              "url": "https://github.com/nandan-thakur/google-scraper",
              "description": "A web scraping tool written in Go"
            },
            {
              "name": "File Flattener",
              "url": "https://github.com/nandan-thakur/file-flattener",
              "description": "Python utility to recursively extract and flatten files from nested directories"
            },
            {
              "name": "React Learning Lab",
              "url": "https://github.com/nandan-thakur/react-learning-lab",
              "description": "React + TypeScript + Vite template for experimenting with modern web development"
            }
          ]
        }
      ]
    },
  },
  images: [
     {
      title: "First Day at New Job",
      url: "/images/first-day-at-new-job.jpeg",
      source: "Amex",
      contextLink: "https://nandan-thakur.github.io"
    },
    {
      title: "Nandan at First Job",
      url: "/images/my-first-job.jpeg",
      source: "Mphasis",
      contextLink: "https://nandan-thakur.github.io"
    },
    {
      title: "First Job Outing",
      url: "/images/first-job-outing.jpeg",
      source: "Chittardurga Trip",
      contextLink: "https://nandan-thakur.github.io"
    },
    {
      title: "At My Second Job",
      url: "/images/my-second-job.jpeg",
      source: "TR",
      contextLink: "https://nandan-thakur.github.io"
    },
    {
      title: "Nandan on Going to College",
      url: "/images/me-going-college.png",
      source: "College Days",
      contextLink: "https://nandan-thakur.github.io"
    },
  ]
};
