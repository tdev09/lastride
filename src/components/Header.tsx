"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site, telHref, whatsappHref } from "@/config/site";
import { services } from "@/data/services";
import { cities, citiesByRegion, regionOrder } from "@/data/cities";
import { grounds } from "@/data/grounds";
import { repatriationRoutes } from "@/data/repatriation";
import { Icon, MarigoldMark } from "./Icon";
import { Logo } from "./Logo";

type MenuKey = "services" | "locations" | "grounds" | "repatriation" | null;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState<MenuKey>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /**
   * Close the drawer when a link inside it is followed. Done on the click
   * rather than in an effect on `pathname` so we do not trigger a cascading
   * render on every navigation.
   */
  const closeOnNavigate = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest("a")) {
      setMobileOpen(false);
      setOpenPanel(null);
    }
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-paper"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 no-print transition-all duration-500 ${
          solid
            ? "border-b border-ink-100 bg-paper/95 backdrop-blur-xl shadow-[0_1px_24px_-8px_rgb(15_20_29/0.18)]"
            : "border-b border-white/10 bg-transparent"
        }`}
      >
        {/* Utility bar */}
        <div
          className={`hidden overflow-hidden border-b transition-all duration-500 lg:block ${
            solid
              ? "max-h-0 border-transparent opacity-0"
              : "max-h-12 border-white/10 opacity-100"
          }`}
        >
          <div className="container-page flex h-10 items-center justify-between text-[13px] text-white/75">
            <p className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-marigold-300 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-marigold-400" />
              </span>
              {site.contact.hours}. A person answers, not a recording.
            </p>
            <div className="flex items-center gap-6">
              <a
                href={`mailto:${site.contact.email}`}
                className="transition-colors hover:text-white"
              >
                {site.contact.email}
              </a>
              <span className="h-3 w-px bg-white/20" />
              <a
                href={telHref}
                className="font-semibold text-white transition-colors hover:text-marigold-300"
              >
                {site.contact.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Main bar */}
        <div className="container-page flex h-[68px] items-center justify-between gap-4 lg:h-[76px]">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label={`${site.name} home`}
          >
            <Logo className="h-9 w-9 lg:h-10 lg:w-10" dark={!solid} />
            <span className="leading-none">
              <span
                className={`block font-display text-[20px] font-semibold tracking-tight lg:text-[22px] ${
                  solid ? "text-ink-900" : "text-white"
                }`}
              >
                {site.name}
              </span>
              <span
                className={`mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.18em] ${
                  solid ? "text-marigold-600" : "text-marigold-300"
                }`}
              >
                Funeral Services
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-0.5 xl:flex"
            aria-label="Primary"
          >
            <NavLink href="/about" solid={solid} active={pathname === "/about"}>
              About
            </NavLink>

            <MegaTrigger label="Services" solid={solid} active={pathname.startsWith("/services")}>
              <ServicesPanel />
            </MegaTrigger>

            <MegaTrigger label="Locations" solid={solid} active={pathname.startsWith("/locations")}>
              <LocationsPanel />
            </MegaTrigger>

            <MegaTrigger
              label="Cremation Grounds"
              solid={solid}
              active={pathname.startsWith("/cremation-grounds")}
              width="w-[560px]"
            >
              <GroundsPanel />
            </MegaTrigger>

            <MegaTrigger
              label="Repatriation"
              solid={solid}
              active={pathname.startsWith("/repatriation")}
              width="w-[440px]"
            >
              <RepatriationPanel />
            </MegaTrigger>

            <NavLink href="/blog" solid={solid} active={pathname.startsWith("/blog")}>
              Blog
            </NavLink>
            <NavLink href="/contact" solid={solid} active={pathname === "/contact"}>
              Contact
            </NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={telHref}
              className="btn btn-primary btn-sm hidden sm:inline-flex"
            >
              <Icon name="phone" className="h-4 w-4" strokeWidth={1.8} />
              <span className="hidden md:inline">{site.contact.phone}</span>
              <span className="md:hidden">Call now</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors xl:hidden ${
                solid
                  ? "border-ink-200 text-ink-800 hover:bg-ink-50"
                  : "border-white/25 text-white hover:bg-white/10"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                className="h-5 w-5"
              >
                {mobileOpen ? (
                  <path d="m6 6 12 12M18 6 6 18" />
                ) : (
                  <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 no-print xl:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-ink-950/50 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute inset-x-0 top-[68px] bottom-0 overflow-y-auto bg-paper transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileOpen ? "translate-y-0" : "-translate-y-4 opacity-0"
          }`}
        >
          <nav
            className="container-page py-6"
            aria-label="Mobile"
            onClick={closeOnNavigate}
          >
            <MobileLink href="/about">About us</MobileLink>

            <MobileGroup
              label="Services"
              open={openPanel === "services"}
              onToggle={() =>
                setOpenPanel(openPanel === "services" ? null : "services")
              }
            >
              <MobileSub href="/services">All services</MobileSub>
              {services.map((s) => (
                <MobileSub key={s.slug} href={`/services/${s.slug}`}>
                  {s.navTitle}
                </MobileSub>
              ))}
            </MobileGroup>

            <MobileGroup
              label="Locations"
              open={openPanel === "locations"}
              onToggle={() =>
                setOpenPanel(openPanel === "locations" ? null : "locations")
              }
            >
              <MobileSub href="/locations">All cities</MobileSub>
              {cities.map((c) => (
                <MobileSub key={c.slug} href={`/locations/${c.slug}`}>
                  {c.name}
                </MobileSub>
              ))}
            </MobileGroup>

            <MobileGroup
              label="Cremation Grounds"
              open={openPanel === "grounds"}
              onToggle={() =>
                setOpenPanel(openPanel === "grounds" ? null : "grounds")
              }
            >
              <MobileSub href="/cremation-grounds">All grounds</MobileSub>
              {grounds.map((g) => (
                <MobileSub key={g.slug} href={`/cremation-grounds/${g.slug}`}>
                  {g.name}
                </MobileSub>
              ))}
            </MobileGroup>

            <MobileGroup
              label="Repatriation"
              open={openPanel === "repatriation"}
              onToggle={() =>
                setOpenPanel(
                  openPanel === "repatriation" ? null : "repatriation",
                )
              }
            >
              <MobileSub href="/repatriation">Overview</MobileSub>
              {repatriationRoutes.map((r) => (
                <MobileSub key={r.slug} href={`/repatriation/${r.slug}`}>
                  {r.navTitle}
                </MobileSub>
              ))}
            </MobileGroup>

            <MobileLink href="/gallery">Gallery</MobileLink>
            <MobileLink href="/blog">Blog</MobileLink>
            <MobileLink href="/contact">Contact</MobileLink>

            <div className="mt-6 grid gap-3 border-t border-ink-100 pt-6">
              <a href={telHref} className="btn btn-primary btn-lg w-full">
                <Icon name="phone" className="h-4 w-4" strokeWidth={1.8} />
                Call {site.contact.phone}
              </a>
              <a
                href={whatsappHref()}
                className="btn btn-outline w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message on WhatsApp
              </a>
              <p className="pt-1 text-center text-sm text-ink-500">
                {site.contact.hours}
              </p>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

