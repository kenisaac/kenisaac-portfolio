import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Cpu,
  Gauge,
  GitBranch,
  Mail,
  ShieldCheck,
  Sparkles,
  Terminal
} from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/ken-qa-hero.png";
import { AnimatedList } from "@/components/shared/AnimatedList";
import { AnimatedPage } from "@/components/shared/AnimatedPage";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SkeletonCard } from "@/components/shared/SkeletonCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { ContactCard } from "@/features/portfolio/components/ContactCard";
import { ExperienceTimeline } from "@/features/portfolio/components/ExperienceTimeline";
import { ProjectCard } from "@/features/portfolio/components/ProjectCard";
import { SkillCard } from "@/features/portfolio/components/SkillCard";
import { ToolCard } from "@/features/portfolio/components/ToolCard";
import { coreExpertise, education, leadershipPrinciples, metrics } from "@/features/portfolio/data/profile";
import { toolbox } from "@/features/portfolio/data/skills";
import {
  usePortfolioExperience,
  usePortfolioProfile,
  usePortfolioProjects,
  usePortfolioSkills
} from "@/features/portfolio/hooks/usePortfolio";
import { listItem } from "@/lib/animation/variants";

const sectionClass = "px-4 py-16 sm:px-6 sm:py-24 lg:px-8";

const heroServices = ["Playwright", "Selenium", "Appium", "API Testing", "AI-Assisted QA"];

const impactStats = [
  { value: "9+", label: "Years of SDET leadership" },
  { value: "4+", label: "Major delivery domains" },
  { value: "UI/API", label: "Framework coverage" },
  { value: "Mobile", label: "Hybrid automation" }
];

const processSteps = [
  {
    title: "Discover & Map Risk",
    description: "Translate requirements into traceable test coverage, business flows, and release-impact areas."
  },
  {
    title: "Engineer The Framework",
    description: "Build maintainable UI, API, and mobile automation foundations that teams can extend."
  },
  {
    title: "Gate With Evidence",
    description: "Connect CI signals, API checks, regression results, and defect trends to release decisions."
  },
  {
    title: "Report & Sign Off",
    description: "Keep stakeholders aligned with concise readiness reporting and accountable quality calls."
  }
];

