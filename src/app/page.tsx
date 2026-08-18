import Link from "next/link";
import Image from "next/image";
import heroBg from "../../public/images/hero-bg-india.png";
import { site, telHref, whatsappHref } from "@/config/site";
import { services } from "@/data/services";
import { cities, citiesByRegion, regionOrder } from "@/data/cities";
import { grounds } from "@/data/grounds";
import { repatriationRoutes } from "@/data/repatriation";
import { sortedPosts } from "@/data/blog";
import { generalFaqs, howItWorks, promises, testimonials } from "@/data/content";
import { Icon, MarigoldMark } from "@/components/Icon";
import { GateCanvas } from "@/components/GateCanvas";
import { HeroCanvas } from "@/components/HeroCanvas";
import { CtaBand, FaqList, Section, SectionHeading } from "@/components/UI";
import { JsonLd } from "@/components/JsonLd";
import { aggregateRatingSchema, faqSchema } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd data={[faqSchema(generalFaqs), aggregateRatingSchema(testimonials.length * 41)]} />

      <Hero />
      <ServicesSection />
      <ProcessSection />
      <PromisesSection />
      <CitiesSection />
      <RepatriationSection />
      <GroundsSection />
      <TestimonialsSection />
      <BlogSection />

      <Section tone="white">
        <div className="container-page">
          <FaqList faqs={generalFaqs} title="Questions families ask us" />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

/* ------------------------------- Hero ------------------------------- */

