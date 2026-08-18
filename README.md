# Last Ride Funeral Services

A complete funeral services website built with **Next.js 16**, **React 19** and **Tailwind CSS 4**.
81 statically generated pages, every one with its own metadata, canonical URL and structured data.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static generation of all 81 pages
npm start        # serve the production build
```

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build, prerenders every page |
| `npm run lint` | ESLint |
| `npm run check:content` | Fails if copy contains long dashes or machine sounding phrases |
| `npm run check` | Lint, then content check, then build |

---

## Changing the business details

**Everything brand related lives in one file: [`src/config/site.ts`](src/config/site.ts).**

Edit it and the change flows through every page, the header, the footer, every call
button, the sitemap, the Open Graph image and all the structured data.

```ts
export const site = {
  name: "Last Ride",
  legalName: "Last Ride Funeral Services",
  url: "https://www.lastridefuneral.in",   // set this before going live

  contact: {
    phone: "+91 88103 36482",
    phoneRaw: "918810336482",              // digits only, used for tel: and wa.me
    altPhone: "+91 98110 45678",           // set to null to hide the second line
    whatsapp: "918810336482",
    email: "info@lastridefuneral.in",
  },

  offices: [ /* add, remove or reorder */ ],
  social:  { /* profile URLs */ },
  stats:   [ /* the four numbers in the hero */ ],

  features: {
    showBlog: true,
    showGallery: true,
    showPricingNote: true,
    stickyMobileCallBar: true,
  },
};
```

> **Before deploying**, change `site.url` to the real domain. It is used for canonical
> tags, `sitemap.xml`, `robots.txt` and Open Graph URLs.

---

## Content

All page copy lives in `src/data/`. These are plain TypeScript files, so adding a page
is a matter of adding an object to an array. No CMS and no database.

| File | Contents | Pages generated |
| --- | --- | --- |
| `services.ts` | 16 services with intros, checklists, process steps, FAQs | 16 |
| `cities.ts` | 25 cities with local crematoriums, areas, registration process | 25 |
| `grounds.ts` | 11 cremation ground guides with timings and facilities | 11 |
| `repatriation.ts` | 4 international routes with full document lists | 4 |
| `blog.ts` | 8 long form guides | 8 |
| `content.ts` | Testimonials, general FAQs, promises, gallery captions | shared |
| `types.ts` | Shared TypeScript interfaces for all of the above | – |

### Adding a new city

```ts
// src/data/cities.ts
{
  slug: "jaipur",
  name: "Jaipur",
  state: "Rajasthan",
  region: "Rajasthan",           // add to regionOrder at the bottom if new
  responseTime: "45 to 60 minutes across the city",
  metaTitle: "...",
  metaDescription: "...",
  intro: ["...", "..."],
  facilities: [{ name, area, note }],
  areas: ["Malviya Nagar", "Vaishali Nagar"],
  localNotes: [{ heading, body, bullets }],
  faqs: [{ q, a }],
  nearby: ["delhi", "agra"],
}
```

The page, the nav mega menu entry, the footer link and the sitemap entry all appear
automatically. Same pattern for services, grounds, routes and blog posts.

---

## Writing style

The copy is deliberately written to read as human rather than generated. Two rules are
enforced by `npm run check:content`:

1. **No em dashes or en dashes.** Use a comma, a full stop, or "to" for ranges
   (`30 to 45 minutes`, not `30–45 minutes`).
2. **No machine sounding vocabulary.** The script blocks around 40 phrases
   (`delve`, `seamless`, `robust`, `leverage`, `it is worth noting`, `not just X but Y`
   and so on). Add your own to `PHRASES` in `scripts/check-content.mjs`.

Beyond what the script catches, the copy follows a few conventions worth keeping:

- Concrete specifics over adjectives. "300 to 400 kg of timber" rather than "ample wood".
- Varied sentence length. Short sentences carry the important points.
- Say what the reader does not need. It is the most credible thing on the page.
- Real names throughout: Nigambodh Ghat, Antim Nivas Sector 94, Form 104, e-District portal.

---

## SEO

Handled in [`src/lib/seo.ts`](src/lib/seo.ts) and applied on every page.

- `buildMetadata()` produces title, description, keywords, canonical, Open Graph and Twitter tags
- **JSON-LD** on every page: `FuneralHome`, `WebSite`, `BreadcrumbList`, `FAQPage`,
  `Service`, `Article`, `Cemetery` and `AggregateRating` as appropriate
- `sitemap.xml` and `robots.txt` generate from the data files, with per section priorities
- `opengraph-image.tsx` renders a 1200x630 social card at build time
- Every page has a unique title and description. No duplicates across the 81 pages.

---

## Design

| Token | Value | Used for |
| --- | --- | --- |
| Ink | `#080b11` to `#f4f7fa` | Headings, dark sections, body text |
| Paper | `#fcfaf6` | Page background, warm rather than pure white |
| Marigold | `#c9881e` | Accent, buttons, rules. The flower carried in Indian last rites |
| Sage | `#5f8570` | Secondary accent, WhatsApp affordance |

