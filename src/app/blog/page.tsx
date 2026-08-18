import Link from "next/link";
import Image from "next/image";
import { sortedPosts, blogCategories } from "@/data/blog";
import { MarigoldMark } from "@/components/Icon";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/UI";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

const crumbs = [{ label: "Home", href: "/" }, { label: "Blog" }];

export const metadata = buildMetadata({
  title: "Guides for Families After a Death in India",
  description:
    "Plain guides on what to do after a death in India. Documents needed, death certificates, cremation rituals, funeral costs and repatriation.",
  path: "/blog",
  keywords: [
    "what to do after a death in india",
    "death certificate process",
    "hindu cremation rituals",
    "funeral cost india",
  ],
});

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [lead, ...rest] = sortedPosts;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        eyebrow="Guides"
        title="The things families wish somebody had explained"
        lead="Written plainly, with the document names, the actual timelines and the mistakes that cost people weeks. No sales pitch, and we tell you where you can spend less."
        breadcrumbs={crumbs}
        facts={[
          { label: "Guides", value: `${sortedPosts.length} published` },
          { label: "Topics", value: blogCategories.join(", ") },
          { label: "Written by", value: "Coordinators who do this daily" },
          { label: "Updated", value: "Reviewed every few months" },
        ]}
      />

      <Section tone="paper">
        <div className="container-page">
          {/* Lead article */}
          <Link
            href={`/blog/${lead.slug}`}
            className="card card-hover group grid overflow-hidden lg:grid-cols-2"
          >
            <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-ink-950 sm:min-h-[320px]">
              {lead.image ? (
                <Image
                  src={lead.image}
                  alt={lead.imageAlt || lead.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              ) : (
                <div className="bg-ink-gradient grain relative flex h-full w-full items-center justify-center p-10">
                  <MarigoldMark className="h-24 w-24 text-marigold-300/30 transition-transform duration-700 group-hover:scale-110" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/20 to-transparent" />
              <span className="absolute left-6 top-6 z-10 rounded-full bg-white/20 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white shadow-sm backdrop-blur-md">
                {lead.category}
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-10">
              <p className="flex items-center gap-2 text-[12.5px] text-ink-500">
                <time dateTime={lead.date}>{formatDate(lead.date)}</time>
                <span className="h-1 w-1 rounded-full bg-ink-300" />
                {lead.readingTime}
              </p>
              <h2 className="mt-3 font-display text-[26px] font-semibold leading-tight text-ink-900 transition-colors group-hover:text-marigold-700 sm:text-[30px]">
                {lead.title}
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-600">
                {lead.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-marigold-700">
                Read the guide
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Rest */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-ink-950 shadow-sm">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.imageAlt || p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="bg-ink-gradient grain relative flex h-full w-full items-center justify-center">
                      <MarigoldMark className="h-16 w-16 text-marigold-300/25 transition-transform duration-700 group-hover:scale-110" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-50" />
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white shadow-sm backdrop-blur-md">
                    {p.category}
                  </span>
                </div>
                <p className="mt-4 flex items-center gap-2 text-[12.5px] text-ink-500">
                  <time dateTime={p.date}>{formatDate(p.date)}</time>
                  <span className="h-1 w-1 rounded-full bg-ink-300" />
                  {p.readingTime}
                </p>
                <h2 className="mt-2 font-display text-[19px] font-semibold leading-snug text-ink-900 transition-colors group-hover:text-marigold-700">
                  {p.title}
                </h2>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600 line-clamp-3">
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why we write these"
            title="Because nobody researches this in advance"
            lead="The first time a family thinks about any of it is an hour after a death. That gap is where people get taken advantage of, and a guide written in plain language closes some of it."
            align="center"
          />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
