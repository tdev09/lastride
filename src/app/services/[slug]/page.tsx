import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getService, relatedServices } from "@/data/services";
import { cities } from "@/data/cities";
import { site } from "@/config/site";
import {
  Checklist,
  ContentBlocks,
  CtaBand,
  FaqList,
  PageHero,
  PriceNote,
  RelatedGrid,
  Section,
  SidebarCallCard,
} from "@/components/UI";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  serviceSchema,
} from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.navTitle },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(service.faqs),
          serviceSchema({
            name: service.title,
            description: service.metaDescription,
            path: `/services/${service.slug}`,
          }),
        ]}
      />

      <PageHero
        eyebrow="Service"
        icon={service.icon}
        title={service.title}
        lead={service.tagline}
        breadcrumbs={crumbs}
        facts={service.quickFacts}
        ambient={service.ambientHero}
      />

      <Section tone="paper">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          <article>
            <div className="prose-page text-[17.5px]">
              {service.intro.map((p, i) => (
                <p
                  key={i}
                  className={i === 0 ? "text-[19px] leading-relaxed text-ink-800" : ""}
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10">
              <Checklist title="What is included" items={service.included} />
            </div>

            <div className="mt-12">
              <ContentBlocks sections={service.sections} />
            </div>

            {service.priceNote && site.features.showPricingNote ? (
              <div className="mt-12">
                <PriceNote text={service.priceNote} />
              </div>
            ) : null}

            <div className="mt-14">
              <RelatedGrid
                title="Related services"
                items={relatedServices(service.slug).map((s) => ({
                  href: `/services/${s.slug}`,
                  title: s.navTitle,
                  text: s.summary,
                  icon: s.icon,
                }))}
              />
            </div>
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <SidebarCallCard />

            <div className="card mt-5 p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-marigold-600">
                Available in
              </p>
              <p className="mt-2.5 text-[14px] leading-relaxed text-ink-600">
                Delhi NCR from our own vehicles, and {cities.length - 5} more
                cities through our network.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {cities.slice(0, 12).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/locations/${c.slug}`}
                    className="rounded-full border border-ink-200 px-3 py-1 text-[12.5px] text-ink-600 transition-colors hover:border-marigold-400 hover:bg-marigold-50 hover:text-marigold-800"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/locations"
                className="mt-4 inline-block text-[13.5px] font-semibold text-marigold-700 hover:underline"
              >
                See all {cities.length} cities
              </Link>
            </div>

            <div className="card mt-5 p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-marigold-600">
                Other services
              </p>
              <ul className="mt-3 space-y-0.5">
                {services
                  .filter((s) => s.slug !== service.slug)
                  .slice(0, 8)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex items-center gap-2.5 rounded-md px-2 py-1.5 text-[14px] text-ink-700 transition-colors hover:bg-marigold-50 hover:text-marigold-800"
                      >
                        <Icon
                          name={s.icon}
                          className="h-4 w-4 shrink-0 text-ink-300 transition-colors group-hover:text-marigold-500"
                        />
                        {s.navTitle}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-page">
          <FaqList faqs={service.faqs} title={`${service.navTitle}: common questions`} />
        </div>
      </Section>

      <CtaBand
        title={`Need ${service.navTitle.toLowerCase()} arranged now?`}
        text="Call and describe the situation. We will tell you what has to happen next and what it costs, on that call."
      />
    </>
  );
}
