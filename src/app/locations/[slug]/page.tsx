import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, getCity, nearbyCities } from "@/data/cities";
import { services } from "@/data/services";
import { groundsInCity } from "@/data/grounds";
import { Icon, MarigoldMark } from "@/components/Icon";
import {
  ContentBlocks,
  CtaBand,
  FaqList,
  PageHero,
  Section,
  SectionHeading,
  SidebarCallCard,
} from "@/components/UI";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  serviceSchema,
} from "@/lib/seo";

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return buildMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    path: `/locations/${city.slug}`,
    keywords: [
      `funeral services ${city.name.toLowerCase()}`,
      `cremation services ${city.name.toLowerCase()}`,
      `dead body freezer box ${city.name.toLowerCase()}`,
      `hearse van ${city.name.toLowerCase()}`,
      `dead body transportation ${city.name.toLowerCase()}`,
    ],
  });
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: city.name },
  ];
  const localGrounds = groundsInCity(city.slug);
  const nearby = nearbyCities(city.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(city.faqs),
          serviceSchema({
            name: `Funeral and cremation services in ${city.name}`,
            description: city.metaDescription,
            path: `/locations/${city.slug}`,
            areaName: city.name,
          }),
        ]}
      />

      <PageHero
        eyebrow={`${city.state} · ${city.region}`}
        icon="map"
        title={`Funeral & Cremation Services in ${city.name}`}
        lead={city.intro[0]}
        breadcrumbs={crumbs}
        facts={[
          { label: "Response time", value: city.responseTime },
          { label: "Freezer box", value: "Delivered within 60 to 90 minutes" },
          { label: "Grounds covered", value: `${city.facilities.length} main facilities` },
          { label: "Helpline", value: "Answered 24 hours, all days" },
        ]}
      />

      <Section tone="paper">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          <article>
            <div className="prose-page text-[17.5px]">
              {city.intro.slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Services in this city */}
            <div className="mt-12">
              <h2 className="font-display text-[24px] font-semibold text-ink-900 sm:text-[27px]">
                What we arrange in {city.name}
              </h2>
              <div className="rule-marigold mt-3.5" />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {services.slice(0, 10).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-3 rounded-lg border border-ink-100 bg-white p-4 transition-all hover:border-marigold-200 hover:shadow-soft"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-ink-50 text-ink-600 transition-colors group-hover:bg-marigold-100 group-hover:text-marigold-700">
                      <Icon name={s.icon} className="h-[18px] w-[18px]" />
                    </span>
                    <span className="text-[14.5px] font-medium leading-snug text-ink-800">
                      {s.navTitle}
                    </span>
                  </Link>
                ))}
              </div>
              <Link
                href="/services"
                className="mt-5 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-marigold-700 hover:underline"
              >
                All {services.length} services
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-3.5 w-3.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>

            {/* Facilities */}
            <div className="mt-14">
              <h2 className="font-display text-[24px] font-semibold text-ink-900 sm:text-[27px]">
                Cremation grounds and facilities in {city.name}
              </h2>
              <div className="rule-marigold mt-3.5" />
              <div className="mt-6 space-y-4">
                {city.facilities.map((f) => (
                  <div key={f.name} className="card p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display text-[18px] font-semibold text-ink-900">
                        {f.name}
                      </h3>
                      <p className="flex items-center gap-1.5 text-[13px] text-marigold-700">
                        <Icon name="map" className="h-3.5 w-3.5" strokeWidth={1.8} />
                        {f.area}
                      </p>
                    </div>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                      {f.note}
                    </p>
                  </div>
                ))}
              </div>

              {localGrounds.length ? (
                <div className="mt-6 rounded-lg border border-marigold-200 bg-marigold-50 p-6">
                  <p className="text-[13px] font-semibold text-marigold-800">
                    Detailed guides for {city.name} grounds
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {localGrounds.map((g) => (
                      <Link
                        key={g.slug}
                        href={`/cremation-grounds/${g.slug}`}
                        className="rounded-full border border-marigold-300 bg-white px-3.5 py-1.5 text-[13px] font-medium text-marigold-800 transition-colors hover:bg-marigold-100"
                      >
                        {g.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {/* Local notes */}
            <div className="mt-14">
              <ContentBlocks sections={city.localNotes} />
            </div>

            {/* Areas covered */}
            <div className="mt-14">
              <h2 className="font-display text-[24px] font-semibold text-ink-900 sm:text-[27px]">
                Areas we cover in {city.name}
              </h2>
              <div className="rule-marigold mt-3.5" />
              <p className="mt-5 text-[16px] leading-relaxed text-ink-600">
                Our vehicles reach these areas in {city.responseTime.toLowerCase()}.
                If your locality is not listed, call anyway. It almost certainly
                falls inside our coverage.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {city.areas.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-[13.5px] text-ink-700"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <SidebarCallCard heading={`Need help in ${city.name}?`} />

            <div className="card mt-5 p-6">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-marigold-600">
                <MarigoldMark className="h-3.5 w-3.5" />
                At a glance
              </p>
              <dl className="mt-4 space-y-3.5">
                {[
                  { k: "State", v: city.state },
                  { k: "Region", v: city.region },
                  { k: "Response", v: city.responseTime },
                  { k: "Grounds", v: `${city.facilities.length} covered` },
                  { k: "Areas", v: `${city.areas.length}+ localities` },
                ].map((r) => (
                  <div key={r.k} className="flex justify-between gap-4 border-b border-ink-100 pb-3 last:border-0 last:pb-0">
                    <dt className="text-[13.5px] text-ink-500">{r.k}</dt>
                    <dd className="text-right text-[13.5px] font-medium text-ink-800">
                      {r.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {nearby.length ? (
              <div className="card mt-5 p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-marigold-600">
                  Nearby cities
                </p>
                <ul className="mt-3 space-y-0.5">
                  {nearby.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/locations/${c.slug}`}
                        className="group flex items-center justify-between rounded-md px-2 py-1.5 text-[14px] text-ink-700 transition-colors hover:bg-marigold-50 hover:text-marigold-800"
                      >
                        {c.name}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-page">
          <FaqList
            faqs={city.faqs}
            title={`Funeral services in ${city.name}: common questions`}
          />
        </div>
      </Section>

      <Section tone="tint" className="!py-14">
        <div className="container-page">
          <SectionHeading
            eyebrow="Also covered"
            title="Other cities on our network"
            align="center"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {cities
              .filter((c) => c.slug !== city.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/locations/${c.slug}`}
                  className="rounded-full border border-ink-200 bg-white px-4 py-2 text-[13.5px] text-ink-700 transition-colors hover:border-marigold-400 hover:bg-marigold-50 hover:text-marigold-800"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </Section>

      <CtaBand
        title={`We can be with you in ${city.name} shortly.`}
        note={`${city.responseTime}. Helpline answered 24 hours.`}
      />
    </>
  );
}
