import Link from "next/link";
import {
  ArrowRight,
  Atom,
  BookOpen,
  Braces,
  Briefcase,
  Coffee,
  FileCode2,
  Palette,
  Terminal,
} from "lucide-react";
import { CategoryCard } from "./category-card";

const categories = [
  {
    title: "HTML",
    label: "Markup",
    description:
      "HTML5 elements, forms, semantics, and accessible document structure.",
    href: "/docs/html",
    icon: FileCode2,
  },
  {
    title: "CSS",
    label: "Styling",
    description:
      "Selectors, Flexbox, Grid, animations, and responsive design patterns.",
    href: "/docs/css",
    icon: Palette,
  },
  {
    title: "JavaScript",
    label: "Language",
    description: "The DOM, async/await, closures, and modern ES6+ features.",
    href: "/docs/javascript",
    icon: Braces,
  },
  {
    title: "React",
    label: "Library",
    description: "Hooks, context, state management, and component composition.",
    href: "/docs/react",
    icon: Atom,
  },
  {
    title: "Interview Prep",
    label: "Career",
    description: "Comprehensive technical questions and answers for software engineering interviews.",
    href: "/docs/Interview",
    icon: Briefcase,
  },
  {
    title: "Java",
    label: "Language",
    description: "Core Java, Collections Framework, and Memory Management concepts.",
    href: "/docs/Java",
    icon: Coffee,
  },
  {
    title: "Neovim Guide",
    label: "Tools",
    description: "Complete setup, configuration, and developer workflows for Neovim mastery.",
    href: "/docs/NVIM",
    icon: Terminal,
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Minimal Hero Section */}
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center text-center px-6 pt-24 pb-20 sm:pt-32 sm:pb-24">
        <h1 className="max-w-4xl text-balance text-5xl font-bold tracking-tighter text-fd-foreground sm:text-7xl">
          Vinay / Docs
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-fd-muted-foreground sm:text-xl">
          A personal repository for technical notes, project documentation, and ongoing learning. Built to track my progress and explore new things.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/docs"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-fd-foreground px-6 text-sm font-medium text-fd-background transition-all hover:bg-fd-foreground/90 active:scale-95"
          >
            Start exploring
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto w-full max-w-5xl px-6 pb-24">
        <div className="mb-8 border-b border-fd-border pb-4">
          <h2 className="text-sm font-medium tracking-wide text-fd-muted-foreground uppercase">
            Browse Topics
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-20 flex flex-col items-start gap-4 border-t border-fd-border pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-medium text-fd-foreground">
              Always a work in progress
            </h3>
            <p className="max-w-md text-sm text-fd-muted-foreground">
              This site grows as I learn. Jump into any topic or start exploring the documentation.
            </p>
          </div>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-full bg-fd-secondary px-5 py-2.5 text-sm font-medium text-fd-secondary-foreground transition-colors hover:bg-fd-secondary/80"
          >
            View Docs
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-5xl px-6 py-8 text-center text-xs text-fd-muted-foreground">
        © {new Date().getFullYear()}{" "}
        <a
          href="https://vinayprabhakar.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-fd-foreground transition-opacity hover:opacity-80"
        >
          VinayPrabhakarX
        </a>
      </footer>
    </main>
  );
}
