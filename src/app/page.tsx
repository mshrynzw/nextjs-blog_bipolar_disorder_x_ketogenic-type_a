import Link from "next/link";

import { ARTICLE_CARD_VARIANTS } from "../components/blog/articleCardVariants";
import { LiquidGlassArticleCard } from "../components/LiquidGlassArticleCard";
import { formatPostCardDate } from "@/src/lib/dateFormat";
import { getAllPostsMeta, getPublishedSpanDays } from "@/src/lib/posts";

const RECENT_POSTS_LIMIT = 6;

export default function Home() {
  const posts = getAllPostsMeta();
  const postCount = posts.length;
  const spanDays = getPublishedSpanDays(posts);
  const recentPosts = posts.slice(0, RECENT_POSTS_LIMIT);

  return (
    <>
      {/* ヒーローセクション */}
      <section
        className="hero-gradient leaf-pattern relative overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 relative">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-700 bg-green-100 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              当事者による実体験の記録
            </span>
            <h1
              id="hero-heading"
              className="font-kosugi-maru text-3xl sm:text-4xl md:text-5xl font-bold text-white/90 leading-tight mb-6"
            >
              双極症の当事者が
              <br className="hidden sm:block" />
              ケトジェニックを試している
              <br className="hidden sm:block" />
              日常をお伝えするブログ
            </h1>
            <p className="font-line-seed-jp text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              双極症（躁うつ病）と向き合いながら、食事療法（ケトジェニック）を実践する日々の記録です。同じ悩みを持つ方の参考になれば嬉しいです。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog-list"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-6 py-3 rounded-xl transition shadow-sm hover:shadow-md"
              >
                ブログを読む
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-gray-700 text-sm font-medium px-6 py-3 rounded-xl border border-stone-200 transition shadow-sm"
              >
                このブログについて
              </Link>
            </div>
          </div>
        </div>

        {/* 統計バッジ */}
        <div className="bg-white/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-sm text-white/80">
              <div className="flex items-center gap-2">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>
                  記事 <strong className="text-white/90">{postCount}</strong> 本
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-sky-500"
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
                <span>
                  開始から{" "}
                  <strong className="text-white/90">
                    {spanDays !== null ? spanDays : "—"}
                  </strong>
                  日
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-amber-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span>定期に更新中</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 最新記事 */}
      <section
        className="pt-16 pb-20 sm:pb-20 sm:pt-10"
        aria-labelledby="recent-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2
                id="recent-heading"
                className="font-kosugi-maru text-2xl sm:text-3xl font-bold text-white/90"
              >
                最近のブログ記事
              </h2>
              <p className="mt-1 text-sm text-white/80">
                日々の実践記録をお届けします
              </p>
            </div>
            <Link
              href="/blog-list"
              className="hidden sm:inline-flex items-center gap-1 text-sm text-green-200 font-medium hover:text-green-300 transition"
            >
              すべて見る
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {recentPosts.length === 0 ? (
            <p className="text-center text-sm text-white/60 py-12">
              記事はまだありません。
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post, index) => {
                const v =
                  ARTICLE_CARD_VARIANTS[
                    index % ARTICLE_CARD_VARIANTS.length
                  ]!;
                const href = `/blog-detail/${post.slug}`;

                return (
                  <LiquidGlassArticleCard
                    key={post.slug}
                    ariaLabel={`記事: ${post.title}`}
                    headerGradientClass={v.gradient}
                    href={href}
                    title={post.title}
                    description={post.description || "（概要なし）"}
                    icon={v.icon}
                    meta={
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Link
                          href={`/blog-list?genre=${encodeURIComponent(post.genre)}`}
                          className={`text-xs font-medium px-2.5 py-1 rounded-full transition hover:opacity-90 ${v.chip}`}
                        >
                          {post.genre}
                        </Link>
                        <time
                          className="ml-auto text-xs text-gray-400"
                          dateTime={post.publishedAt}
                        >
                          {formatPostCardDate(post.publishedAt)}
                        </time>
                      </div>
                    }
                    tags={
                      post.tags.length > 0 ? (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 6).map((tag) => (
                            <Link
                              key={tag}
                              href={`/blog-list?tag=${encodeURIComponent(tag)}`}
                              className="text-xs text-gray-900 bg-stone-100 px-2 py-0.5 rounded-full hover:bg-stone-200 transition inline-block"
                            >
                              #{tag}
                            </Link>
                          ))}
                        </div>
                      ) : undefined
                    }
                  />
                );
              })}
            </div>
          )}

          {/* すべて見るボタン（モバイル） */}
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/blog-list"
              className="inline-flex items-center gap-2 text-sm font-medium text-green-700 border border-green-300 bg-white px-5 py-2.5 rounded-xl hover:bg-green-50 transition"
            >
              すべての記事を見る
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* カテゴリセクション */}
      <section
        className="py-14 bg-white/40 backdrop-blur-sm"
        aria-labelledby="categories-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2
            id="categories-heading"
            className="font-kosugi-maru text-xl sm:text-2xl font-bold text-white/90 mb-8 text-center"
          >
            カテゴリから探す
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <Link
              href={`/blog-list?genre=${encodeURIComponent("振り返り")}`}
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl border border-stone-100 bg-stone-50 hover:bg-green-50 hover:border-green-200 transition text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-green-100 transition">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-700">
                振り返り
              </span>
            </Link>
            <Link
              href={`/blog-list?genre=${encodeURIComponent("食事記録")}`}
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl border border-stone-100 bg-stone-50 hover:bg-sky-50 hover:border-sky-200 transition text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-sky-100 transition">
                <svg
                  className="w-5 h-5 text-sky-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-700">
                食事記録
              </span>
            </Link>
            <Link
              href={`/blog-list?genre=${encodeURIComponent("医師との対話")}`}
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl border border-stone-100 bg-stone-50 hover:bg-amber-50 hover:border-amber-200 transition text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-amber-100 transition">
                <svg
                  className="w-5 h-5 text-amber-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-700">
                医師との対話
              </span>
            </Link>
            <Link
              href={`/blog-list?genre=${encodeURIComponent("睡眠・体調")}`}
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl border border-stone-100 bg-stone-50 hover:bg-violet-50 hover:border-violet-200 transition text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-violet-100 transition">
                <svg
                  className="w-5 h-5 text-violet-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-700">
                睡眠・体調
              </span>
            </Link>
            <Link
              href={`/blog-list?genre=${encodeURIComponent("メンタル記録")}`}
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl border border-stone-100 bg-stone-50 hover:bg-rose-50 hover:border-rose-200 transition text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-rose-100 transition">
                <svg
                  className="w-5 h-5 text-rose-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-700">
                メンタル記録
              </span>
            </Link>
            <Link
              href={`/blog-list?genre=${encodeURIComponent("参考文献")}`}
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl border border-stone-100 bg-stone-50 hover:bg-emerald-50 hover:border-emerald-200 transition text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-emerald-100 transition">
                <svg
                  className="w-5 h-5 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-700">
                参考文献
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 免責事項バナー */}
      <section
        className="bg-amber-50 border-y border-amber-200 py-4"
        aria-label="免責事項"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-xs text-amber-800 leading-relaxed text-center">
            <svg
              className="w-3.5 h-3.5 inline mr-1 -mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            このブログは当事者の個人的な体験記録です。医療アドバイスではありません。病状の変化は必ず主治医にご相談ください。
          </p>
        </div>
      </section>
    </>
  );
}
