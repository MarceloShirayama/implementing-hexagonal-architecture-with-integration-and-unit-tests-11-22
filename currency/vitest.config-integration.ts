import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vitest.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      name: "INTEGRATION",
      include: ["*/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    },
  })
);
