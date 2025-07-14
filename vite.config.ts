import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/",
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
    open: true,
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("@open-ish") || id.includes("tslib")) {
            return "@open-ish";
          }
          // creating a chunk to react routes deps. Reducing the vendor chunk size
          if (id.includes("react-router-dom") || id.includes("@remix-run") || id.includes("react-router")) {
            return "@react-router";
          }
          if (id.includes("lodash")) {
            return "lodash";
          }
          if (id.includes("dayjs")) {
            return "dayjs";
          }
        },
      },
    },
  },
});
