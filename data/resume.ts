export const personal = {
  name: "Saifuddin Tipu",
  title: "Senior Software Developer",
  location: "Subang Jaya, Malaysia",
  phone: "+60 14-993 4252",
  email: "saifunimas@gmail.com",
  linkedin: "https://linkedin.com/in/saifuddintipu",
  github: "https://github.com/SaifuddinTipu",
  tagline:
    "6+ years building enterprise-grade platforms — from resolving production crises to architecting systems that serve 10,000+ users daily.",
  summary:
    "Results-driven Senior Software Developer with 6+ years of hands-on experience building and stabilizing enterprise-grade platforms under production pressure. Proven expertise resolving critical incidents—including 100% CPU crashes, memory leaks, and race conditions—across Node.js microservices serving 10,000+ concurrent users. Deep proficiency in MongoDB performance optimization, real-time WebSocket systems, and multi-platform API integrations. Combines strong technical ownership with business-focused delivery, consistently translating complex requirements into scalable, high-availability production systems.",
};

export const strengths = [
  {
    icon: "⚡",
    title: "Backend Architecture",
    summary: "NestJS · Redis · BullMQ · PostgreSQL · MongoDB",
    bullets: [
      "Event-driven microservices at scale",
      "WebSocket & real-time systems",
      "Production incident resolution",
    ],
  },
  {
    icon: "📦",
    title: "Open Source Author",
    summary: "3 npm packages · OSS contributor",
    bullets: [
      "nestjs-webhook-sender",
      "nestjs-socket-presence",
      "express-correlation-context",
      "Contributed fix to BullMQ (15k★)",
    ],
  },
  {
    icon: "🧪",
    title: "Test-First Engineering",
    summary: "Jest · Supertest · nock",
    bullets: [
      "Unit, integration & E2E coverage",
      "HTTP mocking with nock",
      "BullMQ & Redis test patterns",
    ],
  },
  {
    icon: "🚀",
    title: "Production Proven",
    summary: "6+ years · 10,000+ DAU systems",
    bullets: [
      "Zero-downtime data migrations",
      "Memory leak & CPU crisis fixes",
      "Multi-tenant SaaS platforms",
    ],
  },
];

export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

export const experience: WorkExperience[] = [
  {
    title: "Lead Software Developer",
    company: "Accordia Global Sdn Bhd",
    period: "Sep 2020 – Present",
    location: "Subang Jaya, Selangor, Malaysia",
    bullets: [
      "Lead end-to-end technical architecture for enterprise omnichannel platform integrating WhatsApp, Facebook, Twitter, LINE, and Instagram with real-time chat, automated routing, and intelligent agent assignment for 10,000+ daily active users.",
      "Diagnosed and resolved production MongoDB crisis: identified duplicate PM2 processes consuming 8GB memory; reduced CPU from 100% to <15%, restoring full platform stability.",
      "Architected and executed data archiving pipeline migrating 2M+ chats, 500K+ customers, and 1M+ social messages — 45% query performance improvement with zero downtime.",
      "Identified and fixed race conditions in chat timeout controller causing simultaneous message floods; implemented proper async timer sequencing with 5–10–15 min escalation and state management.",
      "Built campaign management system enabling marketing teams to send personalized WhatsApp templates to 5,000+ customers with scheduling, template management, and delivery tracking.",
      "Developed bidirectional CRM integrations with Zoho, Freshdesk, and Salesforce, automating ticket creation and reducing manual data entry by 80%.",
      "Deployed Angular + Node.js e-ticketing system reducing average resolution time from 24 hours to 6 hours (75% improvement).",
      "Profiled and resolved Node.js memory leaks through connection pooling optimization, orphaned WebSocket cleanup, and proactive monitoring instrumentation.",
    ],
  },
  {
    title: "Software Developer",
    company: "Neuon AI Sdn Bhd",
    period: "Dec 2018 – Aug 2020",
    location: "Kota Samarahan, Sarawak, Malaysia",
    bullets: [
      "Architected multi-tenant HR portal with corporate subdomain registration and cross-platform mobile apps (Android/iOS WebView), onboarding 15+ corporate clients for attendance management.",
      "Built industrial batching plant software (VB.NET, MSSQL) with Microsoft Sync Framework, enabling offline-first data synchronization for manufacturing environments.",
      "Developed Python REST APIs for real-time emotion detection ML pipeline, processing video streams with <100ms latency for AI research applications.",
      "Created stock monitoring and invoice management system with desktop (VB.NET) and web interfaces, automating inventory tracking for 50+ SKUs.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Science with Honors (Software Engineering)",
  university: "University Malaysia Sarawak (UNIMAS)",
  year: "2019",
  cgpa: "3.24 / 4.0",
};

export const professionalDevelopment = [
  { title: "Machine Learning", org: "AgTech AI Hackathon", year: "2019" },
  { title: "Web Application Development", org: "Microsoft Imagine", year: "2018" },
  { title: "Digital Marketing", org: "Shaw Academy", year: "2016" },
  { title: "IELTS", org: "British Council", year: "2015" },
];

export interface TechCategory {
  category: string;
  skills: string[];
}

export const techStack: TechCategory[] = [
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "NestJS", "Socket.IO", "REST APIs", "WebSocket", "PHP", "Python", "PM2", "Event-Driven Architecture", "Redis", "RabbitMQ"],
  },
  {
    category: "Frontend",
    skills: ["Angular", "TypeScript", "JavaScript (ES6+)", "React", "Vue.js", "Next.js", "HTML5", "CSS3", "jQuery", "Bootstrap"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "MySQL", "MSSQL", "Firebase", "PostgreSQL"],
  },
  {
    category: "DevOps",
    skills: ["Linux", "Apache", "Nginx", "Docker", "Docker Compose", "Git", "GitHub", "GitLab", "CI/CD", "Google Cloud", "Alibaba Cloud"],
  },
  {
    category: "Integrations",
    skills: ["WhatsApp Business API", "Facebook Messenger API", "Twitter API", "Instagram API", "LINE Messaging API", "Zoho CRM", "Freshdesk", "Salesforce"],
  },
  {
    category: "AI & Tools",
    skills: ["Claude AI", "Claude Code CLI", "ChatGPT", "Gemini", "RAG", "Qdrant", "FastAPI"],
  },
];
