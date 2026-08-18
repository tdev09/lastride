import { site } from "@/config/site";
import { ContentBlocks, PageHero, Section } from "@/components/UI";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import type { ContentSection } from "@/data/types";

const crumbs = [{ label: "Home", href: "/" }, { label: "Privacy Policy" }];

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Last Ride Funeral Services collects, uses and protects the personal information families share with us, and the choices you have over it.",
  path: "/privacy-policy",
});

const sections: ContentSection[] = [
  {
    heading: "What we collect, and when",
    body: [
      "We collect information only when you give it to us. There is no tracking pixel harvesting your behaviour across the internet and no data broker relationship. The information we hold falls into two groups.",
    ],
    bullets: [
      "Enquiry details you send us: your name, phone number, city, the service you need and anything you write in the message box",
      "Service details, where you go on to book: the name of the person who has died, the documents needed for the crematorium or an embassy, the addresses involved and the payment record",
      "Basic website analytics: pages viewed and how you arrived, in aggregate, with no attempt to identify individuals",
    ],
  },
  {
    heading: "The contact form does not store anything",
    body: [
      "The enquiry form on our contact page composes a message and hands it to WhatsApp or your email application. It does not submit to a database on this website. You see exactly what is being sent before it goes, and you can edit or abandon it.",
      "Once you send that message, it reaches us the same way any WhatsApp message or email does, and it is then held as described below.",
    ],
  },
  {
    heading: "How we use it",
    bullets: [
      "To respond to your enquiry and arrange the services you have asked for",
      "To complete the paperwork a crematorium, municipality, airline or embassy requires",
      "To keep a record of the arrangements made, which families often need months later for insurance or property matters",
      "To meet our legal and accounting obligations",
    ],
    body: [
      "We do not sell your information, rent it, or share it with advertisers. We do not add you to a marketing list. Given what brings families to us, sending promotional messages afterwards would be indefensible, and we do not do it.",
    ],
  },
  {
    heading: "Who we share it with",
    body: [
      "Arranging a funeral requires passing certain details to third parties, and there is no way around that. We share only what a particular party actually needs.",
    ],
    bullets: [
      "Crematoriums and burial grounds, for the registration and the slot",
      "Municipal authorities, for the death certificate application",
      "Airlines, customs and embassies, for a repatriation or air cargo transfer",
      "Embalmers, hospitals and mortuaries, where preservation is involved",
      "Partner operators in cities outside Delhi NCR, who carry out the local work",
      "Our accountants and, where legally required, law enforcement or a court",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "Service records are kept for eight years, which matches the retention period for our accounting obligations and is long enough to cover the insurance and probate questions families come back with.",
      "Enquiries that do not lead to a booking are kept for twelve months and then deleted. Website analytics are aggregated and hold nothing that identifies you.",
    ],
  },
  {
    heading: "Your choices",
    bullets: [
      "Ask for a copy of what we hold about you",
      "Ask us to correct anything that is wrong",
      "Ask us to delete your records, subject to what we are legally required to retain",
      "Ask us to stop contacting you, at any point and for any reason",
    ],
    body: [
      `Write to ${site.contact.email} or call ${site.contact.phone}. We respond within thirty days, usually much sooner.`,
    ],
  },
  {
    heading: "Security",
    body: [
      "This website is served over HTTPS. Service records are held in access controlled systems and only the coordinators working on a case can see the file for that case.",
      "No system is perfectly secure and we will not claim otherwise. What we can say is that we hold as little as possible, for as short a time as we are able.",
    ],
  },
  {
    heading: "Children",
    body: [
      "This website is not directed at children and we do not knowingly collect information from anyone under eighteen. Where a case involves a child who has died, the information we hold relates to the family arranging the funeral.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "If we change how we handle information, we will update this page and change the date below. Material changes will be reflected here before they take effect.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="Families give us information at the worst moment of their lives. This page explains what we do with it, in language you should not need a lawyer to read."
        breadcrumbs={crumbs}
        compact
      />

      <Section tone="paper">
        <div className="container-page">
          <div className="container-prose">
            <p className="text-[14px] text-ink-500">
              Last updated 1 July 2026. Applies to {site.url.replace("https://", "")}{" "}
              and to {site.legalName}.
            </p>
            <div className="mt-10">
              <ContentBlocks sections={sections} />
            </div>

            <div className="mt-14 rounded-lg border border-marigold-200 bg-marigold-50 p-7">
              <h2 className="font-display text-[19px] font-semibold text-marigold-900">
                Questions about your information
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-marigold-800">
                Email{" "}
                <a href={`mailto:${site.contact.email}`} className="font-semibold underline">
                  {site.contact.email}
                </a>{" "}
                or call{" "}
                <a href={`tel:+${site.contact.phoneRaw}`} className="font-semibold underline">
                  {site.contact.phone}
                </a>
                . Written enquiries can be sent to our office in{" "}
                {site.offices[0].area}.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
