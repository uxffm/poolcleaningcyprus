import Anthropic from '@anthropic-ai/sdk';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const client = new Anthropic();

async function fetchRedditPosts() {
  const subreddits = ['swimmingpools', 'pools', 'poolcare'];
  const posts = [];

  for (const sub of subreddits) {
    try {
      const res = await fetch(`https://www.reddit.com/r/${sub}/hot.json?limit=8`, {
        headers: { 'User-Agent': 'PoolCleaningCyprus/1.0 (blog automation)' }
      });
      if (!res.ok) continue;
      const data = await res.json();
      const items = data.data.children
        .map(c => c.data)
        .filter(p => !p.stickied && p.score > 10);
      posts.push(...items);
    } catch {
      // skip unavailable subreddit
    }
  }

  return posts.sort((a, b) => b.score - a.score).slice(0, 5);
}

async function generateBlogPost(posts) {
  const topics = posts.length > 0
    ? posts.map(p => `- "${p.title}" (${p.score} upvotes)`).join('\n')
    : '- General pool maintenance tips\n- How to keep pool water balanced in hot weather';

  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1200,
    messages: [{
      role: 'user',
      content: `You are a content writer for Pool Cleaning Cyprus (poolcleaningcyprus.com), a professional pool cleaning and maintenance company serving Limassol, Paphos, Nicosia, and Larnaca.

Today's trending topics from Reddit pool communities:
${topics}

Write a practical, helpful blog post inspired by one of these topics (or the general theme), written specifically for pool owners in Cyprus.

Rules:
- Title must be relevant to Cyprus pool owners
- 350–450 words
- Use ## for section headings (2–3 sections)
- Mention Cyprus climate, heat, or local conditions naturally
- Helpful and informative tone, not salesy
- End with a brief tip or takeaway

Return ONLY valid JSON, no extra text:
{
  "title": "...",
  "description": "one sentence summary under 155 characters",
  "content": "full markdown article"
}`
    }]
  });

  const raw = message.content[0].text.trim();
  // strip possible markdown code fences
  const json = raw.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
  return JSON.parse(json);
}

async function main() {
  console.log('Fetching Reddit posts...');
  const posts = await fetchRedditPosts();
  console.log(`Found ${posts.length} trending posts`);

  console.log('Generating blog post with Claude...');
  const post = await generateBlogPost(posts);

  const date = new Date().toISOString().split('T')[0];
  const slug = post.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60);

  const filename = `${date}-${slug}.md`;
  const filepath = join(__dirname, '..', 'src', 'content', 'blog', filename);

  const markdown = `---
title: "${post.title.replace(/"/g, '\\"')}"
description: "${post.description.replace(/"/g, '\\"')}"
pubDate: ${date}
---

${post.content}
`;

  writeFileSync(filepath, markdown);
  console.log(`Created: src/content/blog/${filename}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
