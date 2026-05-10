import { notFound, redirect } from "next/navigation";
import { getDefaultPostSlug } from "@/src/lib/posts";

export default function BlogDetailPage() {
  const slug = getDefaultPostSlug();
  if (!slug) notFound();
  redirect(`/blog-detail/${slug}`);
}
