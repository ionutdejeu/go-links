import type { Config } from "tailwindcss";

import web from "@repo/tailwind-config/web";

const config:Config = {
  content: web.content,
  presets: [web],
}

export default config;
