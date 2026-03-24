import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ModuleDetailProps {
  label: string;
  headline: string;
  description: string;
  capabilities: { name: string; detail: string }[];
  steps: string[];
  questions: string[];
}

const ModuleDetailPage = ({ label, headline, description, capabilities, steps, questions }: ModuleDetailProps) => {
  const heroRef = useScrollReveal();
  const capRef = useScrollReveal();
  const flowRef = useScrollReveal();
  const qRef = useScrollReveal();

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <span className="fade-in-up font-sans text-xs font-medium uppercase tracking-wider text-primary">
          {label}
        </span>
        <h1 className="fade-in-up mt-4 max-w-3xl font-serif text-4xl text-foreground sm:text-5xl">
          {headline}
        </h1>
        <p className="fade-in-up mt-6 max-w-2xl text-lg text-muted-foreground" style={{ transitionDelay: "0.1s" }}>
          {description}
        </p>
        <Link
          to="/contact"
          className="fade-in-up mt-8 inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          style={{ transitionDelay: "0.2s" }}
        >
          Request a demo
        </Link>
      </section>

      {/* Capabilities */}
      <section ref={capRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <h2 className="fade-in-up font-serif text-3xl text-foreground">Capabilities</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {capabilities.map((cap, i) => (
            <div key={cap.name} className="fade-in-up border-t border-border pt-6" style={{ transitionDelay: `${i * 0.05}s` }}>
              <h3 className="font-sans text-sm font-semibold text-foreground">{cap.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{cap.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section ref={flowRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <h2 className="fade-in-up font-serif text-3xl text-foreground">How it works</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="fade-in-up" style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="font-sans text-xs font-medium text-primary">Step {i + 1}</span>
              <p className="mt-2 text-sm text-muted-foreground">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Questions */}
      <section ref={qRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <h2 className="fade-in-up font-serif text-3xl text-foreground">Questions Narunas can answer</h2>
        <div className="mt-12 space-y-4">
          {questions.map((q, i) => (
            <div
              key={i}
              className="fade-in-up border-l-2 border-l-primary border border-border bg-card px-6 py-4 rounded-lg"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <p className="text-sm text-foreground/90">"{q}"</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ModuleDetailPage;