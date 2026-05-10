"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
              <Image
                src="/images/logo.webp"
                alt="双極症の当事者がケトジェニックを試している日常をお伝えするブログ"
                width={32}
                height={32}
              />
              <span className="font-kosugi-maru text-white font-semibold text-sm">
                双極症とケトジェニック
              </span>
            </div>
            <p className="text-xs">当事者による実体験の記録ブログ</p>
          </div>
          <nav
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm"
            aria-label="フッターナビゲーション"
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
            <Link
              href="/about#privacy"
              className={`nav-link text-sm font-kosugi-maru text-white/60 hover:text-white/90 transition ${pathname === "/about#privacy" ? "font-black border-b-2 border-white/60 hover:border-white/90 transition" : "font-medium"}`}
            >
              Privacy Policy
            </Link>
            <Link
              href="/about#contact"
              className={`nav-link text-sm font-kosugi-maru text-white/60 hover:text-white/90 transition ${pathname === "/about#contact" ? "font-black border-b-2 border-white/60 hover:border-white/90 transition" : "font-medium"}`}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs">
          <p>
            © {new Date().getFullYear()} 双極症とケトジェニック. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