/* ---------------------------------------------------------------- */

function NavLink({
  href,
  children,
  solid,
  active,
}: {
  href: string;
  children: React.ReactNode;
  solid: boolean;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`rounded-full px-3.5 py-2 text-[14.5px] font-medium transition-colors ${
        solid
          ? active
            ? "text-marigold-700"
            : "text-ink-700 hover:bg-ink-50 hover:text-ink-900"
          : active
            ? "text-marigold-300"
            : "text-white/85 hover:bg-white/10 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}

function MegaTrigger({
  label,
  children,
  solid,
  active,
  width = "w-[820px]",
}: {
  label: string;
  children: React.ReactNode;
  solid: boolean;
  active: boolean;
  width?: string;
}) {
  /**
   * The panel opens on hover and on focus, both in CSS. That leaves it stuck
   * open after a click: the clicked link keeps focus, the header does not
   * unmount across a client side navigation, so `group-focus-within` holds the
   * panel open on the page you just landed on, and hovering a second menu puts
   * two panels on screen at once.
   *
   * Closing it takes two things, and it does not work with only one:
   *
   *   - `dismissed` hides the panel with `display: none`, which beats the
   *     hover and focus rules whatever the pointer is doing.
   *   - the focus that click left behind is dropped by hand. Hiding the panel
   *     does eventually drop it, but not in time to be relied on, and focus on
   *     the trigger button is never inside the panel to begin with. Focus is
   *     also what rotates the chevron and lights the trigger pill, so those
   *     stay stuck too until it is let go.
   *
   * `dismissed` is cleared on the way in rather than on the way out. Clearing
   * it on mouse leave meant hiding the panel could clear it, since hiding the
   * panel is itself what takes the pointer off this group. On mouse enter the
   * pointer is deliberately back on the trigger, which is the moment reopening
   * is actually wanted.
   *
   * Keyboard activation, which reports `detail` 0, keeps its focus. Taking it
   * away would strand someone tabbing through the menu.
   */
  const [dismissed, setDismissed] = useState(false);

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.target as HTMLElement;
    if (el.closest("a")) setDismissed(true);
    else if (el.closest("button")) setDismissed((v) => !v);
    else return;

    if (e.detail > 0) (document.activeElement as HTMLElement | null)?.blur();
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => setDismissed(false)}
      onClick={onClick}
    >
      {/*
       * No aria-expanded on this button on purpose: whether the panel is open
       * is decided by :hover and :focus-within in CSS, which React cannot see,
       * so any value put here would be a guess and would sometimes be a lie.
       */}
      <button
        type="button"
        className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[14.5px] font-medium transition-colors ${
          solid
            ? active
              ? "text-marigold-700"
              : "text-ink-700 group-hover:bg-ink-50 group-hover:text-ink-900"
            : active
              ? "text-marigold-300"
              : "text-white/85 group-hover:bg-white/10 group-hover:text-white"
        }`}
      >
        {label}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="h-3 w-3 opacity-60 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        className={`invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 ${width} max-w-[calc(100vw-3rem)] ${
          dismissed ? "hidden" : ""
        }`}
      >
        <div className="overflow-hidden rounded-xl border border-ink-100 bg-white shadow-deep">
          {children}
        </div>
      </div>
    </div>
  );
}

function ServicesPanel() {
  const primary = services.slice(0, 8);
  const secondary = services.slice(8);
  return (
    <div className="grid grid-cols-[1fr_1fr_260px]">
      <div className="col-span-2 grid grid-cols-2 gap-x-2 p-5">
        {[primary, secondary].map((group, gi) => (
          <div key={gi} className="space-y-0.5">
            {group.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group/i flex items-start gap-3 rounded-md p-2.5 transition-colors hover:bg-marigold-50"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-ink-50 text-ink-600 transition-colors group-hover/i:bg-marigold-100 group-hover/i:text-marigold-700">
                  <Icon name={s.icon} className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[13.5px] font-semibold text-ink-900">
                    {s.navTitle}
                  </span>
                  <span className="mt-0.5 block truncate text-[12px] leading-snug text-ink-500">
                    {s.summary}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="border-l border-ink-100 bg-paper-2 p-6">
        <MarigoldMark className="h-6 w-6 text-marigold-400" />
        <p className="mt-3 font-display text-[17px] font-semibold leading-snug text-ink-900">
          Not sure what you need?
        </p>
        <p className="mt-2 text-[13px] leading-relaxed text-ink-600">
          Call and describe the situation. We will tell you what has to happen
          next, and what it costs, on that call.
        </p>
        <a href={telHref} className="btn btn-ink btn-sm mt-4 w-full">
          <Icon name="phone" className="h-3.5 w-3.5" strokeWidth={1.8} />
          {site.contact.phone}
        </a>
        <Link
          href="/services"
          className="mt-2 block text-center text-[13px] font-semibold text-marigold-700 hover:underline"
        >
          Browse all services
        </Link>
      </div>
    </div>
  );
}

function LocationsPanel() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-6 gap-y-5 p-6">
        {regionOrder.map((region) => {
          const list = citiesByRegion[region];
          if (!list?.length) return null;
          return (
            <div key={region}>
              <p className="mb-2 text-[10.5px] font-bold uppercase tracking-[0.14em] text-marigold-600">
                {region}
              </p>
              <ul className="space-y-1">
                {list.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/locations/${c.slug}`}
                      className="block rounded px-1.5 py-1 text-[13.5px] text-ink-700 transition-colors hover:bg-marigold-50 hover:text-marigold-800"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between border-t border-ink-100 bg-paper-2 px-6 py-3.5">
        <p className="text-[13px] text-ink-600">
          {cities.length} cities, one helpline, the same people answering.
        </p>
        <Link
          href="/locations"
          className="text-[13px] font-semibold text-marigold-700 hover:underline"
        >
          View all cities
        </Link>
      </div>
    </div>
  );
}

