import type { SkillCategory, Tool } from "@/features/portfolio/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Automation",
    skills: ["Playwright", "Selenium WebDriver", "Appium", "Cucumber", "Leapwork", "Page Object Model"]
  },
  {
    name: "Programming",
    skills: ["TypeScript", "Java", "JavaScript", "SQL", "Gherkin"]
  },
  {
    name: "API Testing",
    skills: ["Postman", "Newman", "Swagger/OpenAPI", "REST API Validation", "Contract Testing"]
  },
  {
    name: "AI-Assisted QA",
    skills: ["Requirement Analysis", "Coverage Discovery", "Automation Drafting", "Defect Analysis", "Documentation"]
  },
  {
    name: "Testing Types",
    skills: ["Functional", "Regression", "Smoke", "Integration", "Mobile", "UAT Support", "Release Readiness"]
  },
  {
    name: "Test Management",
    skills: ["Jira", "TestRail", "qTest", "Confluence", "Stakeholder Reporting"]
  },
  {
    name: "Methods & Tools",
    skills: ["Agile/Scrum", "CI/CD", "Git", "Bitbucket", "Figma", "SaaS Platforms"]
  }
];

export const toolbox: Tool[] = [
  { name: "Selenium", category: "UI Automation" },
  { name: "Playwright", category: "UI Automation" },
  { name: "Appium", category: "Mobile" },
  { name: "Cucumber", category: "BDD" },
  { name: "Postman", category: "API" },
  { name: "Newman", category: "API CI" },
  { name: "Swagger", category: "OpenAPI" },
  { name: "Jira", category: "Delivery" },
  { name: "TestRail", category: "Test Management" },
  { name: "qTest", category: "Test Management" },
  { name: "Confluence", category: "Knowledge Base" },
  { name: "Git", category: "Version Control" },
  { name: "Bitbucket", category: "Version Control" },
  { name: "CI/CD", category: "Quality Gates" },
  { name: "Figma", category: "Design Review" },
  { name: "SaaS", category: "Product Domain" }
];
