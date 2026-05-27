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
    const contentType = response.headers.get("content-type");
    const result = contentType?.includes("application/json")
      ? await response.json()
      : { message: await response.text() };

    if (!response.ok) {
      const detail = result.detail ? ` ${result.detail}` : "";
      throw new Error(`${result.message || "Could not send message"}${detail}`);
    }

    return result as ContactMessageResponse;
  });
}
