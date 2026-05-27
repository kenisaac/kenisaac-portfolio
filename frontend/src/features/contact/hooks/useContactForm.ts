import { useMutation } from "@tanstack/react-query";
import { submitContactMessage } from "@/features/contact/api/contactApi";

export function useContactForm() {
  return useMutation({
    mutationFn: submitContactMessage
  });
}
