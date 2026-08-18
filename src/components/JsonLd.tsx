import { site } from "@/config/site";

/**
 * Renders structured data. The payload is built from our own content files,
 * never from user input, so serialising it directly is safe.
 *
 * Every schema on the site goes through here, which makes it the one place
 * `site.seoEnabled` has to switch off.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  if (!site.seoEnabled) return null;
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
