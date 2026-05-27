import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const profile = {
  name: "Ken Isaac",
  title: "Lead SDET | Automation and Functional Testing | Software Test Architect",
  summary:
    "Lead SDET with 9+ years of experience driving automation and functional quality across FinTech SaaS, finance ERP, e-commerce, and enterprise platforms. Experienced in building UI, API, and mobile automation frameworks using Playwright/TypeScript, Selenium/Java, Cucumber, Appium, and Postman/Newman. Skilled in AI-assisted testing, CI/CD pipeline integration, test strategy, stakeholder reporting, release sign-off, and mentoring QA engineers.",
  location: "Chennai, India",
  email: "kenisaac.d@gmail.com",
  phone: "+91 97908 33255",
  linkedinUrl: "https://www.linkedin.com/in/kid",
  resumeUrl: "/resume/Ken_Isaac_Resume.pdf"
};

const experience = [
  {
    company: "STITCH",
    role: "Lead SDET",
    startDate: new Date("2026-02-01T00:00:00.000Z"),
    endDate: new Date("2026-05-01T00:00:00.000Z"),
    summary: "Led QA/SDET strategy for secure FinTech SaaS web and mobile applications.",
    bullets: [
      "Led QA/SDET strategy for secure FinTech SaaS web and mobile applications.",
      "Maintained scalable Playwright + Cucumber automation frameworks.",
      "Designed reusable Appium + Cucumber hybrid mobile automation framework.",
      "Introduced AI-assisted QA practices for requirements, coverage, automation, defect analysis, and documentation.",
      "Mentored QA engineers and supported release readiness."
    ],
    sortOrder: 1
  },
  {
    company: "WPP",
    role: "Senior SDET",
    startDate: new Date("2025-05-01T00:00:00.000Z"),
    endDate: new Date("2026-02-01T00:00:00.000Z"),
    summary: "Delivered QA for finance ERP modules across core financial workflows.",
    bullets: [
      "Delivered QA for finance ERP modules including AP, AR, GL, Procurement, Expenses, Cash Management, and Payments.",
      "Automated user stories using Selenium WebDriver and Leapwork.",
      "Built Postman/Newman API automation.",
      "Applied AI-assisted QA to improve test coverage and documentation.",
      "Coordinated QA status with CoE, senior management, stakeholders, and performance teams."
    ],
    sortOrder: 2
  },
  {
    company: "CDW Technologies / Sirius Computer Solutions",
    role: "Senior Consultant",
    startDate: new Date("2017-04-01T00:00:00.000Z"),
    endDate: new Date("2025-04-01T00:00:00.000Z"),
    summary: "Led manual and automation testing for web applications and API services.",
    bullets: [
      "Led manual and automation testing for web applications and API services.",
      "Built Selenium/Java and Playwright/TypeScript frameworks from scratch.",
      "Owned estimation, resource allocation, test execution, defect reporting, closure, and sign-off.",
      "Developed API automation with Postman/Newman.",
      "Mentored QA engineers and collaborated with product and engineering teams."
    ],
    sortOrder: 3
  }
];

const skillCategories = [
  ["Automation", ["Playwright", "Selenium WebDriver", "Appium", "Cucumber", "Leapwork", "Page Object Model"]],
  ["Programming", ["TypeScript", "Java", "JavaScript", "SQL", "Gherkin"]],
  ["API Testing", ["Postman", "Newman", "Swagger/OpenAPI", "REST API Validation", "Contract Testing"]],
  [
    "AI-Assisted QA",
    ["Requirement Analysis", "Coverage Discovery", "Automation Drafting", "Defect Analysis", "Documentation"]
  ],
  ["Testing Types", ["Functional", "Regression", "Smoke", "Integration", "Mobile", "UAT Support", "Release Readiness"]],
  ["Test Management", ["Jira", "TestRail", "qTest", "Confluence", "Stakeholder Reporting"]],
  ["Methods & Tools", ["Agile/Scrum", "CI/CD", "Git", "Bitbucket", "Figma", "SaaS Platforms"]]
] as const;

const projects = [
  {
    title: "FinTech SaaS Automation Framework",
    slug: "fintech-saas-automation-framework",
    problem: "Secure web releases needed fast, repeatable regression feedback without sacrificing audit confidence.",
    solution:
      "Maintained a Playwright + TypeScript + Cucumber framework with reusable fixtures, business-readable scenarios, and CI reporting.",
    tools: ["Playwright", "TypeScript", "Cucumber", "CI/CD", "Jira"],
    outcome: "Improved release readiness visibility and reduced manual regression pressure across high-risk FinTech workflows.",
    featured: true,
    sortOrder: 1
  },
  {
    title: "Hybrid Mobile Automation Framework",
    slug: "hybrid-mobile-automation-framework",
    problem: "Mobile validation required consistent coverage across critical hybrid app journeys and device contexts.",
    solution:
      "Designed an Appium + Cucumber framework with reusable page abstractions, environment controls, and maintainable test data patterns.",
    tools: ["Appium", "Cucumber", "Java", "Mobile Testing"],
    outcome: "Created a scalable foundation for mobile regression and faster defect localization.",
    featured: true,
    sortOrder: 2
  },
  {
    title: "Finance ERP Regression Suite",
    slug: "finance-erp-regression-suite",
    problem: "AP, AR, GL, procurement, expenses, cash management, and payment modules required coordinated test execution.",
    solution:
      "Automated business-critical stories and coordinated execution status with CoE, stakeholders, and performance teams.",
    tools: ["Selenium", "Leapwork", "Jira", "qTest", "Confluence"],
    outcome: "Strengthened ERP release confidence with clearer ownership, reporting, and regression traceability.",
    featured: true,
    sortOrder: 3
  },
  {
    title: "API Regression Automation Platform",
    slug: "api-regression-automation-platform",
    problem: "Service changes needed repeatable API validation in pipelines and during sprint-level regression.",
    solution:
      "Built Postman collections and Newman execution flows with assertions, environment variables, and reportable outcomes.",
    tools: ["Postman", "Newman", "Swagger", "CI/CD"],
    outcome: "Gave teams faster API feedback and reduced late-cycle surprises before release sign-off.",
    featured: true,
    sortOrder: 4
  },
  {
    title: "AI-Assisted QA Workflow Enablement",
    slug: "ai-assisted-qa-workflow-enablement",
    problem: "Teams needed better requirement coverage and documentation quality without adding process drag.",
    solution:
      "Introduced responsible AI assistance for requirement review, test coverage discovery, defect analysis, and documentation support.",
    tools: ["AI-Assisted QA", "Jira", "Confluence", "BDD"],
    outcome: "Improved QA productivity while keeping human review and release accountability central.",
    featured: true,
    sortOrder: 5
  }
];

async function main() {
  await prisma.contactMessage.deleteMany();
  await prisma.project.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.skillCategory.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.portfolioProfile.deleteMany();

  await prisma.portfolioProfile.create({ data: profile });
  await prisma.experience.createMany({ data: experience });

  for (const [index, [name, skills]] of skillCategories.entries()) {
    await prisma.skillCategory.create({
      data: {
        name,
        sortOrder: index + 1,
        skills: {
          create: skills.map((skill, skillIndex) => ({
            name: skill,
            sortOrder: skillIndex + 1
          }))
        }
      }
    });
  }

  await prisma.project.createMany({ data: projects });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
