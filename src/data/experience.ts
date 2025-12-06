import type { Experience } from "../types";

export const experience: Experience[] = [
  {
    id: "exp_1",
    company: "Global Tech Innovations",
    position: "Principal Software Architect",
    startDate: "Jan 2021",
    endDate: "Present",
    current: true,
    location: "San Francisco, CA",
    description:
      "• Spearheaded the architectural transformation of a monolithic legacy platform into event-driven microservices using Go and gRPC, handling 5M+ daily transactions.\n• Defined technical strategy and roadmap for the Cloud Infrastructure division, directly influencing $10M+ in annual R&D budget.\n• Established the 'Architecture Review Board' to enforce best practices, security standards, and code quality across 15+ engineering squads.\n• Reduced cloud spend by 35% ($1.2M annually) by optimizing Kubernetes resource allocation and implementing spot instance strategies on AWS.",
  },
  {
    id: "exp_2",
    company: "Nexus Financial Solutions",
    position: "Staff Software Engineer",
    startDate: "Jun 2017",
    endDate: "Dec 2020",
    current: false,
    location: "New York, NY",
    description:
      "• Led the design and delivery of a high-frequency trading dashboard using React, TypeScript, and WebSockets, reducing data latency by 200ms.\n• Architected a multi-region disaster recovery solution for critical financial data using PostgreSQL replication and Terraform, achieving a typical RTO of <5 minutes.\n• Mentored 8 senior engineers and led the transition to a DevOps culture, increasing deployment frequency from monthly to daily.\n• Collaborated with product, security, and compliance teams to ensure SOC 2 Type II compliance for all payment processing services.",
  },
  {
    id: "exp_3",
    company: "Streamline Systems",
    position: "Senior Software Engineer",
    startDate: "Mar 2014",
    endDate: "May 2017",
    current: false,
    location: "Boston, MA",
    description:
      "• Developed core backend services for a SaaS logistics platform using Node.js and MongoDB, scaling to support 50k concurrent users.\n• Implemented a real-time analytics pipeline using Apache Kafka and Elasticsearch, providing actionable insights to enterprise customers.\n• Optimized frontend bundle sizes by 60% and improved Core Web Vitals scores, directly contributing to a 15% increase in user retention.\n• Championed Test-Driven Development (TDD) and introduced automated CI/CD pipelines using Jenkins.",
  },
  {
    id: "exp_4",
    company: "Innovate Web Corp",
    position: "Software Developer",
    startDate: "Jun 2012",
    endDate: "Feb 2014",
    current: false,
    location: "Austin, TX",
    description:
      "• Built and maintained responsive web applications using the MEAN stack (MongoDB, Express, Angular, Node.js).\n• Integrated third-party APIs (Stripe, Twilio) to enable payments and SMS notifications for e-commerce clients.\n• Participated in agile sprints, daily stand-ups, and code reviews in a fast-paced startup environment.",
  },
];
