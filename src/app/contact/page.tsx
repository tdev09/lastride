import Image from "next/image";
import { mailHref, site, telHref, whatsappHref } from "@/config/site";
import { generalFaqs } from "@/data/content";
import { Icon, MarigoldMark } from "@/components/Icon";
import { ContactForm } from "@/components/ContactForm";
import {
  CtaBand,
  FaqList,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/UI";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  organizationSchema,
} from "@/lib/seo";

const crumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];

export const metadata = buildMetadata({
  title: "Contact Last Ride | 24x7 Funeral Helpline, 25 Cities",
  description:
    "Call 88103 36482 at any hour for funeral, cremation, freezer box and transport help. Serving all of Delhi/NCR. A person answers.",
  path: "/contact",
  keywords: [
    "funeral helpline number",
    "24x7 funeral service contact",
    "cremation service phone number delhi",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[breadcrumbSchema(crumbs), faqSchema(generalFaqs), organizationSchema()]}
      />

      <PageHero
        eyebrow="Contact"
        icon="phone"
        title="One number, answered at every hour"
        lead="Most of our calls come between 10 at night and 6 in the morning. A person picks up, asks three questions, and a vehicle is moving before the call ends."
        breadcrumbs={crumbs}
        facts={[
          { label: "Helpline", value: site.contact.phone },
          { label: "Hours", value: site.contact.hours },
          { label: "Email", value: site.contact.email },
          { label: "Response", value: "30 to 45 minutes in Delhi NCR" },
        ]}
      />

      {/* Direct contact cards */}
      <Section tone="paper" className="!pb-10">
        <div className="container-page grid gap-5 md:grid-cols-3">
          <a
            href={telHref}
            className="card card-hover group relative overflow-hidden p-8"
          >
            <span
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-marigold-50 transition-transform duration-500 group-hover:scale-150"
            />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-marigold-500 text-white">
              <Icon name="phone" className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <p className="relative mt-5 text-[11px] font-bold uppercase tracking-[0.12em] text-marigold-600">
              Call, fastest
            </p>
            <p className="relative mt-2 font-display text-[24px] font-semibold text-ink-900">
              {site.contact.phone}
            </p>
            {site.contact.altPhone ? (
              <p className="relative mt-1 text-[15px] text-ink-600">
                {site.contact.altPhone}
              </p>
            ) : null}
            <p className="relative mt-3 text-[14px] leading-relaxed text-ink-500">
              {site.contact.hours}. No call menu, no callback queue.
            </p>
          </a>

          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover group relative overflow-hidden p-8"
          >
            <span
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-sage-100 transition-transform duration-500 group-hover:scale-150"
            />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-sage-500 text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.5 14c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6a11 11 0 0 1-4.2-3.7c-.3-.4-1-1.4-1-2.7s.7-1.9 1-2.2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2 1.3 2.3 1.4.3.2.5.1.6 0l.9-1c.2-.2.3-.2.6-.1l2 .9c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z" />
              </svg>
            </span>
            <p className="relative mt-5 text-[11px] font-bold uppercase tracking-[0.12em] text-sage-700">
              WhatsApp
            </p>
            <p className="relative mt-2 font-display text-[24px] font-semibold text-ink-900">
              Message us
            </p>
            <p className="relative mt-3 text-[14px] leading-relaxed text-ink-500">
              Useful if you are abroad, or if you want to send photographs and
              documents rather than describe them.
            </p>
          </a>

          <a
            href={mailHref}
            className="card card-hover group relative overflow-hidden p-8"
          >
            <span
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-ink-50 transition-transform duration-500 group-hover:scale-150"
            />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-ink-900 text-marigold-300">
              <Icon name="document" className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <p className="relative mt-5 text-[11px] font-bold uppercase tracking-[0.12em] text-ink-500">
              Email
            </p>
            <p className="relative mt-2 font-display text-[20px] font-semibold leading-snug text-ink-900 break-all">
              {site.contact.email}
            </p>
            <p className="relative mt-3 text-[14px] leading-relaxed text-ink-500">
              Best for pre planning enquiries, repatriation files and anything
              that is not urgent.
            </p>
          </a>
        </div>
      </Section>

      {/* Form + offices */}
      <Section tone="paper" className="!pt-0">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Send us the details"
              title="Tell us what you need arranged"
              lead="Fill this in and it opens in WhatsApp or your mail app so you can check it before sending. If the situation is happening right now, please call instead."
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Where we are" title="Where we work" />
            <div className="mt-8 space-y-5">
              {site.offices.map((o) => (
                <div key={o.city} className="card p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-[20px] font-semibold text-ink-900">
                        {o.city}
                      </h3>
                      <p className="mt-0.5 text-[12px] font-semibold uppercase tracking-wider text-marigold-600">
                        {o.label}
                      </p>
                    </div>
                    <MarigoldMark className="h-5 w-5 shrink-0 text-marigold-300" />
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
                    {o.area}, India
                  </p>
                </div>
              ))}

              <div className="bg-ink-gradient grain relative overflow-hidden rounded-lg p-7 text-white shadow-sm">
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
                  <Icon name="clock" className="h-6 w-6 text-marigold-400" strokeWidth={1.6} />
                  <p className="mt-4 font-display text-[19px] font-semibold">
                    Outside these three cities?
                  </p>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/75">
                    We work in 25 cities through partner depots, all coordinated
                    from this same helpline. You call one number regardless of
                    where in India you are.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-page">
          <FaqList faqs={generalFaqs} title="Before you call" />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
