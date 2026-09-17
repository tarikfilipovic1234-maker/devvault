import { z } from "zod";

/** Contact form schema, shared by the client form and the server action. */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "That name is too long."),
  // Zod 4 exposes format validators at the top level; `z.string().email()`
  // is deprecated.
  email: z.email("Please enter a valid email address.").trim(),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least a few words.")
    .max(5000, "That message is too long."),
});

/**
 * Name of the honeypot field. It is deliberately NOT part of `contactSchema`:
 * a max(0) rule there would make a filled honeypot fail validation and surface
 * an error against a field the visitor cannot see or correct (browser autofill
 * does reach hidden inputs). The server action checks it separately instead.
 */
export const HONEYPOT_FIELD = "company";

export type ContactInput = z.infer<typeof contactSchema>;

export type FieldErrors = Partial<Record<keyof ContactInput, string[]>>;

/**
 * Return shape of the contact server action, consumed by useActionState.
 *
 * `unavailable` means delivery is not configured on this deployment. It is a
 * distinct state from `error` so the form can tell the visitor the truth and
 * hand them a working mailto link, rather than claiming a message was sent.
 */
export type ContactState = {
  status: "idle" | "success" | "error" | "unavailable";
  message?: string;
  errors?: FieldErrors;
  /** Echo back values so the form can repopulate after a failed submit. */
  values?: { name: string; email: string; message: string };
};

export const initialContactState: ContactState = { status: "idle" };
