import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, UserRound, Lock, ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { products } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SYMPHONIE_FASHION" },
      { name: "description", content: "Boutique de mode haut de gamme à Gombe, Kinshasa. Prêt-à-porter, chaussures et accessoires exclusifs." },
    ],
  }),
  component: Index,
});

function Hero() {
  return (
    <section className="pt-20">
      <div className="grid lg:grid-cols-12 min-h-[88vh]">
        <div className="lg:col-span-5 flex items-center px-6 lg:px-16 py-16 lg:py-0 order-2 lg:order-1">
          <div className="max-w-md">
            <p className="text-[10px] tracking-luxury uppercase text-accent mb-6">Collection Saison 2026</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
              Exprimez votre élégance au quotidien
            </h1>
            <p className="mt-8 text-base text-muted-foreground leading-relaxed font-light">
              Prêt-à-porter, chaussures et accessoires exclusifs au cœur de Kinshasa, Gombe.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link to="/collection" className="inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-xs tracking-luxury uppercase hover:bg-accent hover:text-foreground transition-colors">
                Découvrir la nouvelle collection
              </Link>
              <Link to="/apropos" className="text-xs tracking-luxury uppercase border-b border-foreground pb-1">
                Notre univers
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 relative order-1 lg:order-2 min-h-[60vh] lg:min-h-full overflow-hidden">
          <img src={hero} alt="Lookbook Symphonie by K" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-sm px-5 py-3">
            <p className="text-[10px] tracking-luxury uppercase text-muted-foreground">Lookbook FW · 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Teaser() {
  const featured = products.slice(0, 3);
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-[10px] tracking-luxury uppercase text-accent mb-4">Aperçu</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-2xl">Quelques pièces de la saison</h2>
        <div className="w-px h-12 bg-border mt-10" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
        {featured.map((p) => (
          <Link to="/collection" key={p.ref} className="group">
            <div className="relative overflow-hidden bg-muted aspect-[4/5]">
              <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
            </div>
            <div className="mt-5">
              <p className="text-[10px] tracking-luxury uppercase text-muted-foreground mb-1">{p.ref}</p>
              <h3 className="font-serif text-xl">{p.name}</h3>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Link to="/collection" className="inline-flex items-center gap-3 border border-foreground px-7 py-4 text-xs tracking-luxury uppercase hover:bg-foreground hover:text-background transition-colors">
          Voir toute la collection <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}

function Sections() {
  const cards = [
    { icon: Sparkles, title: "À propos", text: "Découvrez l'univers Symphonie et notre vision de l'élégance.", to: "/apropos" as const, cta: "Notre histoire" },
    { icon: UserRound, title: "Collection", text: "Vêtements, chaussures et accessoires sélectionnés avec soin.", to: "/collection" as const, cta: "Explorer" },
    { icon: Lock, title: "Contact", text: "Rendez-nous visite à l'Immeuble les Ambassadeurs, Gombe.", to: "/contact" as const, cta: "Nous trouver" },
  ];
  return (
    <section className="bg-cream py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 lg:gap-20">
        {cards.map((c) => (
          <Link to={c.to} key={c.title} className="text-center flex flex-col items-center group">
            <div className="w-16 h-16 rounded-full border border-accent flex items-center justify-center mb-8 group-hover:bg-accent/10 transition-colors">
              <c.icon size={20} strokeWidth={1.2} className="text-accent" />
            </div>
            <h3 className="font-serif text-2xl mb-4">{c.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">{c.text}</p>
            <span className="text-[10px] tracking-luxury uppercase border-b border-foreground pb-1 group-hover:text-accent group-hover:border-accent transition-colors">
              {c.cta}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <Teaser />
      <Sections />
    </>
  );
}