function Hero() {
  return (
    <section className="bg-ink-gradient grain relative overflow-hidden">
      {/*
       * The photograph is composed as a horizon rather than a wallpaper: it is
       * anchored to the bottom of the section, cropped to the ghats and the
       * near water, and dissolved upward so the headline sits on clean ink.
       * The scrims that follow are directional, which is what keeps the copy
       * readable while the right side of the frame stays lit.
       */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="absolute inset-x-0 bottom-0 h-[64%] [mask-image:linear-gradient(180deg,transparent_0%,#000_38%,#000_100%)] sm:h-[70%] lg:h-[76%]">
          <Image
            src={heroBg}
            alt=""
            fill
            preload
            sizes="100vw"
            placeholder="blur"
            className="ken-burns object-cover object-[68%_26%] opacity-[0.62] lg:opacity-[0.7]"
          />
        </div>

        {/* Copy column scrim. */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/75 to-transparent lg:via-ink-950/55" />
        {/* Sky. */}
        <div className="absolute inset-x-0 top-0 h-[46%] bg-gradient-to-b from-ink-950 via-ink-950/70 to-transparent" />
        {/* Floor, so the stats row and the strip below never fight the water. */}
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-ink-950 via-ink-950/65 to-transparent" />
        {/* Lamplight off the ghats. */}
        <div className="absolute inset-0 bg-[radial-gradient(36rem_20rem_at_74%_60%,rgb(224_166_60/0.22),transparent_70%)] mix-blend-screen" />
        {/* Vignette. */}
        <div className="absolute inset-0 bg-[radial-gradient(115%_85%_at_50%_40%,transparent_36%,rgb(8_11_17/0.92)_100%)]" />
      </div>

      {/* Diyas floating on water. Sits behind everything, see HeroCanvas. */}
      <HeroCanvas density={1} waterline={0.9} intensity={1} />

      {/* Gate motif. Traces in, then light travels through it. See GateCanvas. */}
      <GateCanvas />

      <div className="container-page relative grid items-center gap-14 pb-20 pt-[128px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-28 lg:pt-[168px]">
        <div>
          <p className="eyebrow eyebrow-light reveal">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-marigold-300 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-marigold-400" />
            </span>
            Helpline open, a person is answering
          </p>

          <h1 className="reveal reveal-1 mt-5 font-display text-[38px] font-semibold leading-[1.05] text-white sm:text-[52px] lg:text-[64px]">
            You make one call.
            <br />
            <span className="text-marigold-300">We handle the rest.</span>
          </h1>

          <p className="reveal reveal-2 mt-6 max-w-xl text-[17px] leading-relaxed text-white/70 lg:text-[19px]">
            Cremation booking, freezer box, hearse van, pandit ji, samagri and
            the paperwork. One coordinator stays with your family from the first
            call through to the asthi visarjan.
          </p>

          <div className="reveal reveal-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={telHref} className="btn btn-primary btn-lg pulse-ring">
              <Icon name="phone" className="h-[18px] w-[18px]" strokeWidth={1.8} />
              Call {site.contact.phone}
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost-light btn-lg"
            >
              WhatsApp us
            </a>
          </div>

          <div className="reveal reveal-4 mt-12 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {site.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-[30px] font-semibold leading-none text-marigold-300 lg:text-[34px]">
                  {s.value}
                </p>
                <p className="mt-2 text-[13px] leading-snug text-white/50">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick help card */}
        <div className="reveal reveal-3 relative">
          <div className="rounded-xl border border-white/12 bg-ink-950/85 p-7 shadow-[0_26px_64px_-22px_rgb(0_0_0/0.8)] backdrop-blur-xl lg:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-marigold-500 text-white">
                <Icon name="clock" className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <div>
                <p className="font-display text-[18px] font-semibold text-white">
                  What happens when you call
                </p>
                <p className="text-[13px] text-white/60">Usually under two minutes</p>
              </div>
            </div>

            <ol className="mt-7 space-y-5">
              {[
                {
                  t: "We ask three things",
                  d: "Where you are, what has happened, and whether the death was at home or in hospital.",
                },
                {
                  t: "We dispatch a vehicle",
                  d: "It leaves while we are still on the call. In Delhi NCR that means 30 to 45 minutes.",
                },
                {
                  t: "We give you the price",
                  d: "One figure covering everything you have asked for. It does not change at the ground.",
                },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-marigold-400/40 bg-marigold-400/10 font-display text-[13px] font-semibold text-marigold-300">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-white">{s.t}</p>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-white/70">
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-7 flex items-center gap-3 rounded-lg border border-white/10 bg-ink-950/40 p-4">
              <Icon name="shield" className="h-5 w-5 shrink-0 text-marigold-400" strokeWidth={1.6} />
              <p className="text-[13px] leading-relaxed text-white/70">
                If a freezer box will do, we will not sell you embalming. Ask us
                what you do not need.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Urgent strip */}
      <div className="relative border-t border-white/10 bg-ink-950/50">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-4 text-[13.5px] text-white/55">
          {[
            "Vehicle dispatched in 30 to 45 minutes",
            "Freezer box home delivery within the hour",
            "All communities, all regional rites",
            "One price, said on the phone",
          ].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 text-marigold-400" strokeWidth={1.7} />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Services ----------------------------- */

function ServicesSection() {
  const featured = services.filter((s) => s.featured);
  const rest = services.filter((s) => !s.featured);

  return (
    <Section tone="paper" id="services">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we arrange"
            title="Everything a family needs, from one number"
            lead="Sixteen services covering the cremation itself, the transport, the preservation, the rituals that follow and the paperwork nobody warns you about."
          />
          <Link href="/services" className="btn btn-outline shrink-0">
            All services
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-4 w-4">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card card-hover group relative overflow-hidden p-7"
            >
              <span
                aria-hidden="true"
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-marigold-50 transition-transform duration-500 group-hover:scale-150"
              />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-ink-900 text-marigold-300 transition-colors group-hover:bg-marigold-500 group-hover:text-white">
                <Icon name={s.icon} className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h3 className="relative mt-5 font-display text-[20px] font-semibold text-ink-900">
                {s.navTitle}
              </h3>
              <p className="relative mt-2.5 text-[15px] leading-relaxed text-ink-600">
                {s.summary}
              </p>
              <span className="relative mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-marigold-700">
                Read more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-5 grid gap-x-5 gap-y-px overflow-hidden rounded-lg border border-ink-100 bg-ink-100 sm:grid-cols-2 sm:gap-x-px lg:grid-cols-4">
          {rest.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex items-center gap-3.5 bg-white px-5 py-4 transition-colors hover:bg-marigold-50"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-ink-50 text-ink-600 transition-colors group-hover:bg-marigold-100 group-hover:text-marigold-700">
                <Icon name={s.icon} className="h-[18px] w-[18px]" />
              </span>
              <span className="text-[14.5px] font-medium leading-snug text-ink-800">
                {s.navTitle}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------ Process ----------------------------- */

function ProcessSection() {
  return (
    <Section tone="ink">
      <div className="container-page relative">
        <SectionHeading
          eyebrow="How it works"
          title="Four steps, and you only take part in the first"
          lead="Families are not in a state to project manage a funeral. That is the job we take off you."
          align="center"
          light
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, i) => (
            <div key={step.title} className="relative">
              {i < howItWorks.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-[52px] top-6 hidden h-px w-[calc(100%-40px)] bg-gradient-to-r from-marigold-400/40 to-transparent lg:block"
                />
              ) : null}
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-marigold-400/30 bg-ink-900 text-marigold-300">
                <Icon name={step.icon} className="h-[22px] w-[22px]" strokeWidth={1.5} />
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-marigold-500 font-display text-[11px] font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-[19px] font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/60">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------- Promises ----------------------------- */

function PromisesSection() {
  return (
    <Section tone="white">
      <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Why families call back"
            title="The things that actually matter at 3 in the morning"
            lead="This industry has a reputation, and it is largely deserved. Prices that change at the gate, calls that go unanswered, a pandit who does not know your community's rites. We built the business around not doing those things."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about" className="btn btn-ink">
              About us
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Talk to us
            </Link>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {promises.map((p) => (
            <div key={p.title} className="card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-marigold-100 text-marigold-700">
                <Icon name={p.icon} className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h3 className="mt-4 font-display text-[17.5px] font-semibold text-ink-900">
                {p.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------ Cities ------------------------------ */

function CitiesSection() {
  return (
    <Section tone="tint">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Where we work"
            title={`${cities.length} cities, and the same people answering`}
            lead="Delhi NCR is served from our own offices and vehicles. The other cities run through partner depots we have used for years, coordinated from the same helpline."
          />
          <Link href="/locations" className="btn btn-outline shrink-0">
            All cities
          </Link>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {regionOrder.map((region) => {
            const list = citiesByRegion[region];
            if (!list?.length) return null;
            return (
              <div key={region}>
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-marigold-600">
                  <MarigoldMark className="h-3.5 w-3.5" />
                  {region}
                </p>
                <ul className="mt-3.5 space-y-2">
                  {list.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/locations/${c.slug}`}
                        className="group flex items-center justify-between text-[15px] text-ink-700 transition-colors hover:text-marigold-700"
                      >
                        {c.name}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* --------------------------- Repatriation --------------------------- */

function RepatriationSection() {
  return (
    <Section tone="white">
      <div className="container-page">
        <div className="overflow-hidden rounded-xl border border-ink-100">
          <div className="grid lg:grid-cols-[1fr_1fr]">
            <div className="bg-ink-gradient grain relative p-8 lg:p-12">
              <p className="eyebrow eyebrow-light">
                <Icon name="plane" className="h-4 w-4" strokeWidth={1.8} />
                International repatriation
              </p>
              <h2 className="mt-4 font-display text-[28px] font-semibold leading-tight text-white sm:text-[34px]">
                Bringing someone home, or sending them back
              </h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-white/65">
                Embalming, the zinc lined coffin, the embassy no objection
                certificate, customs and the cargo booking. We handle all of it
                and receive at eight Indian airports.
              </p>
              <p className="mt-5 rounded-lg border border-white/10 bg-white/5 p-4 text-[14px] leading-relaxed text-white/60">
                Before anything else, check the insurance. Travel policies,
                employer cover and student policies very often pay for
                repatriation, and most families never think to ask.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/repatriation" className="btn btn-primary">
                  How it works
                </Link>
                <a href={telHref} className="btn btn-ghost-light">
                  Speak to a coordinator
                </a>
              </div>
            </div>

            <div className="divide-y divide-ink-100 bg-white">
              {repatriationRoutes.map((r) => (
                <Link
                  key={r.slug}
                  href={`/repatriation/${r.slug}`}
                  className="group flex items-center justify-between gap-4 p-6 transition-colors hover:bg-marigold-50 lg:p-7"
                >
                  <div>
                    <p className="font-display text-[18px] font-semibold text-ink-900">
                      {r.from} to {r.to}
                    </p>
                    <p className="mt-1.5 text-[14px] text-ink-500">
                      {r.timeline}, all documentation handled
                    </p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-200 text-ink-400 transition-all group-hover:border-marigold-400 group-hover:bg-marigold-500 group-hover:text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-3.5 w-3.5">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------ Grounds ----------------------------- */

function GroundsSection() {
  return (
    <Section tone="paper">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Ground guides"
            title="Which crematorium, and what to expect there"
            lead="Timings, whether they take wood or only CNG, what the counter will ask for, and how bad the parking is. Written from working these grounds daily."
          />
          <Link href="/cremation-grounds" className="btn btn-outline shrink-0">
            All grounds
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {grounds.slice(0, 6).map((g) => (
            <Link
              key={g.slug}
              href={`/cremation-grounds/${g.slug}`}
              className="card card-hover group p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-[18px] font-semibold leading-snug text-ink-900">
                    {g.name}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-[13px] text-ink-500">
                    <Icon name="map" className="h-3.5 w-3.5" strokeWidth={1.7} />
                    {g.city}
                  </p>
                </div>
                <Icon
                  name="flame"
                  className="h-5 w-5 shrink-0 text-ink-200 transition-colors group-hover:text-marigold-400"
                />
              </div>
              <p className="mt-4 border-t border-ink-100 pt-4 text-[14px] leading-relaxed text-ink-600">
                {g.type}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------- Testimonials -------------------------- */

function TestimonialsSection() {
  return (
    <Section tone="tint">
      <div className="container-page">
        <SectionHeading
          eyebrow="From families we have helped"
          title="What people tell us afterwards"
          align="center"
        />

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {testimonials.slice(0, 9).map((t) => (
            <figure key={t.name} className="card break-inside-avoid p-6">
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
      </div>
    </Section>
  );
}

/* ------------------------------- Blog ------------------------------- */

function BlogSection() {
  const posts = sortedPosts.slice(0, 3);
  return (
    <Section tone="white">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Guides"
            title="The things families wish somebody had explained"
            lead="Written plainly, with the document names and the actual timelines. No sales pitch."
          />
          <Link href="/blog" className="btn btn-outline shrink-0">
            All guides
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-ink-950 shadow-sm">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.imageAlt || p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="bg-ink-gradient grain relative flex h-full w-full items-center justify-center">
                    <MarigoldMark className="h-20 w-20 text-marigold-300/25 transition-transform duration-700 group-hover:scale-110" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-50" />
                <span className="absolute left-4 top-4 z-10 rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white shadow-sm backdrop-blur-md">
                  {p.category}
                </span>
              </div>
              <p className="mt-4 flex items-center gap-2 text-[12.5px] text-ink-500">
                <time dateTime={p.date}>
                  {new Date(p.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span className="h-1 w-1 rounded-full bg-ink-300" />
                {p.readingTime}
              </p>
              <h3 className="mt-2 font-display text-[19px] font-semibold leading-snug text-ink-900 transition-colors group-hover:text-marigold-700">
                {p.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">
                {p.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
