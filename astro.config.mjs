// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

import icon from 'astro-icon';

import alpinejs from '@astrojs/alpinejs';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), icon(), alpinejs()],
  adapter: cloudflare()
});