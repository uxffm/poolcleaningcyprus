// ─────────────────────────────────────────────────────────
//  SITE CONTENT — edit this file to update all copy.
//  After saving, push to GitHub and Netlify will redeploy.
// ─────────────────────────────────────────────────────────

export const site = {
  url:  "https://poolcleaningcyprus.com",
  name: "Pool Cleaning Cyprus",
}

export const contact = {
  email:   "hello@poolcleaningcyprus.com",
  address: "Coral Bay, Paphos, Cyprus",
}

// ── Meta tags ────────────────────────────────────────────

export const homeMeta = {
  title:       "Pool Cleaning Cyprus | Professional Swimming Pool Services",
  description: "Professional pool cleaning and maintenance services across Cyprus. Crystal clear pools in Limassol, Nicosia, Paphos, and Larnaca. Reliable, affordable, and thorough.",
  keywords:    "pool cleaning cyprus, swimming pool maintenance cyprus, pool service limassol, pool cleaning paphos, pool maintenance nicosia, larnaca pool cleaning, pool chemicals cyprus, pool repair cyprus",
}

export const aboutMeta = {
  title:       "About Us | Pool Cleaning Cyprus",
  description: "Learn about Pool Cleaning Cyprus — a local team of certified pool technicians serving Limassol, Paphos, Nicosia, and Larnaca. Reliable, professional, and passionate about clean pools.",
}

// ── Homepage ─────────────────────────────────────────────

export const hero = {
  eyebrow:       "Weekly pool care · Standards-based water safety · Cyprus",
  heading:       "Pool cleaning across Cyprus,",
  headingAccent: "done properly.",
  description:   "Weekly visits that actually happen, water chemistry tested to recognised safety standards, and a photo report after every clean. Your pool cleaning service for Cyprus.",
  ctaPrimary:    "Get a free quote",
  ctaSecondary:  "See pricing",
}

export const reportCard = {
  title: "This week's water report",
  rows: [
    { label: "Chlorine",        value: "2.4 ppm · Good",   type: "ok"  },
    { label: "pH",              value: "7.5 · Good",        type: "ok"  },
    { label: "Alkalinity",      value: "78 ppm · Adjusted", type: "fix" },
    { label: "Filter pressure", value: "Normal",             type: "ok"  },
  ] as { label: string; value: string; type: "ok" | "fix" }[],
  nextVisit: "Tue, 9:00 AM",
}

export const services = {
  heading:    "Everything your pool needs, on schedule",
  subheading: "One visit covers the full checklist. We do not upsell at the gate, no surprise line items.",
  items: [
    {
      title:       "Weekly cleaning",
      description: "Skimming, vacuuming, brushing walls and the waterline, emptying skimmer and pump baskets. On every scheduled visit, without fail. Tide lines removed and scale descaled where it builds up, so the waterline stays clean instead of crusting over.",
    },
    {
      title:       "Water balancing & testing",
      description: "Cyprus tap water is hard and the summer sun burns through chlorine fast. We test pH, chlorine, alkalinity and calcium hardness on every visit and dose to measured readings before we leave. To the parameters set out in the WHO water-safety guidelines.",
    },
    {
      title:       "Algae prevention",
      description: "Routine anti-algae treatment on every visit, not just once there's a problem. Prevention is cheaper than a green-pool recovery, and it's part of standard care here.",
    },
    {
      title:       "Filter & backwash",
      description: "Full filter backwash and rinse as part of regular service, with the skimmer and pump baskets cleared every visit. Media checked and reported on.",
    },
    {
      title:       "Equipment checks",
      description: "Pump, filter and baskets inspected on every visit so small issues get caught before they become expensive repairs. A pump straining is usually audible. We'll listen for it.",
    },
    {
      title:       "Salt & saltwater pools",
      description: "Salt-chlorinated pools fully supported. Cell inspection, salt-level testing and top-up, and the same water-balancing checks as any other pool. Thinking of switching to salt? Ask us.",
    },
    {
      title:       "Green pool recovery",
      description: "Shock, brush, filter, rebalance, until it's clear. Most recoveries take two to three visits. We give you a fixed price before we start, not an open-ended hourly rate.",
    },
    {
      title:       "Equipment repairs",
      description: "We don't just flag problems. We fix them. Pumps, filters and skimmers, leaks and plumbing, pool lights and electrical components. Diagnosed and repaired so you're not left chasing a separate contractor.",
    },
    {
      title:       "Heat pumps & pool heating",
      description: "Energy-efficient heat pump supply, installation and servicing for year-round swimming. Ask us for a heating quote sized to your pool.",
    },
    {
      title:       "Pool installation & renovation",
      description: "New pool installation, renovation and re-lining, piping and filtration, pump, skimmer and drainage, lighting and automation, and liner replacement. Get in touch for a project quote.",
    },
    {
      title:       "Seasonal set-up",
      description: "Timer / time-clock adjusted each season so your pump runs the right hours for the weather. Enough to turn the water over properly without wasting power.",
    },
    {
      title:       "Winter close & spring open",
      description: "We winterise in November and bring the pool back up in spring so it's swim-ready before the first hot weekend, not three weeks after it.",
    },
    {
      title:       "Emergency & one-off visits",
      description: 'Post-party cleans, pre-sale inspections, or "guests arrive Friday." Same-day callouts in Paphos and the west, next-day across the rest of the island.',
    },
  ],
}

