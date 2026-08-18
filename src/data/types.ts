export type IconKey =
  | "flame"
  | "truck"
  | "snowflake"
  | "van"
  | "vial"
  | "plane"
  | "helicopter"
  | "basket"
  | "hall"
  | "flower"
  | "candle"
  | "water"
  | "om"
  | "calendar"
  | "tower"
  | "cross"
  | "clock"
  | "shield"
  | "route"
  | "document"
  | "phone"
  | "heart"
  | "users"
  | "rupee"
  | "check"
  | "map";

export interface FAQ {
  q: string;
  a: string;
}

export interface ContentSection {
  heading: string;
  /** Paragraphs of body copy. */
  body?: string[];
  /** Rendered as a marigold bulleted list. */
  bullets?: string[];
  /** Rendered as a numbered step list. */
  steps?: { title: string; text: string }[];
}

export interface Service {
  slug: string;
  title: string;
  /** Short label for nav and cards. */
  navTitle: string;
  icon: IconKey;
  /** One line used on cards and in the mega menu. */
  summary: string;
  /** Hero sub-heading. */
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Opening paragraphs under the hero. */
  intro: string[];
  /** Quick facts strip near the top of the page. */
  quickFacts: { label: string; value: string }[];
  /** What a family gets, shown as a checklist. */
  included: string[];
  sections: ContentSection[];
  faqs: FAQ[];
  /** Slugs of related services. */
  related: string[];
  /** Set true to surface on the home page grid. */
  featured?: boolean;
  priceNote?: string;
  /**
   * Show the floating diyas behind this page's hero. Reserved for pages about
   * the rites themselves, where lamps on water are the subject rather than
   * decoration.
   */
  ambientHero?: boolean;
}

export interface City {
  slug: string;
  name: string;
  state: string;
  region: string;
  image?: string;
  metaTitle: string;
  metaDescription: string;
  /** Opening copy specific to this city. */
  intro: string[];
  /** Local crematoriums, burial grounds or ghats. */
  facilities: { name: string; area: string; note: string }[];
  /** Neighbourhoods and satellite towns covered. */
  areas: string[];
  /** Response time promise for this city. */
  responseTime: string;
  /** City specific practical notes. */
  localNotes: ContentSection[];
  faqs: FAQ[];
  /** Slugs of nearby cities for internal linking. */
  nearby: string[];
  featured?: boolean;
}

export interface CremationGround {
  slug: string;
  name: string;
  city: string;
  citySlug: string;
  address: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  type: string;
  timings: string;
  facilities: string[];
  /** Practical guidance for families arriving here. */
  notes: ContentSection[];
  faqs: FAQ[];
  mapQuery: string;
}

export interface RepatriationRoute {
  slug: string;
  title: string;
  navTitle: string;
  from: string;
  to: string;
  direction: "inbound" | "outbound";
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  timeline: string;
  documents: { name: string; detail: string }[];
  steps: { title: string; text: string }[];
  sections: ContentSection[];
  faqs: FAQ[];
  airports: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  date: string;
  readingTime: string;
  author: string;
  image?: string;
  imageAlt?: string;
  /** Rendered by the simple block renderer in the post page. */
  body: ContentSection[];
  related: string[];
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  service: string;
}
