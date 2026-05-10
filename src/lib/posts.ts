import fs from "fs";
import path from "path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export type PostFrontmatter = {
  title: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  genre: string;
  tags: string[];
  author: string;
  description: string;
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  html: string;
  readingMinutes: number;
  toc: { id: string; title: string }[];
};

function estimateReadingMinutes(markdownBody: string): number {
  const text = markdownBody.replace(/\s+/g, "");
  return Math.max(1, Math.ceil([...text].length / 400));
}

function extractToc(markdownBody: string): { id: string; title: string }[] {
  const slugger = new GithubSlugger();
  const toc: { id: string; title: string }[] = [];
  for (const line of markdownBody.split("\n")) {
    const m = /^##\s+(.+)$/.exec(line.trim());
    if (m) {
      toc.push({ id: slugger.slug(m[1]), title: m[1] });
    }
  }
  return toc;
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(markdown);
  return String(file);
}

function readPostsDir(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
}

/** `getAllPostsMeta` と同じ条件で有効な記事だけを静的生成対象にする */
export function getPostSlugs(): string[] {
  return getAllPostsMeta().map((p) => p.slug);
}

export type PostListItem = {
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  title: string;
  genre: string;
  tags: string[];
  description: string;
};

export function getLatestPostTimestamp(posts: PostListItem[]): number {
  let max = 0;
  for (const p of posts) {
    const t = new Date(p.updatedAt ?? p.publishedAt).getTime();
    if (t > max) max = t;
  }
  return max;
}

export function getAllPostsMeta(): PostListItem[] {
  const items: PostListItem[] = [];
  for (const file of readPostsDir()) {
    let raw: string;
    try {
      raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data } = matter(raw);
      const fm = data as Partial<PostFrontmatter>;
      const slug = fm.slug ?? file.replace(/\.md$/, "");
      if (!fm.title || !fm.publishedAt) continue;

      const tags = Array.isArray(fm.tags)
        ? fm.tags.filter((t): t is string => typeof t === "string")
        : [];

      items.push({
        slug,
        publishedAt: fm.publishedAt,
        updatedAt: fm.updatedAt,
        title: fm.title,
        genre: fm.genre ?? "記事",
        tags,
        description: fm.description ?? "",
      });
    } catch {
      continue;
    }
  }
  items.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  return items;
}

const MS_PER_DAY = 86_400_000;

/**
 * 公開日が最も早い記事から、公開日が最も新しい記事までの経過日数。
 * 記事が 1 件のみのときは 0。記事が無いときは null。
 */
export function getPublishedSpanDays(posts: PostListItem[]): number | null {
  if (posts.length === 0) return null;
  const times = posts.map((p) => new Date(p.publishedAt).getTime());
  const min = Math.min(...times);
  const max = Math.max(...times);
  return Math.floor((max - min) / MS_PER_DAY);
}

export function getDefaultPostSlug(): string | null {
  const meta = getAllPostsMeta();
  return meta[0]?.slug ?? null;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  for (const file of readPostsDir()) {
    const fullPath = path.join(POSTS_DIR, file);
    let raw: string;
    try {
      raw = fs.readFileSync(fullPath, "utf8");
    } catch {
      continue;
    }
    const { data, content } = matter(raw);
    const fm = data as Partial<PostFrontmatter>;
    const resolvedSlug = fm.slug ?? file.replace(/\.md$/, "");
    if (resolvedSlug !== slug) continue;
    if (!fm.title || !fm.publishedAt) continue;

    const frontmatter: PostFrontmatter = {
      title: fm.title,
      slug: resolvedSlug,
      publishedAt: fm.publishedAt,
      updatedAt: fm.updatedAt,
      genre: fm.genre ?? "記事",
      tags: Array.isArray(fm.tags)
        ? fm.tags.filter((t): t is string => typeof t === "string")
        : [],
      author: fm.author ?? "",
      description: fm.description ?? "",
    };

    const html = await markdownToHtml(content);
    return {
      slug: resolvedSlug,
      frontmatter,
      content,
      html,
      readingMinutes: estimateReadingMinutes(content),
      toc: extractToc(content),
    };
  }
  return null;
}
