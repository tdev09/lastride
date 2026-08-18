import type { Metadata } from "next";
import { site } from "@/config/site";
import type { FAQ } from "@/data/types";

/**
 * The robots directive every page carries, from the root layout down. A
 * noindex is what actually keeps a page out of an index; the robots.txt
 * disallow only stops the crawl. See `site.seoEnabled`.
 */
export const robotsMeta: Metadata["robots"] = site.seoEnabled
  ? {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    }
  : {
      index: false,
      follow: false,
      nocache: true,
      googleBot: { index: false, follow: false },
    };

/** Build page metadata with canonical, Open Graph and Twitter tags. */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: { canonical: url },
    robots: robotsMeta,
    openGraph: {
      title,
      description,
      url,
      siteName: site.legalName,
      locale: "en_IN",
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [
        {
          url: `${site.url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: site.legalName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${site.url}/opengraph-image`],
    },
  };
}

const areaServed = [
  "Delhi",
  "Gurugram",
  "Noida",
  "Faridabad",
  "Ghaziabad",
  "Mumbai",
  "Pune",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Chandigarh",
  "Lucknow",
  "Patna",
  "India",
];

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["FuneralHome", "EmergencyService", "LocalBusiness"],
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    alternateName: [site.name, "Last Ride Funeral Services", "Last Ride Cremation"],
    url: site.url,
    description: site.description,
    telephone: `+${site.contact.phoneRaw}`,
    email: site.contact.email,
    foundingDate: String(site.founded),
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Credit Card, Bank Transfer",
    image: `${site.url}/opengraph-image`,
    logo: `${site.url}/icon.svg`,
    address: site.offices.map((o) => ({
      "@type": "PostalAddress",
      streetAddress: o.area,
      addressLocality: o.city,
      addressRegion: o.state,
      addressCountry: "IN",
    })),
    geo: [
      { "@type": "GeoCoordinates", latitude: 28.6585, longitude: 77.1264 }, // Raghubir Nagar, Delhi
      { "@type": "GeoCoordinates", latitude: 28.4239, longitude: 77.0706 }, // Sector 57, Gurugram
      { "@type": "GeoCoordinates", latitude: 28.627, longitude: 77.3726 },  // Sector 62, Noida
    ],
    areaServed: areaServed.map((name) => ({ "@type": "City", name })),
    knowsAbout: [
      "Hindu funeral rites and Antim Sanskar",
      "Cremation ground booking in Delhi NCR",
      "Dead body transport by road ambulance and air cargo",
      "Dead body freezer box rental",
      "Embalming procedures and medical certificates",
      "Asthi Visarjan ritual arrangements at Haridwar and Varanasi",
      "International repatriation of mortal remains to and from India",
      "Death certificate registration process in Delhi NCR",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Funeral and Cremation Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cremation Ground Booking & Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dead Body Ambulance & Transport" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Freezer Box Rental Delivery" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dead Body Embalming Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Asthi Visarjan Assistance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "International Repatriation of Mortal Remains" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Antim Sanskar Samagri & Pandit Ji Booking" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Prayer Hall & Chautha Booking" } },
      ],
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: Object.values(site.social),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+${site.contact.phoneRaw}`,
        contactType: "emergency helpline",
        contactOption: "TollFree",
        availableLanguage: ["English", "Hindi", "Punjabi", "Bengali", "Tamil"],
        areaServed: "IN",
      },
      {
        "@type": "ContactPoint",
        telephone: `+${site.contact.phoneRaw}`,
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.legalName,
    description: site.description,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-IN",
  };
}

export function breadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${site.url}${item.href}` } : {}),
    })),
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  areaName = "India",
}: {
  name: string;
  description: string;
  path: string;
  areaName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    serviceType: name,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "Place", name: areaName },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: `+${site.contact.phoneRaw}`,
      availableLanguage: ["English", "Hindi"],
    },
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
  author,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    author: { "@type": "Organization", name: author },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: `${site.url}${path}`,
    image: `${site.url}/opengraph-image`,
    inLanguage: "en-IN",
  };
}

export function placeSchema({
  name,
  description,
  address,
  path,
}: {
  name: string;
  description: string;
  address: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Cemetery",
    name,
    description,
    url: `${site.url}${path}`,
    address: { "@type": "PostalAddress", streetAddress: address, addressCountry: "IN" },
  };
}

export function aggregateRatingSchema(count: number) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: { "@id": `${site.url}/#organization` },
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: String(count),
  };
}
