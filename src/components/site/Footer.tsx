import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream py-14 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-xl">SYMPHONIE</span>
          <span className="text-[10px] tracking-luxury uppercase text-muted-foreground">(by K)</span>
        </Link>
        <p className="text-[10px] tracking-luxury uppercase text-muted-foreground text-center">
          © {new Date().getFullYear()} Symphonie · Gombe, Kinshasa — Tous droits réservés
        </p>
        <div className="flex gap-6">
          <Link to="/collection" className="text-[10px] tracking-luxury uppercase hover:text-accent">Collection</Link>
          <Link to="/contact" className="text-[10px] tracking-luxury uppercase hover:text-accent">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
