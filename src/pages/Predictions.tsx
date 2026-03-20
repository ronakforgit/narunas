import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { predictions, type ModuleType } from "@/data/predictions";

const filters: ("All" | ModuleType)[] = ["All", "Signal", "Civitas", "Mandate"];

const statusStyles: Record<string, string> = {
  PENDING: "border border-muted-foreground/40 text-muted-foreground",
  CONFIRMED: "bg-emerald-900/60 text-emerald-300",
  REVISED: "bg-amber-900/60 text-amber-300",
};

const moduleStyles: Record<ModuleType, string> = {
  Signal: "bg-primary/20 text-primary",
  Civitas: "bg-teal-900/60 text-teal-300",
  Mandate: "bg-amber-900/60 text-amber-300",
};

const Predictions = () => {
  const [active, setActive] = useState<"All" | ModuleType>("All");
  const heroRef = useScrollReveal();
  const feedRef = useScrollReveal();

  const filtered = active === "All" ? predictions : predictions.filter((p) => p.module === active);

  return (
    <Layout>
      <section ref={heroRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <h1 className="fade-in-up font-serif text-4xl text-foreground sm:text-5xl">
          We publish our predictions.
        </h1>
        <p className="fade-in-up mt-6 max-w-3xl text-lg text-muted-foreground" style={{ transitionDelay: "0.1s" }}>
          Every simulation Presage runs is a testable claim about the future. We post them here — before outcomes are known.
        </p>
      </section>

      {/* Filter bar */}
      <div className="sticky top-16 z-40 border-y border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-3 lg:px-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Feed */}
      <section ref={feedRef} className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((p, i) => (
            <Link
              key={p.slug}
              to={`/predictions/${p.slug}`}
              className="fade-in-up group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="flex items-center gap-3">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${moduleStyles[p.module]}`}>
                  {p.module}
                </span>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusStyles[p.status]}`}>
                  {p.status}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{p.date}</span>
                <span className="text-sm font-medium text-primary">Read report →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Predictions;
