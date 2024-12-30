import { getDictionary } from "@/app/[lang]/dictionaries";
import { AboutHero } from "@/components/sections/about/hero";
import { Story } from "@/components/sections/about/story";
import { Timeline } from "@/components/sections/about/timeline";

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
      <Timeline dictionary={dictionary.about} />
    </>
  );
}
