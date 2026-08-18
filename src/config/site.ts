/**
 * Single source of truth for brand, contact and company details.
 * Change values here and they update across every page, the footer,
 * the call buttons, the sitemap and all structured data.
 */

export const site = {
  name: "Last Ride",
  legalName: "Last Ride Funeral Services",
  shortName: "Last Ride",
  tagline: "With you at every step of the final journey",
  description:
    "Cremation, dead body transportation, freezer box rental, hearse vans and antim sanskar support across Delhi NCR and 25 Indian cities. Helpline open 24 hours.",

  /** Used for canonical URLs, sitemap and Open Graph tags. Update before going live. */
  url: "https://www.lastridefuneral.in",

  /**
   * Search engine and AI crawler visibility. The one switch for all of it.
   *
   * While this is false the site asks to be left alone everywhere it can:
   * robots.txt disallows the whole site, every page carries a noindex, the
   * sitemap comes back empty, /llms.txt returns a 404 and no structured data
   * is emitted. Nothing a visitor sees changes.
   *
   * Turn it on when the content and the structured data are ready to be read.
   * Note that the robots.txt disallow stops crawlers before they can read the
   * noindex, which is the right order for a site that has never been indexed.
   * If this site is ever indexed and then needs pulling back out, allow the
   * crawl and let the noindex do the work instead.
   *
   * Typed as a plain boolean rather than the literal `false` the surrounding
   * `as const` would give it, so both branches of every check stay live.
   */
  seoEnabled: false as boolean,

  founded: 2010,
  yearsOfService: new Date().getFullYear() - 2010,
  familiesServed: "5,000+",

  logo: {
    /** Swap this file to change the logo everywhere. */
    src: "/images/brand/logo-mark.svg",
    alt: "Last Ride Funeral Services",
  },

  contact: {
    /** Primary helpline. Displayed on every page and in the sticky mobile bar. */
    phone: "+91 88103 36482",
    /** Digits only, used for tel: and wa.me links. */
    phoneRaw: "918810336482",
    /** Optional second line. Set to null to hide it everywhere. */
    altPhone: null,
    altPhoneRaw: null,
    whatsapp: "918810336482",
    email: "test@lastride.com",
    supportEmail: "support@lastridefuneral.in",
    hours: "Open 24 hours, all 7 days",
    responseTime: "Team dispatched within 30 to 45 minutes across Delhi NCR",
  },

  offices: [
    {
      city: "Delhi/NCR",
      label: "Service area",
      area: "Delhi/NCR",
      state: "Delhi",
    },
  ],

  social: {
    facebook: "https://www.facebook.com/lastridefuneral",
    instagram: "https://www.instagram.com/lastridefuneral",
    youtube: "https://www.youtube.com/@lastridefuneral",
    x: "https://x.com/lastridefunral",
    linkedin: "https://www.linkedin.com/company/lastridefuneral",
  },

  /** Shown as trust markers on the home page and service pages. */
  stats: [
    { value: "15+", label: "Years of service" },
    { value: "5,000+", label: "Families supported" },
    { value: "25", label: "Cities covered" },
    { value: "24x7", label: "Helpline answered" },
  ],

  /** Toggle features without touching page code. */
  features: {
    showBlog: true,
    showGallery: true,
    showPricingNote: true,
    stickyMobileCallBar: true,
  },
} as const;

export const telHref = `tel:+${site.contact.phoneRaw}`;
export const altTelHref = site.contact.altPhoneRaw
  ? `tel:+${site.contact.altPhoneRaw}`
  : null;
export const mailHref = `mailto:${site.contact.email}`;

export function whatsappHref(message?: string) {
  const text = encodeURIComponent(
    message ??
      `Namaste, I need help with funeral arrangements. Please call me back.`,
  );
  return `https://wa.me/${site.contact.whatsapp}?text=${text}`;
}

export type Office = (typeof site.offices)[number];