export const howItWorks = {
  heading:    "How it works",
  subheading: "From first message to first clean in under a week.",
  steps: [
    {
      title:       "1 · Tell us about your pool.",
      description: "Call, WhatsApp or use the form. Location, rough size and current condition is enough. We reply within two hours during working hours.",
    },
    {
      title:       "2 · Free first visit.",
      description: "A technician comes out, tests the water, checks the equipment and gives you a fixed price on the spot. No obligation. Recovery work gets a separate fixed quote.",
    },
    {
      title:       "3 · Your regular slot.",
      description: "Same day, same time, every week or fortnight. You get the photo report after each visit whether you're home, at work, or on another continent.",
    },
  ],
}

export const pricing = {
  heading:    "Simple, flat pricing",
  subheading: "Chemicals, equipment check and the photo report included on every plan. No call-out fee on scheduled visits.",
  plans: [
    {
      name:          "Silver",
      price:         "€60",
      priceUnit:     "/visit",
      note:          "Bi-weekly schedule.",
      featured:      false,
      featuredLabel: "",
      features:      ["Skim, vacuum, brush", "Chemical test & dose", "Baskets emptied", "Equipment visual check"],
      cta:           "Get started",
      ctaStyle:      "water" as const,
    },
    {
      name:          "Platinum",
      price:         "€45",
      priceUnit:     "/visit",
      note:          "Weekly schedule. Cheaper per visit than Silver, because weekly pools stay clean.",
      featured:      true,
      featuredLabel: "Most popular",
      features:      ["Everything in Silver, every week", "Full filter backwash", "Waterline tile scrub", "Photo visit report", "Priority slot for callouts"],
      cta:           "Get started",
      ctaStyle:      "sun" as const,
    },
    {
      name:          "Elite",
      price:         "Custom",
      priceUnit:     "",
      note:          "For complexes, hotels and owners who want everything handled.",
      featured:      false,
      featuredLabel: "",
      features:      ["Everything in Platinum", "Full pump & filter service", "Quarterly deep clean", "Winter close & spring open", "24/7 emergency line"],
      cta:           "Get a quote",
      ctaStyle:      "water" as const,
    },
  ],
  note: "All prices include chemicals, the equipment check and the photo report.",
  billingHeading: "Billing & payment.",
  billingText: "Choose the schedule that suits you. Monthly or quarterly, in advance. Pay however works best: bank transfer, card, or cash. Prices are per pool for a standard depth of ~1.5m; deeper or oversized pools are quoted after the free first visit.",
}

