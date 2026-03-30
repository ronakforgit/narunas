import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Col 1 */}
          <div>
            <span className="font-serif text-lg tracking-[0.2em] text-foreground">NARUNAS</span>
            <p className="mt-3 text-sm text-muted-foreground">
              Predicting behavior before it happens.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="mb-4 font-sans text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Domains", href: "/products" },
                { label: "Signal", href: "/products/signal" },
                { label: "Civitas", href: "/products/civitas" },
                { label: "Mandate", href: "/products/mandate" },
                { label: "Predictions", href: "/predictions" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="mb-4 font-sans text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Contact
            </h4>
            <a
              href="mailto:support@narunas.io"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              support@narunas.io
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Reach out for demos, partnerships, or general inquiries.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <span>2026 Narunas. All rights reserved.</span>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-foreground">Privacy Policy</span>
            <span className="cursor-pointer hover:text-foreground">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;