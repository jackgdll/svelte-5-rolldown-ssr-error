import { describe, it, expect } from "vitest";
import { render } from "svelte/server";
import Main from "../src/main.svelte";
import Rollup from "../dist/rollup.js";
import Rolldown from "../dist/rolldown.js";

describe("SSR", () => {
  it("renders the component with context", async () => {
    const { body } = await render(Main);
    expect(body).toContain("<span>hello world</span>");
  });

  it("renders Rollup bundled component", async () => {
    const { body } = await render(Rollup);
    expect(body).toContain("<span>hello world</span>");
  });

  it("renders Rolldown bundled component", async () => {
    const { body } = await render(Rolldown);
    expect(body).toContain("<span>hello world</span>");
  });
});
