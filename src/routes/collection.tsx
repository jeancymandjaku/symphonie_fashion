import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products, tabs, WHATSAPP, type Cat } from "@/lib/site-data";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "Collection — SYMPHONIE (by K)" },
      { name: "description", content: "Découvrez le catalogue Symphonie : vêtements, chaussures et accessoires de luxe à Kinshasa." },
      { property: "og:title", content: "Collection — SYMPHONIE (by K)" },
      { property: "og:description", content: "Vêtements, chaussures et accessoires sélectionnés avec soin." },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  const [active, setActive] = useState<Cat>("all");
  const filtered = active === "all" ? products : products.filter((p) => p.cat === active);
  return (
    <section className="pt-32 pb-24 lg:pb-32 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-[10px] tracking-luxury uppercase text-accent mb-4">Le Catalogue</p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-2xl">Pièces sélectionnées avec soin</h1>
        <div className="w-px h-12 bg-border mt-10" />
      </div>

      <div className="flex flex-wrap justify-center gap-2 md:gap-1 mb-14 border-b border-border">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`px-6 py-4 text-xs tracking-luxury uppercase transition-colors relative -mb-px ${
              active === t.id ? "text-foreground border-b-2 border-accent" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
        {filtered.map((p) => (
          <article key={p.ref} className="group">
            <div className="relative overflow-hidden bg-muted aspect-[4/5]">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                width={800}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-x-4 bottom-4 bg-background/95 backdrop-blur-sm py-3 text-center text-[10px] tracking-luxury uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
              >
                Disponibilité · Commander
              </a>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] tracking-luxury uppercase text-muted-foreground mb-1">{p.ref}</p>
                <h3 className="font-serif text-xl">{p.name}</h3>
              </div>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="text-[10px] tracking-luxury uppercase text-accent whitespace-nowrap mt-1 hover:text-foreground transition-colors">
                Réserver →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
