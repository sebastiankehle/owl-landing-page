import { getDictionary } from "@/lib/dictionary";
import { Hero } from "@/components/sections/hero";

interface PageProps {
  params: {
    lang: string;
  };
}

export default async function Home({ params }: PageProps) {
  const dict = await getDictionary(params.lang);

  return (
    <main className="flex flex-col">
      <Hero dict={dict} />
    </main>
  );
}
