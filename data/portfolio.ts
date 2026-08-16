export const PERSONAL_INFO = {
  name: "Yashvi Shah",
  location: "Ahmedabad, India",
  phone: "+91 91060 60400",
  email: "yashvishah991@gmail.com",
  linkedin: "https://linkedin.com/in/yashvi-shah-3a1915174",
  role: "Full-Stack Developer",
  experience: "5+ years",
  tagline: "Building scalable, reliable, performance-focused web applications.",
  cta: "Let's build something reliable and scalable.",
};

export const PROFESSIONAL_SUMMARY = `Full-Stack Developer with 5+ years of experience building web applications using Node.js, TypeScript, Next.js, Laravel, and PostgreSQL. Experienced in developing scalable REST APIs, JWT authentication, role-based access control (RBAC), and workflow automation. Proficient in optimizing database performance and integrating third-party systems like payment gateways and ERPs. Focused on writing clean, maintainable code to deliver reliable software solutions.`;

export const SKILLS_CATEGORIES = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "PHP 8"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Laravel", "CodeIgniter", "NestJS (Familiar)"]
  },
  {
    title: "Frontend",
    skills: ["Next.js", "Angular"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "Redis (Basic)", "Supabase (Basic)", "Query Optimization", "JSONB"]
  },
  {
    title: "Authentication",
    skills: ["JWT", "Role-Based Access Control (RBAC)", "OAuth2 (Basic)"]
  },
  {
    title: "Architecture",
    skills: ["Multi-Tenant Architecture", "MVC", "Microservices (Basic)"]
  },
  {
    title: "Integrations",
    skills: ["Tally ERP", "Twilio", "MSG91", "Facebook Lead Ads", "Razorpay", "Stripe", "PayPal"]
  },
  {
    title: "DevOps & Cloud",
    skills: ["Queue Jobs", "Cron Jobs", "Docker (Basic)", "Webhooks"]
  },
  {
    title: "Tools",
    skills: ["Postman", "Ubuntu CLI", "Jira", "VS Code", "GrapesJS", "Chart.js", "PDFKit", "Node Canvas", "SheetJS"]
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub", "GitLab", "Bitbucket", "GitFlow", "CI/CD (Basic)"]
  }
];

export const EXPERIENCE = [
  {
    role: "Full-Stack Developer",
    company: "CodExalters Techlabs",
    duration: "Sept 2024 - Present",
    description: "Developed CRM platforms and business automation applications using Node.js, TypeScript, Next.js, and PostgreSQL. Designed secure REST APIs with JWT authentication, RBAC, and reporting modules. Built backend services handling 30,000+ daily API requests, improving application performance by 35%. Implemented queue jobs and cron jobs for automated workflows and third-party integrations. Developed a full-stack Next.js application handling dynamic forms, data import/export, and contact management. Tuned PostgreSQL database queries to support high-volume business operations.",
  },
  {
    role: "Laravel Developer",
    company: "Latitude Technolabs Pvt. Ltd.",
    duration: "Feb 2023 - June 2024",
    description: "Developed accounting and business management applications using Laravel, PHP, MySQL, and REST APIs. Integrated Tally ERP with custom accounting modules to automate voucher processing and reduce manual data entry. Built authentication systems, reporting engines, and workflow management features for enterprise clients. Optimized database queries to improve application performance for large transaction datasets. Implemented payment gateway integrations including Razorpay, Stripe, and PayPal.",
  },
  {
    role: "PHP Developer",
    company: "Sinon-Tech Pvt. Ltd.",
    duration: "May 2021 - Jan 2023",
    description: "Built and maintained business process automation platforms using Laravel, CodeIgniter, and core PHP. Developed robust REST APIs and secure authentication modules for database-driven web applications. Collaborated with frontend teams to integrate MySQL databases with Angular interfaces. Contributed to database schema design, system debugging, query optimization, and application deployment. Maintained existing applications, ensuring system stability while developing new performance improvements.",
  }
];

