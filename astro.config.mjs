import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://kunshine.tech',
  output: 'static',
  integrations: [vue(), tailwind({ applyBaseStyles: false }), sitemap()],
  build: { format: 'directory' },
  vite: { server: { host: '0.0.0.0' } }
});
