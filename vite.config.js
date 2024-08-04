import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
export default defineConfig({
  base: "/FedYou.github.io",
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
});