function GroundsPanel() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4 p-5">
        {grounds.map((g) => (
          <Link
            key={g.slug}
            href={`/cremation-grounds/${g.slug}`}
            className="rounded-md px-2.5 py-2 transition-colors hover:bg-marigold-50"
          >
            <span className="block text-[13.5px] font-semibold text-ink-900">
              {g.name}
            </span>
            <span className="text-[12px] text-ink-500">{g.city}</span>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-ink-100 bg-paper-2 px-5 py-3.5">
        <p className="text-[13px] text-ink-600">
          Timings, facilities and what to carry.
        </p>
        <Link
          href="/cremation-grounds"
          className="text-[13px] font-semibold text-marigold-700 hover:underline"
        >
          All grounds
        </Link>
      </div>
    </div>
  );
}

function RepatriationPanel() {
  return (
    <div>
      <div className="space-y-0.5 p-5">
        {repatriationRoutes.map((r) => (
          <Link
            key={r.slug}
            href={`/repatriation/${r.slug}`}
            className="group/i flex items-center justify-between gap-4 rounded-md px-3 py-2.5 transition-colors hover:bg-marigold-50"
          >
            <span>
              <span className="block text-[13.5px] font-semibold text-ink-900">
                {r.from} to {r.to}
              </span>
              <span className="text-[12px] text-ink-500">{r.timeline}</span>
            </span>
            <Icon
              name="plane"
              className="h-4 w-4 shrink-0 text-ink-300 transition-colors group-hover/i:text-marigold-500"
            />
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-ink-100 bg-paper-2 px-5 py-3.5">
        <p className="text-[13px] text-ink-600">18 countries covered.</p>
        <Link
          href="/repatriation"
          className="text-[13px] font-semibold text-marigold-700 hover:underline"
        >
          How it works
        </Link>
      </div>
    </div>
  );
}

/* --------------------------- mobile bits --------------------------- */

function MobileLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block border-b border-ink-100 py-3.5 font-display text-[18px] font-semibold text-ink-900"
    >
      {children}
    </Link>
  );
}

function MobileGroup({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-ink-100">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-3.5 text-left font-display text-[18px] font-semibold text-ink-900"
      >
        {label}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`h-4 w-4 text-ink-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 gap-x-3 border-l-2 border-marigold-200 pl-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileSub({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="py-1.5 text-[14px] text-ink-600">
      {children}
    </Link>
  );
}
