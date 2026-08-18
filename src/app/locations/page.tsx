import Link from "next/link";
import { cities, citiesByRegion, regionOrder } from "@/data/cities";
import { Icon, MarigoldMark } from "@/components/Icon";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/UI";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

const crumbs = [{ label: "Home", href: "/" }, { label: "Locations" }];

export const metadata = buildMetadata({
  title: "Funeral Services Across India | 25 Cities, 24x7",
  description:
    "Funeral, cremation and dead body transport in Delhi, Gurugram, Noida, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune and 16 more cities.",
  path: "/locations",
  keywords: [
    "funeral services near me",
    "cremation services india",
    "dead body transport city",
    "freezer box rental india",
  ],
});

export default function LocationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        eyebrow="Where we work"
        icon="map"
        title="25 cities, and the same people answering the phone"
        lead="Delhi NCR runs on our own offices, vehicles and freezer box stock, which is why response there is quickest. The other cities work through partner depots we have used for years, coordinated from the same helpline."
        breadcrumbs={crumbs}
        facts={[
          { label: "Cities", value: `${cities.length} across India` },
          { label: "NCR response", value: "30 to 45 minutes" },
          { label: "Other cities", value: "45 to 90 minutes" },
          { label: "Interstate", value: "Road transfer anywhere in India" },
        ]}
      />

      <Section tone="paper">
        <div className="container-page">
          <SectionHeading
            eyebrow="Priority coverage"
            title="Where we are fastest"
            lead="These five are served by our own staff and vehicles from offices in Raghubir Nagar, Sector 57 Gurugram and Sector 62 Noida."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cities
              .filter((c) => c.region === "Delhi NCR")
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/locations/${c.slug}`}
                  className="card card-hover group overflow-hidden"
                >
                  <div className="bg-ink-gradient grain relative p-6">
                    <MarigoldMark className="h-5 w-5 text-marigold-400/70" />
                    <h3 className="mt-3 font-display text-[22px] font-semibold text-white">
                      {c.name}
                    </h3>
                    <p className="mt-1 text-[13px] text-white/45">{c.state}</p>
                  </div>
                  <div className="p-6">
                    <p className="flex items-start gap-2 text-[14px] leading-relaxed text-ink-600">
                      <Icon
                        name="clock"
                        className="mt-0.5 h-4 w-4 shrink-0 text-marigold-500"
                        strokeWidth={1.7}
                      />
                      {c.responseTime}
                    </p>
                    <p className="mt-3 flex items-start gap-2 text-[14px] leading-relaxed text-ink-600">
                      <Icon
                        name="flame"
                        className="mt-0.5 h-4 w-4 shrink-0 text-marigold-500"
                        strokeWidth={1.7}
                      />
                      {c.facilities.length} cremation grounds covered
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-marigold-700">
                      Open {c.name} page
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Full network"
            title="Every city we cover"
            lead="Each page carries the local cremation grounds, the areas we reach, the death registration process for that municipality and the questions families in that city actually ask."
          />

          <div className="mt-12 space-y-12">
            {regionOrder.map((region) => {
              const list = citiesByRegion[region];
              if (!list?.length) return null;
              return (
                <div key={region}>
                  <div className="flex items-center gap-3">
                    <MarigoldMark className="h-4 w-4 text-marigold-500" />
                    <h3 className="font-display text-[19px] font-semibold text-ink-900">
                      {region}
                    </h3>
                    <span className="h-px flex-1 bg-ink-100" />
                    <span className="text-[13px] text-ink-400">
                      {list.length} {list.length === 1 ? "city" : "cities"}
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {list.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/locations/${c.slug}`}
                        className="group rounded-lg border border-ink-100 bg-white p-5 transition-all hover:border-marigold-200 hover:shadow-soft"
                      >
                        <div className="flex items-baseline justify-between gap-3">
                          <h4 className="font-display text-[17px] font-semibold text-ink-900 transition-colors group-hover:text-marigold-700">
                            {c.name}
                          </h4>
                          <span className="text-[12px] text-ink-400">{c.state}</span>
                        </div>
                        <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500">
                          {c.responseTime}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section tone="ink" className="!py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Between cities"
              title="Interstate and long distance transfer"
              lead="A great deal of our work is moving someone from the city they worked in to the town they came from. That is a road or air job, and the timing depends on paperwork more than distance."
              light
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { t: "Under 12 hours", d: "Freezer ambulance, no embalming needed. Delhi to Lucknow, Bengaluru to Chennai, Mumbai to Pune." },
              { t: "12 to 24 hours", d: "Embalming first, then a freezer ambulance with two drivers. Delhi to Patna, Surat to Bhopal." },
              { t: "Over 24 hours", d: "Air cargo is usually better. Same day arrival against a day and a half on the road." },
              { t: "Any flight", d: "Embalming is compulsory. Add a day for the certificates and the cargo booking." },
            ].map((x) => (
              <div key={x.t} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <p className="font-display text-[16px] font-semibold text-marigold-300">
                  {x.t}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-white/60">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
