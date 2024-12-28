import { getDictionary } from "@/lib/dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  console.log(dict);
  return (
    <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start"></main>
  );
}
