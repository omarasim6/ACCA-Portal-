import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/dashboard", label: "MyACCA home" },
  { to: "/my-details", label: "My details" },
  { to: "/dashboard", label: "Personal documents" },
  { to: "/dashboard", label: "Statements & payment receipts" },
  { to: "/exam-results", label: "Exam results" },
  { to: "/", label: "Sign out" },
];

export function PortalHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <Link to="/dashboard" aria-label="MyACCA home">
          <span className="inline-flex h-12 w-14 items-center justify-center bg-primary text-lg font-extrabold tracking-tight text-primary-foreground">
            ACCA
          </span>
        </Link>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 shrink-0 place-items-center border border-border text-foreground"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-secondary">
          <ul className="mx-auto max-w-3xl px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.label} className="border-b border-border last:border-0">
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
