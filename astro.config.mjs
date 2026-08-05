// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://cbsunmsm.site',
    base: '/',
    integrations: [
        mdx(),
        sitemap({
            i18n: {
                defaultLocale: 'es',
                locales: {
                    es: 'es-PE',
                    en: 'en-US',
                },
            },
        }),
    ],
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
});
