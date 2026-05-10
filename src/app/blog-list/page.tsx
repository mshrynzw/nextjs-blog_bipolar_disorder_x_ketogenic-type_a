import Link from "next/link";
import { Suspense } from "react";
import { BlogListInteractive } from "./BlogListInteractive";
import { formatFullDate } from "@/src/lib/dateFormat";
import {
  getAllPostsMeta,
  getLatestPostTimestamp,
} from "@/src/lib/posts";

export default function BlogList() {
  const posts = getAllPostsMeta();
  const total = posts.length;
  const latestTs = getLatestPostTimestamp(posts);
  const lastUpdatedLabel =
    latestTs > 0 ? formatFullDate(new Date(latestTs).toISOString()) : "—";

  const genres = [...new Set(posts.map((p) => p.genre))].sort((a, b) =>
    a.localeCompare(b, "ja"),
  );

  const tagSet = new Set<string>();
  for (const p of posts) {
    for (const t of p.tags) tagSet.add(t);
  }
  const tagsSorted = [...tagSet].sort((a, b) => a.localeCompare(b, "ja"));

  return (
    <>
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 sm:py-7">
          <nav
            className="flex items-center gap-2 text-xs text-gray-400 mb-4"
            aria-label="パンくずリスト"
          >
            <Link href="/" className="hover:text-gray-600 transition">
              Home
            </Link>
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-gray-600">Blog</span>
          </nav>
          <h1 className="font-kosugi-maru text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            ブログ記事一覧
          </h1>
          <p className="text-sm text-gray-500">
            全{total}件の記事
            {latestTs > 0 ? ` · 最終更新：${lastUpdatedLabel}` : ""}
          </p>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center text-sm text-gray-500">
            読み込み中…
          </div>
        }
      >
        <BlogListInteractive
          posts={posts}
          genres={genres}
          tagsSorted={tagsSorted}
        />
      </Suspense>
    </>
  );
}
