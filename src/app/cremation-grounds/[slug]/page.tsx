import { notFound } from "next/navigation";
import Link from "next/link";
import { grounds, getGround } from "@/data/grounds";
import { getCity } from "@/data/cities";
import { Icon } from "@/components/Icon";
import {
  Checklist,
  ContentBlocks,
  CtaBand,
  FaqList,
  PageHero,
  Section,
  SidebarCallCard,
} from "@/components/UI";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  placeSchema,
} from "@/lib/seo";

export function generateStaticParams() {
  return grounds.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ground = getGround(slug);
  if (!ground) return {};
  return buildMetadata({
    title: ground.metaTitle,
    description: ground.metaDescription,
    path: `/cremation-grounds/${ground.slug}`,
    keywords: [
      ground.name.toLowerCase(),
      `${ground.name.toLowerCase()} timings`,
      `${ground.name.toLowerCase()} charges`,
      `cremation ground ${ground.city.toLowerCase()}`,
    ],
  });
}

export default async function GroundPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ground = getGround(slug);
  if (!ground) notFound();

  const city = getCity(ground.citySlug);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Cremation Grounds", href: "/cremation-grounds" },
    { label: ground.name },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(ground.faqs),
          placeSchema({
            name: ground.name,
            description: ground.metaDescription,
            address: ground.address,
            path: `/cremation-grounds/${ground.slug}`,
          }),
        ]}
      />

      <PageHero
        eyebrow={`Cremation ground · ${ground.city}`}
        icon="flame"
        title={ground.name}
        lead={ground.intro[0]}
        breadcrumbs={crumbs}
        facts={[
          { label: "Type", value: ground.type },
          { label: "Timings", value: ground.timings },
          { label: "City", value: ground.city },
          { label: "Booking", value: "Slot confirmed in 30 to 60 minutes" },
        ]}
      />

      <Section tone="paper">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          <article>
            <div className="prose-page text-[17.5px]">
              {ground.intro.slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 rounded-lg border border-ink-100 bg-white p-6">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-marigold-600">
                <Icon name="map" className="h-4 w-4" strokeWidth={1.8} />
                Address
              </p>
              <p className="mt-2.5 text-[16px] leading-relaxed text-ink-700">
                {ground.address}
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(ground.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm mt-4"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="mt-10">
              <Checklist title="Facilities at this ground" items={ground.facilities} />
            </div>

            <div className="mt-12">
              <ContentBlocks sections={ground.notes} />
            </div>
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <SidebarCallCard heading={`Book a slot at ${ground.name}`} />

            <div className="card mt-5 p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-marigold-600">
                Documents to carry
              </p>
              <ul className="mt-3.5 space-y-2.5">
                {[
                  "Death certificate or hospital summary",
                  "Photo ID of the person who has died",
                  "Photo ID of the family member registering",
                  "Police NOC, only for an unnatural death",
                ].map((d) => (
                  <li key={d} className="flex gap-2.5 text-[14px] leading-relaxed text-ink-700">
                    <Icon
                      name="document"
                      className="mt-0.5 h-4 w-4 shrink-0 text-marigold-500"
                      strokeWidth={1.6}
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {city ? (
              <div className="card mt-5 p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-marigold-600">
                  In {city.name}
                </p>
                <p className="mt-2.5 text-[14px] leading-relaxed text-ink-600">
                  {city.responseTime}. We cover {city.areas.length}+ localities
                  across the city.
                </p>
                <Link
                  href={`/locations/${city.slug}`}
                  className="mt-3.5 inline-block text-[13.5px] font-semibold text-marigold-700 hover:underline"
                >
                  {city.name} services page
                </Link>
              </div>
            ) : null}

            <div className="card mt-5 p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-marigold-600">
                Other grounds
              </p>
              <ul className="mt-3 space-y-0.5">
                {grounds
                  .filter((g) => g.slug !== ground.slug)
                  .slice(0, 8)
                  .map((g) => (
                    <li key={g.slug}>
                      <Link
                        href={`/cremation-grounds/${g.slug}`}
                        className="block rounded-md px-2 py-1.5 text-[14px] text-ink-700 transition-colors hover:bg-marigold-50 hover:text-marigold-800"
                      >
                        {g.name}
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
          <FaqList faqs={ground.faqs} title={`${ground.name}: common questions`} />
        </div>
      </Section>

      <CtaBand
        title={`We can book ${ground.name} for you today.`}
        text="Call and tell us the area and whether you want wood, CNG or electric. We check availability and confirm a slot while you are still on the phone."
      />
    </>
  );
}
