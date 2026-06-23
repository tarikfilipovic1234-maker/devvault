"use server";

import { Resend } from "resend";
import { site } from "@/content/site";
import {
  contactSchema,
  type ContactState,
} from "@/lib/validation";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? site.social.email;
// Until a custom domain is verified in Resend, the onboarding sender works and
// delivers to the account owner's address.
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

/**
 * Handles a contact-form submission. Validates with zod, then emails via Resend
 * when RESEND_API_KEY is set. If the key is absent, it validates and no-ops
 * cleanly (returns success) so the site runs and deploys without secrets.
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
    company: String(formData.get("company") ?? ""),
  };

  const values = { name: raw.name, email: raw.email, message: raw.message };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors: parsed.error.flatten().fieldErrors,
      values,
    };
  }

  // Honeypot tripped — pretend success without sending.
  if (parsed.data.company) {
    return { status: "success", message: "Thanks! I'll be in touch soon." };
  }

  const { name, email, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // No key configured: validate-only fallback so the form still works.
    console.warn(
      "[contact] RESEND_API_KEY not set — skipping send (fallback mode).",
    );
    return {
      status: "success",
      message: "Thanks! Your message was received.",
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
        message: "Something went wrong sending your message. Please email me directly.",
        values,
      };
    }

    return { status: "success", message: "Thanks! I'll be in touch soon." };
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return {
      status: "error",
      message: "Something went wrong. Please email me directly.",
      values,
    };
  }
}
