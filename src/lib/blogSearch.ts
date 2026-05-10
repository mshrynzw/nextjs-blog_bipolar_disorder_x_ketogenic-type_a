import type { PostListItem } from "./posts";

/** クエリを空白で分割したトークン（空は除外） */
export function tokenizeSearchQuery(query: string): string[] {
  return query
    .trim()
    .split(/\s+/)
    .map((t) => t.trim())
    .filter(Boolean);
}

/**
 * OR 検索: トークンのうちどれか 1 つでも、検索対象文字列に含まれれば一致。
 * トークンが無ければ常に一致（絞り込みなし）。
 */
export function postMatchesOrTokens(
  post: PostListItem,
  tokens: string[],
): boolean {
  if (tokens.length === 0) return true;
  const haystack = [
    post.title,
    post.description,
    post.genre,
    post.slug,
    ...post.tags,
  ]
    .join("\n")
    .toLowerCase();
  return tokens.some((token) => haystack.includes(token.toLowerCase()));
}

export function filterPostsOrSearch(
  posts: PostListItem[],
  query: string,
): PostListItem[] {
  const tokens = tokenizeSearchQuery(query);
  if (tokens.length === 0) return posts;
  return posts.filter((p) => postMatchesOrTokens(p, tokens));
}