export const whyUs = {
  heading:    "Why Pool Cleaning Cyprus",
  subheading: "",
  items: [
    {
      title:       "We know this island's water.",
      description: "Hard tap water, relentless summer UV and dust that arrives every spring. We dose for these conditions — not a generic manual written for somewhere with rain.",
    },
    {
      title:       "We show up.",
      description: 'The most common complaint we hear about the last pool guy: "he just stopped coming." Fixed schedules — and if a visit ever has to move, you\'ll know in advance, not by noticing the pool\'s gone cloudy.',
    },
    {
      title:       "Safe water, documented.",
      description: 'We test and dose to WHO water-safety parameters using EU-registered chemicals, and every reading goes in your visit report. You never have to take "it\'s fine" on trust — you can see the numbers.',
    },
    {
      title:       "If it's not right, we come back free.",
      description: "No small print. If your water isn't clear after a visit, message us and we return at no charge until it is. That's the whole guarantee.",
    },
    {
      title:       "Based in Coral Bay, Paphos.",
      description: "Working island-wide. Regular routes across Paphos, Limassol, Nicosia, Larnaca, Famagusta, Ayia Napa and Protaras. Somewhere else? Ask — if we can build you into a route, we'll come.",
    },
  ],
}

export const reviews = {
  heading:    "What our clients say",
  subheading: "Over 2,000 pools maintained across Cyprus.",
  items: [
    {
      stars:    5,
      quote:    "They've done our villa pool in Germasogeia every Tuesday for three years. The photo report is the reason we picked them; we're only in Cyprus half the year and it's how we know the work is actually done.",
      initials: "MK",
      name:     "Maria K.",
      city:     "Limassol",
    },
    {
      stars:    5,
      quote:    "Bought a house in Paphos with a pool that had been green since spring. Fixed quote of €180, clear in two visits, and we've kept them on weekly since. Straightforward people.",
      initials: "AP",
      name:     "Andreas P.",
      city:     "Paphos",
    },
    {
      stars:    4,
      quote:    "Our complex has 8 pools and they handle all of them. One scheduling mix-up in the first month, sorted the same day with an apology. Since then, faultless. Committee renewed the contract without a second quote.",
      initials: "JT",
      name:     "James T.",
      city:     "Nicosia",
    },
    {
      stars:    5,
      quote:    "Very thorough, and they explain what they're dosing and why instead of just leaving a bill. Two years, zero problems.",
      initials: "SL",
      name:     "Sofia L.",
      city:     "Larnaca",
    },
  ],
}

export const areas = {
  heading:    "Coverage",
  subheading: "",
  list:       ["Paphos", "Limassol", "Nicosia", "Larnaca", "Famagusta", "Ayia Napa", "Protaras", "Kyrenia"],
  note:       "Not sure if we cover your area?",
  noteLink:   "Ask us",
}

export const commercial = {
  heading:    "Communal & commercial pools",
  subheading: "Apartment blocks, complexes and hotels need a different approach. More water, more swimmers, and health rules that actually apply.",
  text:       "We price communal and commercial pools by volume (cubic litres) after a free site survey, so you pay for the pool you have, not a flat guess. Every communal pool is maintained to Cyprus public-health water-quality requirements and WHO safety parameters, with documented readings you can show a landlord, committee or inspector.",
  cta:        "Book a site survey",
}

