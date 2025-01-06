import { getDictionary } from "@/app/[lang]/dictionaries";
import { ServicesOverview } from "@/components/sections/services/services-overview";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <section className="flex flex-col">
      <ServicesOverview dictionary={dictionary.services} />
    </section>
  );
}
