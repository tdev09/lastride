import Link from "next/link";
import { services } from "@/data/services";
import { promises } from "@/data/content";
import { Icon } from "@/components/Icon";
import {
  CtaBand,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/UI";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

const crumbs = [{ label: "Home", href: "/" }, { label: "Services" }];

export const metadata = buildMetadata({
  title: "Funeral Services in India | Cremation, Transport & Rituals",
  description:
    "Sixteen funeral services from one helpline. Cremation booking, transport, freezer box, hearse van, embalming, samagri, pandit ji and repatriation.",
  path: "/services",
  keywords: [
    "funeral services india",
    "cremation services",
    "dead body transportation",
    "freezer box rental",
    "antim sanskar services",
  ],
});

/** Grouped so the page reads as a sequence rather than a flat list. */
const groups = [
  {
    title: "In the first hours",
    lead: "The things that have to happen immediately, usually within an hour of the call.",
    slugs: [
      "dead-body-transportation",
      "freezer-box-rental",
      "hearse-van-service",
      "embalming-services",
    ],
  },
  {
    title: "The cremation or burial",
    lead: "Booking the ground, the rites themselves, and everything the ceremony needs.",
    slugs: [
      "cremation-services",
      "antim-sanskar-samagri",
      "pandit-ji-services",
      "christian-and-muslim-funerals",
      "parsi-funeral-services",
    ],
  },
  {
    title: "The days that follow",
    lead: "The chautha, the tehravin, the prayer meeting and the asthi visarjan.",
    slugs: [
      "prayer-hall-booking",
      "funeral-decoration",
      "chautha-and-tehravin",
      "asthi-visarjan",
    ],
  },
  {
    title: "Moving someone a long way",
    lead: "Air transfer within India and international repatriation in both directions.",
    slugs: ["dead-body-air-cargo", "air-ambulance"],
  },
  {
    title: "Before it is needed",
    lead: "Recording your wishes so your family is not deciding under pressure.",
    slugs: ["funeral-pre-planning"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        eyebrow="What we arrange"
        title="Everything a family needs, from one number"
        lead="Sixteen services covering the cremation itself, the transport, the preservation, the rituals that follow and the paperwork nobody warns you about. One coordinator handles all of it."
        breadcrumbs={crumbs}
        facts={[
          { label: "Services", value: `${services.length} in total` },
          { label: "Cities", value: "25 across India" },
          { label: "Helpline", value: "Answered 24 hours" },
          { label: "Response", value: "30 to 45 minutes in NCR" },
        ]}
      />

      <Section tone="paper">
        <div className="container-page space-y-16 lg:space-y-20">
          {groups.map((group, gi) => {
            const items = group.slugs
              .map((s) => services.find((x) => x.slug === s))
              .filter((s): s is (typeof services)[number] => Boolean(s));

            return (
              <div key={group.title}>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-[15px] font-semibold text-marigold-500">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-display text-[26px] font-semibold leading-tight text-ink-900 sm:text-[30px]">
                      {group.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-[15.5px] leading-relaxed text-ink-600">
                      {group.lead}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="card card-hover group flex flex-col p-6"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink-900 text-marigold-300 transition-colors group-hover:bg-marigold-500 group-hover:text-white">
                        <Icon name={s.icon} className="h-[22px] w-[22px]" strokeWidth={1.5} />
                      </span>
                      <h3 className="mt-4 font-display text-[18.5px] font-semibold leading-snug text-ink-900">
                        {s.navTitle}
                      </h3>
                      <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-ink-600">
                        {s.summary}
                      </p>
                      <span className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-ink-100 pt-4 text-[12.5px] text-ink-500">
                        {s.quickFacts.slice(0, 2).map((f) => (
                          <span key={f.label} className="flex items-center gap-1.5">
                            <Icon
                              name="check"
                              className="h-3.5 w-3.5 text-marigold-400"
                              strokeWidth={1.8}
                            />
                            {f.value}
                          </span>
                        ))}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section tone="ink">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we work"
            title="Four things we hold to"
            align="center"
            light
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-marigold-500/15 text-marigold-300">
                  <Icon name={p.icon} className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 font-display text-[17px] font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/60">
                  {p.text}
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
