import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";
import p9 from "@/assets/p9.jpg";

export const WHATSAPP =
  "https://wa.me/243821000000?text=Bonjour%20Symphonie%2C%20je%20souhaite%20des%20renseignements";

export type Cat = "all" | "vetements" | "chaussures" | "accessoires";

export const products: { name: string; ref: string; img: string; cat: Exclude<Cat, "all"> }[] = [
  { name: "Robe Longue Soie Sable", ref: "FW—01", img: p1, cat: "vetements" },
  { name: "Blazer Noir Structuré", ref: "FW—02", img: p2, cat: "vetements" },
  { name: "Blouse Crème Plissée", ref: "FW—03", img: p3, cat: "vetements" },
  { name: "Escarpins Nude Pointus", ref: "SH—01", img: p4, cat: "chaussures" },
  { name: "Escarpins Noirs Italiens", ref: "SH—02", img: p5, cat: "chaussures" },
  { name: "Sandales Dorées Soirée", ref: "SH—03", img: p6, cat: "chaussures" },
  { name: "Sac Cabas Camel", ref: "AC—01", img: p7, cat: "accessoires" },
  { name: "Collier Maillons Or", ref: "AC—02", img: p8, cat: "accessoires" },
  { name: "Lunettes Écaille", ref: "AC—03", img: p9, cat: "accessoires" },
];

export const tabs: { id: Cat; label: string }[] = [
  { id: "all", label: "Tout" },
  { id: "vetements", label: "Vêtements" },
  { id: "chaussures", label: "Chaussures" },
  { id: "accessoires", label: "Accessoires" },
];

export const navLinks = [
  { label: "Accueil", to: "/" as const },
  { label: "Collection", to: "/collection" as const },
  { label: "À propos", to: "/apropos" as const },
  { label: "Contact", to: "/contact" as const },
];
