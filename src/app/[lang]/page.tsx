import { getDictionary } from "@/app/[lang]/dictionaries";
import { Hero } from "@/components/sections/hero";

export default async function Home({
  params,
}: {
  params: { lang: "en-US" | "de" };
}) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return (
    <main className="flex flex-col">
      <Hero dict={dict} />
    </main>
  );
}
