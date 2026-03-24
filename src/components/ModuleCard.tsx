import { Link } from "react-router-dom";

interface ModuleCardProps {
  label: string;
  title: string;
  description: string;
  capabilities: string[];
  href: string;
}

const ModuleCard = ({ label, title, description, capabilities, href }: ModuleCardProps) => (
  <div className="flex flex-col rounded-lg border border-border bg-card p-8">
    <span className="mb-3 font-sans text-xs font-medium uppercase tracking-wider text-primary">
      {label}
    </span>
    <h3 className="mb-4 font-serif text-2xl text-card-foreground">{title}</h3>
    <p className="mb-1 text-xs text-muted-foreground/70 italic">Narunas for {label.toLowerCase()}</p>
    <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{description}</p>
    <div className="mb-6 flex flex-wrap gap-2">
      {capabilities.map((cap) => (
        <span
          key={cap}
          className="rounded-sm border border-border px-2 py-1 text-xs text-muted-foreground"
        >
          {cap}
        </span>
      ))}
    </div>
    <Link
      to={href}
      className="mt-auto font-sans text-sm font-medium text-primary transition-colors hover:text-primary/80"
    >
      Explore {title} →
    </Link>
  </div>
);

export default ModuleCard;
