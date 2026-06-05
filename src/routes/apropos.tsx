import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, UserRound, Lock } from "lucide-react";

export const Route = createFileRoute("/apropos")({
  head: () => ({
    meta: [
      { title: "À propos — SYMPHONIE (by K)" },
      { name: "description", content: "L'univers Symphonie : un art de recevoir et une sélection premium au cœur de Kinshasa." },
      { property: "og:title", content: "À propos — SYMPHONIE (by K)" },
      { property: "og:description", content: "Découvrez notre histoire et notre vision de l'élégance." },
    ],
  }),
  component: AproposPage,
});

function AproposPage() {
  const items = [
    { icon: Sparkles, title: "Sélection Premium", text: "Des pièces choisies une à une, pour une qualité irréprochable et un style intemporel." },
    { icon: UserRound, title: "Conseil Personnalisé", text: "Accueil VIP en boutique avec nos conseillères de style dédiées à votre image." },
    { icon: Lock, title: "Shopping Privé", text: "Réservez vos articles à l'avance et profitez d'une expérience d'essayage discrète." },
  ];
  return (
    <>
      <section className="pt-32 pb-16 px-6 lg:px-10 max-w-4xl mx-auto text-center">
        <p className="text-[10px] tracking-luxury uppercase text-accent mb-4">L'expérience Symphonie</p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">Un art de recevoir</h1>
        <p className="mt-8 text-base lg:text-lg text-muted-foreground leading-relaxed font-light">
          Au cœur de Gombe, Symphonie (by K) cultive l'art du prêt-à-porter de luxe. Inspirée des grandes maisons
          parisiennes et milanaises, notre boutique offre une sélection raffinée pensée pour la femme de Kinshasa qui aime
          la mode et l'élégance au quotidien.
        </p>
      </section>

      <section className="bg-cream py-24 lg:py-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 lg:gap-20">
          {items.map((it) => (
            <div key={it.title} className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-accent flex items-center justify-center mb-8">
                <it.icon size={20} strokeWidth={1.2} className="text-accent" />
              </div>
              <h3 className="font-serif text-2xl mb-4">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{it.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-10 text-center">
        <Link to="/collection" className="inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-xs tracking-luxury uppercase hover:bg-accent hover:text-foreground transition-colors">
          Découvrir la collection
        </Link>
      </section>
    </>
  );
}
