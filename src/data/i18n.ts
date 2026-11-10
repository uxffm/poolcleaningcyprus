// ─────────────────────────────────────────────────────────
//  Languages & hreflang helper
//  Only pages that exist in every language get alternates.
//  The blog is English-only, so it is deliberately NOT here.
// ─────────────────────────────────────────────────────────
export const SITE = 'https://poolcleaningcyprus.com';

export type Locale = 'en' | 'el' | 'de';

export const locales: Record<Locale, { prefix: string; label: string; ogLocale: string }> = {
  en: { prefix: '',    label: 'English',  ogLocale: 'en_GB' },
  el: { prefix: '/el', label: 'Ελληνικά', ogLocale: 'el_GR' },
  de: { prefix: '/de', label: 'Deutsch',  ogLocale: 'de_DE' },
};

// page key -> English path (always with trailing slash, as built by Astro)
export const pagePaths = {
  home:   '/',
  about:  '/about/',
  paphos: '/pool-cleaning-paphos/',
} as const;

export type PageKey = keyof typeof pagePaths;

export function pageUrl(page: PageKey, locale: Locale): string {
  const path = pagePaths[page];
  const prefix = locales[locale].prefix;
  return `${SITE}${prefix}${path}`;
}

/** Full, reciprocal hreflang set (incl. self-reference and x-default). */
export function alternates(page: PageKey) {
  return [
    ...(Object.keys(locales) as Locale[]).map((l) => ({ hreflang: l as string, href: pageUrl(page, l) })),
    { hreflang: 'x-default', href: pageUrl(page, 'en') },
  ];
}
