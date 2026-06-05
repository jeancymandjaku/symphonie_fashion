import { createFileRoute } from "@tanstack/react-router";
import { Star, MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SYMPHONIE (by K)" },
      { name: "description", content: "Immeuble les Ambassadeurs, 132 Avenue De La Justice, Gombe, Kinshasa. Lundi à Samedi 09:30 — 19:30." },
      { property: "og:title", content: "Contact — SYMPHONIE (by K)" },
      { property: "og:description", content: "Une adresse de référence à Gombe, Kinshasa." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="pt-32 pb-24 lg:pb-32 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div>
          <p className="text-[10px] tracking-luxury uppercase text-accent mb-4">Nous trouver</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">Une adresse de référence à Gombe.</h1>
          <div className="mt-10 flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} size={16} fill="currentColor" className="text-accent" strokeWidth={0} />
              ))}
              <Star size={16} fill="currentColor" className="text-accent/40" strokeWidth={0} />
            </div>
            <span className="font-serif text-2xl">4.3</span>
            <span className="text-xs tracking-luxury uppercase text-muted-foreground">/ 5 · Google Maps</span>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-xs tracking-luxury uppercase hover:bg-accent hover:text-foreground transition-colors">
            <MessageCircle size={16} strokeWidth={1.4} />
            Discuter avec une conseillère
          </a>
        </div>

        <div className="space-y-8">
          <div className="flex gap-5 pb-8 border-b border-border">
            <MapPin size={20} strokeWidth={1.2} className="text-accent shrink-0 mt-1" />
            <div>
              <p className="text-[10px] tracking-luxury uppercase text-muted-foreground mb-2">Adresse</p>
              <p className="font-serif text-xl leading-snug">Immeuble les Ambassadeurs</p>
              <p className="text-sm text-muted-foreground mt-1">132 Avenue De La Justice, Gombe, Kinshasa</p>
            </div>
          </div>
          <div className="flex gap-5 pb-8 border-b border-border">
            <Clock size={20} strokeWidth={1.2} className="text-accent shrink-0 mt-1" />
            <div>
              <p className="text-[10px] tracking-luxury uppercase text-muted-foreground mb-2">Horaires</p>
              <p className="font-serif text-xl">Lundi – Samedi · 09:30 — 19:30</p>
              <p className="text-sm text-muted-foreground mt-1">Dimanche fermé</p>
            </div>
          </div>
          <div className="flex gap-5">
            <Phone size={20} strokeWidth={1.2} className="text-accent shrink-0 mt-1" />
            <div>
              <p className="text-[10px] tracking-luxury uppercase text-muted-foreground mb-2">Téléphone</p>
              <a href="tel:+243821000000" className="font-serif text-xl hover:text-accent transition-colors">+243 821 000 000</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
