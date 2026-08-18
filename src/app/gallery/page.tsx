import Link from "next/link";
import { galleryItems } from "@/data/content";
import { Icon, MarigoldMark } from "@/components/Icon";
import {
  CtaBand,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/UI";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

const crumbs = [{ label: "Home", href: "/" }, { label: "Gallery" }];

export const metadata = buildMetadata({
  title: "Gallery | Vehicles, Freezer Boxes & Decoration",
  description:
    "A look at how we work. Freezer box installation, hearse van decoration, prayer meeting stages, samagri kits, freezer ambulances and sealed coffins.",
  path: "/gallery",
  keywords: [
    "funeral service gallery",
    "hearse van decoration photos",
    "freezer box images",
    "prayer meeting decoration",
  ],
});

const toneStyles = {
  ink: "bg-ink-gradient text-marigold-300/70",
  marigold: "bg-gradient-to-br from-marigold-100 via-marigold-50 to-paper-3 text-marigold-500/70",
  sage: "bg-gradient-to-br from-sage-100 via-paper-2 to-paper-3 text-sage-500/70",
  paper: "bg-gradient-to-br from-paper-2 via-paper to-paper-3 text-ink-300",
} as const;

export default function GalleryPage() {
  const categories = Array.from(new Set(galleryItems.map((g) => g.category)));

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        eyebrow="Gallery"
        title="How the work actually looks"
        lead="Vehicles, freezer boxes, flower work and prayer hall setups. Restrained rather than elaborate, because at a funeral that is what looks right."
        breadcrumbs={crumbs}
        facts={[
          { label: "Vehicles", value: "Hearse vans and freezer ambulances" },
          { label: "Decoration", value: "Simple through to full flower work" },
          { label: "Setup time", value: "Ready 60 to 90 minutes early" },
          { label: "Coverage", value: "25 cities across India" },
        ]}
      />

      <Section tone="paper">
        <div className="container-page">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[13px] font-semibold text-ink-500">Categories:</span>
            {categories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-[13px] text-ink-700"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, i) => (
              <figure
                key={item.title}
                className="card card-hover group overflow-hidden"
              >
                <div
                  className={`grain relative flex items-center justify-center overflow-hidden ${
                    toneStyles[item.tone]
                  } ${i % 5 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}
                >
                  <Icon
                    name={item.icon}
                    className="h-16 w-16 transition-transform duration-700 group-hover:scale-110"
                    strokeWidth={1}
                  />
                  <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-marigold-400/40 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-700 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                <figcaption className="p-6">
                  <h2 className="font-display text-[17.5px] font-semibold text-ink-900">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-600">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="On decoration"
              title="Why we suggest less rather than more"
              lead="Funeral decoration is not about volume. Too many flowers reads as a wedding, and families regret it when they see the photographs afterwards."
            />
            <p className="mt-6 text-[16px] leading-relaxed text-ink-600">
              A white backdrop with the photograph at the centre, a marigold
              border and two standing arrangements looks dignified in any hall
              and does not cost much. If you are calling at short notice, take
              the simple option. Nobody in the gathering will think less of it.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/services/funeral-decoration" className="btn btn-ink">
                Decoration services
              </Link>
              <Link href="/services/prayer-hall-booking" className="btn btn-outline">
                Prayer hall booking
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                t: "Simple",
                d: "Marigold garlands along the platform edge and a garland on the body. Ready in twenty minutes.",
                n: "20 min",
              },
              {
                t: "Standard",
                d: "Marigold and rose work across the platform, side panels and the front of the van, with a stage backdrop.",
                n: "2 hours",
              },
              {
                t: "Full",
                d: "Dense flower cover, a complete wall behind the photograph, rose petals along the pathway and a decorated entrance.",
                n: "6 hours",
              },
            ].map((x) => (
              <div key={x.t} className="card flex items-start gap-5 p-6">
                <MarigoldMark className="mt-1 h-6 w-6 shrink-0 text-marigold-400" />
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-[18px] font-semibold text-ink-900">
                      {x.t}
                    </h3>
                    <span className="text-[12.5px] font-semibold text-marigold-600">
                      {x.n} notice
                    </span>
                  </div>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">
                    {x.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        title="Tell us the scale and we will quote three options."
        text="Marigold is the most economical and imported flowers cost several times more. We will show you what each level looks like before you decide."
      />
    </>
  );
}
