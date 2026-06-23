"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import {
  ArrowIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/icons";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const coreStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Prisma",
  "PostgreSQL",
  "Stripe",
];

export function Hero({
  projectCount,
  completedCount,
}: {
  projectCount: number;
  completedCount: number;
}) {
  const reduce = useReducedMotion();
  const firstName = site.name.split(" ")[0];

  const socials = [
    { label: "GitHub", href: site.social.github, Icon: GitHubIcon },
    { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedInIcon },
    { label: "Email", href: `mailto:${site.social.email}`, Icon: MailIcon },
  ];

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
      <Container>
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
          variants={reduce ? undefined : container}
          initial={reduce ? false : "hidden"}
          animate={reduce ? undefined : "show"}
        >
          {/* Left: copy */}
          <div className="max-w-2xl">
            <motion.div variants={reduce ? undefined : item}>
              <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for full-stack, front-end &amp; back-end roles
              </span>
            </motion.div>

            <motion.p
              variants={reduce ? undefined : item}
              className="eyebrow mt-6"
            >
              {site.role}
            </motion.p>

            <motion.h1
              variants={reduce ? undefined : item}
              className="mt-4 font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
            >
              I&apos;m {firstName}. I build{" "}
              <GradientText>polished, production-grade</GradientText> web apps.
            </motion.h1>

            <motion.p
              variants={reduce ? undefined : item}
              className="mt-6 max-w-xl text-lg leading-8 text-muted"
            >
              {site.summary}
            </motion.p>

            <motion.div
              variants={reduce ? undefined : item}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button href="/projects">
                View Projects <ArrowIcon />
              </Button>
              <Button href={site.cvPath} variant="secondary">
                <DownloadIcon /> Download CV
              </Button>
            </motion.div>

            <motion.div
              variants={reduce ? undefined : item}
              className="mt-8 flex items-center gap-3"
            >
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="glass flex h-11 w-11 items-center justify-center rounded-xl text-muted transition-colors hover:text-accent"
                >
                  <Icon />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: floating glass stat panel */}
          <motion.div
            variants={reduce ? undefined : item}
            className="relative hidden lg:block"
          >
            <FloatingPanel
              reduce={!!reduce}
              projectCount={projectCount}
              completedCount={completedCount}
            />
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          aria-hidden
          className="flex h-9 w-5 items-start justify-center rounded-full border border-line p-1.5"
          animate={reduce ? undefined : { opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.span
            className="h-1.5 w-1 rounded-full bg-accent"
            animate={reduce ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}

function FloatingPanel({
  reduce,
  projectCount,
  completedCount,
}: {
  reduce: boolean;
  projectCount: number;
  completedCount: number;
}) {
  return (
    <motion.div
      animate={reduce ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="glass relative rounded-2xl p-6"
    >
      {/* terminal chrome */}
      <div className="mb-5 flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-amber-400/70" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
        <span className="ml-3 font-mono text-xs text-faint">~/tarik — stack</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Stat value={`${projectCount}`} label="Projects" />
        <Stat value={`${completedCount}`} label="Shipped & live" />
      </div>

      <div className="mt-6">
        <p className="eyebrow mb-3">Core stack</p>
        <div className="flex flex-wrap gap-2">
          {coreStack.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-line bg-white/[0.02] p-4">
      <p className="font-display text-3xl font-semibold tracking-tight">
        <GradientText>{value}</GradientText>
      </p>
      <p className="mt-1 text-xs text-muted">{label}</p>
    </div>
  );
}
