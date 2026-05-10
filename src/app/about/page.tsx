import { LiquidGlassPanel } from "../../components/LiquidGlassPanel";

export default function About() {
  return (
    <>
      {/* ページヘッダー */}
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-5 sm:py-7">
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
            <span className="text-gray-600">About</span>
          </nav>
          <h1 className="font-kosugi-maru text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            このブログについて
          </h1>
          <p className="text-sm text-gray-500">
            運営者情報・ブログの目的・プライバシーポリシー
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* 運営者情報カード */}
        <section className="mb-10" aria-labelledby="about-author">
          <LiquidGlassPanel>
            <div className="bg-linear-to-r from-green-50/50 to-emerald-50/50 p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* アバター */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 border-2 border-white/40 shadow-sm flex items-center justify-center">
                    <span className="text-3xl font-bold text-white font-kosugi-maru">
                      K
                    </span>
                  </div>
                </div>
                {/* プロフィール */}
                <div className="text-center sm:text-left">
                  <h2
                    id="about-author"
                    className="font-kosugi-maru text-xl font-bold text-white mb-1"
                  >
                    keto_bipolar
                  </h2>
                  <p className="text-sm text-green-100 font-medium mb-3">
                    双極性障害当事者・ブログ運営者
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    <span className="inline-flex items-center gap-1 text-xs text-white/95 bg-white/15 border border-white/25 px-3 py-1.5 rounded-full shadow-sm">
                      <svg
                        className="w-3.5 h-3.5 text-green-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      日本在住
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-white/95 bg-white/15 border border-white/25 px-3 py-1.5 rounded-full shadow-sm">
                      <svg
                        className="w-3.5 h-3.5 text-sky-200"
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
                      2026年4月〜実践中
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-8 prose-about text-white/85 [&_p]:leading-relaxed bg-stone-50/25 backdrop-blur-sm">
              <p>
                双極性障害2型と診断されて7年が経ちます。この数年は薬物療法を続けながら、日常生活を安定させることに取り組んできました。
              </p>
              <p>
                2024年の夏、ケトジェニックダイエット（糖質制限食）が双極症の症状改善に関係するという海外の研究論文を読んで興味を持ちました。2026年4月から実践を開始し、その記録をこのブログにまとめています。
              </p>
              <p>
                医療の専門家ではありません。書いていることはすべて個人の体験記録です。同じ病気を抱える方への情報提供や、「ひとりじゃないよ」というメッセージになれば嬉しいです。
              </p>
            </div>
          </LiquidGlassPanel>
        </section>

        {/* このブログについて */}
        <section className="mb-10" aria-labelledby="about-blog">
          <LiquidGlassPanel className="p-6 sm:p-8 text-white/85 bg-stone-50/25 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-green-300"
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
              <h2
                id="about-blog"
                className="font-kosugi-maru text-lg font-bold text-white"
              >
                このブログの目的
              </h2>
            </div>
            <div className="prose-about [&_ul]:space-y-2">
              <p>このブログには3つの目的があります。</p>
              <ul>
                <li>
                  <strong className="text-white">自分の記録として：</strong>
                  食事内容・気分・体調の変化を継続的に記録し、後から振り返るため
                </li>
                <li>
                  <strong className="text-white">情報共有として：</strong>
                  同じ双極性障害を持つ方や、ケトジェニックに興味がある方への参考資料として
                </li>
                <li>
                  <strong className="text-white">対話のきっかけとして：</strong>
                  孤独になりがちな治療生活の中で、同じ経験を持つ方とつながるため
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-6 border-t border-white/15">
              <h3 className="font-kosugi-maru text-base font-bold text-white mb-4">
                記事のジャンル
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 p-3 bg-white/10 border border-white/15 rounded-xl">
                  <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"></span>
                  <span className="text-xs text-white/90">振り返り</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white/10 border border-white/15 rounded-xl">
                  <span className="w-2 h-2 rounded-full bg-sky-400 flex-shrink-0"></span>
                  <span className="text-xs text-white/90">食事記録</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white/10 border border-white/15 rounded-xl">
                  <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0"></span>
                  <span className="text-xs text-white/90">医師との対話</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white/10 border border-white/15 rounded-xl">
                  <span className="w-2 h-2 rounded-full bg-violet-400 flex-shrink-0"></span>
                  <span className="text-xs text-white/90">睡眠・体調</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white/10 border border-white/15 rounded-xl">
                  <span className="w-2 h-2 rounded-full bg-rose-400 flex-shrink-0"></span>
                  <span className="text-xs text-white/90">メンタル記録</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white/10 border border-white/15 rounded-xl">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
                  <span className="text-xs text-white/90">参考文献</span>
                </div>
              </div>
            </div>

            {/* 免責事項 */}
            <div className="mt-6 pt-6 border-t border-white/15">
              <div className="bg-amber-500/15 border border-amber-400/35 rounded-xl p-4">
                <p className="text-xs font-medium text-amber-100 mb-2">
                  ⚠ 免責事項
                </p>
                <p className="text-xs text-amber-50/95 leading-relaxed">
                  このブログの内容は医療アドバイスではありません。ケトジェニックダイエットや食事の変更を検討される場合は、必ず主治医または専門医にご相談ください。双極性障害の治療において、自己判断による薬の変更・中止は危険です。本ブログを参考にした行動による結果について、運営者は一切の責任を負いかねます。
                </p>
              </div>
            </div>
          </LiquidGlassPanel>
        </section>

        {/* プライバシーポリシー */}
        <section
          className="mb-10"
          id="privacy"
          aria-labelledby="privacy-heading"
        >
          <LiquidGlassPanel className="p-6 sm:p-8 text-white/85 bg-stone-50/25 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-white/75"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h2
                id="privacy-heading"
                className="font-kosugi-maru text-lg font-bold text-white"
              >
                プライバシーポリシー
              </h2>
            </div>

            <div className="space-y-6 prose-about [&_p]:leading-relaxed">
              <div>
                <h3 className="font-kosugi-maru text-base font-semibold text-white/95 mb-2">
                  個人情報の収集について
                </h3>
                <p>
                  本ブログでは、お問い合わせフォームを通じてお名前・メールアドレスをお預かりすることがあります。これらの情報はお問い合わせへの回答にのみ使用し、第三者への提供は行いません。
                </p>
              </div>
              <div>
                <h3 className="font-kosugi-maru text-base font-semibold text-white/95 mb-2">
                  アクセス解析について
                </h3>
                <p>
                  本ブログではGoogle
                  Analyticsを使用してアクセス状況を把握しています。このツールはCookieを使用しますが、個人を特定する情報は収集されません。詳細はGoogleのプライバシーポリシーをご参照ください。
                </p>
              </div>
              <div>
                <h3 className="font-kosugi-maru text-base font-semibold text-white/95 mb-2">
                  広告について
                </h3>
                <p>
                  現在、本ブログでは商業広告の掲載や、特定の製品・サービスの有料プロモーションは行っていません。記事内で紹介する商品等は、すべて自費で購入し実際に使用した体験に基づいています。
                </p>
              </div>
              <div>
                <h3 className="font-kosugi-maru text-base font-semibold text-white/95 mb-2">
                  著作権について
                </h3>
                <p>
                  本ブログに掲載されているテキスト・画像等の著作権は運営者に帰属します。引用・転載の際は出典の明記をお願いします。
                </p>
              </div>
              <p className="text-xs text-white/45">最終更新：2025年5月1日</p>
            </div>
          </LiquidGlassPanel>
        </section>

        {/* お問い合わせ */}
        {/* <section id="contact" aria-labelledby="contact-heading">
          <LiquidGlassPanel className="p-6 sm:p-8 text-white/85 bg-stone-50/25 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-green-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2
                id="contact-heading"
                className="font-kosugi-maru text-lg font-bold text-white"
              >
                お問い合わせ
              </h2>
            </div>
            <p className="text-sm text-white/80 leading-relaxed mb-6">
              記事の感想、同じ体験をお持ちの方からのメッセージ、取材・メディア関連のお問い合わせなど、こちらのフォームからお気軽にご連絡ください。すべてのメッセージを読んでいますが、返信まで数日かかる場合があります。
            </p>

            <form action="#" method="post" className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/90 mb-1.5"
                  >
                    お名前 <span className="text-red-500 text-xs">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="山田 太郎"
                    className="w-full px-4 py-2.5 text-sm bg-white/95 border border-white/25 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-white transition"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/90 mb-1.5"
                  >
                    メールアドレス{" "}
                    <span className="text-red-500 text-xs">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="example@email.com"
                    className="w-full px-4 py-2.5 text-sm bg-white/95 border border-white/25 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-white transition"
                    aria-required="true"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white/90 mb-1.5"
                >
                  件名
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="お問い合わせの件名"
                  className="w-full px-4 py-2.5 text-sm bg-white/95 border border-white/25 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-white transition"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-white/90 mb-1.5"
                >
                  お問い合わせの種類
                </label>
                <select
                  id="category"
                  name="category"
                  className="w-full px-4 py-2.5 text-sm bg-white/95 border border-white/25 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-white transition appearance-none"
                >
                  <option value="">選択してください</option>
                  <option value="experience">同じ体験・感想のシェア</option>
                  <option value="question">ブログ内容への質問</option>
                  <option value="media">取材・メディア関連</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/90 mb-1.5"
                >
                  メッセージ <span className="text-red-500 text-xs">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="メッセージをご記入ください..."
                  className="w-full px-4 py-2.5 text-sm bg-white/95 border border-white/25 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-white transition resize-y"
                  aria-required="true"
                ></textarea>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  required
                  className="mt-0.5 w-4 h-4 rounded border-white/40 bg-white/10 text-green-600 focus:ring-green-400 cursor-pointer"
                  aria-required="true"
                />
                <label
                  htmlFor="agree"
                  className="text-xs text-white/75 leading-relaxed cursor-pointer"
                >
                  <a href="#privacy" className="text-green-300 hover:underline">
                    プライバシーポリシー
                  </a>
                  に同意した上で送信します。
                </label>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-8 py-3 rounded-xl transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-transparent"
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
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                メッセージを送る
              </button>
            </form>
          </LiquidGlassPanel>
        </section> */}
      </div>
    </>
  );
}
