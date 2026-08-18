export const PERSONAL_INFO = {
  name: "Yashvi Shah",
  location: "Ahmedabad, India",
  phone: "+91 91060 60400",
  email: "yashvishah991@gmail.com",
  linkedin: "https://linkedin.com/in/yashvi-shah-3a1915174",
  role: "Full-Stack Developer",
  experience: "5+ years",
  tagline: "Building reliable, scalable web applications.",
  cta: "Let's talk.",
};

export const PROFESSIONAL_SUMMARY = `I am a Senior Full-Stack Engineer with over 5 years of specialized experience in designing, developing, and scaling enterprise-grade web applications. My technical foundation spans across the modern JavaScript ecosystem (Node.js, TypeScript, Next.js) and robust backend architectures (Laravel, PostgreSQL).

Throughout my career, I have successfully engineered high-availability REST APIs, complex multi-tenant SaaS platforms, and secure workflow automations. I am deeply focused on writing clean, maintainable code, optimizing database performance for high-volume transactions, and delivering reliable software architectures that drive measurable business value.`;

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
  },
  {
    title: "Domain Expertise",
    skills: ["REST API Design", "Database Optimization", "Business Automation", "CRM & ERP Development", "Payment Gateways", "System Architecture"]
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
    title: "Rewolk Physio Clinic",
    subtitle: "Full-stack Next.js, SEO Optimization, Appointment Booking",
    description: "Developed a comprehensive, SEO-optimized clinic website using Next.js. Built a modern, responsive UI showcasing physiotherapy services, treatments, and client testimonials. Integrated an intuitive appointment booking system and automated patient inquiries to streamline clinic operations.",
    image: "https://image.thum.io/get/width/1200/crop/800/https://www.rewolkphysio.co.uk/",
    tech: ["Next.js", "React", "Tailwind CSS", "SEO", "REST APIs"],
    features: [
      "Appointment Booking",
      "Service Portfolios",
      "SEO Optimization",
      "Responsive Design",
      "Patient Testimonials",
      "Contact Forms"
    ],
    challenge: "Building a fast-loading, highly visible local healthcare website with integrated appointment scheduling.",
    solution: "Leveraged Next.js Server-Side Rendering (SSR) for superior SEO performance and built a streamlined UI for patient bookings.",
    results: "Increased local online visibility and automated the clinic's initial appointment scheduling workflow.",
    links: [
      { label: "Web Link", url: "https://www.rewolkphysio.co.uk/" }
    ]
  },
  {
    title: "BizzPlus CRM & Real Estate Platform",
    subtitle: "Node.js, PostgreSQL, Angular, REST APIs, JSONB",
    description: "Developed a multi-tenant CRM tailored for the real estate sector, enabling isolated data management. Built a dynamic form builder and integrated strict role-based access control along with audit logging. Created an automated lead-property matching algorithm and supported bulk data operations. Implemented communication automations using WhatsApp, Email, and Facebook Lead Ads.",
    image: "/images/realpluscrm.png",
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
    results: "Enabled scalable CRM deployment for real estate agents with streamlined lead management and automation.",
    links: [
      { label: "Web Link", url: "https://realpluscrm.com/" },
      { label: "App Link", url: "https://play.google.com/store/apps/details?id=com.app.realplus.crm&hl=en_IN" }
    ]
  },

  {
    title: "JITO Matrimony Platform",
    subtitle: "High-Traffic Matrimonial Application & Admin Panel",
    description: "Developed a scalable matrimonial platform serving over 10,000+ active users. Engineered advanced matchmaking algorithms, secure profile verification workflows, and a comprehensive admin panel for community management. Integrated real-time notifications and payment gateways for premium memberships.",
    image: "/images/workspace.png",
    tech: ["Node.js", "PostgreSQL", "REST APIs", "Payment Integrations"],
    features: [
      "Advanced Matchmaking",
      "Profile Verification",
      "Admin Dashboard",
      "Real-time Chat",
      "Premium Memberships",
      "Payment Gateway"
    ],
    challenge: "Building a scalable matchmaking engine capable of handling high-volume traffic and complex search filters securely.",
    solution: "Implemented optimized database indexing and robust REST APIs to ensure fast and accurate profile recommendations.",
    results: "Successfully launched with 10,000+ app downloads, creating a reliable and secure matrimonial ecosystem.",
    links: [
      { label: "Web Link", url: "https://jitomatrimony.in/" },
      { label: "App Link", url: "https://play.google.com/store/apps/details?id=io.jito.jmap&pcampaignid=web_share" }
    ]
  },
  {
    title: "Shree Shubham Trust Management System",
    subtitle: "Node.js, Node Canvas, SMS/WhatsApp Automations",
    description: "Built an end-to-end system featuring membership administration, Aadhaar verification, and payment tracking. Developed financial logic for commission calculations across large-scale trust operations. Implemented automated certificate generation using Node Canvas to dynamically render documents. Integrated SMS and WhatsApp pipelines to trigger instant notifications for trust members.",
    image: "/images/workspace.png",
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
    results: "Streamlined administration and membership communication with automated SMS and WhatsApp pipelines.",
    links: [
      { label: "Web Link", url: "https://app.shubhamtrust.com/login" },
      { label: "App Link", url: "https://play.google.com/store/apps/details?id=com.app.shubhamtrust&hl=en_IN" }
    ]
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
