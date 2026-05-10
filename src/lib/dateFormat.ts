/** 一覧カード用の短い日付（例: 5月10日）— クライアントでも利用可 */
export function formatPostCardDate(iso: string): string {
  return new Intl.DateTimeFormat("ja-JP", {
    month: "long",
    day: "numeric",
    timeZone: "Asia/Tokyo",
  }).format(new Date(iso));
}

export function formatFullDate(iso: string): string {
  return new Intl.DateTimeFormat("ja-JP", {
    dateStyle: "long",
    timeZone: "Asia/Tokyo",
  }).format(new Date(iso));
}