export const standards = {
  heading: "Standards & safe water",
  intro:   "What we do is work to the same published standards a certification is built around, and we put the proof in your report every single visit. As a Cyprus pool cleaning company we know what to take care of.",
  items: [
    {
      title:       "WHO water-safety parameters.",
      description: "We test and dose to the water-safety guidance in the World Health Organisation's Guidelines for Safe Recreational Water Environments (Vol. 2 — Swimming Pools). These are public guidelines, free for anyone to follow and following them is exactly what keeps your water safe for children and pets.",
    },
    {
      title:       "EN 15288-2 operation.",
      description: "We follow the operational and water-quality guidance of EN 15288-2, the European standard for the operation of swimming pools.",
    },
    {
      title:       "EU-registered chemicals.",
      description: 'The chemicals we use are registered under the EU Biocidal Products Regulation (528/2012). The regulation that "EU-approved" actually refers to. No cheap unregistered alternatives.',
    },
    {
      title:       "Documented every visit.",
      description: "EU-registered chemicals, dosed to measured readings, with the numbers written into your visit report. Child-safe, pet-safe, and you can check our work every single time which is more than most certificate-holders actually give you.",
    },
  ],
  footnote: "15 years of hands-on pool experience.",
}

export const expectations = {
  heading: "What we ask of you",
  intro:   "A well-run pool is a two-way thing. A few simple things from you keep your water clean and your costs down. Some tips from your pool cleaning service company:",
  items: [
    {
      title:       "Keep the pool topped up.",
      description: "Water below the skimmer or vacuum point means we can't clean properly. If you need water delivered, tell us and we'll arrange it.",
    },
    {
      title:       "Run the pump enough to turn the water over twice in 24 hours.",
      description: "Under-running causes cloudy water, extra vacuuming and extra chemical. All avoidable. Let us know about any prolonged power cuts.",
    },
    {
      title:       "Tell us about heavy use in advance.",
      description: "A party or a full villa uses up chlorine fast. Give us a heads-up and we'll add the extra chemical. Free, within reasonable terms.",
    },
    {
      title:       "Report contaminants straight away.",
      description: "Anything that shouldn't be in the pool. Food, drinks, spillages, fecal matter — needs handling fast. Message us the moment it happens.",
    },
    {
      title:       "Flag anything odd.",
      description: "Strange noises from the pump room, air bubbles rising in the pool, a drop in water level. The sooner we know, the cheaper it is to fix.",
    },
  ],
}

export const referrals = {
  heading: "Referrals & newcomer deals",
  items: [
    "New to us? Ask about our newcomer offer on your first plan.",
    "Know someone with a pool? Refer them and earn a commission when they sign up. It costs them nothing and gets them the same fixed, honest pricing you get.",
    "Bundle and save. Prices are lower when you have multiple pools on the same site.",
  ],
}

export const quoteSection = {
  heading: "Get your free quote",
  lede:    "Tell us where the pool is and roughly what shape it's in. You'll have a reply within two hours (working hours), and the first visit is free.",
}

// ── About page ───────────────────────────────────────────

export const about = {
  eyebrow:  "About Us",
  heading1: "We Keep Cyprus",
  heading2: "Pools Sparkling",
  paragraphs: [
    "Pool Cleaning Cyprus is a local team of certified pool technicians with years of hands-on experience across the island. We started because we saw too many beautiful pools going cloudy, green, or chemically unbalanced — often because owners didn't have the time or know-how to maintain them properly.",
    "We take care of all of that for you. From weekly visits to one-off deep cleans, equipment checks, and algae treatments. We treat every pool like it's our own.",
  ],
  valuesHeading: "Our Values",
  values: [
    {
      title:       "Quality First",
      description: "We never cut corners. Every visit follows the same thorough checklist — no matter the pool size or location.",
    },
    {
      title:       "Reliability",
      description: "We show up when we say we will. Consistent scheduling you can count on, every week.",
    },
    {
      title:       "Transparency",
      description: "Clear pricing, honest advice, and written reports after every visit so you always know what's been done.",
    },
  ],
  closingParagraphs: [
    "We're proud to serve homeowners, villa rentals, hotels, and residential complexes across Cyprus. Whether you have a small private pool or a large commercial one, we have the equipment and expertise to keep it in perfect condition.",
    "Get in touch. We're always happy to talk through what your pool needs and give you an honest, no-pressure quote.",
  ],
  cta: "Email Us Today",
}
