export const personalData = {
  name: "Jaineel Upadhyay",
  title: "Software Engineer",
  headline: "The Digital Hearth.",
  subheadline: "Human-Centric Technology.",
  about: "Backend Engineer with 4 years of experience building, stabilizing, and maintaining high-volume systems. I specialize in modernizing legacy codebases, resolving critical production incidents, and ensuring technical excellence through clean, human-led architecture.",
  experience: [
    {
      id: "upstart",
      company: "Upstart",
      role: "Software Engineer",
      type: "High-Pace Fintech",
      highlights: [
        {
          title: "Production Reliability Engineering",
          detail: "Diagnosed and resolved 75+ complex production incidents involving SQL bottlenecks, race conditions, and latency spikes.",
          subtext: "Acted as point of contact for critical backend integrations, directly reducing customer churn."
        },
        {
          title: "API Modernization & Architecture",
          detail: "Led the migration of legacy data ingestion pipelines to certified RESTful APIs with strict Zod validation.",
          subtext: "Reduced data corruption errors by 30% and ensured regulatory compliance for auto loan processing."
        },
        {
          title: "Performance & Monitoring",
          detail: "Utilized Datadog and SumoLogic to trace slow queries and debug intermittent issues.",
          subtext: "Directly reduced API errors and latency for high-traffic partner endpoints."
        }
      ],
      tags: ["AWS", "TypeScript", "Node.js", "PostgreSQL", "DataDog"]
    },
    {
      id: "accenture",
      company: "Accenture",
      role: "Application Development Analyst",
      type: "Corporate Innovation",
      highlights: [
        {
          title: "Internal App Development",
          detail: "Built responsive Single Page Applications (SPA) using React and JavaScript for Accenture’s corporate network.",
          subtext: "Improved tool accessibility across the organization."
        },
        {
          title: "Agile Excellence",
          detail: "Operated within an Extreme Programming (XP) environment with Pair Programming and TDD.",
          subtext: "Delivered high-quality code with 90%+ test coverage."
        },
        {
          title: "AWS Certification",
          detail: "Earned AWS Solutions Architect Associate and Cloud Practitioner credentials.",
          subtext: "Deepened technical expertise in designing scalable, fault-tolerant systems."
        }
      ],
      tags: ["React", "JavaScript", "AWS", "TDD", "XP"]
    }
  ],
  projects: [
    {
      title: "Cloud-Native Ingestor",
      category: "Infrastructure",
      description: "A highly scalable data ingestion pipeline built with AWS SNS, Lambda, and Drizzle ORM.",
      tags: ["AWS", "TypeScript", "Node.js"]
    },
    {
      title: "Paper Trading Engine v2",
      category: "Backend",
      description: "Robust backend for high-frequency trading simulations, focusing on low-latency and cost-efficiency.",
      tags: ["Fastify", "PostgreSQL", "OOP"]
    },
    {
      title: "Unified Auth Layer",
      category: "Architecture",
      description: "A secure, unified authentication system integrating Google OAuth and Passport Discord.",
      tags: ["Passport.js", "OAuth2", "Next.js"]
    }
  ],
  skills: [
    { name: "TypeScript", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "AWS Infrastructure", level: 85 }
  ],
  contact: {
    email: "hello@jaineel.dev",
    github: "https://github.com/ujaineel",
    linkedin: "https://linkedin.com/in/ujaineel"
  }
};
