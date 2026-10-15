// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

// Keep the TanStack server entry pointed at src/index.ts, which wraps the server entry.
export default defineConfig({
  // This project is deployed to Vercel, so use Nitro's Vercel output instead
  // of the Cloudflare adapter that the Lovable config enables for builds.
  cloudflare: false,
  plugins: [nitro()],
  tanstackStart: {
    server: { entry: "index" },
  },
});
