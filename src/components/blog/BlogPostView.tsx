import Link from "next/link";
import type { Post, PostListItem } from "@/src/lib/posts";
import { absoluteUrl } from "@/src/lib/site";
import { CopyPostUrlButton } from "@/src/components/blog/CopyPostUrlButton";
import { formatPostCardDate } from "@/src/lib/dateFormat";

export default function BlogPostView({
  post,
  prev,
  next,
  related,
}: {
  post: Post;
  prev: PostListItem | null;
  next: PostListItem | null;
  related: PostListItem[];
}) {
  const { frontmatter, html, readingMinutes, toc } = post;
  const authorInitial =
    frontmatter.author.trim().charAt(0).toUpperCase() || "?";
  const postAbsoluteUrl = absoluteUrl(`/blog-detail/${frontmatter.slug}`);

  return (
    <>
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <nav
            className="flex items-center gap-2 text-xs text-gray-400"
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
            <Link href="/blog-list" className="hover:text-gray-600 transition">
              Blog
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
            <span className="text-gray-600 truncate max-w-xs">
              {frontmatter.title}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 lg:py-14 bg-stone-50/25 backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          <article className="flex-1 min-w-0">
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-medium text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
                  {frontmatter.genre}
                </span>
                {frontmatter.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog-list?tag=${encodeURIComponent(tag)}`}
                    className="text-xs text-gray-600 bg-stone-100 px-2 py-0.5 rounded-full hover:bg-stone-200 hover:text-gray-900 transition inline-block"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
              <h1 className="font-kosugi-maru text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
                {frontmatter.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-100 pb-6">
                <div className="flex items-center gap-1.5">
                  <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xs">
                    {authorInitial}
                  </div>
                  <span>{frontmatter.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <time dateTime={frontmatter.publishedAt}>
                    {formatPostCardDate(frontmatter.publishedAt)}
                  </time>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>約{readingMinutes}分で読めます</span>
                </div>
              </div>
            </header>

            <div
              className="prose-custom"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            <div className="mt-10 pt-8 border-t border-stone-100">
              <p className="text-sm font-medium text-gray-100 mb-3">
                この記事をシェアする
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={`https://x.com/share?url=${encodeURIComponent(postAbsoluteUrl)}`}
                  className="inline-flex items-center gap-2 text-xs font-medium text-white bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-xl transition"
                  aria-label="Twitterでシェア"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X でシェア
                </Link>
                <Link
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postAbsoluteUrl)}`}
                  className="inline-flex items-center gap-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition"
                  aria-label="Facebookでシェア"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </Link>
                <CopyPostUrlButton url={postAbsoluteUrl} />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prev ? (
                <Link
                  href={`/blog-detail/${prev.slug}`}
                  className="group flex flex-col p-4 bg-white rounded-xl border border-stone-100 hover:border-green-200 hover:bg-green-50 transition"
                >
                  <span className="text-xs text-gray-400 flex items-center gap-1 mb-2">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    前の記事
                  </span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-green-700 line-clamp-2">
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <Link
                  href="/blog-list"
                  className="group flex flex-col p-4 bg-white rounded-xl border border-stone-100 hover:border-green-200 hover:bg-green-50 transition"
                >
                  <span className="text-xs text-gray-400 mb-2">前の記事</span>
                  <span className="text-sm font-medium text-gray-500 group-hover:text-green-700">
                    記事一覧へ
                  </span>
                </Link>
              )}
              {next ? (
                <Link
                  href={`/blog-detail/${next.slug}`}
                  className="group flex flex-col p-4 bg-white rounded-xl border border-stone-100 hover:border-green-200 hover:bg-green-50 transition text-right"
                >
                  <span className="text-xs text-gray-400 flex items-center gap-1 mb-2 justify-end">
                    次の記事
                    <svg
                      className="w-3.5 h-3.5"
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
                  </span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-green-700 line-clamp-2">
                    {next.title}
                  </span>
                </Link>
              ) : (
                <Link
                  href="/blog-list"
                  className="group flex flex-col p-4 bg-white rounded-xl border border-stone-100 hover:border-green-200 hover:bg-green-50 transition text-right"
                >
                  <span className="text-xs text-gray-400 mb-2 flex justify-end">
                    次の記事
                  </span>
                  <span className="text-sm font-medium text-gray-500 group-hover:text-green-700">
                    記事一覧へ
                  </span>
                </Link>
              )}
            </div>

            {related.length > 0 ? (
              <section className="mt-12" aria-labelledby="related-heading">
                <h2
                  id="related-heading"
                  className="font-kosugi-maru text-xl font-bold text-gray-900 mb-6"
                >
                  関連記事
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {related.map((r) => (
                    <article
                      key={r.slug}
                      className="bg-white rounded-xl border border-stone-100 p-4 card-hover"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                          {r.genre}
                        </span>
                        <time className="text-xs text-gray-400 ml-auto">
                          {formatPostCardDate(r.publishedAt)}
                        </time>
                      </div>
                      <h3 className="font-kosugi-maru text-sm font-bold text-gray-900 mb-2 hover:text-green-700 transition leading-snug">
                        <Link href={`/blog-detail/${r.slug}`}>{r.title}</Link>
                      </h3>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}
          </article>

          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              {toc.length > 0 ? (
                <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-4">
                  <h2 className="font-kosugi-maru text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 10h16M4 14h12M4 18h8"
                      />
                    </svg>
                    目次
                  </h2>
                  <nav aria-label="目次">
                    <ol className="space-y-2">
                      {toc.map((item, i) => (
                        <li key={item.id}>
                          <Link
                            href={`#${item.id}`}
                            className="toc-link text-xs text-gray-600 block leading-relaxed"
                            target="_self"
                          >
                            {i + 1}. {item.title}
                          </Link>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>
              ) : null}

              <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-sm shrink-0">
                    {authorInitial}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {frontmatter.author}
                    </p>
                    <p className="text-xs text-gray-500">当事者・記録者</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  双極性障害2型と診断されて7年。2026年4月からケトジェニックを開始。日々の変化を記録しています。
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5">
                <h2 className="font-kosugi-maru text-sm font-bold text-gray-900 mb-3">
                  タグ
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {frontmatter.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog-list?tag=${encodeURIComponent(tag)}`}
                      className="text-xs text-gray-500 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-full transition"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
