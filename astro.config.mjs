// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://poolcleaningcyprus.com',
	integrations: [sitemap()],
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'load'
	}
});
