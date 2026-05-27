import type { Project } from "@/features/portfolio/types";

export const projects: Project[] = [
  {
    title: "FinTech SaaS Automation Framework",
    slug: "fintech-saas-automation-framework",
    problem: "Secure web releases needed fast, repeatable regression feedback without sacrificing audit confidence.",
    solution:
      "Maintained a Playwright + TypeScript + Cucumber framework with reusable fixtures, business-readable scenarios, and CI reporting.",
    tools: ["Playwright", "TypeScript", "Cucumber", "CI/CD", "Jira"],
    outcome: "Improved release readiness visibility and reduced manual regression pressure across high-risk FinTech workflows."
  },
  {
    title: "Hybrid Mobile Automation Framework",
    slug: "hybrid-mobile-automation-framework",
    problem: "Mobile validation required consistent coverage across critical hybrid app journeys and device contexts.",
    solution:
      "Designed an Appium + Cucumber framework with reusable page abstractions, environment controls, and maintainable test data patterns.",
    tools: ["Appium", "Cucumber", "Java", "Mobile Testing"],
    outcome: "Created a scalable foundation for mobile regression and faster defect localization."
  },
  {
    title: "Finance ERP Regression Suite",
    slug: "finance-erp-regression-suite",
    problem: "AP, AR, GL, procurement, expenses, cash management, and payment modules required coordinated test execution.",
    solution:
      "Automated business-critical stories and coordinated execution status with CoE, stakeholders, and performance teams.",
    tools: ["Selenium", "Leapwork", "Jira", "qTest", "Confluence"],
    outcome: "Strengthened ERP release confidence with clearer ownership, reporting, and regression traceability."
  },
  {
    title: "API Regression Automation Platform",
    slug: "api-regression-automation-platform",
    problem: "Service changes needed repeatable API validation in pipelines and during sprint-level regression.",
    solution:
      "Built Postman collections and Newman execution flows with assertions, environment variables, and reportable outcomes.",
    tools: ["Postman", "Newman", "Swagger", "CI/CD"],
    outcome: "Gave teams faster API feedback and reduced late-cycle surprises before release sign-off."
  },
  {
    title: "AI-Assisted QA Workflow Enablement",
    slug: "ai-assisted-qa-workflow-enablement",
    problem: "Teams needed better requirement coverage and documentation quality without adding process drag.",
    solution:
      "Introduced responsible AI assistance for requirement review, test coverage discovery, defect analysis, and documentation support.",
    tools: ["AI-Assisted QA", "Jira", "Confluence", "BDD"],
    outcome: "Improved QA productivity while keeping human review and release accountability central."
  }
];
