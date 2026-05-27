import { AnimatedPage } from "@/components/shared/AnimatedPage";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { ContactCard } from "@/features/portfolio/components/ContactCard";
import { usePortfolioProfile } from "@/features/portfolio/hooks/usePortfolio";

export function ContactPage() {
  const { data: profile } = usePortfolioProfile();

  return (
    <AnimatedPage>
      <PageHeader
        title="Contact"
        description="Reach Ken Isaac for Lead SDET, QA automation architecture, and quality engineering leadership opportunities."
      />
      <section className="px-4 py-8 pb-28 sm:px-8 lg:pb-8">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <ContactCard profile={profile} />
          <ContactForm />
        </div>
      </section>
    </AnimatedPage>
  );
}
