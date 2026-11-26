export type BlogEntry = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readingTime: string;
  cover?: string;
  video?: string;
  body: string;
};

const sourceFiles = import.meta.glob("./*.md", { eager: true, query: "?raw", import: "default" }) as Record<string, string>;

function parseFrontmatter(source: string) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return null;
  const fields = Object.fromEntries(match[1].split(/\r?\n/).map((line) => {
    const colon = line.indexOf(":");
    return colon < 0 ? [line, ""] : [line.slice(0, colon).trim(), line.slice(colon + 1).trim()];
  }));
  return { fields, body: match[2] };
}

export const blogEntries: BlogEntry[] = Object.entries(sourceFiles).flatMap(([path, source]) => {
  const parsed = parseFrontmatter(source);
  const slug = path.split("/").pop()?.replace(/\.md$/, "") ?? "";
  if (!parsed || slug.startsWith("_") || parsed.fields.draft === "true") return [];
  return [{
    slug,
    title: parsed.fields.title || slug,
    date: parsed.fields.date || "",
    excerpt: parsed.fields.excerpt || "",
    category: parsed.fields.category || "Notes",
    readingTime: parsed.fields.readingTime || "",
    cover: parsed.fields.cover || undefined,
    video: parsed.fields.video || undefined,
    body: parsed.body,
  }];
}).sort((a, b) => b.date.localeCompare(a.date));
