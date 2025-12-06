import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "proj_1",
    name: "Open Source: K8s-AutoScaler",
    description: "Created a custom Kubernetes autoscaler operator that utilizes predictive analytics to pre-scale clusters before traffic spikes, reducing latency by 45%.",
    technologies: ["Go", "Kubernetes API", "Prometheus"],
    link: "github.com/md-adil/k8s-autoscaler",
  },
  {
    id: "proj_2",
    name: "Enterprise Auth Gateway",
    description: "Designed a centralized authentication gateway handling SSO, OAuth2, and RBAC for 50+ internal microservices.",
    technologies: ["Rust", "OIDC", "Redis", "Docker"],
    link: "github.com/md-adil/auth-gateway",
  },
];
