import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import favicon from "../assets/favicon.svg?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-serif text-foreground">404</h1>
        <p className="mt-4 text-sm tracking-luxury uppercase text-muted-foreground">Page introuvable</p>
        <Link to="/" className="mt-8 inline-block border-b border-foreground pb-1 text-xs tracking-luxury uppercase">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="font-serif text-2xl">Une erreur est survenue</h1>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 text-xs tracking-luxury uppercase border-b border-foreground pb-1">
          Réessayer
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SYMPHONIE (by K) — Prêt-à-porter de luxe à Kinshasa, Gombe" },
      { name: "description", content: "Boutique de mode haut de gamme à Gombe, Kinshasa. Prêt-à-porter, chaussures et accessoires exclusifs. Immeuble les Ambassadeurs." },
      { property: "og:title", content: "SYMPHONIE (by K) — Boutique de mode à Kinshasa" },
      { property: "og:description", content: "Prêt-à-porter, chaussures et accessoires exclusifs au cœur de Kinshasa." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: favicon },
      { rel: "shortcut icon", href: favicon },
      { rel: "apple-touch-icon", href: favicon },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFab />
      </div>
    </QueryClientProvider>
  );
}

