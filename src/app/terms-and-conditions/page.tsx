import { site } from "@/config/site";
import { ContentBlocks, PageHero, Section } from "@/components/UI";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import type { ContentSection } from "@/data/types";

const crumbs = [{ label: "Home", href: "/" }, { label: "Terms & Conditions" }];

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "The terms on which Last Ride provides cremation, transport, preservation, ritual and repatriation services, including pricing and cancellation.",
  path: "/terms-and-conditions",
});

const sections: ContentSection[] = [
  {
    heading: "Who these terms are between",
    body: [
      `These terms apply between ${site.legalName} and the person who engages us to arrange services, referred to below as the client. The client is normally the next of kin or someone acting with their authority.`,
      "By asking us to proceed with any arrangement, whether on the phone, on WhatsApp or in writing, the client accepts these terms.",
    ],
  },
  {
    heading: "What we quote, and what the quote covers",
    body: [
      "We give a price before any service is arranged. That figure covers the items we have specifically listed and nothing beyond them.",
      "Where an item is genuinely variable, such as wood charged by weight, catering charged by headcount, or air freight charged on the chargeable weight of a sealed coffin, we tell you the rate rather than a total, and the final amount follows from the actual quantity.",
    ],
    bullets: [
      "Quoted figures include our charges, the third party costs we have listed, and applicable taxes",
      "We do not add charges at the crematorium gate or at the destination of a transfer",
      "Statutory fees charged directly by a municipality, crematorium, embassy or airline are passed through at cost",
      "A quote holds for the arrangement it was given for. A change in scope means a revised figure, told to you before we act on it",
    ],
  },
  {
    heading: "Payment",
    bullets: [
      "For urgent services, payment is normally due on completion of the arrangement",
      "For repatriation, air cargo and pre booked events, an advance is required to cover the third party costs we pay on your behalf",
      "Receipts are issued for every payment, and an itemised invoice is provided where you need one for an insurance claim",
      "Third party statutory fees are receipted separately by the authority that charged them",
    ],
  },
  {
    heading: "Cancellation and changes",
    body: [
      "Circumstances change and families change their minds, which is entirely understandable. What we can refund depends on what has already been committed on your behalf.",
    ],
    bullets: [
      "Cancel before a vehicle is dispatched or a booking is made, and there is no charge",
      "Once a vehicle has been dispatched, a call out charge applies",
      "Third party costs already paid, such as a crematorium fee, a hall deposit, air freight or an embassy fee, are refundable only to the extent that party refunds them to us",
      "Freezer box rental is charged per day for the days the unit was with you",
      "Pre planning deposits are fully refundable at any time before the plan is used",
    ],
  },
  {
    heading: "Timings and what we can promise",
    body: [
      "We give realistic arrival and completion times rather than optimistic ones, and we meet them in the great majority of cases. We cannot control everything that affects them.",
      "Traffic, weather, a crematorium being full, a hospital delaying release of a body, a coroner or medical examiner holding a case, an embassy taking longer than usual, an airline cancelling a cargo booking, or a public disturbance can all move a timeline. Where that happens we tell you immediately and we tell you the truth about it.",
    ],
  },
  {
    heading: "Documents and accuracy",
    body: [
      "The client is responsible for providing accurate information and genuine documents. This matters more than it sounds, particularly for anything involving an airline or an embassy.",
      "A name spelled differently on a passport and a death certificate has held bodies at cargo terminals for days. We check what we are given against the source documents, but we cannot verify the authenticity of a document a client provides, and we are not liable for delays or refusals caused by inaccurate or invalid papers.",
    ],
  },
  {
    heading: "Religious and ritual arrangements",
    body: [
      "We arrange clergy and ritual materials according to the community and region the client tells us. Where a client does not specify, we ask, and we act on the answer given.",
      "Priests, pandits, granthis, maulvis and other clergy are independent practitioners. We are responsible for arranging their attendance and for the dakshina being fixed in advance. The conduct of the rites themselves is a matter between the family and that practitioner.",
    ],
  },
  {
    heading: "Third party facilities",
    body: [
      "Crematoriums, burial grounds, prayer halls, hospitals, mortuaries, airlines and embassies are operated by others. We book and coordinate with them, and we know how they work, but we do not control their rules, their timings, their charges or their decisions.",
      "Where a facility refuses a booking, changes its charges or alters its timings, we will find you an alternative and tell you what it costs.",
    ],
  },
  {
    heading: "Liability",
    body: [
      "We carry out our work with the care that the situation deserves. Where we are at fault, our liability is limited to the amount paid to us for the service in question.",
      "We are not liable for delays or failures caused by matters outside our reasonable control, including the third party actions described above, natural events, civil disturbance or a change in law or regulation.",
      "Nothing in these terms limits liability for death, personal injury or fraud where the law does not permit it to be limited.",
    ],
  },
  {
    heading: "Complaints",
    body: [
      `If something has gone wrong, tell us. Call ${site.contact.phone} or write to ${site.contact.email} and ask for the matter to be escalated. We respond within seven days and we would rather hear it from you than read it somewhere else.`,
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of India. Disputes are subject to the jurisdiction of the courts at New Delhi.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        lead="The terms we work on, written to be read rather than to be hidden behind. If anything here is unclear, ask us before you engage us."
        breadcrumbs={crumbs}
        compact
      />

      <Section tone="paper">
        <div className="container-page">
          <div className="container-prose">
            <p className="text-[14px] text-ink-500">
              Last updated 1 July 2026. Applies to all services provided by{" "}
              {site.legalName}.
            </p>
            <div className="mt-10">
              <ContentBlocks sections={sections} />
            </div>

            <div className="mt-14 rounded-lg border border-marigold-200 bg-marigold-50 p-7">
              <h2 className="font-display text-[19px] font-semibold text-marigold-900">
                Questions about these terms
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-marigold-800">
                Call{" "}
                <a href={`tel:+${site.contact.phoneRaw}`} className="font-semibold underline">
                  {site.contact.phone}
                </a>{" "}
                or email{" "}
                <a href={`mailto:${site.contact.email}`} className="font-semibold underline">
                  {site.contact.email}
                </a>
                . We would rather answer a question now than have a
                misunderstanding later.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
