import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ModuleCard from "@/components/ModuleCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const modules = [
  {
    label: "COMMERCIAL",
    title: "Signal",
    description:
      "Pressure-test market strategies, simulate consumer reactions, and forecast demand before committing capital. Know which move wins before you make it.",
    capabilities: [
      "Creative testing",
      "Product launches",
      "Price optimization",
      "Market segmentation",
      "Churn prediction",
      "Competitive positioning",
    ],
    href: "/products/signal",
  },
  {
    label: "GOVERNMENT",
    title: "Civitas",
    description:
      "Simulate how citizens, institutions, and stakeholders respond to policy initiatives, crisis events, or public communications. Design better outcomes before anything goes live.",
    capabilities: [
      "Policy sequencing",
      "Crisis response",
      "Regulatory impact",
      "Public communications",
      "Unreachable population modeling",
      "Infrastructure rollout",
    ],
    href: "/products/civitas",
  },
  {
    label: "POLITICAL",
    title: "Mandate",
    description:
      "Understand how events, endorsements, and narratives shift sentiment and turnout across any electorate. Choose the strategy that changes the result.",
    capabilities: [
      "Election forecasting",
      "Voter turnout modeling",
      "Message testing",
      "Opposition scenario planning",
      "Endorsement impact",
      "Ground game strategy",
    ],
    href: "/products/mandate",
  },
];

const steps = [
  { num: "01", title: "Seed", desc: "Upload any document: a policy draft, product brief, financial report, or news article." },
  { num: "02", title: "Map", desc: "Narunas extracts a knowledge graph of entities, relationships, and context from your material." },
  { num: "03", title: "Spawn", desc: "Thousands of AI agents are generated, each with a unique personality, memory, and behavioral logic." },
  { num: "04", title: "Simulate", desc: "Agents interact freely across a simulated environment. Opinions form, shift, and spread." },
  { num: "05", title: "Report", desc: "A structured prediction report is generated covering opinion clusters, turning points, and likely outcomes." },
];

