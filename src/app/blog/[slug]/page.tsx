import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getPost, relatedPosts, sortedPosts } from "@/data/blog";
import { MarigoldMark } from "@/components/Icon";
import {
  ContentBlocks,
  CtaBand,
  PageHero,
  Section,
  SidebarCallCard,
} from "@/components/UI";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
  });
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.category },
  ];
  const related = relatedPosts(post.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          articleSchema({
            title: post.title,
            description: post.metaDescription,
            path: `/blog/${post.slug}`,
            datePublished: post.date,
            author: post.author,
          }),
        ]}
      />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        lead={post.excerpt}
        breadcrumbs={crumbs}
        compact
      />

      <Section tone="paper">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          <article>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-ink-100 pb-6 text-[13.5px] text-ink-500">
              <span className="font-medium text-ink-700">{post.author}</span>
              <span className="h-1 w-1 rounded-full bg-ink-300" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="h-1 w-1 rounded-full bg-ink-300" />
              <span>{post.readingTime}</span>
            </div>

            <div className="mt-10">
              <ContentBlocks sections={post.body} />
            </div>

            {related.length ? (
              <div className="mt-16 border-t border-ink-100 pt-10">
                <h2 className="font-display text-[22px] font-semibold text-ink-900">
                  Read next
                </h2>
                <div className="rule-marigold mt-3.5" />
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="card card-hover group p-6"
                    >
                      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-marigold-600">
                        {r.category}
                      </p>
                      <h3 className="mt-2 font-display text-[17px] font-semibold leading-snug text-ink-900 transition-colors group-hover:text-marigold-700">
                        {r.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-ink-600">
                        {r.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <SidebarCallCard heading="Rather just ask someone?" />

            <div className="card mt-5 p-6">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-marigold-600">
                <MarigoldMark className="h-3.5 w-3.5" />
                All guides
              </p>
              <ul className="mt-3.5 space-y-3">
                {sortedPosts
                  .filter((p) => p.slug !== post.slug)
                  .map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="group block border-b border-ink-100 pb-3 last:border-0 last:pb-0"
                      >
                        <span className="block text-[10.5px] font-bold uppercase tracking-[0.1em] text-marigold-600">
                          {p.category}
                        </span>
                        <span className="mt-1 block text-[14px] font-medium leading-snug text-ink-800 transition-colors group-hover:text-marigold-700">
                          {p.title}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <CtaBand
        title="Still not sure what applies to your situation?"
        text="Describe it on the phone and we will tell you exactly which documents you need and what the timeline realistically looks like."
      />
    </>
  );
}
