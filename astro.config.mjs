// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config/site.ts';

export default defineConfig({
  site: site.url,
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br', 'es', 'fr', 'it', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
});
