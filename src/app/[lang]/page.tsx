import { getDictionary } from "@/lib/dictionary";
import { Hero } from "@/components/sections/hero";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <main className="flex flex-col">
      <Hero dict={dict} />
    </main>
  );
}
