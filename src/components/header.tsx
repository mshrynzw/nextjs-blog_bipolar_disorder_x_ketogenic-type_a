"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const mobileNavInactive =
    "px-3 py-2 rounded-lg text-sm font-medium text-gray-100 hover:bg-stone-100";
  const mobileNavActive =
    "px-3 py-2 rounded-lg text-sm font-medium text-green-700 bg-green-50";

  const blogSectionActive =
    pathname === "/blog-list" || pathname.startsWith("/blog-detail");

  return (
    <header className="bg-gray-900/90 text-gray-400 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* サイト名 */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="トップへ"
            onClick={closeMobileMenu}
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
          </Link>

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

          {/* PC検索 → /blog-list?q= （一覧のキーワード OR 検索と同じ） */}
          <div className="hidden md:flex items-center gap-2">
            <form action="/blog-list" method="get" className="relative">
              <label htmlFor="header-search" className="sr-only">
                記事を検索
              </label>
              <input
                id="header-search"
                name="q"
                type="search"
                placeholder="記事を検索…"
                autoComplete="off"
                className="w-52 pl-9 pr-4 py-2 text-sm bg-stone-100 border border-stone-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-white transition text-gray-900"
              />
              <svg
                className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
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
            </form>
          </div>

          {/* ハンバーガー（モバイル） */}
          <button
            id="menu-btn"
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-stone-100 transition"
            aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
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
          hidden={!mobileMenuOpen}
          className="md:hidden pb-4 border-t border-stone-100 mt-2 pt-4"
        >
          <form
            action="/blog-list"
            method="get"
            className="relative mb-4"
            onSubmit={closeMobileMenu}
          >
            <label htmlFor="mobile-search" className="sr-only">
              記事を検索
            </label>
            <input
              id="mobile-search"
              name="q"
              type="search"
              placeholder="記事を検索…（スペース区切りで OR）"
              autoComplete="off"
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-stone-100 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition text-gray-900"
            />
            <svg
              className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
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
          </form>
          <nav
            className="flex flex-col gap-1"
            aria-label="モバイルナビゲーション"
          >
            <Link
              href="/"
              className={pathname === "/" ? mobileNavActive : mobileNavInactive}
              onClick={closeMobileMenu}
              aria-current={pathname === "/" ? "page" : undefined}
            >
              Home
            </Link>
            <Link
              href="/blog-list"
              className={
                blogSectionActive ? mobileNavActive : mobileNavInactive
              }
              onClick={closeMobileMenu}
              aria-current={blogSectionActive ? "page" : undefined}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={
                pathname === "/about" ? mobileNavActive : mobileNavInactive
              }
              onClick={closeMobileMenu}
              aria-current={pathname === "/about" ? "page" : undefined}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
