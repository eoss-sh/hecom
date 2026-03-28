// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [{
    provider: fontProviders.local(),
    name: "PPFraktionMonoRegular",
    cssVariable: "--font-fraktion-mono",
    options: {
      variants: [{
        src: ['./src/assets/fonts/PPFraktionMonoRegular.woff2'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }]
});
