# 双極症とケトジェニック（Next.js ブログ）

双極症とケトジェニック食事療法をテーマにした静的ブログサイトです。記事本文は `content/posts` の Markdown で管理し、ビルド時に HTML に変換して公開します。

## 概要

- **フレームワーク**: Next.js App Router（記事詳細は `generateStaticParams` により静的生成）
- **スタイリング**: Tailwind CSS v4
- **コンテンツ**: Gray Matter（frontmatter）+ unified（remark / rehype）による Markdown → HTML
- **ビジュアル**: Three.js ベースのオーロラ背景、Liquid Glass 風 UI、GSAP / Lenis など

## 必要条件

- **Node.js**: 現在の Next.js（16.x）がサポートする LTS 版を推奨（例: Node 20 以上）
- **パッケージマネージャ**: このリポジトリでは `npm` を想定（`package-lock.json` がある場合は `npm ci` が利用可能）

## セットアップ

リポジトリのルートで依存関係をインストールします。

```bash
npm install
```

開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

## 環境変数

プロジェクトルートに `.env`（または `.env.local`）を置き、公開用メタデータに使う値を設定します。未設定時は `src/lib/site.ts` のデフォルトが使われます。

| 変数名 | 説明 |
|--------|------|
| `NEXT_PUBLIC_SITE_URL` | 本番サイトのオリジン。**末尾スラッシュなし**（例: `https://example.com`）。OGP・絶対 URL 生成に使用 |
| `NEXT_PUBLIC_SITE_AUTHOR` | サイト運営者・著者表示名。レイアウトのメタデータや、記事 frontmatter で `author` が無いときの既定著者名 |

開発時はローカル向けに例えば次のようにしても構いません。

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_AUTHOR=your-name
```

## npm スクリプト

| コマンド | 説明 |
|----------|------|
| `npm run dev` | 開発サーバー（`next dev`） |
| `npm run build` | 本番ビルド（`next build`） |
| `npm run start` | 本番サーバー（ビルド後に `next start`） |
| `npm run lint` | ESLint |
| `npm run format` | Prettier でコード整形 |
| `npm run format:check` | Prettier のチェックのみ |

## 記事の追加・編集

### 保存場所

- 記事ファイル: `content/posts/*.md`
- ファイル名は自由ですが、拡張子は `.md` です。`slug` を frontmatter で明示しない場合、ファイル名（`.md` を除く）がスラッグとして使われます。

### Frontmatter（必須・推奨）

記事の先頭に YAML 形式で記述します。**リストに載る・詳細ページが生成されるには `title` と `publishedAt` が必須**です（`src/lib/posts.ts` の判定）。

| フィールド | 必須 | 説明 |
|------------|------|------|
| `title` | はい | 記事タイトル |
| `publishedAt` | はい | ISO 8601 形式の公開日時（例: `2026-05-12T09:00:00+09:00`） |
| `slug` | いいえ | URL 用スラッグ。省略時はファイル名ベース |
| `updatedAt` | いいえ | 更新日時 |
| `genre` | いいえ | ジャンル表示用（省略時は `"記事"`） |
| `tags` | いいえ | 文字列の配列 |
| `description` | いいえ | メタ説明文・一覧用 |
| `author` | いいえ | 著者名（省略時は `NEXT_PUBLIC_SITE_AUTHOR` またはサイト既定） |

### 本文と Markdown

- **GFM**: テーブルや取り消し線など GitHub Flavored Markdown が有効です。
- **見出し ID**: `rehype-slug` により見出しにアンカー ID が付きます。
- **目次**: 本文の `##`（レベル2見出し）が目次候補として抽出されます。

### 静的生成

`src/app/blog-detail/[slug]/page.tsx` で `generateStaticParams` が記事スラッグ一覧からパスを生成します。新規記事を追加したあと本番では `npm run build` をやり直すと、その記事のページが静的出力に含まれます。

## 主要なソース構成（参考）

| パス | 内容 |
|------|------|
| `src/app/page.tsx` | トップページ |
| `src/app/blog-list/` | 記事一覧（検索・フィルタ UI を含む） |
| `src/app/blog-detail/[slug]/` | 記事詳細（静的パラメータ生成） |
| `src/app/about/` | About |
| `src/lib/posts.ts` | 記事の読み込み・Markdown 変換・メタデータ集約 |
| `src/lib/site.ts` | サイト URL・著者名の解決 |
| `src/components/background/aurora.tsx` | 背景の Three.js オーロラ |
| `src/components/LiquidGlass*.tsx` | Liquid Glass 風カード／パネル |
| `next.config.ts` | `.glsl` を `raw-loader` で読み込む設定（Turbopack / webpack） |

## その他

- **シェーダ**: `*.glsl` は文字列としてインポートする設定になっています（`next.config.ts`）。
- **この README に書かれたパスや挙動は、コード変更とずれる場合があります**。挙動の正確な仕様は各ファイルの実装を参照してください。

## ライセンス・注意

このリポジトリのライセンス表記が別途無い場合は、利用条件はリポジトリ所有者に確認してください。医療・栄養に関する記事は一般情報であり、個人の診断や治療の代替にはなりません。