export function PortfolioPage() {
  const profileQuery = usePortfolioProfile();
  const experienceQuery = usePortfolioExperience();
  const skillsQuery = usePortfolioSkills();
  const projectsQuery = usePortfolioProjects();

  const profile = profileQuery.data;

  return (
    <AnimatedPage>
      <section className="red-stage relative isolate min-h-screen overflow-hidden px-4 pb-14 pt-24 text-white sm:px-6 lg:px-8">
        <span className="orb-pillar right-[33%] top-24 hidden h-64 w-28 lg:block" aria-hidden="true" />
        <span className="orb-pillar right-[18%] top-36 hidden h-28 w-28 lg:block" aria-hidden="true" />
        <span className="orb-pillar right-[8%] top-56 hidden h-44 w-24 rotate-12 xl:block" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-between gap-12">
          <div className="grid gap-10 pt-8 lg:grid-cols-[1fr_320px] lg:items-start">
            <div>
              <Badge className="border-white/20 bg-white/[0.12] text-white">Lead SDET / QA Automation Architect</Badge>
              <h1 className="mt-8 max-w-5xl text-6xl font-semibold leading-[0.9] tracking-normal sm:text-7xl lg:text-8xl xl:text-9xl">
                Quality
                <span className="block text-white/[0.94]">Automation</span>
                <span className="block text-black drop-shadow-[0_14px_26px_rgba(255,255,255,0.28)]">Architect</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-white/[0.86] sm:text-xl">
                {profile.positioning}
              </p>
            </div>

            <div className="self-end rounded-md border border-white/20 bg-black/[0.18] p-5 shadow-panel backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/[0.58]">Automation Surface</p>
              <div className="mt-5 grid gap-3">
                {heroServices.map((service) => (
                  <div key={service} className="flex items-center justify-between border-b border-white/[0.12] pb-3 text-sm font-semibold">
                    <span>{service}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-black text-white hover:bg-black/[0.86]">
                <a href="#experience">
                  View Experience
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/25 bg-white/[0.12] text-white hover:bg-white/20 hover:text-white">
                <a href="#contact">
                  Contact Me
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
                <a href={profile.resumeUrl} download>
                  Download Resume
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
            <p className="max-w-xs text-sm leading-6 text-white/[0.72]">
              Chennai-based QA leader building release confidence across FinTech SaaS, ERP, e-commerce, and enterprise platforms.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-brand-paper">
        <section id="about" className={sectionClass}>
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="About"
              title="Built for reliable releases."
              description="Ken combines automation architecture, test strategy, AI-assisted QA, stakeholder reporting, and mentoring to make quality visible before release day."
            />
            <AnimatedList className="grid gap-0 overflow-hidden rounded-lg border bg-white lg:grid-cols-4">
              {impactStats.map((metric) => (
                <motion.div key={metric.label} variants={listItem} className="border-b p-6 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
                  <p className="text-4xl font-semibold tracking-normal sm:text-5xl">{metric.value}</p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{metric.label}</p>
                </motion.div>
              ))}
            </AnimatedList>
            <AnimatedList className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.8fr]">
              <motion.div variants={listItem}>
                <Card className="h-full shadow-none">
                  <CardContent className="p-6 sm:p-8">
                    <p className="text-lg leading-8 text-muted-foreground">{profile.summary}</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={listItem}>
                <Card className="h-full border-black !bg-brand-ink text-white shadow-none">
                  <CardContent className="grid gap-4 p-6 sm:p-8">
                    {["FinTech SaaS", "Finance ERP", "E-commerce", "Enterprise Platforms"].map((domain) => (
                      <div key={domain} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-brand-red" aria-hidden="true" />
                        <span className="font-medium">{domain}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedList>
          </div>
        </section>

        <section id="expertise" className="bg-brand-ink px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Core Expertise"
              title="QA systems that move with engineering."
              description="From BDD UI frameworks to API regression, mobile automation, quality gates, and release sign-off."
              inverse
            />
            <AnimatedList className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {profileQuery.data ? (
                coreExpertise.map((item, index) => {
                  const Icon = [ShieldCheck, Code2, Terminal, Cpu, GitBranch, BrainCircuit][index % 6];
                  return (
                    <motion.div key={item.title} variants={listItem}>
                      <Card className="h-full border-white/10 !bg-white/[0.055] text-white shadow-none transition-colors hover:border-brand-red/70">
                        <CardContent className="p-5">
                          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-red text-white">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                          <p className="mt-3 text-sm leading-6 text-white/[0.64]">{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })
              ) : (
                <SkeletonCard />
              )}
            </AnimatedList>
          </div>
        </section>

        <section id="projects" className={sectionClass}>
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Selected Work"
              title="Automation work, quantified and packaged."
              description="Anonymized case-study style examples based on Ken's QA leadership and framework responsibilities."
            />
            <ScrollReveal className="overflow-hidden rounded-lg bg-brand-ink text-white">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="min-h-[360px] bg-black">
                  <img
                    src={heroImage}
                    alt="QA automation dashboard with code panels, API tests, and mobile automation screens"
                    className="h-full w-full object-cover opacity-88"
                  />
                </div>
                <div className="flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    <Badge className="bg-brand-red text-white">Featured Framework</Badge>
                    <h3 className="mt-5 text-3xl font-semibold sm:text-5xl">FinTech SaaS Automation Framework</h3>
                    <p className="mt-5 leading-7 text-white/[0.68]">
                      A scalable Playwright, TypeScript, and Cucumber foundation for secure web releases, reusable test flows,
                      CI reporting, and release readiness visibility.
                    </p>
                  </div>
                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {["Playwright", "Cucumber", "CI/CD"].map((tool) => (
                      <div key={tool} className="rounded-md border border-white/10 bg-white/[0.055] p-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/40">Tool</p>
                        <p className="mt-2 font-semibold">{tool}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <AnimatedList className="mt-5 grid gap-5 lg:grid-cols-2">
              {projectsQuery.data.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </AnimatedList>
          </div>
        </section>

        <section id="skills" className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Technical Skills"
              title="A focused toolbox for modern QA delivery."
              description="Grouped for scanning: automation, programming, API validation, AI-assisted QA, testing types, management tools, and delivery methods."
            />
            <AnimatedList className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {skillsQuery.data.map((category) => (
                <SkillCard key={category.name} category={category} />
              ))}
            </AnimatedList>
          </div>
        </section>

        <section id="experience" className={sectionClass}>
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Experience"
              title="Senior QA ownership across FinTech, ERP, and enterprise delivery."
              description="A timeline of automation leadership, framework design, release readiness, and stakeholder-facing quality execution."
            />
            <AnimatedList>
              <ExperienceTimeline items={experienceQuery.data} />
            </AnimatedList>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <ScrollReveal>
              <Badge className="bg-brand-red-soft text-brand-red">Process</Badge>
              <h2 className="mt-5 text-5xl font-semibold leading-none tracking-normal sm:text-6xl">Our Quality Process</h2>
              <p className="mt-5 max-w-sm leading-7 text-muted-foreground">
                A senior SDET workflow for making coverage, confidence, and release readiness easier to see.
              </p>
              <Button asChild className="mt-8" variant="red">
                <a href="#contact">
                  Schedule a QA discussion
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </ScrollReveal>
            <AnimatedList className="divide-y rounded-lg border bg-brand-paper">
              {processSteps.map((step, index) => (
                <motion.div key={step.title} variants={listItem} className="grid gap-4 p-5 sm:grid-cols-[80px_1fr] sm:p-6">
                  <span className="font-mono text-sm text-brand-red">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatedList>
          </div>
        </section>

        <section id="toolbox" className={sectionClass}>
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Toolbox"
              title="Tools Ken uses to make quality visible."
              description="Automation frameworks, test management systems, API tooling, delivery platforms, and collaboration systems."
            />
            <AnimatedList className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {toolbox.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </AnimatedList>
          </div>
        </section>

        <section id="leadership" className="bg-brand-ink px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="QA Leadership Philosophy"
              title="Pragmatic, traceable, and built for teams."
              description="The best QA systems improve engineering flow while preserving release accountability."
              inverse
            />
            <AnimatedList className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {leadershipPrinciples.map((principle) => (
                <motion.div key={principle} variants={listItem}>
                  <Card className="h-full border-white/10 !bg-white/[0.055] text-white shadow-none">
                    <CardContent className="flex min-h-28 items-center gap-4 p-5">
                      <Sparkles className="h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
                      <p className="font-semibold">{principle}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatedList>
          </div>
        </section>

        <section id="education" className={sectionClass}>
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Education" title="Academic foundation." />
            <ScrollReveal>
              <Card className="shadow-none">
                <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                  <div>
                    <h3 className="text-xl font-semibold">{education.degree}</h3>
                    <p className="mt-2 text-muted-foreground">{education.institution}</p>
                  </div>
                  <Badge className="bg-brand-red-soft text-brand-red">{education.period}</Badge>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-brand-ink px-4 py-16 pb-20 text-white sm:px-6 sm:py-24 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(244,5,57,0.22),transparent_28rem)]" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Contact"
              title="Let's talk about reliable releases."
              description="For hiring conversations, QA architecture consulting, and senior SDET opportunities."
              inverse
            />
            <AnimatedList className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
              <motion.div variants={listItem}>
                <ContactCard profile={profile} tone="dark" />
              </motion.div>
              <motion.div variants={listItem}>
                <ContactForm tone="dark" />
              </motion.div>
            </AnimatedList>
            <AnimatedList className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.slice(0, 4).map((metric) => {
                const Icon = metric.icon ?? Gauge;
                return (
                  <motion.div key={metric.label} variants={listItem} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                    <Icon className="h-5 w-5 text-brand-red" aria-hidden="true" />
                    <p className="mt-4 text-2xl font-semibold">{metric.value}</p>
                    <p className="mt-1 text-sm text-white/[0.58]">{metric.label}</p>
                  </motion.div>
                );
              })}
            </AnimatedList>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
}
