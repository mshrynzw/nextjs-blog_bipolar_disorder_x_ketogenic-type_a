import type { Metadata } from "next";
import { Kosugi_Maru, LINE_Seed_JP } from "next/font/google";
import { absoluteUrl, getSiteAuthor, getSiteUrl } from "@/src/lib/site";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Aurora from "../components/background/aurora";

const kosugiMaru = Kosugi_Maru({
  variable: "--font-kosugi-maru-stack",
  weight: "400",
});

const lineSeedJP = LINE_Seed_JP({
  variable: "--font-line-seed-jp-stack",
  weight: "400",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "双極症とケトジェニック",
  icons: {
    icon: [
      "/favicon/favicon.ico",
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  description:
    "双極症とケトジェニックについてのブログです。双極症当事者の目線から、双極症とケトジェニックについての情報を提供しています。医師の視点からも情報を提供しています。",
  keywords: ["双極症", "双極性障害", "躁うつ病", "ケトジェニック", "ブログ"],
  authors: [{ name: getSiteAuthor(), url: getSiteUrl() }],
  creator: getSiteAuthor(),
  publisher: getSiteAuthor(),
  openGraph: {
    title: "双極症とケトジェニック",
    description:
      "双極症とケトジェニックについてのブログです。双極症当事者の目線から、双極症とケトジェニックについての情報を提供しています。医師の視点からも情報を提供しています。",
    url: getSiteUrl(),
    siteName: "双極症とケトジェニック",
    images: [
      {
        url: absoluteUrl("/ogp.png"),
        width: 1200,
        height: 630,
        alt: "双極症とケトジェニック",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "双極症とケトジェニック",
    description:
      "双極症とケトジェニックについてのブログです。双極症当事者の目線から、双極症とケトジェニックについての情報を提供しています。医師の視点からも情報を提供しています。",
    images: [absoluteUrl("/ogp.png")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${kosugiMaru.variable} ${lineSeedJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Aurora />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
