import { getDictionary } from "@/app/[lang]/dictionaries";
import { Hero } from "@/components/sections/hero";
import { TechSlider } from "@/components/sections/tech-slider";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <main className="flex flex-col">
      <Hero dictionary={dictionary} />
      <TechSlider />
    </main>
  );
}
