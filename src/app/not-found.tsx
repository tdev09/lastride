import Link from "next/link";
import { site, telHref } from "@/config/site";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { Icon, MarigoldMark } from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="bg-ink-gradient grain relative overflow-hidden">
      <div className="container-page flex min-h-[80vh] flex-col justify-center py-24 pt-[140px]">
        <div className="max-w-2xl">
          <MarigoldMark className="h-8 w-8 text-marigold-400" />
          <p className="mt-6 font-display text-[15px] font-semibold uppercase tracking-[0.16em] text-marigold-300">
            404
          </p>
          <h1 className="mt-3 font-display text-[36px] font-semibold leading-tight text-white sm:text-[46px]">
            This page is not here
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-white/65">
            The link may have changed or the address may have a typo in it. If
            you were looking for help and cannot find it quickly, please just
            call. That is faster than searching.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={telHref} className="btn btn-primary btn-lg">
              <Icon name="phone" className="h-4 w-4" strokeWidth={1.8} />
              Call {site.contact.phone}
            </a>
            <Link href="/" className="btn btn-ghost-light btn-lg">
              Back to home
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-marigold-300">
              Common services
            </p>
            <ul className="mt-3.5 space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[14.5px] text-white/60 transition-colors hover:text-marigold-300"
                  >
                    {s.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-marigold-300">
              Main cities
            </p>
            <ul className="mt-3.5 space-y-2">
              {cities.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/locations/${c.slug}`}
                    className="text-[14.5px] text-white/60 transition-colors hover:text-marigold-300"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-marigold-300">
              Elsewhere
            </p>
            <ul className="mt-3.5 space-y-2">
              {[
                { href: "/services", label: "All services" },
                { href: "/locations", label: "All cities" },
                { href: "/cremation-grounds", label: "Cremation grounds" },
                { href: "/repatriation", label: "Repatriation" },
                { href: "/blog", label: "Guides and blog" },
                { href: "/contact", label: "Contact us" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14.5px] text-white/60 transition-colors hover:text-marigold-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