Typography is **Fraunces** for display and **Inter** for body, both loaded through
`next/font` so there is no layout shift and no external request at runtime.

Tokens are defined in the `@theme` block at the top of
[`src/app/globals.css`](src/app/globals.css). Change them there and the whole site follows.

### The hero animation

[`src/components/HeroCanvas.tsx`](src/components/HeroCanvas.tsx) draws diyas floating
on dark water, with reflections, ripples and embers rising and fading.

The imagery is chosen rather than decorative. A diya is kept lit beside the body through
the night, and lamps are floated on the Ganga at Haridwar and Garhmukteshwar during the
asthi visarjan. It is the same lamp that forms the brand mark.

```tsx
<HeroCanvas density={1} waterline={0.92} intensity={0.9} />
```

| Prop | Default | What it does |
| --- | --- | --- |
| `density` | `1` | Scales lamp and ember counts. `0.6` on inner pages |
| `waterline` | `0.92` | Where the water sits, as a fraction of hero height |
| `intensity` | `1` | Overall opacity. Lower it if copy is hard to read |

**Where it appears.** The home hero, plus three service pages where lamps on water are
the actual subject: asthi visarjan, cremation services and pandit ji services. Those are
flagged with `ambientHero: true` in `src/data/services.ts`, and `PageHero` takes an
`ambient` prop, so turning it on for another page is a one line data change.

**Placement matters.** The waterline is set to sit in the empty band between the stats
row and the urgent strip. If you change the hero layout, re-measure that gap or the lamps
will drift over the copy.

**Cost and behaviour.** Measured at 0.35ms per frame against a 16.67ms budget on a 4.44MP
backing store, so roughly 47x headroom. It also:

- renders a single still frame under `prefers-reduced-motion`, with no animation loop
- pauses via `IntersectionObserver` once the hero scrolls out of view
- pauses on `visibilitychange` when the tab is backgrounded
- caps device pixel ratio at 2 so large retina displays stay cheap
- renders nothing at all if the 2D context is unavailable, leaving the hero intact

### Accessibility

- Skip to content link, visible on focus
- `:focus-visible` outlines in marigold throughout
- FAQ accordions use native `<details>` and `<summary>`, so they work without JavaScript
- `prefers-reduced-motion` disables all animation and smooth scrolling
- Landmarks, breadcrumb `<nav aria-label>`, and labelled form fields

---

## The contact form

`src/components/ContactForm.tsx` composes a structured enquiry and hands it to WhatsApp
or the visitor's mail application. **Nothing is stored and no backend is needed**, so it
works the moment the site is deployed.

To capture enquiries server side instead, add a route handler at
`src/app/api/enquiry/route.ts` and POST the composed `message` to it from `handleSubmit`.

---

## Photographs

The gallery and blog cards currently use generated gradient and icon tiles rather than
photographs. They are designed to look intentional, not like broken images.

To use real photographs:

1. Put the files in `public/images/`
2. Add the hostname to `images.remotePatterns` in `next.config.ts` if they are remote
3. Swap the tile markup in `src/app/gallery/page.tsx` for `next/image`

The favicon is `src/app/icon.svg` and the logo is a component at
`src/components/Logo.tsx`, so both are edited as code rather than as binary assets.

---

## Deploying

The build is fully static. It runs on Vercel, Netlify, Cloudflare Pages, or any Node host.

```bash
npm run build && npm start
```

For a plain static export, add `output: "export"` to `next.config.ts`. Note that this
disables the runtime image optimiser, so set `images.unoptimized: true` alongside it.

**Deployment checklist**

- [ ] Set the real domain in `site.url`
- [ ] Confirm the phone numbers, email and office addresses in `site.ts`
- [ ] Replace the social profile URLs, or remove the ones that do not exist
- [ ] Submit `sitemap.xml` in Google Search Console
- [ ] Set up Google Business Profile listings for each office address
- [ ] Add analytics if you want it. Nothing is tracking visitors as shipped.

---

## Page map

```
/                                 Home
/about                            About
/services                         Services hub
/services/[slug]                  16 service pages
/locations                        Cities hub
/locations/[slug]                 25 city pages
/cremation-grounds                Ground directory
/cremation-grounds/[slug]         11 ground guides
/repatriation                     Repatriation hub
/repatriation/[slug]              4 route pages
/gallery                          Gallery
/blog                             Blog index
/blog/[slug]                      8 guides
/contact                          Contact
/privacy-policy                   Privacy
/terms-and-conditions             Terms
/sitemap.xml  /robots.txt  /opengraph-image  /icon.svg
```
