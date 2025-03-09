import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  // Base public path when served in production
  base: "/",

  // Configure plugins
  plugins: [react(), tailwindcss()],

  // Development server settings
  server: {
    port: 3000,
    open: true, // Auto-open browser on start
    cors: true, // Enable CORS for all requests
  },

  // Build options
  build: {
    outDir: "dist",
    assetsDir: "assets",
    minify: "terser",
    sourcemap: false,
    // Adjust chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },

  // CSS configuration
  css: {
    devSourcemap: true,
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom"],
  },

  // Resolve configuration
  resolve: {
    alias: {
      "@": "/src", // Allow @/components type imports
    },
  },
});
