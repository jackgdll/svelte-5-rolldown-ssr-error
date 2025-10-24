import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import { sveltePreprocess } from "svelte-preprocess";

export default {
  input: "src/main.svelte",
  output: {
    file: "dist/rollup.js",
  },
  plugins: [
    svelte({
      compilerOptions: {
        generate: "server",
      },
      preprocess: sveltePreprocess(),
    }),
    resolve(),
  ],
};
