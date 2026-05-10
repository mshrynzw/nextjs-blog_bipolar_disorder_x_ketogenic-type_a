"use client";

import { useMemo, useState } from "react";
import { LiquidGlassArticleCard } from "../../components/LiquidGlassArticleCard";
import { formatPostCardDate } from "@/src/lib/dateFormat";
import type { PostListItem } from "@/src/lib/posts";
import { filterPostsOrSearch } from "@/src/lib/blogSearch";

const CARD_VARIANTS = [
  {
    gradient: "from-green-50/50 to-emerald-100/50",
    chip: "text-green-700 bg-green-50 border border-green-200",
    icon: (
      <svg
        className="w-6 h-6 text-green-600"
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
    ),
  },
  {
    gradient: "from-sky-50/50 to-blue-100/50",
    chip: "text-sky-700 bg-sky-50 border border-sky-200",
    icon: (
      <svg
        className="w-6 h-6 text-sky-500"
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
    ),
  },
  {
    gradient: "from-amber-50/50 to-orange-100/50",
    chip: "text-amber-700 bg-amber-50 border border-amber-200",
    icon: (
      <svg
        className="w-6 h-6 text-amber-500"
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
    ),
  },
  {
    gradient: "from-violet-50/50 to-purple-100/50",
    chip: "text-violet-700 bg-violet-50 border border-violet-200",
    icon: (
      <svg
        className="w-6 h-6 text-violet-500"
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
    ),
  },
  {
    gradient: "from-rose-50/50 to-pink-100/50",
    chip: "text-rose-700 bg-rose-50 border border-rose-200",
    icon: (
      <svg
        className="w-6 h-6 text-rose-500"
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
    ),
  },
  {
    gradient: "from-emerald-50/50 to-teal-100/50",
    chip: "text-emerald-700 bg-emerald-50 border border-emerald-200",
    icon: (
      <svg
        className="w-6 h-6 text-emerald-500"
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
    ),
  },
] as const;

type Props = {
  posts: PostListItem[];
  genres: string[];
  tagsSorted: string[];
};

const genreBtnBase =
  "text-xs font-medium px-3 py-1.5 rounded-full border transition focus:outline-none focus:ring-2 focus:ring-green-400";
const genreBtnInactive =
  "text-gray-600 border-stone-200 bg-white hover:border-green-300 hover:bg-green-50";
const genreBtnActive =
  "border-green-600 bg-green-50 text-green-800 font-semibold";

const tagBtnBase =
  "text-xs px-2.5 py-1 rounded-full border transition focus:outline-none focus:ring-2 focus:ring-green-400";
const tagBtnInactive =
  "text-gray-600 border-transparent bg-stone-100 hover:bg-stone-200";
const tagBtnActive =
  "border-green-600 bg-green-50 text-green-800 font-medium";

export function BlogListInteractive({ posts, genres, tagsSorted }: Props) {
  const [query, setQuery] = useState("");
  /** `null` = すべて */
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  /** 複数選択 · いずれかのタグが付いた記事に一致（OR） */
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const filtered = useMemo(() => {
    let list = filterPostsOrSearch(posts, query);
    if (selectedGenre !== null) {
      list = list.filter((p) => p.genre === selectedGenre);
    }
    if (selectedTags.length > 0) {
      list = list.filter((p) =>
        selectedTags.some((sel) => p.tags.includes(sel)),
      );
    }
    return list;
  }, [posts, query, selectedGenre, selectedTags]);

  const total = posts.length;
  const isFiltering =
    query.trim().length > 0 ||
    selectedGenre !== null ||
    selectedTags.length > 0;

  return (
    <>
      <div className="bg-white/40 backdrop-blur-sm sticky top-16 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="max-w-lg mb-4">
            <label
              htmlFor="blog-search"
              className="text-gray-900 text-xs mb-2 block"
            >
              記事を検索（スペース区切りで複数キーワード · OR）
            </label>
            <div className="relative">
              <input
                id="blog-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="キーワードを入力…（例: ケト 睡眠）"
                autoComplete="off"
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-stone-100 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-white transition text-gray-900"
              />
              <svg
                className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-900 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="mb-3">
            <p className="text-xs font-medium text-gray-900 mb-2">カテゴリ</p>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="カテゴリフィルター"
            >
              <button
                type="button"
                className={`${genreBtnBase} ${
                  selectedGenre === null ? genreBtnActive : genreBtnInactive
                }`}
                aria-pressed={selectedGenre === null}
                onClick={() => setSelectedGenre(null)}
              >
                すべて
              </button>
              {genres.map((g) => (
                <button
                  key={g}
                  type="button"
                  className={`${genreBtnBase} ${
                    selectedGenre === g ? genreBtnActive : genreBtnInactive
                  }`}
                  aria-pressed={selectedGenre === g}
                  onClick={() =>
                    setSelectedGenre((prev) => (prev === g ? null : g))
                  }
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-900 mb-2">
              タグ{" "}
              <span className="font-normal text-gray-500">
                （複数選択可 · いずれか一致で OR）
              </span>
            </p>
            <div
              className="flex flex-wrap gap-1.5"
              role="group"
              aria-label="タグフィルター"
            >
              {tagsSorted.map((tag) => {
                const on = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    className={`${tagBtnBase} ${on ? tagBtnActive : tagBtnInactive}`}
                    aria-pressed={on}
                    onClick={() => toggleTag(tag)}
                  >
                    #{tag}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <section className="py-12" aria-label="記事一覧">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {total === 0 ? (
            <p className="text-center text-sm text-gray-500 py-12">
              記事がまだありません。{" "}
              <code className="text-xs bg-stone-100 px-1 rounded">
                content/posts
              </code>{" "}
              に Markdown を追加してください。
            </p>
          ) : filtered.length === 0 ? (
            <p
              className="text-center text-sm text-gray-500 py-12"
              role="status"
              aria-live="polite"
            >
              条件に一致する記事はありません。
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, index) => {
                const v = CARD_VARIANTS[index % CARD_VARIANTS.length]!;
                const href = `/blog-detail/${post.slug}`;

                return (
                  <LiquidGlassArticleCard
                    key={post.slug}
                    titleAs="h2"
                    headerHeightClass="h-36"
                    ariaLabel={`記事: ${post.title}`}
                    headerGradientClass={v.gradient}
                    href={href}
                    title={post.title}
                    description={post.description || "（概要なし）"}
                    icon={v.icon}
                    meta={
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full ${v.chip}`}
                        >
                          {post.genre}
                        </span>
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
                            <span
                              key={tag}
                              className="text-xs text-gray-900 bg-stone-100 px-2 py-0.5 rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      ) : undefined
                    }
                  />
                );
              })}
            </div>
          )}

          {total > 0 ? (
            <p
              className="text-center text-xs text-gray-400 mt-12"
              aria-live="polite"
            >
              {isFiltering
                ? `${filtered.length}件を表示（全${total}件中）`
                : `全${total}件を表示`}
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}
