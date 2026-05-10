const DEFAULT_SITE_URL = "https://bipolar-ketogenic.com";
const DEFAULT_SITE_AUTHOR = "keto_bipolar";

/** サイト運営者・著者表示名（`NEXT_PUBLIC_SITE_AUTHOR`、未設定時は `keto_bipolar`） */
export function getSiteAuthor(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_AUTHOR;
  const trimmed = typeof raw === "string" ? raw.trim() : "";
  return trimmed || DEFAULT_SITE_AUTHOR;
}

/** 末尾スラッシュなしのサイトオリジン（例: https://bipolar-ketogenic.com） */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
  return raw.replace(/\/+$/, "");
}

/** パスから絶対URLを組み立てる（path は先頭に / を付けてもよい） */
export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const segment = path.startsWith("/") ? path : `/${path}`;
  return `${base}${segment}`;
}
