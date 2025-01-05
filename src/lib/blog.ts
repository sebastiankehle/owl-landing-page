import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

export interface PostMetadata {
  title: string;
  excerpt: string;
  date: string;
}

export interface PostData extends PostMetadata {
  id: string;
  contentHtml: string;
}

export async function getPostData(id: string, lang: string): Promise<PostData> {
  const fullPath = path.join(
    process.cwd(),
    "src/content/blog",
    lang,
    `${id}.md`,
  );
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(remarkHtml).process(content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(data as PostMetadata),
  };
}

export async function getPostMetadata(
  id: string,
  lang: string,
): Promise<PostMetadata> {
  const fullPath = path.join(
    process.cwd(),
    "src/content/blog",
    lang,
    `${id}.md`,
  );
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  return data as PostMetadata;
}
