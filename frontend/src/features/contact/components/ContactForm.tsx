import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useContactForm } from "@/features/contact/hooks/useContactForm";
import { contactSchema, type ContactFormValues } from "@/features/contact/schemas";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  tone?: "default" | "dark";
};

export function ContactForm({ tone = "default" }: ContactFormProps) {
  const mutation = useContactForm();
  const isDark = tone === "dark";
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      await mutation.mutateAsync(values);
      toast.success("Message sent. Ken will get back to you soon.");
      form.reset();
    } catch {
      toast.error("Message service is not configured yet. Please email Ken directly at kenisaac.d@gmail.com.");
    }
  });

  return (
    <Card className={cn(isDark && "border-white/10 !bg-white/[0.045] text-white shadow-none")}>
      <CardHeader>
        <CardTitle>Send a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={onSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" autoComplete="name" className={cn(isDark && "border-white/10 bg-black/30 text-white")} {...form.register("name")} />
            <FieldError message={form.formState.errors.name?.message} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" autoComplete="email" className={cn(isDark && "border-white/10 bg-black/30 text-white")} {...form.register("email")} />
            <FieldError message={form.formState.errors.email?.message} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" className={cn(isDark && "border-white/10 bg-black/30 text-white")} {...form.register("subject")} />
            <FieldError message={form.formState.errors.subject?.message} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" className={cn(isDark && "border-white/10 bg-black/30 text-white")} {...form.register("message")} />
            <FieldError message={form.formState.errors.message?.message} />
          </div>
          <Button className="mt-2" variant={isDark ? "red" : "default"} type="submit" disabled={mutation.isPending}>
            <Send className="h-4 w-4" aria-hidden="true" />
            {mutation.isPending ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="text-sm text-destructive">{message}</p>;
}
