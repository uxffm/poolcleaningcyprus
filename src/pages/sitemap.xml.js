import { getCollection } from 'astro:content';

export async function GET() {
	const siteUrl = 'https://poolcleaningcyprus.com';

	const staticPages = [
		{ url: '/',       priority: '1.0', changefreq: 'weekly' },
		{ url: '/about/', priority: '0.7', changefreq: 'monthly' },
		{ url: '/blog/',  priority: '0.8', changefreq: 'weekly' },
	];

	const posts = await getCollection('blog');
	const blogPages = posts
		.sort((a, b) => b.data.pubDate - a.data.pubDate)
		.map(post => ({
			url: `/blog/${post.slug}/`,
			priority: '0.7',
			changefreq: 'monthly',
		}));

	const allPages = [...staticPages, ...blogPages];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(p => `  <url>
    <loc>${siteUrl}${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
}
