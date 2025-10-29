// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => ({
  plugins: [react()],
  // Sur Vercel on sert à la racine → base = "/"
  // En local pour GitHub Pages tu peux garder le sous-chemin.
  base: process.env.VERCEL ? "/" : "/3-column-card/",
}));
