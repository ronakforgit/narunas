import Layout from "@/components/Layout";
import ModuleCard from "@/components/ModuleCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import GlowOrb from "@/components/graphics/GlowOrb";
import GridPattern from "@/components/graphics/GridPattern";
import CrosshairMarker from "@/components/graphics/CrosshairMarker";

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

const Products = () => {
  const ref = useScrollReveal();

  return (
    <Layout>
      <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 overflow-hidden" ref={ref}>
        <GridPattern className="inset-0 h-full w-full" />
        <GlowOrb className="-top-20 left-1/3" size="lg" />
        <CrosshairMarker className="top-20 right-16 hidden lg:block" />

        <h1 className="fade-in-up relative font-serif text-4xl text-foreground sm:text-5xl">
          One platform. Three domains.
        </h1>
        <p className="fade-in-up relative mt-6 max-w-3xl text-lg text-muted-foreground" style={{ transitionDelay: "0.1s" }}>
          Narunas applies the same simulation engine to three distinct domains. Each is purpose-built for the decisions that matter most in its field.
        </p>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {modules.map((mod, i) => (
            <div key={mod.title} className="fade-in-up" style={{ transitionDelay: `${i * 0.1}s` }}>
              <ModuleCard {...mod} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Products;
