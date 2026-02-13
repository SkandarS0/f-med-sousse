import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              test: /node_modules[\\/](react|react-dom)/,
              name: "react",
            },
            {
              test: /node_modules[\\/](@tanstack\/router|@tanstack\/react-router)/,
              name: "router",
            },
            {
              test: /node_modules[\\/](zod)/,
              name: "validation",
            },
          ],
        },
      },
    },
  },
  plugins: [
    devtools({
      injectSource: { enabled: false },
    }),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      addExtensions: true,
      routesDirectory: "src/app/routes",
      generatedRouteTree: "src/shared/routes/routeTree.gen.ts",
    }),
    viteReact({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  experimental: {
    enableNativePlugin: true,
  },
});
