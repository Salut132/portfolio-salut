import { createFileRoute } from "@tanstack/react-router";
import SalutPortfolio from "@/components/salut-portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "salut — code. shoot. vibe." },
      { name: "description", content: "Personal portfolio of a vibe coder, videographer, and photographer. Cinematic, creative, coded." },
      { property: "og:title", content: "salut — code. shoot. vibe." },
      { property: "og:description", content: "A futuristic creative developer portfolio." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: SalutPortfolio,
});
