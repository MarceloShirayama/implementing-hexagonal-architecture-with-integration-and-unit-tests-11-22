import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vitest.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      name: "UNIT",
      include: ["*/**/*.spec.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    },
  })
);
