import { ReactNode } from "react";
import { BlogSidebar } from "@/components/sections/blog/blog-sidebar";
import { getDictionary } from "@/app/[lang]/dictionaries";

interface BlogLayoutProps {
  children: ReactNode;
  params: { lang: string };
}

export default async function BlogLayout({
  children,
  params,
}: BlogLayoutProps) {
  const dictionary = await getDictionary(params.lang);

  return (
    <div className="container py-24">
      <div className="grid gap-8 md:grid-cols-[1fr_300px]">
        {children}
        <aside className="space-y-8">
          <BlogSidebar dictionary={dictionary.blog.sidebar} />
        </aside>
      </div>
    </div>
  );
}
