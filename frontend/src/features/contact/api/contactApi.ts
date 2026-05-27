import { httpClient } from "@/lib/api/httpClient";
import type { ContactFormValues } from "@/features/contact/schemas";

export type ContactMessageResponse = {
  id: string;
  status: "NEW" | "READ" | "ARCHIVED";
  createdAt: string;
};

export function submitContactMessage(payload: ContactFormValues) {
  return httpClient<ContactMessageResponse>("/contact/messages", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}
