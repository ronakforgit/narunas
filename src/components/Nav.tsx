import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="font-serif text-xl tracking-[0.2em] text-foreground">
          PRESAGE
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-sans transition-colors ${
                location.pathname.startsWith(link.href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Request a Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
