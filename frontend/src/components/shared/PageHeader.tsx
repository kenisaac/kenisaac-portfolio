import { SectionHeader } from "@/components/shared/SectionHeader";

type PageHeaderProps = {
  title: string;
  description: string;
  action?: React.ReactNode;
};

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <header className="border-b bg-background/95 px-4 py-8 sm:px-8">
      <SectionHeader title={title} description={description} action={action} className="mb-0" />
    </header>
  );
}
