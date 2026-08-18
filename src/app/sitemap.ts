import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { grounds } from "@/data/grounds";
import { repatriationRoutes } from "@/data/repatriation";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.seoEnabled) return [];

  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/locations`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/cremation-grounds`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/repatriation`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/about`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.url}/gallery`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${site.url}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.url}/contact`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${site.url}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/terms-and-conditions`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const staticPages: MetadataRoute.Sitemap = staticEntries.map((p) => ({
    ...p,
    lastModified: now,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${site.url}/locations/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: c.featured ? 0.85 : 0.75,
  }));

  const groundPages: MetadataRoute.Sitemap = grounds.map((g) => ({
    url: `${site.url}/cremation-grounds/${g.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const routePages: MetadataRoute.Sitemap = repatriationRoutes.map((r) => ({
    url: `${site.url}/repatriation/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const postPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.65,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...groundPages,
    ...routePages,
    ...postPages,
  ];
}
