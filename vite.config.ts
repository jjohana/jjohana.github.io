import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/series3/",
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    css: true,
    exclude: ["e2e/**", "node_modules/**", "dist/**"]
  }
});
