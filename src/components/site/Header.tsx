import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-background/85 backdrop-blur-md border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-wide">SYMPHONIE</span>
          <span className="text-[10px] tracking-luxury uppercase text-muted-foreground">(by K)</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-accent" }}
              className="text-xs tracking-luxury uppercase text-foreground/80 hover:text-accent transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/collection"
          className="hidden md:inline-block text-xs tracking-luxury uppercase border border-foreground px-5 py-3 hover:bg-foreground hover:text-background transition-colors"
        >
          Voir la Collection
        </Link>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-xs tracking-luxury uppercase"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/collection"
              onClick={() => setOpen(false)}
              className="text-xs tracking-luxury uppercase border border-foreground px-5 py-3 text-center"
            >
              Voir la Collection
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
