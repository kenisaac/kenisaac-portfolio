import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Target } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedList } from "@/components/shared/AnimatedList";
import { AnimatedPage } from "@/components/shared/AnimatedPage";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/features/portfolio/data/projects";
import { profile } from "@/features/portfolio/data/profile";
import { listItem } from "@/lib/animation/variants";

const detailCopy: Record<string, { scope: string[]; signals: string[] }> = {
  "fintech-saas-automation-framework": {
    scope: [
      "Reusable Playwright fixtures and Cucumber scenarios for business-critical secure web workflows.",
      "CI-friendly execution model with reportable outcomes for release readiness conversations.",
      "Risk-focused regression design for high-impact FinTech user journeys."
    ],
    signals: ["Stable UI coverage", "BDD traceability", "Release sign-off evidence"]
  },
  "hybrid-mobile-automation-framework": {
    scope: [
      "Appium and Cucumber structure for repeatable hybrid mobile validation.",
      "Reusable screen abstractions, environment controls, and device-aware test data patterns.",
      "Coverage designed around critical mobile journeys and faster defect localization."
    ],
    signals: ["Hybrid app validation", "Reusable mobile flows", "Regression scalability"]
  },
  "finance-erp-regression-suite": {
    scope: [
      "Regression coverage across AP, AR, GL, procurement, expenses, cash management, and payments.",
      "Automation support with Selenium and Leapwork for finance ERP user stories.",
      "Stakeholder reporting across CoE, senior management, product, and performance teams."
    ],
    signals: ["ERP module coverage", "Execution visibility", "Stakeholder alignment"]
  },
  "api-regression-automation-platform": {
    scope: [
      "Postman collections and Newman execution flows for repeatable service validation.",
      "Environment-driven assertions aligned to API contracts and Swagger documentation.",
      "Pipeline-ready checks that reduce late-cycle service surprises."
    ],
    signals: ["API regression", "Newman reporting", "Contract-aware validation"]
  },
  "ai-assisted-qa-workflow-enablement": {
    scope: [
      "AI-assisted requirement review, test coverage discovery, and documentation support.",
      "Human-reviewed defect analysis and QA evidence generation for accountable releases.",
      "Practical workflow enablement that improves speed without replacing engineering judgment."
    ],
    signals: ["Responsible AI use", "Coverage discovery", "Documentation speed"]
  }
};

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!project) {
    return <Navigate to="/#projects" replace />;
  }

  const details = detailCopy[project.slug];

  return (
    <AnimatedPage>
      <section className="bg-brand-ink px-4 pb-16 pt-28 text-white sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Button asChild variant="ghost" className="mb-8 text-white hover:bg-white/10 hover:text-white">
            <Link to="/#projects">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Selected Work
            </Link>
          </Button>
          <ScrollReveal className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <Badge className="bg-brand-red text-white">Project Detail</Badge>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-none tracking-normal sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{project.solution}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/40">Primary Tools</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <Badge key={tool} className="bg-white/10 text-white">{tool}</Badge>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {[
            ["Problem", project.problem],
            ["Solution", project.solution],
            ["Outcome", project.outcome]
          ].map(([label, value]) => (
            <ScrollReveal key={label}>
              <Card className="h-full shadow-none">
                <CardContent className="p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-red text-white">
                    <Target className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold">{label}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{value}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <ScrollReveal>
            <Badge className="bg-brand-red-soft text-brand-red">Case Study View</Badge>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
              What the detail page explains
            </h2>
            <p className="mt-5 leading-7 text-muted-foreground">
              This page gives recruiters and clients the extra context behind the summary card without exposing private client data.
            </p>
          </ScrollReveal>
          <AnimatedList className="grid gap-4">
            {details.scope.map((item) => (
              <motion.div key={item} variants={listItem} className="rounded-lg border bg-brand-paper p-5">
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
                  <p className="leading-7">{item}</p>
                </div>
              </motion.div>
            ))}
          </AnimatedList>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimatedList className="grid gap-4 md:grid-cols-3">
            {details.signals.map((signal) => (
              <motion.div key={signal} variants={listItem} className="rounded-lg border bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-red">Quality Signal</p>
                <p className="mt-3 text-2xl font-semibold">{signal}</p>
              </motion.div>
            ))}
          </AnimatedList>
          <ScrollReveal className="mt-10 rounded-lg bg-brand-ink p-6 text-white sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Want to discuss similar QA work?</h2>
                <p className="mt-2 text-white/64">Reach Ken for automation architecture, SDET leadership, and release readiness work.</p>
              </div>
              <Button asChild variant="red">
                <a href={`mailto:${profile.email}`}>
                  Contact Ken
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </AnimatedPage>
  );
}
