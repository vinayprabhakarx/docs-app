import Link from 'next/link';
import { ArrowUpRight, type LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  label: string;
}

export function CategoryCard({
  title,
  description,
  href,
  icon: Icon,
  label,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col gap-4 rounded-xl border border-fd-border bg-fd-card p-6 transition-colors hover:border-fd-primary/40 hover:bg-fd-accent/40"
    >
      <div className="flex items-center justify-between">
        <span className="flex size-11 items-center justify-center rounded-lg border border-fd-border bg-fd-background text-fd-primary transition-colors group-hover:border-fd-primary/40">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <ArrowUpRight
          className="size-5 text-fd-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fd-foreground"
          aria-hidden="true"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-fd-foreground">{title}</h3>
          <span className="text-xs font-medium text-fd-muted-foreground">
            {label}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-fd-muted-foreground text-pretty">
          {description}
        </p>
      </div>
    </Link>
  );
}
