import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ jsxRuntime: "classic" }),
    viteTsconfigPaths(),
    svgrPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    outDir: "build",
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
});
