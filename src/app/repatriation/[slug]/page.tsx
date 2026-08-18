import { notFound } from "next/navigation";
import Link from "next/link";
import { repatriationRoutes, getRoute } from "@/data/repatriation";
import { Icon } from "@/components/Icon";
import {
  ContentBlocks,
  CtaBand,
  FaqList,
  PageHero,
  Section,
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
  return repatriationRoutes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) return {};
  return buildMetadata({
    title: route.metaTitle,
    description: route.metaDescription,
    path: `/repatriation/${route.slug}`,
    keywords: [
      `repatriation ${route.from.toLowerCase()} to ${route.to.toLowerCase()}`,
      "dead body repatriation",
      "mortal remains transfer",
      "embalming certificate",
      "coffin sealing certificate",
    ],
  });
}

export default async function RoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Repatriation", href: "/repatriation" },
    { label: route.navTitle },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(route.faqs),
          serviceSchema({
            name: route.title,
            description: route.metaDescription,
            path: `/repatriation/${route.slug}`,
            areaName: `${route.from} and ${route.to}`,
          }),
        ]}
      />

      <PageHero
        eyebrow="International repatriation"
        icon="plane"
        title={route.title}
        lead={route.intro[0]}
        breadcrumbs={crumbs}
        facts={[
          { label: "Typical timeline", value: route.timeline },
          { label: "Documents", value: `${route.documents.length} required` },
          { label: "Departure airports", value: route.airports.slice(0, 3).join(", ") },
          { label: "Coordinator", value: "One person, start to finish" },
        ]}
      />

      <Section tone="paper">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          <article>
            <div className="prose-page text-[17.5px]">
              {route.intro.slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Steps */}
            <div className="mt-12">
              <h2 className="font-display text-[24px] font-semibold text-ink-900 sm:text-[27px]">
                How the transfer runs
              </h2>
              <div className="rule-marigold mt-3.5" />
              <ol className="mt-7 space-y-0">
                {route.steps.map((step, i) => (
                  <li key={step.title} className="relative flex gap-5 pb-7 last:pb-0">
                    {i < route.steps.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="absolute left-[17px] top-9 bottom-1 w-px bg-gradient-to-b from-marigold-300 to-ink-100"
                      />
                    ) : null}
                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-marigold-200 bg-marigold-50 font-display text-[15px] font-semibold text-marigold-700">
                      {i + 1}
                    </span>
                    <div className="pt-1">
                      <p className="font-display text-[17px] font-semibold text-ink-900">
                        {step.title}
                      </p>
                      <p className="mt-1.5 text-[15.5px] leading-relaxed text-ink-600">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Documents */}
            <div className="mt-14">
              <h2 className="font-display text-[24px] font-semibold text-ink-900 sm:text-[27px]">
                Documents required
              </h2>
              <div className="rule-marigold mt-3.5" />
              <p className="mt-5 text-[16px] leading-relaxed text-ink-600">
                Each of these depends on the one before it, which is why the
                process cannot be compressed by working on several at once. We
                prepare the whole file and follow it through.
              </p>
              <div className="mt-6 divide-y divide-ink-100 overflow-hidden rounded-lg border border-ink-100 bg-white">
                {route.documents.map((d, i) => (
                  <div key={d.name} className="flex gap-4 p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-ink-50 font-display text-[13px] font-semibold text-ink-500">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-display text-[16px] font-semibold text-ink-900">
                        {d.name}
                      </p>
                      <p className="mt-1 text-[14.5px] leading-relaxed text-ink-600">
                        {d.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14">
              <ContentBlocks sections={route.sections} />
            </div>
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <SidebarCallCard heading="Speak to a repatriation coordinator" />

            <div className="card mt-5 p-6">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-marigold-600">
                <Icon name="plane" className="h-3.5 w-3.5" strokeWidth={1.8} />
                Airports on this route
              </p>
              <ul className="mt-3 space-y-2">
                {route.airports.map((a) => (
                  <li key={a} className="flex items-center gap-2.5 text-[14px] text-ink-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-marigold-400" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-marigold-200 bg-marigold-50 p-6 mt-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-marigold-700">
                Ask this first
              </p>
              <p className="mt-2.5 text-[14px] leading-relaxed text-marigold-900">
                Check whether an insurance policy covers repatriation before
                assuming the family pays. Travel policies, employer cover for
                overseas postings and student policies very often include it.
              </p>
            </div>

            <div className="card mt-5 p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-marigold-600">
                Other routes
              </p>
              <ul className="mt-3 space-y-0.5">
                {repatriationRoutes
                  .filter((r) => r.slug !== route.slug)
                  .map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/repatriation/${r.slug}`}
                        className="block rounded-md px-2 py-1.5 text-[14px] text-ink-700 transition-colors hover:bg-marigold-50 hover:text-marigold-800"
                      >
                        {r.from} to {r.to}
                      </Link>
                    </li>
                  ))}
              </ul>
              <Link
                href="/repatriation"
                className="mt-3 inline-block text-[13.5px] font-semibold text-marigold-700 hover:underline"
              >
                All repatriation services
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-page">
          <FaqList
            faqs={route.faqs}
            title={`${route.from} to ${route.to}: common questions`}
          />
        </div>
      </Section>

      <CtaBand
        title={`Moving someone from ${route.from} to ${route.to}?`}
        text="Call us before you agree anything with a funeral home. We will tell you the realistic timeline, the documents that will be needed, and whether an insurer should be paying for it."
        note={`Typical timeline: ${route.timeline}. Helpline answered 24 hours.`}
      />
    </>
  );
}
