"use client";

import { useActionState } from "react";
import { submitContact } from "@/lib/actions/contact";
import { initialContactState } from "@/lib/validation";
import { cn } from "@/lib/utils";
import { ArrowIcon } from "@/components/ui/icons";

const fieldBase =
  "glass w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-faint " +
  "focus-visible:border-accent/40";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialContactState,
  );

  if (state.status === "success") {
    return (
      <div className="glass flex flex-col items-start gap-3 rounded-2xl p-8">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden>
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h2 className="font-display text-xl font-semibold tracking-tight">
          Message sent
        </h2>
        <p className="text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5" noValidate>
      {state.status === "error" && state.message && (
        <p
          role="alert"
          className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300"
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

      {/* Honeypot — hidden from users */}
      <div aria-hidden className="hidden">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={pending}
        className={cn(
          "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-violet",
          "px-6 font-medium text-white transition-all hover:brightness-110",
          "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-60",
        )}
      >
        {pending ? (
          <>
            <Spinner /> Sending…
          </>
        ) : (
          <>
            Send message <ArrowIcon />
          </>
        )}
      </button>
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
          rows={5}
          defaultValue={defaultValue}
          aria-invalid={invalid}
          aria-describedby={invalid ? errorId : undefined}
          className={cn(fieldBase, "resize-y", invalid && "border-red-400/50")}
          placeholder="What can I help you build?"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          defaultValue={defaultValue}
          autoComplete={autoComplete}
          aria-invalid={invalid}
          aria-describedby={invalid ? errorId : undefined}
          className={cn(fieldBase, invalid && "border-red-400/50")}
          placeholder={label === "Email" ? "you@company.com" : undefined}
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
    <svg className="animate-spin" viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.25" />
      <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}
