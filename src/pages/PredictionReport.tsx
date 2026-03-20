import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { predictions } from "@/data/predictions";

const statusStyles: Record<string, string> = {
  PENDING: "border border-muted-foreground/40 text-muted-foreground",
  CONFIRMED: "bg-emerald-900/60 text-emerald-300",
  REVISED: "bg-amber-900/60 text-amber-300",
};

const moduleStyles: Record<string, string> = {
  Signal: "bg-primary/20 text-primary",
  Civitas: "bg-teal-900/60 text-teal-300",
  Mandate: "bg-amber-900/60 text-amber-300",
};

const moduleLinks: Record<string, string> = {
  Signal: "/products/signal",
  Civitas: "/products/civitas",
  Mandate: "/products/mandate",
};

const PredictionReport = () => {
  const { slug } = useParams<{ slug: string }>();
  const ref = useScrollReveal();
  const prediction = predictions.find((p) => p.slug === slug);

  if (!prediction) {
    return (
      <Layout>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <h1 className="font-serif text-3xl text-foreground">Report not found.</h1>
          <Link to="/predictions" className="mt-4 inline-block text-sm text-primary hover:text-primary/80">
            ← Back to predictions
          </Link>
        </div>
      </Layout>
    );
  }

  const { content } = prediction;

  return (
    <Layout>
      <article ref={ref} className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
        {/* Header */}
        <div className="fade-in-up flex items-center gap-3">
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${moduleStyles[prediction.module]}`}>
            {prediction.module}
          </span>
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusStyles[prediction.status]}`}>
            {prediction.status}
          </span>
        </div>

        <h1 className="fade-in-up mt-6 font-serif text-3xl text-foreground sm:text-4xl" style={{ transitionDelay: "0.05s" }}>
          {prediction.title}
        </h1>

        <p className="fade-in-up mt-3 text-sm text-muted-foreground" style={{ transitionDelay: "0.1s" }}>
          Published {prediction.date}
        </p>

        {content ? (
          <>
            <p className="fade-in-up mt-8 text-muted-foreground leading-relaxed" style={{ transitionDelay: "0.15s" }}>
              {content.executiveSummary}
            </p>

            <Section title="The Question" delay="0.2s">{content.question}</Section>
            <Section title="The Population" delay="0.25s">{content.population}</Section>
            <Section title="The Simulation" delay="0.3s">{content.simulation}</Section>
            <Section title="The Prediction" delay="0.35s">{content.prediction}</Section>

            {content.outcome && (prediction.status === "CONFIRMED" || prediction.status === "REVISED") && (
              <Section title="Outcome" delay="0.4s">{content.outcome}</Section>
            )}
          </>
        ) : (
          <p className="fade-in-up mt-8 text-muted-foreground" style={{ transitionDelay: "0.15s" }}>
            {prediction.summary}
          </p>
        )}

        {/* Bottom CTAs */}
        <div className="fade-in-up mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between" style={{ transitionDelay: "0.45s" }}>
          <Link
            to={moduleLinks[prediction.module]}
            className="text-sm font-medium text-primary hover:text-primary/80"
          >
            Explore {prediction.module} →
          </Link>
          <Link
            to="/contact"
            className="rounded-md bg-primary px-6 py-3 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Request a simulation
          </Link>
        </div>
      </article>
    </Layout>
  );
};

const Section = ({ title, delay, children }: { title: string; delay: string; children: React.ReactNode }) => (
  <div className="fade-in-up mt-10" style={{ transitionDelay: delay }}>
    <h2 className="font-serif text-xl text-foreground">{title}</h2>
    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{children}</p>
  </div>
);

export default PredictionReport;
