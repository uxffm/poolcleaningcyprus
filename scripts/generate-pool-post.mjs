import fs from 'node:fs/promises';
import path from 'node:path';

const OUTPUT_DIR = 'src/content/blog';
const SITE_URL = 'https://poolcleaningcyprus.com';
const AUTHOR = 'Pool Cleaning Cyprus';
const isDryRun = process.env.DRY_RUN === '1';
const anthropicApiKey = process.env.ANTHROPIC_API_KEY;

if (!anthropicApiKey) {
  console.error('ANTHROPIC_API_KEY is required');
  process.exit(1);
}

const TOPICS = [
  "How the Cyprus summer heat affects your pool water and how to stay ahead of algae",
  "Dealing with hard water and calcium scale in Cyprus pools",
  "How often should you clean your pool during a Cyprus summer vs winter?",
  "Getting your pool ready for the swimming season: spring opening in Cyprus",
  "Do you need to winterize a pool in Cyprus? What off-season care really looks like",
  "Managing evaporation and water loss during heatwaves in Cyprus",
  "How to balance pool chemistry: chlorine, pH and alkalinity explained simply",
  "Green pool rescue: how to fix cloudy or green water fast",
  "Saltwater vs chlorine pools: pros, cons and maintenance differences in Cyprus",
  "How to backwash and clean your pool filter",
  "Common pool problems and what they mean: stains, foam and cloudy water",
  "Pool maintenance tips for holiday villa and rental owners in Cyprus",
  "Why a pool maintenance contract saves money vs one-off cleaning",
  "What is included in a professional pool cleaning service",
  "Preparing your villa pool for guests and short-term rentals",
  "Signs it is time to call a professional pool cleaner",
  "How to choose a reliable pool service company in Cyprus",
  "Cost of pool maintenance in Cyprus: what to expect",
];

// Start date: the day the automation began
const START_DATE = new Date('2026-07-25');

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/(^-|-$)/g, '')
    .split('-')
    .slice(0, 7)
    .join('-')
    .slice(0, 60);

const yamlString = (value) =>
  `"${String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;

const callClaude = async (prompt) => {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': anthropicApiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 4096,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Claude API error ${response.status}: ${err}`);
  }

  const data = await response.json();
  return data.content[0].text;
};

const getTodayIndex = () => {
  if (process.env.TOPIC_INDEX !== undefined) return parseInt(process.env.TOPIC_INDEX, 10);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const start = new Date(START_DATE);
  start.setHours(0, 0, 0, 0);
  const diffDays = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  return diffDays % TOPICS.length;
};

const generatePost = async (topic) => {
  console.log(`Generating post for topic: "${topic}"`);

  const contentPrompt = `You are writing for the blog of Pool Cleaning Cyprus (poolcleaningcyprus.com), a professional pool cleaning and maintenance company serving Limassol, Paphos, Nicosia, Larnaca, and the wider island.

Write a detailed, practical blog post in English on this topic:
"${topic}"

Requirements:
- Length: 700–1000 words of real, useful content
- Tone: Direct, honest, and practical — like the existing post "Should You Close Your Pool in Winter in Cyprus?" — no fluff, no generic filler
- Cyprus-specific: reference local conditions where relevant (hard water, high UV, summer heat, dust storms, limestone geology, etc.)
- Structure: 3–5 clear H2 sections with genuine substance. H3 subheadings where useful.
- Audience: Pool owners in Cyprus — homeowners, villa owners, holiday rental managers
- End with a short call to action (call or email us)
- Internal links: naturally link to the homepage (/) once using anchor text like "Pool Cleaning Cyprus" or "our team"
- Do NOT include frontmatter, do NOT include an H1 title — start directly with a short intro paragraph

Return ONLY the markdown body content, nothing else.`;

  const content = await callClaude(contentPrompt);

  const metaPrompt = `For a blog post about this pool cleaning topic:
"${topic}"

Return exactly two lines:
TITLE: [Compelling blog title, max 65 characters, no year]
DESCRIPTION: [Meta description, 130–155 characters, includes "Cyprus" naturally]

Only those two lines, nothing else.`;

  const metaRaw = await callClaude(metaPrompt);
  const titleMatch = metaRaw.match(/TITLE:\s*(.+)/);
  const descMatch = metaRaw.match(/DESCRIPTION:\s*(.+)/);
  const title = titleMatch ? titleMatch[1].trim() : topic;
  const description = descMatch ? descMatch[1].trim() : '';

  const slugPrompt = `Create a short, clean URL slug (lowercase, hyphens only, max 6 words, no year) for a blog post titled:
"${title}"
Return ONLY the slug, nothing else.`;

  const rawSlug = await callClaude(slugPrompt);
  const slug = slugify(rawSlug.trim().replace(/['"]/g, ''));

  const today = new Date().toISOString().slice(0, 10);

  const frontmatter = `---
title: ${yamlString(title)}
description: ${yamlString(description)}
pubDate: ${today}
author: ${yamlString(AUTHOR)}
---

`;

  return { slug, content: frontmatter + content };
};

const run = async () => {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const index = getTodayIndex();
  const topic = TOPICS[index];

  console.log(`Today's topic index: ${index}`);
  console.log(`Topic: "${topic}"`);

  const { slug, content } = await generatePost(topic);
  const outputPath = path.join(OUTPUT_DIR, `${slug}.md`);

  if (isDryRun) {
    console.log('\n--- DRY RUN ---\n');
    console.log(`Would write: ${outputPath}`);
    console.log(content.slice(0, 1000));
    return;
  }

  try {
    await fs.access(outputPath);
    console.log(`Already exists, skipping: ${outputPath}`);
    return;
  } catch {
    // expected — file doesn't exist yet
  }

  await fs.writeFile(outputPath, content, 'utf8');
  console.log(`Created: ${outputPath}`);
};

run().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
