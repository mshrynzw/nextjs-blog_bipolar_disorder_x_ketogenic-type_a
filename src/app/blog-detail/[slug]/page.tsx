import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostView from "@/src/components/blog/BlogPostView";
import {
  getAllPostsMeta,
  getPostBySlug,
  getPostSlugs,
  type PostListItem,
} from "@/src/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "記事が見つかりません" };
  return {
    title: `${post.frontmatter.title} | 双極症とケトジェニック`,
    description: post.frontmatter.description,
  };
}

export default async function BlogDetailSlugPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const metaAsc = [...getAllPostsMeta()].sort(
    (a, b) =>
      new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime(),
  );
  const idx = metaAsc.findIndex((p) => p.slug === slug);
  const prev: PostListItem | null = idx > 0 ? metaAsc[idx - 1]! : null;
  const next: PostListItem | null =
    idx >= 0 && idx < metaAsc.length - 1 ? metaAsc[idx + 1]! : null;

  const related = getAllPostsMeta()
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <BlogPostView post={post} prev={prev} next={next} related={related} />
  );
}
