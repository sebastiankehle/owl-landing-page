import { blogPosts } from "@/data/blogPosts";
import { getPostData } from "@/lib/blog";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";

export default async function BlogPost({
  params,
}: {
  params: { lang: string; year: string; month: string; slug: string };
}) {
  const { lang, slug } = params;
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    return notFound();
  }

  const postData = await getPostData(slug, lang);

  return (
    <article className="container py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-3xl font-semibold md:text-4xl">
          {postData.title}
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          {new Date(post.date).toLocaleDateString(lang, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <div
          className={cn(
            "prose dark:prose-invert max-w-none",
            // Custom styles to match our design system
            "prose-headings:font-semibold prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4",
            "prose-p:text-base prose-p:text-muted-foreground prose-p:leading-relaxed",
            "prose-blockquote:border-l-4 prose-blockquote:border-primary/50 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground",
            "prose-ul:text-muted-foreground prose-ul:list-disc prose-ul:pl-4",
            "prose-li:text-muted-foreground prose-li:my-1",
            "prose-strong:text-foreground prose-strong:font-semibold",
          )}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </div>
    </article>
  );
}
