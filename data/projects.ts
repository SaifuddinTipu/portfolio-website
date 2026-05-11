export interface Project {
  repo: string;
  name: string;
  description: string;
  tags: string[];
  githubUrl: string;
  npmUrl?: string;
  featured: boolean;
}

export const featuredProjects: Project[] = [
  {
    repo: "express-correlation-context",
    name: "express-correlation-context",
    description:
      "Published npm library — Express middleware for automatic correlation ID propagation via AsyncLocalStorage. Access request metadata anywhere in the call stack without passing req around. Zero dependencies.",
    tags: ["TypeScript", "Express", "Node.js", "npm", "Open Source", "Middleware"],
    githubUrl: "https://github.com/SaifuddinTipu/express-correlation-context",
    npmUrl: "https://www.npmjs.com/package/express-correlation-context",
    featured: true,
  },
  {
    repo: "nestjs-webhook-sender",
    name: "nestjs-webhook-sender",
    description:
      "Published npm library — production-ready outbound webhook delivery with HMAC signing (Stripe/GitHub/Standard), BullMQ retry queue, exponential backoff, dead-letter queue, and delivery logs.",
    tags: ["TypeScript", "NestJS", "BullMQ", "Redis", "npm", "Open Source"],
    githubUrl: "https://github.com/SaifuddinTipu/nestjs-webhook-sender",
    npmUrl: "https://www.npmjs.com/package/nestjs-webhook-sender",
    featured: true,
  },
  {
    repo: "nestjs-socket-presence",
    name: "nestjs-socket-presence",
    description:
      "Published npm library — drop-in NestJS module for real-time user presence tracking via Socket.IO and Redis. Multi-socket, TTL expiry, room presence, bulk queries.",
    tags: ["TypeScript", "NestJS", "Socket.IO", "Redis", "npm", "Open Source"],
    githubUrl: "https://github.com/SaifuddinTipu/nestjs-socket-presence",
    npmUrl: "https://www.npmjs.com/package/nestjs-socket-presence",
    featured: true,
  },
  {
    repo: "ai-saas-starter",
    name: "AI SaaS Starter Kit",
    description:
      "Multi-tenant SaaS boilerplate with Claude AI streaming, usage metering, plan limits, and Stripe billing",
    tags: ["TypeScript", "NestJS", "Next.js 15", "Claude AI", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/SaifuddinTipu/ai-saas-starter",
    featured: true,
  },
  {
    repo: "blog-platform",
    name: "Blog Platform",
    description:
      "Full-stack blog with Next.js 15 ISR, TipTap rich-text editor, Algolia search, and ISR revalidation webhook",
    tags: ["TypeScript", "NestJS", "Next.js 15", "Algolia", "TipTap", "PostgreSQL"],
    githubUrl: "https://github.com/SaifuddinTipu/blog-platform",
    featured: true,
  },
  {
    repo: "realtime-chat",
    name: "Real-time Chat App",
    description:
      "Full-stack chat app with Socket.io rooms, Redis presence tracking, JWT auth, and dark React UI",
    tags: ["TypeScript", "NestJS", "Socket.io", "Redis", "MongoDB", "React"],
    githubUrl: "https://github.com/SaifuddinTipu/realtime-chat",
    featured: true,
  },
  {
    repo: "ecommerce-backend",
    name: "E-commerce API",
    description:
      "Production-ready REST API with cart, orders, Stripe payments, BullMQ email queue, and Redis caching",
    tags: ["TypeScript", "NestJS", "PostgreSQL", "Redis", "BullMQ", "Stripe"],
    githubUrl: "https://github.com/SaifuddinTipu/ecommerce-backend",
    featured: true,
  },
];

export const moreProjects: Project[] = [
  {
    repo: "url-shortener",
    name: "URL Shortener",
    description:
      "URL shortener with Redis caching, click analytics, JWT auth, rate limiting, and scheduled cleanup",
    tags: ["TypeScript", "NestJS", "PostgreSQL", "Redis", "JWT", "Swagger"],
    githubUrl: "https://github.com/SaifuddinTipu/url-shortener",
    featured: false,
  },
  {
    repo: "ai-policy-helper-starter-pack",
    name: "AI Policy Helper",
    description:
      "Local-first RAG app for answering company policy questions with source citations",
    tags: ["Python", "FastAPI", "Next.js", "Qdrant", "RAG"],
    githubUrl: "https://github.com/SaifuddinTipu/ai-policy-helper-starter-pack",
    featured: false,
  },
  {
    repo: "task-manager-api",
    name: "Task Manager API",
    description:
      "REST API with real-time Socket.io updates, advanced filtering, soft delete, JWT refresh rotation",
    tags: ["TypeScript", "NestJS", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/SaifuddinTipu/task-manager-api",
    featured: false,
  },
  {
    repo: "backend-ticketing-system",
    name: "Ticketing System",
    description:
      "NestJS + MongoDB + Redis backend containerised with Docker, deployable to GCP Cloud Run",
    tags: ["TypeScript", "NestJS", "MongoDB", "Redis", "Docker"],
    githubUrl: "https://github.com/SaifuddinTipu/backend-ticketing-system",
    featured: false,
  },
  {
    repo: "fullstack-integration-puzzle",
    name: "Webhook Notification System",
    description:
      "Webhook-driven notification system with Next.js, Express, and MongoDB",
    tags: ["Next.js", "Express", "MongoDB", "Webhooks"],
    githubUrl: "https://github.com/SaifuddinTipu/fullstack-integration-puzzle",
    featured: false,
  },
  {
    repo: "nextjs-dashboard",
    name: "Next.js Dashboard",
    description: "Next.js + PostgreSQL dashboard — live on Vercel",
    tags: ["Next.js", "PostgreSQL", "TypeScript"],
    githubUrl: "https://github.com/SaifuddinTipu/nextjs-dashboard",
    featured: false,
  },
];
