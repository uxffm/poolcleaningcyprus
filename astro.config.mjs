// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://poolcleaningcyprus.com',
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'load'
	}
});
