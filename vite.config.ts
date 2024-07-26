import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  plugins: [react()],
  // base: "/",
  base: "/CRM-Dashboard/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

