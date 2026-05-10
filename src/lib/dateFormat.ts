const TOKYO: Pick<Intl.DateTimeFormatOptions, "timeZone"> = {
  timeZone: "Asia/Tokyo",
};

/** 一覧カード用（例: 2026年5月10日（日） 9:00）— クライアントでも利用可 */
export function formatPostCardDate(iso: string): string {
  const d = new Date(iso);
  const datePart = new Intl.DateTimeFormat("ja-JP", {
    ...TOKYO,
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
  const weekday = new Intl.DateTimeFormat("ja-JP", {
    ...TOKYO,
    weekday: "narrow",
  }).format(d);
  const timePart = new Intl.DateTimeFormat("ja-JP", {
    ...TOKYO,
    hour: "numeric",
    minute: "numeric",
  }).format(d);
  return `${datePart}（${weekday}） ${timePart}`;
}

export function formatFullDate(iso: string): string {
  return new Intl.DateTimeFormat("ja-JP", {
    dateStyle: "long",
    timeZone: "Asia/Tokyo",
  }).format(new Date(iso));
}
