import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  outDir: "build",
  integrations: [tailwind()],
  site:"https://bora-sen.github.io",
  base:"/cyberera-website"

});