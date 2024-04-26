import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from "@astrojs/netlify";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), partytown()],
  adapter: netlify()
});