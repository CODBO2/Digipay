// @ts-check
import { defineConfig } from 'astro/config';

// Adapter.
import vercel from "@astrojs/vercel"

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
});