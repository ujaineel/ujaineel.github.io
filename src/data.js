export const personalData = {
  name: "Jaineel Upadhyay",
  title: "Experienced Software Engineer",
  headline: "Integrating Resilience and Reliability in High-Volume Systems",
  subheadline: "Backend Engineering",
  about: "Backend Engineer with 4 years of experience building, stabilizing, and maintaining high-volume systems. I specialize in modernizing legacy codebases, resolving critical production incidents, and ensuring technical excellence through clean architecture.",
  experience: [
    {
      id: "upstart",
      company: "Upstart",
      role: "Software Engineer",
      type: "High-Growth Fintech",
      highlights: [
        {
          title: "Production Reliability Engineering",
          detail: "Diagnosed and resolved 75+ complex production incidents involving SQL bottlenecks, race conditions, and latency spikes.",
          subtext: "Acted as point of contact for critical backend integrations, directly reducing customer churn."
        },
        {
          title: "API Modernization & Architecture",
          detail: "Led the migration of legacy data ingestion pipelines to certified RESTful APIs with strict Zod validation.",
          subtext: "Reduced data corruption errors by 30% and ensured regulatory compliance for auto leads and auto loan processing."
        },
        {
          title: "Performance & Monitoring",
          detail: "Utilized Datadog and SumoLogic to trace slow queries and debug intermittent issues.",
          subtext: "Directly reduced API errors and latency for high-traffic partner endpoints."
        }
      ],
      tags: ["AWS", "TypeScript", "Node.js", "PostgreSQL", "Datadog", "LaunchDarkly", "GrowthBook", "SumoLogic"]
    },
    {
      id: "accenture",
      company: "Accenture",
      role: "Application Development Analyst",
      type: "Cloud Innovation Center",
      highlights: [
        {
          title: "Internal App Development",
          detail: "Built responsive Single Page Applications (SPA) using React and JavaScript for Accenture’s corporate network.",
          subtext: "Improved tool accessibility across the organization."
        },
        {
          title: "Agile & Peer Collaboration",
          detail: "Practiced Extreme Programming (XP) and Test-Driven Development (TDD) within a rapid-iteration lab environment.",
          subtext: "Achieved 90%+ test coverage and facilitated technical knowledge-sharing sessions with other team members."
        },
        {
          title: "AWS Professional Certification",
          detail: "Earned AWS Solutions Architect Associate and Cloud Practitioner certifications.",
          subtext: "Deepened technical expertise in designing scalable, fault-tolerant systems."
        }
      ],
      tags: ["React", "JavaScript", "AWS", "TDD", "XP"]
    }
  ],
  projects: [
    {
      title: "Finance Ticker Summarizer (Chrome Extension)",
      category: "Productivity / AI Integration",
      description: "A browser-based tool designed to provide instant, context-aware financial summaries for stock tickers identified on any webpage.",
      highlights: [
        "Engineered a content script to dynamically scan and identify financial tickers across diverse web DOM structures.",
        "Integrated a backend bridge to aggregate real-time market sentiment and fundamental data for identified assets using gen AI.",
        "Optimized extension memory usage to ensure zero-latency impact on the user's primary browsing experience using caching."
      ],
      tags: ["Gen AI", "CloudFlare", "JavaScript", "Chrome API", "Yahoo Finance API", "Financial Data", "RegEx"]
    },
    {
      title: "IPC-Kernel-Calls (Operating Systems)",
      category: "Systems Programming / University",
      description: "A deep-dive exploration of low-level Inter-Process Communication (IPC) and custom kernel-level system calls.",
      highlights: [
        "Implemented custom kernel calls to facilitate direct communication between isolated user-space processes.",
        "Managed memory allocation and synchronization primitives to prevent deadlocks in high-concurrency kernel environments.",
        "Documented performance benchmarks comparing custom IPC methods against standard Unix pipes and sockets."
      ],
      tags: ["C", "Kernel Programming", "Operating Systems", "IPC"]
    },
    {
      title: "Distributed Processeing of a Round-Robin AI Simulation",
      category: "Distributed & Parallel Processing / University",
      description: "Distributed processing to identify efficient solutions to solve the game of Dominion.",
      highlights: [],
      tags: ["Java", "Monte Carlo Strategy", "Distributed Computing"]
    }
  ],
  contact: {
    email: "ujaineel@gmail.com",
    github: "https://github.com/ujaineel",
    linkedin: "https://linkedin.com/in/jaineel-upadhyay"
  }
};
