import { z } from "zod";

/** Contact form schema, shared by the client form and the server action. */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "That name is too long."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least a few words.")
    .max(5000, "That message is too long."),
  // Honeypot: real users leave this empty; bots tend to fill it.
  company: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type FieldErrors = Partial<Record<keyof ContactInput, string[]>>;

/** Return shape of the contact server action, consumed by useActionState. */
export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: FieldErrors;
  /** Echo back values so the form can repopulate after a failed submit. */
  values?: { name: string; email: string; message: string };
};

export const initialContactState: ContactState = { status: "idle" };
