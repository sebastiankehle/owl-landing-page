import { getDictionary } from "@/app/[lang]/dictionaries";
import { Gallery } from "@/components/sections/about/gallery";
import { Story } from "@/components/sections/about/story";
import { Timeline } from "@/components/sections/about/timeline";

export default async function AboutPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col">
      <Story dictionary={dictionary.about} />
      <Timeline dictionary={dictionary.about} />
      <Gallery dictionary={dictionary.about} />
    </div>
  );
}
