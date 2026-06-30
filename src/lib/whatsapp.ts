import type { ContactConfig } from "@/types/landing.types";

type WhatsappContact = ContactConfig["whatsapp"];

export function createWhatsappUrl({
  number,
  message,
}: Pick<WhatsappContact, "number" | "message">): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
