"use client";

import { useActionState } from "react";
import { submitContact } from "@/lib/actions/contact";
import { HONEYPOT_FIELD, initialContactState } from "@/lib/validation";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { ArrowIcon, MailIcon } from "@/components/ui/icons";

const fieldBase =
  "w-full rounded-md border border-line bg-surface px-3.5 py-2.5 text-base sm:text-sm text-foreground " +
  "placeholder:text-faint transition-colors focus-visible:border-accent";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialContactState,
  );

  if (state.status === "success") {
    return (
      <div className="panel flex flex-col items-start gap-3 rounded-lg p-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="20"
            height="20"
            aria-hidden
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h2 className="font-display text-lg font-semibold tracking-tight">
          Message sent
        </h2>
        <p className="text-muted">{state.message}</p>
      </div>
    );
  }

  // Delivery is not configured on this deployment. Say so plainly and hand the
  // visitor a mailto link carrying everything they already typed.
  if (state.status === "unavailable") {
    const body = encodeURIComponent(
      `${state.values?.message ?? ""}\n\n${state.values?.name ?? ""}\n${
        state.values?.email ?? ""
      }`,
    );
    return (
      <div className="panel flex flex-col items-start gap-4 rounded-lg p-8">
        <h2 className="font-display text-lg font-semibold tracking-tight">
          Send this by email instead
        </h2>
        <p className="max-w-md leading-7 text-muted">
          {state.message} Your message hasn&apos;t been delivered. Opening it in
          your email client will keep everything you typed.
        </p>
        <a
          href={`mailto:${site.social.email}?subject=${encodeURIComponent(
            "Portfolio enquiry",
          )}&body=${body}`}
          className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-soft"
        >
          <MailIcon width={17} height={17} /> Email {site.social.email}
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex max-w-xl flex-col gap-5" noValidate>
      {state.status === "error" && state.message && (
        <p
          role="alert"
          className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
        >
          {state.message}
        </p>
      )}

      <Field
        label="Name"
        name="name"
        defaultValue={state.values?.name}
        errors={state.errors?.name}
        autoComplete="name"
      />
      <Field
        label="Email"
        name="email"
        type="email"
        defaultValue={state.values?.email}
        errors={state.errors?.email}
        autoComplete="email"
      />
      <Field
        label="Message"
        name="message"
        as="textarea"
        defaultValue={state.values?.message}
        errors={state.errors?.message}
      />

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden className="hidden">
        <label>
          Company
          <input
            name={HONEYPOT_FIELD}
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={pending}
          className={cn(
            "inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-5",
            "text-sm font-medium text-accent-ink transition-colors hover:bg-accent-soft",
            "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-60",
          )}
        >
          {pending ? (
            <>
              <Spinner /> Sending
            </>
          ) : (
            <>
              Send message <ArrowIcon />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  as = "input",
  defaultValue,
  errors,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "textarea";
  defaultValue?: string;
  errors?: string[];
  autoComplete?: string;
}) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  const invalid = !!errors?.length;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={6}
          required
          defaultValue={defaultValue}
          aria-invalid={invalid}
          aria-describedby={invalid ? errorId : undefined}
          className={cn(fieldBase, "resize-y", invalid && "border-red-500/60")}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required
          defaultValue={defaultValue}
          autoComplete={autoComplete}
          aria-invalid={invalid}
          aria-describedby={invalid ? errorId : undefined}
          className={cn(fieldBase, invalid && "border-red-500/60")}
        />
      )}
      {invalid && (
        <p id={errorId} className="text-xs text-red-300">
          {errors![0]}
        </p>
      )}
    </div>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin"
      viewBox="0 0 24 24"
      width="17"
      height="17"
      aria-hidden
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        opacity="0.25"
      />
      <path
        d="M22 12a10 10 0 0 0-10-10"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