const Index = () => {
  const heroRef = useScrollReveal();
  const problemRef = useScrollReveal();
  const howRef = useScrollReveal();
  const modulesRef = useScrollReveal();
  const proofRef = useScrollReveal();
  const interviewRef = useScrollReveal();

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 text-center">
        <h1 className="fade-in-up max-w-4xl font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Simulate the decision.
          <br />
          Before you make it.
        </h1>
        <p className="fade-in-up mt-6 max-w-2xl text-lg text-muted-foreground" style={{ transitionDelay: "0.1s" }}>
          Narunas builds digital populations to predict how markets, citizens, and electorates respond to any event before it happens.
        </p>
        <div className="fade-in-up mt-10 flex flex-wrap items-center justify-center gap-4" style={{ transitionDelay: "0.2s" }}>
          <Link
            to="/contact"
            className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Request a demo
          </Link>
          <a
            href="#how-it-works"
            className="rounded-md border border-foreground/30 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/60"
          >
            See how it works
          </a>
        </div>

        {/* Stat bar */}
        <div className="fade-in-up mt-16 flex flex-col items-center gap-6 border border-border rounded-lg px-8 py-6 sm:flex-row sm:gap-0 sm:divide-x sm:divide-border" style={{ transitionDelay: "0.3s" }}>
          {[
            { num: "1,000,000+", label: "Agents per simulation" },
            { num: "3", label: "Domains: Signal, Civitas, Mandate" },
            { num: "10x", label: "Faster than traditional research" },
          ].map((stat) => (
            <div key={stat.label} className="px-8 text-center">
              <div className="font-serif text-2xl text-foreground">{stat.num}</div>
              <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section ref={problemRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <h2 className="fade-in-up font-serif text-3xl text-foreground sm:text-4xl">
          Traditional research is broken.
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Surveys lie.",
              body: "People are unreliable narrators of their own behavior. Memory fails, incentives distort answers, and social pressure changes what people say versus what they actually do.",
            },
            {
              title: "Inaccessible.",
              body: "The populations that matter most are the ones you can never reach at scale. Policymakers, high-net-worth households, rural voters. They shape outcomes but rarely show up in research.",
            },
            {
              title: "No future.",
              body: "You cannot survey a decision that has not happened yet. New products, new policies, new campaigns all involve conditions that do not exist yet, which makes traditional research useless for the decisions that matter most.",
            },
          ].map((item, i) => (
            <div key={item.title} className="fade-in-up border-t border-border pt-6" style={{ transitionDelay: `${i * 0.1}s` }}>
              <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section ref={howRef} id="how-it-works" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <span className="fade-in-up font-sans text-xs font-medium uppercase tracking-wider text-primary">
          HOW IT WORKS
        </span>
        <h2 className="fade-in-up mt-4 font-serif text-3xl text-foreground sm:text-4xl">
          A living simulation of human behavior.
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <div key={step.num} className="fade-in-up" style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className="font-sans text-xs font-medium text-primary">{step.num}</span>
              <h3 className="mt-2 font-serif text-lg text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="fade-in-up mt-12 border-l-2 border-l-primary bg-primary/5 px-8 py-6" style={{ transitionDelay: "0.4s" }}>
          <p className="text-sm text-foreground/90">
            You can introduce new variables at any point during a simulation. A policy reversal, a competitor announcement, a breaking headline. Watch how the population responds in real time.
          </p>
        </div>
      </section>

      {/* Products */}
      <section ref={modulesRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <span className="fade-in-up font-sans text-xs font-medium uppercase tracking-wider text-primary">
          DOMAINS
        </span>
        <h2 className="fade-in-up mt-4 font-serif text-3xl text-foreground sm:text-4xl">
          One platform. Three domains.
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {modules.map((mod, i) => (
            <div key={mod.title} className="fade-in-up" style={{ transitionDelay: `${i * 0.1}s` }}>
              <ModuleCard {...mod} />
            </div>
          ))}
        </div>
      </section>

      {/* Proof */}
      <section ref={proofRef} className="border-y border-border py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <blockquote className="fade-in-up font-serif text-2xl leading-relaxed text-foreground sm:text-3xl">
            "In an independent validation study, our simulation recreated a six-month primary research report overnight. Where results diverged, the simulation was more accurate."
          </blockquote>
          <p className="fade-in-up mt-6 text-sm text-muted-foreground" style={{ transitionDelay: "0.1s" }}>
            Validated against real-world research outcomes across commercial, policy, and electoral domains.
          </p>
          <a href="#" className="fade-in-up mt-4 inline-block text-sm font-medium text-primary hover:text-primary/80" style={{ transitionDelay: "0.2s" }}>
            Read the methodology
          </a>
        </div>
      </section>

      {/* Agent Interview */}
      <section ref={interviewRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="fade-in-up font-sans text-xs font-medium uppercase tracking-wider text-primary">
              AGENT INTERVIEW
            </span>
            <h2 className="fade-in-up mt-4 font-serif text-3xl text-foreground sm:text-4xl">
              Talk to the simulation.
            </h2>
            <p className="fade-in-up mt-6 text-muted-foreground" style={{ transitionDelay: "0.1s" }}>
              After every simulation, every agent stays available for direct conversation. Ask them why they reacted the way they did. Their answers are grounded in their full simulated experience, including memories, interactions, and context.
            </p>
          </div>

          {/* Mock terminal */}
          <div className="fade-in-up rounded-lg border border-border bg-card p-6 font-mono text-sm" style={{ transitionDelay: "0.2s" }}>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <span className="ml-2 text-xs text-muted-foreground">agent-interview</span>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-primary">You:</span>
                <span className="ml-2 text-foreground">Why did you oppose the policy change?</span>
              </div>
              <div>
                <span className="text-muted-foreground">Sarah, 44, suburban voter:</span>
                <p className="mt-1 text-foreground/80">
                  "After seeing the coverage last week and talking with a few people in my network, I do not trust that this has been thought through properly. The rollout feels rushed and nobody has explained the long-term cost."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;