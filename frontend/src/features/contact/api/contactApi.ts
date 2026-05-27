import type { ContactFormValues } from "@/features/contact/schemas";

export type ContactMessageResponse = {
  id: string;
  status: "NEW" | "READ" | "ARCHIVED" | "SENT";
  createdAt: string;
};

export function submitContactMessage(payload: ContactFormValues) {
  return fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  }).then(async (response) => {
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Could not send message");
    }

    return result as ContactMessageResponse;
  });
}
