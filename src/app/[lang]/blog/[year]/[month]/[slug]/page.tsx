import { blogPosts } from "@/data/blogPosts";
import { getPostData } from "@/lib/blog";
import { notFound } from "next/navigation";
import { BlogPostContent } from "@/components/sections/blog/blog-post-content";
import { BlogShare } from "@/components/sections/blog/blog-share";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ lang: string; year: string; month: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const dictionary = await getDictionary(lang);
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    return notFound();
  }

  const postData = await getPostData(slug, lang);
  const url = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-xl font-semibold sm:text-2xl">
          <span className="flex flex-col">
            <span className="text-foreground">{postData.title}</span>
            <span className="text-muted-foreground">
              {dictionary.blog.article}
            </span>
          </span>
        </h1>
        <BlogShare title={postData.title} url={url} />
      </div>
      <BlogPostContent post={post} postData={postData} lang={lang} />
    </div>
  );
}
