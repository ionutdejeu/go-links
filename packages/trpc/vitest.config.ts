/// <reference types="vitest" />

import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    alias: {
      "@/*": "./*",
    },
    deps: {
      // TODO: this need to be fixed
      inline: ["liteque"],
    },
  },
});
