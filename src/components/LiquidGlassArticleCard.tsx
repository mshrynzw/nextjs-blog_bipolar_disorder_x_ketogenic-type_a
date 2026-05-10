import type { ReactNode } from "react";

export type LiquidGlassArticleCardProps = {
  /** `lg:col-span-2`、ヘッダー高さ・文字サイズを大きくする */
  featured?: boolean;
  ariaLabel: string;
  /** `bg-linear-to-br` に続くグラデーションクラス（例: `from-green-50/50 to-emerald-100/50`） */
  headerGradientClass: string;
  /** ヘッダー領域の高さ。未指定時は `featured` なら `h-48`、それ以外は `h-32` */
  headerHeightClass?: string;
  /** 見出し要素（一覧ページでは `h2` が適切なことがある） */
  titleAs?: "h2" | "h3";
  icon: ReactNode;
  /** ヘッダー内、アイコン直下の補足（フィーチャード向け） */
  headerSubtitle?: ReactNode;
  /** カテゴリ・日付・タグ等の先頭行 */
  meta: ReactNode;
  title: string;
  href: string;
  description: string;
  /** `#タグ` 行。フィーチャードでメタ内に含める場合は省略可 */
  tags?: ReactNode;
};

function ReadMoreLink({
  href,
  featured,
}: {
  href: string;
  featured?: boolean;
}) {
  return (
    <a
      href={href}
      className={
        featured
          ? "inline-flex items-center gap-1.5 text-sm font-medium text-green-700 hover:text-green-800 transition group"
          : "inline-flex items-center gap-1 text-xs font-medium text-green-700 hover:text-green-800 transition group"
      }
    >
      続きを読む{" "}
      <svg
        className={
          featured
            ? "w-4 h-4 group-hover:translate-x-0.5 transition-transform"
            : "w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
        }
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
    </a>
  );
}

export function LiquidGlassArticleCard({
  featured,
  ariaLabel,
  headerGradientClass,
  headerHeightClass,
  titleAs = "h3",
  icon,
  headerSubtitle,
  meta,
  title,
  href,
  description,
  tags,
}: LiquidGlassArticleCardProps) {
  const articleClass = [
    "liquid-glass-card backdrop-blur-lg rounded-2xl overflow-hidden card-hover bg-stone-50/25 backdrop-blur-sm",
    featured ? "lg:col-span-2" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const headerHeight = headerHeightClass ?? (featured ? "h-48" : "h-32");
  const HeadingTag = titleAs;
  const iconWrapClass = featured
    ? "w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto"
    : "w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto";
  const iconMargin = headerSubtitle ? "mb-3" : "";
  const bodyPad = featured ? "p-6" : "p-5";
  const titleClass = featured
    ? "font-kosugi-maru text-xl font-bold text-white mb-3 leading-snug hover:text-green-700 transition"
    : "font-kosugi-maru text-base font-bold text-white mb-2 leading-snug hover:text-green-700 transition";
  const descClass = featured
    ? "text-sm text-white/80 leading-relaxed mb-4"
    : "text-xs text-gray-900 leading-relaxed mb-4";

  return (
    <article className={articleClass} aria-label={ariaLabel}>
      <div className="relative z-1">
        <div
          className={`bg-linear-to-br ${headerGradientClass} ${headerHeight} flex items-center justify-center`}
        >
          <div className="text-center px-6 flex flex-col items-center justify-center">
            <div className={`${iconWrapClass} ${iconMargin}`}>{icon}</div>
            {headerSubtitle}
          </div>
        </div>
        <div className={bodyPad}>
          {meta}
          <HeadingTag className={titleClass}>
            <a href={href}>{title}</a>
          </HeadingTag>
          <p className={descClass}>{description}</p>
          {tags}
          <ReadMoreLink href={href} featured={featured} />
        </div>
      </div>
    </article>
  );
}
