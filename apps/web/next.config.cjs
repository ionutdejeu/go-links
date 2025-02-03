var path = require("path");
import withPlugins from '@repo/compose-plugin'
import { withWorkbox } from '@repo/workbox-config'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
  workbox: {
    // enable: process.env.NODE_ENV !== 'production',
    enable: 'true',
    swSrc: './worker.js',
    dest: "public",
    swDest: "sw.js",
    force: true,
  }
}

export default withPlugins([withWorkbox], nextConfig)
