import { Bot, BrainCircuit, Layers3, ShieldCheck, Smartphone, UsersRound } from "lucide-react";
import type { Expertise, Metric, PortfolioProfile } from "@/features/portfolio/types";

export const profile: PortfolioProfile = {
  name: "Ken Isaac",
  title: "Lead SDET | Automation and Functional Testing | Software Test Architect",
  headline: "Building scalable automation frameworks for web, API, and mobile platforms.",
  positioning:
    "I design scalable automation frameworks, lead quality engineering strategy, and help teams ship reliable software faster through UI, API, mobile, CI/CD, and AI-assisted QA practices.",
  summary:
    "Lead SDET with 9+ years of experience driving automation and functional quality across FinTech SaaS, finance ERP, e-commerce, and enterprise platforms. Experienced in building UI, API, and mobile automation frameworks using Playwright/TypeScript, Selenium/Java, Cucumber, Appium, and Postman/Newman. Skilled in AI-assisted testing, CI/CD pipeline integration, test strategy, stakeholder reporting, release sign-off, and mentoring QA engineers.",
  location: "Chennai, India",
  email: "kenisaac.d@gmail.com",
  phone: "+91 97908 33255",
  linkedinUrl: "https://www.linkedin.com/in/kid",
  resumeUrl: "/resume/Ken_Isaac_Resume.pdf"
};

export const metrics: Metric[] = [
  { label: "Years Experience", value: "9+", icon: ShieldCheck },
  { label: "Major Domains", value: "4+", icon: Layers3 },
  { label: "Web / API / Mobile", value: "360", icon: Smartphone },
  { label: "QA Leadership", value: "Team", icon: UsersRound },
  { label: "AI-Assisted QA", value: "Modern", icon: BrainCircuit },
  { label: "Frameworks Built", value: "UI + API", icon: Bot }
];

export const coreExpertise: Expertise[] = [
  {
    title: "Test Automation Architecture",
    description: "Framework design, reusable components, maintainable patterns, and coverage strategy across product surfaces."
  },
  {
    title: "Playwright + TypeScript",
    description: "Modern UI automation with fast execution, resilient selectors, fixtures, and CI-ready reporting."
  },
  {
    title: "Selenium + Java",
    description: "Enterprise-grade browser automation with Page Object patterns, robust waits, and regression coverage."
  },
  {
    title: "Appium Mobile Automation",
    description: "Hybrid mobile automation frameworks for Android and iOS-friendly validation workflows."
  },
  {
    title: "API Testing with Postman/Newman",
    description: "Contract-aware API collections, Newman pipeline execution, and regression-friendly assertions."
  },
  {
    title: "Cucumber BDD Frameworks",
    description: "Readable business-facing scenarios with reusable step libraries and traceable acceptance criteria."
  },
  {
    title: "CI/CD Quality Gates",
    description: "Pipeline-integrated test execution that supports release confidence without slowing teams down."
  },
  {
    title: "AI-Assisted QA",
    description: "Responsible use of AI for requirement analysis, coverage discovery, documentation, and defect triage."
  },
  {
    title: "Test Strategy & Release Sign-off",
    description: "Risk-based planning, stakeholder reporting, readiness reviews, and disciplined release decisions."
  },
  {
    title: "QA Leadership & Mentoring",
    description: "Practical coaching for QA engineers, cross-functional collaboration, and standards that teams can keep."
  }
];

export const leadershipPrinciples = [
  "Shift quality left",
  "Automate what matters",
  "Make test coverage traceable",
  "Use AI responsibly to improve QA productivity",
  "Build frameworks that teams can maintain",
  "Treat release readiness as an engineering discipline"
];

export const education = {
  degree: "Bachelor of Computer Science and Engineering",
  institution: "Anna University, Chennai",
  period: "Aug 2010 - Apr 2014"
};
