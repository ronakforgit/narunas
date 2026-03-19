import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const teamPlaceholders = [
  { name: "Name", title: "Co-founder & CEO" },
  { name: "Name", title: "Co-founder & CTO" },
  { name: "Name", title: "Head of Research" },
];

const About = () => {
  const heroRef = useScrollReveal();
  const missionRef = useScrollReveal();
  const diffRef = useScrollReveal();
  const teamRef = useScrollReveal();

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <h1 className="fade-in-up font-serif text-4xl text-foreground sm:text-5xl">
          We're rethinking the science of prediction.
        </h1>
        <p className="fade-in-up mt-6 max-w-3xl text-lg text-muted-foreground" style={{ transitionDelay: "0.1s" }}>
          Presage was built on a simple premise: the most important decisions are the ones traditional research can't answer.
        </p>
      </section>

      {/* Mission */}
      <section ref={missionRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <h2 className="fade-in-up font-serif text-3xl text-foreground leading-snug">
            We believe that simulating the future is more honest than surveying it.
          </h2>
          <p className="fade-in-up text-muted-foreground" style={{ transitionDelay: "0.1s" }}>
            Surveys measure what people say. Presage measures what populations do — by building them, giving them memories, and watching them react. The result is a research methodology that doesn't require respondents, doesn't introduce interviewer bias, and can represent populations that have never been accessible to traditional research.
          </p>
        </div>
      </section>

      {/* Differentiators */}
      <section ref={diffRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Open architecture",
              body: "Built on peer-reviewed simulation infrastructure, not proprietary black boxes.",
            },
            {
              title: "Population fidelity",
              body: "Every agent is grounded in real demographic data and behavioral research.",
            },
            {
              title: "Decision-ready output",
              body: "Reports are structured for operators, not researchers. You get a recommendation, not a dataset.",
            },
          ].map((item, i) => (
            <div key={item.title} className="fade-in-up border-t border-border pt-6" style={{ transitionDelay: `${i * 0.1}s` }}>
              <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <h2 className="fade-in-up font-serif text-3xl text-foreground">Team</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {teamPlaceholders.map((member, i) => (
            <div key={i} className="fade-in-up" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="aspect-square rounded-lg bg-card border border-border" />
              <h3 className="mt-4 font-sans text-sm font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.title}</p>
            </div>
          ))}
        </div>

        {/* Careers */}
        <div className="fade-in-up mt-24 border-t border-border pt-12" style={{ transitionDelay: "0.3s" }}>
          <p className="max-w-2xl text-muted-foreground">
            We're a small team working at the frontier of multi-agent simulation and applied AI.
          </p>
          <a href="#" className="mt-4 inline-block text-sm font-medium text-primary hover:text-primary/80">
            See open roles →
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;
