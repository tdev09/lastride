import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { promises, testimonials } from "@/data/content";
import { Icon, MarigoldMark } from "@/components/Icon";
import {
  CtaBand,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/UI";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

const crumbs = [{ label: "Home", href: "/" }, { label: "About" }];

export const metadata = buildMetadata({
  title: "About Last Ride | 15 Years, 5,000 Families Served",
  description:
    "Last Ride has arranged funerals across Delhi NCR and 25 cities since 2010. How we work, what we hold to on pricing, and why families call us back.",
  path: "/about",
  keywords: [
    "about last ride funeral",
    "funeral service company india",
    "trusted funeral services delhi",
  ],
});

const timeline = [
  {
    year: "2010",
    title: "One van, west Delhi",
    text: "We started with a single hearse van working out of Raghubir Nagar, mostly serving families in Rajouri Garden, Janakpuri and Tilak Nagar who had been quoted three different prices by three different people.",
  },
  {
    year: "2014",
    title: "Freezer boxes and the night shift",
    text: "Families kept asking for a way to wait for relatives flying in. We bought our first freezer boxes and put a person on the phone through the night, which is when most of these calls actually come.",
  },
  {
    year: "2017",
    title: "Gurugram and Noida offices",
    text: "NCR had grown outwards and response times from a single Delhi base were no longer good enough. Offices in Sector 57 and Sector 62 brought most of the region inside 45 minutes.",
  },
  {
    year: "2020",
    title: "The year that changed everything",
    text: "We worked through it. Grounds were overwhelmed, families could not reach their own relatives, and a great deal of what we know about handling pressure was learned in those months.",
  },
  {
    year: "2022",
    title: "Repatriation desk",
    text: "Enough families were calling from the Gulf, the UK and the US that it needed its own team. Embassy files, coffin specifications and consular procedures are a specialist job.",
  },
  {
    year: "Today",
    title: `${cities.length} cities, ${site.familiesServed} families`,
    text: "The same helpline number, answered by the same kind of person. The scale has changed and the way we take a call has not.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        eyebrow="About us"
        title="We do one thing, and we try to do it without adding to the damage"
        lead="This industry has a reputation. Prices that move at the crematorium gate, phones that ring out at 2 am, a pandit who does not know your community's rites. Every part of how we work is a reaction to something a family told us had been done to them."
        breadcrumbs={crumbs}
        facts={site.stats.map((s) => ({ label: s.label, value: s.value }))}
      />

      <Section tone="paper">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div className="prose-page text-[17.5px]">
            <p className="text-[20px] leading-relaxed text-ink-800">
              A funeral has to be arranged in a few hours by people who are in
              no state to arrange anything. That is the whole problem, and it is
              the reason this business exists.
            </p>
            <p>
              Nobody researches funeral services in advance. The first time a
              family thinks about any of this is an hour after a death, when
              somebody hands them a phone and says call someone. They do not
              know what a freezer box costs, whether the ground takes wood,
              which papers the counter will demand, or what a fair price looks
              like. That gap is where families get taken advantage of, and it is
              a particularly ugly thing to do to somebody.
            </p>
            <p>
              So we made a decision early that has cost us money and kept the
              business alive. We tell families what they do not need. If a
              freezer box will hold the body for the two days you are waiting,
              we will not sell you embalming. If air cargo will get your father
              to Patna in time, we will not quote you a charter. If the local
              ground has a slot, we will not book the one with the bigger name
              across the city.
            </p>
            <p>
              The result is that a fair number of our calls end in a smaller
              invoice than the family expected. It is also why the same families
              call us again years later, and why most of our work comes from
              people who were told about us by someone else.
            </p>
            <h2>What we are, and what we are not</h2>
            <p>
              We are a coordination business. We own vehicles and freezer boxes
              and we employ the staff who handle the body, but the crematorium
              belongs to the municipality, the pandit belongs to his own
              tradition, and the embassy answers to nobody. What we do is know
              how all of those pieces work and put them in the right order
              quickly.
            </p>
            <p>
              We are not a religious authority. When we say a daughter can
              perform the last rites, or that sending the ashes with a
              representative is proper practice, we are reporting what is widely
              accepted rather than issuing a ruling. Your family decides. Our
              job is to make sure that whatever you decide is what actually
              happens.
            </p>
          </div>

          <aside className="space-y-5">
            <div className="bg-ink-gradient grain relative overflow-hidden rounded-xl p-8 text-white shadow-sm">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/cta-bg-india.png"
                  alt=""
                  fill
                  sizes="400px"
                  className="object-cover object-center opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/75 to-ink-950/90" />
              </div>

              <div className="relative z-10">
                <MarigoldMark className="h-7 w-7 text-marigold-400" />
                <p className="mt-5 font-display text-[21px] font-semibold leading-snug">
                  &ldquo;Death has no schedule, and neither do we.&rdquo;
                </p>
                <p className="mt-4 text-[14.5px] leading-relaxed text-white/75">
                  Most of our calls come between 10 pm and 6 am. A person answers
                  every one of them, including on Diwali and Holi. If that sounds
                  like a small thing, ask anyone who has tried to reach a funeral
                  service at three in the morning.
                </p>
              </div>
            </div>

            <div className="card p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-marigold-600">
                Where we work
              </p>
              <div className="mt-4 space-y-5">
                {site.offices.map((o) => (
                  <div key={o.city} className="border-b border-ink-100 pb-5 last:border-0 last:pb-0">
                    <p className="flex items-center justify-between font-display text-[16px] font-semibold text-ink-900">
                      {o.city}
                      <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-ink-400">
                        {o.label}
                      </span>
                    </p>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink-600">
                      {o.area}, India
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-marigold-600">
                By the numbers
              </p>
              <dl className="mt-4 space-y-3.5">
                {[
                  { k: "Services offered", v: `${services.length}` },
                  { k: "Cities covered", v: `${cities.length}` },
                  { k: "Cremation grounds documented", v: "11" },
                  { k: "Repatriation countries", v: "19" },
                  { k: "Years operating", v: `${site.yearsOfService}` },
                ].map((r) => (
                  <div key={r.k} className="flex justify-between gap-4 border-b border-ink-100 pb-3 last:border-0 last:pb-0">
                    <dt className="text-[14px] text-ink-500">{r.k}</dt>
                    <dd className="font-display text-[16px] font-semibold text-ink-900">
                      {r.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </Section>

      {/* Timeline */}
      <Section tone="white">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we got here"
            title="From one van in west Delhi"
            lead="No investors, no acquisitions. The business grew because families kept asking for the next thing and we kept saying yes."
          />

          <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {timeline.map((t) => (
              <div key={t.year} className="relative border-l-2 border-marigold-200 pl-6">
                <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-marigold-400 bg-paper" />
                <p className="font-display text-[15px] font-semibold text-marigold-600">
                  {t.year}
                </p>
                <h3 className="mt-1.5 font-display text-[19px] font-semibold text-ink-900">
                  {t.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-600">
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Promises */}
      <Section tone="tint">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we hold to"
            title="Four commitments, and what they cost us"
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p) => (
              <div key={p.title} className="card p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-marigold-100 text-marigold-700">
                  <Icon name={p.icon} className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 font-display text-[18px] font-semibold text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-600">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Communities */}
      <Section tone="white">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Every community"
              title="Your rites, performed the way your family performs them"
              lead="A Bengali shradh is not a Punjabi one. A Marathi tehravi follows its own sequence. A Tamil karumathi falls on different days entirely. Getting this wrong is not a small error, and it is the thing families remember longest."
            />
            <p className="mt-6 text-[16px] leading-relaxed text-ink-600">
              Tell us the community and the region when you call. We send someone
              who conducts that vidhi regularly, with the samagri to match,
              rather than a general pandit working from a script.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Hindu, all regional traditions",
              "Sikh, granthi and sehaj paath",
              "Jain antim kriya",
              "Buddhist rites",
              "Christian burial and service",
              "Muslim janaza and burial",
              "Parsi, with the Anjuman",
              "Bengali, Tamil, Marathi, Gujarati",
            ].map((c) => (
              <div
                key={c}
                className="flex items-center gap-3 rounded-lg border border-ink-100 bg-paper p-4"
              >
                <MarigoldMark className="h-4 w-4 shrink-0 text-marigold-400" />
                <span className="text-[14.5px] text-ink-700">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="tint">
        <div className="container-page">
          <SectionHeading
            eyebrow="In their words"
            title="What families said afterwards"
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((t) => (
              <figure key={t.name} className="card p-7">
                <div className="flex gap-0.5 text-marigold-400" aria-label="5 out of 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="m12 3.2 2.6 5.7 6.2.7-4.6 4.2 1.2 6.1L12 16.9l-5.4 3 1.2-6.1L3.2 9.6l6.2-.7Z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 text-[15px] leading-relaxed text-ink-700">
                  {t.text}
                </blockquote>
                <figcaption className="mt-5 border-t border-ink-100 pt-4">
                  <p className="font-display text-[15.5px] font-semibold text-ink-900">
                    {t.name}
                  </p>
                  <p className="mt-0.5 text-[13px] text-ink-500">
                    {t.location} &middot; {t.service}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/gallery" className="btn btn-outline">
              See our work
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
