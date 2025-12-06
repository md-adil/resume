import type { SkillCategory } from "../types";

export const skills: SkillCategory[] = [
  {
    name: "Architecture & Design",
    items: ["Microservices", "Event-Driven Architecture", "Domain-Driven Design (DDD)", "System Design", "Scalability", "Serverless"],
  },
  {
    name: "Cloud & DevOps",
    items: ["AWS (Solutions Architect Pro)", "Kubernetes (K8s)", "Terraform (IaC)", "Docker", "CI/CD Pipelines", "Observability (Datadog/Prometheus)"],
  },
  {
    name: "Languages & Stack",
    items: ["Go (Golang)", "TypeScript/Node.js", "Python", "React/Next.js", "PostgreSQL", "Redis", "Kafka", "GraphQL"],
  },
  {
    name: "Leadership",
    items: ["Technical Strategy", "Team Mentorship", "Agile/Scrum", "Stakeholder Management", "Cloud Cost Optimization", "hiring"],
  },
];
