import { defineConfig } from "rolldown";
import svelte from "rollup-plugin-svelte";
import { sveltePreprocess } from "svelte-preprocess";

export default defineConfig({
  input: "src/main.svelte",
  output: {
    format: "cjs",
    file: "dist/rolldown.js",
  },
  plugins: [
    svelte({
      compilerOptions: {
        generate: "server",
        css: "injected",
      },
      emitCss: false,
      preprocess: sveltePreprocess(),
    }),
  ],
});
