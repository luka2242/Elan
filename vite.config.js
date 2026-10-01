import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // allowedHosts: true — needed to preview through a tunnel (trycloudflare.com/
  // loca.lt etc.), whose subdomain is random and changes every restart, so
  // there's no fixed host to allowlist instead. Dev-only (vite.config.js
  // isn't used by `vite build`), and this dev server isn't otherwise
  // exposed beyond LAN/tunnel, so the DNS-rebinding risk this check guards
  // against doesn't really apply here.
  server: {
    allowedHosts: true,
  },
});
