import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Coffee,
  Terminal,
  Zap,
} from "lucide-react";
import { 
  SiGithub, 
  SiHtml5, 
  SiCss,
  SiJavascript, 
  SiReact, 
  SiSpringboot, 
  SiNeovim 
} from "@icons-pack/react-simple-icons";
import { CategoryCard } from "./category-card";

const categories = [
  {
    title: "Roadmaps",
    label: "Guide",
    description:
      "Learning roadmaps and structured guides, starting with the Fullstack Java Developer path.",
    href: "/docs/roadmap",
    icon: BookOpen,
  },
  {
    title: "HTML",
    label: "Markup",
    description:
      "HTML5 elements, forms, semantics, and accessible document structure.",
    href: "/docs/html",
    icon: SiHtml5,
  },
  {
    title: "CSS",
    label: "Styling",
    description:
      "Selectors, Flexbox, Grid, animations, and responsive design patterns.",
    href: "/docs/css",
    icon: SiCss,
  },
  {
    title: "JavaScript",
    label: "Language",
    description: "The DOM, async/await, closures, and modern ES6+ features.",
    href: "/docs/javascript",
    icon: SiJavascript,
  },
  {
    title: "React",
    label: "Library",
    description: "Hooks, context, state management, and component composition.",
    href: "/docs/react",
    icon: SiReact,
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
    icon: SiNeovim,
  },
  {
    title: "Spring Boot",
    label: "Framework",
    description: "Enterprise Java backend development with Spring Boot.",
    href: "/docs/springboot",
    icon: SiSpringboot,
  },
];

export default function HomePage() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden bg-fd-background">
      {/* Subtle Grid Background with Primary color glow */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-fd-primary opacity-20 blur-3xl"></div>
      </div>

      <section className="relative z-10 flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center sm:pt-40 sm:pb-24">
        {/* Pill Badge */}
        <Link 
          href="/docs/roadmap"
          className="group flex items-center gap-2 rounded-full border border-fd-border bg-fd-surface/50 px-4 py-1.5 text-sm font-medium text-fd-muted-foreground backdrop-blur-md transition-all hover:border-fd-primary/50 hover:text-fd-foreground"
        >
          <Zap className="size-4 text-amber-500" />
          <span>New: Fullstack Java Roadmap</span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>

        {/* Main Headline */}
        <h1 className="mt-8 max-w-4xl text-balance text-5xl font-extrabold tracking-tight text-fd-foreground sm:text-6xl md:text-7xl">
          Vinay /<span className="text-transparent bg-clip-text bg-gradient-to-r from-fd-foreground to-fd-muted-foreground">Docs</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-balance text-lg text-fd-muted-foreground sm:text-xl leading-relaxed">
          A personal repository for notes, project documentation, and ongoing learning. Built to track my progress and explore new things.
        </p>

        {/* CTA Group */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/docs/roadmap"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-fd-foreground px-8 text-sm font-medium text-fd-background shadow-sm transition-all hover:bg-fd-foreground/90 hover:scale-[1.02] active:scale-[0.98]"
          >
            <BookOpen className="size-4" />
            Explore the Roadmap
          </Link>
          <a
            href="https://github.com/vinayprabhakarx/docs-app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-fd-border bg-fd-background/50 backdrop-blur-sm px-8 text-sm font-medium text-fd-foreground shadow-sm transition-all hover:bg-fd-accent hover:scale-[1.02] active:scale-[0.98]"
          >
            <SiGithub className="size-4" />
            GitHub Repository
          </a>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24">
        <header className="mb-10 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-fd-foreground">
            Browse Documentation
          </h2>
          <p className="mt-4 text-fd-muted-foreground max-w-xl text-balance">
            Dive into specific technologies, frameworks, and career prep guides. Everything you need to master fullstack development.
          </p>
        </header>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>

        {/* Footer Note */}
        <aside className="mt-32 mb-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-fd-border bg-fd-card/50 p-8 text-center backdrop-blur-sm sm:flex-row sm:text-left lg:p-12">
          <div className="max-w-lg">
            <h3 className="text-2xl font-bold text-fd-foreground tracking-tight">
              Always Learning, Always Building.
            </h3>
            <p className="mt-2 text-fd-muted-foreground">
              This documentation site is a living ecosystem. It grows as I encounter new challenges and master new skills.
            </p>
          </div>
          <Link
            href="/docs/roadmap"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground transition-all hover:bg-fd-primary/90 hover:-translate-y-0.5"
          >
            Start Learning Now
          </Link>
        </aside>
      </section>

      <footer className="relative z-10 mx-auto w-full max-w-6xl border-t border-fd-border px-6 py-8 text-center text-sm text-fd-muted-foreground flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} VinayPrabhakarX</p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/vinayprabhakarx/docs-app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-fd-foreground transition-colors">
            <SiGithub className="size-4" /> GitHub
          </a>
          <a href="https://vinayprabhakar.dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-fd-foreground transition-colors">
            <Terminal className="size-4" /> Portfolio
          </a>
        </div>
      </footer>
    </main>
  );
}
