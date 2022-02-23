import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    host: "localhost",
    port: 8080,
  },
  server: {
    host: "localhost",
    port: 8080,
  },
  build: {
    outDir: "./build",
  },
  envPrefix: "PUBLIC_",
});
