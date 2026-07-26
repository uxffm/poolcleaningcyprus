import { getCollection } from 'astro:content';

export async function GET() {
	const siteUrl = 'https://poolcleaningcyprus.com';
	const today = new Date().toISOString().slice(0, 10);

	const staticPages = [
		{ url: '/',       priority: '1.0', changefreq: 'weekly',  lastmod: today },
		{ url: '/about/', priority: '0.7', changefreq: 'monthly', lastmod: today },
		{ url: '/blog/',  priority: '0.8', changefreq: 'weekly',  lastmod: today },
	];

	const posts = await getCollection('blog');
	const blogPages = posts
		.sort((a, b) => b.data.pubDate - a.data.pubDate)
		.map(post => ({
			url: `/blog/${post.slug}/`,
			priority: '0.7',
			changefreq: 'monthly',
			lastmod: post.data.pubDate.toISOString().slice(0, 10),
		}));

	const allPages = [...staticPages, ...blogPages];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(p => `  <url>
    <loc>${siteUrl}${p.url}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
}
