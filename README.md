# Svelte 5 SSR build error reproduction

This is a minimal reproduction of an error when building a Svelte 5 component with Rollup/Rolldown for SSR.

Affected versions: `svelte@>=5.39.0`

### Reproduction steps

```
git clone git@github.com:rosbif/svelte-5-rolldown-ssr-error.git
cd svelte-5-rolldown-ssr-error
pnpm install
pnpm build
pnpm test
```

```
 FAIL  test/ssr.test.js > SSR > renders Rolldown bundled component
Svelte error: lifecycle_outside_component
`setContext(...)` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component
 ❯ lifecycle_outside_component dist/rolldown.js:102:33
    100| function lifecycle_outside_component(name) {
    101|  if (dev_fallback_default) {
    102|   const error = /* @__PURE__ */ new Error(`lifecycle_outside_component\n\`${name}(...)\` can only be used during component initialisation\nhttps://svelte.dev/e/lifecycle_outside_component`);
       |                                 ^
    103|   error.name = "Svelte error";
    104|   throw error;
```

run `pnpm install svelte@~5.38.0` to downgrade Svelte to the last version without this issue.
