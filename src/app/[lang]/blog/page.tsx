import { blogPosts } from "@/data/blogPosts";
import { getPostMetadata } from "@/lib/blog";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { BlogOverview } from "@/components/sections/blog/blog-overview";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  // Only show posts that have a translation for the current language
  const availablePosts = blogPosts.filter((post) =>
    post.translations.includes(lang),
  );

  const postsWithMetadata = await Promise.all(
    availablePosts.map(async (post) => ({
      ...post,
      metadata: await getPostMetadata(post.id, lang),
    })),
  );

  return (
    <BlogOverview
      posts={postsWithMetadata}
      dictionary={dictionary}
      lang={lang}
    />
  );
}
