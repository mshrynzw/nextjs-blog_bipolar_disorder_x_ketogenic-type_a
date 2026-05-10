"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-gray-900/90 text-gray-400 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* サイト名 */}
          <a
            href="index.html"
            className="flex items-center gap-2 group"
            aria-label="トップへ"
          >
            <Image
              src="/images/logo.webp"
              alt="双極症の当事者がケトジェニックを試している日常をお伝えするブログ"
              width={32}
              height={32}
            />
            <span className="font-kosugi-maru text-base sm:text-lg font-semibold text-white leading-tight">
              双極症とケトジェニック
            </span>
          </a>

          {/* PCナビ */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="グローバルナビゲーション"
          >
            <Link
              href="/"
              className={`nav-link text-sm font-kosugi-maru text-white/60 hover:text-white/90 transition ${pathname === "/" ? "font-black border-b-2 border-white/60 hover:border-white/90 transition" : "font-medium"}`}
            >
              Home
            </Link>
            <Link
              href="/blog-list"
              className={`nav-link text-sm font-kosugi-maru text-white/60 hover:text-white/90 transition ${pathname === "/blog-list" ? "font-black border-b-2 border-white/60 hover:border-white/90 transition" : "font-medium"}`}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={`nav-link text-sm font-kosugi-maru text-white/60 hover:text-white/90 transition ${pathname === "/about" ? "font-black border-b-2 border-white/60 hover:border-white/90 transition" : "font-medium"}`}
            >
              About
            </Link>
          </nav>

          {/* PC検索 */}
          <div className="hidden md:flex items-center gap-2">
            <div className="relative">
              <label htmlFor="header-search" className="sr-only">
                記事を検索
              </label>
              <input
                id="header-search"
                type="search"
                placeholder="記事を検索..."
                className="w-52 pl-9 pr-4 py-2 text-sm bg-stone-100 border border-stone-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-white transition"
              />
              <svg
                className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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

          {/* ハンバーガー（モバイル） */}
          <button
            id="menu-btn"
            className="md:hidden p-2 rounded-lg hover:bg-stone-100 transition"
            aria-label="メニューを開く"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        <div
          id="mobile-menu"
          className="hidden md:hidden pb-4 border-t border-stone-100 mt-2 pt-4"
        >
          <div className="relative mb-4">
            <label htmlFor="mobile-search" className="sr-only">
              記事を検索
            </label>
            <input
              id="mobile-search"
              type="search"
              placeholder="記事を検索..."
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-stone-100 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
            <svg
              className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <nav
            className="flex flex-col gap-1"
            aria-label="モバイルナビゲーション"
          >
            <Link
              href="/"
              className="px-3 py-2 rounded-lg text-sm font-medium text-green-700 bg-green-50"
            >
              Home
            </Link>
            <Link
              href="/blog-list"
              className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-stone-100"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-stone-100"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
