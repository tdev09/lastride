import Link from "next/link";
import { grounds } from "@/data/grounds";
import { Icon, MarigoldMark } from "@/components/Icon";
import {
  CtaBand,
  FaqList,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/UI";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/seo";

const crumbs = [{ label: "Home", href: "/" }, { label: "Cremation Grounds" }];

export const metadata = buildMetadata({
  title: "Cremation Grounds in Delhi NCR | Timings & Booking",
  description:
    "Guides to Nigambodh Ghat, Lodhi Road, Punjabi Bagh, Dwarka, Antim Nivas Noida, Haridwar and more. Timings, facilities, documents and slot booking.",
  path: "/cremation-grounds",
  keywords: [
    "cremation grounds delhi",
    "shamshan ghat near me",
    "nigambodh ghat timings",
    "electric cremation delhi",
    "cremation ground booking",
  ],
});

const groundFaqs = [
  {
    q: "Which cremation ground should we choose?",
    a: "The nearest one that has a slot free. Crossing the city to reach a better known ground costs an hour or more and gains you nothing. Tell us your area and we will name the right one.",
  },
  {
    q: "Do cremation grounds work at night?",
    a: "Most stop registering bodies around sunset, though a few allow late registration in genuine emergencies. If you call us in the evening we will tell you honestly whether it can be done that night or whether a freezer box is the better answer.",
  },
  {
    q: "What is the difference between CNG, electric and wood?",
    a: "CNG and electric both finish in about ninety minutes to two hours and cost far less. A traditional wood pyre takes four to six hours and needs 300 to 400 kg of timber. All three are accepted by tradition, so it comes down to what the family wants and what the ground has free.",
  },
  {
    q: "Do we need to book in advance?",
    a: "Most grounds work on arrival, but the popular ones fill up. Lodhi Road and Green Park in particular run out of afternoon slots. We check availability before you leave the house rather than after you arrive.",
  },
  {
    q: "What does the crematorium charge?",
    a: "Municipal grounds charge a modest registration fee with the schedule displayed at the counter. The real cost is the wood for a traditional pyre. We give you the total figure before booking anything.",
  },
];

export default function GroundsPage() {
  const byCity = grounds.reduce<Record<string, typeof grounds>>((acc, g) => {
    (acc[g.city] ||= []).push(g);
    return acc;
  }, {});

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(groundFaqs)]} />

      <PageHero
        eyebrow="Ground guides"
        icon="flame"
        title="Which crematorium, and what to expect when you get there"
        lead="Timings, whether they take wood or only CNG, what the registration counter will ask for, and how bad the parking is. Written from working these grounds daily rather than from their websites."
        breadcrumbs={crumbs}
        facts={[
          { label: "Grounds documented", value: `${grounds.length} in detail` },
          { label: "Booking", value: "Slot confirmed in 30 to 60 minutes" },
          { label: "Includes", value: "Delhi, Noida, Ghaziabad, Haridwar" },
          { label: "Helpline", value: "Answered 24 hours" },
        ]}
      />

      <Section tone="paper">
        <div className="container-page">
          <SectionHeading
            eyebrow="Before you choose"
            title="Three things that decide which ground is right"
            lead="Families often fix on a name they have heard of. That is usually the wrong basis, and it costs hours on a day when hours matter."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: "route" as const,
                t: "Distance, honestly measured",
                d: "Not map distance, driving time at that hour. Dwarka to Kashmere Gate in the evening peak is well over an hour, and the family is travelling with the body.",
              },
              {
                icon: "flame" as const,
                t: "What the ground actually offers",
                d: "If you want a full wood pyre with the mukhagni lit by hand, do not book a ground whose wood facility is one platform. Nigambodh and Punjabi Bagh are built for it.",
              },
              {
                icon: "users" as const,
                t: "How many people are coming",
                d: "Green Park is calm and small, which is lovely for forty people and difficult for two hundred. Dwarka Sector 24 and Antim Nivas handle crowds and parking properly.",
              },
            ].map((x) => (
              <div key={x.t} className="card p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-marigold-100 text-marigold-700">
                  <Icon name={x.icon} className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 font-display text-[18px] font-semibold text-ink-900">
                  {x.t}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-600">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-page">
          <SectionHeading
            eyebrow="The directory"
            title="Grounds we book every week"
            lead="Each guide covers the facilities, the timings, what to carry, how to get there and the questions families ask at that particular ground."
          />

          <div className="mt-12 space-y-12">
            {Object.entries(byCity).map(([cityName, list]) => (
              <div key={cityName}>
                <div className="flex items-center gap-3">
                  <MarigoldMark className="h-4 w-4 text-marigold-500" />
                  <h3 className="font-display text-[19px] font-semibold text-ink-900">
                    {cityName}
                  </h3>
                  <span className="h-px flex-1 bg-ink-100" />
                  <span className="text-[13px] text-ink-400">
                    {list.length} {list.length === 1 ? "ground" : "grounds"}
                  </span>
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((g) => (
                    <Link
                      key={g.slug}
                      href={`/cremation-grounds/${g.slug}`}
                      className="card card-hover group flex flex-col p-6"
                    >
                      <h4 className="font-display text-[18px] font-semibold leading-snug text-ink-900 transition-colors group-hover:text-marigold-700">
                        {g.name}
                      </h4>
                      <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-ink-600">
                        {g.type}
                      </p>
                      <p className="mt-4 flex items-start gap-2 border-t border-ink-100 pt-4 text-[13px] leading-relaxed text-ink-500">
                        <Icon
                          name="clock"
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-marigold-500"
                          strokeWidth={1.8}
                        />
                        {g.timings}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="tint">
        <div className="container-page">
          <FaqList faqs={groundFaqs} title="Questions about cremation grounds" />
        </div>
      </Section>

      <CtaBand
        title="Tell us your area and we will name the right ground."
        text="We know which grounds have slots today, which need the death certificate in hand before they register, and which close their gates at sunset."
      />
    </>
  );
}
