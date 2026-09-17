"use server";

import { Resend } from "resend";
import { site } from "@/content/site";
import {
  contactSchema,
  HONEYPOT_FIELD,
  type ContactState,
} from "@/lib/validation";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? site.social.email;
// Until a custom domain is verified in Resend, the onboarding sender works and
// delivers to the account owner's address.
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

/**
 * Handles a contact-form submission. Validates with zod, then emails via
 * Resend. If RESEND_API_KEY is absent the action reports `unavailable` rather
 * than claiming success, so the visitor is never told a message was delivered
 * when nothing was sent.
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const values = { ...raw };

  // Honeypot: checked before validation, because a filled honeypot must never
  // produce a visible field error the sender cannot act on.
  if (String(formData.get(HONEYPOT_FIELD) ?? "").trim()) {
    return { status: "success", message: "Thanks. I'll be in touch soon." };
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors: parsed.error.flatten().fieldErrors,
      values,
    };
  }

  const { name, email, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY not set; cannot deliver message.");
    return {
      status: "unavailable",
      message:
        "The contact form isn't connected to an inbox on this deployment.",
      values,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return {
        status: "error",
        message:
          "Something went wrong sending your message. Please email me directly.",
        values,
      };
    }

    return { status: "success", message: "Thanks. I'll be in touch soon." };
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return {
      status: "error",
      message: "Something went wrong. Please email me directly.",
      values,
    };
  }
}
