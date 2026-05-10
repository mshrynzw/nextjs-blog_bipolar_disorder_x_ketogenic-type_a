import { LiquidGlassArticleCard } from "../../components/LiquidGlassArticleCard";

export default function BlogList() {
  return (
    <>
      {/* ページヘッダー */}
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 sm:py-7">
          <nav
            className="flex items-center gap-2 text-xs text-gray-400 mb-4"
            aria-label="パンくずリスト"
          >
            <a href="index.html" className="hover:text-gray-600 transition">
              Home
            </a>
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
            全48件の記事 · 最終更新：2025年5月1日
          </p>
        </div>
      </div>

      {/* フィルター＆検索エリア */}
      <div className="bg-white/40 backdrop-blur-sm sticky top-16 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          {/* 検索バー */}
          <div className="relative max-w-lg mb-4">
            <label
              htmlFor="blog-search"
              className="text-gray-50 text-xs mb-2 block"
            >
              記事を検索
            </label>
            <input
              id="blog-search"
              type="search"
              placeholder="キーワードで記事を絞り込む..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-stone-100 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-white transition"
            />
            <svg
              className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
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

          {/* カテゴリフィルター */}
          <div className="mb-3">
            <p className="text-xs font-medium text-gray-50 mb-2">カテゴリ</p>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="カテゴリフィルター"
            >
              <button className="filter-btn active text-xs font-medium border px-3 py-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400">
                すべて
              </button>
              <button className="filter-btn text-xs font-medium text-gray-600 border border-stone-200 bg-white px-3 py-1.5 rounded-full hover:border-green-300 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-400">
                振り返り
              </button>
              <button className="filter-btn text-xs font-medium text-gray-600 border border-stone-200 bg-white px-3 py-1.5 rounded-full hover:border-green-300 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-400">
                食事記録
              </button>
              <button className="filter-btn text-xs font-medium text-gray-600 border border-stone-200 bg-white px-3 py-1.5 rounded-full hover:border-green-300 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-400">
                医師との対話
              </button>
              <button className="filter-btn text-xs font-medium text-gray-600 border border-stone-200 bg-white px-3 py-1.5 rounded-full hover:border-green-300 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-400">
                睡眠・体調
              </button>
              <button className="filter-btn text-xs font-medium text-gray-600 border border-stone-200 bg-white px-3 py-1.5 rounded-full hover:border-green-300 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-400">
                メンタル記録
              </button>
              <button className="filter-btn text-xs font-medium text-gray-600 border border-stone-200 bg-white px-3 py-1.5 rounded-full hover:border-green-300 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-400">
                参考文献
              </button>
            </div>
          </div>

          {/* タグフィルター */}
          <div>
            <p className="text-xs font-medium text-gray-50 mb-2">タグ</p>
            <div
              className="flex flex-wrap gap-1.5"
              role="group"
              aria-label="タグフィルター"
            >
              <button className="text-xs text-gray-500 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-full transition focus:outline-none focus:ring-2 focus:ring-green-400">
                #気分の波
              </button>
              <button className="text-xs text-gray-500 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-full transition focus:outline-none focus:ring-2 focus:ring-green-400">
                #体重変化
              </button>
              <button className="text-xs text-gray-500 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-full transition focus:outline-none focus:ring-2 focus:ring-green-400">
                #鬱期
              </button>
              <button className="text-xs text-gray-500 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-full transition focus:outline-none focus:ring-2 focus:ring-green-400">
                #躁期
              </button>
              <button className="text-xs text-gray-500 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-full transition focus:outline-none focus:ring-2 focus:ring-green-400">
                #睡眠
              </button>
              <button className="text-xs text-gray-500 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-full transition focus:outline-none focus:ring-2 focus:ring-green-400">
                #薬との兼ね合い
              </button>
              <button className="text-xs text-gray-500 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-full transition focus:outline-none focus:ring-2 focus:ring-green-400">
                #主治医
              </button>
              <button className="text-xs text-gray-500 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-full transition focus:outline-none focus:ring-2 focus:ring-green-400">
                #データ記録
              </button>
              <button className="text-xs text-gray-500 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-full transition focus:outline-none focus:ring-2 focus:ring-green-400">
                #レシピ
              </button>
              <button className="text-xs text-gray-500 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-full transition focus:outline-none focus:ring-2 focus:ring-green-400">
                #外食
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 記事一覧 */}
      <section className="py-12" aria-label="記事一覧">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 記事1 */}
            <LiquidGlassArticleCard
              titleAs="h2"
              headerHeightClass="h-36"
              ariaLabel="記事: ケトジェニック8ヶ月経過"
              headerGradientClass="from-green-50/50 to-emerald-100/50"
              href="blog-detail"
              title="ケトジェニック8ヶ月経過——双極症の症状は変わったのか正直に記録する"
              description="開始から8ヶ月が経ちました。体重の変化、気分の波、薬との兼ね合いなど、良いことも悪いことも包み隠さずお伝えします。"
              icon={
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
              }
              meta={
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
                    振り返り
                  </span>
                  <time
                    className="ml-auto text-xs text-gray-400"
                    dateTime="2025-05-01"
                  >
                    2025年5月1日
                  </time>
                </div>
              }
              tags={
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="text-xs text-gray-900 bg-stone-100 px-2 py-0.5 rounded-full">
                    #体重変化
                  </span>
                  <span className="text-xs text-gray-900 bg-stone-100 px-2 py-0.5 rounded-full">
                    #気分の波
                  </span>
                </div>
              }
            />

            {/* 記事2 */}
            <LiquidGlassArticleCard
              titleAs="h2"
              headerHeightClass="h-36"
              ariaLabel="記事: 鬱期のケトジェニックの工夫"
              headerGradientClass="from-sky-50/50 to-blue-100/50"
              href="blog-detail"
              title="鬱期でも続けられたケトジェニックの工夫3つ"
              description="気力が落ちている時期でも食事を崩さないためにやっていること。シンプルさを極めたレシピと準備のコツ。"
              icon={
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
              }
              meta={
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-full">
                    食事記録
                  </span>
                  <time
                    className="ml-auto text-xs text-gray-400"
                    dateTime="2025-04-22"
                  >
                    4月22日
                  </time>
                </div>
              }
              tags={
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="text-xs text-gray-900 bg-stone-100 px-2 py-0.5 rounded-full">
                    #鬱期
                  </span>
                  <span className="text-xs text-gray-900 bg-stone-100 px-2 py-0.5 rounded-full">
                    #食事準備
                  </span>
                </div>
              }
            />

            {/* 記事3 */}
            <LiquidGlassArticleCard
              titleAs="h2"
              headerHeightClass="h-36"
              ariaLabel="記事: 主治医にケトジェニックを話した記録"
              headerGradientClass="from-amber-50/50 to-orange-100/50"
              href="blog-detail"
              title="主治医にケトジェニックを話したらどう反応されたか"
              description="精神科の主治医にケトジェニックを実践していると告げた時のリアルなやり取り。"
              icon={
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
              }
              meta={
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                    医師との対話
                  </span>
                  <time
                    className="ml-auto text-xs text-gray-400"
                    dateTime="2025-04-15"
                  >
                    4月15日
                  </time>
                </div>
              }
              tags={
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="text-xs text-gray-900 bg-stone-100 px-2 py-0.5 rounded-full">
                    #主治医
                  </span>
                  <span className="text-xs text-gray-900 bg-stone-100 px-2 py-0.5 rounded-full">
                    #医療
                  </span>
                </div>
              }
            />

            {/* 記事4 */}
            <LiquidGlassArticleCard
              titleAs="h2"
              headerHeightClass="h-36"
              ariaLabel="記事: 糖質制限と睡眠のデータ"
              headerGradientClass="from-violet-50/50 to-purple-100/50"
              href="blog-detail"
              title="糖質制限を始めて睡眠の質が変わった話——データで見る90日間"
              description="スマートウォッチで睡眠を計測し続けた90日分のデータを公開。深睡眠の割合が目に見えて変化した。"
              icon={
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
              }
              meta={
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-violet-700 bg-violet-50 border border-violet-200 px-2.5 py-1 rounded-full">
                    睡眠・体調
                  </span>
                  <time
                    className="ml-auto text-xs text-gray-400"
                    dateTime="2025-04-08"
                  >
                    4月8日
                  </time>
                </div>
              }
              tags={
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="text-xs text-gray-900 bg-stone-100 px-2 py-0.5 rounded-full">
                    #睡眠
                  </span>
                  <span className="text-xs text-gray-900 bg-stone-100 px-2 py-0.5 rounded-full">
                    #データ記録
                  </span>
                </div>
              }
            />

            {/* 記事5 */}
            <LiquidGlassArticleCard
              titleAs="h2"
              headerHeightClass="h-36"
              ariaLabel="記事: 軽躁期の食欲とケトジェニック"
              headerGradientClass="from-rose-50/50 to-pink-100/50"
              href="blog-detail"
              title="軽躁期に食欲が増す現象——ケトジェニックで抑えられるか試してみた"
              description="軽躁状態になると甘いものへの欲求が爆発する。脂質中心の食事はそれをどう変えたのか3ヶ月の観察記録。"
              icon={
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
              }
              meta={
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-full">
                    メンタル記録
                  </span>
                  <time
                    className="ml-auto text-xs text-gray-400"
                    dateTime="2025-04-01"
                  >
                    4月1日
                  </time>
                </div>
              }
              tags={
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="text-xs text-gray-900 bg-stone-100 px-2 py-0.5 rounded-full">
                    #躁期
                  </span>
                  <span className="text-xs text-gray-900 bg-stone-100 px-2 py-0.5 rounded-full">
                    #食欲
                  </span>
                </div>
              }
            />

            {/* 記事6 */}
            <LiquidGlassArticleCard
              titleAs="h2"
              headerHeightClass="h-36"
              ariaLabel="記事: 海外研究まとめ2025年版"
              headerGradientClass="from-emerald-50/50 to-teal-100/50"
              href="blog-detail"
              title="双極症とケトジェニックに関する海外研究まとめ2025年版"
              description="英語論文を読んでまとめてみました。エビデンスレベルの評価も含め、信頼できる情報を丁寧に解説。"
              icon={
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
              }
              meta={
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    参考文献
                  </span>
                  <time
                    className="ml-auto text-xs text-gray-400"
                    dateTime="2025-03-25"
                  >
                    3月25日
                  </time>
                </div>
              }
              tags={
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="text-xs text-gray-900 bg-stone-100 px-2 py-0.5 rounded-full">
                    #論文
                  </span>
                  <span className="text-xs text-gray-900 bg-stone-100 px-2 py-0.5 rounded-full">
                    #エビデンス
                  </span>
                </div>
              }
            />
          </div>

          {/* ページネーション */}
          <nav
            className="mt-12 flex items-center justify-center gap-1"
            aria-label="ページネーション"
          >
            <button
              className="w-9 h-9 rounded-xl border border-stone-200 bg-white text-sm text-gray-400 flex items-center justify-center hover:border-green-300 disabled:opacity-40 transition"
              disabled
              aria-label="前のページ"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="w-9 h-9 rounded-xl bg-green-600 text-white text-sm font-medium flex items-center justify-center"
              aria-current="page"
              aria-label="1ページ目"
            >
              1
            </button>
            <button
              className="w-9 h-9 rounded-xl border border-stone-200 bg-white text-sm text-gray-600 flex items-center justify-center hover:border-green-300 hover:bg-green-50 transition"
              aria-label="2ページ目"
            >
              2
            </button>
            <button
              className="w-9 h-9 rounded-xl border border-stone-200 bg-white text-sm text-gray-600 flex items-center justify-center hover:border-green-300 hover:bg-green-50 transition"
              aria-label="3ページ目"
            >
              3
            </button>
            <span className="text-gray-400 text-sm px-1">…</span>
            <button
              className="w-9 h-9 rounded-xl border border-stone-200 bg-white text-sm text-gray-600 flex items-center justify-center hover:border-green-300 hover:bg-green-50 transition"
              aria-label="8ページ目"
            >
              8
            </button>
            <button
              className="w-9 h-9 rounded-xl border border-stone-200 bg-white text-sm text-gray-600 flex items-center justify-center hover:border-green-300 hover:bg-green-50 transition"
              aria-label="次のページ"
            >
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
            </button>
          </nav>
          <p className="text-center text-xs text-gray-400 mt-3">
            6件表示 / 全48件
          </p>
        </div>
      </section>
    </>
  );
}
