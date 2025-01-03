import { getDictionary } from "@/app/[lang]/dictionaries";
import { Hero } from "@/components/sections/hero";
import { TechSlider } from "@/components/sections/tech-slider";
import { Benefits } from "@/components/sections/benefits";
import { Services } from "@/components/sections/services";
import { Industries } from "@/components/sections/industries";

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
      <Benefits dictionary={dictionary} />
      <Services dictionary={dictionary} />
      <Industries dictionary={dictionary} />
    </main>
  );
}
