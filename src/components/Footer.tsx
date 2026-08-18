import Link from "next/link";
import { mailHref, site, telHref, whatsappHref } from "@/config/site";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { grounds } from "@/data/grounds";
import { repatriationRoutes } from "@/data/repatriation";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

const socialLinks = [
  { key: "facebook", label: "Facebook", href: site.social.facebook, d: "M14.5 8.5h2.2V5.3h-2.6c-2.6 0-4.1 1.6-4.1 4.2v1.6H7.6v3.2H10v7.2h3.4v-7.2h2.4l.5-3.2h-2.9V9.8c0-.9.4-1.3 1.1-1.3Z" },
  { key: "instagram", label: "Instagram", href: site.social.instagram, d: "M8.4 3.5h7.2a4.9 4.9 0 0 1 4.9 4.9v7.2a4.9 4.9 0 0 1-4.9 4.9H8.4a4.9 4.9 0 0 1-4.9-4.9V8.4a4.9 4.9 0 0 1 4.9-4.9Zm3.6 4.9a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Zm5-.9a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Z" },
  { key: "youtube", label: "YouTube", href: site.social.youtube, d: "M21.3 8.3a2.4 2.4 0 0 0-1.7-1.7C18.1 6.2 12 6.2 12 6.2s-6.1 0-7.6.4A2.4 2.4 0 0 0 2.7 8.3 25 25 0 0 0 2.3 12c0 1.3.1 2.5.4 3.7a2.4 2.4 0 0 0 1.7 1.7c1.5.4 7.6.4 7.6.4s6.1 0 7.6-.4a2.4 2.4 0 0 0 1.7-1.7c.3-1.2.4-2.4.4-3.7s-.1-2.5-.4-3.7ZM10.2 14.7V9.3l4.7 2.7Z" },
  { key: "x", label: "X", href: site.social.x, d: "M17.2 4h2.9l-6.3 7.2 7.4 9.8h-5.8l-4.5-5.9-5.2 5.9H2.8l6.7-7.7L2.4 4h5.9l4.1 5.4Zm-1 15.3h1.6L8.1 5.6H6.3Z" },
  { key: "linkedin", label: "LinkedIn", href: site.social.linkedin, d: "M6.1 8.9H3.3v11.6h2.8Zm.2-3.2a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0Zm5.5 3.2H9.1v11.6h2.7v-6.1c0-1.6.3-3.1 2.3-3.1s2 1.8 2 3.2v6h2.7v-6.6c0-3.4-.7-5.3-3.7-5.3a3.2 3.2 0 0 0-2.9 1.6h-.1Z" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-gradient grain relative overflow-hidden text-white/70 no-print">
      {/* Call band */}
      <div className="border-b border-white/10">
        <div className="container-page flex flex-col items-center gap-6 py-12 text-center lg:flex-row lg:justify-between lg:py-14 lg:text-left">
          <div>
            <p className="eyebrow eyebrow-light justify-center lg:justify-start">
              <span className="h-px w-6 bg-marigold-400/60" />
              Any hour, any day
            </p>
            <h2 className="mt-3 font-display text-[26px] font-semibold leading-tight text-white sm:text-[32px]">
              Call us before you arrange anything else.
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-[15px] leading-relaxed lg:mx-0">
              Tell us where you are and what has happened. We will tell you what
              needs to happen next and what it will cost, on that call.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
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
        </div>
      </div>

      {/* Link columns */}
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo className="h-10 w-10" dark />
            <span className="leading-none">
              <span className="block font-display text-[22px] font-semibold text-white">
                {site.name}
              </span>
              <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.18em] text-marigold-300">
                Funeral Services
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-[14px] leading-relaxed">
            {site.legalName} has supported {site.familiesServed} families across{" "}
            {cities.length} Indian cities since {site.founded}. Cremation,
            transport, freezer box, rituals and international repatriation,
            arranged by one coordinator.
          </p>

          <div className="mt-6 flex gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all hover:border-marigold-400/60 hover:bg-white/5 hover:text-marigold-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Services" className="lg:col-span-3">
          {services.slice(0, 10).map((s) => (
            <FooterLink key={s.slug} href={`/services/${s.slug}`}>
              {s.navTitle}
            </FooterLink>
          ))}
          <FooterLink href="/services" accent>
            All services
          </FooterLink>
        </FooterCol>

        <FooterCol title="Cities" className="lg:col-span-3">
          <div className="grid grid-cols-2 gap-x-4">
            {cities.slice(0, 16).map((c) => (
              <FooterLink key={c.slug} href={`/locations/${c.slug}`}>
                {c.name}
              </FooterLink>
            ))}
          </div>
          <FooterLink href="/locations" accent>
            All {cities.length} cities
          </FooterLink>
        </FooterCol>

        <div className="lg:col-span-3">
          <FooterCol title="Company">
            <FooterLink href="/about">About us</FooterLink>
            <FooterLink href="/gallery">Gallery</FooterLink>
            <FooterLink href="/blog">Guides and blog</FooterLink>
            <FooterLink href="/cremation-grounds">Cremation grounds</FooterLink>
            <FooterLink href="/repatriation">Repatriation</FooterLink>
            <FooterLink href="/contact">Contact us</FooterLink>
          </FooterCol>

          <p className="mt-8 mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-marigold-300">
            Repatriation routes
          </p>
          <div className="space-y-1.5">
            {repatriationRoutes.map((r) => (
              <FooterLink key={r.slug} href={`/repatriation/${r.slug}`}>
                {r.navTitle}
              </FooterLink>
            ))}
          </div>
        </div>
      </div>

      {/* Offices */}
      <div className="border-t border-white/10">
        <div className="container-page grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {site.offices.map((o) => (
            <div key={o.city}>
              <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-marigold-300">
                <Icon name="map" className="h-3.5 w-3.5" strokeWidth={1.8} />
                {o.city}
              </p>
              <p className="mt-2.5 text-[13.5px] leading-relaxed">
                {o.label}
                <br />
                {o.state}, India
              </p>
            </div>
          ))}
          <div>
            <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-marigold-300">
              <Icon name="clock" className="h-3.5 w-3.5" strokeWidth={1.8} />
              Helpline
            </p>
            <div className="mt-2.5 space-y-1.5 text-[13.5px]">
              <a href={telHref} className="block font-semibold text-white hover:text-marigold-300">
                {site.contact.phone}
              </a>
              {site.contact.altPhone ? (
                <a
                  href={`tel:+${site.contact.altPhoneRaw}`}
                  className="block hover:text-marigold-300"
                >
                  {site.contact.altPhone}
                </a>
              ) : null}
              <a href={mailHref} className="block hover:text-marigold-300">
                {site.contact.email}
              </a>
              <p className="pt-1 text-white/50">{site.contact.hours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ground directory strip */}
      <div className="border-t border-white/10">
        <div className="container-page py-8">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-marigold-300">
            Cremation ground guides
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {grounds.map((g) => (
              <Link
                key={g.slug}
                href={`/cremation-grounds/${g.slug}`}
                className="text-[13px] text-white/55 transition-colors hover:text-marigold-300"
              >
                {g.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-[13px] text-white/45 sm:flex-row">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white/80">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white/80">
              Terms &amp; Conditions
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white/80">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-marigold-300">
        {title}
      </p>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
  accent = false,
}: {
  href: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`block text-[13.5px] transition-colors ${
        accent
          ? "pt-1.5 font-semibold text-marigold-300 hover:underline"
          : "text-white/60 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}
