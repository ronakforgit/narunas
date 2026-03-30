import { useState } from "react";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    module: "",
    decision: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.organization.trim()) e.organization = "Organization is required";
    if (!form.module) e.module = "Please select a domain";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }
    setErrors({});

    const subject = encodeURIComponent(`Demo Request – ${form.module} – ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.organization}\nRole: ${form.role}\nDomain: ${form.module}\n\nDecision:\n${form.decision}`
    );
    window.open(`mailto:support@narunas.io?subject=${subject}&body=${body}`, "_self");
    setSubmitted(true);
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => {
      const n = { ...prev };
      delete n[field];
      return n;
    });
  };

  const inputClass =
    "w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary";

  return (
    <Layout>
      <section ref={ref} className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Sidebar */}
          <div className="fade-in-up lg:col-span-1">
            <h1 className="font-serif text-4xl text-foreground">Request a demo.</h1>
            <p className="mt-4 text-muted-foreground">
              Tell us about the decision you need to make. We will show you how Narunas simulates it.
            </p>
            <div className="mt-12 space-y-4 text-sm text-muted-foreground">
              <p>We respond within one business day.</p>
              <p>No commitment required.</p>
              <p>Available for enterprise, government, and campaign contracts.</p>
              <p className="mt-6">
                Or email us directly at{" "}
                <a href="mailto:support@narunas.io" className="text-primary hover:underline">
                  support@narunas.io
                </a>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="fade-in-up lg:col-span-2" style={{ transitionDelay: "0.1s" }}>
            {submitted ? (
              <div className="rounded-lg border border-primary/30 bg-primary/5 px-8 py-12 text-center">
                <h2 className="font-serif text-2xl text-foreground">Thank you.</h2>
                <p className="mt-4 text-muted-foreground">We will be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Full name</label>
                    <input className={inputClass} value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Jane Doe" />
                    {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Work email</label>
                    <input type="email" className={inputClass} value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="jane@company.com" />
                    {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Organization</label>
                    <input className={inputClass} value={form.organization} onChange={(e) => update("organization", e.target.value)} placeholder="Acme Corp" />
                    {errors.organization && <p className="mt-1 text-xs text-destructive">{errors.organization}</p>}
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Role and title</label>
                    <input className={inputClass} value={form.role} onChange={(e) => update("role", e.target.value)} placeholder="VP Strategy" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Which domain are you interested in?</label>
                  <select className={inputClass} value={form.module} onChange={(e) => update("module", e.target.value)}>
                    <option value="">Select a domain</option>
                    <option value="signal">Signal</option>
                    <option value="civitas">Civitas</option>
                    <option value="mandate">Mandate</option>
                    <option value="all">All three</option>
                  </select>
                  {errors.module && <p className="mt-1 text-xs text-destructive">{errors.module}</p>}
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Describe the decision you are trying to inform</label>
                  <textarea className={`${inputClass} min-h-[120px]`} value={form.decision} onChange={(e) => update("decision", e.target.value)} placeholder="We are evaluating a pricing change across our enterprise tier and need to understand likely churn impact..." />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Request a demo
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;