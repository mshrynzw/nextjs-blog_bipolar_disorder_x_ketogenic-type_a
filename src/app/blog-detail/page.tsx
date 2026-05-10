export default function BlogDetail() {
  return (
    <>
      {/* パンくず */}
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <nav
            className="flex items-center gap-2 text-xs text-gray-400"
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
            <a href="blog-list" className="hover:text-gray-600 transition">
              Blog
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
            <span className="text-gray-600 truncate max-w-xs">
              ケトジェニック8ヶ月経過
            </span>
          </nav>
        </div>
      </div>

      {/* 記事レイアウト（PC：2カラム / モバイル：1カラム） */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 lg:py-14 bg-stone-50/25 backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          {/* メイン記事エリア */}
          <article className="flex-1 min-w-0">
            {/* 記事ヘッダー */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-medium text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
                  振り返り
                </span>
                <span className="text-xs text-gray-400 bg-stone-100 px-2 py-0.5 rounded-full">
                  #体重変化
                </span>
                <span className="text-xs text-gray-400 bg-stone-100 px-2 py-0.5 rounded-full">
                  #気分の波
                </span>
                <span className="text-xs text-gray-400 bg-stone-100 px-2 py-0.5 rounded-full">
                  #薬との兼ね合い
                </span>
              </div>
              <h1 className="font-kosugi-maru text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
                ケトジェニック8ヶ月経過——双極症の症状は変わったのか正直に記録する
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-100 pb-6 border-b border-stone-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xs">
                    K
                  </div>
                  <span>keto_bipolar</span>
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
                  <time dateTime="2025-05-01">2025年5月1日</time>
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
                  <span>約8分で読めます</span>
                </div>
              </div>
            </header>

            {/* 記事本文 */}
            <div className="prose-custom text-white">
              <p>
                ケトジェニックダイエットを始めてから、ちょうど8ヶ月が経ちました。双極性障害（2型）を抱えながら、食事療法だけで何かが変わるのかを試してきた記録を、今月はまとめてお伝えします。
              </p>
              <p>
                結論から言うと、「良いことも悪いことも両方あった」です。すべてが改善したような夢のような話ではないし、かといって完全に無意味でもなかった。リアルな体験を包み隠さず書きます。
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-6 text-xs text-amber-800 leading-relaxed">
                <strong className="block mb-1">⚠ ご注意</strong>
                この記事は当事者の個人的な体験記録です。医療上のアドバイスではありません。ケトジェニックダイエットの実践や変更は必ず主治医に相談してください。
              </div>

              <h2 id="section-1">開始時の状況と目標設定</h2>
              <p>
                昨年の9月から開始しました。当時の状態は、軽度の抑うつ相が続いており、気力の低下・過眠・糖質への強い渇望がありました。主治医には事前に話し、反対はされませんでしたが「様子をみながら」という条件付きで了承してもらいました。
              </p>
              <p>目標は以下の3点に絞りました。</p>
              <ul>
                <li>気分の波（エピソード間隔）を少し安定させたい</li>
                <li>過眠と体重増加を改善したい</li>
                <li>糖質への強い渇望を弱めたい</li>
              </ul>

              <h2 id="section-2">体重と身体的変化</h2>
              <h3>体重の推移</h3>
              <p>
                開始から4ヶ月で約6kgの減量に成功しました。その後は横ばいになり、現在は開始時から-5.5kg前後で推移しています。薬（バルプロ酸）の影響で体重が落ちにくい体質のため、このペースは予想より良い結果でした。
              </p>
              <h3>エネルギーレベルの変化</h3>
              <p>
                開始後2〜3週間は「ケトフルー」と呼ばれる体調不良がありました。頭がぼんやりし、疲労感が増す時期です。この時期に挫折しそうになりましたが、乗り越えた後は午後の強い眠気が減りました。
              </p>

              <blockquote>
                4ヶ月目頃から、午後2〜4時の「どうしても眠くなる時間帯」が消えていることに気がつきました。この変化は正直予想していなかったので驚きました。
              </blockquote>

              <h2 id="section-3">気分の波への影響</h2>
              <p>
                これが最も気になっていた部分であり、最もデータが取りにくい部分でもあります。8ヶ月間、毎日「気分スコア」を1〜10で記録してきました。主観的な変化としては以下のとおりです。
              </p>
              <ul>
                <li>鬱相の「底」が少し浅くなった感覚がある</li>
                <li>躁転は1回あった（軽度）</li>
                <li>混合期が1回あり、そちらの方がしんどかった</li>
                <li>全体のエピソード間隔はほぼ変化なし</li>
              </ul>
              <p>
                「劇的な改善」とは言えませんが、鬱の深さが少し和らいだ可能性は感じています。ただしこれは薬の調整とも重なる時期があったため、ケトジェニック単独の効果とは断言できません。
              </p>

              <h2 id="section-4">薬との兼ね合い</h2>
              <p>
                服用しているバルプロ酸とラモトリギンは、ケトジェニックとの相互作用について注意が必要です。主治医と毎月の受診のたびに確認し、血中濃度の検査も行っています。今のところ値に異常はありません。
              </p>

              <h2 id="section-5">続けるうえでの課題と工夫</h2>
              <h3>外食の難しさ</h3>
              <p>
                日本の外食はほぼ炭水化物中心です。定食屋さんではご飯を断り、おかずだけにしてもらったり、焼き鳥や刺身がある居酒屋を選ぶなど工夫しています。
              </p>
              <h3>鬱期の食事継続</h3>
              <p>
                気力がないときは「ゆで卵とアボカド」だけで乗り切ることも多いです。食事を複雑にしないことが継続の鍵だと気づきました。
              </p>

              <h2 id="section-6">今後の方針</h2>
              <p>
                9ヶ月目以降も継続しながら、引き続き記録を続けます。次の3ヶ月は「睡眠の質」に特化したデータを収集したいと思っています。気分スコアとの相関が見えてきそうな予感がしています。
              </p>
              <p>
                同じような経験をされている方がいれば、ぜひコメントや問い合わせで教えてください。孤独な実験も、誰かと情報を共有できると少し楽になります。
              </p>
            </div>

            {/* SNSシェア */}
            <div className="mt-10 pt-8 border-t border-stone-100">
              <p className="text-sm font-medium text-gray-700 mb-3">
                この記事をシェアする
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-medium text-white bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-xl transition"
                  aria-label="Twitterでシェア"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X でシェア
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition"
                  aria-label="Facebookでシェア"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
                <button
                  //   onClick={() => navigator.clipboard.writeText(location.href)}
                  className="inline-flex items-center gap-2 text-xs font-medium text-gray-700 bg-stone-100 hover:bg-stone-200 px-4 py-2 rounded-xl transition"
                  aria-label="URLをコピー"
                >
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
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  URLをコピー
                </button>
              </div>
            </div>

            {/* 前後の記事ナビ */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="blog-detail"
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
                  鬱期でも続けられたケトジェニックの工夫3つ
                </span>
              </a>
              <a
                href="blog-detail"
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
                  主治医にケトジェニックを話したらどう反応されたか
                </span>
              </a>
            </div>

            {/* 関連記事 */}
            <section className="mt-12" aria-labelledby="related-heading">
              <h2
                id="related-heading"
                className="font-kosugi-maru text-xl font-bold text-gray-900 mb-6"
              >
                関連記事
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <article className="bg-white rounded-xl border border-stone-100 p-4 card-hover">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-full">
                      食事記録
                    </span>
                    <time className="text-xs text-gray-400 ml-auto">
                      4月22日
                    </time>
                  </div>
                  <h3 className="font-kosugi-maru text-sm font-bold text-gray-900 mb-2 hover:text-green-700 transition leading-snug">
                    <a href="blog-detail">
                      鬱期でも続けられたケトジェニックの工夫3つ
                    </a>
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                    気力が落ちている時期でも食事を崩さないためにやっていること。
                  </p>
                </article>
                <article className="bg-white rounded-xl border border-stone-100 p-4 card-hover">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-violet-700 bg-violet-50 border border-violet-200 px-2 py-0.5 rounded-full">
                      睡眠・体調
                    </span>
                    <time className="text-xs text-gray-400 ml-auto">
                      4月8日
                    </time>
                  </div>
                  <h3 className="font-kosugi-maru text-sm font-bold text-gray-900 mb-2 hover:text-green-700 transition leading-snug">
                    <a href="blog-detail">
                      糖質制限を始めて睡眠の質が変わった話
                    </a>
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                    90日分のデータを公開。深睡眠の割合が目に見えて変化した時期の考察。
                  </p>
                </article>
              </div>
            </section>
          </article>

          {/* サイドバー（PC sticky目次） */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* 目次 */}
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
                    <li>
                      <a
                        href="#section-1"
                        className="toc-link text-xs text-gray-600 block leading-relaxed"
                      >
                        1. 開始時の状況と目標設定
                      </a>
                    </li>
                    <li>
                      <a
                        href="#section-2"
                        className="toc-link text-xs text-gray-600 block leading-relaxed"
                      >
                        2. 体重と身体的変化
                      </a>
                    </li>
                    <li>
                      <a
                        href="#section-3"
                        className="toc-link text-xs text-gray-600 block leading-relaxed"
                      >
                        3. 気分の波への影響
                      </a>
                    </li>
                    <li>
                      <a
                        href="#section-4"
                        className="toc-link text-xs text-gray-600 block leading-relaxed"
                      >
                        4. 薬との兼ね合い
                      </a>
                    </li>
                    <li>
                      <a
                        href="#section-5"
                        className="toc-link text-xs text-gray-600 block leading-relaxed"
                      >
                        5. 続けるうえでの課題と工夫
                      </a>
                    </li>
                    <li>
                      <a
                        href="#section-6"
                        className="toc-link text-xs text-gray-600 block leading-relaxed"
                      >
                        6. 今後の方針
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>

              {/* 著者カード */}
              <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-sm flex-shrink-0">
                    K
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      keto_bipolar
                    </p>
                    <p className="text-xs text-gray-500">当事者・記録者</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  双極性障害2型と診断されて7年。2024年9月からケトジェニックを開始。日々の変化を記録しています。
                </p>
              </div>

              {/* タグクラウド */}
              <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5">
                <h2 className="font-kosugi-maru text-sm font-bold text-gray-900 mb-3">
                  タグ
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  <a
                    href="blog-list"
                    className="text-xs text-gray-500 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-full transition"
                  >
                    #気分の波
                  </a>
                  <a
                    href="blog-list"
                    className="text-xs text-gray-500 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-full transition"
                  >
                    #体重変化
                  </a>
                  <a
                    href="blog-list"
                    className="text-xs text-gray-500 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-full transition"
                  >
                    #鬱期
                  </a>
                  <a
                    href="blog-list"
                    className="text-xs text-gray-500 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-full transition"
                  >
                    #薬
                  </a>
                  <a
                    href="blog-list"
                    className="text-xs text-gray-500 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-full transition"
                  >
                    #睡眠
                  </a>
                  <a
                    href="blog-list"
                    className="text-xs text-gray-500 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-full transition"
                  >
                    #主治医
                  </a>
                  <a
                    href="blog-list"
                    className="text-xs text-gray-500 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-full transition"
                  >
                    #レシピ
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
