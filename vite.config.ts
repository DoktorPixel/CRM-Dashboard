import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/CRM-Dashboard/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

