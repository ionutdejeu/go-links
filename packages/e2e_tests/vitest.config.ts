/// <reference types="vitest" />

import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    alias: {
      "@/*": "./*",
    },
    globalSetup: ["./setup/startContainers.ts", "./setup/seed.ts"],
    teardownTimeout: 30000,
    include: ["tests/**/*.test.ts"],
  },
});
