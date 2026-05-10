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

export function getPostSlugs(): string[] {
  const slugs: string[] = [];
  for (const file of readPostsDir()) {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    const { data } = matter(raw);
    const fm = data as Partial<PostFrontmatter>;
    slugs.push(fm.slug ?? file.replace(/\.md$/, ""));
  }
  return slugs;
}

export type PostListItem = {
  slug: string;
  publishedAt: string;
  title: string;
  genre: string;
};

export function getAllPostsMeta(): PostListItem[] {
  const items: PostListItem[] = [];
  for (const file of readPostsDir()) {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    const { data } = matter(raw);
    const fm = data as Partial<PostFrontmatter>;
    const slug = fm.slug ?? file.replace(/\.md$/, "");
    if (fm.title && fm.publishedAt) {
      items.push({
        slug,
        publishedAt: fm.publishedAt,
        title: fm.title,
        genre: fm.genre ?? "記事",
      });
    }
  }
  items.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  return items;
}

export function getDefaultPostSlug(): string | null {
  const meta = getAllPostsMeta();
  return meta[0]?.slug ?? null;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  for (const file of readPostsDir()) {
    const fullPath = path.join(POSTS_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);
    const fm = data as PostFrontmatter;
    const resolvedSlug = fm.slug ?? file.replace(/\.md$/, "");
    if (resolvedSlug !== slug) continue;

    const html = await markdownToHtml(content);
    return {
      slug: resolvedSlug,
      frontmatter: fm,
      content,
      html,
      readingMinutes: estimateReadingMinutes(content),
      toc: extractToc(content),
    };
  }
  return null;
}