export const PROJECTS = [
  {
    title: "BizzPlus CRM & Real Estate Platform",
    subtitle: "Node.js, PostgreSQL, Angular, REST APIs, JSONB",
    description: "Developed a multi-tenant CRM tailored for the real estate sector, enabling isolated data management. Built a dynamic form builder and integrated strict role-based access control along with audit logging. Created an automated lead-property matching algorithm and supported bulk data operations. Implemented communication automations using WhatsApp, Email, and Facebook Lead Ads.",
    image: "/images/crm_mockup.png", // Using the existing image placeholder
    tech: ["Node.js", "PostgreSQL", "Angular", "REST APIs", "JSONB"],
    features: [
      "Multi-tenant Architecture",
      "Dynamic Form Builder",
      "Lead-Property Matching",
      "Bulk Data Operations",
      "RBAC & Audit Logging",
      "Communication Automations"
    ],
    challenge: "Managing multi-tenant data securely while handling automated lead-property matching operations.",
    solution: "Designed isolated data architecture with strict RBAC, and implemented a matching algorithm backed by JSONB fields.",
    results: "Enabled scalable CRM deployment for real estate agents with streamlined lead management and automation."
  },
  {
    title: "AtHeal Hospital Management System",
    subtitle: "Node.js, REST APIs, Database Optimization, RBAC",
    description: "Built management modules for hospital administration, empowering doctors, patients, and staff through secure access control. Developed REST APIs to serve as the backend for web interfaces and mobile applications. Implemented onboarding workflows, real-time notifications, dynamic forms, and analytics dashboards. Designed database schemas to ensure reliability for sensitive healthcare data.",
    image: "/images/erp_mockup.png",
    tech: ["Node.js", "REST APIs", "Database Optimization", "RBAC"],
    features: [
      "Hospital Administration",
      "Secure Access Control",
      "Onboarding Workflows",
      "Real-time Notifications",
      "Dynamic Forms",
      "Analytics Dashboards"
    ],
    challenge: "Handling sensitive healthcare data securely while providing real-time analytics and notifications.",
    solution: "Implemented robust RBAC with optimized database schemas for fast, reliable, and secure API responses.",
    results: "Delivered a comprehensive and reliable administration system for hospital workflows."
  },
  {
    title: "Uthereal Platform (Next.js)",
    subtitle: "Next.js, Frontend & Backend Development, API Integrations",
    description: "Developed a full-stack web application leveraging Next.js for client-side and server-side logic. Built user authentication pipelines, interactive forms, and comprehensive contact management features. Implemented flexible data import/export modules and integrated automated business workflows. Improved application performance and responsive design for a better user experience.",
    image: "/images/ecommerce_mockup.png",
    tech: ["Next.js", "Frontend", "Backend", "API Integrations"],
    features: [
      "Full-stack Next.js App",
      "Authentication Pipelines",
      "Interactive Forms",
      "Contact Management",
      "Data Import/Export",
      "Automated Workflows"
    ],
    challenge: "Creating a high-performance full-stack application with complex interactive forms and workflow automation.",
    solution: "Leveraged Next.js capabilities for both client and server-side logic to ensure seamless data flow and performance.",
    results: "Improved application performance and responsive design, delivering a superior user experience."
  },
  {
    title: "Shree Shubham Trust Management System",
    subtitle: "Node.js, Node Canvas, SMS/WhatsApp Automations",
    description: "Built an end-to-end system featuring membership administration, Aadhaar verification, and payment tracking. Developed financial logic for commission calculations across large-scale trust operations. Implemented automated certificate generation using Node Canvas to dynamically render documents. Integrated SMS and WhatsApp pipelines to trigger instant notifications for trust members.",
    image: "/images/attendance_mockup.png",
    tech: ["Node.js", "Node Canvas", "SMS/WhatsApp", "PostgreSQL"],
    features: [
      "Membership Administration",
      "Aadhaar Verification",
      "Payment Tracking",
      "Commission Calculations",
      "Automated Certificates",
      "Instant Notifications"
    ],
    challenge: "Managing large-scale trust operations with complex commission calculations and dynamic document rendering.",
    solution: "Engineered scalable financial logic and utilized Node Canvas for fast, dynamic certificate generation.",
    results: "Streamlined administration and membership communication with automated SMS and WhatsApp pipelines."
  }
];

export const EDUCATION = [
  {
    degree: "M.Sc. (Computer Applications & IT)",
    institution: "K.S. School of Business Management, Gujarat University",
    year: "2020",
    score: "79%"
  },
  {
    degree: "B.Sc. (Computer Applications & IT)",
    institution: "K.S. School of Business Management, Gujarat University",
    year: "2018",
    score: "72%"
  },
  {
    degree: "H.S.C.",
    institution: "Navchetan High School, Gujarat Board",
    year: "2015",
    score: "83%"
  },
  {
    degree: "S.S.C.",
    institution: "Navchetan High School, Gujarat Board",
    year: "2013",
    score: "76.5%"
  }
];

export const STRENGTHS = [
  {
    title: "Problem Solving",
    description: "Strong analytical problem-solving and debugging skills.",
  },
  {
    title: "Adaptability",
    description: "Quick learner, adaptable to new technologies and modern frameworks.",
  },
  {
    title: "Clean Code",
    description: "Focus on writing clean code and performance optimization.",
  },
  {
    title: "Communication",
    description: "Effective communicator in cross-functional team collaborations.",
  },
  {
    title: "Ownership",
    description: "Ownership mindset with a record of on-time project delivery.",
  }
];
