import Link from "next/link";
import { site, telHref, whatsappHref } from "@/config/site";
import type { ContentSection, FAQ, IconKey } from "@/data/types";
import { Icon, MarigoldMark } from "./Icon";
import { HeroCanvas } from "./HeroCanvas";

/* ------------------------------ Hero ------------------------------ */

export function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs,
  facts,
  icon,
  compact = false,
  ambient = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  breadcrumbs?: { label: string; href?: string }[];
  facts?: { label: string; value: string }[];
  icon?: IconKey;
  compact?: boolean;
  /**
   * Adds the floating diyas behind this hero. Off by default because inner
   * pages pack the frame tighter than the home page and the lamps compete
   * with the quick facts strip. Worth turning on for ritual related pages.
   */
  ambient?: boolean;
}) {
  return (
    <section className="bg-ink-gradient grain relative overflow-hidden">
      {ambient ? (
        <HeroCanvas density={0.6} waterline={0.94} intensity={0.65} />
      ) : null}
      <DecorArch />
      <div
        className={`container-page relative pt-[112px] lg:pt-[136px] ${
          compact ? "pb-12 lg:pb-14" : "pb-16 lg:pb-20"
        }`}
      >
        {breadcrumbs?.length ? (
          <nav aria-label="Breadcrumb" className="reveal mb-6">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-white/50">
              {breadcrumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {i > 0 ? <span className="text-white/25">/</span> : null}
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-marigold-300">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white/75">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="eyebrow eyebrow-light reveal reveal-1">
              {icon ? (
                <Icon name={icon} className="h-4 w-4" strokeWidth={1.8} />
              ) : (
                <span className="h-px w-6 bg-marigold-400/60" />
              )}
              {eyebrow}
            </p>
          ) : null}

          <h1
            className={`reveal reveal-2 mt-4 font-display font-semibold leading-[1.08] text-white ${
              compact
                ? "text-[32px] sm:text-[40px] lg:text-[46px]"
                : "text-[36px] sm:text-[46px] lg:text-[58px]"
            }`}
          >
            {title}
          </h1>

          {lead ? (
            <p className="reveal reveal-3 mt-5 max-w-2xl text-[16.5px] leading-relaxed text-white/70 lg:text-[18px]">
              {lead}
            </p>
          ) : null}

          <div className="reveal reveal-4 mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={telHref} className="btn btn-primary btn-lg">
              <Icon name="phone" className="h-4 w-4" strokeWidth={1.8} />
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
        </div>

        {facts?.length ? (
          <dl className="reveal reveal-5 mt-12 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="bg-ink-900/60 px-5 py-4 backdrop-blur-sm">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-marigold-300/80">
                  {f.label}
                </dt>
                <dd className="mt-1.5 text-[15px] font-medium leading-snug text-white">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}

function DecorArch() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-24 -top-16 hidden h-[420px] w-[420px] opacity-[0.07] lg:block"
    >
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <g fill="none" stroke="#fff" strokeWidth="1">
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M${30 + i * 8} 190V${100 + i * 4} a${70 - i * 8} ${70 - i * 8} 0 0 1 ${140 - i * 16} 0V190`}
            />
          ))}
          <circle cx="100" cy="72" r="26" />
          <circle cx="100" cy="72" r="14" />
        </g>
      </svg>
    </div>
  );
}

/* ---------------------------- Sections ---------------------------- */

export function Section({
  children,
  className = "",
  tone = "paper",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "white" | "tint" | "ink";
  id?: string;
}) {
  const tones = {
    paper: "bg-paper",
    white: "bg-white",
    tint: "bg-paper-2",
    ink: "bg-ink-gradient grain relative overflow-hidden text-white/75",
  };
  return (
    <section id={id} className={`${tones[tone]} py-16 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className={`eyebrow ${light ? "eyebrow-light" : ""} ${align === "center" ? "justify-center" : ""}`}>
          <span className={`h-px w-6 ${light ? "bg-marigold-400/60" : "bg-marigold-400"}`} />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3.5 font-display text-[28px] font-semibold leading-[1.15] sm:text-[34px] lg:text-[40px] ${
          light ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-4 text-[16px] leading-relaxed lg:text-[17px] ${
            light ? "text-white/65" : "text-ink-600"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------- Content renderer ------------------------ */

export function ContentBlocks({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="space-y-12">
      {sections.map((s) => (
        <div key={s.heading}>
          <h2 className="font-display text-[23px] font-semibold leading-snug text-ink-900 sm:text-[26px]">
            {s.heading}
          </h2>
          <div className="rule-marigold mt-3.5" />

          {s.body?.length ? (
            <div className="prose-page mt-5">
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ) : null}

          {s.bullets?.length ? (
            <ul className="mt-5 space-y-2.5">
              {s.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-[16px] leading-relaxed text-ink-700">
                  <Icon
                    name="check"
                    className="mt-1 h-[17px] w-[17px] shrink-0 text-marigold-500"
                    strokeWidth={1.6}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {s.steps?.length ? (
            <ol className="mt-6 space-y-0">
              {s.steps.map((step, i) => (
                <li key={i} className="relative flex gap-5 pb-7 last:pb-0">
                  {i < s.steps!.length - 1 ? (
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
          ) : null}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------ FAQs ------------------------------ */

export function FaqList({
  faqs,
  title = "Questions families ask",
  lead,
}: {
  faqs: FAQ[];
  title?: string;
  lead?: string;
}) {
  return (
    <div>
      <SectionHeading eyebrow="Straight answers" title={title} lead={lead} />
      <div className="mt-9 divide-y divide-ink-100 border-y border-ink-100">
        {faqs.map((f) => (
          <details key={f.q} className="group">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
              <span className="font-display text-[17px] font-semibold leading-snug text-ink-900 transition-colors group-hover:text-marigold-700 sm:text-[18px]">
                {f.q}
              </span>
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition-all group-open:rotate-45 group-open:border-marigold-400 group-open:bg-marigold-50 group-open:text-marigold-700">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-3.5 w-3.5"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="max-w-3xl pb-6 pr-12 text-[16px] leading-relaxed text-ink-600">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ CTAs ------------------------------ */

export function CtaBand({
  title = "We are on the line right now.",
  text = "Tell us where you are and what has happened. We will tell you what needs to happen next and what it costs, on that call.",
  note,
}: {
  title?: string;
  text?: string;
  note?: string;
}) {
  return (
    <section className="bg-paper py-12 lg:py-16">
      <div className="container-page">
        <div className="bg-ink-gradient grain relative overflow-hidden rounded-xl px-7 py-11 text-center lg:px-14 lg:py-14">
          <MarigoldMark className="mx-auto h-7 w-7 text-marigold-400" />
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-[26px] font-semibold leading-tight text-white sm:text-[32px]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-white/65">
            {text}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={telHref} className="btn btn-primary btn-lg">
              <Icon name="phone" className="h-4 w-4" strokeWidth={1.8} />
              {site.contact.phone}
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
          <p className="mt-6 text-[13.5px] text-white/45">
            {note ?? `${site.contact.hours}. ${site.contact.responseTime}.`}
          </p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Small blocks -------------------------- */

export function Checklist({
  items,
  title,
  columns = 2,
}: {
  items: readonly string[];
  title?: string;
  columns?: 1 | 2;
}) {
  return (
    <div className="card p-7 lg:p-9">
      {title ? (
        <h2 className="font-display text-[21px] font-semibold text-ink-900">
          {title}
        </h2>
      ) : null}
      <ul
        className={`mt-5 grid gap-x-8 gap-y-3.5 ${
          columns === 2 ? "sm:grid-cols-2" : ""
        }`}
      >
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[15.5px] leading-relaxed text-ink-700">
            <Icon
              name="check"
              className="mt-[3px] h-[18px] w-[18px] shrink-0 text-marigold-500"
              strokeWidth={1.6}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SidebarCallCard({ heading }: { heading?: string }) {
  return (
    <div className="bg-ink-gradient grain relative overflow-hidden rounded-lg p-7 text-white">
      <MarigoldMark className="h-6 w-6 text-marigold-400" />
      <p className="mt-4 font-display text-[20px] font-semibold leading-snug">
        {heading ?? "Need this arranged today?"}
      </p>
      <p className="mt-2.5 text-[14px] leading-relaxed text-white/65">
        A person answers, at every hour. {site.contact.responseTime}.
      </p>
      <a href={telHref} className="btn btn-primary mt-5 w-full">
        <Icon name="phone" className="h-4 w-4" strokeWidth={1.8} />
        {site.contact.phone}
      </a>
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-ghost-light mt-2.5 w-full"
      >
        WhatsApp us
      </a>
      <p className="mt-4 text-center text-[12.5px] text-white/40">
        {site.contact.hours}
      </p>
    </div>
  );
}

export function PriceNote({ text }: { text: string }) {
  return (
    <div className="rounded-lg border border-marigold-200 bg-marigold-50 p-6">
      <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-marigold-700">
        <Icon name="rupee" className="h-4 w-4" strokeWidth={1.8} />
        What it costs
      </p>
      <p className="mt-3 text-[15px] leading-relaxed text-marigold-900">{text}</p>
    </div>
  );
}

export function RelatedGrid({
  title,
  items,
}: {
  title: string;
  items: { href: string; title: string; text: string; icon?: IconKey }[];
}) {
  if (!items.length) return null;
  return (
    <div>
      <h2 className="font-display text-[22px] font-semibold text-ink-900">
        {title}
      </h2>
      <div className="rule-marigold mt-3.5" />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((i) => (
          <Link
            key={i.href}
            href={i.href}
            className="card card-hover group flex gap-4 p-5"
          >
            {i.icon ? (
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-ink-50 text-ink-600 transition-colors group-hover:bg-marigold-100 group-hover:text-marigold-700">
                <Icon name={i.icon} className="h-5 w-5" />
              </span>
            ) : null}
            <span className="min-w-0">
              <span className="block font-display text-[16px] font-semibold text-ink-900">
                {i.title}
              </span>
              <span className="mt-1 block text-[14px] leading-relaxed text-ink-500">
                {i.text}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* --------------------------- Sticky call bar ------------------------ */

export function StickyCallBar() {
  if (!site.features.stickyMobileCallBar) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-100 bg-paper/95 px-4 py-2.5 backdrop-blur-xl no-print sm:hidden">
      <div className="flex gap-2.5">
        <a href={telHref} className="btn btn-primary flex-1">
          <Icon name="phone" className="h-4 w-4" strokeWidth={1.8} />
          Call now
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline flex-1"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
