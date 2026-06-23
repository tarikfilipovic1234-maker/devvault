import type { Project } from "@/lib/types";

/**
 * Featured projects. Adding a new flagship (e.g. AutoVault) is just another
 * entry here — no layout or page changes required.
 *
 * NOTE: `repoUrl` values are constructed from the owner's GitHub handle and may
 * need correcting to the real repository names. `thumbnail` paths expect images
 * under /public/projects/<slug>.png (placeholders until real screenshots land).
 */
export const projects: Project[] = [
  {
    slug: "darceflow",
    name: "Darceflow",
    description:
      "Multi-tenant SaaS dashboard for Brazilian Jiu-Jitsu gyms — memberships, attendance, belt progression, class scheduling and billing in one place.",
    categories: ["SaaS", "Full-stack"],
    tech: ["Next.js 16", "React 19", "TypeScript", "Prisma 7", "Stripe", "PostgreSQL"],
    liveUrl: "https://darceflow.vercel.app",
    repoUrl: "https://github.com/tarikfilipovic1234-maker/darceflow",
    keyFeatures: [
      "Multi-tenant workspaces with isolated data per gym",
      "Membership & subscription billing via Stripe",
      "Attendance tracking and belt progression",
      "Class scheduling and roster management",
    ],
    status: "In Progress",
    featured: true,
    order: 50,
    thumbnail: "/projects/darceflow.png",
    overview:
      "Darceflow is a multi-tenant SaaS platform that gives Brazilian Jiu-Jitsu academies a single dashboard for running the business side of the gym: members, attendance, belt promotions, class schedules and recurring billing.",
    motivation:
      "BJJ gyms typically juggle spreadsheets, paper attendance sheets and a separate payment processor. I wanted to build a genuinely multi-tenant product — one deployment serving many gyms with strict data isolation — and learn the operational realities of subscription billing along the way.",
    features: [
      "Tenant-scoped data model so each gym only ever sees its own members and classes",
      "Stripe-powered memberships with recurring subscriptions and billing portal",
      "Attendance check-in with per-student history",
      "Belt and stripe progression tracking",
      "Class scheduling with instructor assignment and rosters",
      "Role-based access for owners, instructors and front-desk staff",
    ],
    architecture:
      "Next.js 16 App Router with Server Actions for mutations and Prisma 7 over PostgreSQL. Multi-tenancy is enforced at the data-access layer: every query is scoped by tenant id derived from the authenticated session, preventing cross-gym data leakage. Stripe handles subscription lifecycle via webhooks that reconcile billing state back into the database.",
    challenges: [
      "Designing a tenant isolation strategy that is safe by default rather than relying on remembering to filter every query",
      "Keeping Stripe subscription state and local membership records consistent through webhooks",
      "Modeling flexible class schedules without overcomplicating the data model",
    ],
    lessons: [
      "Centralizing tenant scoping in the data layer is far safer than scattering filters across the app",
      "Webhook-driven billing needs idempotency from day one",
      "Multi-tenant auth shapes nearly every architectural decision downstream",
    ],
  },
  {
    slug: "enamel",
    name: "Enamel",
    description:
      "Bilingual dental-clinic website with a real appointment-booking engine — availability, staff time-off and overlap prevention — plus a staff admin area.",
    categories: ["Booking", "Full-stack"],
    tech: ["Next.js 16", "React 19", "TypeScript", "Prisma 7", "Neon Auth", "Resend", "i18n"],
    liveUrl: "https://enamel-pi.vercel.app",
    repoUrl: "https://github.com/tarikfilipovic1234-maker/enamel",
    keyFeatures: [
      "Real booking engine with availability and overlap prevention",
      "Staff time-off handling",
      "Bilingual (i18n) patient-facing site",
      "Staff admin for managing appointments",
    ],
    status: "Completed",
    featured: true,
    order: 40,
    thumbnail: "/projects/enamel.png",
    overview:
      "Enamel is a bilingual dental-clinic website backed by a working appointment-booking engine. Patients browse services and book real time slots; staff manage appointments and availability through an admin area.",
    motivation:
      "I wanted to build a booking system that handles the genuinely hard parts — computing real availability, respecting staff time-off, and preventing double-booking — rather than a cosmetic 'request an appointment' form.",
    features: [
      "Availability computed from working hours, existing appointments and staff time-off",
      "Overlap prevention so two patients can't book the same slot",
      "Bilingual UI with full internationalization",
      "Transactional booking confirmation emails via Resend",
      "Staff admin to view, create and manage appointments",
      "Authentication for staff via Neon Auth",
    ],
    architecture:
      "Next.js 16 App Router with Prisma 7 over a Neon PostgreSQL database. Booking logic lives in server-side functions that derive open slots and validate requests transactionally to guarantee no overlaps. Resend sends confirmation emails; i18n drives the bilingual experience.",
    challenges: [
      "Correctly computing availability from multiple constraints (hours, existing bookings, time-off)",
      "Preventing race conditions where two requests book the same slot",
      "Keeping the booking flow fully translated and accessible",
    ],
    lessons: [
      "Booking correctness must be enforced on the server inside a transaction, never trusted to the client",
      "Edge cases (time-off, buffers, timezones) are where booking systems actually live",
      "i18n is far easier when designed in from the start than retrofitted",
    ],
  },
  {
    slug: "voltra",
    name: "Voltra",
    description:
      "Energy-drink brand and store (Monster-style) with Stripe checkout, inventory holds, loyalty tiers, 6-language i18n and an admin console.",
    categories: ["E-commerce", "Full-stack"],
    tech: ["Next.js 16", "React 19", "TypeScript", "Prisma", "Auth.js v5", "Stripe"],
    liveUrl: "https://voltra-gold.vercel.app",
    repoUrl: "https://github.com/tarikfilipovic1234-maker/voltra",
    keyFeatures: [
      "Stripe checkout with inventory holds",
      "Loyalty tiers",
      "6-language internationalization",
      "Admin console for catalog and orders",
    ],
    status: "Completed",
    featured: true,
    order: 30,
    thumbnail: "/projects/voltra.png",
    overview:
      "Voltra is a full e-commerce experience for a fictional energy-drink brand: a bold marketing storefront combined with a real shop featuring Stripe checkout, inventory management and a loyalty program, localized into six languages.",
    motivation:
      "I wanted to build commerce mechanics that go beyond 'add to cart and pay' — reserving inventory during checkout, rewarding repeat customers with loyalty tiers, and supporting a genuinely international audience.",
    features: [
      "Stripe checkout with server-validated carts",
      "Inventory holds that reserve stock during checkout to avoid overselling",
      "Loyalty tiers that reward returning customers",
      "Six-language internationalization across the storefront",
      "Admin console for products, inventory and orders",
      "Authentication via Auth.js v5",
    ],
    architecture:
      "Next.js 16 App Router with Prisma over PostgreSQL. Carts and inventory are validated server-side; inventory holds temporarily reserve stock so concurrent shoppers can't oversell a product. Stripe handles payment, with order state reconciled after checkout. Auth.js v5 manages sessions for customers and admins.",
    challenges: [
      "Implementing inventory holds that reserve and release stock reliably",
      "Coordinating Stripe checkout with local order and inventory state",
      "Maintaining a consistent experience across six locales",
    ],
    lessons: [
      "Overselling is an inventory-timing problem; holds with expiry solve it cleanly",
      "Treat the server as the source of truth for prices and stock — never the client",
      "Localized commerce touches formatting, currency and copy everywhere",
    ],
  },
  {
    slug: "usa2bih",
    name: "USA2BIH",
    description:
      "US → Bosnia vehicle-import platform: catalog, landed-cost calculator (customs + VAT → BAM/EUR), comparison tool, user dashboard and admin panel.",
    categories: ["Full-stack", "E-commerce"],
    tech: ["Next.js 16", "React 19", "TypeScript", "Prisma 7", "Neon", "Better Auth", "Vitest"],
    liveUrl: "https://usa2bih.vercel.app",
    repoUrl: "https://github.com/tarikfilipovic1234-maker/usa2bih",
    keyFeatures: [
      "Landed-cost calculator (customs + VAT, BAM/EUR)",
      "Vehicle catalog and comparison tool",
      "User dashboard",
      "Admin panel with tested business logic (Vitest + CI)",
    ],
    status: "Completed",
    featured: false,
    order: 20,
    thumbnail: "/projects/usa2bih.png",
    overview:
      "USA2BIH helps buyers import vehicles from the United States to Bosnia. It combines a vehicle catalog with a landed-cost calculator that estimates the true delivered price — customs duties and VAT converted into BAM and EUR — plus a comparison tool, a user dashboard and an admin panel.",
    motivation:
      "Importing a car involves opaque costs that are hard to estimate up front. I built a tool that turns those fees into a transparent, accurate landed-cost figure, and treated correctness seriously with a test suite and CI.",
    features: [
      "Landed-cost calculator covering customs and VAT with BAM/EUR conversion",
      "Searchable vehicle catalog",
      "Side-by-side comparison tool",
      "User dashboard for saved vehicles and estimates",
      "Admin panel for managing inventory and rates",
      "Unit-tested calculation logic with GitHub Actions CI",
    ],
    architecture:
      "Next.js 16 (React 19) App Router with Prisma 7 over a Neon serverless PostgreSQL database and Better Auth for authentication. The cost-calculation logic is isolated into pure, well-tested functions covered by Vitest and run in CI, so the most business-critical part of the app is protected against regressions.",
    challenges: [
      "Modeling customs and VAT rules accurately and converting between currencies",
      "Keeping the calculation logic pure and testable",
      "Designing dashboards and an admin panel that stay fast over a serverless database",
    ],
    lessons: [
      "Pure functions plus a test suite make complex domain math trustworthy",
      "CI on the calculation logic caught regressions before users would",
      "Serverless Postgres rewards careful query design and connection handling",
    ],
  },
  {
    slug: "reactivity",
    name: "Reactivity",
    description:
      "Full-stack activity manager built on a layered .NET architecture (API / Application / Domain / Persistence) with a React client.",
    categories: ["Full-stack"],
    tech: ["C#", ".NET", "TypeScript", "React", "REST"],
    liveUrl: null,
    repoUrl: "https://github.com/tarikfilipovic1234-maker/Reactivity",
    keyFeatures: [
      "Layered .NET backend (API / Application / Domain / Persistence)",
      "CQRS-style application layer",
      "React + TypeScript client",
      "RESTful API",
    ],
    status: "In Progress",
    featured: true,
    order: 10,
    thumbnail: "/projects/reactivity.png",
    overview:
      "Reactivity is a full-stack activity-management application built to explore clean, layered backend architecture in .NET paired with a modern React client. The backend is split into distinct API, Application, Domain and Persistence layers.",
    motivation:
      "Most of my work is in the TypeScript/Next.js ecosystem, so I built Reactivity to deepen my .NET and C# skills and to practice strict separation of concerns in a layered architecture with a clear domain core.",
    features: [
      "Layered solution with clear boundaries between API, Application, Domain and Persistence",
      "Application layer organized around discrete use-case handlers",
      "Domain entities kept free of infrastructure concerns",
      "React + TypeScript single-page client consuming a REST API",
      "CRUD for activities with a clean, typed contract between client and server",
    ],
    architecture:
      "A .NET solution divided into four layers — API (controllers/HTTP), Application (use-case handlers), Domain (entities and core rules) and Persistence (EF Core data access). Dependencies point inward toward the Domain, keeping business logic independent of frameworks. A React + TypeScript client consumes the REST API.",
    challenges: [
      "Enforcing dependency direction so the Domain stays framework-agnostic",
      "Mapping between domain entities, persistence models and API contracts",
      "Bridging a strongly-typed C# backend with a TypeScript frontend",
    ],
    lessons: [
      "Layered architecture pays off in testability and clarity as a project grows",
      "Keeping the domain free of infrastructure makes the core logic easy to reason about",
      "The patterns transfer: clean separation of concerns matters in any stack",
    ],
  },
];
