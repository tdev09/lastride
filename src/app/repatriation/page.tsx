import Link from "next/link";
import { repatriationRoutes } from "@/data/repatriation";
import { Icon, MarigoldMark } from "@/components/Icon";
import {
  Checklist,
  CtaBand,
  FaqList,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/UI";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/seo";

const crumbs = [{ label: "Home", href: "/" }, { label: "Repatriation" }];

export const metadata = buildMetadata({
  title: "International Repatriation of Mortal Remains to India",
  description:
    "Repatriation of mortal remains to and from India. Embalming, zinc lined coffin, embassy clearance, customs and air cargo booking, handled for you.",
  path: "/repatriation",
  keywords: [
    "dead body repatriation india",
    "mortal remains transfer",
    "international body transport",
    "repatriation of remains",
    "dead body air cargo",
  ],
});

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "New Zealand",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Oman",
  "Bahrain",
  "Singapore",
  "Malaysia",
  "Germany",
  "France",
  "Italy",
  "Netherlands",
  "South Africa",
  "Nepal",
];

const arrivalAirports = [
  "Delhi",
  "Mumbai",
  "Chennai",
  "Bengaluru",
  "Hyderabad",
  "Kolkata",
  "Amritsar",
  "Kochi",
];

const repatFaqs = [
  {
    q: "How long does international repatriation take?",
    a: "Three to nine days depending on the country. Gulf routes are fastest at three to five days. The US and UK run five to nine, and it is the local death registration and the consular clearance that decide it, not the flight.",
  },
  {
    q: "Who pays for it?",
    a: "Check the insurance position on day one. Travel policies, employer cover for overseas postings and university policies for international students very often include repatriation of remains, and most families never think to ask. We provide an itemised invoice for the claim.",
  },
  {
    q: "Is embalming compulsory?",
    a: "For any flight, yes, without exception. No airline will accept mortal remains as cargo without an embalming certificate from a licensed embalmer, and no embassy will issue a no objection certificate without it.",
  },
  {
    q: "What kind of coffin is required?",
    a: "A zinc or lead lined inner coffin, fully sealed, inside a wooden outer coffin, packed in a protective crate. No viewing window, no unsealed joints, and external labelling showing the head end and the consignee. Airlines check this at the terminal and refuse anything that does not comply.",
  },
  {
    q: "Can the family fly on the same aircraft?",
    a: "Often yes, if the airline has passenger seats on that flight. The remains travel in the hold as cargo. We book both together when asked, though it is not possible on cargo only routes.",
  },
  {
    q: "Is carrying ashes a real alternative?",
    a: "Yes, and it costs a small fraction of a full repatriation with far less paperwork. Cremation abroad followed by carrying the ashes needs only the death certificate and the crematorium certificate. The asthi visarjan on the Ganga is then performed exactly as it would be otherwise. We tell every family about this option, including the ones who choose the full transfer anyway.",
  },
];

