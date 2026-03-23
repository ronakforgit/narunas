import { useState } from "react";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Predictions = () => {
  const heroRef = useScrollReveal();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <Layout>
      <section ref={heroRef} className="flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center px-6 text-center">
        <span className="fade-in-up font-sans text-xs font-medium uppercase tracking-wider text-primary">
          PREDICTIONS
        </span>
        <h1 className="fade-in-up mt-6 max-w-3xl font-serif text-4xl text-foreground sm:text-5xl">
          We publish our predictions before outcomes are known.
        </h1>
        <div className="fade-in-up mt-8 max-w-2xl space-y-4 text-muted-foreground" style={{ transitionDelay: "0.1s" }}>
          <p>
            Most research is published after the fact. Narunas works the other way. We run a simulation on a real upcoming event, commit to a specific and measurable prediction, and publish it here before the outcome occurs. After the outcome happens, we update the post with what actually happened.
          </p>
          <p>
            Every confirmed prediction is verifiable proof. Every revised one is honest. We are running our first simulations now and will begin publishing here shortly.
          </p>
        </div>
        <p className="fade-in-up mt-8 text-sm text-muted-foreground/70" style={{ transitionDelay: "0.2s" }}>
          First predictions publishing soon.
        </p>

        {/* Email capture */}
        <div className="fade-in-up mt-8 w-full max-w-md" style={{ transitionDelay: "0.3s" }}>
          <p className="mb-3 text-sm text-muted-foreground">Get notified when we publish our first prediction.</p>
          {submitted ? (
            <p className="text-sm font-medium text-primary">You will be notified. Thank you.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your work email"
                required
                className="flex-1 rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Notify me
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Predictions;