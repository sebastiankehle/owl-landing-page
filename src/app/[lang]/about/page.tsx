import { getDictionary } from "@/app/[lang]/dictionaries";
import { AboutHero } from "@/components/sections/about/hero";
import { Story } from "@/components/sections/about/story";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <AboutHero dictionary={dictionary.about} />
      <Story dictionary={dictionary.about} />
    </>
  );
}