export default function RepatriationPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(repatFaqs)]} />

      <PageHero
        eyebrow="International repatriation"
        icon="plane"
        title="Bringing someone home, or sending them back"
        lead="Moving a body across a border is a cargo operation wrapped in paperwork. Embalming, the sealed coffin, the embassy clearance, customs and the airline booking. We do this several times a week and handle every part of it."
        breadcrumbs={crumbs}
        facts={[
          { label: "Countries", value: `${countries.length} routes handled` },
          { label: "Timeline", value: "3 to 9 days by destination" },
          { label: "Indian airports", value: "8 for arrival and departure" },
          { label: "Coordinator", value: "One person until the body is received" },
        ]}
      />

      {/* Insurance callout */}
      <Section tone="paper" className="!pb-0 !pt-14">
        <div className="container-page">
          <div className="flex flex-col gap-5 rounded-xl border border-marigold-200 bg-marigold-50 p-7 lg:flex-row lg:items-center lg:gap-8 lg:p-9">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-marigold-500 text-white">
              <Icon name="shield" className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <div className="flex-1">
              <h2 className="font-display text-[21px] font-semibold text-marigold-900">
                Before anything else, check the insurance
              </h2>
              <p className="mt-2 text-[15.5px] leading-relaxed text-marigold-800">
                Repatriation is expensive, and a great deal of the time somebody
                else is contractually obliged to pay for it. Travel policies,
                employer cover for overseas postings, university policies for
                international students and many credit card travel benefits all
                commonly include repatriation of remains. It takes one phone
                call to find out, and it changes what the family can arrange.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <div className="container-page">
          <SectionHeading
            eyebrow="Detailed route guides"
            title="The four routes we handle most"
            lead="Each guide carries the full document list for that country, the realistic timeline, and the step that actually controls how long it takes."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {repatriationRoutes.map((r) => (
              <Link
                key={r.slug}
                href={`/repatriation/${r.slug}`}
                className="card card-hover group flex flex-col p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-900 text-marigold-300 transition-colors group-hover:bg-marigold-500 group-hover:text-white">
                    <Icon name="plane" className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="rounded-full bg-ink-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-500">
                    {r.direction === "inbound" ? "To India" : "From India"}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[21px] font-semibold leading-snug text-ink-900">
                  {r.from} to {r.to}
                </h3>
                <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-600">
                  {r.intro[0]}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-ink-100 pt-4 text-[13px] text-ink-500">
                  <span className="flex items-center gap-1.5">
                    <Icon name="clock" className="h-3.5 w-3.5 text-marigold-500" strokeWidth={1.8} />
                    {r.timeline}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="document" className="h-3.5 w-3.5 text-marigold-500" strokeWidth={1.8} />
                    {r.documents.length} documents
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="What we do"
              title="Handled end to end, on both sides"
            />
            <div className="mt-8">
              <Checklist
                columns={1}
                items={[
                  "Embalming at a licensed facility, with the certificate",
                  "Zinc lined coffin, sealed and crated to airline specification",
                  "Municipal death certificate through the urgent repatriation route",
                  "Non infectious disease certificate from the treating hospital",
                  "Embassy or consulate no objection certificate",
                  "Passport surrender and cancellation",
                  "Customs export or import clearance",
                  "Airline cargo booking and the air waybill",
                  "Receiving agent at the destination airport",
                  "Onward road transfer to the home town in a freezer ambulance",
                  "Cremation ground booking, pandit ji and the full antim sanskar",
                  "Asthi visarjan at Haridwar, Garhmukteshwar or Prayagraj",
                ]}
              />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Coverage"
              title="Countries and airports"
            />
            <div className="mt-8 card p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-marigold-600">
                Countries we move remains to and from
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {countries.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-ink-200 px-3.5 py-1.5 text-[13.5px] text-ink-700"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-[14px] leading-relaxed text-ink-500">
                If your country is not listed, call us. We will check the
                consular requirement before quoting rather than after.
              </p>
            </div>

            <div className="mt-5 card p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-marigold-600">
                Indian airports we handle
              </p>
              <div className="mt-4 grid grid-cols-2 gap-y-2.5">
                {arrivalAirports.map((a) => (
                  <span key={a} className="flex items-center gap-2.5 text-[14.5px] text-ink-700">
                    <MarigoldMark className="h-3.5 w-3.5 text-marigold-400" />
                    {a}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-[14px] leading-relaxed text-ink-500">
                From any of these we move the coffin onward by road anywhere in
                India in a freezer ambulance.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <div className="container-page">
          <SectionHeading
            eyebrow="Worth knowing"
            title="The alternative most families are never told about"
            lead="Cremating in the country where the death occurred and carrying the ashes to India costs a small fraction of a full repatriation, and involves a fraction of the paperwork."
            align="center"
            light
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3">
            {[
              { t: "Two documents", d: "The death certificate and the crematorium certificate. That is the whole file." },
              { t: "Hand baggage", d: "Ashes travel with a family member in a sealed, scannable urn. No cargo booking." },
              { t: "Rites unchanged", d: "The asthi visarjan on the Ganga is performed exactly as it would be otherwise." },
            ].map((x) => (
              <div key={x.t} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <p className="font-display text-[17px] font-semibold text-marigold-300">
                  {x.t}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-white/60">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-[15px] leading-relaxed text-white/55">
            We say this to every family who calls about repatriation, including
            the ones who will choose the full transfer anyway. It should be a
            decision made with the facts rather than by default.
          </p>
        </div>
      </Section>

      <Section tone="paper">
        <div className="container-page">
          <FaqList faqs={repatFaqs} title="Repatriation questions" />
        </div>
      </Section>

      <CtaBand
        title="Call before you commit to anything abroad."
        text="We will tell you the realistic timeline, the documents that will be needed, whether an insurer should be paying, and whether carrying ashes would serve your family better."
      />
    </>
  );
}
